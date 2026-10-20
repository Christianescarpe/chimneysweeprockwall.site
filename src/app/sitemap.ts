import type { MetadataRoute } from "next";
import { SERVICE_PAGES, LOCATION_PAGES, BLOG_PAGES } from "@/data/sheetData";

const SITE_URL = "https://www.chimneysweeprockwall.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...SERVICE_PAGES.map((s) => ({
      url: `${SITE_URL}${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...LOCATION_PAGES.map((l) => ({
      url: `${SITE_URL}${l.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    {
      url: `${SITE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...BLOG_PAGES.map((b) => ({
      url: `${SITE_URL}${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    {
      url: `${SITE_URL}/contact/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return routes;
}
