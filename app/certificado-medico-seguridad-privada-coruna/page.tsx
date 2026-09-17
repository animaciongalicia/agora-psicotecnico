import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, ShieldIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/certificado-medico-seguridad-privada-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Certificado médico y psicotécnico para seguridad privada en A Coruña",
  description:
    "Certificado médico y psicotécnico oficial para vigilantes de seguridad privada, escoltas y detectives en A Coruña. Cita al 881 915 396 · Rúa Bolivia 1.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "¿Para qué habilitaciones sirve el certificado?",
    answer:
      "Para las habilitaciones de vigilante de seguridad, vigilante de explosivos, escolta privado y detective privado, entre otras figuras reguladas por la Ley de Seguridad Privada.",
  },
  {
    question: "¿Cuánto tarda el reconocimiento?",
    answer:
      "Alrededor de 30-40 minutos con cita previa. Incluye reconocimiento médico general, agudeza visual, pruebas psicotécnicas y fotografía cuando corresponde.",
  },
  {
    question: "¿Qué documentación necesito llevar?",
    answer:
      "DNI o NIE en vigor. Si es renovación, aporta también la habilitación anterior si la tienes. Si estás en tratamiento médico, comenta al reconocimiento qué medicaciones tomas.",
  },
  {
    question: "¿Cuánto dura la validez del certificado?",
    answer:
      "La vigencia depende de la normativa vigente y del tipo de habilitación. En el propio certificado consta la fecha de emisión y su plazo.",
  },
];

export default function SeguridadPrivadaPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Certificado médico y psicotécnico para seguridad privada en A Coruña",
            description:
              "Reconocimiento médico y psicotécnico oficial para vigilantes de seguridad, escoltas y detectives privados.",
            href: PATH,
            serviceType: "Certificado médico para seguridad privada",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
            { name: "Seguridad privada", href: PATH },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
              { name: "Seguridad privada", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-10 md:pb-14 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-5">
              Certificado médico y psicotécnico para seguridad privada
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico y psicotécnico oficial para vigilantes de
              seguridad, escoltas y detectives privados. Todo en una sola visita
              y con el certificado en mano.
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
              <ShieldIcon className="w-20 h-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight prose-agora">
          <h2>Qué incluye el reconocimiento</h2>
          <ul>
            <li>Reconocimiento médico general.</li>
            <li>Agudeza visual y audición.</li>
            <li>Pruebas psicotécnicas: coordinación, tiempos de reacción, atención y aptitudes cognitivas.</li>
            <li>Emisión del certificado oficial para tu habilitación.</li>
          </ul>

          <h2>Habilitaciones cubiertas</h2>
          <ul>
            <li>Vigilante de seguridad.</li>
            <li>Vigilante de explosivos.</li>
            <li>Escolta privado.</li>
            <li>Detective privado.</li>
            <li>Otras figuras del ámbito de la seguridad privada.</li>
          </ul>

          <p className="text-sm text-ink-muted mt-6">
            <em>
              La obtención o renovación de la habilitación depende del Ministerio
              del Interior. El certificado médico es uno de los requisitos.
            </em>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Sobre la seguridad privada
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock title="Pide cita para tu certificado" />
    </>
  );
}
