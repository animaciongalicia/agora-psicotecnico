import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, ShieldIcon, ClockIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ServiceStepsBlock, ChecklistBlock } from "@/components/ServiceStepsBlock";

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
  {
    question: "¿Se hace prueba psicológica?",
    answer:
      "Sí. Se hace entrevista clínica y, en función del caso, tests específicos. El objetivo es valorar aptitudes y estabilidad para las funciones propias de la seguridad privada.",
  },
  {
    question: "¿Y si trabajo o quiero trabajar en el sector cinegético o con armas?",
    answer:
      "Para vigilantes de explosivos y algunas habilitaciones que impliquen uso de armas, el reconocimiento incluye valoraciones específicas. Coméntanos tu caso al pedir cita.",
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
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-5">
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
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center">
                <ShieldIcon className="w-20 h-20" />
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
            intro="Cuatro pasos, una visita, un certificado listo para tu habilitación."
            steps={[
              {
                n: 1,
                title: "Pide cita",
                text: "Llama al 881 915 396 o rellena el formulario web. Dinos qué habilitación necesitas.",
              },
              {
                n: 2,
                title: "Ven con tu DNI",
                text: "Trae la habilitación anterior si es renovación y cualquier informe médico relevante.",
              },
              {
                n: 3,
                title: "Reconocimiento en 30-40 min",
                text: "Exploración médica, visión, audición, psicotécnico y valoración de aptitudes.",
              },
              {
                n: 4,
                title: "Certificado en mano",
                text: "Sales del centro con el certificado firmado y sellado, listo para el Ministerio del Interior.",
              },
            ]}
          />

          <aside className="space-y-5">
            <ChecklistBlock
              title="Qué tienes que traer"
              items={[
                "DNI o NIE en vigor",
                "Habilitación anterior si es renovación",
                "Informes médicos si tienes patologías relevantes",
                "Gafas o lentillas si las usas",
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
          <h2>Qué incluye el reconocimiento</h2>
          <ul>
            <li>Reconocimiento médico general y anamnesis.</li>
            <li>Agudeza visual y audición.</li>
            <li>Pruebas psicotécnicas: coordinación, tiempos de reacción, atención y aptitudes cognitivas.</li>
            <li>Valoración clínica de estabilidad emocional.</li>
            <li>Emisión del certificado oficial para tu habilitación.</li>
          </ul>

          <h2>Habilitaciones cubiertas</h2>
          <ul>
            <li><strong>Vigilante de seguridad.</strong></li>
            <li><strong>Vigilante de explosivos.</strong></li>
            <li><strong>Escolta privado.</strong></li>
            <li><strong>Detective privado.</strong></li>
            <li>Otras figuras del ámbito de la seguridad privada.</li>
          </ul>

          <h2>Después del certificado</h2>
          <p>
            El certificado es un requisito para tramitar o renovar la habilitación
            profesional con el <strong>Ministerio del Interior</strong>. Además,
            deberás:
          </p>
          <ul>
            <li>Presentar la documentación correspondiente al tipo de habilitación.</li>
            <li>Superar las pruebas exigidas por la normativa (en primera habilitación).</li>
            <li>Renovar el certificado cuando caduque para mantener la habilitación en vigor.</li>
          </ul>

          <p className="text-sm text-ink-muted mt-6">
            <em>
              La obtención o renovación de la habilitación depende del Ministerio
              del Interior. El certificado médico es uno de los requisitos.
            </em>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
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
