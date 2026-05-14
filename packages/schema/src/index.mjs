export const requiredModuleFields = [
  "name",
  "type",
  "category",
  "title",
  "description",
  "files",
  "status",
];

export const requiredPresetFields = ["name", "title", "description", "modules", "status"];

export const validModuleTypes = new Set(["module", "integration", "page"]);
export const validModuleStatuses = new Set(["planned", "experimental", "stable"]);
export const validRegistryFileTypes = new Set([
  "registry:file",
  "registry:page",
  "registry:component",
  "registry:hook",
]);

export function isKebabCase(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value ?? "");
}

export function isEnvVarName(value) {
  return /^[A-Z][A-Z0-9_]*$/.test(value);
}
