import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Install production SaaS modules as editable source code with StackFoundry's registry, CLI, presets, and provider adapters.",
  alternates: {
    canonical: "/docs",
  },
};

const quickStart = [
  "git clone https://github.com/jesseoue/stackfoundry.git",
  "cd stackfoundry",
  "corepack enable && pnpm install",
  "pnpm registry:doctor",
  "pnpm stackfoundry list",
  "pnpm stackfoundry add api-keys --target ./my-app --dry-run",
];

const existingAppSteps = [
  [
    "Dry-run first",
    "Preview every file, env note, package dependency, registry dependency, and skill before anything touches your app.",
  ],
  [
    "Install the source",
    "Run the same command without --dry-run after the diff looks right. Modules land as editable files in normal app paths.",
  ],
  [
    "Review dependencies",
    "Registry dependencies such as drizzle-postgres install first, while provider adapters remain explicit choices.",
  ],
  [
    "Wire env and migrations",
    "Copy env notes into your real secrets store, run your migration workflow, and commit only the source you accept.",
  ],
];

const pathCards = [
  {
    title: "Billing: source-owned core",
    eyebrow: "default path",
    body: "Start with billing-core, entitlements, usage-metering, plan-gating, and stripe-billing when you want subscription primitives, schema, webhook handling, and upgrade surfaces in your codebase.",
    modules: ["billing-core", "stripe-billing", "entitlements", "usage-metering", "plan-gating"],
  },
  {
    title: "Billing: provider adapters",
    eyebrow: "optional adapters",
    body: "Add Autumn, Paddle, Lemon Squeezy, or tax modules when the provider owns a slice of the billing workflow. They adapt around the same product concepts instead of becoming base dependencies.",
    modules: [
      "autumn-billing",
      "autumn-entitlements",
      "paddle-billing",
      "lemon-squeezy-billing",
      "tax-vat",
    ],
  },
  {
    title: "API keys: source-owned core",
    eyebrow: "default path",
    body: "Use api-keys for hashed storage, scopes, management UI, usage metadata, and a clear upgrade path to developer portal and public API modules.",
    modules: ["api-keys", "api-docs", "public-api-orpc", "webhook-delivery", "api-usage-dashboard"],
  },
  {
    title: "API keys: managed provider",
    eyebrow: "optional adapters",
    body: "Use Unkey modules when you want hosted key verification or hosted rate limits. They compose with the source-owned API product modules instead of replacing the registry model.",
    modules: ["unkey-api-keys", "unkey-rate-limits", "rate-limits", "api-errors", "sdk-snippets"],
  },
];

const moduleGroups = [
  {
    category: "Foundation",
    summary: "Small base scaffolds and product shell pieces.",
    modules: [
      "next-saas",
      "sidebar-shell",
      "t3-env",
      "theme-system",
      "quality-tooling",
      "playwright-e2e",
      "seed-data",
    ],
  },
  {
    category: "Database",
    summary: "Schema, migrations, relations, and hosted Postgres adapters.",
    modules: [
      "drizzle-postgres",
      "drizzle-relations",
      "drizzle-soft-delete",
      "neon-postgres",
      "supabase-postgres",
      "cloudflare-d1",
    ],
  },
  {
    category: "Auth & tenancy",
    summary: "Users, teams, permissions, tenant context, and enterprise controls.",
    modules: [
      "clerk-auth",
      "orgs-rbac",
      "permission-matrix",
      "tenant-context",
      "workspace-settings",
      "enterprise-sso",
      "scim-provisioning",
      "custom-domains",
    ],
  },
  {
    category: "Billing",
    summary: "Subscriptions, entitlements, usage, credits, and provider boundaries.",
    modules: [
      "billing-core",
      "stripe-billing",
      "autumn-billing",
      "autumn-entitlements",
      "credit-wallet",
      "one-time-purchases",
      "usage-metering",
      "quota-enforcement",
      "seat-management",
    ],
  },
  {
    category: "API product",
    summary: "Developer-facing APIs, keys, webhooks, docs, and usage visibility.",
    modules: [
      "api-keys",
      "unkey-api-keys",
      "api-docs",
      "public-api-orpc",
      "webhook-inbox",
      "webhook-delivery",
      "api-errors",
      "api-usage-dashboard",
    ],
  },
  {
    category: "Operations",
    summary: "Runbooks, support, jobs, incidents, status, and auditability.",
    modules: [
      "audit-log",
      "admin-console",
      "background-jobs",
      "support-console",
      "system-health",
      "incident-management",
      "status-page",
      "sentry-monitoring",
    ],
  },
  {
    category: "Analytics & growth",
    summary: "Product analytics, flags, activation, retention, and marketing loops.",
    modules: [
      "posthog-analytics",
      "feature-flags",
      "experiments",
      "activation-onboarding",
      "cohort-retention",
      "referral-loops",
      "waitlist",
      "pricing-page",
    ],
  },
  {
    category: "Providers & adapters",
    summary: "Hosted services and deployment surfaces as explicit add-ons.",
    modules: [
      "resend-email",
      "upstash-redis",
      "vercel-blob",
      "vercel-deploy",
      "cloudflare-workers",
      "cloudflare-r2",
      "cloudflare-queues",
      "arcjet-security",
    ],
  },
  {
    category: "Optional AI",
    summary: "AI modules are categories in the registry, not the product identity.",
    modules: [
      "ai-chat",
      "model-router",
      "prompt-library",
      "rag-starter",
      "cloudflare-agents-sdk",
      "cloudflare-mcp-server",
      "cloudflare-vectorize",
      "evals",
    ],
  },
  {
    category: "Docs & deployment",
    summary: "Documentation sites, content systems, and deploy recipes.",
    modules: [
      "docs-fumadocs",
      "docs-starlight",
      "docs-help-center",
      "cms-mdx",
      "vercel-deploy",
      "cloudflare-pages",
      "railway-deploy",
      "docker-compose-local",
    ],
  },
];

