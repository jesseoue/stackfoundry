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
          <h1>Compare SaaS starters before you give up the source.</h1>
          <p>
            Each starter makes useful trade-offs. This guide keeps the comparison honest: who each
            kit serves best, what it includes, and when a module registry is the better fit. The
            short version — use a starter when you want the whole shell; use StackFoundry when the
            hard SaaS systems matter more than the app skeleton.
          </p>
        </header>

        <section className="blog-section">
          <h2>Side-by-side alternatives</h2>
          <div className="blog-comparison">
            {alternatives.map((alternative) => (
              <a
                className="blog-comparison-card"
                href={`/alternatives/${alternative.slug}`}
                key={alternative.slug}
              >
                <div>
                  <span>{alternative.model}</span>
                  <h3>{alternative.name}</h3>
                </div>
                <p>{alternative.bestFor}</p>
                <p>
                  <strong>Choose StackFoundry when:</strong> {alternative.chooseStackFoundryWhen}
                </p>
                <em>Read the comparison →</em>
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
