#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, stat, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createEnvExample, writeFileWithSafety } from "@stackfoundry/generator";
import {
  createRegistryPaths,
  getModule as loadModule,
  getPreset as loadPreset,
  hashContent,
  hashFile,
  listFiles,
  listModuleNames,
  readJson,
  readRegistryItem as loadRegistryItem,
} from "@stackfoundry/registry";
import {
  isEnvVarName,
  isKebabCase,
  requiredModuleFields,
  requiredPresetFields,
  validModuleStatuses,
  validModuleTypes,
  validRegistryFileTypes,
} from "@stackfoundry/schema";
import { isHttpUrl, isRegistryItemSpecifier, toPosixPath } from "@stackfoundry/utils";

const __filename = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(__filename), "../../..");
const { modulesRoot, presetsRoot } = createRegistryPaths(repoRoot);

function usage() {
  console.log(`StackFoundry

Usage:
  stackfoundry list
  stackfoundry presets
  stackfoundry validate
  stackfoundry doctor
  stackfoundry build
  stackfoundry add preset <name> [--target <dir>] [--dry-run] [--force]
  stackfoundry add <module> [--target <dir>] [--dry-run] [--force]
  stackfoundry add <registry-item-url-or-file> [--target <dir>] [--dry-run] [--force]
  stackfoundry diff <module> [--target <dir>]
  stackfoundry diff <registry-item-url-or-file> [--target <dir>]

Examples:
  stackfoundry add api-keys --target ./app
  stackfoundry add preset vendor-examples --target ./app
  stackfoundry add https://stackfoundry.dev/r/api-keys.json --target ./app
  stackfoundry add public/r/vendor-examples.json --target ./app
`);
}

