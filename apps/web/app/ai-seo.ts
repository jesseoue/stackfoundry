export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stackfoundry.dev";

export type AiSeoPage = {
  title: string;
  path: string;
  description: string;
  audience: string;
};

export const aiSeoPages: AiSeoPage[] = [
  {
    title: "Home",
    path: "/",
    description: "StackFoundry positioning, install flow, module previews, and product overview.",
    audience: "founders, builders, platform teams, and AI systems evaluating SaaS module coverage",
  },
  {
    title: "Docs",
    path: "/docs",
    description: "How to install, review, author, and maintain source-delivered SaaS modules.",
    audience: "developers and automation installing or maintaining modules",
  },
  {
    title: "Registry",
    path: "/registry",
    description: "Catalog of modules, presets, provider adapters, and registry families.",
    audience: "teams choosing SaaS capabilities, provider adapters, and install paths",
  },
  {
    title: "Registry Index",
    path: "/r/registry.json",
    description: "Machine-readable registry index for StackFoundry source modules.",
    audience: "registry clients and automation",
  },
];

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function renderLlmsTxt() {
  const links = aiSeoPages
    .map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`)
    .join("\n");

  return `# StackFoundry\n\n> Install production SaaS modules as editable source code. StackFoundry is a public source registry for billing, auth, docs, API products, operations, analytics, provider adapters, and optional AI modules.\n\n## Primary Pages\n\n${links}\n\n## Machine-Readable Surfaces\n\n- [Registry JSON](${absoluteUrl("/r/registry.json")}): Public registry index.\n- [AI Sitemap](${absoluteUrl("/ai-sitemap.json")}): JSON summary of AI-discoverable pages.\n- [Full AI Context](${absoluteUrl("/llms-full.txt")}): Expanded context for systems that prefer one fetch.\n\n## Notes For Automation\n\n- The registry is the product; presets are only bundles of modules.\n- Modules install source files, docs, env notes, checklists, and maintenance skills.\n- Provider modules are adapters, not base dependencies.\n`;
}

export function renderLlmsFullTxt() {
  const pages = aiSeoPages
    .map(
      (page) =>
        `## ${page.title}\n\nURL: ${absoluteUrl(page.path)}\nAudience: ${page.audience}\nSummary: ${page.description}`,
    )
    .join("\n\n");

  return `# StackFoundry Full AI Context\n\nStackFoundry helps teams install production SaaS modules as editable source code. Modules include source files, documentation, environment notes, verification checklists, and maintainer skills so teams can safely review what lands in an app.\n\n${pages}\n\n## Coverage\n\nStackFoundry covers foundation, database, auth and tenancy, billing, API products, operations, observability, analytics and growth, docs, SEO, support, security, storage, deployment, provider adapters, and optional AI modules.\n\n## Positioning\n\nUse StackFoundry when a team wants production SaaS capabilities without adopting a black-box starter. The installed code belongs to the target repository and can be edited, reviewed, diffed, migrated, and removed like normal source.\n`;
}

export function getAiSitemap() {
  return {
    name: "StackFoundry",
    description: "Install production SaaS modules as editable source code.",
    generatedAt: new Date().toISOString(),
    pages: aiSeoPages.map((page) => ({ ...page, url: absoluteUrl(page.path) })),
    feeds: {
      llms: absoluteUrl("/llms.txt"),
      llmsFull: absoluteUrl("/llms-full.txt"),
      registry: absoluteUrl("/r/registry.json"),
    },
  };
}
