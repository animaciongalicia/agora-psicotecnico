"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { services } from "@/content/services";

/**
 * Formulario de solicitud de cita.
 *
 * ESTADO ACTUAL: fallback por mailto:. Al enviar, abre el cliente de correo del
 * usuario con un email prerellenado a animaciongalicia@gmail.com (o el que se
 * configure en NEXT_PUBLIC_CONTACT_EMAIL). No se envía nada desde el servidor.
 *
 * INTEGRAR (Paso 4 o cuando el cliente lo confirme):
 *   - Endpoint /api/contact que reenvíe por SMTP (Resend, SendGrid...) o
 *   - Formspree/Basin/Getform/Web3Forms para no montar backend, o
 *   - WhatsApp Business / Calendly / Google Calendar según decida el cliente.
 */

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "animaciongalicia@gmail.com";

const bands = ["Mañana", "Mediodía", "Tarde", "Indiferente"] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const service = String(data.get("service") ?? "");
    const day = String(data.get("day") ?? "");
    const band = String(data.get("band") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Solicitud de cita — ${service || "Ágora"}`;
    const body = [
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Servicio: ${service}`,
      `Día preferido: ${day}`,
      `Franja horaria: ${band}`,
      "",
      "Mensaje:",
      message || "(sin mensaje)",
      "",
      "— Enviado desde agorapsicotecnico.com",
    ].join("\n");

    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card p-6 md:p-8 bg-brand-50/50 border-brand-200">
        <h3 className="font-display font-semibold text-xl text-ink mb-2">
          Gracias, tu solicitud está en camino.
        </h3>
        <p className="text-ink-soft">
          Se ha abierto tu cliente de correo con la petición prerellenada.
          Envíala y te contactaremos para confirmar disponibilidad. Si prefieres,
          también puedes llamarnos directamente al{" "}
          <a
            href={`tel:${site.phone.tel}`}
            className="font-semibold text-brand-800 hover:text-brand-900 underline"
          >
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="card p-6 md:p-8 space-y-5"
      onSubmit={onSubmit}
      aria-label="Formulario de solicitud de cita"
    >
      <div>
        <label htmlFor="name" className="block font-semibold text-ink mb-1.5">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-line px-4 py-3 text-ink bg-surface focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-semibold text-ink mb-1.5">
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          className="w-full rounded-lg border border-line px-4 py-3 text-ink bg-surface focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        />
      </div>

      <div>
        <label htmlFor="service" className="block font-semibold text-ink mb-1.5">
          Servicio
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-line px-4 py-3 text-ink bg-surface focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        >
          <option value="" disabled>
            Selecciona el servicio…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.shortTitle}>
              {s.shortTitle}
            </option>
          ))}
          <option value="Otro / Consulta">Otro / consulta</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="day" className="block font-semibold text-ink mb-1.5">
            Día preferido
          </label>
          <input
            id="day"
            name="day"
            type="date"
            className="w-full rounded-lg border border-line px-4 py-3 text-ink bg-surface focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
        </div>
        <div>
          <label htmlFor="band" className="block font-semibold text-ink mb-1.5">
            Franja horaria
          </label>
          <select
            id="band"
            name="band"
            defaultValue="Indiferente"
            className="w-full rounded-lg border border-line px-4 py-3 text-ink bg-surface focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
          >
            {bands.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold text-ink mb-1.5">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-line px-4 py-3 text-ink bg-surface focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
          placeholder="Cuéntanos algo si lo consideras útil (permiso, patologías, disponibilidad…)"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 accent-brand-700"
        />
        <label htmlFor="privacy" className="text-sm text-ink-soft leading-relaxed">
          He leído y acepto la{" "}
          <a
            href="/privacidad"
            className="underline text-brand-700 hover:text-brand-800 font-medium"
          >
            política de privacidad
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary w-full justify-center"
        data-analytics="submit-form"
      >
        Solicitar cita
      </button>

      <p className="text-sm text-ink-muted">
        Te contactaremos para confirmar disponibilidad. Si prefieres, también
        puedes llamarnos directamente al{" "}
        <a href={`tel:${site.phone.tel}`} className="font-semibold text-brand-800">
          {site.phone.display}
        </a>
        .
      </p>
    </form>
  );
}
