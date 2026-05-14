const siteUrl = "https://stackfoundry.dev/";

const stats = [
  { value: "160+", label: "Modules" },
  { value: "8", label: "Presets" },
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
    description: "Schema slices are delivered with migration guidance. Migrations are never applied silently.",
  },
  {
    number: "03",
    title: "Env notes",
    description: "Required keys and provider setup notes are documented alongside the installed code.",
  },
  {
    number: "04",
    title: "Verification",
    description: "Each module ships tests or a focused checklist so maintainers know what to prove.",
  },
];

const moduleCards = [
  {
    name: "stripe-billing",
    title: "Stripe Billing",
    category: "billing",
    status: "installable",
    description: "Checkout, billing portal, subscription sync, webhook dedupe, and entitlement mapping.",
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
    description: "Received webhook table, status, retry controls, signature metadata, and detail UI.",
    files: ["schema/webhooks.ts", "api/webhooks/*", "(console)/webhooks"],
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
  description: "Install production SaaS modules as editable source code.",
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
            <a href="#modules">Modules</a>
            <a href="#explore">Explore</a>
            <a href="#how">Install</a>
            <a href="#registry">Registry</a>
            <a href="#sponsors">Sponsors</a>
          </div>
          <a className="button" href="https://github.com/jesseoue/stackfoundry">
            GitHub
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-inner">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span>v0.1 public preview</span>
            <span className="muted-label">for Next.js, Drizzle, Vercel</span>
          </div>

          <h1 className="display">
            Copy the code.
            <br />
            <span>Own the code.</span>
          </h1>

          <p className="lede">
            StackFoundry is a public source registry for production SaaS modules. Install billing,
            API keys, database wiring, webhooks, analytics, and operations surfaces as editable code
            with schemas, env notes, tests, docs, and maintenance guidance.
          </p>

          <div className="install">
            <span className="prompt">$</span>
            <code>
              pnpm dlx <span>stackfoundry</span> add stripe-billing
            </code>
          </div>

          <div className="actions">
            <a className="button primary" href="https://github.com/jesseoue/stackfoundry">
              View the registry
            </a>
            <a className="button ghost" href="#modules">
              Browse modules
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
                  <span className="prompt">$</span> pnpm dlx stackfoundry add stripe-billing
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
            <h2>Source modules, not opaque boilerplate.</h2>
            <p>
              Each module owns one capability. Provider modules stay adapters around shared domain
              interfaces, so base scaffolds stay small.
            </p>
          </div>

          <div className="modules-grid">
            {moduleCards.map((module, index) => (
              <article className={index === 0 ? "module-card featured" : "module-card"} key={module.name}>
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
            <span>Next modules</span>
            <span>planned adapters and product systems</span>
          </div>
          <ul className="backlog">
            {backlog.map(([name, category]) => (
              <li className="module-pill" key={name}>
                <span>{name}</span>
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="explore">
          <div className="section-head">
            <div className="section-eyebrow">Explore</div>
            <h2>Give users more than a wall of cards.</h2>
            <p>
              The registry now presents modules as searchable commands, preset comparison rows,
              and review prompts. These patterns borrow from product UI conventions without hiding
              the source-first model.
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
              <details className="assurance-item" key={row.title} open={row.title === "What installs?"}>
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
            </div>

            <div className="code-block">
              <div className="code-head">
                <span />
                registry/modules/stripe-billing/module.json
              </div>
              <pre>{`{
  "name": "stripe-billing",
  "type": "module",
  "category": "billing",
  "registryDependencies": ["drizzle-postgres"],
  "env": [
    "STRIPE_SECRET_KEY",
    "STRIPE_WEBHOOK_SECRET"
  ],
  "status": "experimental"
}`}</pre>
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
