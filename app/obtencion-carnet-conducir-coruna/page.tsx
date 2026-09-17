import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import {
  PhoneIcon,
  CalendarIcon,
  CheckIcon,
  TargetIcon,
  StethoscopeIcon,
  CarIcon,
  ClockIcon,
} from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/obtencion-carnet-conducir-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Psicotécnico para la obtención del carnet en A Coruña",
  description:
    "Reconocimiento médico y pruebas psicotécnicas necesarios para obtener por primera vez tu permiso de conducir en A Coruña. Rúa Bolivia 1. Cita al 881 915 396.",
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
      "Habitualmente, el informe de aptitud psicofísica se presenta antes de las pruebas oficiales. Si tu autoescuela te ha indicado unas gestiones concretas, síguelas. Si tienes dudas, llámanos y lo aclaramos contigo.",
  },
  {
    question: "¿Uso gafas o lentillas — hay algún problema?",
    answer:
      "No. La revisión visual se hace tal y como conducirás. Trae tus gafas o lentillas puestas y no habrá inconveniente.",
  },
  {
    question: "¿Sirve para todos los permisos (A, B, C, D…)?",
    answer:
      "Sí. En el centro emitimos el informe psicofísico para todos los permisos (motocicleta, turismo, camión, autobús, etc.). Coméntanos al pedir cita el permiso que vas a sacar para reservarte el tiempo necesario y las pruebas específicas.",
  },
  {
    question: "¿Cuánto tiempo es válido el informe?",
    answer:
      "El informe psicofísico tiene una vigencia limitada desde su emisión. Con carácter general, unos 90 días para presentarlo ante la DGT. Si vas a demorar los trámites, llámanos y coordinamos el momento.",
  },
  {
    question: "¿Y si tengo alguna patología o tomo medicación?",
    answer:
      "Coméntanoslo. Muchas medicaciones son compatibles con la conducción; otras requieren informes específicos. Nuestro objetivo es que obtengas el permiso con seguridad y dentro de la normativa.",
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

      {/* HERO ---------------------------------------------- */}
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
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-5">
              Psicotécnico para la obtención del carnet en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico, pruebas psicotécnicas y fotografía para
              obtener tu primer permiso de conducir. Todo en una visita, sin
              vueltas, y listo para presentar en la autoescuela y la DGT.
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
          <div className="relative">
            <PagePlaceholder label="Zona de pruebas psicotécnicas" aspect="4/3" />
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 hidden sm:block">
              <div className="bg-surface rounded-xl shadow-lift border border-line p-4 max-w-[240px]">
                <div className="flex items-center gap-2 text-brand-700 mb-1">
                  <ClockIcon className="w-5 h-5" />
                  <span className="font-semibold text-sm uppercase tracking-wide">
                    30-40 minutos
                  </span>
                </div>
                <p className="text-sm text-ink-soft">
                  Reconocimiento, pruebas y foto en la misma visita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE --------------------------------------- */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
            Qué incluye el reconocimiento
          </h2>
          <p className="text-lg text-ink-soft mb-8 max-w-2xl">
            El informe de aptitud psicofísica que necesitas para presentarte a
            los exámenes del carnet. Con equipamiento homologado y personal
            cualificado.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Reconocimiento médico",
                text: "Exploración general, patologías relevantes, medicaciones. Todo lo necesario para conducir con seguridad.",
                icon: <StethoscopeIcon className="w-6 h-6" />,
              },
              {
                title: "Agudeza visual y audición",
                text: "Comprobación visual con la corrección que uses (gafas o lentillas). Prueba auditiva básica.",
                icon: <CheckIcon className="w-6 h-6" />,
              },
              {
                title: "Pruebas psicotécnicas",
                text: "Coordinación bimanual, tiempos de reacción y atención sostenida. Con equipamiento homologado.",
                icon: <TargetIcon className="w-6 h-6" />,
              },
              {
                title: "Fotografía oficial",
                text: "Foto tamaño carnet incluida. No hace falta que la traigas del fotomatón.",
                icon: <CarIcon className="w-6 h-6" />,
              },
            ].map((b) => (
              <div key={b.title} className="card p-5 flex gap-4">
                <span className="w-11 h-11 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-1">
                    {b.title}
                  </h3>
                  <p className="text-ink-soft">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASOS --------------------------------------------- */}
      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
            Cómo funciona en Ágora
          </h2>
          <p className="text-lg text-ink-soft mb-10 max-w-2xl">
            Cuatro pasos, una visita, un mismo día. Sales con el informe listo
            para presentar en tu autoescuela y en la DGT.
          </p>
          <ol className="space-y-5">
            {[
              {
                n: 1,
                title: "Pide cita",
                text: "Llama al 881 915 396 o pide cita desde la web. Dinos qué permiso vas a sacar (A, B, C…) para reservarte el tiempo adecuado.",
              },
              {
                n: 2,
                title: "Ven con tu DNI",
                text: "Solo el DNI o NIE en vigor. Trae también gafas o lentillas si las usas y cualquier informe médico relevante.",
              },
              {
                n: 3,
                title: "Reconocimiento y pruebas",
                text: "Exploración médica, pruebas visuales y auditivas, psicotécnicos y fotografía. Unos 30-40 minutos.",
              },
              {
                n: 4,
                title: "Informe en mano",
                text: "Sales con el informe de aptitud psicofísica firmado y sellado, listo para presentar en autoescuela y DGT.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 md:gap-6">
                <span
                  aria-hidden
                  className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-brand-700 text-white font-display font-bold flex items-center justify-center text-lg md:text-2xl flex-shrink-0 shadow-soft"
                >
                  {step.n}
                </span>
                <div className="pt-1">
                  <h3 className="font-display font-semibold text-xl text-ink mb-1">
                    {step.title}
                  </h3>
                  <p className="text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* QUÉ TRAER ----------------------------------------- */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight prose-agora">
          <h2>Qué tienes que traer</h2>
          <p>
            La documentación necesaria es mínima. Con esto llegas más que
            preparado:
          </p>
          <ul>
            <li>
              <strong>DNI o NIE en vigor.</strong> Imprescindible.
            </li>
            <li>
              <strong>Gafas o lentillas</strong>, si las usas o vas a usarlas
              para conducir.
            </li>
            <li>
              <strong>Informes médicos recientes</strong>, si tienes alguna
              patología crónica, tratamiento o cirugía relevante.
            </li>
            <li>
              Si estás con una <strong>autoescuela</strong>, cualquier documento
              o pauta específica que te hayan pedido llevar.
            </li>
          </ul>
          <p>
            La <strong>fotografía va incluida</strong>: se hace en el centro.
            No hay que traer nada del fotomatón.
          </p>

          <h2>Después del reconocimiento</h2>
          <p>
            Con el informe favorable, ya puedes seguir con:
          </p>
          <ul>
            <li>Los <strong>trámites y exámenes teóricos</strong> con la DGT.</li>
            <li>Las <strong>clases y examen práctico</strong> con tu autoescuela.</li>
          </ul>
          <p>
            Nosotros nos encargamos de la parte médica y psicotécnica: el
            informe que hace falta para poder empezar. El resto del proceso lo
            gestionas con tu autoescuela y la DGT.
          </p>

          <h2>¿Y si conduzco solo motocicleta, o solo un permiso profesional?</h2>
          <p>
            El reconocimiento cubre todos los permisos habituales:{" "}
            <strong>A, A1, A2, AM, B, BE, C, C1, D, D1, E</strong>, etc. Para
            algunos permisos profesionales o casos con adaptaciones especiales,
            puede haber pruebas específicas. Cuéntanoslo al pedir cita para
            preparar tu caso concreto y darte el precio ajustado.
          </p>

          <h2>¿Y si me sale mal alguna prueba?</h2>
          <p>
            No es un examen; es una <strong>valoración de aptitud</strong>. Si
            un día vienes cansado o alterado y una prueba puntual no sale bien,
            se puede repetir. En casos muy concretos se pueden establecer
            restricciones (por ejemplo, obligación de conducir con gafas) o
            reprogramar. Lo importante es que puedas conducir con seguridad.
          </p>
        </div>
      </section>

      {/* FAQ ------------------------------------------------ */}
      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-2">
              Dudas frecuentes sobre la obtención
            </h2>
            <p className="text-lg text-ink-soft">
              Si tu duda no está aquí, llámanos al {site.phone.display} y te
              atendemos en el momento.
            </p>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock title="Pide cita para tu psicotécnico" />
    </>
  );
}