const moduleMeta: Record<string, { tone: string; domain?: string }> = {
  "next-saas": { tone: "foundation", domain: "nextjs.org" },
  "drizzle-postgres": { tone: "database", domain: "drizzle.team" },
  "drizzle-relations": { tone: "database", domain: "drizzle.team" },
  "drizzle-soft-delete": { tone: "database", domain: "drizzle.team" },
  "neon-postgres": { tone: "database", domain: "neon.tech" },
  "supabase-postgres": { tone: "database", domain: "supabase.com" },
  "cloudflare-d1": { tone: "provider", domain: "cloudflare.com" },
  "clerk-auth": { tone: "auth", domain: "clerk.com" },
  "stripe-billing": { tone: "billing", domain: "stripe.com" },
  "autumn-billing": { tone: "billing", domain: "useautumn.com" },
  "autumn-entitlements": { tone: "billing", domain: "useautumn.com" },
  "unkey-api-keys": { tone: "api", domain: "unkey.com" },
  "unkey-rate-limits": { tone: "api", domain: "unkey.com" },
  "sentry-monitoring": { tone: "ops", domain: "sentry.io" },
  "posthog-analytics": { tone: "growth", domain: "posthog.com" },
  "resend-email": { tone: "provider", domain: "resend.com" },
  "upstash-redis": { tone: "provider", domain: "upstash.com" },
  "vercel-blob": { tone: "provider", domain: "vercel.com" },
  "vercel-deploy": { tone: "provider", domain: "vercel.com" },
  "cloudflare-workers": { tone: "provider", domain: "cloudflare.com" },
  "cloudflare-r2": { tone: "provider", domain: "cloudflare.com" },
  "cloudflare-queues": { tone: "provider", domain: "cloudflare.com" },
  "cloudflare-agents-sdk": { tone: "ai", domain: "cloudflare.com" },
  "cloudflare-mcp-server": { tone: "ai", domain: "cloudflare.com" },
  "cloudflare-vectorize": { tone: "ai", domain: "cloudflare.com" },
  "docs-fumadocs": { tone: "docs", domain: "fumadocs.dev" },
  "cloudflare-pages": { tone: "docs", domain: "cloudflare.com" },
};

const manifestParts = [
  [
    "module.json",
    "The install contract: name, category, status, files, npm dependencies, registry dependencies, env vars, and maintenance metadata.",
  ],
  [
    "docs.md",
    "Human docs for the installed capability: setup, concepts, provider notes, operating guidance, and links.",
  ],
  [
    "files/",
    "The editable source payload. These are app routes, components, helpers, schema slices, configs, and examples.",
  ],
  [
    "skill/SKILL.md",
    "Maintenance guidance so future edits understand the module's boundaries, provider assumptions, and verification steps.",
  ],
  [
    "tests/checklist.md",
    "Focused checks for the maintainer to prove the module works after install, wiring, and local customization.",
  ],
];

