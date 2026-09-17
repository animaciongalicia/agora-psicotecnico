/**
 * Servicios del centro. Cada servicio tiene su página SEO individual.
 * No inventar requisitos legales. Marcado con REVISAR CON CLIENTE lo que falte.
 */

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "conduccion" | "certificado";
  featured: boolean;
  href: string;
  summary: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "renovar-carnet-conducir-coruna",
    title: "Renovar el carnet de conducir en A Coruña",
    shortTitle: "Renovación del carnet de conducir",
    category: "conduccion",
    featured: true,
    href: "/renovar-carnet-conducir-coruna",
    summary:
      "Reconocimiento médico, fotografía y tramitación de la renovación de tu permiso de conducir en un único centro.",
    keywords: [
      "renovar carnet conducir Coruña",
      "psicotécnico Coruña",
      "psicotécnico A Coruña",
      "reconocimiento médico carnet conducir Coruña",
      "renovar permiso conducir Coruña",
    ],
  },
  {
    slug: "obtencion-carnet-conducir-coruna",
    title: "Obtención del carnet de conducir en A Coruña",
    shortTitle: "Obtención del carnet",
    category: "conduccion",
    featured: true,
    href: "/obtencion-carnet-conducir-coruna",
    summary:
      "Reconocimiento médico y psicotécnico necesarios para obtener por primera vez tu permiso de conducir.",
    keywords: [
      "psicotécnico obtención carnet Coruña",
      "psicotécnico para carnet conducir Coruña",
    ],
  },
  {
    slug: "certificados-medicos-coruna",
    title: "Certificados médicos y psicotécnicos en A Coruña",
    shortTitle: "Certificados médicos",
    category: "certificado",
    featured: true,
    href: "/certificados-medicos-coruna",
    summary:
      "Certificados médicos oficiales para licencia de armas, náutica, seguridad privada, animales peligrosos y operadores de grúa.",
    keywords: ["certificado médico Coruña", "certificados médicos A Coruña"],
  },
  {
    slug: "certificado-medico-licencia-armas-coruna",
    title: "Certificado médico para licencia de armas en A Coruña",
    shortTitle: "Licencia de armas",
    category: "certificado",
    featured: false,
    href: "/certificado-medico-licencia-armas-coruna",
    summary:
      "Reconocimiento médico y psicotécnico para obtener o renovar tu licencia de armas.",
    keywords: ["certificado médico licencia armas Coruña", "psicotécnico armas Coruña"],
  },
  {
    slug: "certificado-medico-nautica-coruna",
    title: "Certificado médico para titulaciones náuticas en A Coruña",
    shortTitle: "Titulaciones náuticas",
    category: "certificado",
    featured: false,
    href: "/certificado-medico-nautica-coruna",
    summary:
      "Reconocimiento médico para obtener o renovar tu titulación náutica (PER, patrón, etc.).",
    keywords: ["certificado médico náutica Coruña", "psicotécnico náutica Coruña", "PER Coruña"],
  },
  {
    slug: "certificado-medico-seguridad-privada-coruna",
    title: "Certificado médico para seguridad privada en A Coruña",
    shortTitle: "Seguridad privada",
    category: "certificado",
    featured: false,
    href: "/certificado-medico-seguridad-privada-coruna",
    summary:
      "Reconocimiento médico y psicotécnico para trabajar como vigilante de seguridad privada.",
    keywords: [
      "certificado médico seguridad privada Coruña",
      "psicotécnico vigilante seguridad Coruña",
    ],
  },
  {
    slug: "certificado-medico-animales-potencialmente-peligrosos-coruna",
    title: "Certificado médico para animales potencialmente peligrosos (ANPP) en A Coruña",
    shortTitle: "Animales potencialmente peligrosos",
    category: "certificado",
    featured: false,
    href: "/certificado-medico-animales-potencialmente-peligrosos-coruna",
    summary:
      "Reconocimiento médico y psicotécnico para la tenencia de perros considerados potencialmente peligrosos.",
    keywords: [
      "certificado ANPP Coruña",
      "certificado perros potencialmente peligrosos Coruña",
      "psicotécnico ANPP Coruña",
    ],
  },
  {
    slug: "certificado-medico-operador-grua-coruna",
    title: "Certificado médico para operadores de grúa en A Coruña",
    shortTitle: "Operadores de grúa",
    category: "certificado",
    featured: false,
    href: "/certificado-medico-operador-grua-coruna",
    summary:
      "Reconocimiento médico y psicotécnico para operadores de grúa torre y grúa móvil autopropulsada.",
    keywords: ["certificado médico operador grúa Coruña", "psicotécnico grúa Coruña"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getSecondaryServices(): Service[] {
  return services.filter(
    (s) =>
      s.category === "certificado" && s.slug !== "certificados-medicos-coruna",
  );
}
