import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AssessmentTool } from "@/components/assessment-tool";
import { JsonLd } from "@/components/json-ld";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(slug);
}

export default async function MarketingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: page.h1, path: page.path }])} />

      <section className="subhero">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <a className="button primary" href="#test">
          {page.cta}
        </a>
      </section>

      <section className="article-layout">
        {page.sections.map((section) => (
          <article className="article-block" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <div className="page-band">
        <AssessmentTool />
      </div>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions</h2>
        </div>
        <div className="faq-list">
          {page.faqs.map((faq) => (
            <details key={faq.question} open>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Internal links</p>
          <h2>Keep exploring entrepreneurial skills</h2>
        </div>
        <div className="link-grid">
          <Link href="/">
            <strong>Free entrepreneurial skills quiz</strong>
            <span>Return to the main assessment page and get your instant score.</span>
          </Link>
          {page.related.map((link) => (
            <Link key={link.href} href={link.href}>
              <strong>{link.label}</strong>
              <span>Open a related page with a focused search intent.</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
