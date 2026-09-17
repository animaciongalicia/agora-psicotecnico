import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, AnchorIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/certificado-medico-nautica-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Certificado médico para titulaciones náuticas en A Coruña",
  description:
    "Certificado médico oficial para PER, Patrón de Yate, Capitán de Yate y demás titulaciones náuticas. En A Coruña, Rúa Bolivia 1. Cita al 881 915 396.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "¿Para qué titulaciones sirve el certificado?",
    answer:
      "Para todas las titulaciones náuticas de recreo habituales: Licencia de Navegación, Patrón de Navegación Básica (PNB), Patrón de Embarcaciones de Recreo (PER), Patrón de Yate (PY) y Capitán de Yate (CY).",
  },
  {
    question: "¿Cuánto tiempo tarda el reconocimiento?",
    answer:
      "Alrededor de 30-40 minutos con cita previa. Incluye reconocimiento médico, agudeza visual, audición y valoración del resto de aptitudes exigidas.",
  },
  {
    question: "¿Qué documentación necesito?",
    answer:
      "DNI o NIE en vigor. Si es una renovación, trae la titulación anterior o el certificado médico previo si lo conservas. Y si usas gafas o lentillas, no olvides traerlas.",
  },
  {
    question: "¿El certificado incluye fotografía?",
    answer:
      "Sí. La fotografía necesaria está incluida en el reconocimiento y se realiza en el centro con las medidas oficiales.",
  },
];

export default function NauticaPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Certificado médico para titulaciones náuticas en A Coruña",
            description:
              "Reconocimiento médico oficial para PER, PNB, PY, CY y demás titulaciones náuticas de recreo.",
            href: PATH,
            serviceType: "Certificado médico náutico",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
            { name: "Náutica", href: PATH },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
              { name: "Náutica", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-10 md:pb-14 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-5">
              Certificado médico para titulaciones náuticas en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              El certificado médico oficial para obtener o renovar tu titulación
              náutica: Licencia de Navegación, PER, PY, Capitán de Yate y demás.
              Rápido, cómodo y sin desplazamientos innecesarios.
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
              <AnchorIcon className="w-20 h-20" />
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
            <li>Pruebas psicofísicas exigidas por la normativa marítima.</li>
            <li>Fotografía oficial.</li>
            <li>Certificado médico firmado y sellado, listo para presentar.</li>
          </ul>

          <h2>Para qué titulaciones sirve</h2>
          <ul>
            <li>Licencia de Navegación.</li>
            <li>Patrón de Navegación Básica (PNB).</li>
            <li>Patrón de Embarcaciones de Recreo (PER).</li>
            <li>Patrón de Yate (PY).</li>
            <li>Capitán de Yate (CY).</li>
          </ul>

          <p>
            Si tu caso es para uso profesional o requiere un reconocimiento
            específico distinto al de recreo, llámanos y lo revisamos contigo
            antes de la cita.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Sobre las titulaciones náuticas
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock title="Pide cita para tu certificado náutico" />
    </>
  );
}
