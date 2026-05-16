import {
  ModuleCard,
  ModuleCardRow,
  type ModuleCardVariant,
  type ModuleTag,
} from "./components/module-card";

const siteUrl = "https://stackfoundry.dev/";

type LandingModuleCard = {
  name: string;
  title: string;
  category: string;
  description: string;
  version?: string;
  variant?: ModuleCardVariant;
  tags: ModuleTag[];
  footer?: {
    summary: string;
    actions?: Array<{ label: string; href: string }>;
  };
};

const stats = [
  { value: "157", label: "Modules" },
  { value: "13", label: "Presets" },
  { value: "30", label: "Active Categories" },
  { value: "MIT", label: "License" },
];

const installSteps = [
  {
    number: "01",
    title: "Dry-run the recipe",
    description: "Preview every API key, usage, billing, webhook, docs, env, and checklist file.",
  },
  {
    number: "02",
    title: "Install the source",
    description:
      "Routes, components, helpers, server code, schema slices, and docs land in canonical paths.",
  },
  {
    number: "03",
    title: "Wire env and migrations",
    description:
      "Required provider keys and migration notes are documented alongside the installed code.",
  },
  {
    number: "04",
    title: "Verification",
    description:
      "Each module ships tests or a focused checklist so maintainers know what to prove.",
  },
];

const moduleCards: LandingModuleCard[] = [
  {
    name: "api-saas-starter",
    title: "API SaaS Starter",
    category: "recipe",
    version: "ready",
    variant: "featured",
    description:
      "API keys, usage tracking, rate limits, credits, Stripe billing, webhooks, docs, and request visibility.",
    tags: [
      { label: "wedge", tone: "accent" },
      { label: "recipe", tone: "success" },
      { label: "API-first SaaS", tone: "provider" },
      { label: "source-owned", tone: "skill" },
    ],
    footer: {
      summary: "20 modules · staged install path",
      actions: [
        { label: "recipe", href: "/r/recipes/api-saas-starter.json" },
        { label: "json", href: "/r/api-saas-starter.json" },
      ],
    },
  },
  {
    name: "agent-ready-installs",
    title: "Agent-Ready Installs",
    category: "developer platform",
    version: "ready",
    description:
      "One-shot prompt packs and context files for coding assistants to install SaaS paths safely.",
    tags: [
      { label: "agent-ready", tone: "accent" },
      { label: "one-shot prompts", tone: "success" },
      { label: "recipe-aware", tone: "provider" },
      { label: "review workflow", tone: "skill" },
    ],
    footer: {
      summary: "13 files · prompts · context JSON",
      actions: [{ label: "json", href: "/r/agent-ready-installs.json" }],
    },
  },
  {
    name: "api-keys",
    title: "API Keys",
    category: "developer platform",
    version: "v0.5.0",
    description: "Key lifecycle, hashed storage, scopes, usage metadata, and management UI.",
    tags: [
      { label: "api" },
      { label: "deps: drizzle-postgres", tone: "dependency" },
      { label: "maintenance skill", tone: "skill" },
    ],
    footer: {
      summary: "14 files · 1 schema · 1 skill",
      actions: [{ label: "json", href: "/r/api-keys.json" }],
    },
  },
  {
    name: "usage-metering",
    title: "Usage Metering",
    category: "API product",
    version: "ready",
    description: "Usage events, metering helpers, quota visibility, and billing-ready records.",
    tags: [
      { label: "usage" },
      { label: "deps: billing-core", tone: "dependency" },
      { label: "maintenance skill", tone: "skill" },
    ],
    footer: {
      summary: "source-owned usage system",
      actions: [{ label: "json", href: "/r/usage-metering.json" }],
    },
  },
  {
    name: "stripe-billing",
    title: "Stripe Billing",
    category: "billing",
    version: "v0.4.2",
    description:
      "Checkout, billing portal, subscription sync, webhook dedupe, and entitlement mapping.",
    tags: [
      { label: "billing" },
      { label: "deps: billing-core", tone: "dependency" },
      { label: "adapter option", tone: "provider" },
      { label: "maintenance skill", tone: "skill" },
    ],
    footer: {
      summary: "18 files · 2 schemas · 1 skill",
      actions: [
        { label: "docs", href: "/docs#modules" },
        { label: "json", href: "/r/stripe-billing.json" },
      ],
    },
  },
  {
    name: "webhook-inbox",
    title: "Webhook Inbox",
    category: "operations",
    version: "v0.2.0",
    description:
      "Received webhook table, status, retry controls, signature metadata, and detail UI.",
    tags: [
      { label: "api" },
      { label: "operations" },
      { label: "deps: drizzle-postgres", tone: "dependency" },
      { label: "maintenance skill", tone: "skill" },
    ],
    footer: {
      summary: "11 files · 1 schema · 1 skill",
      actions: [{ label: "json", href: "/r/webhook-inbox.json" }],
    },
  },
  {
    name: "ai-chatbot-sdk",
    title: "AI Chatbot SDK",
    category: "optional AI",
    variant: "featured",
    version: "v0.1.0",
    description:
      "Vercel AI SDK chat, AI Elements primitives, gateway-ready model routing, and a source-owned chatbot shell.",
    tags: [
      { label: "ai" },
      { label: "Vercel AI SDK", tone: "provider" },
      { label: "deps: ai-elements", tone: "dependency" },
      { label: "maintenance skill", tone: "skill" },
    ],
    footer: {
      summary: "2 files · 2 deps · 1 skill",
      actions: [{ label: "json", href: "/r/ai-chatbot-sdk.json" }],
    },
  },
  {
    name: "resend-email",
    title: "Resend Email",
    category: "comms",
    variant: "beta",
    version: "v0.2.0",
    description: "Transactional email wiring, provider notes, templates, and delivery checks.",
    tags: [
      { label: "email" },
      { label: "adapter option", tone: "provider" },
      { label: "maintenance skill", tone: "skill" },
    ],
  },
  {
    name: "posthog-analytics",
    title: "PostHog Analytics",
    category: "analytics",
    variant: "beta",
    version: "ready",
    description: "Next.js provider, pageview tracking, event capture helper, and consent notes.",
    tags: [
      { label: "analytics" },
      { label: "adapter option", tone: "provider" },
      { label: "maintenance skill", tone: "skill" },
    ],
  },
];

