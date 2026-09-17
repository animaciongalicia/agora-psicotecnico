import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getAllPosts, getPostBySlug } from "@/lib/consejos";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { JsonLd } from "@/components/JsonLd";
import { CalendarIcon, ArrowRightIcon } from "@/components/icons";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Artículo no encontrado", description: "", path: `/consejos/${slug}`, noindex: true });
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/consejos/${post.slug}`,
    image: post.ogImage ?? "/og-default.png",
  });
}

const dateFmt = new Intl.DateTimeFormat("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="font-display font-bold text-3xl text-ink mt-12 mb-4 scroll-mt-24" />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="font-display font-semibold text-2xl text-ink mt-8 mb-3 scroll-mt-24" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mb-4 text-ink-soft leading-relaxed text-lg" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc pl-6 mb-4 space-y-2 text-ink-soft text-lg leading-relaxed" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="list-decimal pl-6 mb-4 space-y-2 text-ink-soft text-lg leading-relaxed" />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className="text-brand-700 underline underline-offset-2 hover:text-brand-800 font-medium" />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="text-ink font-semibold" />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className="border-l-4 border-brand-300 pl-4 italic text-ink-soft my-6" />
  ),
  hr: () => <hr className="border-line my-10" />,
};

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const path = `/consejos/${post.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            href: path,
            datePublished: post.date,
            image: post.ogImage,
          }),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Consejos", href: "/consejos" },
            { name: post.title, href: path },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Consejos", href: "/consejos" },
              { name: post.title, href: path },
            ]}
          />
        </div>
        <div className="container pb-8 md:pb-12 max-w-3xl">
          {post.category && <p className="chip mb-4">{post.category}</p>}
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-4">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-ink-soft mb-4">
            {post.description}
          </p>
          <p className="inline-flex items-center gap-1.5 text-sm text-ink-muted">
            <CalendarIcon className="w-4 h-4" />
            Publicado el {dateFmt.format(new Date(post.date))} · Psicotécnico Ágora
          </p>
        </div>
      </section>

      <article className="py-10 md:py-14 bg-surface">
        <div className="container max-w-3xl">
          <MDXRemote
            source={post.body}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                ],
              },
            }}
          />

          <div className="mt-12 pt-8 border-t border-line">
            <Link
              href="/consejos"
              className="inline-flex items-center gap-1 text-brand-700 font-semibold hover:text-brand-800"
            >
              <ArrowRightIcon className="w-4 h-4 rotate-180" />
              Ver todos los consejos
            </Link>
          </div>
        </div>
      </article>

      <CtaBlock
        title={`¿Te ayudamos con tu trámite en ${site.address.city}?`}
        description="Llámanos y en un minuto te decimos qué necesitas y cuánto tarda."
      />
    </>
  );
}
