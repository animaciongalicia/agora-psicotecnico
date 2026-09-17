import type { Metadata } from "next";

import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

import { PhoneIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/contacto";

export const metadata: Metadata = buildMetadata({
  title: "Contacto y solicitud de cita en A Coruña",
  description:
    "Pide cita en Psicotécnico Ágora. Rúa Bolivia 1, A Coruña. Teléfono 881 915 396. Reconocimientos médicos y psicotécnicos con cita previa.",
  path: PATH,
});

const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(
    `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
  ) +
  "&output=embed";

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", href: "/" },
          { name: "Contacto", href: PATH },
        ])}
      />

      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Contacto", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-8 md:pb-12">
          <p className="chip mb-4">Contacto y cita</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mb-4">
            Pide cita en Psicotécnico Ágora
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-2xl">
            Llámanos y te atendemos en el momento, o rellena el formulario y
            te contactaremos para confirmar disponibilidad. Sin sorpresas.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20 bg-surface">
        <div className="container grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="card p-6">
              <h2 className="font-display font-semibold text-xl text-ink mb-4">
                Contacto directo
              </h2>
              <ul className="space-y-4 text-ink-soft">
                <li className="flex gap-3">
                  <PhoneIcon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-ink-muted">Teléfono</div>
                    <a
                      href={`tel:${site.phone.tel}`}
                      className="text-lg font-semibold text-brand-800 hover:text-brand-900"
                    >
                      {site.phone.display}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPinIcon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-ink-muted">Dirección</div>
                    <div>
                      {site.address.streetLong}
                      <br />
                      {site.address.postalCode} {site.address.city}
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${site.name} ${site.address.street} ${site.address.city}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-brand-700 hover:text-brand-800 font-medium underline"
                    >
                      Cómo llegar
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5"
                    aria-hidden
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  <div>
                    <div className="text-sm text-ink-muted">Correo</div>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-brand-800 hover:text-brand-900 font-medium break-all"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-ink-muted">Horario</div>
                    <div className="space-y-0.5">
                      {site.hours.display.map((h) => (
                        <div key={h.days}>
                          <span className="font-medium">{h.days}:</span> {h.hours}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Psicotécnico Ágora en A Coruña"
                  aria-label="Mapa con la ubicación del centro"
                  className="border-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
