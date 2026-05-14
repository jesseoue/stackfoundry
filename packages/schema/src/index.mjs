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
export const requiredRecipeFields = [
  "name",
  "title",
  "description",
  "category",
  "status",
  "stages",
  "modules",
];

export const validModuleTypes = new Set(["module", "integration", "page"]);
export const validModuleStatuses = new Set(["ready", "stub", "planned", "experimental", "stable", "deprecated"]);
export const validModuleCategories = new Set([
  "ai",
  "analytics",
  "api",
  "auth",
  "backend",
  "billing",
  "communications",
  "compliance",
  "components",
  "content",
  "database",
  "deploy",
  "developer-platform",
  "devops",
  "docs",
  "edge",
  "email",
  "foundation",
  "growth",
  "iac",
  "integrations",
  "marketing",
  "media",
  "networking",
  "notifications",
  "observability",
  "operations",
  "platform",
  "project-management",
  "queue",
  "search",
  "security",
  "storage",
  "support",
  "tenancy",
  "workflow",
]);
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

const allowedPublicKeyEnvNames = new Set([
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  "NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY",
  "NEXT_PUBLIC_POSTHOG_KEY",
  "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
]);

export function isUnsafePublicEnvName(value) {
  if (!value?.startsWith("NEXT_PUBLIC_")) return false;
  if (allowedPublicKeyEnvNames.has(value)) return false;
  return /(?:SECRET|TOKEN|PRIVATE|PASSWORD|KEY)/.test(value);
}
