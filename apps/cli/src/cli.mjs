#!/usr/bin/env node
import { createEnvExample, writeFileWithSafety } from "@stackfoundry/generator";
import {
  createRegistryPaths,
  hashContent,
  hashFile,
  listFiles,
  listModuleNames,
  getModule as loadModule,
  getPreset as loadPreset,
  readRegistryItem as loadRegistryItem,
  readJson,
} from "@stackfoundry/registry";
import {
  isEnvVarName,
  isUnsafePublicEnvName,
  isKebabCase,
  requiredModuleFields,
  requiredPresetFields,
  validModuleCategories,
  validModuleStatuses,
  validModuleTypes,
  validRegistryFileTypes,
} from "@stackfoundry/schema";
import { isHttpUrl, isRegistryItemSpecifier, toPosixPath } from "@stackfoundry/utils";
import { existsSync } from "node:fs";
import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(__filename), "../../..");
const { modulesRoot, presetsRoot, skillsRoot, webPublicRegistryRoot } =
  createRegistryPaths(repoRoot);
const defaultSkillsTarget = ".stackfoundry/skills";
const registryIndexSchema = "https://ui.shadcn.com/schema/registry.json";
const registryItemSchema = "https://ui.shadcn.com/schema/registry-item.json";

function usage() {
  console.log(`StackFoundry

Usage:
  stackfoundry list [--category <name>] [--status <status>]
  stackfoundry categories
  stackfoundry presets
  stackfoundry search <query>
  stackfoundry info <module>
  stackfoundry validate
  stackfoundry doctor
  stackfoundry build
  stackfoundry add preset <name> [--target <dir>] [--dry-run] [--force]
  stackfoundry add <module> [--target <dir>] [--dry-run] [--force]
  stackfoundry add <registry-item-url-or-file> [--target <dir>] [--dry-run] [--force]
  stackfoundry diff <module> [--target <dir>]
  stackfoundry diff <registry-item-url-or-file> [--target <dir>]

Examples:
  stackfoundry categories
  stackfoundry list --category billing
  stackfoundry search webhook
  stackfoundry info stripe-billing
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

  if (command === "list" && firstArg?.startsWith("--")) {
    moduleName = undefined;
    rest.unshift(firstArg);
  }

  for (let i = 0; i < rest.length; i += 1) {
    const arg = rest[i];
    if (arg === "--target") {
      flags.target = path.resolve(rest[++i]);
    } else if (arg === "--dry-run") {
      flags.dryRun = true;
    } else if (arg === "--force") {
      flags.force = true;
    } else if (arg === "--category") {
      flags.category = rest[++i];
    } else if (arg === "--status") {
      flags.status = rest[++i];
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

function normalizeSkillEntry(entry) {
  if (typeof entry === "string") {
    return { name: entry };
  }
  if (entry && typeof entry === "object") {
    return entry;
  }
  return undefined;
}

function getSkillEntries(manifest) {
  const entries = manifest.maintenance?.skills?.length ? manifest.maintenance.skills : [manifest.name];
  return entries.map(normalizeSkillEntry);
}

function isSafeRelativePath(value) {
  return (
    typeof value === "string" &&
    value.length > 0 &&
    !path.isAbsolute(value) &&
    !value.split(/[\\/]/).includes("..")
  );
}

function resolveSkillPath(moduleDir, manifest, skill) {
  if (skill.source) return path.join(moduleDir, skill.source);
  if (skill.name === manifest.name) return path.join(moduleDir, "skill", "SKILL.md");
  return path.join(skillsRoot, skill.name, "SKILL.md");
}

function resolveSkillTarget(skill) {
  return skill.target ?? `${defaultSkillsTarget}/${skill.name}/SKILL.md`;
}

async function readModuleMaintenanceSkills(moduleDir, manifest) {
  const skills = [];
  for (const skill of getSkillEntries(manifest)) {
    const source = resolveSkillPath(moduleDir, manifest, skill);
    skills.push({
      name: skill.name,
      target: resolveSkillTarget(skill),
      content: await readFile(source, "utf8"),
    });
  }
  return skills;
}

async function validateModule(moduleDir) {
  const manifestPath = path.join(moduleDir, "module.json");
  const manifest = await readJson(manifestPath);
  const errors = [];
  const moduleName = path.basename(moduleDir);

  for (const field of requiredModuleFields) {
    if (!(field in manifest)) errors.push(`missing field: ${field}`);
  }
  if (manifest.name !== moduleName)
    errors.push(`manifest name must match directory: ${moduleName}`);
  if (!isKebabCase(manifest.name)) errors.push("name must be kebab-case");
  if (!validModuleTypes.has(manifest.type))
    errors.push("type must be module, integration, or page");
  if (!validModuleCategories.has(manifest.category)) {
    errors.push(`category must be one of: ${[...validModuleCategories].sort().join(", ")}`);
  }
  if (!validModuleStatuses.has(manifest.status)) {
    errors.push("status must be planned, experimental, or stable");
  }
  if (!Array.isArray(manifest.files)) errors.push("files must be an array");
  if (!Array.isArray(manifest.dependencies)) errors.push("dependencies must be an array");
  if (!Array.isArray(manifest.devDependencies)) errors.push("devDependencies must be an array");
  if (!Array.isArray(manifest.registryDependencies))
    errors.push("registryDependencies must be an array");
  if (!Array.isArray(manifest.env)) errors.push("env must be an array");
  for (const key of manifest.env ?? []) {
    if (!isEnvVarName(key)) errors.push(`env var must be SCREAMING_SNAKE_CASE: ${key}`);
    if (isUnsafePublicEnvName(key)) {
      errors.push(`public env var must not expose secret-like values: ${key}`);
    }
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
    if (!existsSync(path.join(filesDir, file.path)))
      errors.push(`declared file does not exist: ${file.path}`);
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
    if (!skill.includes(`name: ${manifest.name}`))
      errors.push("skill frontmatter name must match manifest");
    if (!skill.includes("description:")) errors.push("skill frontmatter missing description");
  }
  for (const [index, skill] of getSkillEntries(manifest).entries()) {
    if (!skill) {
      errors.push(`maintenance.skills[${index}] must be a string or object`);
      continue;
    }
    if (!isKebabCase(skill.name))
      errors.push(`maintenance.skills[${index}].name must be kebab-case`);
    if (skill.source && !isSafeRelativePath(skill.source)) {
      errors.push(`${skill.name}: skill source must be a safe relative path`);
    }
    const target = resolveSkillTarget(skill);
    if (!isSafeRelativePath(target) || !target.endsWith("/SKILL.md")) {
      errors.push(`${skill.name}: skill target must be a safe relative path ending in /SKILL.md`);
    }
    const source = resolveSkillPath(moduleDir, manifest, skill);
    if (!existsSync(source)) {
      errors.push(
        `${skill.name}: missing skill source ${skill.source ?? path.relative(repoRoot, source)}`,
      );
      continue;
    }
    const content = await readFile(source, "utf8");
    if (!content.includes(`name: ${skill.name}`))
      errors.push(`${skill.name}: skill frontmatter name must match skill name`);
    if (!content.includes("description:"))
      errors.push(`${skill.name}: skill frontmatter missing description`);
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

  for (const skill of await readModuleMaintenanceSkills(dir, manifest)) {
    files.push({
      moduleName: name,
      path: skill.target,
      hash: hashContent(skill.content),
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
    if (item.type !== "registry:block")
      errors.push(`${item.name}: registry item type must be registry:block`);
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
              `${file}: ${fileInfo.path} collision between ${existing.moduleName} and ${fileInfo.moduleName}`,
            );
          }
          if (!existing) installFiles.set(fileInfo.path, fileInfo);
        }
      }
    }
  }

  return errors;
}

const categoryLabels = {
  ai: "AI",
  analytics: "Analytics",
  api: "API",
  auth: "Auth",
  backend: "Backend",
  billing: "Billing",
  communications: "Communications",
  compliance: "Compliance",
  components: "Components",
  content: "Content",
  database: "Database",
  deploy: "Deploy",
  "developer-platform": "Developer Platform",
  devops: "DevOps",
  docs: "Docs",
  edge: "Edge",
  email: "Email",
  foundation: "Foundation",
  growth: "Growth",
  iac: "IaC",
  integrations: "Integrations",
  marketing: "Marketing",
  media: "Media",
  networking: "Networking",
  notifications: "Notifications",
  observability: "Observability",
  operations: "Operations",
  platform: "Platform",
  "project-management": "Project Management",
  queue: "Queue",
  search: "Search",
  security: "Security",
  storage: "Storage",
  support: "Support",
  tenancy: "Tenancy",
  workflow: "Workflow",
};

function categoryLabel(category) {
  return categoryLabels[category] ?? category;
}

function formatCount(count, singular, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}

async function readAllModuleManifests() {
  const names = await listModuleNames(modulesRoot);
  const modules = [];
  for (const name of names) {
    const { manifest } = await getModule(name);
    modules.push(manifest);
  }
  return modules.sort((a, b) => a.name.localeCompare(b.name));
}

function moduleMatchesQuery(manifest, query) {
  const haystack = [
    manifest.name,
    manifest.title,
    manifest.description,
    manifest.category,
    manifest.status,
    ...(manifest.dependencies ?? []),
    ...(manifest.devDependencies ?? []),
    ...(manifest.registryDependencies ?? []),
    ...(manifest.env ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function printModuleRow(manifest) {
  const category = categoryLabel(manifest.category).padEnd(20);
  const status = manifest.status.padEnd(12);
  console.log(`${manifest.name.padEnd(26)} ${category} ${status} ${manifest.description}`);
}

async function listModules(flags = {}) {
  let modules = await readAllModuleManifests();
  if (flags.category) {
    modules = modules.filter((manifest) => manifest.category === flags.category);
  }
  if (flags.status) {
    modules = modules.filter((manifest) => manifest.status === flags.status);
  }

  if (modules.length === 0) {
    console.log("No modules found.");
    return;
  }

  console.log(
    `StackFoundry modules (${formatCount(modules.length, "module")})${
      flags.category ? ` in ${categoryLabel(flags.category)}` : ""
    }${flags.status ? ` with status ${flags.status}` : ""}`,
  );
  console.log("");
  for (const manifest of modules) {
    printModuleRow(manifest);
  }
}

async function listCategories() {
  const modules = await readAllModuleManifests();
  const counts = new Map();
  for (const category of validModuleCategories) {
    counts.set(category, 0);
  }
  for (const manifest of modules) {
    counts.set(manifest.category, (counts.get(manifest.category) ?? 0) + 1);
  }

  console.log(`StackFoundry categories (${formatCount(counts.size, "category", "categories")})`);
  console.log("");
  for (const [category, count] of [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    console.log(`${category.padEnd(22)} ${String(count).padStart(3)}  ${categoryLabel(category)}`);
  }
  console.log("");
  console.log("Tip: stackfoundry list --category billing");
}

async function searchModules(query) {
  if (!query) throw new Error("search requires a query");
  const modules = (await readAllModuleManifests()).filter((manifest) =>
    moduleMatchesQuery(manifest, query),
  );
  console.log(`Search results for "${query}" (${formatCount(modules.length, "module")})`);
  console.log("");
  for (const manifest of modules) {
    printModuleRow(manifest);
  }
}

async function showModuleInfo(name) {
  if (!name) throw new Error("info requires a module name");
  const { manifest } = await getModule(name);
  console.log(`${manifest.title} (${manifest.name})`);
  console.log(manifest.description);
  console.log("");
  console.log(`category: ${manifest.category} (${categoryLabel(manifest.category)})`);
  console.log(`type:     ${manifest.type}`);
  console.log(`status:   ${manifest.status}`);
  if (manifest.registryDependencies.length > 0) {
    console.log(`registry deps: ${manifest.registryDependencies.join(", ")}`);
  }
  if (manifest.dependencies.length > 0) {
    console.log(`dependencies:  ${manifest.dependencies.join(", ")}`);
  }
  if (manifest.devDependencies.length > 0) {
    console.log(`dev deps:      ${manifest.devDependencies.join(", ")}`);
  }
  if (manifest.env.length > 0) {
    console.log(`env:           ${manifest.env.join(", ")}`);
  }
  if (getSkillEntries(manifest).length > 0) {
    console.log(
      `skills:        ${getSkillEntries(manifest)
        .map((skill) => skill.name)
        .join(", ")}`,
    );
  }
  console.log(`files:         ${formatCount(manifest.files.length, "file")}`);
  for (const file of manifest.files) {
    console.log(`  - ${file.path}`);
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
  const maintenanceSkills = await readModuleMaintenanceSkills(dir, manifest);
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

  for (const skill of maintenanceSkills) {
    const sourceHash = hashContent(skill.content);
    await writeFileWithSafety({
      sourceHash,
      content: skill.content,
      relative: skill.target,
      target: flags.target,
      flags,
      hashFile,
    });
    installedFiles[skill.target] = sourceHash;
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
      maintenanceSkills: maintenanceSkills.map((skill) => ({ name: skill.name, target: skill.target })),
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

  for (const skill of item.maintenanceSkills ?? []) {
    if (!skill.content)
      throw new Error(
        `${item.name}: ${skill.name ?? skill.target} is missing embedded skill content`,
      );
    const relative = skill.target ?? `${defaultSkillsTarget}/${skill.name}/SKILL.md`;
    const sourceHash = hashContent(skill.content);
    await writeFileWithSafety({
      sourceHash,
      content: skill.content,
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
    await writeFileWithSafety({
      sourceHash,
      content,
      relative,
      target: flags.target,
      flags,
      hashFile,
    });
    installedFiles[relative] = sourceHash;
  }

  if (!flags.dryRun) {
    installed.modules[item.name] = {
      installedAt: new Date().toISOString(),
      files: installedFiles,
      dependencies: item.dependencies ?? [],
      devDependencies: item.devDependencies ?? [],
      env: envVars,
      maintenanceSkills: (item.maintenanceSkills ?? []).map((skill) => ({
        name: skill.name,
        target: skill.target ?? `${defaultSkillsTarget}/${skill.name}/SKILL.md`,
      })),
      source: specifier,
    };
    await saveInstallManifest(flags.target, installed);
  }
}

async function diffModule(name, flags) {
  const { dir, manifest } = await getModule(name);
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

  for (const skill of await readModuleMaintenanceSkills(dir, manifest)) {
    const dest = path.join(flags.target, skill.target);
    if (!existsSync(dest)) {
      console.log(`missing  ${skill.target}`);
      changes += 1;
      continue;
    }
    const sourceHash = hashContent(skill.content);
    if ((await hashFile(dest)) !== sourceHash) {
      console.log(`changed  ${skill.target}`);
      changes += 1;
    } else {
      console.log(`same     ${skill.target}`);
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

  for (const skill of item.maintenanceSkills ?? []) {
    const relative = skill.target ?? `${defaultSkillsTarget}/${skill.name}/SKILL.md`;
    const dest = path.join(flags.target, relative);
    if (!existsSync(dest)) {
      console.log(`missing  ${relative}`);
      changes += 1;
      continue;
    }
    const sourceHash = hashContent(skill.content ?? "");
    if ((await hashFile(dest)) !== sourceHash) {
      console.log(`changed  ${relative}`);
      changes += 1;
    } else {
      console.log(`same     ${relative}`);
    }
  }

  process.exitCode = changes > 0 ? 1 : process.exitCode;
}

async function mirrorDirectory(sourceDir, targetDir) {
  await rm(targetDir, { recursive: true, force: true });
  await mkdir(targetDir, { recursive: true });

  for (const source of await listFiles(sourceDir)) {
    const relative = path.relative(sourceDir, source);
    const target = path.join(targetDir, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await copyFile(source, target);
  }
}

async function buildRegistry() {
  const outputDir = path.join(repoRoot, "public", "r");
  await mkdir(outputDir, { recursive: true });

  const registry = await readJson(path.join(repoRoot, "registry.json"));
  const registryBaseUrl = registry.homepage?.startsWith("http")
    ? registry.homepage.replace(/\/$/, "")
    : undefined;
  const toRegistryDependency = (name) =>
    registryBaseUrl ? `${registryBaseUrl}/r/${name}.json` : name;
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
    });
  }

  const builtRegistry = {
    $schema: registryIndexSchema,
    name: registry.name,
    homepage: registry.homepage,
    items: builtItems,
  };

  await writeFile(
    path.join(outputDir, "registry.json"),
    `${JSON.stringify(builtRegistry, null, 2)}\n`,
  );

  const presetsOutputDir = path.join(outputDir, "presets");
  await mkdir(presetsOutputDir, { recursive: true });
  if (existsSync(presetsRoot)) {
    for (const file of (await readdir(presetsRoot))
      .filter((entry) => entry.endsWith(".json"))
      .sort()) {
      const preset = await readJson(path.join(presetsRoot, file));
      await copyFile(path.join(presetsRoot, file), path.join(presetsOutputDir, file));
      console.log(`built public/r/presets/${file}`);

      const presetOutputPath = path.join(outputDir, `${preset.name}.json`);
      if (!existsSync(path.join(modulesRoot, preset.name, "module.json"))) {
        await writeFile(
          presetOutputPath,
          `${JSON.stringify(
            {
              $schema: registryItemSchema,
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
            2,
          )}\n`,
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
    const maintenanceSkills = await readModuleMaintenanceSkills(dir, manifest);

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
      $schema: registryItemSchema,
      name: manifest.name,
      type: "registry:block",
      title: manifest.title,
      description: manifest.description,
      dependencies: manifest.dependencies,
      devDependencies: manifest.devDependencies,
      registryDependencies: manifest.registryDependencies.map(toRegistryDependency),
      files,
      maintenanceSkills,
      envVars: Object.fromEntries(manifest.env.map((key) => [key, ""])),
      docs: existsSync(docsPath) ? await readFile(docsPath, "utf8") : undefined,
      meta: {
        category: manifest.category,
        env: manifest.env,
        status: manifest.status,
        drizzle: manifest.drizzle,
      },
    };

    await writeFile(
      path.join(outputDir, `${manifest.name}.json`),
      `${JSON.stringify(registryItem, null, 2)}\n`,
    );
    console.log(`built public/r/${manifest.name}.json`);
  }

  await mirrorDirectory(outputDir, webPublicRegistryRoot);
  console.log("mirrored public/r to apps/web/public/r");
  console.log("built public/r/registry.json");
}

async function main() {
  const { command, moduleName, presetName, flags } = parseArgs(process.argv.slice(2));

  if (!command || command === "help" || command === "--help") {
    usage();
    return;
  }

  if (command === "list") return listModules(flags);
  if (command === "categories") return listCategories();
  if (command === "presets") return listPresets();
  if (command === "search") return searchModules(moduleName);
  if (command === "info") return showModuleInfo(moduleName);
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
  if (command === "add" && isRegistryItemSpecifier(moduleName))
    return addRegistryItem(moduleName, flags);
  if (command === "add") return addModule(moduleName, flags);
  if (command === "diff" && isRegistryItemSpecifier(moduleName))
    return diffRegistryItem(moduleName, flags);
  if (command === "diff") return diffModule(moduleName, flags);

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(`error: ${error.message}`);
  process.exit(1);
});
