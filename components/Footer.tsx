import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { PhoneIcon, MapPinIcon, ClockIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  const featured = services.filter((s) => s.featured);
  const others = services.filter((s) => !s.featured);

  return (
    <footer className="mt-16 bg-brand-900 text-brand-100">
      <div className="container py-12 md:py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-white font-display font-bold text-2xl mb-3">
            {site.name}
          </div>
          <p className="text-brand-200 leading-relaxed">
            Centro de reconocimientos médicos y psicotécnicos en A Coruña. Más
            de {site.experienceYears} años ayudando a conductores y profesionales.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-brand-200">
            <li className="flex gap-2">
              <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                {site.address.streetLong}
                <br />
                {site.address.postalCode} {site.address.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.phone.tel}`}
                className="flex gap-2 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <span className="font-semibold">{site.phone.display}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex gap-2 hover:text-white transition-colors break-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 flex-shrink-0"
                  aria-hidden
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span>{site.email}</span>
              </a>
            </li>
            <li className="flex gap-2">
              <ClockIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                {site.hours.display.map((h) => (
                  <div key={h.days}>
                    <span className="font-medium text-brand-100">{h.days}:</span>{" "}
                    {h.hours}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2">
            {featured.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-brand-200 hover:text-white transition-colors"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-brand-200 hover:text-white transition-colors"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/consejos" className="text-brand-200 hover:text-white">
                Consejos y guías
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-brand-200 hover:text-white">
                Contacto y cita
              </Link>
            </li>
            <li>
              <Link href="/aviso-legal" className="text-brand-200 hover:text-white">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="text-brand-200 hover:text-white">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-brand-200 hover:text-white">
                Política de cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-brand-300">
          <div>
            © {year} {site.legalName}. Todos los derechos reservados.
          </div>
          <div>A Coruña · Galicia · España</div>
        </div>
      </div>
    </footer>
  );
}
