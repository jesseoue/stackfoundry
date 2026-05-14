import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

export function createRegistryPaths(repoRoot) {
  const registryRoot = path.join(repoRoot, "registry");

  return {
    repoRoot,
    registryRoot,
    modulesRoot: path.join(registryRoot, "modules"),
    presetsRoot: path.join(registryRoot, "presets"),
    publicRegistryRoot: path.join(repoRoot, "public", "r"),
  };
}

export async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

export function hashContent(content) {
  return createHash("sha256").update(content).digest("hex");
}

export async function hashFile(filePath) {
  return hashContent(await readFile(filePath));
}

export async function listFiles(dir) {
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

export async function listModuleNames(modulesRoot) {
  const names = [];
  for (const name of await readdir(modulesRoot)) {
    if ((await stat(path.join(modulesRoot, name))).isDirectory()) {
      names.push(name);
    }
  }
  return names.sort();
}

export async function getModule(modulesRoot, name) {
  const modulePath = path.join(modulesRoot, name, "module.json");
  if (!existsSync(modulePath)) {
    throw new Error(`Unknown module: ${name}`);
  }
  return {
    dir: path.dirname(modulePath),
    manifest: await readJson(modulePath),
  };
}

export async function getPreset(presetsRoot, name) {
  const presetPath = path.join(presetsRoot, `${name}.json`);
  if (!existsSync(presetPath)) {
    throw new Error(`Unknown preset: ${name}`);
  }
  return readJson(presetPath);
}

export function getLocalRegistryPathFromUrl(repoRoot, url) {
  if (url.hostname !== "stackfoundry.dev") return undefined;
  if (!url.pathname.startsWith("/r/") || !url.pathname.endsWith(".json")) return undefined;

  return path.join(repoRoot, "public", url.pathname);
}

export async function readRegistryItem(repoRoot, specifier) {
  const url = tryUrl(specifier);
  if (url) {
    const localPath = getLocalRegistryPathFromUrl(repoRoot, url);
    if (localPath && existsSync(localPath)) return readJson(localPath);

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unable to fetch registry item: ${specifier}`);
    return response.json();
  }

  return readJson(path.resolve(specifier));
}

function tryUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? url : undefined;
  } catch {
    return undefined;
  }
}
