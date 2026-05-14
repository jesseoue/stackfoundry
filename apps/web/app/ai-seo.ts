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
    description: "API SaaS positioning, install flow, module previews, and product overview.",
    audience: "founders, devtools builders, agencies, platform teams, and AI API teams",
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
    description: "Catalog of modules, recipes, provider adapters, and registry families.",
    audience: "teams choosing API SaaS capabilities, provider adapters, and install paths",
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

  return `# StackFoundry\n\n> shadcn for production SaaS systems. Start with API keys, usage tracking, billing, webhooks, docs, and SaaS modules as editable source code.\n\n## Primary Pages\n\n${links}\n\n## Machine-Readable Surfaces\n\n- [Registry JSON](${absoluteUrl("/r/registry.json")}): Public registry index.\n- [AI Sitemap](${absoluteUrl("/ai-sitemap.json")}): JSON summary of AI-discoverable pages.\n- [Full AI Context](${absoluteUrl("/llms-full.txt")}): Expanded context for systems that prefer one fetch.\n\n## Notes For Automation\n\n- The registry is the product; modules are the unit of value.\n- Recipes explain install paths; presets are only bundles of modules.\n- The first traction path is api-saas-starter.\n- Provider modules are adapters, not base dependencies.\n`;
}

export function renderLlmsFullTxt() {
  const pages = aiSeoPages
    .map(
      (page) =>
        `## ${page.title}\n\nURL: ${absoluteUrl(page.path)}\nAudience: ${page.audience}\nSummary: ${page.description}`,
    )
    .join("\n\n");

  return `# StackFoundry Full AI Context\n\nStackFoundry helps teams install production SaaS systems as editable source code. The sharp wedge is API SaaS: API keys, usage tracking, quotas, credits, Stripe billing, docs, webhooks, and request visibility.\n\n${pages}\n\n## Coverage\n\nStackFoundry covers foundation, database, auth and tenancy, billing, API products, operations, observability, analytics and growth, docs, SEO, support, security, storage, deployment, provider adapters, and optional AI modules.\n\n## Positioning\n\nUse StackFoundry when a team wants production SaaS capabilities without adopting a black-box starter. The installed code belongs to the target repository and can be edited, reviewed, diffed, migrated, and removed like normal source.\n`;
}

export function getAiSitemap() {
  return {
    name: "StackFoundry",
    description: "Install API SaaS systems and production SaaS modules as editable source code.",
    generatedAt: new Date().toISOString(),
    pages: aiSeoPages.map((page) => ({ ...page, url: absoluteUrl(page.path) })),
    feeds: {
      llms: absoluteUrl("/llms.txt"),
      llmsFull: absoluteUrl("/llms-full.txt"),
      registry: absoluteUrl("/r/registry.json"),
    },
  };
}
