import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Quick start, registry model, modules, presets, and provider adapters for StackFoundry.",
  alternates: {
    canonical: "/docs",
  },
};

const registrySections = [
  ["Foundation", "Next.js shell, theme, env, quality gates"],
  ["Database", "Drizzle, Postgres, migrations, relations"],
  ["Billing", "Stripe, subscriptions, entitlements, usage"],
  ["API Product", "API keys, public API, webhooks, docs"],
  ["Operations", "Audit logs, jobs, incidents, health"],
  ["Providers", "Vercel, Cloudflare, Neon, Supabase, Upstash"],
];

const quickStart = [
  "pnpm create stackfoundry my-app",
  "cd my-app",
  "pnpm dlx stackfoundry add drizzle-postgres",
  "pnpm dlx stackfoundry add api-keys",
  "pnpm dlx stackfoundry add stripe-billing",
];

export default function DocsPage() {
  return (
    <main className="page">
      <nav className="nav" aria-label="Docs navigation">
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
            <a href="/">Home</a>
            <a href="#quick-start">Quick start</a>
            <a href="#modules">Modules</a>
            <a href="#authoring">Authoring</a>
          </div>
          <a className="button" href="https://github.com/jesseoue/stackfoundry">
            GitHub
          </a>
        </div>
      </nav>

      <div className="container">
        <section className="docs-preview docs-page-shell">
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
              <a href="#project-layout">
                <span />
                Project layout
              </a>
            </div>
            <div className="docs-side-section">
              <h4>Registry</h4>
              {registrySections.map(([name]) => (
                <a href="#modules" key={name}>
                  <span />
                  {name}
                </a>
              ))}
            </div>
            <div className="docs-side-section">
              <h4>Reference</h4>
              <a href="#authoring">
                <span />
                module.json schema
              </a>
              <a href="#safety">
                <span />
                update safety
              </a>
            </div>
          </aside>

          <article className="docs-content">
            <div className="crumbs">
              <a href="/">Home</a>
              <span>/</span>
              <span>Docs</span>
              <span>/</span>
              <strong>Quick start</strong>
            </div>

            <h1 className="doc-title">Build with modules.</h1>
            <p className="doc-lede">
              StackFoundry installs production SaaS capabilities as editable source code. Each
              module brings implementation files, dependency metadata, environment notes, docs, and
              a verification checklist.
            </p>
            <div className="doc-meta">
              <span>source registry</span>
              <span>module-first</span>
              <span>safe diff/update</span>
            </div>

            <h2 id="quick-start">1. Create a new app</h2>
            <p>
              Start from a preset when you want the fastest path. Presets are just bundles of
              modules, so they stay transparent and editable.
            </p>
            <div className="docs-code">
              <div className="code-head">
                <span />
                terminal
              </div>
              <pre>{quickStart.map((line) => `$ ${line}`).join("\n")}</pre>
            </div>

            <h2 id="install-existing">2. Add to an existing app</h2>
            <p>
              Install a single capability into an existing codebase. StackFoundry resolves registry
              dependencies first and records file hashes for future diffs.
            </p>
            <div className="docs-code">
              <div className="code-head">
                <span />
                terminal
              </div>
              <pre>{`$ pnpm dlx stackfoundry add stripe-billing
· resolving registry dependency drizzle-postgres
+ packages/db/src/schema/billing.ts
+ apps/web/src/app/api/webhooks/stripe/route.ts
+ .env.stackfoundry.stripe-billing.example`}</pre>
            </div>

            <h2 id="modules">3. Choose module families</h2>
            <p>
              The registry is organized around real SaaS systems, not arbitrary snippets. Provider
              modules stay adapters around shared domain interfaces.
            </p>
            <div className="docs-grid">
              {registrySections.map(([name, description]) => (
                <div className="docs-card" key={name}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>

            <h2 id="authoring">4. Author modules with contracts</h2>
            <p>
              A module manifest declares the contract for installable source: files, dependencies,
              environment variables, registry dependencies, status, and maintenance metadata.
            </p>
            <div className="docs-code">
              <div className="code-head">
                <span />
                registry/modules/api-keys/module.json
              </div>
              <pre>{`{
  "name": "api-keys",
  "type": "module",
  "category": "developer-platform",
  "registryDependencies": ["drizzle-postgres"],
  "status": "experimental"
}`}</pre>
            </div>

            <h2 id="safety">5. Review and update safely</h2>
            <p>
              StackFoundry records installed file hashes and refuses to overwrite changed files
              without explicit `--force`. The goal is to make generated source reviewable like any
              other app code.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
