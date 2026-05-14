import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

const registryIndexSchema = "https://ui.shadcn.com/schema/registry.json";
const registryItemSchema = "https://ui.shadcn.com/schema/registry-item.json";

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const registryIndex = await readJson("public/r/registry.json");

assert(
  registryIndex.$schema === registryIndexSchema,
  "registry index must use the shadcn registry index schema",
);
assert(registryIndex.type === undefined, "registry index must not be an installable item");
assert(registryIndex.files === undefined, "registry index must not expose root files");
assert(registryIndex.docs === undefined, "registry index must not expose root docs");
assert(Array.isArray(registryIndex.items), "registry index must include items");
assert(
  registryIndex.items.every((item) => item.$schema === undefined),
  "registry index items must not be labeled as standalone registry item documents",
);
assert(
  registryIndex.items.every((item) => item.files?.every((file) => file.content === undefined)),
  "registry index must not embed file contents",
);
assert(
  registryIndex.items.every((item) => item.agentSkills === undefined),
  "registry index must not embed StackFoundry install metadata",
);

const vendor = await readJson("public/r/vendor-examples.json");
assert(vendor.$schema === registryItemSchema, "vendor-examples must use registry item schema");
assert(vendor.type === "registry:block", "vendor-examples must be registry:block");
assert(
  vendor.registryDependencies?.every((dep) => dep.startsWith("https://stackfoundry.dev/r/")),
  "preset dependencies must be absolute registry URLs",
);

const apiKeys = await readJson("public/r/api-keys.json");
assert(apiKeys.$schema === registryItemSchema, "api-keys must use registry item schema");
assert(apiKeys.files?.every((file) => file.target), "registry files must include target");
assert(apiKeys.files?.every((file) => file.content), "registry item files must embed content");
assert(
  apiKeys.agentSkills?.some((skill) => skill.name === "drizzle" && skill.content),
  "registry items must embed shared technology skills",
);

const presetManifest = await readJson("public/r/presets/vendor-examples.json");
assert(
  presetManifest.$schema === undefined,
  "public preset manifests must not masquerade as shadcn registry documents",
);
assert(Array.isArray(presetManifest.modules), "public preset manifests must include modules");

const webRegistryIndexPath = "apps/web/public/r/registry.json";
if (existsSync(webRegistryIndexPath)) {
  const publicIndex = await readFile("public/r/registry.json", "utf8");
  const webIndex = await readFile(webRegistryIndexPath, "utf8");
  assert(publicIndex === webIndex, "web public registry mirror must match public/r");
}
