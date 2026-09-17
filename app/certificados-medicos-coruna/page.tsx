import Link from "next/link";
import type { Metadata } from "next";

import { site } from "@/content/site";
import { getSecondaryServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

import {
  PhoneIcon,
  CalendarIcon,
  ShieldIcon,
  AnchorIcon,
  PawIcon,
  ConstructionIcon,
  ArrowRightIcon,
  StethoscopeIcon,
} from "@/components/icons";
import { CtaBlock } from "@/components/CtaBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/certificados-medicos-coruna";

export const metadata: Metadata = buildMetadata({
  title: "Certificados médicos y psicotécnicos en A Coruña",
  description:
    "Certificados médicos y psicotécnicos en A Coruña para licencia de armas, titulaciones náuticas, seguridad privada, animales potencialmente peligrosos y operadores de grúa.",
  path: PATH,
});

const icons: Record<string, React.ReactElement> = {
  "certificado-medico-licencia-armas-coruna": <ShieldIcon className="w-6 h-6" />,
  "certificado-medico-nautica-coruna": <AnchorIcon className="w-6 h-6" />,
  "certificado-medico-seguridad-privada-coruna": <ShieldIcon className="w-6 h-6" />,
  "certificado-medico-animales-potencialmente-peligrosos-coruna": <PawIcon className="w-6 h-6" />,
  "certificado-medico-operador-grua-coruna": <ConstructionIcon className="w-6 h-6" />,
};

const details: Record<string, string> = {
  "certificado-medico-licencia-armas-coruna":
    "Reconocimiento médico y psicotécnico exigido para obtener o renovar tu licencia de armas (tipos B, D, E y F, según cada caso).",
  "certificado-medico-nautica-coruna":
    "Certificado médico para las titulaciones náuticas: Licencia de Navegación, PER, PY, Capitán de Yate, etc.",
  "certificado-medico-seguridad-privada-coruna":
    "Reconocimiento médico y psicotécnico para vigilantes de seguridad, escoltas privados y detectives.",
  "certificado-medico-animales-potencialmente-peligrosos-coruna":
    "Certificado de capacidad psicológica y física para la tenencia de animales potencialmente peligrosos (razas ANPP).",
  "certificado-medico-operador-grua-coruna":
    "Reconocimiento médico y psicotécnico para operadores de grúa torre y grúa móvil autopropulsada.",
};

export default function CertificadosHubPage() {
  const secondary = getSecondaryServices();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Certificados médicos y psicotécnicos en A Coruña",
            description:
              "Certificados médicos y psicotécnicos para licencia de armas, náutica, seguridad privada, animales peligrosos y operadores de grúa.",
            href: PATH,
          }),
          breadcrumbSchema([
            { name: "Inicio", href: "/" },
            { name: "Certificados médicos", href: PATH },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Certificados médicos", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-10 md:pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="chip mb-4">A Coruña · Rúa Bolivia 1</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-5">
              Certificados médicos y psicotécnicos en A Coruña
            </h1>
            <p className="text-lg md:text-xl text-ink-soft mb-6">
              Emitimos los certificados médicos y psicotécnicos oficiales que
              necesitas para armas, náutica, seguridad, animales peligrosos y
              operadores de grúa. Rápido, cómodo y con tramitación cuando
              procede.
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
            <div className="w-64 h-64 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center">
              <StethoscopeIcon className="w-24 h-24" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface">
        <div className="container">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3">
            Certificados que emitimos
          </h2>
          <p className="text-lg text-ink-soft mb-10 max-w-2xl">
            Cada certificado tiene sus propios requisitos. Entra en la página
            del que te interese y verás qué necesitas, cuánto dura y cómo pedir
            cita.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {secondary.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="card-hover p-6 flex flex-col gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                    {icons[s.slug]}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-ink group-hover:text-brand-800">
                    {s.shortTitle}
                  </h3>
                </div>
                <p className="text-ink-soft leading-relaxed">
                  {details[s.slug] ?? s.summary}
                </p>
                <span className="mt-auto pt-2 inline-flex items-center gap-1 text-brand-700 font-semibold group-hover:text-brand-800">
                  Ver información
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-surface-soft">
        <div className="container-tight prose-agora">
          <h2>¿Por qué venir a Ágora?</h2>
          <p>
            En Ágora llevamos más de {site.experienceYears} años emitiendo
            certificados médicos oficiales en A Coruña. Nada de trámites raros,
            ni papeleos que se pierden por el camino.
          </p>
          <ul>
            <li>Cita rápida y trato cercano.</li>
            <li>Reconocimiento médico y psicotécnico en la misma visita.</li>
            <li>Fotografía incluida cuando el certificado la requiere.</li>
            <li>Ubicación céntrica, con parking gratuito cercano.</li>
          </ul>
          <p>
            Llámanos al{" "}
            <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> si tienes
            dudas o quieres saber qué documentación llevar para tu caso concreto.
          </p>
        </div>
      </section>

      <CtaBlock title="¿Necesitas un certificado médico?" />
    </>
  );
}