function parseArgs(argv) {
  const [command, firstArg, ...tail] = argv;
  let moduleName = firstArg;
  let presetName;
  const rest = tail;
  const flags = { target: process.cwd(), dryRun: false, force: false };

  if (command === "add" && firstArg === "preset") {
    presetName = rest.shift();
    moduleName = undefined;
  }

  for (let i = 0; i < rest.length; i += 1) {
    const arg = rest[i];
    if (arg === "--target") {
      flags.target = path.resolve(rest[++i]);
    } else if (arg === "--dry-run") {
      flags.dryRun = true;
    } else if (arg === "--force") {
      flags.force = true;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return { command, moduleName, presetName, flags };
}

async function readRegistryItem(specifier) {
  return loadRegistryItem(repoRoot, specifier);
}

async function getModule(name) {
  return loadModule(modulesRoot, name);
}

async function getPreset(name) {
  return loadPreset(presetsRoot, name);
}

async function validateModule(moduleDir) {
  const manifestPath = path.join(moduleDir, "module.json");
  const manifest = await readJson(manifestPath);
  const errors = [];
  const moduleName = path.basename(moduleDir);

  for (const field of requiredModuleFields) {
    if (!(field in manifest)) errors.push(`missing field: ${field}`);
  }
  if (manifest.name !== moduleName) errors.push(`manifest name must match directory: ${moduleName}`);
  if (!isKebabCase(manifest.name)) errors.push("name must be kebab-case");
  if (!validModuleTypes.has(manifest.type)) errors.push("type must be module, integration, or page");
  if (!validModuleStatuses.has(manifest.status)) {
    errors.push("status must be planned, experimental, or stable");
  }
  if (!Array.isArray(manifest.files)) errors.push("files must be an array");
  if (!Array.isArray(manifest.dependencies)) errors.push("dependencies must be an array");
  if (!Array.isArray(manifest.devDependencies)) errors.push("devDependencies must be an array");
  if (!Array.isArray(manifest.registryDependencies)) errors.push("registryDependencies must be an array");
  if (!Array.isArray(manifest.env)) errors.push("env must be an array");
  for (const key of manifest.env ?? []) {
    if (!isEnvVarName(key)) errors.push(`env var must be SCREAMING_SNAKE_CASE: ${key}`);
  }

  const filesDir = path.join(moduleDir, "files");
  const sourceFiles = await listFiles(filesDir);
  const relativeFiles = sourceFiles.map((file) => toPosixPath(path.relative(filesDir, file)));
  const declaredFiles = new Set();

  for (const file of manifest.files ?? []) {
    if (!file.path) errors.push("file entry missing path");
    if (!validRegistryFileTypes.has(file.type)) {
      errors.push(`${file.path}: unsupported file type ${file.type}`);
    }
    if (declaredFiles.has(file.path)) errors.push(`duplicate file declaration: ${file.path}`);
    declaredFiles.add(file.path);
  }
  for (const file of relativeFiles) {
    if (!declaredFiles.has(file)) errors.push(`files/ contains undeclared file: ${file}`);
  }
  for (const file of manifest.files) {
    if (!existsSync(path.join(filesDir, file.path))) errors.push(`declared file does not exist: ${file.path}`);
  }

  const docsPath = path.join(moduleDir, "docs.md");
  const checklistPath = path.join(moduleDir, "tests", "checklist.md");
  const skillPath = path.join(moduleDir, "skill", "SKILL.md");
  if (!existsSync(docsPath)) errors.push("missing docs.md");
  if (!existsSync(checklistPath)) errors.push("missing tests/checklist.md");
  if (!existsSync(skillPath)) {
    errors.push("missing skill/SKILL.md");
  } else {
    const skill = await readFile(skillPath, "utf8");
    if (!skill.includes(`name: ${manifest.name}`)) errors.push("skill frontmatter name must match manifest");
    if (!skill.includes("description:")) errors.push("skill frontmatter missing description");
  }
  if (existsSync(docsPath)) {
    const docs = await readFile(docsPath, "utf8");
    if (/authored|generated by|research process/i.test(docs)) {
      errors.push("docs.md must not reference authoring tools or research process");
    }
  }

  return { manifest, errors };
}

async function getModuleInstallFiles(name, visited = new Set()) {
  if (visited.has(name)) return [];
  visited.add(name);

  const { dir, manifest } = await getModule(name);
  const files = [];
  for (const dependency of manifest.registryDependencies) {
    files.push(...(await getModuleInstallFiles(dependency, visited)));
  }

  const filesDir = path.join(dir, "files");
  for (const filePath of await listFiles(filesDir)) {
    const relative = toPosixPath(path.relative(filesDir, filePath));
    files.push({ moduleName: name, path: relative, hash: await hashFile(filePath) });
  }

  const skillPath = path.join(dir, "skill", "SKILL.md");
  if (existsSync(skillPath)) {
    files.push({
      moduleName: name,
      path: `.agents/skills/${name}/SKILL.md`,
      hash: await hashFile(skillPath),
    });
  }

  if (manifest.env.length > 0) {
    const content = createEnvExample(manifest.env);
    files.push({
      moduleName: name,
      path: `.env.stackfoundry.${name}.example`,
      hash: hashContent(content),
    });
  }

  return files;
}

async function validateRegistry() {
  const registry = await readJson(path.join(repoRoot, "registry.json"));
  const itemNames = new Set();
  const moduleDirs = [];
  const errors = [];

  for (const name of await readdir(modulesRoot)) {
    const fullPath = path.join(modulesRoot, name);
    if ((await stat(fullPath)).isDirectory()) {
      moduleDirs.push(fullPath);
    }
  }

  for (const item of registry.items ?? []) {
    if (itemNames.has(item.name)) errors.push(`registry.json: duplicate item ${item.name}`);
    itemNames.add(item.name);
    if (item.type !== "registry:block") errors.push(`${item.name}: registry item type must be registry:block`);
  }

  for (const moduleDir of moduleDirs) {
    const { manifest, errors: moduleErrors } = await validateModule(moduleDir);
    if (!itemNames.has(manifest.name)) {
      errors.push(`${manifest.name}: missing from registry.json`);
    }
    for (const dependency of manifest.registryDependencies) {
      if (!existsSync(path.join(modulesRoot, dependency, "module.json"))) {
        errors.push(`${manifest.name}: unknown registry dependency ${dependency}`);
      }
      if (dependency === manifest.name) {
        errors.push(`${manifest.name}: cannot depend on itself`);
      }
    }
    for (const error of moduleErrors) {
      errors.push(`${manifest.name}: ${error}`);
    }
  }

  if (existsSync(presetsRoot)) {
    for (const file of await readdir(presetsRoot)) {
      if (!file.endsWith(".json")) continue;
      const preset = await readJson(path.join(presetsRoot, file));
      for (const field of requiredPresetFields) {
        if (!(field in preset)) errors.push(`${file}: missing field: ${field}`);
      }
      if (!Array.isArray(preset.modules)) errors.push(`${file}: modules must be an array`);
      const presetModules = new Set();
      for (const moduleName of preset.modules ?? []) {
        if (presetModules.has(moduleName)) errors.push(`${file}: duplicate module ${moduleName}`);
        presetModules.add(moduleName);
        if (!existsSync(path.join(modulesRoot, moduleName, "module.json"))) {
          errors.push(`${file}: unknown module ${moduleName}`);
        }
      }
      const installFiles = new Map();
      for (const moduleName of preset.modules ?? []) {
        if (!existsSync(path.join(modulesRoot, moduleName, "module.json"))) continue;
        for (const fileInfo of await getModuleInstallFiles(moduleName)) {
          const existing = installFiles.get(fileInfo.path);
          if (existing && existing.hash !== fileInfo.hash) {
            errors.push(
              `${file}: ${fileInfo.path} collision between ${existing.moduleName} and ${fileInfo.moduleName}`
            );
          }
          if (!existing) installFiles.set(fileInfo.path, fileInfo);
        }
      }
    }
  }

  return errors;
}

async function listModules() {
  const names = await listModuleNames(modulesRoot);
  for (const name of names.sort()) {
    const { manifest } = await getModule(name);
    console.log(`${manifest.name.padEnd(18)} ${manifest.status.padEnd(12)} ${manifest.description}`);
  }
}

async function listPresets() {
  if (!existsSync(presetsRoot)) return;
  const files = (await readdir(presetsRoot)).filter((file) => file.endsWith(".json")).sort();
  for (const file of files) {
    const preset = await readJson(path.join(presetsRoot, file));
    console.log(`${preset.name.padEnd(18)} ${preset.status.padEnd(12)} ${preset.description}`);
  }
}

async function loadInstallManifest(target) {
  const filePath = path.join(target, ".stackfoundry", "installed.json");
  if (!existsSync(filePath)) return { modules: {} };
  return readJson(filePath);
}

async function saveInstallManifest(target, manifest) {
  const dir = path.join(target, ".stackfoundry");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "installed.json"), `${JSON.stringify(manifest, null, 2)}\n`);
}