function Anchor({ id }: { id: string }) {
  return (
    <a aria-label={`Link to ${id}`} className="docs-anchor" href={`#${id}`}>
      #
    </a>
  );
}

function JsonValue({ value, lineIndex }: { value: string; lineIndex: number }) {
  const parts = value.split(/("[^"]*")/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        const key = `${lineIndex}-${index}-${part}`;
        if (part.startsWith('"')) {
          const isEnv = /[A-Z][A-Z0-9_]+/.test(part);
          return (
            <span className={isEnv ? "json-env" : "json-string"} key={key}>
              {part}
            </span>
          );
        }

        return (
          <span className="json-punctuation" key={key}>
            {part}
          </span>
        );
      })}
    </>
  );
}

function JsonLine({ line, index }: { line: string; index: number }) {
  const keyValue = line.match(/^(\s*)("[^"]+")(:\s*)(.*)$/);

  if (keyValue) {
    const [, indent, key, separator, value] = keyValue;
    const isStatus = key === '"status"';

    return (
      <span className="json-line">
        <span className="json-indent">{indent}</span>
        <span className="json-key">{key}</span>
        <span className="json-punctuation">{separator}</span>
        {isStatus ? (
          <span className="json-status">{value.replace(/,$/, "")}</span>
        ) : (
          <JsonValue lineIndex={index} value={value} />
        )}
        {isStatus && value.endsWith(",") ? <span className="json-punctuation">,</span> : null}
      </span>
    );
  }

  return (
    <span className="json-line">
      <JsonValue lineIndex={index} value={line} />
    </span>
  );
}

function CodeBlock({ label, children }: { label: string; children: string }) {
  const isJson = label.endsWith(".json") || children.trimStart().startsWith("{");
  const highlighted = children.split("\n").map((line, index) => {
    if (isJson) {
      return <JsonLine index={index} key={`${line}-${index}`} line={line} />;
    }

    let className = "terminal-line";
    if (line.startsWith("$")) className += " terminal-line-command";
    if (line.startsWith("+")) className += " terminal-line-add";
    if (line.startsWith("!")) className += " terminal-line-warn";
    if (line.startsWith("·")) className += " terminal-line-muted";

    return (
      <span className={className} key={`${line}-${index}`}>
        {line}
      </span>
    );
  });

  return (
    <div className="docs-code">
      <div className="code-head">
        <span />
        {label}
        <em>copy</em>
      </div>
      <pre>
        <code>{highlighted}</code>
      </pre>
    </div>
  );
}

function moduleHref(module: string) {
  return `https://github.com/jesseoue/stackfoundry/tree/main/registry/modules/${module}`;
}

function moduleTone(module: string) {
  if (moduleMeta[module]?.tone) return moduleMeta[module].tone;
  if (module.includes("billing") || module.includes("credit") || module.includes("quota"))
    return "billing";
  if (module.includes("auth") || module.includes("tenant") || module.includes("workspace"))
    return "auth";
  if (module.includes("api") || module.includes("webhook") || module.includes("sdk")) return "api";
  if (module.includes("docs") || module.includes("cms") || module.includes("deploy")) return "docs";
  if (module.includes("ai") || module.includes("model") || module.includes("rag")) return "ai";
  if (module.includes("analytics") || module.includes("growth") || module.includes("pricing"))
    return "growth";
  if (module.includes("audit") || module.includes("admin") || module.includes("status"))
    return "ops";
  return "foundation";
}

function ModuleChip({ module }: { module: string }) {
  const meta = moduleMeta[module];

  return (
    <a className={`docs-module-chip tone-${moduleTone(module)}`} href={moduleHref(module)}>
      {meta?.domain ? (
        <img
          alt=""
          aria-hidden="true"
          height="16"
          loading="lazy"
          src={`https://www.google.com/s2/favicons?domain=${meta.domain}&sz=32`}
          width="16"
        />
      ) : (
        <span aria-hidden="true" className="docs-module-dot" />
      )}
      <span>{module}</span>
    </a>
  );
}

export default function DocsPage() {
  return (
    <main className="page docs-page">
      <nav className="nav docs-nav" aria-label="Docs navigation">
        <div className="docs-nav-inner">
          <a className="brand" href="/" aria-label="StackFoundry home">
            <span className="mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="wordmark">stackfoundry</span>
            <span className="docs-brand-chip">Docs</span>
          </a>
          <div className="docs-search" aria-hidden="true">
            <span>Search docs, modules, CLI</span>
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </div>
          <div className="docs-nav-links">
            <a href="/registry">Registry</a>
            <a href="/docs#install-existing">Install</a>
            <a href="https://github.com/jesseoue/stackfoundry">GitHub</a>
          </div>
        </div>
      </nav>

      <div className="docs-layout">
        <aside className="docs-sidebar" aria-label="Documentation sections">
          <div className="docs-side-section">
            <h4>Get started</h4>
            <a className="active" href="#quick-start">
              <span />
              Quick start
              <em>5min</em>
            </a>
            <a href="#install-existing">
              <span />
              Existing app
            </a>
            <a href="#choose-path">
              <span />
              Choose a path
            </a>
            <a href="#module-catalog">
              <span />
              Module catalog
            </a>
          </div>
          <div className="docs-side-section">
            <h4>
              Registry <strong>160+</strong>
            </h4>
            {moduleGroups.slice(0, 7).map((group) => (
              <a href="#module-catalog" key={group.category}>
                <span />
                {group.category}
              </a>
            ))}
          </div>
          <div className="docs-side-section">
            <h4>Reference</h4>
            <a href="#authoring">
              <span />
              Author modules
            </a>
            <a href="#safety">
              <span />
              Review safely
            </a>
            <a href="#next">
              <span />
              Next steps
            </a>
          </div>
        </aside>

        <article className="docs-content">
          <div className="crumbs">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/docs">Docs</a>
            <span>/</span>
            <strong>Quick start</strong>
          </div>

          <header className="docs-hero">
            <p className="docs-kicker">Source registry for production SaaS modules</p>
            <h1 className="doc-title">Install modules. Own the source.</h1>
            <p className="doc-lede">
              StackFoundry installs production SaaS modules as editable source code. The registry is
              the product; presets are only bundles of modules you can inspect, dry-run, install,
              and maintain in your own app.
            </p>
            <div className="doc-meta">
              <span>module-first</span>
              <span>provider adapters optional</span>
              <span>diffable source</span>
              <a href="https://github.com/jesseoue/stackfoundry">Edit on GitHub →</a>
            </div>
          </header>

          <section className="docs-callout">
            <strong>Core rule</strong>
            <p>
              Base scaffolds stay small. Database, auth, billing, API product, operations,
              analytics, deployment, and AI capabilities are installed as modules. Hosted providers
              are adapters you choose deliberately, not hard dependencies hidden in a preset.
            </p>
          </section>

          <section aria-labelledby="quick-start">
            <h2 id="quick-start">
              1. Try the registry locally <Anchor id="quick-start" />
            </h2>
            <p>
              Clone the repository, validate the manifests, list available modules, then dry-run a
              module into a target app. Dry runs are the fastest way to understand what StackFoundry
              will add before you accept any source changes.
            </p>
            <CodeBlock label="terminal">
              {quickStart.map((line) => `$ ${line}`).join("\n")}
            </CodeBlock>
          </section>

          <section aria-labelledby="install-existing">
            <h2 id="install-existing">
              2. Add to an existing app <Anchor id="install-existing" />
            </h2>
            <p>
              Existing apps should start with a dry run. The CLI resolves registry dependencies,
              prints the proposed file changes, shows env notes, and leaves the review decision with
              you. After install, the source is yours to edit like any other code.
            </p>
            <CodeBlock label="terminal">{`$ pnpm stackfoundry add stripe-billing --target ./my-app --dry-run
· resolving registry dependency drizzle-postgres
· reading registry/modules/stripe-billing/module.json
+ packages/db/src/schema/billing.ts
+ apps/web/app/api/webhooks/stripe/route.ts
+ apps/web/app/(dashboard)/billing/page.tsx
+ .stackfoundry/skills/stripe-billing/SKILL.md
+ tests/checklist.md
! env notes: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

$ pnpm stackfoundry diff stripe-billing --target ./my-app
$ pnpm stackfoundry add stripe-billing --target ./my-app`}</CodeBlock>
            <div className="docs-steps">
              {existingAppSteps.map(([title, body], index) => (
                <div className="docs-step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <section className="docs-callout warn">
              <strong>Review the source</strong>
              <p>
                A module can add routes, schema, dependencies, env documentation, tests/checklists,
                and maintenance skills. Run your app's normal lint, typecheck, migration, and test
                flow after install. Secrets belong in your environment manager, not in committed
                files.
              </p>
            </section>
          </section>

          <section aria-labelledby="choose-path">
            <h2 id="choose-path">
              3. Choose a path <Anchor id="choose-path" />
            </h2>
            <p>
              StackFoundry separates source-owned product primitives from provider adapters. That
              lets a team start simple, add a hosted service when it helps, and still keep the
              product logic reviewable.
            </p>
            <div className="docs-path-grid">
              {pathCards.map((card) => (
                <div className="docs-path-card" key={card.title}>
                  <p className="docs-card-eyebrow">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <div className="docs-chip-row">
                    {card.modules.map((module) => (
                      <ModuleChip key={module} module={module} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="module-catalog">
            <h2 id="module-catalog">
              4. Module catalog <Anchor id="module-catalog" />
            </h2>
            <p>
              The registry covers foundation, data, auth and tenancy, billing, API product,
              operations, growth, provider adapters, optional AI, docs, and deployment. The examples
              below are representative modules, grouped by what they help a SaaS product ship.
            </p>
            <div className="docs-catalog-grid">
              {moduleGroups.map((group) => (
                <section className="docs-catalog-card" key={group.category}>
                  <h3>{group.category}</h3>
                  <p>{group.summary}</p>
                  <div className="docs-chip-row">
                    {group.modules.map((module) => (
                      <ModuleChip key={module} module={module} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section aria-labelledby="authoring">
            <h2 id="authoring">
              5. Author modules with contracts <Anchor id="authoring" />
            </h2>
            <p>
              Every module is more than a code snippet. It ships the implementation, the install
              contract, human documentation, maintenance guidance, and verification notes needed to
              keep it maintainable after it lands in a real app.
            </p>
            <CodeBlock label="registry/modules/api-keys/module.json">{`{
  "name": "api-keys",
  "type": "module",
  "category": "developer-platform",
  "status": "experimental",
  "registryDependencies": ["drizzle-postgres"],
  "dependencies": {
    "nanoid": "^5.0.0"
  },
  "env": [
    "API_KEY_PEPPER"
  ],
  "files": [
    {
      "source": "files/packages/db/src/schema/api-keys.ts",
      "target": "packages/db/src/schema/api-keys.ts"
    }
  ]
}`}</CodeBlock>
            <div className="docs-manifest-grid">
              {manifestParts.map(([name, body]) => (
                <div className="docs-manifest-card" key={name}>
                  <h3>{name}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="safety">
            <h2 id="safety">
              6. Review and update safely <Anchor id="safety" />
            </h2>
            <p>
              StackFoundry is designed for normal code review. Install commands should be paired
              with diffs, env review, migration review, and focused verification. Provider modules
              document their required keys and webhook setup, but they should never introduce
              committed secrets or lock a base preset to a vendor.
            </p>
            <div className="docs-checklist">
              <span>Read the manifest and docs before install.</span>
              <span>Run with --dry-run, then inspect the proposed files.</span>
              <span>Install registry dependencies intentionally.</span>
              <span>Copy env notes into your secret manager.</span>
              <span>Run migrations yourself after reviewing schema slices.</span>
              <span>Use tests/checklist.md as the module acceptance checklist.</span>
            </div>
          </section>

          <section aria-labelledby="next" className="docs-pager" id="next">
            <a href="/registry.json">
              <span>Reference</span>
              <strong>Open registry.json</strong>
            </a>
            <a href="https://github.com/jesseoue/stackfoundry">
              <span>Source</span>
              <strong>View on GitHub</strong>
            </a>
          </section>
        </article>

        <aside className="docs-toc" aria-label="On this page">
          <h5>On this page</h5>
          <a className="active" href="#quick-start">
            Try locally
          </a>
          <a href="#install-existing">Existing app</a>
          <a href="#choose-path">Choose a path</a>
          <a href="#module-catalog">Module catalog</a>
          <a href="#authoring">Authoring</a>
          <a href="#safety">Safety</a>
          <div className="docs-toc-meta">
            <span>Registry-first</span>
            <span>160+ modules</span>
            <a href="https://github.com/jesseoue/stackfoundry">GitHub →</a>
          </div>
        </aside>
      </div>
    </main>
  );
}
