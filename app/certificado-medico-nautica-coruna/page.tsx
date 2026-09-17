import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, AnchorIcon, ClockIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ServiceStepsBlock, ChecklistBlock } from "@/components/ServiceStepsBlock";

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
  {
    question: "¿La visión de colores es un problema?",
    answer:
      "En náutica es especialmente importante distinguir el rojo del verde por las luces de navegación. Si tienes daltonismo o dudas al respecto, coméntanoslo antes: el médico valorará el caso concreto.",
  },
  {
    question: "¿Sirve el certificado del carnet de conducir para la náutica?",
    answer:
      "No. Aunque comparten pruebas, son certificados distintos con evaluaciones específicas. La visión de colores y algunas pruebas se adaptan al ámbito marítimo.",
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
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-5">
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
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center">
                <AnchorIcon className="w-20 h-20" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lift border border-line px-3 py-2 flex items-center gap-1.5 text-brand-700 text-sm font-semibold">
                <ClockIcon className="w-4 h-4" />
                30-40 min
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="container grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10">
          <ServiceStepsBlock
            title="Cómo funciona"
            intro="Cuatro pasos, una visita, un certificado listo para tu titulación."
            steps={[
              {
                n: 1,
                title: "Pide cita",
                text: "Llama al 881 915 396 o rellena el formulario. Coméntanos qué titulación vas a obtener o renovar.",
              },
              {
                n: 2,
                title: "Ven con tu DNI",
                text: "Trae la titulación anterior si es renovación y gafas o lentillas si las usas.",
              },
              {
                n: 3,
                title: "Reconocimiento en 30-40 min",
                text: "Exploración médica, visión (incluida la de colores), audición y pruebas psicotécnicas.",
              },
              {
                n: 4,
                title: "Certificado en mano",
                text: "Sales del centro con el certificado firmado y sellado, listo para presentar donde lo necesites.",
              },
            ]}
          />

          <aside className="space-y-5">
            <ChecklistBlock
              title="Qué tienes que traer"
              items={[
                "DNI o NIE en vigor",
                "Titulación anterior o certificado médico previo (si es renovación)",
                "Gafas o lentillas si las usas",
                "Informes médicos recientes si tienes patologías relevantes",
              ]}
            />
            <div className="card p-6">
              <h3 className="font-display font-semibold text-lg text-ink mb-3">
                Contacto directo
              </h3>
              <ul className="space-y-2 text-ink-soft text-sm">
                <li>
                  <a href={`tel:${site.phone.tel}`} className="text-brand-800 font-semibold hover:text-brand-900">
                    {site.phone.display}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="text-brand-800 font-semibold hover:text-brand-900 break-all">
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="text-ink-muted">Horario:</span>{" "}
                  {site.hours.display[0].hours} · tardes L, M y J
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight prose-agora">
          <h2>Qué incluye</h2>
          <ul>
            <li>Reconocimiento médico general.</li>
            <li>Agudeza visual, campo visual y visión de colores (importante en náutica).</li>
            <li>Audición (esencial para comunicación por radio VHF).</li>
            <li>Pruebas psicofísicas exigidas por la normativa marítima.</li>
            <li>Fotografía oficial.</li>
            <li>Certificado médico firmado y sellado, listo para presentar.</li>
          </ul>

          <h2>Para qué titulaciones sirve</h2>
          <ul>
            <li><strong>Licencia de Navegación</strong>: embarcaciones a motor pequeñas y cerca de la costa.</li>
            <li><strong>Patrón de Navegación Básica (PNB)</strong>: embarcaciones a motor hasta 8 metros.</li>
            <li><strong>Patrón de Embarcaciones de Recreo (PER)</strong>: la titulación reina de los aficionados a la náutica.</li>
            <li><strong>Patrón de Yate (PY)</strong>: embarcaciones más grandes y navegación en aguas más abiertas.</li>
            <li><strong>Capitán de Yate (CY)</strong>: la titulación de recreo con más habilitaciones.</li>
          </ul>
          <p>
            Si tu caso es para uso <strong>profesional</strong> o requiere un
            reconocimiento específico distinto al de recreo, llámanos y lo
            revisamos contigo antes de la cita.
          </p>

          <h2>Vigencia del certificado</h2>
          <p>
            La vigencia del certificado depende del tipo de titulación y de la
            edad del titular. Con carácter general:
          </p>
          <ul>
            <li><strong>Antes de los 40 años:</strong> 10 años.</li>
            <li><strong>Entre 40 y 70 años:</strong> 5 años.</li>
            <li><strong>A partir de los 70 años:</strong> 2 años.</li>
          </ul>
          <p>
            Estos plazos pueden variar según la normativa vigente y el tipo
            específico de titulación. En el propio certificado consta la fecha
            de emisión y su plazo.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
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
