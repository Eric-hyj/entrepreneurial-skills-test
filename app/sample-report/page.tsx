import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Sample Entrepreneurial Skills Report",
  description:
    "Preview a sample entrepreneurial skills report with score interpretation, strengths, risks, business areas, and a 30-day improvement plan.",
  alternates: { canonical: "/sample-report" }
};

export default function SampleReportPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Sample Report", path: "/sample-report" }])} />
      <section className="subhero report-subhero">
        <p className="eyebrow">Sample report</p>
        <h1>Sample Entrepreneurial Skills Report</h1>
        <p>
          This preview shows the type of deeper AI-powered analysis planned after the free entrepreneurial skills test.
        </p>
        <Link className="button primary" href="/#test">
          Take the free test
        </Link>
      </section>

      <section className="sample-report">
        <div className="report-summary">
          <div>
            <p className="eyebrow">Example profile</p>
            <h2>Opportunity Builder</h2>
            <p>
              This user sees market gaps quickly and can turn customer frustration into ideas, but should strengthen
              financial thinking before committing to a larger launch.
            </p>
          </div>
          <div className="score-dial">
            <strong>72</strong>
            <span>Strong Potential</span>
          </div>
        </div>

        <div className="report-columns">
          <article>
            <h3>Deep strength analysis</h3>
            <p>
              Your strongest pattern is noticing practical problems and translating them into possible products or
              services. This is useful for customer discovery, landing page tests, and early niche selection.
            </p>
          </article>
          <article>
            <h3>Risk profile</h3>
            <p>
              Your risk profile is medium. You are willing to move under uncertainty, but your lowest score suggests
              that cost, pricing, and cash-flow assumptions need more structure.
            </p>
          </article>
          <article>
            <h3>Recommended business areas</h3>
            <p>
              Start with service businesses, simple digital tools, or audience-led projects where you can test demand
              before investing heavily in product development.
            </p>
          </article>
          <article>
            <h3>30-day plan</h3>
            <p>
              Week 1: interview five potential users. Week 2: write a simple offer. Week 3: test pricing. Week 4:
              review evidence and choose the next experiment.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
