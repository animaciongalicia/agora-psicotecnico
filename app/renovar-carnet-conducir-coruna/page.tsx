import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, CheckIcon, MapPinIcon, ClockIcon, CarIcon, StethoscopeIcon } from "@/components/icons";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/renovar-carnet-conducir-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Renovar el carnet de conducir en A Coruña · Psicotécnico Ágora",
  description:
    "Renovación del permiso de conducir en A Coruña: reconocimiento médico y psicotécnico, fotografía y tramitación con la DGT en una sola visita. Rúa Bolivia 1, A Coruña. Cita al 881 915 396.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "¿Qué documentación necesito llevar para renovar el carnet?",
    answer:
      "Solo tu DNI o NIE en vigor y el carnet de conducir actual, si lo conservas. El resto lo ponemos nosotros: reconocimiento médico, psicotécnico, fotografía y tramitación con la DGT.",
  },
  {
    question: "¿Cuánto dura el reconocimiento?",
    answer:
      "Entre 30 y 40 minutos si vienes con cita previa. Incluye exploración médica, pruebas psicotécnicas (visión, coordinación, reacciones) y fotografía.",
  },
  {
    question: "¿Cuándo puedo empezar a renovar mi permiso?",
    answer:
      "Puedes renovar hasta 3 meses antes de la fecha de caducidad. La vigencia del nuevo carnet empieza a contar desde el vencimiento del anterior, así que no pierdes días por adelantarte.",
  },
  {
    question: "¿Y si mi carnet ya está caducado?",
    answer:
      "Puedes renovarlo, pero mientras esté caducado no puedes conducir legalmente en España. Cuanto antes vengas, antes recuperas la validez del permiso.",
  },
  {
    question: "¿Necesito llevar fotografía?",
    answer:
      "No. La fotografía está incluida en el reconocimiento y se hace aquí mismo con las medidas oficiales que exige la DGT.",
  },
  {
    question: "¿Tengo que ir a Tráfico después?",
    answer:
      "En la gran mayoría de los casos, no. Desde el centro tramitamos electrónicamente la renovación con la DGT y sales con un permiso provisional. El carnet definitivo llega por correo al domicilio en unas semanas.",
  },
  {
    question: "¿Cuánto vale la renovación del carnet?",
    answer:
      "El precio depende del tipo de permiso (B, C, D, etc.) y de si tu caso requiere pruebas adicionales. Llámanos al 881 915 396 y te damos el precio exacto en un minuto — sin compromiso.",
  },
  {
    question: "¿Puedo renovar el B, C y D en la misma visita?",
    answer:
      "Sí. Si tienes varios permisos y todos requieren renovación, se pueden gestionar en la misma visita. Coméntanoslo al pedir la cita para reservarte el tiempo necesario.",
  },
  {
    question: "¿Qué pasa si tengo alguna enfermedad o tratamiento médico?",
    answer:
      "Es importante que nos lo comentes. Existen tratamientos, medicaciones y patologías que exigen informes adicionales o revisiones más frecuentes. Nuestro objetivo es que renueves con total tranquilidad y dentro de la normativa vigente.",
  },
  {
    question: "¿Se puede aparcar cerca del centro?",
    answer:
      "Sí. Estamos en Rúa Bolivia 1, esquina con la Avenida de Arteixo, con parking gratuito en las calles cercanas y varios parkings públicos a pocos minutos andando.",
  },
];

