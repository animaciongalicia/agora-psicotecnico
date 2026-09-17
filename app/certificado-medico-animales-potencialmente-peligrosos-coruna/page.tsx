import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, PawIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/certificado-medico-animales-potencialmente-peligrosos-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Certificado ANPP para animales potencialmente peligrosos en A Coruña",
  description:
    "Certificado médico y psicotécnico para la tenencia de animales potencialmente peligrosos (ANPP) en A Coruña. Cita al 881 915 396 · Rúa Bolivia 1.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "¿Qué es el certificado ANPP?",
    answer:
      "Es el certificado de capacidad física y psicológica exigido para obtener y renovar la licencia municipal para la tenencia de animales considerados potencialmente peligrosos (razas ANPP).",
  },
  {
    question: "¿Cuáles son las razas incluidas?",
    answer:
      "La normativa nacional recoge una lista general (pit bull terrier, Staffordshire, American Staffordshire, rottweiler, dogo argentino, fila brasileiro, tosa inu y akita inu), pero cada ayuntamiento y comunidad autónoma puede incluir otras razas o cruces. Consulta con el Ayuntamiento de A Coruña para tu caso concreto.",
  },
  {
    question: "¿Qué documentación necesito?",
    answer:
      "DNI o NIE en vigor. Si es una renovación, aporta también la licencia anterior si la conservas.",
  },
  {
    question: "¿Cuánto tiempo tarda el reconocimiento?",
    answer:
      "Alrededor de 30-40 minutos si vienes con cita previa. Sales con el certificado en mano.",
  },
];

export default function AnimalesPeligrososPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Certificado médico y psicotécnico ANPP en A Coruña",
            description:
              "Reconocimiento médico y psicotécnico para la tenencia de animales potencialmente peligrosos.",
            href: PATH,
            serviceType: "Certificado ANPP",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
            { name: "Animales potencialmente peligrosos", href: PATH },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
              { name: "Animales peligrosos", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-10 md:pb-14 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-5">
              Certificado para animales potencialmente peligrosos (ANPP)
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Certificado médico y psicotécnico oficial exigido para tramitar
              con tu ayuntamiento la licencia de tenencia de animales
              potencialmente peligrosos. Trámite ágil, en una sola visita.
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
              <PawIcon className="w-20 h-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight prose-agora">
          <h2>Qué incluye</h2>
          <ul>
            <li>Reconocimiento médico general.</li>
            <li>Evaluación de capacidad visual y auditiva.</li>
            <li>Pruebas psicotécnicas: coordinación, atención, reacción.</li>
            <li>Certificado oficial firmado y sellado para tu ayuntamiento.</li>
          </ul>

          <h2>Qué tienes que traer</h2>
          <ul>
            <li>DNI o NIE en vigor.</li>
            <li>Licencia anterior, si es renovación.</li>
          </ul>

          <p className="text-sm text-ink-muted mt-6">
            <em>
              La licencia municipal ANPP la expide tu ayuntamiento y suele
              exigir, además del certificado médico y psicotécnico, un seguro
              de responsabilidad civil y otros requisitos. Comprueba también con
              tu ayuntamiento antes de completar el trámite.
            </em>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Sobre la licencia ANPP
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock title="Pide cita para tu certificado ANPP" />
    </>
  );
}
