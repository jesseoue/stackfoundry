const readyModules = ["drizzle-postgres", "api-keys", "stripe-billing", "ai-chat"];

const plannedModules = [
  "clerk-auth",
  "orgs-rbac",
  "webhook-inbox",
  "audit-log",
  "posthog-analytics",
  "sentry-monitoring",
  "resend-email",
  "public-api-orpc",
  "cloudflare-workers",
  "convex-backend",
  "unkey-api-keys",
  "autumn-entitlements",
];

export default function Page() {
  return (
    <main className="page">
      <div className="shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="/">
            <span className="mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>stackfoundry</span>
          </a>
          <div className="navlinks">
            <a href="#modules">modules</a>
            <a href="#registry">registry</a>
            <a href="https://github.com/jesseoue/stackfoundry">github</a>
          </div>
        </nav>

        <section className="hero">
          <div>
            <div className="eyebrow">source registry for production SaaS</div>
            <h1>Install the parts of a SaaS app you actually need.</h1>
            <p className="lead">
              StackFoundry delivers full-stack modules as editable source code: routes, components,
              Drizzle schemas, environment notes, tests, docs, and maintenance guidance.
            </p>
            <div className="actions">
              <a className="button primary" href="https://github.com/jesseoue/stackfoundry">
                View on GitHub
              </a>
              <a className="button" href="#registry">
                See the registry
              </a>
            </div>
          </div>

          <aside className="terminal" aria-label="StackFoundry terminal demo">
            <div className="terminal-header">
              <span>stackfoundry</span>
              <span>module install</span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="prompt">$</span> pnpm create stackfoundry my-app
              </div>
              <div className="muted">created base app</div>
              <br />
              <div>
                <span className="prompt">$</span> stackfoundry add drizzle-postgres
              </div>
              <div className="ok">wrote packages/db/src/client.ts</div>
              <div className="ok">wrote drizzle.config.ts</div>
              <br />
              <div>
                <span className="prompt">$</span> stackfoundry add api-keys
              </div>
              <div className="ok">wrote api key schema</div>
              <div className="ok">wrote maintenance instructions</div>
              <br />
              <div>
                <span className="prompt">$</span> stackfoundry diff api-keys
              </div>
              <div className="muted">same apps/web/src/lib/api-keys.ts</div>
            </div>
          </aside>
        </section>

        <section className="grid" aria-label="StackFoundry promises">
          <div className="card featured">
            <h2>Copy the code</h2>
            <p>Modules install source files into your app. No opaque package wrappers. No black boxes.</p>
          </div>
          <div className="card">
            <h2>Own the system</h2>
            <p>Each module includes schemas, docs, setup notes, and checklists so the code can evolve.</p>
          </div>
          <div className="card">
            <h2>Update safely</h2>
            <p>Installed file hashes power diff and update workflows without silently overwriting changes.</p>
          </div>
        </section>

        <section className="section" id="modules">
          <div className="section-title">
            <h2>Production modules</h2>
            <p>
              Start with the core SaaS systems, then layer in providers, growth, observability, and optional AI.
            </p>
          </div>
          <div className="modules">
            {readyModules.map((module) => (
              <div className="module ready" key={module}>
                {module}
              </div>
            ))}
            {plannedModules.map((module) => (
              <div className="module" key={module}>
                {module}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="registry">
          <div className="section-title">
            <h2>Registry-first</h2>
            <p>
              The CLI is only the delivery mechanism. The registry is the product: modules, presets,
              provider adapters, and generated public item JSON.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <h3>Modules</h3>
              <p>Install one production capability at a time: billing, API keys, webhooks, analytics, docs.</p>
            </div>
            <div className="card">
              <h3>Presets</h3>
              <p>Bundle modules into opinionated paths like next-saas, developer-platform, and b2b-saas.</p>
            </div>
            <div className="card">
              <h3>Providers</h3>
              <p>Keep Stripe, Vercel, PostHog, Sentry, Resend, and others behind clean adapter boundaries.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>stackfoundry</span>
          <span>source-delivered modules</span>
        </footer>
      </div>
    </main>
  );
}
