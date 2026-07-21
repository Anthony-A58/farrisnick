import type { MetadataRoute } from "next";
import { getAllPaths } from "@/lib/content";
import { LOCATIONS } from "@/lib/locations-data";
import { PRACTICES } from "@/lib/practice-data";
import { QA_POSTS } from "@/lib/qa-posts-data";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const migrated = getAllPaths().map((p) => ({
    url: SITE.url + p,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : p.startsWith("/blog/") ? 0.5 : 0.8,
  }));
  const added = [...LOCATIONS, ...PRACTICES].map((e) => ({
    url: `${SITE.url}/${e.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const qa = QA_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}/`,
    lastModified: p.datePublished,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [
    ...migrated,
    ...added,
    ...qa,
    {
      url: `${SITE.url}/locations/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];
}
