import type { Metadata } from "next";
import { alternatives } from "./data";

export const metadata: Metadata = {
  title: "SaaS Starter Alternatives",
  description:
    "Compare Makerkit, Supastarter, ShipFast, Gravity, Open SaaS, Nextacular, BoxyHQ, and StackFoundry's free source-registry approach.",
  alternates: {
    canonical: "/alternatives",
  },
};

export default function AlternativesPage() {
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
          </div>
          <a className="button" href="https://github.com/jesseoue/stackfoundry">
            GitHub
          </a>
        </div>
      </nav>

      <article className="blog-article">
        <header className="blog-hero">
          <p className="section-eyebrow">SaaS Starter Alternatives</p>
          <h1>Compare the starter kits people search before choosing source-owned modules.</h1>
          <p>
            Makerkit, Supastarter, ShipFast, Gravity, Open SaaS, Nextacular, and BoxyHQ all solve
            different SaaS starter problems. StackFoundry is the free source-registry path for teams
            that want installable modules, recipe dry-runs, and provider adapters they can replace.
          </p>
        </header>

        <section className="blog-section">
          <h2>Alternative pages</h2>
          <div className="blog-comparison">
            {alternatives.map((alternative) => (
              <a
                className="blog-comparison-card"
                href={`/alternatives/${alternative.slug}`}
                key={alternative.slug}
              >
                <div>
                  <span>{alternative.model}</span>
                  <h3>{alternative.title}</h3>
                </div>
                <p>{alternative.description}</p>
                <p>{alternative.chooseStackFoundryWhen}</p>
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
