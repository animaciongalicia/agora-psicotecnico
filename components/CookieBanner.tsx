"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "agora-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage no disponible — no mostrar (o mostrar por defecto)
    }
  }, []);

  const decide = (choice: "accept" | "reject") => {
    try {
      localStorage.setItem(
        COOKIE_KEY,
        JSON.stringify({ choice, ts: Date.now() }),
      );
    } catch {
      /* noop */
    }
    setVisible(false);
    if (choice === "accept" && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("agora:consent-granted"));
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:bottom-4 md:inset-x-auto md:right-4 md:max-w-md pb-[env(safe-area-inset-bottom)]"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <div className="mx-3 mb-3 md:mx-0 md:mb-0 bg-surface border border-line rounded-xl shadow-lift p-5">
        <h2 className="font-display font-semibold text-lg text-ink mb-2">
          Usamos cookies
        </h2>
        <p className="text-ink-soft text-sm leading-relaxed mb-4">
          Usamos cookies propias y de terceros para medir el uso de la web y
          mejorar el servicio. Puedes aceptar o rechazar. Más información en{" "}
          <Link href="/cookies" className="underline text-brand-700 font-medium">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex flex-col-reverse sm:flex-row gap-2">
          <button
            type="button"
            className="btn-outline !py-2.5 !min-h-0 justify-center flex-1"
            onClick={() => decide("reject")}
          >
            Rechazar
          </button>
          <button
            type="button"
            className="btn-primary !py-2.5 !min-h-0 justify-center flex-1"
            onClick={() => decide("accept")}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
