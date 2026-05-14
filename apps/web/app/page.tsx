const siteUrl = "https://stackfoundry.dev/";

const stats = [
  { value: "160+", label: "Modules" },
  { value: "9", label: "Presets" },
  { value: "12", label: "Categories" },
  { value: "MIT", label: "License" },
];

const installSteps = [
  {
    number: "01",
    title: "Source files",
    description: "Routes, components, helpers, and server code land in canonical project paths.",
  },
  {
    number: "02",
    title: "Drizzle schema",
    description:
      "Schema slices are delivered with migration guidance. Migrations are never applied silently.",
  },
  {
    number: "03",
    title: "Env notes",
    description:
      "Required keys and provider setup notes are documented alongside the installed code.",
  },
  {
    number: "04",
    title: "Verification",
    description:
      "Each module ships tests or a focused checklist so maintainers know what to prove.",
  },
];

const moduleCards = [
  {
    name: "stripe-billing",
    title: "Stripe Billing",
    category: "billing",
    status: "installable",
    description:
      "Checkout, billing portal, subscription sync, webhook dedupe, and entitlement mapping.",
    files: ["schema/billing.ts", "api/webhooks/stripe", "(console)/billing"],
  },
  {
    name: "drizzle-postgres",
    title: "Drizzle Postgres",
    category: "database",
    status: "installable",
    description: "Postgres package, schema barrel, migrations, and server-only database access.",
    files: ["packages/db", "apps/web/src/lib/db.ts", "drizzle.config.ts"],
  },
  {
    name: "api-keys",
    title: "API Keys",
    category: "developer platform",
    status: "installable",
    description: "Key lifecycle, hashed storage, scopes, usage metadata, and management UI.",
    files: ["schema/api-keys.ts", "lib/api-keys.ts", "(console)/api-keys"],
  },
  {
    name: "webhook-inbox",
    title: "Webhook Inbox",
    category: "operations",
    status: "installable",
    description:
      "Received webhook table, status, retry controls, signature metadata, and detail UI.",
    files: ["schema/webhooks.ts", "api/webhooks/*", "(console)/webhooks"],
  },
  {
    name: "resend-email",
    title: "Resend Email",
    category: "comms",
    status: "planned",
    description: "Transactional email wiring, provider notes, templates, and delivery checks.",
    files: ["emails/*", "lib/email.ts", ".env.example notes"],
  },
  {
    name: "posthog-analytics",
    title: "PostHog Analytics",
    category: "analytics",
    status: "planned",
    description: "Event taxonomy, capture helpers, consent notes, and product analytics surfaces.",
    files: ["lib/analytics.ts", "components/analytics-provider", "docs/events.md"],
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

const demoModules = [
  "drizzle-postgres",
  "webhook-inbox",
  "audit-log",
  "resend-email",
  "posthog-analytics",
];

const demoModuleReel = [...demoModules, demoModules[0]];

const heroStack = [
  ["stripe-billing", "Checkout, portal, webhooks"],
  ["api-keys", "Hashed keys and scopes"],
  ["docs-fumadocs", "Product docs shell"],
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
      ["api-docs", "Reference shell and examples"],
      ["webhook-delivery", "Signed outbound events"],
      ["api-errors", "Machine-readable error codes"],
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

const presetRows = [
  ["next-saas", "Product teams", "Billing, auth surfaces, ops, legal, docs"],
  ["b2b-saas", "Team products", "RBAC, invites, audit, SSO, SCIM"],
  ["developer-platform", "API-first apps", "Keys, docs, webhooks, usage"],
  ["internal-admin", "Operators", "Support, health, incidents, backups"],
  ["ai-saas", "AI products", "Chat, model routing, quotas, metering"],
];

const assuranceRows = [
  {
    title: "What installs?",
    body: "Source files, route shells, helpers, schema slices, docs, skill guidance, and verification checklists.",
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
  description: "A source registry for production SaaS modules.",
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
              <span>v0.1 public preview</span>
              <span className="muted-label">for Next.js, Drizzle, Vercel</span>
            </div>

            <h1 className="display">
              Install SaaS modules.
              <br />
              <span>Own the source.</span>
            </h1>

            <p className="lede">
              StackFoundry is a public source registry for production SaaS modules. Add billing, API
              keys, docs, provider adapters, and presets as editable code with docs, env notes,
              tests, and maintenance guidance included.
            </p>

            <div className="actions">
              <a className="button primary" href="/registry">
                View Registry
              </a>
              <a className="button" href="/docs">
                Read Docs
              </a>
              <a className="button ghost" href="/docs#install-existing">
                Install a Module
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
                  pnpm stackfoundry add{" "}
                  <span className="rotator" aria-hidden="true">
                    {demoModuleReel.map((module, index) => (
                      <span key={`${module}-${index}`}>{module}</span>
                    ))}
                  </span>
                  <span className="sr-only">{demoModules.join(", ")}</span>
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
              A base app stays small. Registry modules add production capabilities in the same
              source paths your team already reviews and maintains.
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
                  <span className="prompt">$</span> pnpm stackfoundry add{" "}
                  <span className="terminal-rotator" aria-hidden="true">
                    {demoModuleReel.map((module, index) => (
                      <span key={`${module}-${index}`}>{module}</span>
                    ))}
                  </span>
                </div>
                <div>
                  <span className="muted">.</span> Resolving{" "}
                  <span className="muted">registry.json - stripe-billing</span>
                </div>
                <div>
                  <span className="muted">.</span> Registry deps{" "}
                  <span className="muted">drizzle-postgres</span>
                </div>
                <br />
                <div>
                  <span className="ok">+</span> packages/db/src/schema/billing.ts
                </div>
                <div>
                  <span className="ok">+</span> apps/web/src/lib/stripe/client.ts
                </div>
                <div>
                  <span className="ok">+</span> apps/web/src/app/api/webhooks/stripe/route.ts
                </div>
                <div>
                  <span className="ok">+</span> registry/modules/stripe-billing/docs.md
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
            <h2>Browse the building blocks, then open the docs.</h2>
            <p>
              The landing page shows the shape of the registry. The docs page explains how to
              install modules, review diffs, author manifests, and keep modules maintainable.
            </p>
          </div>

          <div className="modules-grid">
            {moduleCards.map((module, index) => (
              <article
                className={index === 0 ? "module-card featured" : "module-card"}
                key={module.name}
              >
                <div className="module-head">
                  <span className="module-icon" aria-hidden="true" />
                  <div className="module-title-block">
                    <span className="module-name">{module.name}</span>
                    <span className="module-category">{module.category}</span>
                  </div>
                  <span className="module-status">{module.status}</span>
                </div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <div className="module-files-label">Installs</div>
                <ul className="file-list">
                  {module.files.map((file) => (
                    <li key={file}>
                      <code>{file}</code>
                    </li>
                  ))}
                </ul>
              </article>
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
            <h2>Give users more than a wall of cards.</h2>
            <p>
              The registry now presents modules as searchable commands, preset comparison rows, and
              review prompts. These patterns borrow from product UI conventions without hiding the
              source-first model.
            </p>
          </div>

          <div className="showcase-grid">
            <aside className="command-panel" aria-label="Module discovery preview">
              <div className="command-input">
                <span aria-hidden="true">⌘K</span>
                <span>Search modules, presets, docs...</span>
              </div>
              <div className="command-list">
                {commandGroups.map((group) => (
                  <div className="command-group" key={group.label}>
                    <div className="command-label">{group.label}</div>
                    {group.items.map(([name, description]) => (
                      <div className="command-item" key={name}>
                        <span>{name}</span>
                        <small>{description}</small>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </aside>

            <div className="data-panel">
              <div className="panel-head">
                <div>
                  <h3>Preset Fit</h3>
                  <p>Compare bundles by use case before installing.</p>
                </div>
                <span className="panel-badge">5 active</span>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Preset</th>
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
