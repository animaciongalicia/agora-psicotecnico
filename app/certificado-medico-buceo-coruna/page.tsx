import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, DivingIcon, ClockIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ServiceStepsBlock, ChecklistBlock } from "@/components/ServiceStepsBlock";

const PATH = "/certificado-medico-buceo-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Certificado médico para buceo en A Coruña",
  description:
    "Reconocimiento médico oficial para buceo recreativo y profesional en A Coruña. Aptitud psicofísica para buceadores. Cita al 881 915 396 · Rúa Bolivia 1.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "¿Para qué tipo de buceo sirve el certificado?",
    answer:
      "Emitimos el reconocimiento médico para buceo recreativo (Open Water, Advanced, Rescue, Divemaster, etc.) y para buceo profesional. Coméntanos al pedir cita qué titulación o federación te lo solicita para adaptar el reconocimiento.",
  },
  {
    question: "¿Cuánto tiempo tarda el reconocimiento?",
    answer:
      "Entre 30 y 45 minutos con cita previa. El reconocimiento de buceo incluye pruebas específicas como valoración cardiovascular, respiratoria, otorrinolaringológica y auditiva, además de exploración general.",
  },
  {
    question: "¿Qué documentación necesito llevar?",
    answer:
      "DNI o NIE en vigor. Si es una renovación, trae el certificado anterior si lo conservas. Si tienes patologías cardiovasculares, respiratorias, ORL o antecedentes de barotrauma, informes médicos recientes.",
  },
  {
    question: "¿Puedo bucear si soy asmático o tengo problemas de oído?",
    answer:
      "Depende del caso. El asma controlado con criterios estrictos puede ser compatible en algunos protocolos, y ciertas patologías del oído medio son incompatibles con el buceo. Se valora individualmente y con los informes que aportes.",
  },
  {
    question: "¿Con qué frecuencia hay que renovar el certificado?",
    answer:
      "Generalmente cada año o cada dos años, según la titulación y la edad del buceador. Los buceadores profesionales tienen protocolos de revisión más frecuentes.",
  },
  {
    question: "¿Sirve para federarme en FEDAS o CMAS?",
    answer:
      "Sí, emitimos el reconocimiento médico compatible con los requisitos habituales de las federaciones de buceo (FEDAS, CMAS) y de las principales agencias formativas (PADI, SSI, etc.). Confirma con tu federación o escuela si necesita algún formulario específico.",
  },
  {
    question: "¿Es lo mismo que el certificado para náutica?",
    answer:
      "No. El reconocimiento de buceo evalúa aspectos específicos (oído medio, capacidad pulmonar, adaptación a la presión) que no forman parte del reconocimiento náutico ordinario.",
  },
];

