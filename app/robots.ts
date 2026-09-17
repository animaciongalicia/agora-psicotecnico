import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || site.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
