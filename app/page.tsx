import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { services, getFeaturedServices, getSecondaryServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

import { PhoneIcon, CalendarIcon, CheckIcon, MapPinIcon, ClockIcon, ShieldIcon, ArrowRightIcon, CarIcon, StethoscopeIcon, HeartIcon, TargetIcon, AnchorIcon, PawIcon, ConstructionIcon, DivingIcon } from "@/components/icons";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { CtaBlock } from "@/components/CtaBlock";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Psicotécnico en A Coruña · Renovar el carnet de conducir",
  description:
    "Renueva tu carnet de conducir en A Coruña sin complicaciones. Reconocimiento médico, fotografía y tramitación en el mismo centro. Cita al 881 915 396.",
  path: "/",
});

const homeFaqs: FaqItem[] = [
  {
    question: "¿Qué necesito para renovar el carnet de conducir?",
    answer:
      "Únicamente tu DNI o documento de identidad vigente y el carnet de conducir actual (si lo conservas). Nosotros nos encargamos del reconocimiento médico, del psicotécnico y de la fotografía. La tramitación con la DGT la gestionamos también desde el centro.",
  },
  {
    question: "¿Cuánto dura el reconocimiento?",
    answer:
      "El reconocimiento médico y psicotécnico suele completarse en unos 30-40 minutos, siempre que vengas con cita previa. Salir ese mismo día con todo tramitado es lo habitual.",
  },
  {
    question: "¿Necesito llevar fotografía?",
    answer:
      "No hace falta. La fotografía está incluida y la hacemos aquí mismo, con las medidas y el formato que exige la DGT.",
  },
  {
    question: "¿Tengo que ir después a Tráfico?",
    answer:
      "En la mayoría de los casos, no. Desde el centro tramitamos electrónicamente tu renovación con la DGT y recibirás el carnet provisional al momento. El definitivo te llega por correo.",
  },
  {
    question: "¿Con cuánto tiempo puedo renovar el carnet?",
    answer:
      "Puedes renovar tu carnet hasta 3 meses antes de la fecha de caducidad. La nueva vigencia empieza a contar desde la fecha de caducidad anterior, así que no pierdes tiempo por adelantarte.",
  },
  {
    question: "¿Puedo renovar aunque esté caducado?",
    answer:
      "Sí. Puedes renovarlo aunque haya caducado, pero mientras esté caducado no puedes conducir legalmente. Cuanto antes lo renueves, mejor.",
  },
];

const advantages = [
  { icon: <ShieldIcon className="w-5 h-5" />, label: "Más de 13 años de experiencia" },
  { icon: <CheckIcon className="w-5 h-5" />, label: "Centro autorizado" },
  { icon: <StethoscopeIcon className="w-5 h-5" />, label: "Reconocimiento médico" },
  { icon: <CheckIcon className="w-5 h-5" />, label: "Fotografía incluida" },
  { icon: <CheckIcon className="w-5 h-5" />, label: "Tramitación con la DGT" },
  { icon: <CarIcon className="w-5 h-5" />, label: "Parking gratuito cercano" },
  { icon: <MapPinIcon className="w-5 h-5" />, label: "Ubicación céntrica" },
];

const serviceIcons: Record<string, React.ReactElement> = {
  "renovar-carnet-conducir-coruna": <CarIcon className="w-6 h-6" />,
  "obtencion-carnet-conducir-coruna": <TargetIcon className="w-6 h-6" />,
  "certificados-medicos-coruna": <StethoscopeIcon className="w-6 h-6" />,
  "certificado-medico-licencia-armas-coruna": <ShieldIcon className="w-6 h-6" />,
  "certificado-medico-nautica-coruna": <AnchorIcon className="w-6 h-6" />,
  "certificado-medico-seguridad-privada-coruna": <ShieldIcon className="w-6 h-6" />,
  "certificado-medico-animales-potencialmente-peligrosos-coruna": <PawIcon className="w-6 h-6" />,
  "certificado-medico-operador-grua-coruna": <ConstructionIcon className="w-6 h-6" />,
  "certificado-medico-buceo-coruna": <DivingIcon className="w-6 h-6" />,
};

