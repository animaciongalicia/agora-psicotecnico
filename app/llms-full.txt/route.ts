import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { site } from "@/content/site";
import { services } from "@/content/services";

/**
 * llms-full.txt — versión extendida de llms.txt con el CONTENIDO completo
 * de los artículos, no solo enlaces. Pensado para que un LLM pueda
 * responder preguntas específicas sin tener que crawlear cada URL.
 */
export const dynamic = "force-static";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || site.url;

function readAllPosts() {
  const dir = path.join(process.cwd(), "content", "consejos");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => /\.mdx?$/i.test(f));
  return files
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: data.slug || f.replace(/\.mdx?$/i, ""),
        title: String(data.title || ""),
        description: String(data.description || ""),
        date: String(data.date || ""),
        category: data.category ? String(data.category) : undefined,
        body: content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function GET() {
  const posts = readAllPosts();

  const header = `# ${site.name} — contenido completo

> ${site.description}

Centro de reconocimientos médicos y psicotécnicos en A Coruña con más de ${site.experienceYears} años de experiencia.

- Dirección: ${site.address.streetLong}, ${site.address.postalCode} ${site.address.city}
- Teléfono: ${site.phone.display}
- Email: ${site.email}
- Horario: L-V 9:00–13:30 · L, M, J tardes 17:00–19:30 · Sábados, domingos y festivos cerrado
- Web: ${SITE_URL}
- NIF: ${site.nif}

## Servicios

${services
  .map(
    (s) => `### ${s.shortTitle}
${s.summary}
URL: ${SITE_URL}${s.href}`,
  )
  .join("\n\n")}

---

## Guías y consejos completos

`;

  const articles = posts
    .map(
      (p) => `
---

# ${p.title}

- URL: ${SITE_URL}/consejos/${p.slug}
- Fecha: ${p.date}
${p.category ? `- Categoría: ${p.category}\n` : ""}
${p.description}

${p.body.trim()}
`,
    )
    .join("\n");

  return new Response(header + articles, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
    },
  });
}
