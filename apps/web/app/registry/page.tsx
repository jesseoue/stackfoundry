import type { Metadata } from "next";
import { ModuleCard, type ModuleTag } from "../components/module-card";

const githubUrl = "https://github.com/jesseoue/stackfoundry";

export const metadata: Metadata = {
  title: "Registry",
  description:
    "Browse StackFoundry modules, recipes, and provider adapters for API-first SaaS products.",
  alternates: {
    canonical: "/registry",
  },
  openGraph: {
    title: "StackFoundry Registry",
    description:
      "Install API keys, usage, billing, webhooks, and production SaaS modules as editable source.",
    url: "/registry",
  },
};

const featuredPresets = [
  {
    name: "api-saas-starter",
    title: "API SaaS Starter",
    description: "The traction wedge: keys, usage, quotas, credits, billing, webhooks, and docs.",
    modules: ["api-keys", "usage-metering", "credit-wallet", "stripe-billing", "webhook-delivery"],
    tone: "Best wedge",
  },
  {
    name: "next-saas",
    title: "Next SaaS",
    description: "The broad app foundation: database, billing, accounts, docs, ops, and growth.",
    modules: ["drizzle-postgres", "api-keys", "stripe-billing", "audit-log", "resend-email"],
    tone: "Core",
  },
  {
    name: "developer-platform",
    title: "Developer Platform",
    description: "API keys, agent-ready installs, public API surfaces, webhooks, usage, and docs.",
    modules: ["api-keys", "agent-ready-installs", "webhook-inbox", "api-docs", "usage-metering"],
    tone: "API",
  },
  {
    name: "b2b-saas",
    title: "B2B SaaS",
    description: "Team workspaces, invites, tenant context, permission models, and audit trails.",
    modules: ["tenant-context", "invites", "custom-roles", "permission-matrix", "audit-log"],
    tone: "Teams",
  },
  {
    name: "ai-saas",
    title: "AI SaaS",
    description:
      "Optional AI product modules for Vercel AI SDK chat, AI Elements, quotas, and metering.",
    modules: ["ai-sdk", "ai-elements", "ai-chatbot-sdk", "quota-enforcement", "usage-metering"],
    tone: "AI",
  },
  {
    name: "vercel-native",
    title: "Vercel Native",
    description: "Deployment and managed storage adapters for teams building on Vercel.",
    modules: ["vercel-deploy", "vercel-blob", "vercel-edge-config", "vercel-workflows"],
    tone: "Vercel",
  },
  {
    name: "cloudflare-native",
    title: "Cloudflare Native",
    description: "Worker-first deployment, storage, queues, durable objects, and edge primitives.",
    modules: ["cloudflare-workers", "cloudflare-d1", "cloudflare-r2", "cloudflare-kumo-ui"],
    tone: "Edge",
  },
  {
    name: "provider-adapters",
    title: "Adapter Examples",
    description:
      "Provider adapter examples that show integration shape without locking in the base.",
    modules: ["clerk-auth", "resend-email", "posthog-analytics", "sentry-monitoring"],
    tone: "Adapters",
  },
  {
    name: "saas-coverage",
    title: "SaaS Coverage",
    description: "A larger map of launch, security, billing, support, analytics, and ops modules.",
    modules: ["security-headers", "system-health", "support-widget", "tinybird-analytics"],
    tone: "Coverage",
  },
];

const featuredRecipes = [
  {
    name: "api-saas-starter",
    title: "API SaaS Starter",
    description:
      "Launch an API SaaS with keys, usage, quotas, credits, billing, docs, and webhooks.",
    modules: ["api-keys", "usage-metering", "credit-wallet", "stripe-billing", "webhook-delivery"],
    tone: "API",
  },
  {
    name: "enterprise-saas",
    title: "Enterprise SaaS",
    description: "SSO, SCIM, audit, security posture, access reviews, SLAs, and support ops.",
    modules: ["enterprise-sso", "scim-provisioning", "audit-log", "mfa-security", "sla-management"],
    tone: "B2B",
  },
  {
    name: "customer-intelligence",
    title: "Customer Intelligence",
    description:
      "Product analytics, large event ingestion, usage, billing, support, risk, and adoption signals.",
    modules: ["posthog-analytics", "tinybird-analytics", "usage-metering", "plg-metrics"],
    tone: "Ops",
  },
  {
    name: "cloudflare-saas",
    title: "Cloudflare SaaS",
    description: "Workers, D1, KV, R2, Queues, Workflows, Durable Objects, Kumo UI, and Turnstile.",
    modules: ["cloudflare-workers", "cloudflare-d1", "cloudflare-r2", "cloudflare-kumo-ui"],
    tone: "Edge",
  },
];

