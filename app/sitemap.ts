import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || site.url;

/**
 * Sitemap dinámico. Las páginas de consejos se añaden en el Paso 3
 * leyendo el frontmatter de los .mdx.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/consejos`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/aviso-legal`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}${s.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s.featured ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
