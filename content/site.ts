/**
 * Fuente única de verdad del negocio.
 * Cambiar aquí = cambia en toda la web.
 */

export const site = {
  name: "Psicotécnico Ágora",
  legalName: "Psicotécnico Ágora", // REVISAR CON CLIENTE — razón social exacta
  shortName: "Ágora",
  tagline: "Centro de reconocimientos médicos y psicotécnicos en A Coruña",
  description:
    "Renovación del carnet de conducir, certificados médicos y psicotécnicos en A Coruña. Reconocimiento médico, fotografía y tramitación en un único centro. Más de 13 años de experiencia.",
  url: "https://agorapsicotecnico.com",
  locale: "es-ES",

  address: {
    street: "Rúa Bolivia 1, esquina Avenida de Arteixo",
    postalCode: "15004",
    city: "A Coruña",
    region: "Galicia",
    country: "ES",
    // REVISAR CON CLIENTE — coordenadas exactas para mapa/schema
    lat: 43.3596,
    lng: -8.4115,
  },

  phone: {
    display: "881 915 396",
    tel: "+34881915396",
  },

  // REVISAR HORARIO CON CLIENTE — placeholder editable
  hours: {
    display: [
      { days: "Lunes a viernes", hours: "REVISAR CON CLIENTE" },
      { days: "Sábados", hours: "REVISAR CON CLIENTE" },
      { days: "Domingos y festivos", hours: "Cerrado" },
    ],
    // Formato schema.org (rellenar cuando esté confirmado)
    schema: [
      // Ejemplo: { dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "20:00" }
    ] as Array<{ dayOfWeek: string[]; opens: string; closes: string }>,
  },

  socials: {
    // REVISAR CON CLIENTE — URLs reales
    google: "",
    facebook: "",
    instagram: "",
  },

  experienceYears: 13,
} as const;

export type Site = typeof site;
