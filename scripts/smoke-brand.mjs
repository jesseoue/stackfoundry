import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function runCli(args) {
  return execFileSync("node", ["apps/cli/src/cli.mjs", ...args], {
    encoding: "utf8",
  });
}

const help = runCli(["--help"]);
assert(help.includes("StackFoundry"), "CLI help must include the StackFoundry brand");
assert(help.includes("stackfoundry add"), "CLI help must show install usage");
assert(help.includes("stackfoundry categories"), "CLI help must show category discovery");

const categories = runCli(["categories"]);
assert(categories.includes("StackFoundry categories"), "categories output must be branded");
assert(categories.includes("billing"), "categories output must include billing");
assert(categories.includes("foundation"), "categories output must include foundation");

const billingList = runCli(["list", "--category", "billing"]);
assert(billingList.includes("StackFoundry modules"), "module list output must be branded");
assert(billingList.includes("stripe-billing"), "billing list must include stripe-billing");
assert(billingList.includes("credit-wallet"), "billing list must include credit-wallet");

const layout = readFileSync("apps/web/app/layout.tsx", "utf8");
assert(layout.includes("StackFoundry"), "root metadata must include StackFoundry");
assert(
  layout.includes("Install production SaaS features as editable source code."),
  "root metadata must include the current value proposition",
);

const aiSeo = readFileSync("apps/web/app/ai-seo.ts", "utf8");
assert(aiSeo.includes("# StackFoundry"), "llms.txt content must be branded");
assert(
  aiSeo.includes("Install production SaaS modules as editable source code"),
  "AI discovery content must include the core positioning",
);
assert(aiSeo.includes("/llms.txt"), "AI discovery content must include llms.txt");

const registryIndex = JSON.parse(readFileSync("public/r/registry.json", "utf8"));
assert(registryIndex.name === "stackfoundry", "registry index name must be stackfoundry");
assert(
  registryIndex.homepage === "https://stackfoundry.dev",
  "registry index homepage must be stackfoundry.dev",
);

const apiKeys = JSON.parse(readFileSync("public/r/api-keys.json", "utf8"));
assert(apiKeys.maintenanceSkills, "registry item must embed maintenance skills");
assert(!apiKeys.agentSkills, "registry item must not use legacy agentSkills metadata");

console.log("brand smoke ok");
