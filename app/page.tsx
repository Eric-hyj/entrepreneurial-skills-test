import Link from "next/link";
import { AssessmentTool } from "@/components/assessment-tool";
import { JsonLd } from "@/components/json-ld";
import { homeFaqs, pages } from "@/content/pages";
import { dimensions } from "@/lib/assessment";
import { breadcrumbJsonLd, faqJsonLd, webApplicationJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={webApplicationJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Free entrepreneurial skills assessment</p>
          <h1>Entrepreneurial Skills Test</h1>
          <p className="hero-lede">
            Assess your entrepreneurial skills, uncover your strongest founder signals, and find the skill gaps that
            deserve your next 30 days of practice.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#test">
              Start free test
            </a>
            <Link className="button secondary" href="/sample-report">
              View sample report
            </Link>
          </div>
          <div className="trust-row" aria-label="Assessment details">
            <span>30 questions</span>
            <span>About 5 minutes</span>
            <span>Instant score</span>
          </div>
        </div>
        <div className="hero-card" aria-label="Six entrepreneurial skills dimensions">
          <div className="card-topline">
            <span>Skill profile</span>
            <strong>6 dimensions</strong>
          </div>
          {Object.values(dimensions).map((dimension, index) => (
            <div className="dimension-line" key={dimension.label}>
              <span>{dimension.shortLabel}</span>
              <i style={{ width: `${88 - index * 7}%` }} />
            </div>
          ))}
        </div>
      </section>

      <div className="page-band">
        <AssessmentTool />
      </div>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Why it matters</p>
          <h2>Entrepreneurial skills are practical signals, not motivational slogans.</h2>
          <p>
            People search for entrepreneurial skills because they want to know whether they can notice opportunities,
            evaluate risk, communicate ideas, manage limited resources, and keep moving when early results are unclear.
          </p>
        </div>
        <div className="feature-grid">
          <article>
            <h3>Examples you can recognize</h3>
            <p>
              Turning a customer complaint into a product idea, estimating launch costs, or organizing a small team are
              all entrepreneurial skill signals.
            </p>
            <Link href="/entrepreneurial-skills-examples">See entrepreneurial skills examples</Link>
          </article>
          <article>
            <h3>A test that creates action</h3>
            <p>
              The free test turns a broad keyword into a useful personal baseline across six skill areas, then points to
              a realistic next step.
            </p>
            <Link href="/entrepreneurial-skills-test">Take the entrepreneurial skills test</Link>
          </article>
          <article>
            <h3>A plan you can improve</h3>
            <p>
              Better entrepreneurial skills come from small experiments, feedback, and deliberate practice rather than a
              one-time quiz score.
            </p>
            <Link href="/how-to-build-entrepreneurial-skills">Learn how to build entrepreneurial skills</Link>
          </article>
        </div>
      </section>

      <section className="content-section split">
        <div>
          <p className="eyebrow">Skill dimensions</p>
          <h2>What the free entrepreneurial skills assessment measures</h2>
          <p>
            The MVP test uses six dimensions inspired by entrepreneurship competence frameworks. It is educational
            self-reflection, not an official diagnostic or certification.
          </p>
        </div>
        <div className="dimension-grid">
          {Object.values(dimensions).map((dimension) => (
            <article key={dimension.label}>
              <h3>{dimension.label}</h3>
              <p>{dimension.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Questions about the entrepreneurial skills test</h2>
        </div>
        <div className="faq-list">
          {homeFaqs.map((faq) => (
            <details key={faq.question} open>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Explore next</p>
          <h2>Related entrepreneurial skills pages</h2>
        </div>
        <div className="link-grid">
          {Object.values(pages).map((page) => (
            <Link key={page.path} href={page.path}>
              <strong>{page.h1}</strong>
              <span>{page.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
