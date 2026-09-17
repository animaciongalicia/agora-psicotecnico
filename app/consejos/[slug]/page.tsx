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
import { CalendarIcon, ArrowRightIcon, ClockIcon } from "@/components/icons";
import { TableOfContents } from "@/components/TableOfContents";
import { ReadingProgress } from "@/components/ReadingProgress";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Callout } from "@/components/Callout";
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
  if (!post)
    return buildMetadata({
      title: "Artículo no encontrado",
      description: "",
      path: `/consejos/${slug}`,
      noindex: true,
    });
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
    <h2
      {...props}
      className="font-display font-bold text-3xl md:text-[2rem] text-ink mt-14 mb-5 scroll-mt-28 tracking-tight"
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className="font-display font-semibold text-2xl text-ink mt-10 mb-3 scroll-mt-28"
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mb-5 text-ink-soft leading-[1.75] text-[1.125rem]" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      className="mb-6 space-y-2.5 text-ink-soft leading-relaxed text-[1.125rem] [&>li]:pl-2 [&>li]:relative [&>li]:list-disc marker:text-brand-500 pl-6"
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      className="mb-6 space-y-2.5 text-ink-soft leading-relaxed text-[1.125rem] list-decimal marker:text-brand-500 marker:font-semibold pl-6"
    />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="text-brand-700 underline decoration-brand-300 decoration-2 underline-offset-4 hover:decoration-brand-600 hover:text-brand-800 font-medium transition-colors"
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="text-ink font-semibold" />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em {...props} className="text-ink-soft italic" />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="border-l-4 border-accent-500 pl-5 py-1 my-8 text-lg italic text-ink font-display"
    />
  ),
  hr: () => <hr className="border-line my-12" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      className="bg-brand-50 text-brand-800 px-1.5 py-0.5 rounded text-[0.95em] font-mono"
    />
  ),
  Callout,
};

function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

const ARTICLE_ID = "post-body";

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const path = `/consejos/${post.slug}`;
  const readMin = readingMinutes(post.body);

  const others = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <ReadingProgress />

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
        <div className="container pb-10 md:pb-14">
          <div className="max-w-3xl">
            {post.category && <p className="chip mb-4">{post.category}</p>}
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight text-ink mb-5">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-5">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4" />
                Publicado el {dateFmt.format(new Date(post.date))}
              </span>
              <span aria-hidden className="text-line">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="w-4 h-4" />
                {readMin} min de lectura
              </span>
              <span aria-hidden className="text-line">·</span>
              <span>{site.name}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 md:py-14 bg-surface">
        <div className="container xl:grid xl:grid-cols-[minmax(0,48rem)_240px] xl:gap-14 xl:justify-start">
          <div id={ARTICLE_ID} className="max-w-3xl">
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

            <div className="mt-14 p-6 md:p-8 rounded-2xl bg-brand-50 border border-brand-200">
              <h3 className="font-display font-semibold text-xl text-ink mb-2">
                ¿Necesitas resolver tu trámite?
              </h3>
              <p className="text-ink-soft mb-4">
                Llámanos y en un minuto te decimos qué necesitas, cuánto tarda
                y cuándo puedes venir.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contacto" className="btn-primary justify-center">
                  Pedir cita
                </Link>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="btn-outline justify-center"
                >
                  Llamar al {site.phone.display}
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-line">
              <Link
                href="/consejos"
                className="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:text-brand-800"
              >
                <ArrowRightIcon className="w-4 h-4 rotate-180" />
                Ver todos los consejos
              </Link>
            </div>
          </div>

          <TableOfContents containerId={ARTICLE_ID} />
        </div>
      </article>

      <RelatedPosts posts={others} />

      <CtaBlock
        title={`¿Te ayudamos con tu trámite en ${site.address.city}?`}
        description="Llámanos y en un minuto te decimos qué necesitas y cuánto tarda."
      />
    </>
  );
}
