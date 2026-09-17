/**
 * Fuente única de verdad del negocio.
 * Cambiar aquí = cambia en toda la web.
 */

export const site = {
  name: "Psicotécnico Ágora",
  legalName: "Psicotécnico Ágora",
  nif: "J-70367735",
  shortName: "Ágora",
  tagline: "Centro de reconocimientos médicos y psicotécnicos en A Coruña",
  description:
    "Renovación del carnet de conducir, certificados médicos y psicotécnicos en A Coruña. Reconocimiento médico, fotografía y tramitación en un único centro. Más de 13 años de experiencia.",
  url: "https://agorapsicotecnico.com",
  locale: "es-ES",

  address: {
    street: "Calle Bolivia, 1",
    streetLong: "Calle Bolivia, 1 (esquina Avenida de Arteixo, frente a la Plaza del Libro)",
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

  email: "info@agorapsicotecnico.com",

  hours: {
    display: [
      { days: "Lunes a viernes", hours: "9:00 – 13:30" },
      { days: "Lunes, martes y jueves (tarde)", hours: "17:00 – 19:30" },
      { days: "Sábados, domingos y festivos", hours: "Cerrado" },
    ],
    schema: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "13:30",
      },
      {
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "17:00",
        closes: "19:30",
      },
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
