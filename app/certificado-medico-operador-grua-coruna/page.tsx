import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, ConstructionIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/certificado-medico-operador-grua-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Certificado médico para operador de grúa en A Coruña",
  description:
    "Certificado médico y psicotécnico oficial para operadores de grúa torre y grúa móvil autopropulsada en A Coruña. Cita al 881 915 396 · Rúa Bolivia 1.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "¿Para qué tipos de grúa sirve el certificado?",
    answer:
      "Para operadores de grúa torre y de grúa móvil autopropulsada. En ambos casos se exige un reconocimiento médico y psicotécnico específico, tal y como establece la normativa vigente.",
  },
  {
    question: "¿Cuánto dura el reconocimiento?",
    answer:
      "Sobre 30-40 minutos con cita previa. Incluye reconocimiento médico, agudeza visual y pruebas psicotécnicas (coordinación, atención, tiempos de reacción).",
  },
  {
    question: "¿Qué necesito llevar?",
    answer:
      "DNI o NIE en vigor. Si tienes carnet o titulación previa como operador de grúa, tráelo también. Si usas gafas o lentillas, no olvides traerlas.",
  },
  {
    question: "¿Cuánto dura la validez del certificado?",
    answer:
      "La periodicidad la fija la normativa vigente y depende del tipo de grúa y de la edad. Se detalla en el propio certificado.",
  },
];

export default function OperadorGruaPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Certificado médico y psicotécnico para operador de grúa en A Coruña",
            description:
              "Reconocimiento médico y psicotécnico oficial para operadores de grúa torre y grúa móvil autopropulsada.",
            href: PATH,
            serviceType: "Certificado médico para operador de grúa",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
            { name: "Operador de grúa", href: PATH },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
              { name: "Operador de grúa", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-10 md:pb-14 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-5">
              Certificado médico para operador de grúa en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico y psicotécnico oficial para operadores de
              grúa torre y grúa móvil autopropulsada. Trámite en una sola visita
              y con el certificado en mano al salir.
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
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-40 h-40 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center">
              <ConstructionIcon className="w-20 h-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight prose-agora">
          <h2>Qué incluye</h2>
          <ul>
            <li>Reconocimiento médico general.</li>
            <li>Agudeza visual, campo visual y audición.</li>
            <li>Pruebas psicotécnicas: coordinación, tiempos de reacción y atención.</li>
            <li>Emisión del certificado oficial firmado y sellado.</li>
          </ul>

          <h2>Tipos de grúa cubiertos</h2>
          <ul>
            <li>Grúa torre (obra).</li>
            <li>Grúa móvil autopropulsada.</li>
          </ul>

          <p>
            Si tu caso incluye otras máquinas o equipos de trabajo, coméntanos
            en la cita el uso concreto para orientarte correctamente.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Sobre el certificado de grúa
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock title="Pide cita para tu certificado" />
    </>
  );
}