async function addModule(name, flags, visited = new Set()) {
  if (visited.has(name)) return;
  visited.add(name);

  const { dir, manifest } = await getModule(name);
  for (const dependency of manifest.registryDependencies) {
    await addModule(dependency, flags, visited);
  }

  const filesDir = path.join(dir, "files");
  const sourceFiles = await listFiles(filesDir);
  const installed = await loadInstallManifest(flags.target);
  const installedFiles = {};

  for (const source of sourceFiles) {
    const relative = path.relative(filesDir, source);
    const normalized = toPosixPath(relative);
    const content = await readFile(source, "utf8");
    const sourceHash = hashContent(content);

    await writeFileWithSafety({
      sourceHash,
      content,
      relative,
      target: flags.target,
      flags,
      hashFile,
    });

    installedFiles[normalized] = sourceHash;
  }

  const skillPath = path.join(dir, "skill", "SKILL.md");
  if (existsSync(skillPath)) {
    const dest = path.join(flags.target, ".agents", "skills", name, "SKILL.md");
    if (!flags.dryRun) {
      await mkdir(path.dirname(dest), { recursive: true });
      await copyFile(skillPath, dest);
    }
    installedFiles[".agents/skills/" + name + "/SKILL.md"] = await hashFile(skillPath);
    console.log(`${flags.dryRun ? "would write" : "wrote"} .agents/skills/${name}/SKILL.md`);
  }

  if (manifest.env.length > 0) {
    const envPath = path.join(flags.target, `.env.stackfoundry.${name}.example`);
    const content = createEnvExample(manifest.env);
    if (!flags.dryRun) await writeFile(envPath, content);
    installedFiles[`.env.stackfoundry.${name}.example`] = hashContent(content);
    console.log(`${flags.dryRun ? "would write" : "wrote"} .env.stackfoundry.${name}.example`);
  }

  if (!flags.dryRun) {
    installed.modules[name] = {
      installedAt: new Date().toISOString(),
      files: installedFiles,
      dependencies: manifest.dependencies,
      devDependencies: manifest.devDependencies,
      env: manifest.env,
    };
    await saveInstallManifest(flags.target, installed);
  }
}