const moduleFamilies = [
  {
    title: "Foundation",
    description:
      "Small base building blocks for layout, settings, UX states, and app shell polish.",
    modules: ["next-saas-shell", "settings-layout", "command-menu", "data-table", "loading-states"],
  },
  {
    title: "Database",
    description:
      "Schema slices, migrations guidance, tenant-safe data patterns, and local backing stores.",
    modules: [
      "drizzle-postgres",
      "neon-postgres",
      "supabase-postgres",
      "cloudflare-d1",
      "convex-backend",
    ],
  },
  {
    title: "Auth and Tenancy",
    description:
      "Account flows, workspaces, tenant context, invitations, roles, and enterprise access.",
    modules: ["clerk-auth", "account-modes", "tenant-context", "invites", "enterprise-sso"],
  },
  {
    title: "Billing",
    description:
      "Subscriptions, entitlements, one-time purchases, credits, invoices, dunning, and taxes.",
    modules: [
      "stripe-billing",
      "autumn-billing",
      "autumn-entitlements",
      "credit-wallet",
      "one-time-purchases",
    ],
  },
  {
    title: "API Product",
    description:
      "The strongest wedge: keys, rate limits, usage, credits, public APIs, webhooks, and docs.",
    modules: [
      "agent-ready-installs",
      "api-keys",
      "unkey-api-keys",
      "unkey-rate-limits",
      "public-api-orpc",
      "webhook-inbox",
    ],
  },
  {
    title: "Operations",
    description:
      "Auditability, status, health, incident response, background jobs, and support workflows.",
    modules: [
      "audit-log",
      "system-health",
      "status-page",
      "background-jobs",
      "incident-management",
    ],
  },
  {
    title: "Analytics and Growth",
    description:
      "Product analytics, onboarding, lifecycle email, activation, retention, and feedback loops.",
    modules: [
      "posthog-analytics",
      "tinybird-analytics",
      "feature-flags",
      "lifecycle-email",
      "product-announcements",
      "public-roadmap",
    ],
  },
  {
    title: "Providers",
    description:
      "Adapter modules for hosted services, kept optional so the base scaffold stays small.",
    modules: [
      "resend-email",
      "sentry-monitoring",
      "upstash-redis",
      "trigger-dev-jobs",
      "inngest-functions",
    ],
  },
  {
    title: "Optional AI",
    description:
      "Vercel AI SDK and AI Elements modules are available when useful, but are not required for the registry model.",
    modules: ["ai-sdk", "ai-elements", "ai-chat", "ai-chatbot-sdk", "cloudflare-agents-sdk"],
  },
  {
    title: "Docs and Deployment",
    description: "Product docs, provider deploy paths, containers, and production-readiness notes.",
    modules: [
      "docs-fumadocs",
      "docs-mintlify",
      "vercel-deploy",
      "cloudflare-workers",
      "railway-deploy",
    ],
  },
];