export default function HomePage() {
  const featured = getFeaturedServices();
  const secondary = getSecondaryServices();

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* HERO ---------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-surface to-surface">
        <div className="container py-12 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="chip mb-5">Centro autorizado · {site.address.city}</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-ink mb-5">
              Renueva tu carnet de conducir en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-7 max-w-xl">
              Reconocimiento médico, fotografía y tramitación de tu permiso de
              conducir en un único centro. Sencillo, rápido y sin salir de casa
              a buscar papeles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contacto"
                className="btn-primary btn-lg justify-center"
                data-analytics="click-cita-hero"
              >
                <CalendarIcon className="w-5 h-5" />
                Pedir cita
              </Link>
              <a
                href={`tel:${site.phone.tel}`}
                className="btn-outline btn-lg justify-center"
                data-analytics="click-tel-hero"
              >
                <PhoneIcon className="w-5 h-5" />
                {site.phone.display}
              </a>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-ink-soft">
              {advantages.map((a) => (
                <li key={a.label} className="flex items-center gap-2">
                  <span className="text-brand-700">{a.icon}</span>
                  <span>{a.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <PagePlaceholder label="Fachada del centro / interior" aspect="4/3" />
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 hidden sm:block">
              <div className="bg-surface rounded-xl shadow-lift border border-line p-4 max-w-[240px]">
                <div className="flex items-center gap-2 text-brand-700 mb-1">
                  <ClockIcon className="w-5 h-5" />
                  <span className="font-semibold text-sm uppercase tracking-wide">
                    En 30-40 minutos
                  </span>
                </div>
                <p className="text-sm text-ink-soft">
                  Reconocimiento, foto y tramitación en la misma visita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDA DE CREDIBILIDAD ----------------------------- */}
      <section className="bg-brand-900 text-brand-50 border-y border-brand-800">
        <div className="container py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { n: "13+", label: "Años de experiencia" },
            { n: "30-40", label: "Minutos por visita" },
            { n: "0", label: "Viajes a Tráfico" },
            { n: "Centro", label: "Autorizado A Coruña" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-3xl md:text-4xl text-white">
                {s.n}
              </div>
              <div className="text-sm md:text-base text-brand-200 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 PASOS ------------------------------------------- */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3">
              Renovar tu carnet puede ser sencillo
            </h2>
            <p className="text-lg text-ink-soft">
              Sin colas, sin papeleos infinitos, sin idas y venidas a Tráfico.
              Así funciona en Ágora.
            </p>
          </div>
          <ol className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                title: "Pides cita",
                text: "Llámanos al 881 915 396 o pide cita desde la web. Elegimos hora contigo.",
              },
              {
                n: "2",
                title: "Realizamos el reconocimiento",
                text: "Reconocimiento médico, psicotécnico y fotografía en tu visita. Unos 30-40 minutos.",
              },
              {
                n: "3",
                title: "Gestionamos la documentación",
                text: "Tramitamos electrónicamente con la DGT. Sales con carnet provisional el mismo día.",
              },
            ].map((step) => (
              <li key={step.n} className="card p-6 relative">
                <span
                  aria-hidden
                  className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-brand-700 text-white font-display font-bold flex items-center justify-center text-lg shadow-soft"
                >
                  {step.n}
                </span>
                <h3 className="mt-3 font-display font-semibold text-xl text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link href="/contacto" className="btn-primary btn-lg">
              <CalendarIcon className="w-5 h-5" />
              Pedir cita ahora
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS ----------------------------------------- */}
      <section className="py-16 md:py-20 bg-surface-soft">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3">
              Nuestros servicios
            </h2>
            <p className="text-lg text-ink-soft">
              Todo lo que puedas necesitar para conducir, navegar, trabajar o
              cumplir con la normativa, en un solo sitio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {featured.map((s) => (
              <ServiceCard
                key={s.slug}
                href={s.href}
                title={s.shortTitle}
                description={s.summary}
                icon={serviceIcons[s.slug]}
                highlight={s.slug === "renovar-carnet-conducir-coruna"}
              />
            ))}
          </div>

          <h3 className="font-display font-semibold text-xl text-ink mb-4 mt-2">
            Otros certificados médicos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {secondary.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="card-hover p-4 flex items-start gap-3 group"
              >
                <span className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                  {serviceIcons[s.slug]}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-ink group-hover:text-brand-800 leading-tight">
                    {s.shortTitle}
                  </div>
                  <div className="text-brand-700 text-sm font-medium mt-1 inline-flex items-center gap-1">
                    Ver
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANZA ----------------------------------------- */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="chip mb-4">Un centro de confianza en A Coruña</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
              Trece años a tu lado en A Coruña
            </h2>
            <p className="text-lg text-ink-soft mb-4">
              En Ágora llevamos más de {site.experienceYears} años haciendo
              reconocimientos médicos y psicotécnicos. Miles de conductores,
              cazadores, náuticos y profesionales de A Coruña han pasado ya
              por nuestras consultas.
            </p>
            <p className="text-lg text-ink-soft mb-6">
              Nada de trámites raros ni papeles perdidos. Trato cercano,
              atención rápida y todo resuelto en una sola visita.
            </p>
            <ul className="space-y-2 text-ink-soft">
              {[
                "Trato humano y directo, sin colas eternas",
                "Ubicación céntrica en A Coruña, junto a la Avenida de Arteixo",
                "Reconocimiento, fotografía y tramitación en 30-40 minutos",
                "Sin necesidad de acudir a Tráfico en la mayoría de los casos",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <PagePlaceholder label="Recepción del centro" aspect="16/9" />
            {/* REVISAR CON CLIENTE — integrar reseñas reales de Google aquí */}
            <div className="card p-6 bg-brand-50/50 border-brand-200">
              <div className="flex items-center gap-2 mb-2">
                <HeartIcon className="w-5 h-5 text-accent-600" />
                <span className="font-semibold text-brand-900">Reseñas de nuestros clientes</span>
              </div>
              <p className="text-ink-soft text-sm mb-3">
                Espacio reservado para las reseñas reales de Google.
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-brand-700/70">
                Integrar reseñas — pendiente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ------------------------------------------------ */}
      <section className="py-16 md:py-20 bg-surface-soft">
        <div className="container-tight">
          <div className="mb-10 text-center">
            <p className="chip mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3">
              Todo lo que quieres saber, en claro
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto">
              Las dudas más habituales sobre la renovación del carnet. Si te
              queda alguna, llámanos y te la resolvemos en un momento.
            </p>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </section>

      {/* CTA FINAL ----------------------------------------- */}
      <CtaBlock
        title="¿Necesitas renovar tu carnet?"
        description="Pide cita en un minuto y sales del centro con todo tramitado. Sin sorpresas."
      />
    </>
  );
}