const backlog = [
  ["audit-log", "operations"],
  ["security-headers", "security"],
  ["quota-enforcement", "billing"],
  ["email-templates", "comms"],
  ["public-api-orpc", "developer platform"],
  ["enterprise-sso", "auth"],
  ["backup-restore", "operations"],
];

const heroStack = [
  ["api-keys", "Hashed keys and scopes"],
  ["usage-metering", "Events, quotas, credits"],
  ["stripe-billing", "Checkout and entitlements"],
  ["webhook-delivery", "Signed outbound events"],
];

const commandGroups = [
  {
    label: "Core SaaS",
    items: [
      ["account-settings", "Profile, security, notifications"],
      ["workspace-settings", "Members, billing, security"],
      ["invites", "Expiring invitation tokens"],
      ["audit-log", "Append-only event history"],
    ],
  },
  {
    label: "Developer Platform",
    items: [
      ["api-keys", "Hashed keys and scopes"],
      ["usage-metering", "Usage events and quota records"],
      ["stripe-billing", "Plans, checkout, webhooks"],
      ["api-docs", "Reference shell and examples"],
      ["webhook-delivery", "Signed outbound events"],
    ],
  },
  {
    label: "Launch Readiness",
    items: [
      ["security-headers", "CSP and browser hardening"],
      ["cookie-consent", "Preference capture"],
      ["backup-restore", "Recovery checklist"],
      ["maintenance-mode", "Operator-controlled downtime"],
    ],
  },
];

