import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, ShieldIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/certificado-medico-licencia-armas-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Certificado médico y psicotécnico para licencia de armas en A Coruña",
  description:
    "Certificado médico y psicotécnico oficial para obtener o renovar tu licencia de armas en A Coruña. Cita al 881 915 396 · Rúa Bolivia 1.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "¿Qué necesito para obtener el certificado?",
    answer:
      "Únicamente tu DNI o NIE en vigor. Todo el reconocimiento médico y las pruebas psicotécnicas se hacen aquí. Si es una renovación, trae también la licencia anterior si la conservas.",
  },
  {
    question: "¿Sirve el certificado para cualquier tipo de licencia?",
    answer:
      "El reconocimiento cubre las licencias de armas más habituales (tipos B, D, E, F, etc.). Coméntanos al pedir cita para qué licencia lo necesitas y te confirmamos.",
  },
  {
    question: "¿Cuánto dura el certificado emitido?",
    answer:
      "La vigencia del certificado y la de la propia licencia dependen del tipo de licencia y de la Guardia Civil, que es quien la expide. En el momento de emitir el certificado te informamos de los plazos aplicables.",
  },
  {
    question: "¿Cuánto tiempo tarda el reconocimiento?",
    answer:
      "En torno a 30-40 minutos si vienes con cita previa. Sales del centro con el certificado en mano.",
  },
];

export default function LicenciaArmasPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Certificado médico para licencia de armas en A Coruña",
            description:
              "Reconocimiento médico y psicotécnico para obtener o renovar la licencia de armas.",
            href: PATH,
            serviceType: "Certificado médico para licencia de armas",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
            { name: "Licencia de armas", href: PATH },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
              { name: "Licencia de armas", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-10 md:pb-14 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-5">
              Certificado médico para licencia de armas en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico y psicotécnico oficial para obtener o renovar
              tu licencia de armas. Trámite en una sola visita, sin
              complicaciones.
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
          <h2>Qué incluye</h2>
          <ul>
            <li>Reconocimiento médico general.</li>
            <li>Agudeza visual y audición.</li>
            <li>Pruebas psicotécnicas (coordinación, reacción, atención).</li>
            <li>Emisión del certificado oficial firmado y sellado.</li>
          </ul>

          <h2>Qué documentación llevar</h2>
          <ul>
            <li>DNI o NIE en vigor.</li>
            <li>Licencia anterior, si es una renovación y la conservas.</li>
            <li>
              Informes médicos previos si tienes patologías o tratamientos
              relevantes.
            </li>
          </ul>

          <p className="text-sm text-ink-muted mt-6">
            <em>
              Los requisitos legales concretos los establece la Guardia Civil,
              que es el organismo que expide y renueva las licencias de armas.
              Consulta también con ella si tienes dudas sobre el trámite
              administrativo posterior.
            </em>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Sobre la licencia de armas
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock title="Pide cita para tu licencia de armas" />
    </>
  );
}
