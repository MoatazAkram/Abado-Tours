import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { destinations } from "@/lib/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/destinations", "/about", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const destinationRoutes = destinations.map((d) => ({
    url: `${siteConfig.url}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinationRoutes];
}
