import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Sistema de lectura de artículos MDX.
 * Los .mdx viven en /content/consejos/<slug>.mdx con frontmatter:
 *
 *   ---
 *   title: "Título del artículo"
 *   description: "Meta description SEO"
 *   date: "2025-03-14"
 *   category: "Renovación"
 *   ---
 *
 * El slug es el nombre del fichero (sin extensión) o el campo `slug`
 * del frontmatter si se provee explícitamente.
 */

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  ogImage?: string;
};

export type Post = PostMeta & {
  body: string;
};

const CONSEJOS_DIR = path.join(process.cwd(), "content", "consejos");

function ensureDir() {
  try {
    fs.mkdirSync(CONSEJOS_DIR, { recursive: true });
  } catch {
    /* noop */
  }
}

function readPost(filename: string): Post | null {
  const filePath = path.join(CONSEJOS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug =
    (typeof data.slug === "string" && data.slug) ||
    filename.replace(/\.mdx?$/i, "");
  if (!data.title || !data.description || !data.date) return null;
  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    category: data.category ? String(data.category) : undefined,
    ogImage: data.ogImage ? String(data.ogImage) : undefined,
    body: content,
  };
}

export function getAllPosts(): PostMeta[] {
  ensureDir();
  const files = fs
    .readdirSync(CONSEJOS_DIR)
    .filter((f) => /\.mdx?$/i.test(f));
  const posts = files
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts.map(({ body: _body, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | null {
  ensureDir();
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const c of candidates) {
    const p = path.join(CONSEJOS_DIR, c);
    if (fs.existsSync(p)) {
      return readPost(c);
    }
  }
  // Buscar por campo slug del frontmatter
  const files = fs
    .readdirSync(CONSEJOS_DIR)
    .filter((f) => /\.mdx?$/i.test(f));
  for (const f of files) {
    const p = readPost(f);
    if (p && p.slug === slug) return p;
  }
  return null;
}
