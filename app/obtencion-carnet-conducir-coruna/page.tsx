import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, CheckIcon, TargetIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/obtencion-carnet-conducir-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Psicotécnico para la obtención del carnet en A Coruña",
  description:
    "Reconocimiento médico y pruebas psicotécnicas necesarios para obtener por primera vez tu permiso de conducir. En A Coruña, Rúa Bolivia 1. Cita al 881 915 396.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "¿Qué necesito para hacer el psicotécnico de obtención?",
    answer:
      "Tu DNI o NIE en vigor. La fotografía y el resto de la documentación la generamos en el centro. Si estás matriculado en autoescuela, coméntanoslo al pedir cita.",
  },
  {
    question: "¿Cuánto dura la prueba?",
    answer:
      "Entre 30 y 40 minutos con cita previa. Incluye exploración médica, agudeza visual, coordinación, tiempos de reacción y fotografía.",
  },
  {
    question: "¿Tengo que hacerlo antes de matricularme en la autoescuela?",
    answer:
      "Normalmente sí. El informe de aptitud psicofísica se presenta antes de las pruebas oficiales. Si tu autoescuela te ha indicado unas gestiones concretas, síguelas.",
  },
  {
    question: "¿Uso gafas o lentillas — hay algún problema?",
    answer:
      "No. La revisión visual se hace tal y como conducirás. Trae tus gafas o lentillas puestas y no habrá inconveniente.",
  },
];

export default function ObtencionCarnetPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Reconocimiento psicotécnico para obtención del carnet en A Coruña",
            description:
              "Reconocimiento médico y pruebas psicotécnicas necesarios para obtener el permiso de conducir por primera vez.",
            href: PATH,
            serviceType: "Reconocimiento psicotécnico para permiso de conducir",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Obtención del carnet de conducir", href: PATH },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Obtención del carnet", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-12 md:pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-5">
              Psicotécnico para la obtención del carnet en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico, pruebas psicotécnicas y fotografía para
              obtener tu primer permiso de conducir. Todo en una visita, sin
              vueltas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="btn-primary btn-lg justify-center">
                <CalendarIcon className="w-5 h-5" />
                Pedir cita
              </Link>
              <a href={`tel:${site.phone.tel}`} className="btn-outline btn-lg justify-center">
                <PhoneIcon className="w-5 h-5" />
                {site.phone.display}
              </a>
            </div>
          </div>
          <PagePlaceholder label="Zona de pruebas psicotécnicas" aspect="4/3" />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight prose-agora">
          <h2>Qué incluye el psicotécnico</h2>
          <p>
            El informe de aptitud psicofísica que necesitas para presentarte a
            los exámenes del carnet de conducir. Todo con equipamiento
            homologado y personal cualificado.
          </p>
          <ul>
            <li>Reconocimiento médico general.</li>
            <li>Agudeza visual y campo de visión.</li>
            <li>Pruebas de coordinación y tiempos de reacción.</li>
            <li>Fotografía tamaño carnet.</li>
            <li>Emisión del informe psicofísico para la DGT.</li>
          </ul>

          <h2>Qué tienes que traer</h2>
          <ul>
            <li>DNI o NIE en vigor.</li>
            <li>Gafas o lentillas, si las usas para conducir.</li>
            <li>Si estás con una autoescuela, cualquier documento que te hayan pedido llevar.</li>
          </ul>

          <h2>Después del reconocimiento</h2>
          <p>
            Con el informe favorable ya puedes seguir con los trámites de la
            DGT y las pruebas de la autoescuela. Nosotros nos encargamos de la
            parte médica y psicotécnica; el resto lo verás con tu autoescuela.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Dudas frecuentes sobre la obtención
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock title="Pide cita para tu psicotécnico" />
    </>
  );
}