const providerOptions = [
  {
    name: "Drizzle",
    domain: "drizzle.team",
    role: "Database ORM",
    modules: ["drizzle-postgres", "neon-postgres"],
  },
  {
    name: "Stripe",
    domain: "stripe.com",
    role: "Billing adapter",
    modules: ["stripe-billing", "billing-portal"],
  },
  {
    name: "Autumn",
    domain: "useautumn.com",
    role: "Billing adapter",
    modules: ["autumn-billing", "autumn-entitlements"],
  },
  {
    name: "Unkey",
    domain: "unkey.com",
    role: "API key adapter",
    modules: ["unkey-api-keys", "unkey-rate-limits"],
  },
  {
    name: "Clerk",
    domain: "clerk.com",
    role: "Auth adapter",
    modules: ["clerk-auth", "auth-core"],
  },
  {
    name: "Resend",
    domain: "resend.com",
    role: "Email adapter",
    modules: ["resend-email", "lifecycle-email"],
  },
  {
    name: "PostHog",
    domain: "posthog.com",
    role: "Analytics adapter",
    modules: ["posthog-analytics", "feature-flags"],
  },
  {
    name: "Sentry",
    domain: "sentry.io",
    role: "Monitoring adapter",
    modules: ["sentry-monitoring", "error-boundaries"],
  },
  {
    name: "Vercel",
    domain: "vercel.com",
    role: "Deploy, storage, and AI",
    modules: ["vercel-deploy", "vercel-blob", "ai-sdk", "ai-elements"],
  },
  {
    name: "Cloudflare",
    domain: "cloudflare.com",
    role: "Edge platform and UI",
    modules: ["cloudflare-workers", "cloudflare-d1", "cloudflare-r2", "cloudflare-kumo-ui"],
  },
  {
    name: "Neon",
    domain: "neon.tech",
    role: "Postgres adapter",
    modules: ["neon-postgres", "drizzle-postgres"],
  },
  {
    name: "Supabase",
    domain: "supabase.com",
    role: "Postgres adapter",
    modules: ["supabase-postgres", "file-uploads"],
  },
  {
    name: "Upstash",
    domain: "upstash.com",
    role: "Redis adapter",
    modules: ["upstash-redis", "rate-limits"],
  },
  {
    name: "Trigger.dev",
    domain: "trigger.dev",
    role: "Jobs adapter",
    modules: ["trigger-dev-jobs", "background-jobs"],
  },
  {
    name: "Inngest",
    domain: "inngest.com",
    role: "Functions adapter",
    modules: ["inngest-functions", "background-jobs"],
  },
  {
    name: "Next.js",
    domain: "nextjs.org",
    role: "App framework",
    modules: ["next-saas-shell", "docs-fumadocs"],
  },
  {
    name: "React",
    domain: "react.dev",
    role: "UI runtime",
    modules: ["data-table", "command-menu"],
  },
];

const stats = [
  ["157", "Module manifests"],
  ["13", "Preset bundles"],
  ["9", "Recipes"],
  ["17", "Provider cards"],
];

function moduleTags(modules: string[], tone: ModuleTag["tone"] = "default") {
  return modules.map((module) => ({ label: module, tone }));
}

function ProviderLogo({ name, domain }: { name: string; domain: string }) {
  return (
    <span className="registry-logo-wrap" aria-hidden="true">
      <span>{name.slice(0, 1)}</span>
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt=""
        width="32"
        height="32"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </span>
  );
}