async function addPreset(name, flags) {
  if (!name) throw new Error("add preset requires a preset name");
  const preset = await getPreset(name);
  const visited = new Set();
  console.log(`${flags.dryRun ? "would install" : "installing"} preset ${preset.name}`);
  for (const moduleName of preset.modules) {
    await addModule(moduleName, flags, visited);
  }
}

async function addRegistryItem(specifier, flags, visited = new Set()) {
  const item = await readRegistryItem(specifier);
  const itemId = isHttpUrl(specifier) ? specifier : path.resolve(specifier);

  if (visited.has(itemId)) return;
  visited.add(itemId);

  if (item.type !== "registry:block") {
    throw new Error(`${item.name ?? specifier}: expected registry:block`);
  }

  for (const dependency of item.registryDependencies ?? []) {
    await addRegistryItem(dependency, flags, visited);
  }

  const installed = await loadInstallManifest(flags.target);
  const installedFiles = {};
  console.log(`${flags.dryRun ? "would install" : "installing"} registry item ${item.name}`);

  for (const file of item.files ?? []) {
    if (!file.content) throw new Error(`${item.name}: ${file.path} is missing embedded content`);

    const relative = file.target ?? file.path;
    const sourceHash = hashContent(file.content);
    await writeFileWithSafety({
      sourceHash,
      content: file.content,
      relative,
      target: flags.target,
      flags,
      hashFile,
    });
    installedFiles[relative] = sourceHash;
  }

  const envVars = Object.keys(item.envVars ?? {});
  if (envVars.length > 0) {
    const relative = `.env.stackfoundry.${item.name}.example`;
    const content = createEnvExample(envVars);
    const sourceHash = hashContent(content);
    await writeFileWithSafety({ sourceHash, content, relative, target: flags.target, flags, hashFile });
    installedFiles[relative] = sourceHash;
  }

  if (!flags.dryRun) {
    installed.modules[item.name] = {
      installedAt: new Date().toISOString(),
      files: installedFiles,
      dependencies: item.dependencies ?? [],
      devDependencies: item.devDependencies ?? [],
      env: envVars,
      source: specifier,
    };
    await saveInstallManifest(flags.target, installed);
  }
}

async function diffModule(name, flags) {
  const { dir } = await getModule(name);
  const filesDir = path.join(dir, "files");
  const sourceFiles = await listFiles(filesDir);
  let changes = 0;

  for (const source of sourceFiles) {
    const relative = path.relative(filesDir, source);
    const dest = path.join(flags.target, relative);
    if (!existsSync(dest)) {
      console.log(`missing  ${relative}`);
      changes += 1;
      continue;
    }
    if ((await hashFile(source)) !== (await hashFile(dest))) {
      console.log(`changed  ${relative}`);
      changes += 1;
    } else {
      console.log(`same     ${relative}`);
    }
  }

  process.exitCode = changes > 0 ? 1 : 0;
}

async function diffRegistryItem(specifier, flags, visited = new Set()) {
  const item = await readRegistryItem(specifier);
  const itemId = isHttpUrl(specifier) ? specifier : path.resolve(specifier);
  if (visited.has(itemId)) return;
  visited.add(itemId);

  let changes = 0;
  for (const dependency of item.registryDependencies ?? []) {
    await diffRegistryItem(dependency, flags, visited);
  }

  for (const file of item.files ?? []) {
    const relative = file.target ?? file.path;
    const dest = path.join(flags.target, relative);
    if (!existsSync(dest)) {
      console.log(`missing  ${relative}`);
      changes += 1;
      continue;
    }
    const sourceHash = hashContent(file.content ?? "");
    if ((await hashFile(dest)) !== sourceHash) {
      console.log(`changed  ${relative}`);
      changes += 1;
    } else {
      console.log(`same     ${relative}`);
    }
  }

  process.exitCode = changes > 0 ? 1 : process.exitCode;
}

