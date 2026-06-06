import Link from "next/link";
import { coreLinks, site } from "@/lib/site";

export function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" href="/" aria-label="Entrepreneurial Skills Test home">
          <span className="brand-mark">SS</span>
          <span>
            <strong>{site.shortName}</strong>
            <small>Entrepreneurial Skills Test</small>
          </span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/entrepreneurial-skills-test">Test</Link>
          <Link href="/entrepreneurial-skills-assessment">Assessment</Link>
          <Link href="/entrepreneurial-skills-examples">Examples</Link>
          <Link href="/sample-report">Sample</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">Entrepreneurial Skills Test</p>
          <p>
            Free self-reflection tools for students, aspiring founders, early founders, and builders who want a clearer
            next step.
          </p>
        </div>
        <nav className="footer-grid" aria-label="Core pages">
          {coreLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="fineprint">
          Inspired by entrepreneurship competence frameworks such as EntreComp. Not an official diagnostic,
          certification, legal, financial, or career assessment.
        </p>
      </div>
    </footer>
  );
}
