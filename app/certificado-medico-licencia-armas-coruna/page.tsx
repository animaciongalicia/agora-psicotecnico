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
  {
    question: "¿Se hace prueba psicológica?",
    answer:
      "Sí. En el caso de la licencia de armas, la valoración de estabilidad emocional es especialmente importante. Se hace mediante entrevista clínica y/o test específicos.",
  },
  {
    question: "¿Y si estoy en tratamiento por ansiedad o depresión?",
    answer:
      "Es importante decirlo con transparencia. Muchas personas en tratamiento estable pueden obtener el certificado sin problema; se valora la estabilidad clínica, el tipo de medicación y el criterio del médico.",
  },
  {
    question: "¿La Guardia Civil verá mi historial médico?",
    answer:
      "Solo el certificado, que indica si eres o no apto. El detalle clínico queda en el expediente del centro, con confidencialidad médica completa.",
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
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-5">
              Certificado médico para licencia de armas en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico y psicotécnico oficial para obtener o renovar
              tu licencia de armas. Trámite en una sola visita, sin
              complicaciones, con el certificado en mano al terminar.
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
            intro="Cuatro pasos, una visita, un certificado listo para la Guardia Civil."
            steps={[
              {
                n: 1,
                title: "Pide cita",
                text: "Llama al 881 915 396 o rellena el formulario. Coméntanos qué tipo de licencia necesitas.",
              },
              {
                n: 2,
                title: "Ven con tu DNI",
                text: "Trae también la licencia anterior si es renovación y los informes médicos relevantes.",
              },
              {
                n: 3,
                title: "Reconocimiento en 30-40 min",
                text: "Exploración médica, visión, audición, pruebas psicotécnicas y valoración de estabilidad.",
              },
              {
                n: 4,
                title: "Certificado en mano",
                text: "Sales del centro con el certificado firmado y sellado para presentar en la Intervención de Armas.",
              },
            ]}
          />

          <aside className="space-y-5">
            <ChecklistBlock
              title="Qué tienes que traer"
              items={[
                "DNI o NIE en vigor",
                "Licencia anterior si es renovación",
                "Informes médicos recientes si tienes patologías o tratamientos relevantes",
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
            <li>Reconocimiento médico general y anamnesis clínica.</li>
            <li>Agudeza visual y audición.</li>
            <li>Pruebas psicotécnicas: coordinación, tiempo de reacción, atención.</li>
            <li>Valoración de estabilidad emocional (entrevista y/o test específicos).</li>
            <li>Emisión del certificado oficial firmado y sellado.</li>
          </ul>

          <h2>Tipos de licencia habituales</h2>
          <ul>
            <li><strong>Licencia B</strong>: armas cortas para uso personal (defensa).</li>
            <li><strong>Licencia D</strong>: armas largas rayadas para caza mayor.</li>
            <li><strong>Licencia E</strong>: armas largas de ánima lisa para caza y tiro deportivo.</li>
            <li><strong>Licencia F</strong>: armas de tiro deportivo (federados).</li>
            <li><strong>AEM</strong>: armas para escolta privado.</li>
          </ul>
          <p>
            Otras figuras (guardas particulares, tiradores de precisión olímpicos,
            etc.) pueden tener requisitos añadidos. Si tienes dudas sobre tu caso
            concreto, llámanos antes de pedir cita.
          </p>

          <h2>Y después del certificado, ¿qué?</h2>
          <p>
            El certificado es <strong>uno de los requisitos</strong> para tramitar
            la licencia, pero no es la licencia en sí. La expide la{" "}
            <strong>Guardia Civil</strong> (Intervención de Armas). Para
            obtenerla o renovarla, además del certificado médico, tendrás que:
          </p>
          <ul>
            <li>Rellenar el modelo de solicitud correspondiente.</li>
            <li>Aportar la documentación adicional según el tipo de licencia (tasa, DNI, licencia anterior, en algunos casos justificante federativo).</li>
            <li>Pasar la prueba de conocimientos y aptitud (en las primeras licencias, no en las renovaciones).</li>
            <li>Superar la valoración de la Guardia Civil sobre tu idoneidad.</li>
          </ul>
          <p>
            La Guardia Civil es quien decide finalmente si expide o no la
            licencia. Un certificado favorable es necesario, pero{" "}
            <strong>no obliga automáticamente</strong> a la Intervención de Armas:
            pueden requerir aclaraciones adicionales según tu caso.
          </p>

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

      <section className="py-14 md:py-20 bg-surface">
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
