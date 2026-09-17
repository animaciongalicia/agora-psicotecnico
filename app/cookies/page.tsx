import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const PATH = "/cookies";

export const metadata: Metadata = buildMetadata({
  title: "Política de cookies",
  description: `Política de cookies del sitio ${site.url}.`,
  path: PATH,
});

export default function CookiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Política de cookies", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-6 md:pb-10">
          <p className="chip mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink">
            Política de cookies
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-surface">
        <div className="container-tight prose-agora">
          <div className="p-4 rounded-lg bg-accent-500/10 border border-accent-500/30 text-accent-700 mb-8 text-sm font-medium">
            ⚠️ REVISAR CON CLIENTE — Confirmar qué cookies analíticas/marketing
            se activarán realmente (Google Analytics, Vercel Analytics, píxeles,
            etc.). Este texto es una base editable, no legal en firme.
          </div>

          <h2>Qué es una cookie</h2>
          <p>
            Una cookie es un pequeño archivo que se descarga en tu dispositivo
            al visitar una web y que permite, entre otras cosas, almacenar y
            recuperar información sobre tu navegación.
          </p>

          <h2>Cookies que usamos</h2>
          <ul>
            <li>
              <strong>Técnicas (siempre activas):</strong> necesarias para el
              funcionamiento básico del sitio y para recordar tu decisión sobre
              el uso de cookies.
            </li>
            <li>
              <strong>Analíticas (Google Analytics 4):</strong> nos ayudan a
              entender cómo se usa la web y mejorar el servicio. Solo se cargan
              tras tu consentimiento.
            </li>
          </ul>

          <p>
            No usamos cookies publicitarias ni de perfilado con terceros salvo
            que se indique expresamente y con tu consentimiento.
          </p>

          <h2>Cómo gestionar tu consentimiento</h2>
          <p>
            Al entrar por primera vez, verás el aviso de cookies con dos
            opciones: aceptar o rechazar. Puedes cambiar de opinión en cualquier
            momento borrando las cookies del sitio en tu navegador y recargando
            la página, o gestionándolas desde la configuración de tu navegador.
          </p>

          <h2>Cómo desactivar cookies en tu navegador</h2>
          <p>
            La mayoría de navegadores permiten controlar el uso de cookies desde
            sus ajustes. Puedes revisar la ayuda de tu navegador para saber cómo
            hacerlo: Chrome, Firefox, Safari, Edge, etc.
          </p>
        </div>
      </section>
    </>
  );
}
