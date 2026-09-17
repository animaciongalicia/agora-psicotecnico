import Link from "next/link";
import { site } from "@/content/site";

/**
 * Home temporal. En el Paso 2 se sustituye por la home completa.
 */
export default function Home() {
  return (
    <div className="container py-16">
      <p className="chip mb-4">Paso 1 · esqueleto listo</p>
      <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
        {site.name}
      </h1>
      <p className="text-lg text-ink-soft max-w-2xl mb-8">
        Estructura, sistema de diseño y componentes base montados. Contenido
        real llegando en el Paso 2.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/contacto" className="btn-primary">
          Pedir cita
        </Link>
        <a href={`tel:${site.phone.tel}`} className="btn-outline">
          Llamar al {site.phone.display}
        </a>
      </div>
    </div>
  );
}
