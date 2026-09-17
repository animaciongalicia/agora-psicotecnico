import { site } from "@/content/site";
import { services } from "@/content/services";
import { getAllPosts } from "@/lib/consejos";

/**
 * llms.txt — spec en https://llmstxt.org
 * Ayuda a LLMs (ChatGPT, Claude, Perplexity, Gemini) a entender el sitio.
 * Se sirve como texto plano en /llms.txt.
 */
export const dynamic = "force-static";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || site.url;

export async function GET() {
  const posts = getAllPosts();
  const featured = services.filter((s) => s.featured);
  const secondary = services.filter((s) => !s.featured);

  const body = `# ${site.name}

> ${site.description}

Centro de reconocimientos médicos y psicotécnicos en A Coruña con más de ${site.experienceYears} años de experiencia. Emitimos certificados oficiales para renovar y obtener el permiso de conducir, licencia de armas, titulaciones náuticas, seguridad privada, animales potencialmente peligrosos (ANPP), operadores de grúa y buceo. Con cita previa, todo el reconocimiento se resuelve en 30-40 minutos y la renovación del permiso se tramita telemáticamente con la DGT, sin necesidad de ir a Jefatura de Tráfico.

Dirección: ${site.address.streetLong}, ${site.address.postalCode} ${site.address.city}.
Teléfono: ${site.phone.display}
Email: ${site.email}
Horario: L-V 9:00–13:30 · L, M, J tardes 17:00–19:30 · Sábados, domingos y festivos cerrado
NIF: ${site.nif}

## Servicios principales

${featured.map((s) => `- [${s.shortTitle}](${SITE_URL}${s.href}): ${s.summary}`).join("\n")}

## Certificados médicos

${secondary.map((s) => `- [${s.shortTitle}](${SITE_URL}${s.href}): ${s.summary}`).join("\n")}

## Consejos y guías

${posts.map((p) => `- [${p.title}](${SITE_URL}/consejos/${p.slug}): ${p.description}`).join("\n")}

## Optional

- [Contacto y solicitud de cita](${SITE_URL}/contacto): teléfono, email, mapa y formulario para pedir cita.
- [Aviso legal](${SITE_URL}/aviso-legal)
- [Política de privacidad](${SITE_URL}/privacidad)
- [Política de cookies](${SITE_URL}/cookies)
- [Sitemap XML](${SITE_URL}/sitemap.xml)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
    },
  });
}
