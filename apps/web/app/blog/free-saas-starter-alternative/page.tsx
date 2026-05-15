import type { Metadata } from "next";
import { alternatives } from "../../alternatives/data";

const articleUrl = "/blog/free-saas-starter-alternative";

export const metadata: Metadata = {
  title: "Makerkit Alternative: A Free SaaS Starter That Lets You Own the Source",
  description:
    "Compare Makerkit, Supastarter, ShipFast, Gravity, Open SaaS, Nextacular, and StackFoundry: a free, MIT-licensed source registry for production SaaS modules.",
  alternates: {
    canonical: articleUrl,
  },
  keywords: [
    "Makerkit alternative",
    "free SaaS boilerplate",
    "open source SaaS starter",
    "Next.js SaaS starter",
    "SaaS starter kit",
    "Supastarter alternative",
    "ShipFast alternative",
    "Gravity SaaS alternative",
    "editable source code",
    "API SaaS starter",
  ],
  openGraph: {
    title: "Makerkit Alternative: A Free SaaS Starter That Lets You Own the Source",
    description:
      "Install production SaaS modules as editable source code instead of buying a black-box starter.",
    url: articleUrl,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makerkit Alternative: A Free SaaS Starter That Lets You Own the Source",
    description:
      "A free source-registry path for API keys, usage, billing, webhooks, docs, auth, analytics, and provider adapters.",
  },
};

const intentKeywords = [
  "Makerkit alternative",
  "Supastarter alternative",
  "ShipFast alternative",
  "Gravity SaaS alternative",
  "free SaaS boilerplate",
  "open-source SaaS starter",
  "Next.js SaaS starter",
  "SaaS starter kit",
  "editable source modules",
  "API SaaS starter",
  "Stripe billing starter",
  "Clerk auth starter",
];

const vendorRows = [
  ["Billing", "Stripe, Autumn, tax, refunds, dunning, entitlements"],
  ["Auth", "Clerk, Better Auth, account modes, tenant context, RBAC"],
  ["Database", "Drizzle, Neon, Supabase, Convex, Cloudflare D1"],
  ["API Product", "Unkey, API keys, rate limits, usage metering, webhooks"],
  ["Comms", "Resend, Knock, notification center, lifecycle email"],
  ["Analytics", "PostHog, Tinybird, feature flags, product metrics"],
  ["Deploy", "Vercel, Cloudflare, Railway, Fly.io"],
  ["Operations", "Sentry, Axiom, health checks, incidents, status pages"],
];

const moduleRows = [
  ["API SaaS", "api-saas-starter", "Keys, usage, quotas, credits, billing, docs, webhooks"],
  ["Minimal SaaS", "saas-starter-minimal", "Shell, settings, auth boundary, database, billing"],
  ["Enterprise", "enterprise-saas", "SSO, SCIM, roles, audit, SLA, support operations"],
  ["AI SaaS", "ai-saas-starter", "AI SDK, chat UI, quotas, usage, cost controls"],
  ["Support Ops", "support-ops", "Support, roadmap, incidents, postmortems, status"],
];