export default function RegistryPage() {
  return (
    <main className="page registry-page">
      <nav className="nav" aria-label="Main navigation">
        <div className="container nav-inner">
          <a className="brand" href="/" aria-label="stackfoundry home">
            <span className="mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="wordmark">stackfoundry</span>
          </a>
          <div className="nav-links">
            <a href="/docs">Docs</a>
            <a href="/blog/building-saas-with-source-modules">Blog</a>
            <a href="/alternatives">Alternatives</a>
            <a href="/docs#install-existing">Install</a>
            <a href="/r/registry.json">Registry JSON</a>
          </div>
          <a className="button" href={githubUrl}>
            GitHub
          </a>
        </div>
      </nav>

      <header className="registry-hero">
        <div className="container">
          <div className="registry-hero-grid">
            <div>
              <div className="eyebrow">
                <span className="dot" aria-hidden="true" />
                <span>source registry for production SaaS systems</span>
              </div>
              <h1 className="registry-title">
                Start with API SaaS. Expand only after the wedge works.
              </h1>
              <p className="registry-lede">
                Install API keys, usage tracking, rate limits, credits, Stripe billing, webhooks,
                API docs, and operating checks as editable source. Modules are the product. Recipes
                explain the path. Presets are convenience bundles.
              </p>
              <div className="registry-actions">
                <a className="button primary" href="/docs#install-existing">
                  Dry-run API SaaS
                </a>
                <a className="button" href="/docs">
                  Read the docs
                </a>
                <a className="button ghost" href="/r/registry.json">
                  Open JSON registry
                </a>
              </div>
            </div>

            <aside className="registry-terminal" aria-label="Registry install example">
              <div className="code-head">
                <span />
                registry install
              </div>
              <pre>
                <code>{`pnpm stackfoundry recipe api-saas-starter
pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run
pnpm stackfoundry diff api-keys --target ./my-app`}</code>
              </pre>
              <div className="registry-terminal-foot">
                Source lands in your repo for review, edits, and ownership.
              </div>
            </aside>
          </div>

          <div className="registry-stats">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="container">
        <section className="registry-section" id="recipes">
          <div className="registry-section-head">
            <div className="section-eyebrow">Recipes</div>
            <h2>The API SaaS recipe is the front door.</h2>
            <p>
              Recipes document the recommended install order for complete SaaS workflows. The
              sharpest path is API SaaS: keys, usage, rate limits, credits, billing, docs, webhooks,
              visibility, and agent-ready install prompts.
            </p>
          </div>

          <div className="registry-preset-grid">
            {featuredRecipes.map((recipe) => (
              <ModuleCard
                badge={recipe.tone}
                description={recipe.description}
                key={recipe.name}
                name={recipe.name}
                tags={moduleTags(recipe.modules)}
                title={recipe.title}
                variant="preset"
              />
            ))}
          </div>
        </section>

        <section className="registry-section" id="presets">
          <div className="registry-section-head">
            <div className="section-eyebrow">Featured Paths</div>
            <h2>Presets are convenience. They are not the product.</h2>
            <p>
              Presets collect modules for a product shape, but traction comes from a painful narrow
              workflow. Start with API SaaS, then add B2B, AI, support, or provider-native paths.
            </p>
          </div>

          <div className="registry-preset-grid">
            {featuredPresets.map((preset) => (
              <ModuleCard
                badge={preset.tone}
                description={preset.description}
                key={preset.name}
                name={preset.name}
                tags={moduleTags(preset.modules)}
                title={preset.title}
                variant="preset"
              />
            ))}
          </div>
        </section>

        <section className="registry-section" id="modules">
          <div className="registry-section-head">
            <div className="section-eyebrow">Module Families</div>
            <h2>Every broad category points back to concrete product pain.</h2>
            <p>
              Each card points at modules you can inspect, install, and maintain as source. The base
              scaffold stays small; API products can add only the systems they need to monetize and
              operate.
            </p>
          </div>

          <div className="registry-family-grid">
            {moduleFamilies.map((family) => (
              <ModuleCard
                description={family.description}
                key={family.title}
                name={family.title.toLowerCase().replaceAll(" ", "-")}
                tags={moduleTags(family.modules)}
                title={family.title}
              />
            ))}
          </div>
        </section>

        <section className="registry-section" id="providers">
          <div className="registry-section-head">
            <div className="section-eyebrow">Provider Options</div>
            <h2>Choose the provider after you choose the capability.</h2>
            <p>
              Provider cards show selectable adapter paths. Favicon marks are compact identifiers;
              the module contract still stays source-first and editable.
            </p>
          </div>

          <div className="registry-provider-grid">
            {providerOptions.map((provider) => (
              <ModuleCard
                badge={provider.role}
                description={provider.domain}
                icon={<ProviderLogo name={provider.name} domain={provider.domain} />}
                key={provider.name}
                name={provider.name.toLowerCase()}
                tags={[
                  { label: "adapter option", tone: "provider" },
                  ...moduleTags(provider.modules, "default"),
                ]}
                title={provider.name}
                variant="provider"
              />
            ))}
          </div>
        </section>

        <section className="registry-section registry-cta" id="install">
          <div>
            <div className="section-eyebrow">Ship With Ownership</div>
            <h2>Browse the registry, install a path, and review the source like any other PR.</h2>
            <p>
              StackFoundry is designed for teams that want production SaaS capabilities without
              hiding the code behind generators or hard provider dependencies.
            </p>
          </div>
          <div className="registry-cta-actions">
            <a className="button primary" href="/docs">
              Documentation
            </a>
            <a className="button" href="/docs#install-existing">
              Existing app install
            </a>
            <a className="button" href={githubUrl}>
              GitHub
            </a>
            <a className="button ghost" href="/r/registry.json">
              Registry JSON
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>StackFoundry registry</span>
          <span>Install production SaaS modules as editable source code.</span>
        </footer>
      </div>
    </main>
  );
}