async function buildRegistry() {
  const outputDir = path.join(repoRoot, "public", "r");
  await mkdir(outputDir, { recursive: true });

  const registry = await readJson(path.join(repoRoot, "registry.json"));
  const registryBaseUrl = registry.homepage?.startsWith("http") ? registry.homepage.replace(/\/$/, "") : undefined;
  const toRegistryDependency = (name) => (registryBaseUrl ? `${registryBaseUrl}/r/${name}.json` : name);
  const builtItems = [];

  for (const item of registry.items) {
    const { manifest } = await getModule(item.name);
    builtItems.push({
      name: manifest.name,
      type: "registry:block",
      title: manifest.title,
      description: manifest.description,
      dependencies: manifest.dependencies,
      devDependencies: manifest.devDependencies,
      registryDependencies: manifest.registryDependencies.map(toRegistryDependency),
      files: manifest.files.map((file) => ({ ...file, target: file.path })),
      meta: {
        category: manifest.category,
        env: manifest.env,
        status: manifest.status,
      },
    });
  }

  const builtRegistry = { ...registry, items: builtItems };

  await writeFile(path.join(outputDir, "registry.json"), `${JSON.stringify(builtRegistry, null, 2)}\n`);

  const presetsOutputDir = path.join(outputDir, "presets");
  await mkdir(presetsOutputDir, { recursive: true });
  if (existsSync(presetsRoot)) {
    for (const file of (await readdir(presetsRoot)).filter((entry) => entry.endsWith(".json")).sort()) {
      const preset = await readJson(path.join(presetsRoot, file));
      await copyFile(path.join(presetsRoot, file), path.join(presetsOutputDir, file));
      console.log(`built public/r/presets/${file}`);

      const presetOutputPath = path.join(outputDir, `${preset.name}.json`);
      if (!existsSync(path.join(modulesRoot, preset.name, "module.json"))) {
        await writeFile(
          presetOutputPath,
          `${JSON.stringify(
            {
              "$schema": "https://ui.shadcn.com/schema/registry-item.json",
              name: preset.name,
              type: "registry:block",
              title: preset.title,
              description: preset.description,
              registryDependencies: preset.modules.map(toRegistryDependency),
              files: [],
              docs: `Installs the ${preset.title} preset from StackFoundry.`,
              meta: {
                category: "preset",
                status: preset.status,
                modules: preset.modules,
              },
            },
            null,
            2
          )}\n`
        );
        console.log(`built public/r/${preset.name}.json`);
      }
    }
  }

  for (const item of registry.items) {
    const { dir, manifest } = await getModule(item.name);
    const filesDir = path.join(dir, "files");
    const files = [];
    const docsPath = path.join(dir, "docs.md");

    for (const file of manifest.files) {
      const source = path.join(filesDir, file.path);
      files.push({
        path: file.path,
        type: file.type,
        target: file.path,
        content: await readFile(source, "utf8"),
      });
    }

    const registryItem = {
      "$schema": "https://ui.shadcn.com/schema/registry-item.json",
      name: manifest.name,
      type: "registry:block",
      title: manifest.title,
      description: manifest.description,
      dependencies: manifest.dependencies,
      devDependencies: manifest.devDependencies,
      registryDependencies: manifest.registryDependencies.map(toRegistryDependency),
      files,
      envVars: Object.fromEntries(manifest.env.map((key) => [key, ""])),
      docs: existsSync(docsPath) ? await readFile(docsPath, "utf8") : undefined,
      meta: {
        category: manifest.category,
        env: manifest.env,
        status: manifest.status,
        agents: manifest.agents,
        drizzle: manifest.drizzle,
      },
    };

    await writeFile(path.join(outputDir, `${manifest.name}.json`), `${JSON.stringify(registryItem, null, 2)}\n`);
    console.log(`built public/r/${manifest.name}.json`);
  }

  console.log("built public/r/registry.json");
}

async function main() {
  const { command, moduleName, presetName, flags } = parseArgs(process.argv.slice(2));

  if (!command || command === "help" || command === "--help") {
    usage();
    return;
  }

  if (command === "list") return listModules();
  if (command === "presets") return listPresets();
  if (command === "build") return buildRegistry();
  if (command === "validate" || command === "doctor") {
    const errors = await validateRegistry();
    if (errors.length > 0) {
      for (const error of errors) console.error(`error: ${error}`);
      process.exitCode = 1;
    } else {
      console.log(command === "doctor" ? "registry doctor ok" : "registry ok");
    }
    return;
  }

  if (command === "add" && presetName) return addPreset(presetName, flags);
  if (!moduleName) throw new Error(`${command} requires a module name`);
  if (command === "add" && isRegistryItemSpecifier(moduleName)) return addRegistryItem(moduleName, flags);
  if (command === "add") return addModule(moduleName, flags);
  if (command === "diff" && isRegistryItemSpecifier(moduleName)) return diffRegistryItem(moduleName, flags);
  if (command === "diff") return diffModule(moduleName, flags);

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(`error: ${error.message}`);
  process.exit(1);
});
