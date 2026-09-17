import { site } from "@/content/site";
import { services } from "@/content/services";
import { absoluteUrl } from "./seo";

/**
 * Constructores de bloques JSON-LD para schema.org
 * Se renderizan con <script type="application/ld+json">
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${absoluteUrl("/")}#business`,
    name: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    telephone: site.phone.tel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    areaServed: {
      "@type": "City",
      name: "A Coruña",
    },
    priceRange: "€€",
    openingHoursSpecification: site.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de reconocimiento médico y psicotécnico",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.shortTitle,
          url: absoluteUrl(s.href),
          description: s.summary,
        },
      })),
    },
    knowsLanguage: ["es-ES", "gl-ES"],
    slogan: site.tagline,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: site.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    telephone: site.phone.tel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    taxID: site.nif,
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: site.name,
    description: site.description,
    inLanguage: "es-ES",
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  href: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.href),
    serviceType: opts.serviceType ?? opts.name,
    provider: { "@id": `${absoluteUrl("/")}#business` },
    areaServed: { "@type": "City", name: "A Coruña" },
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-ES",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h2", "h3"],
    },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  href: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const image = opts.image ? absoluteUrl(opts.image) : absoluteUrl("/opengraph-image");
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.href),
    mainEntityOfPage: absoluteUrl(opts.href),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image,
    inLanguage: "es-ES",
    author: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "p"],
    },
  };
}

export function itemListSchema(
  items: Array<{ name: string; href: string; description?: string; datePublished?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(item.href),
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.datePublished ? { datePublished: item.datePublished } : {}),
    })),
  };
}

