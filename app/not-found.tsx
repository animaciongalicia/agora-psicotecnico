import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { PhoneIcon, CalendarIcon } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Página no encontrada",
  description: "La página que buscas no existe o se ha movido.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container text-center max-w-xl">
        <p className="chip mb-4">Error 404</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-4">
          Esta página no existe
        </h1>
        <p className="text-lg text-ink-soft mb-8">
          Puede que el enlace esté mal o que hayamos movido la página. Vuelve
          al inicio o pídenos cita directamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-secondary btn-lg justify-center">
            Volver al inicio
          </Link>
          <Link href="/contacto" className="btn-primary btn-lg justify-center">
            <CalendarIcon className="w-5 h-5" />
            Pedir cita
          </Link>
          <a
            href={`tel:${site.phone.tel}`}
            className="btn-outline btn-lg justify-center"
          >
            <PhoneIcon className="w-5 h-5" />
            {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