export default function FreeSaasStarterAlternativePage() {
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
            <a href="/blog/free-saas-starter-alternative">Blog</a>
            <a href="/alternatives">Alternatives</a>
          </div>
          <a className="button" href="https://github.com/jesseoue/stackfoundry">
            GitHub
          </a>
        </div>
      </nav>

      <article className="blog-article">
        <header className="blog-hero">
          <p className="section-eyebrow">Free SaaS Starter Alternative</p>
          <h1>Makerkit alternative: a free SaaS starter path for teams that own the source.</h1>
          <p>
            A lot of teams search for a Makerkit alternative, Supastarter alternative, ShipFast
            alternative, Next.js SaaS starter, or free SaaS boilerplate when they really want the
            same thing: production SaaS plumbing without giving up code ownership. StackFoundry
            takes a different route. It is a source registry for SaaS modules, not a paid template
            bundle.
          </p>
          <div className="blog-meta">
            <span>Free to use</span>
            <span>MIT licensed</span>
            <span>No paid template license fee</span>
            <span>Vendor adapters stay optional</span>
          </div>
        </header>

        <section className="blog-callout">
          <strong>The short version</strong>
          <p>
            StackFoundry lets you install API keys, usage tracking, rate limits, credits, Stripe
            billing, webhooks, docs, auth boundaries, analytics, and operations as editable source
            code. You can use excellent vendors, but the base app stays yours.
          </p>
        </section>

        <section className="blog-section">
          <h2>Why teams look for a SaaS starter alternative</h2>
          <p>
            SaaS starters are popular because the first product sprint is full of repeat work:
            authentication, billing, database setup, webhooks, transactional email, analytics,
            settings pages, API keys, teams, admin tools, and deployment. Paid starters can be
            useful, but they can also feel like a second product inside your product.
          </p>
          <p>
            StackFoundry is built for teams that want a smaller commitment. Start with one painful
            workflow, dry-run the source, review the files, and install only what belongs in your
            app. The sharp first path is API SaaS because it is concrete: keys, usage, quotas,
            credits, billing, docs, and webhooks.
          </p>
        </section>

        <section className="blog-section">
          <h2>Popular SaaS starter kits people compare</h2>
          <p>
            The search market is not one thing. Some people want a paid, opinionated app. Some want
            a free open-source boilerplate. Some already have a Next.js app and just need billing,
            auth, API keys, webhooks, docs, analytics, or support workflows. These are different
            buying moments.
          </p>
          <div className="blog-comparison">
            {alternatives.map((starter) => (
              <a
                className="blog-comparison-card"
                href={`/alternatives/${starter.slug}`}
                key={starter.name}
              >
                <div>
                  <span>{starter.model}</span>
                  <h3>{starter.title}</h3>
                </div>
                <p>{starter.bestFor}</p>
                <p>{starter.chooseStackFoundryWhen}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="blog-section">
          <h2>Free does not mean vague</h2>
          <p>
            StackFoundry has no paid template license fee. The project is free to use and
            MIT-licensed, so the legal boundary is clear. The installed source lands in your repo,
            and your team can edit, review, test, replace, or delete it like normal application
            code.
          </p>
          <p>
            That matters for SaaS teams because the hard parts are not just UI screens. They are
            invariants: webhook idempotency, env hygiene, quota checks before expensive calls,
            tenant boundaries, migration review, and provider setup that does not leak into every
            feature.
          </p>
        </section>

        <section className="blog-section">
          <h2>Use great vendors without making them your architecture</h2>
          <p>
            The best SaaS stacks use strong vendors. The mistake is making a vendor choice the
            foundation of every domain. StackFoundry keeps providers as adapters around source-owned
            capabilities.
          </p>
          <div className="blog-grid">
            {vendorRows.map(([area, vendors]) => (
              <div className="blog-card" key={area}>
                <h3>{area}</h3>
                <p>{vendors}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-section">
          <h2>Recipes beat monolithic boilerplates when you already have an app</h2>
          <p>
            A template usually asks you to accept the whole shape up front. StackFoundry recipes
            explain install order for complete SaaS workflows while modules remain the unit of
            value. Presets still exist, but they are convenience bundles, not the product.
          </p>
          <div className="blog-module-list">
            {moduleRows.map(([label, name, description]) => (
              <a href={`/r/recipes/${name}.json`} key={name}>
                <span>{label}</span>
                <strong>{name}</strong>
                <p>{description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="blog-section">
          <h2>Intent keywords this page is built for</h2>
          <p>
            The search intent is practical. People are not just looking for a landing page template.
            They are comparing cost, license terms, source ownership, vendor lock-in, and how fast
            they can ship real SaaS infrastructure. That is why the page says what StackFoundry is
            and what it is not: free, MIT-licensed, source-delivered, vendor-friendly, and module
            first.
          </p>
          <div className="blog-keywords">
            {intentKeywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </section>

        <section className="blog-cta">
          <div>
            <p className="section-eyebrow">Start Narrow</p>
            <h2>Dry-run the API SaaS recipe before you install anything.</h2>
            <p>
              Preview the exact source files, env notes, dependencies, maintenance skills, and
              checklists before StackFoundry writes to your app.
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
