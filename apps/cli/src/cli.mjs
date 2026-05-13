#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, stat, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(__filename), "../../..");
const registryRoot = path.join(repoRoot, "registry");
const modulesRoot = path.join(registryRoot, "modules");
const presetsRoot = path.join(registryRoot, "presets");

const requiredModuleFields = ["name", "type", "category", "title", "description", "files", "status"];
const requiredPresetFields = ["name", "title", "description", "modules", "status"];

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
  stackfoundry diff <module> [--target <dir>]
`);
}

function parseArgs(argv) {
  const [command, firstArg, ...tail] = argv;
  let moduleName = firstArg;
  let presetName;
  let rest = tail;
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

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function hashFile(filePath) {
  const content = await readFile(filePath);
  return createHash("sha256").update(content).digest("hex");
}

async function listFiles(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir);
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry);
    const info = await stat(full);
    if (info.isDirectory()) {
      files.push(...(await listFiles(full)));
    } else {
      files.push(full);
    }
  }

  return files;
}

async function getModule(name) {
  const modulePath = path.join(modulesRoot, name, "module.json");
  if (!existsSync(modulePath)) {
    throw new Error(`Unknown module: ${name}`);
  }
  return {
    dir: path.dirname(modulePath),
    manifest: await readJson(modulePath),
  };
}

async function getPreset(name) {
  const presetPath = path.join(presetsRoot, `${name}.json`);
  if (!existsSync(presetPath)) {
    throw new Error(`Unknown preset: ${name}`);
  }
  return readJson(presetPath);
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
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(manifest.name ?? "")) errors.push("name must be kebab-case");
  if (!["module", "integration", "page"].includes(manifest.type)) errors.push("type must be module, integration, or page");
  if (!["planned", "experimental", "stable"].includes(manifest.status)) {
    errors.push("status must be planned, experimental, or stable");
  }
  if (!Array.isArray(manifest.files)) errors.push("files must be an array");
  if (!Array.isArray(manifest.dependencies)) errors.push("dependencies must be an array");
  if (!Array.isArray(manifest.devDependencies)) errors.push("devDependencies must be an array");
  if (!Array.isArray(manifest.registryDependencies)) errors.push("registryDependencies must be an array");
  if (!Array.isArray(manifest.env)) errors.push("env must be an array");
  for (const key of manifest.env ?? []) {
    if (!/^[A-Z][A-Z0-9_]*$/.test(key)) errors.push(`env var must be SCREAMING_SNAKE_CASE: ${key}`);
  }

  const filesDir = path.join(moduleDir, "files");
  const sourceFiles = await listFiles(filesDir);
  const relativeFiles = sourceFiles.map((file) => path.relative(filesDir, file).split(path.sep).join("/"));
  const declaredFiles = new Set();

  for (const file of manifest.files ?? []) {
    if (!file.path) errors.push("file entry missing path");
    if (!["registry:file", "registry:page", "registry:component", "registry:hook"].includes(file.type)) {
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
    if (/authored|generated by|exa research|cursor/i.test(docs)) {
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
    const relative = path.relative(filesDir, filePath).split(path.sep).join("/");
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
    const content = manifest.env.map((key) => `${key}=`).join("\n") + "\n";
    files.push({
      moduleName: name,
      path: `.env.stackfoundry.${name}.example`,
      hash: createHash("sha256").update(content).digest("hex"),
    });
  }

  return files;
}

async function validateRegistry() {
  const registry = await readJson(path.join(repoRoot, "registry.json"));
  const itemNames = new Set();
  const moduleDirs = (await readdir(modulesRoot)).map((name) => path.join(modulesRoot, name));
  const errors = [];

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
  const names = await readdir(modulesRoot);
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
    const dest = path.join(flags.target, relative);
    const destExists = existsSync(dest);

    if (destExists) {
      const same = (await hashFile(source)) === (await hashFile(dest));
      if (!same && !flags.force) {
        throw new Error(`Refusing to overwrite modified file: ${relative}. Use --force or inspect with diff.`);
      }
    }

    if (!flags.dryRun) {
      await mkdir(path.dirname(dest), { recursive: true });
      if (destExists && flags.force) {
        await copyFile(dest, `${dest}.stackfoundry.bak`);
      }
      await copyFile(source, dest);
    }

    installedFiles[relative.split(path.sep).join("/")] = await hashFile(source);
    console.log(`${flags.dryRun ? "would write" : "wrote"} ${relative}`);
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
    const content = manifest.env.map((key) => `${key}=`).join("\n") + "\n";
    if (!flags.dryRun) await writeFile(envPath, content);
    installedFiles[`.env.stackfoundry.${name}.example`] = createHash("sha256").update(content).digest("hex");
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

async function buildRegistry() {
  const outputDir = path.join(repoRoot, "public", "r");
  await mkdir(outputDir, { recursive: true });

  const registry = await readJson(path.join(repoRoot, "registry.json"));
  const builtRegistry = {
    ...registry,
    items: registry.items.map((item) => ({
      name: item.name,
      type: "registry:block",
      title: item.title,
      description: item.description,
    })),
  };

  await writeFile(path.join(outputDir, "registry.json"), `${JSON.stringify(builtRegistry, null, 2)}\n`);

  const presetsOutputDir = path.join(outputDir, "presets");
  await mkdir(presetsOutputDir, { recursive: true });
  if (existsSync(presetsRoot)) {
    for (const file of (await readdir(presetsRoot)).filter((entry) => entry.endsWith(".json")).sort()) {
      await copyFile(path.join(presetsRoot, file), path.join(presetsOutputDir, file));
      console.log(`built public/r/presets/${file}`);
    }
  }

  for (const item of registry.items) {
    const { dir, manifest } = await getModule(item.name);
    const filesDir = path.join(dir, "files");
    const files = [];

    for (const file of manifest.files) {
      const source = path.join(filesDir, file.path);
      files.push({
        path: file.path,
        type: file.type,
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
      registryDependencies: manifest.registryDependencies,
      files,
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
  if (command === "add") return addModule(moduleName, flags);
  if (command === "diff") return diffModule(moduleName, flags);

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(`error: ${error.message}`);
  process.exit(1);
});
