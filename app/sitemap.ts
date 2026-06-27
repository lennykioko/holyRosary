import type { MetadataRoute } from "next";
import { MYSTERY_SETS } from "@/lib/rosary";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://holy-rosary-365.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/mysteries`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/pray-along`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/audio`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/gregorian`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/he-will-provide`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/her-mantle`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/undoer-of-knots`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const mysteryRoutes: MetadataRoute.Sitemap = Object.values(MYSTERY_SETS).map(
    (set) => ({
      url: `${siteUrl}/mysteries/${set.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  return [...staticRoutes, ...mysteryRoutes];
}
