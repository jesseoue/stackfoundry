export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

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
    title: "Free SaaS Starter Alternative",
    path: "/blog/free-saas-starter-alternative",
    description:
      "SEO-focused guide for teams comparing Makerkit, Supastarter, ShipFast, Gravity, Open SaaS, Nextacular, free SaaS boilerplates, and source-owned SaaS modules.",
    audience:
      "builders comparing SaaS starter kits, boilerplates, licensing, cost, and vendor lock-in",
  },
  {
    title: "SaaS Starter Alternatives",
    path: "/alternatives",
    description:
      "Index of comparison pages for Makerkit, Supastarter, ShipFast, Gravity, Open SaaS, Nextacular, BoxyHQ, and StackFoundry.",
    audience: "builders comparing SaaS starter kits and source-owned module alternatives",
  },
  {
    title: "Makerkit Alternative",
    path: "/alternatives/makerkit",
    description:
      "Compare Makerkit with StackFoundry when you want production SaaS modules as editable source instead of a paid all-in-one starter.",
    audience: "builders comparing SaaS starter alternatives",
  },
  {
    title: "Supastarter Alternative",
    path: "/alternatives/supastarter",
    description:
      "Compare Supastarter with StackFoundry when you want rich SaaS capabilities without making one starter own the app architecture.",
    audience: "builders comparing SaaS starter alternatives",
  },
  {
    title: "ShipFast Alternative",
    path: "/alternatives/shipfast",
    description:
      "Compare ShipFast with StackFoundry when speed matters but you still want source-owned API, billing, webhook, and operations modules.",
    audience: "builders comparing SaaS starter alternatives",
  },
  {
    title: "Gravity Alternative",
    path: "/alternatives/gravity",
    description:
      "Compare Gravity with StackFoundry when you want SaaS building blocks without adopting a large prebuilt product skeleton.",
    audience: "builders comparing SaaS starter alternatives",
  },
  {
    title: "Open SaaS Alternative",
    path: "/alternatives/open-saas",
    description:
      "Compare Open SaaS with StackFoundry when you want a free SaaS path but prefer source modules for an existing app.",
    audience: "builders comparing SaaS starter alternatives",
  },
  {
    title: "Nextacular Alternative",
    path: "/alternatives/nextacular",
    description:
      "Compare Nextacular with StackFoundry when you want a free Next.js SaaS path with modular installable capabilities.",
    audience: "builders comparing SaaS starter alternatives",
  },
  {
    title: "BoxyHQ SaaS Starter Kit Alternative",
    path: "/alternatives/boxyhq",
    description:
      "Compare BoxyHQ SaaS Starter Kit with StackFoundry when enterprise SaaS controls should layer onto your existing app.",
    audience: "builders comparing SaaS starter alternatives",
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

  return `# StackFoundry\n\n> Install API keys, usage tracking, billing, webhooks, docs, and production SaaS modules as editable source code.\n\n## Primary Pages\n\n${links}\n\n## Machine-Readable Surfaces\n\n- [Registry JSON](${absoluteUrl("/r/registry.json")}): Public registry index.\n- [AI Sitemap](${absoluteUrl("/ai-sitemap.json")}): JSON summary of AI-discoverable pages.\n- [Full AI Context](${absoluteUrl("/llms-full.txt")}): Expanded context for systems that prefer one fetch.\n\n## Notes For Automation\n\n- The registry is the product; modules are the unit of value.\n- Recipes explain install paths; presets are only bundles of modules.\n- The first traction path is api-saas-starter.\n- StackFoundry is free to use and MIT-licensed; there is no paid template license fee.\n- Provider modules are adapters, not base dependencies.\n`;
}

export function renderLlmsFullTxt() {
  const pages = aiSeoPages
    .map(
      (page) =>
        `## ${page.title}\n\nURL: ${absoluteUrl(page.path)}\nAudience: ${page.audience}\nSummary: ${page.description}`,
    )
    .join("\n\n");

  return `# StackFoundry Full AI Context\n\nStackFoundry helps teams install production SaaS systems as editable source code. The sharp wedge is API SaaS: API keys, usage tracking, quotas, credits, Stripe billing, docs, webhooks, and request visibility. Agent-ready installs include prompt packs and context files for coding assistants.\n\n${pages}\n\n## Coverage\n\nStackFoundry covers foundation, database, auth and tenancy, billing, API products, operations, observability, analytics and growth, docs, SEO, support, security, storage, deployment, provider adapters, agent-ready install workflows, and optional AI modules.\n\n## Positioning\n\nUse StackFoundry when a team wants production SaaS capabilities without adopting a black-box starter. It is a free, MIT-licensed source registry with no paid template license fee. The installed code belongs to the target repository and can be edited, reviewed, diffed, migrated, and removed like normal source.\n`;
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