const commandRows: Array<{
  name: string;
  category: string;
  description: string;
  selected?: boolean;
  tags?: ModuleTag[];
}> = [
  {
    name: "api-saas-starter",
    category: "recipe",
    description: "API keys, usage, quotas, credits, billing, docs, and webhooks.",
    tags: [{ label: "best wedge", tone: "accent" }],
    selected: true,
  },
  {
    name: "api-keys",
    category: "api",
    description: "Hashed keys, scopes, last-used metadata, and management UI.",
    tags: [{ label: "maintenance skill", tone: "skill" }],
  },
  {
    name: "billing-core",
    category: "billing",
    description: "Shared customers, plans, subscriptions, entitlements, and usage.",
    tags: [{ label: "core", tone: "success" }],
  },
];

const presetRows = [
  ["api-saas-starter", "API-first SaaS", "Keys, usage, credits, billing, webhooks"],
  ["agent-ready-installs", "Coding agents", "Prompts, context, dry-run review"],
  ["b2b-saas", "Team products", "RBAC, invites, audit, SSO, SCIM"],
  ["internal-admin", "Operators", "Support, health, incidents, backups"],
  ["ai-saas", "AI products", "Chat, model routing, quotas, metering"],
];

const assuranceRows = [
  {
    title: "What installs?",
    body: "Source files, route shells, helpers, schema slices, prompts, docs, maintenance skills, and verification checklists.",
  },
  {
    title: "What stays out?",
    body: "Secrets, local metadata, generated caches, and provider lock-in outside explicit provider adapter modules.",
  },
  {
    title: "How do teams review it?",
    body: "Every module is declared in a manifest with files, dependencies, env notes, schema exports, and status.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StackFoundry",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description:
    "Install API keys, usage, billing, webhooks, and production SaaS modules as editable source code.",
  url: siteUrl,
  codeRepository: "https://github.com/jesseoue/stackfoundry",
  license: "https://github.com/jesseoue/stackfoundry/blob/main/LICENSE",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Page() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
            <a href="/registry">Registry</a>
            <a href="/docs">Docs</a>
            <a href="/blog/building-saas-with-source-modules">Blog</a>
            <a href="/alternatives">Alternatives</a>
          </div>
          <a className="button" href="https://github.com/jesseoue/stackfoundry">
            GitHub
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>source registry for production SaaS systems</span>
              <span className="muted-label">API keys · usage · billing · webhooks</span>
            </div>

            <h1 className="display">
              Launch API SaaS plumbing
              <br />
              <span>without a black-box starter.</span>
            </h1>

            <p className="lede">
              Install API keys, usage tracking, rate limits, Stripe billing, credits, webhooks,
              docs, and operating checks into an existing app as editable source code. Modules are
              the product; recipes are the path; presets are only convenience bundles.
            </p>

            <div className="actions">
              <a className="button primary" href="/registry">
                Start with API SaaS
              </a>
              <a className="button" href="/docs">
                Read Docs
              </a>
              <a className="button ghost" href="/docs#install-existing">
                Dry-run Install
              </a>
              <a className="button ghost" href="/blog/building-saas-with-source-modules">
                Build SaaS Guide
              </a>
            </div>

            <div className="hero-meta">
              {stats.map((stat) => (
                <div className="metric" key={stat.label}>
                  <div className="metric-value">{stat.value}</div>
                  <div className="metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-artifact" aria-label="StackFoundry install preview">
            <div className="artifact-terminal">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <strong>stackfoundry</strong>
              </div>
              <div className="artifact-command">
                <span className="prompt">$</span>
                <code>
                  pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run
                </code>
              </div>
              <div className="artifact-output">
                <span>
                  <strong>+</strong> source files
                </span>
                <span>
                  <strong>+</strong> docs and env notes
                </span>
                <span>
                  <strong>+</strong> tests/checklist.md
                </span>
                <span>
                  <strong>✓</strong> dry-run diff ready
                </span>
              </div>
            </div>

            <div className="artifact-registry">
              <div className="artifact-head">
                <span>Registry Preview</span>
              </div>
              <div className="artifact-stack">
                {heroStack.map(([name, description]) => (
                  <div className="artifact-module" key={name}>
                    <span aria-hidden="true" />
                    <div>
                      <strong>{name}</strong>
                      <small>{description}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </header>

      <div className="container">
        <section className="section" id="how">
          <div className="section-head">
            <div className="section-eyebrow">Install</div>
            <h2>One command. The full module lands in your repo.</h2>
            <p>
              The strongest first path is API SaaS: keys, usage, quotas, credits, billing, docs,
              webhooks, and request visibility installed as normal source files.
            </p>
          </div>

          <div className="how-grid">
            <div className="steps">
              {installSteps.map((step) => (
                <article className="step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="terminal" aria-label="Terminal install demo">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <strong>~/apps/web - main</strong>
              </div>
              <div className="terminal-body">
                <div>
                  <span className="prompt">$</span> pnpm stackfoundry add recipe api-saas-starter
                  --target ./my-app --dry-run
                </div>
                <div>
                  <span className="muted">.</span> Resolving{" "}
                  <span className="muted">recipes/api-saas-starter.json</span>
                </div>
                <div>
                  <span className="muted">.</span> Registry deps{" "}
                  <span className="muted">auth-core, api-keys, usage-metering, stripe-billing</span>
                </div>
                <br />
                <div>
                  <span className="ok">+</span> apps/web/src/lib/api-keys/verify.ts
                </div>
                <div>
                  <span className="ok">+</span> packages/db/src/schema/usage.ts
                </div>
                <div>
                  <span className="ok">+</span> apps/web/src/app/api/webhooks/route.ts
                </div>
                <div>
                  <span className="ok">+</span> .stackfoundry/skills/api-keys/SKILL.md
                </div>
                <br />
                <div>
                  <span className="ok">done</span> Installed source files, env notes, and checklist
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="modules">
          <div className="section-head">
            <div className="section-eyebrow">Modules</div>
            <h2>Lead with the modules people already need to monetize an API.</h2>
            <p>
              The registry is broad, but the public wedge is narrow: API keys, usage, quotas,
              billing, webhooks, docs, and operations that land in an existing app as source.
            </p>
          </div>

          <div className="modules-grid">
            {moduleCards.map((module) => (
              <ModuleCard
                description={module.description}
                footer={module.footer}
                key={module.name}
                name={module.name}
                tags={module.tags}
                title={module.title}
                variant={module.variant}
                version={module.version}
              />
            ))}
          </div>

          <div className="backlog-head">
            <span>Registry modules</span>
            <span>adapters and product systems</span>
          </div>
          <ul className="backlog">
            {backlog.map(([name, category]) => (
              <li className="module-pill" key={name}>
                <span>{name}</span>
                <span>{category}</span>
              </li>
            ))}
          </ul>
          <div className="section-action">
            <a className="button" href="/docs#modules">
              Open module docs
            </a>
          </div>
        </section>

        <section className="section" id="explore">
          <div className="section-head">
            <div className="section-eyebrow">Explore</div>
            <h2>Modules first. Recipes second. Presets last.</h2>
            <p>
              Modules are the product. Recipes show the install order for a workflow like API SaaS.
              Presets stay useful, but they should never make StackFoundry feel like a boilerplate.
            </p>
          </div>

          <div className="showcase-grid">
            <aside className="command-panel" aria-label="Module discovery preview">
              <div className="command-input">
                <span aria-hidden="true">⌘K</span>
                <span>Search modules, presets, docs...</span>
              </div>
              <div className="command-list">
                <div className="command-group">
                  <div className="command-label">Installable Modules</div>
                  {commandRows.map((row) => (
                    <ModuleCardRow
                      category={row.category}
                      description={row.description}
                      key={row.name}
                      name={row.name}
                      selected={row.selected}
                      tags={row.tags}
                    />
                  ))}
                </div>
                {commandGroups.slice(1).map((group) => (
                  <div className="command-group" key={group.label}>
                    <div className="command-label">{group.label}</div>
                    {group.items.slice(0, 2).map(([name, description]) => (
                      <ModuleCardRow
                        category={group.label}
                        description={description}
                        key={name}
                        name={name}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </aside>

            <div className="data-panel">
              <div className="panel-head">
                <div>
                  <h3>Recipe Fit</h3>
                  <p>Pick the painful workflow before installing a bundle.</p>
                </div>
                <span className="panel-badge">5 active</span>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Path</th>
                      <th>Best for</th>
                      <th>Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {presetRows.map(([preset, audience, includes]) => (
                      <tr key={preset}>
                        <td>
                          <code>{preset}</code>
                        </td>
                        <td>{audience}</td>
                        <td>{includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="assurance-list">
            {assuranceRows.map((row) => (
              <details
                className="assurance-item"
                key={row.title}
                open={row.title === "What installs?"}
              >
                <summary>{row.title}</summary>
                <p>{row.body}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section" id="registry">
          <div className="manifest-block">
            <div className="section-head compact">
              <div className="section-eyebrow">Registry</div>
              <h2>Every module is a manifest. Every manifest is a contract.</h2>
              <p>
                Module metadata declares source paths, dependencies, environment requirements,
                schema exports, and verification guidance so installs and diffs stay reviewable.
              </p>
              <a className="button" href="/docs#authoring">
                Learn the manifest model
              </a>
            </div>

            <div className="code-block">
              <div className="code-head">
                <span />
                registry/modules/stripe-billing/module.json
              </div>
              <pre>
                <code>
                  <span className="json-line">
                    <span className="json-punctuation">{"{"}</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"  "}</span>
                    <span className="json-key">"name"</span>
                    <span className="json-punctuation">: </span>
                    <span className="json-string">"stripe-billing"</span>
                    <span className="json-punctuation">,</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"  "}</span>
                    <span className="json-key">"type"</span>
                    <span className="json-punctuation">: </span>
                    <span className="json-string">"module"</span>
                    <span className="json-punctuation">,</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"  "}</span>
                    <span className="json-key">"category"</span>
                    <span className="json-punctuation">: </span>
                    <span className="json-string">"billing"</span>
                    <span className="json-punctuation">,</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"  "}</span>
                    <span className="json-key">"registryDependencies"</span>
                    <span className="json-punctuation">: [</span>
                    <span className="json-string">"drizzle-postgres"</span>
                    <span className="json-punctuation">],</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"  "}</span>
                    <span className="json-key">"env"</span>
                    <span className="json-punctuation">: [</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"    "}</span>
                    <span className="json-env">"STRIPE_SECRET_KEY"</span>
                    <span className="json-punctuation">,</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"    "}</span>
                    <span className="json-env">"STRIPE_WEBHOOK_SECRET"</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"  "}</span>
                    <span className="json-punctuation">],</span>
                  </span>
                  <span className="json-line">
                    <span className="json-indent">{"  "}</span>
                    <span className="json-key">"status"</span>
                    <span className="json-punctuation">: </span>
                    <span className="json-status">"experimental"</span>
                  </span>
                  <span className="json-line">
                    <span className="json-punctuation">{"}"}</span>
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section className="sponsor-strip" id="sponsors">
          <div>
            <h2>Sponsors</h2>
            <p>
              StackFoundry is open source and free to use. Sponsors fund module maintenance,
              provider adapters, and higher-quality examples.
            </p>
          </div>
          <div className="sponsor-slots">
            <span>your logo</span>
            <span>your logo</span>
            <span>open</span>
            <span>open</span>
          </div>
        </section>

        <footer className="footer">
          <a className="brand" href="/">
            <span className="mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="wordmark">stackfoundry</span>
          </a>
          <span>Source-delivered modules for production SaaS.</span>
        </footer>
      </div>
    </main>
  );
}
