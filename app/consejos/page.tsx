import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllPosts } from "@/lib/consejos";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { CtaBlock } from "@/components/CtaBlock";

const PATH = "/consejos";

export const metadata: Metadata = buildMetadata({
  title: "Consejos y guías sobre el carnet de conducir y certificados médicos",
  description:
    "Guías prácticas y consejos sobre la renovación del carnet, certificados médicos y trámites relacionados en A Coruña. Escrito por el equipo de Psicotécnico Ágora.",
  path: PATH,
});

const dateFmt = new Intl.DateTimeFormat("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function ConsejosIndex() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Consejos", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-8 md:pb-12">
          <p className="chip mb-4">Guías y consejos</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-4">
            Todo lo que quieres saber sobre el carnet y los certificados
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-3xl">
            Guías prácticas, sin humo y sin adornos. Lo escribimos con lo que
            nos preguntáis todos los días en el centro. Si te queda alguna
            duda, llámanos al{" "}
            <a
              href={`tel:${site.phone.tel}`}
              className="font-semibold text-brand-800 hover:text-brand-900 underline"
            >
              {site.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20 bg-surface">
        <div className="container">
          {posts.length === 0 ? (
            <div className="card p-8 text-center">
              <p className="text-lg text-ink-soft">
                Muy pronto publicaremos aquí las primeras guías y consejos.
              </p>
            </div>
          ) : (
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/consejos/${p.slug}`}
                    className="card-hover p-6 h-full flex flex-col gap-3 group"
                  >
                    {p.category && (
                      <span className="chip w-fit">{p.category}</span>
                    )}
                    <h2 className="font-display font-semibold text-xl text-ink group-hover:text-brand-800 leading-tight">
                      {p.title}
                    </h2>
                    <p className="text-ink-soft leading-relaxed">
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
          )}
        </div>
      </section>

      <CtaBlock
        title="¿Necesitas resolver tu trámite ya?"
        description="Deja de leer y pide cita. Lo demás lo hacemos nosotros."
      />
    </>
  );
}
