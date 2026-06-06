import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <section className="narrow">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you opened is not available. Start with the free entrepreneurial skills test instead.</p>
        <Link className="button primary" href="/">
          Take the free test
        </Link>
      </section>
    </main>
  );
}
