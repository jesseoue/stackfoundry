import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternatives, getAlternative } from "../data";

type AlternativePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return alternatives.map((alternative) => ({ slug: alternative.slug }));
}

export async function generateMetadata({ params }: AlternativePageProps): Promise<Metadata> {
  const { slug } = await params;
  const alternative = getAlternative(slug);

  if (!alternative) {
    return {};
  }

  return {
    title: `${alternative.title}: Free Source-Owned SaaS Modules`,
    description: alternative.description,
    alternates: {
      canonical: `/alternatives/${alternative.slug}`,
    },
    keywords: alternative.keywords,
    openGraph: {
      title: `${alternative.title}: Free Source-Owned SaaS Modules`,
      description: alternative.description,
      url: `/alternatives/${alternative.slug}`,
      type: "article",
    },
  };
}

export default async function AlternativeDetailPage({ params }: AlternativePageProps) {
  const { slug } = await params;
  const alternative = getAlternative(slug);

  if (!alternative) {
    notFound();
  }

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
            <a href="/alternatives">Alternatives</a>
            <a href="/registry">Registry</a>
            <a href="/docs">Docs</a>
          </div>
          <a className="button" href="https://github.com/jesseoue/stackfoundry">
            GitHub
          </a>
        </div>
      </nav>

      <article className="blog-article">
        <header className="blog-hero">
          <p className="section-eyebrow">{alternative.model}</p>
          <h1>{alternative.title}: build SaaS with source-owned modules.</h1>
          <p>{alternative.description}</p>
          <div className="blog-meta">
            <span>Free to use</span>
            <span>MIT licensed</span>
            <span>No paid template license fee</span>
            <span>Installable source modules</span>
          </div>
        </header>

        <section className="blog-callout">
          <strong>Best fit for {alternative.name}</strong>
          <p>{alternative.bestFor}</p>
        </section>

        <section className="blog-section">
          <h2>What {alternative.name} is known for</h2>
          <div className="blog-grid">
            {alternative.whatTheyHave.map((item) => (
              <div className="blog-card" key={item}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-section">
          <h2>Where StackFoundry differs</h2>
          <div className="blog-grid">
            {alternative.stackfoundryDifference.map((item) => (
              <div className="blog-card" key={item}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-section">
          <h2>When to choose StackFoundry instead</h2>
          <p>{alternative.chooseStackFoundryWhen}</p>
          <div className="blog-keywords">
            {alternative.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </section>

        <section className="blog-cta">
          <div>
            <p className="section-eyebrow">Source Registry</p>
            <h2>Dry-run a complete SaaS recipe before adopting any app shape.</h2>
            <p>
              Start with API SaaS, inspect the exact source files, then decide whether the modules
              belong in your app.
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
