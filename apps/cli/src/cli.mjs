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

const requiredModuleFields = ["name", "type", "category", "title", "description", "files", "status"];

function usage() {
  console.log(`StackFoundry

Usage:
  stackfoundry list
  stackfoundry validate
  stackfoundry build
  stackfoundry add <module> [--target <dir>] [--dry-run] [--force]
  stackfoundry diff <module> [--target <dir>]
`);
}

function parseArgs(argv) {
  const [command, moduleName, ...rest] = argv;
  const flags = { target: process.cwd(), dryRun: false, force: false };

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

  return { command, moduleName, flags };
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

async function validateModule(moduleDir) {
  const manifestPath = path.join(moduleDir, "module.json");
  const manifest = await readJson(manifestPath);
  const errors = [];

  for (const field of requiredModuleFields) {
    if (!(field in manifest)) errors.push(`missing field: ${field}`);
  }
  if (!Array.isArray(manifest.files)) errors.push("files must be an array");
  if (!Array.isArray(manifest.dependencies)) errors.push("dependencies must be an array");
  if (!Array.isArray(manifest.devDependencies)) errors.push("devDependencies must be an array");
  if (!Array.isArray(manifest.registryDependencies)) errors.push("registryDependencies must be an array");
  if (!Array.isArray(manifest.env)) errors.push("env must be an array");

  const filesDir = path.join(moduleDir, "files");
  const sourceFiles = await listFiles(filesDir);
  const relativeFiles = sourceFiles.map((file) => path.relative(filesDir, file).split(path.sep).join("/"));
  const declaredFiles = new Set(manifest.files.map((file) => file.path));

  for (const file of relativeFiles) {
    if (!declaredFiles.has(file)) errors.push(`files/ contains undeclared file: ${file}`);
  }
  for (const file of manifest.files) {
    if (!existsSync(path.join(filesDir, file.path))) errors.push(`declared file does not exist: ${file.path}`);
  }

  return { manifest, errors };
}

async function validateRegistry() {
  const registry = await readJson(path.join(repoRoot, "registry.json"));
  const itemNames = new Set(registry.items.map((item) => item.name));
  const moduleDirs = (await readdir(modulesRoot)).map((name) => path.join(modulesRoot, name));
  const errors = [];

  for (const moduleDir of moduleDirs) {
    const { manifest, errors: moduleErrors } = await validateModule(moduleDir);
    if (!itemNames.has(manifest.name)) {
      errors.push(`${manifest.name}: missing from registry.json`);
    }
    for (const dependency of manifest.registryDependencies) {
      if (!existsSync(path.join(modulesRoot, dependency, "module.json"))) {
        errors.push(`${manifest.name}: unknown registry dependency ${dependency}`);
      }
    }
    for (const error of moduleErrors) {
      errors.push(`${manifest.name}: ${error}`);
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

async function addModule(name, flags) {
  const { dir, manifest } = await getModule(name);
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
      type: item.type,
      title: item.title,
      description: item.description,
    })),
  };

  await writeFile(path.join(outputDir, "registry.json"), `${JSON.stringify(builtRegistry, null, 2)}\n`);

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
      type: item.type,
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
  const { command, moduleName, flags } = parseArgs(process.argv.slice(2));

  if (!command || command === "help" || command === "--help") {
    usage();
    return;
  }

  if (command === "list") return listModules();
  if (command === "build") return buildRegistry();
  if (command === "validate") {
    const errors = await validateRegistry();
    if (errors.length > 0) {
      for (const error of errors) console.error(`error: ${error}`);
      process.exitCode = 1;
    } else {
      console.log("registry ok");
    }
    return;
  }

  if (!moduleName) throw new Error(`${command} requires a module name`);
  if (command === "add") return addModule(moduleName, flags);
  if (command === "diff") return diffModule(moduleName, flags);

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(`error: ${error.message}`);
  process.exit(1);
});
