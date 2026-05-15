export type Alternative = {
  slug: string;
  name: string;
  model: string;
  title: string;
  description: string;
  bestFor: string;
  whatTheyHave: string[];
  stackfoundryDifference: string[];
  chooseStackFoundryWhen: string;
  keywords: string[];
};

export const alternatives: Alternative[] = [
  {
    slug: "makerkit",
    name: "Makerkit",
    model: "Commercial SaaS starter",
    title: "Makerkit Alternative",
    description:
      "Compare Makerkit with StackFoundry when you want production SaaS modules as editable source instead of a paid all-in-one starter.",
    bestFor:
      "Teams that want a broad, opinionated SaaS app foundation with many decisions made up front.",
    whatTheyHave: [
      "Next.js and Remix starter paths",
      "Supabase or Firebase-backed app foundations",
      "Auth, organizations, billing, docs, blog, and testing guidance",
      "A paid template license model",
    ],
    stackfoundryDifference: [
      "Free to use and MIT-licensed with no paid template license fee",
      "Installs modules into an existing app instead of asking you to adopt a whole starter",
      "Leads with the API SaaS recipe: keys, usage, credits, billing, docs, and webhooks",
      "Keeps providers as adapters around source-owned product systems",
    ],
    chooseStackFoundryWhen:
      "You like the SaaS category coverage but want smaller source modules, recipe dry-runs, and normal code review before anything lands in your app.",
    keywords: ["Makerkit alternative", "Makerkit free alternative", "Next.js SaaS starter"],
  },
  {
    slug: "supastarter",
    name: "Supastarter",
    model: "Commercial multi-framework starter",
    title: "Supastarter Alternative",
    description:
      "Compare Supastarter with StackFoundry when you want rich SaaS capabilities without making one starter own the app architecture.",
    bestFor:
      "Teams comparing feature-rich paid kits with auth, billing, organizations, internationalization, and deployment guidance.",
    whatTheyHave: [
      "Next.js and Nuxt starter options",
      "Auth, organizations, billing providers, and deployment docs",
      "Broad B2B SaaS features in one starter package",
      "A paid license model",
    ],
    stackfoundryDifference: [
      "Free source registry instead of a paid starter bundle",
      "Recipe-first installs for API SaaS, enterprise SaaS, AI SaaS, support ops, and more",
      "Vendor adapters stay optional and replaceable",
      "Module manifests show files, env vars, dependencies, and verification notes before install",
    ],
    chooseStackFoundryWhen:
      "You want to add SaaS capabilities gradually and keep each provider decision visible in source.",
    keywords: ["Supastarter alternative", "SaaS boilerplate alternative", "free SaaS starter"],
  },
  {
    slug: "shipfast",
    name: "ShipFast",
    model: "Commercial speed-focused boilerplate",
    title: "ShipFast Alternative",
    description:
      "Compare ShipFast with StackFoundry when speed matters but you still want source-owned API, billing, webhook, and operations modules.",
    bestFor:
      "Indie hackers optimizing for a fast landing page, payments, auth, and launch workflow.",
    whatTheyHave: [
      "A launch-speed focused Next.js boilerplate",
      "Auth, payments, email, landing page, and starter app conventions",
      "A paid lifetime-style product model",
      "A strong indie-hacker launch positioning",
    ],
    stackfoundryDifference: [
      "No paid template license fee",
      "Starts with installable product infrastructure instead of a full marketing starter",
      "Dry-runs source before writing files",
      "Ships maintenance skills and checklists with modules",
    ],
    chooseStackFoundryWhen:
      "You already have a product shell or want the hard SaaS systems first: API keys, usage, billing, webhooks, docs, and checks.",
    keywords: ["ShipFast alternative", "free ShipFast alternative", "API SaaS starter"],
  },
  {
    slug: "gravity",
    name: "Gravity",
    model: "Commercial full-stack SaaS boilerplate",
    title: "Gravity Alternative",
    description:
      "Compare Gravity with StackFoundry when you want SaaS building blocks without adopting a large prebuilt product skeleton.",
    bestFor:
      "Teams that want a large prebuilt product skeleton with screens, integrations, and conventional SaaS workflows.",
    whatTheyHave: [
      "Full-stack SaaS boilerplate positioning",
      "Auth, billing, team workflows, and integration surfaces",
      "A paid license or renewal model",
      "A broad product skeleton approach",
    ],
    stackfoundryDifference: [
      "Smaller modules instead of one large skeleton",
      "Install paths that can target an existing app",
      "Free and MIT-licensed registry source",
      "Explicit App Router, env, migration, and responsive verification guidance",
    ],
    chooseStackFoundryWhen:
      "You want production SaaS systems, but your team should decide the final app shell and product flow.",
    keywords: ["Gravity SaaS alternative", "SaaS boilerplate alternative", "source modules"],
  },
  {
    slug: "open-saas",
    name: "Open SaaS",
    model: "Free open-source SaaS boilerplate",
    title: "Open SaaS Alternative",
    description:
      "Compare Open SaaS with StackFoundry when you want a free SaaS path but prefer source modules for an existing app.",
    bestFor:
      "Builders who like a free full-stack framework path and are comfortable adopting its architecture.",
    whatTheyHave: [
      "Free open-source SaaS boilerplate positioning",
      "Auth, payments, file uploads, jobs, and AI-ready features",
      "A framework-led app architecture",
      "A full starter application model",
    ],
    stackfoundryDifference: [
      "Also free to use, with MIT-licensed source",
      "Designed to add modules into an app you already own",
      "No requirement to adopt a different full-stack framework",
      "Registry recipes explain install order without hiding the source",
    ],
    chooseStackFoundryWhen:
      "You want the open-source economics, but prefer a Next.js source registry and module-by-module installs.",
    keywords: ["Open SaaS alternative", "open source SaaS starter", "free SaaS boilerplate"],
  },
  {
    slug: "nextacular",
    name: "Nextacular",
    model: "Free open-source Next.js starter",
    title: "Nextacular Alternative",
    description:
      "Compare Nextacular with StackFoundry when you want a free Next.js SaaS path with modular installable capabilities.",
    bestFor:
      "Teams looking for a traditional open-source Next.js starter with multi-tenant SaaS basics.",
    whatTheyHave: [
      "Next.js, Tailwind, Prisma, and Stripe-oriented starter conventions",
      "Auth, billing, teams, workspaces, and multi-tenant concepts",
      "Open-source starter-app shape",
      "A conventional boilerplate install path",
    ],
    stackfoundryDifference: [
      "Module registry instead of one starter app",
      "Drizzle, Neon, Supabase, Convex, Cloudflare, and provider adapter options",
      "Agent-ready install prompts and recipe dry-runs",
      "API SaaS is the front-door workflow",
    ],
    chooseStackFoundryWhen:
      "You want a free Next.js-compatible approach but need installable SaaS modules that can join your current repository.",
    keywords: ["Nextacular alternative", "free Next.js SaaS starter", "Next.js SaaS boilerplate"],
  },
  {
    slug: "boxyhq",
    name: "BoxyHQ SaaS Starter Kit",
    model: "Open-source enterprise starter",
    title: "BoxyHQ SaaS Starter Kit Alternative",
    description:
      "Compare BoxyHQ SaaS Starter Kit with StackFoundry when enterprise SaaS controls should layer onto your existing app.",
    bestFor:
      "Teams prioritizing enterprise auth, SSO, webhooks, and B2B controls early in the product.",
    whatTheyHave: [
      "Enterprise-focused SaaS starter positioning",
      "SSO, webhook, and B2B SaaS concepts",
      "Open-source starter-kit model",
      "A strong enterprise-readiness focus",
    ],
    stackfoundryDifference: [
      "Enterprise controls are modules and recipes, not the only app shape",
      "Includes enterprise-saas, security-center, support-ops, and API SaaS paths",
      "Lets smaller teams start with API SaaS and add enterprise layers later",
      "Keeps audit, security, support, and status modules installable as source",
    ],
    chooseStackFoundryWhen:
      "You want enterprise capabilities available, but not forced into every app from day one.",
    keywords: ["BoxyHQ alternative", "enterprise SaaS starter", "B2B SaaS boilerplate"],
  },
];

export function getAlternative(slug: string) {
  return alternatives.find((alternative) => alternative.slug === slug);
}
