import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { site } from "@/lib/site";

export function pageMetadata(slug?: string): Metadata {
  const page = slug ? pages[slug] : undefined;
  const title = page?.title || "Free Entrepreneurial Skills Test: Find Your Strengths & Gaps";
  const description =
    page?.description ||
    "Take a free entrepreneurial skills test to discover your strengths, skill gaps, profile type, and practical next steps in about 5 minutes.";
  const path = page?.path || "/";
  const url = `${site.url}${path}`;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Entrepreneurial Skills Test report preview" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"]
    }
  };
}