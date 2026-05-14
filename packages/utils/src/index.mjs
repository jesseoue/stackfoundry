import path from "node:path";

export function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

export function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function isRegistryItemSpecifier(value) {
  return isHttpUrl(value) || value.endsWith(".json") || value.includes("/r/");
}
