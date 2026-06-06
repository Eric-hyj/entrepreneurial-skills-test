import type { MetadataRoute } from "next";
import { allStaticPaths } from "@/lib/structured-data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allStaticPaths().map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8
  }));
}
