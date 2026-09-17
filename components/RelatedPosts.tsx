import Link from "next/link";
import type { PostMeta } from "@/lib/consejos";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";

const dateFmt = new Intl.DateTimeFormat("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="py-14 md:py-20 bg-surface-soft border-t border-line">
      <div className="container">
        <div className="mb-8">
          <p className="chip mb-3">Sigue leyendo</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ink">
            Otros consejos que te pueden interesar
          </h2>
        </div>
        <ul className="grid md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/consejos/${p.slug}`}
                className="card-hover p-5 h-full flex flex-col gap-3 group"
              >
                {p.category && <span className="chip w-fit">{p.category}</span>}
                <h3 className="font-display font-semibold text-lg text-ink group-hover:text-brand-800 leading-snug">
                  {p.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">
                  {p.description}
                </p>
                <div className="mt-auto pt-2 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1.5 text-ink-muted">
                    <CalendarIcon className="w-4 h-4" />
                    {dateFmt.format(new Date(p.date))}
                  </span>
                  <span className="inline-flex items-center gap-1 text-brand-700 font-semibold group-hover:text-brand-800">
                    Leer
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
