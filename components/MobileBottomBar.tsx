"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { PhoneIcon, CalendarIcon } from "./icons";

/**
 * Barra fija inferior visible SOLO en móvil.
 * Refuerza conversión: llamar / pedir cita en cualquier scroll.
 */
export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-surface/95 backdrop-blur border-t border-line shadow-lift"
      role="region"
      aria-label="Acciones rápidas"
    >
      <div className="grid grid-cols-2 gap-2 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a
          href={`tel:${site.phone.tel}`}
          className="btn-outline !py-3 !min-h-0 justify-center gap-2 !text-base"
          data-analytics="click-tel-mobile"
        >
          <PhoneIcon className="w-5 h-5" />
          Llamar
        </a>
        <Link
          href="/contacto"
          className="btn-primary !py-3 !min-h-0 justify-center gap-2 !text-base"
          data-analytics="click-cita-mobile"
        >
          <CalendarIcon className="w-5 h-5" />
          Pedir cita
        </Link>
      </div>
    </div>
  );
}
