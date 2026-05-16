import type { Metadata } from "next";

const articleUrl = "/blog/building-saas-with-source-modules";

export const metadata: Metadata = {
  title: "Build and Grow a SaaS With Source-Owned Modules",
  description:
    "A practical guide to building SaaS in layers: API keys, usage, billing, webhooks, auth, analytics, support, SEO, and vendor adapters as editable source.",
  alternates: {
    canonical: articleUrl,
  },
  keywords: [
    "build SaaS",
    "grow SaaS",
    "API SaaS",
    "SaaS modules",
    "source-owned SaaS",
    "SaaS infrastructure",
    "SaaS billing",
    "SaaS analytics",
    "SaaS starter",
  ],
  openGraph: {
    title: "Build and Grow a SaaS With Source-Owned Modules",
    description:
      "Start with one painful workflow, install production SaaS systems as source, and keep vendors as replaceable adapters.",
    url: articleUrl,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build and Grow a SaaS With Source-Owned Modules",
    description:
      "A clean path for API keys, usage, billing, webhooks, auth, analytics, support, and growth loops.",
  },
};

const buildStages = [
  [
    "1. Pick the narrow wedge",
    "Start with the workflow that proves value fastest. For StackFoundry, that is API SaaS: keys, usage, quotas, credits, billing, docs, and webhooks.",
  ],
  [
    "2. Install source, not mystery glue",
    "Dry-run the recipe, review every file, then install source that your team can edit, test, and remove like normal application code.",
  ],
  [
    "3. Keep vendors as adapters",
    "Use Stripe, Clerk, Resend, PostHog, Tinybird, Vercel, Cloudflare, and other great vendors without making them hidden base dependencies.",
  ],
  [
    "4. Add operating loops",
    "SaaS grows when support, incidents, onboarding, analytics, billing, and customer feedback are connected to product decisions.",
  ],
];

const systemRows = [
  ["Access", "Auth boundary, teams, tenant context, roles, invites, SSO, SCIM"],
  ["Monetization", "Stripe billing, credits, plans, entitlements, invoices, dunning, tax"],
  ["API Product", "API keys, rate limits, usage metering, docs, webhooks, request visibility"],
  ["Growth", "Product analytics, Tinybird events, feature flags, lifecycle email, announcements"],
  ["Operations", "Admin console, support, health, incidents, status, postmortems, audit"],
  ["Discovery", "SEO, AI SEO, llms.txt, docs, changelog, public roadmap, alternatives pages"],
];

const verificationRows = [
  "Run Biome lint/format before shipping UI changes.",
  "Run TypeScript typecheck and production build before deploying.",
  "Review env notes and never commit provider credentials.",
  "Run migration review when schema files land.",
  "Smoke check responsive layouts for marketing, docs, registry, and admin surfaces.",
  "Keep route groups, API handlers, and provider adapters explicit.",
];

export default function BuildingSaasWithSourceModulesPage() {
  return (
    <main className="page blog-page">
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

      <article className="blog-article">
        <header className="blog-hero">
          <p className="section-eyebrow">Build SaaS</p>
          <h1>Build and grow SaaS by installing the systems, not adopting a black box.</h1>
          <p>
            SaaS is not one template. It is a set of systems that need to work together: access,
            billing, usage, webhooks, docs, analytics, support, operations, deployment, and growth.
            StackFoundry gives those systems to you as editable source modules.
          </p>
          <div className="blog-meta">
            <span>Source-owned modules</span>
            <span>API SaaS first</span>
            <span>Vendor adapters optional</span>
            <span>Free to use</span>
          </div>
        </header>

        <section className="blog-callout">
          <strong>The practical path</strong>
          <p>
            Start narrow, ship a working SaaS workflow, then expand. Install the source, review the
            diff, run the checks, and keep the architecture understandable enough to change later.
          </p>
        </section>

        <section className="blog-section">
          <h2>Build from a wedge, not a catalog</h2>
          <p>
            The fastest way to make a SaaS product real is not to install every module. It is to
            pick a workflow customers immediately understand. API SaaS is a good first wedge because
            the value is concrete: developers need keys, usage, quotas, credits, docs, webhooks, and
            billing.
          </p>
          <div className="blog-comparison">
            {buildStages.map(([title, body]) => (
              <article className="blog-comparison-card" key={title}>
                <div>
                  <span>Build Stage</span>
                  <h3>{title}</h3>
                </div>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="blog-section">
          <h2>Use vendors, but keep the product model yours</h2>
          <p>
            Great SaaS products use great vendors. The difference is where the boundary sits. A
            provider should adapt into your product concepts, not become the only place your product
            logic exists.
          </p>
          <div className="blog-grid">
            {systemRows.map(([title, body]) => (
              <div className="blog-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-section">
          <h2>Grow with operating feedback loops</h2>
          <p>
            Growth is easier when product signals are connected. Usage data should inform billing.
            Support tickets should connect to roadmap items. Incidents should feed postmortems. Docs
            and SEO should explain the product path. Announcements should close the loop when the
            work ships.
          </p>
          <p>
            That is why StackFoundry includes more than launch modules. It includes customer
            intelligence, support ops, public roadmap, product announcements, analytics adapters, AI
            SEO, and operational checklists.
          </p>
        </section>

        <section className="blog-section">
          <h2>Ship only after the checks are boring</h2>
          <div className="blog-module-list">
            {verificationRows.map((row) => (
              <div className="blog-card" key={row}>
                <h3>{row}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-cta">
          <div>
            <p className="section-eyebrow">Start Narrow</p>
            <h2>Dry-run the API SaaS recipe before writing source.</h2>
            <p>
              Preview the modules, dependencies, env notes, maintenance skills, and checklists
              before the code lands in your app.
            </p>
          </div>
          <div className="blog-command">
            <code>pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run</code>
          </div>
        </section>
      </article>
    </main>
  );
}
