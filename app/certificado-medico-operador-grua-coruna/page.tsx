import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, ConstructionIcon, ClockIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ServiceStepsBlock, ChecklistBlock } from "@/components/ServiceStepsBlock";

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
  {
    question: "¿Me lo pide la empresa o lo pido yo por mi cuenta?",
    answer:
      "Depende del caso. La mayoría de las empresas exigen el certificado al contratar o renovar la habilitación del operario. También puedes solicitarlo por tu cuenta si estás en proceso de acreditación.",
  },
  {
    question: "¿Y si tengo vértigo o problemas de equilibrio?",
    answer:
      "Es importante que lo comentes durante la anamnesis. Determinadas patologías de equilibrio, oído interno o visión estereoscópica pueden ser incompatibles con el manejo seguro de grúas en altura.",
  },
  {
    question: "¿El certificado es válido en toda España?",
    answer:
      "Sí. El certificado se emite conforme a la normativa estatal y es válido en cualquier comunidad autónoma. Si tu empresa opera fuera de Galicia, no hay ningún inconveniente.",
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

      {/* HERO ---------------------------------------------- */}
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
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-5">
              Certificado médico para operador de grúa en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico y psicotécnico oficial para operadores de
              grúa torre y grúa móvil autopropulsada. Trámite en una sola visita
              y con el certificado en mano al salir del centro.
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
                <ConstructionIcon className="w-20 h-20" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lift border border-line px-3 py-2 flex items-center gap-1.5 text-brand-700 text-sm font-semibold">
                <ClockIcon className="w-4 h-4" />
                30-40 min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PASOS + CHECKLIST -------------------------------- */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="container grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10">
          <ServiceStepsBlock
            title="Cómo funciona"
            intro="Cuatro pasos, una visita, un certificado firmado y sellado al terminar."
            steps={[
              {
                n: 1,
                title: "Pide cita",
                text: "Llama al 881 915 396 o rellena el formulario web. Coméntanos si es grúa torre o móvil.",
              },
              {
                n: 2,
                title: "Ven al centro",
                text: "Estamos en Rúa Bolivia 1, esquina Avenida de Arteixo. Parking gratuito cercano.",
              },
              {
                n: 3,
                title: "Reconocimiento en 30-40 min",
                text: "Exploración médica, agudeza visual, audición y pruebas psicotécnicas específicas del puesto.",
              },
              {
                n: 4,
                title: "Certificado en mano",
                text: "Sales del centro con el certificado firmado y sellado, listo para presentar en tu empresa.",
              },
            ]}
          />

          <aside className="space-y-5">
            <ChecklistBlock
              title="Qué tienes que traer"
              items={[
                "DNI o NIE en vigor",
                "Carnet o titulación previa como operador (si es renovación)",
                "Gafas o lentillas si las usas",
                "Informes médicos recientes de patologías relevantes",
              ]}
            />
            <div className="card p-6">
              <h3 className="font-display font-semibold text-lg text-ink mb-3">
                Contacto directo
              </h3>
              <ul className="space-y-2 text-ink-soft text-sm">
                <li>
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="text-brand-800 font-semibold hover:text-brand-900"
                  >
                    {site.phone.display}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-brand-800 font-semibold hover:text-brand-900 break-all"
                  >
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

      {/* QUÉ INCLUYE + TIPOS ------------------------------ */}
      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight prose-agora">
          <h2>Qué incluye el reconocimiento</h2>
          <ul>
            <li>Reconocimiento médico general y anamnesis.</li>
            <li>Agudeza visual, campo visual y visión estereoscópica.</li>
            <li>Audición.</li>
            <li>Pruebas psicotécnicas: coordinación, tiempos de reacción y atención sostenida.</li>
            <li>Valoración de aptitudes específicas para trabajos en altura y con carga.</li>
            <li>Emisión del certificado oficial firmado y sellado.</li>
          </ul>

          <h2>Tipos de grúa cubiertos</h2>

          <h3>Grúa torre</h3>
          <p>
            La grúa torre es la habitual en obras de construcción. El operario
            trabaja en cabina elevada, con exigencias específicas de{" "}
            <strong>visión, coordinación y control emocional</strong> ante
            situaciones que requieren precisión y responsabilidad.
          </p>

          <h3>Grúa móvil autopropulsada</h3>
          <p>
            La grúa móvil combina la habilidad de conducción con el manejo del
            equipo de elevación. Se evalúa tanto la aptitud para conducir el
            vehículo como para manipular la carga con seguridad.
          </p>

          <p>
            Si tu caso incluye <strong>otras máquinas o equipos de trabajo</strong>{" "}
            (carretillas elevadoras, plataformas, etc.), coméntanos en la cita
            el uso concreto para orientarte correctamente. Podemos hacer
            reconocimientos combinados en la misma visita.
          </p>

          <h2>Vigencia del certificado</h2>
          <p>
            La periodicidad de las revisiones la fija la normativa vigente y
            depende del tipo de grúa, del puesto y de la edad del operario. En
            el propio certificado consta la fecha de emisión y su vigencia. Te
            recomendamos anotar la fecha de vencimiento con margen para
            renovarlo antes de que caduque, así evitas interrupciones en la
            actividad profesional.
          </p>
        </div>
      </section>

      {/* FAQ ------------------------------------------------ */}
      <section className="py-14 md:py-20 bg-surface">
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