export default function RenovarCarnetPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Renovación del carnet de conducir en A Coruña",
            description:
              "Reconocimiento médico, psicotécnico, fotografía y tramitación de la renovación del permiso de conducir en A Coruña.",
            href: PATH,
            serviceType: "Renovación del permiso de conducir",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Renovar el carnet de conducir en A Coruña", href: PATH },
          ]),
        ]}
      />

      {/* HERO ---------------------------------------------- */}
      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Renovar carnet de conducir", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-12 md:pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink mb-5">
              Renovar el carnet de conducir en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Reconocimiento médico y psicotécnico, fotografía y tramitación
              con la DGT en la misma visita. Sales con carnet provisional el
              mismo día y sin pasar por Tráfico.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="btn-primary btn-lg justify-center">
                <CalendarIcon className="w-5 h-5" />
                Pedir cita
              </Link>
              <a
                href={`tel:${site.phone.tel}`}
                className="btn-outline btn-lg justify-center"
              >
                <PhoneIcon className="w-5 h-5" />
                {site.phone.display}
              </a>
            </div>
          </div>
          <div>
            <PagePlaceholder label="Consulta / zona de reconocimiento" aspect="4/3" />
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE --------------------------------------- */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
            Qué incluye la renovación en Ágora
          </h2>
          <p className="text-lg text-ink-soft mb-8">
            Todo lo necesario para renovar tu permiso de conducir en una sola
            visita, sin idas y venidas.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Reconocimiento médico",
                text: "Exploración general, agudeza visual, oído y valoración de patologías o tratamientos relevantes para la conducción.",
                icon: <StethoscopeIcon className="w-6 h-6" />,
              },
              {
                title: "Pruebas psicotécnicas",
                text: "Coordinación, tiempos de reacción y capacidad de atención — todo con equipamiento homologado.",
                icon: <CarIcon className="w-6 h-6" />,
              },
              {
                title: "Fotografía oficial",
                text: "Foto tamaño carnet incluida, con las medidas y el formato que exige la DGT.",
                icon: <CheckIcon className="w-6 h-6" />,
              },
              {
                title: "Tramitación con la DGT",
                text: "Enviamos la documentación electrónicamente. Sales con carnet provisional y el definitivo te llega por correo.",
                icon: <CheckIcon className="w-6 h-6" />,
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

      {/* CÓMO RENOVAR EN ÁGORA (pasos) ---------------------- */}
      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
            Cómo renovar tu carnet en Ágora
          </h2>
          <p className="text-lg text-ink-soft mb-10">
            Cuatro pasos, una visita, un mismo día.
          </p>

          <ol className="space-y-5">
            {[
              {
                n: 1,
                title: "Pide cita",
                text: "Llama al 881 915 396 o pide cita desde la web. Elegimos el momento que te venga bien.",
              },
              {
                n: 2,
                title: "Ven al centro con tu DNI",
                text: "Trae también el carnet de conducir actual si lo conservas. Estamos en Rúa Bolivia 1, esquina Avenida de Arteixo.",
              },
              {
                n: 3,
                title: "Reconocimiento y fotografía",
                text: "Realizamos el reconocimiento médico, las pruebas psicotécnicas y la fotografía. Unos 30-40 minutos.",
              },
              {
                n: 4,
                title: "Tramitación al momento",
                text: "Tramitamos la renovación con la DGT desde el centro. Sales con permiso provisional válido para conducir.",
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

          <div className="mt-10">
            <Link href="/contacto" className="btn-primary btn-lg">
              <CalendarIcon className="w-5 h-5" />
              Pedir mi cita
            </Link>
          </div>
        </div>
      </section>

      {/* CUÁNDO PUEDO RENOVAR ------------------------------ */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight prose-agora">
          <h2>¿Cuándo puedo renovar mi permiso de conducir?</h2>
          <p>
            La normativa española permite renovar el carnet de conducir{" "}
            <strong>hasta 3 meses antes</strong> de que caduque. Adelantarse no
            supone perder días de vigencia: el nuevo permiso empezará a contar
            desde la fecha de caducidad del anterior.
          </p>
          <p>
            La duración de la renovación depende del tipo de permiso y de la
            edad del conductor. Con carácter general:
          </p>
          <ul>
            <li>
              <strong>Permiso B (turismos):</strong> normalmente 10 años hasta
              los 65 años, y 5 años a partir de esa edad.
            </li>
            <li>
              <strong>Permisos C, D, E (camión, autobús, remolque):</strong>{" "}
              habitualmente 5 años, y 3 años a partir de los 65.
            </li>
          </ul>
          <p>
            En cualquier caso, el médico puede fijar una vigencia menor si tu
            estado de salud lo aconseja. Si tienes dudas sobre tu caso concreto,
            llámanos y lo revisamos contigo.
          </p>

          <h3>¿Y si mi carnet ya ha caducado?</h3>
          <p>
            Puedes renovarlo aunque haya caducado. Pero mientras esté caducado,{" "}
            <strong>no puedes conducir legalmente en España</strong>, ni siquiera
            si acabas de sacarlo del cajón. Cuanto antes vengas al centro,
            antes recuperas la validez del permiso.
          </p>

          <h3>¿Y si estoy de viaje o vivo fuera parte del año?</h3>
          <p>
            Podemos gestionarlo igualmente. Coméntanoslo al pedir cita para
            ajustar el momento y darte la mejor opción según tu situación.
          </p>
        </div>
      </section>

      {/* UBICACIÓN Y PARKING ------------------------------- */}
      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
              Cómo llegar
            </h2>
            <p className="text-lg text-ink-soft mb-6">
              Estamos en pleno centro de A Coruña, en la esquina de la Rúa
              Bolivia con la Avenida de Arteixo. Fácil de encontrar, con parking
              gratuito en las calles cercanas.
            </p>
            <ul className="space-y-3 text-ink-soft mb-6">
              <li className="flex gap-3">
                <MapPinIcon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${site.phone.tel}`}
                  className="font-semibold text-brand-800 hover:text-brand-900"
                >
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Horario: <em className="text-brand-700">REVISAR CON CLIENTE</em>
                </span>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Psicot%C3%A9cnico+%C3%81gora+R%C3%BAa+Bolivia+1+A+Coru%C3%B1a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              data-analytics="click-maps"
            >
              <MapPinIcon className="w-5 h-5" />
              Cómo llegar (Google Maps)
            </a>
          </div>

          <PagePlaceholder label="Mapa / vista de la ubicación" aspect="4/3" />
        </div>
      </section>

      {/* FAQ ------------------------------------------------ */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="container-tight">
          <div className="mb-8">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-2">
              Todo sobre la renovación del carnet
            </h2>
            <p className="text-lg text-ink-soft">
              Si tu duda no está aquí, llámanos al {site.phone.display}. Te
              atendemos en el momento.
            </p>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBlock
        title="Pide tu cita para renovar el carnet"
        description="Sales con permiso provisional el mismo día. Sin pasar por Tráfico."
      />
    </>
  );
}
