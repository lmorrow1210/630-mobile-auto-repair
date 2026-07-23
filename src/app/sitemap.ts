import type { MetadataRoute } from "next";
import { cities, services, siteUrl } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/services", "/service-area", "/reviews", "/contact", "/privacy-policy"];

  const cityPaths = cities.map((c) => `/${c.slug}`);
  const servicePaths = services.map((s) => `/services/${s.slug}`);

  return [...staticPaths, ...cityPaths, ...servicePaths].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/elmhurst" ? 0.9 : 0.6,
  }));
}