export default function BuceoPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Certificado médico para buceo en A Coruña",
            description:
              "Reconocimiento médico oficial para buceo recreativo y profesional. Aptitud psicofísica del buceador.",
            href: PATH,
            serviceType: "Certificado médico de buceo",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
            { name: "Buceo", href: PATH },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Certificados médicos", href: "/certificados-medicos-coruna" },
              { name: "Buceo", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-10 md:pb-14 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-5">
              Certificado médico para buceo en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico oficial para buceo recreativo y profesional.
              Aptitud psicofísica del buceador con evaluación específica de las
              condiciones exigidas por federaciones y escuelas.
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
                <DivingIcon className="w-20 h-20" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lift border border-line px-3 py-2 flex items-center gap-1.5 text-brand-700 text-sm font-semibold">
                <ClockIcon className="w-4 h-4" />
                30-45 min
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="container grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10">
          <ServiceStepsBlock
            title="Cómo funciona"
            intro="Cuatro pasos, una visita, un certificado listo para tu escuela o federación."
            steps={[
              {
                n: 1,
                title: "Pide cita",
                text: "Llama al 881 915 396 o rellena el formulario. Dinos si es buceo recreativo o profesional y a qué federación / escuela lo presentas.",
              },
              {
                n: 2,
                title: "Ven con tu DNI",
                text: "Trae el certificado anterior si es renovación e informes médicos si tienes patologías cardiovasculares, respiratorias u ORL.",
              },
              {
                n: 3,
                title: "Reconocimiento en 30-45 min",
                text: "Exploración cardiovascular, respiratoria, ORL, visión, audición y pruebas específicas de aptitud para el buceo.",
              },
              {
                n: 4,
                title: "Certificado en mano",
                text: "Sales del centro con el certificado firmado y sellado, listo para presentar en tu escuela o federación.",
              },
            ]}
          />

          <aside className="space-y-5">
            <ChecklistBlock
              title="Qué tienes que traer"
              items={[
                "DNI o NIE en vigor",
                "Certificado anterior si es renovación",
                "Informes médicos si tienes patologías cardiovasculares, respiratorias u ORL",
                "Gafas o lentillas si las usas",
                "Cualquier formulario específico que te haya dado la federación / escuela",
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
          <p>
            El buceo somete al organismo a condiciones específicas: cambios de
            presión, respiración con aire comprimido, esfuerzo físico en un
            medio ajeno. El reconocimiento médico evalúa que tu cuerpo puede
            hacer frente a esas condiciones con seguridad.
          </p>
          <ul>
            <li>Anamnesis completa y exploración general.</li>
            <li>Valoración cardiovascular (tensión, pulso, auscultación).</li>
            <li>Valoración respiratoria (auscultación pulmonar y espirometría si procede).</li>
            <li>Exploración otorrinolaringológica (ORL): oído medio, senos paranasales.</li>
            <li>Agudeza visual y audición.</li>
            <li>Pruebas psicofísicas y valoración de aptitud.</li>
            <li>Emisión del certificado firmado y sellado.</li>
          </ul>

          <h2>Tipos de buceo cubiertos</h2>

          <h3>Buceo recreativo</h3>
          <p>
            Para las titulaciones de las agencias más habituales (PADI, SSI,
            NAUI, CMAS, FEDAS) en sus distintos niveles: <strong>Open Water,
            Advanced Open Water, Rescue Diver, Divemaster</strong>, etc. Se
            adapta al nivel de exigencia del curso o de la actividad.
          </p>

          <h3>Buceo profesional</h3>
          <p>
            Para buceadores profesionales, con requisitos más exigentes:
            revisiones más frecuentes, pruebas adicionales y valoración más
            estricta de patologías compatibles con el ejercicio profesional.
          </p>

          <h3>Otras modalidades</h3>
          <p>
            Apnea, buceo técnico o buceo adaptado tienen sus propios
            protocolos. Coméntanoslo al pedir cita para preparar el
            reconocimiento adecuado a tu caso.
          </p>

          <h2>Contraindicaciones habituales</h2>
          <p>
            Algunas condiciones que se valoran con especial atención (no siempre
            incompatibles con bucear, pero requieren informes o restricciones):
          </p>
          <ul>
            <li>Asma y otras patologías respiratorias crónicas.</li>
            <li>Cardiopatías, hipertensión mal controlada.</li>
            <li>Epilepsia y otras alteraciones neurológicas.</li>
            <li>Diabetes según control metabólico.</li>
            <li>Patologías del oído medio, otitis crónicas, perforaciones timpánicas.</li>
            <li>Cirugías recientes (oculares, torácicas, ORL).</li>
            <li>Embarazo (contraindicación absoluta para el buceo).</li>
          </ul>
          <p>
            En todos los casos, la valoración es <strong>individual</strong>. Si
            tienes dudas sobre tu caso, llámanos antes de pedir cita y
            comentamos qué informes conviene traer.
          </p>

          <h2>Vigencia del certificado</h2>
          <p>
            El certificado médico de buceo recreativo suele renovarse{" "}
            <strong>cada año o cada dos años</strong>, según la titulación, la
            edad y las federaciones. En el buceo profesional los plazos son más
            cortos. En el propio certificado consta la fecha de emisión y su
            vigencia.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
              Sobre el certificado de buceo
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock title="Pide cita para tu certificado de buceo" />
    </>
  );
}
