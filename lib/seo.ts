import type { Metadata } from "next";
import { site } from "@/content/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || site.url;

type BuildMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og-default.png",
  noindex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "es_ES",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
      : undefined,
  };
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
