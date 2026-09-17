"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { PhoneIcon, MenuIcon, XIcon, CalendarIcon } from "./icons";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/renovar-carnet-conducir-coruna", label: "Carnet de conducir" },
  { href: "/certificados-medicos-coruna", label: "Certificados médicos" },
  { href: "/consejos", label: "Consejos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-surface/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-soft border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-4 h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-bold text-xl md:text-2xl text-brand-800"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <span>{site.shortName}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-md text-ink-soft hover:text-brand-800 hover:bg-brand-50 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${site.phone.tel}`}
            className="btn-ghost !px-3 !py-2 !min-h-0 gap-2"
            aria-label={`Llamar al ${site.phone.display}`}
          >
            <PhoneIcon className="w-5 h-5" />
            <span className="font-semibold text-brand-800">{site.phone.display}</span>
          </a>
          <Link href="/contacto" className="btn-primary !py-2.5 !min-h-0 gap-2">
            <CalendarIcon className="w-5 h-5" />
            Pedir cita
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-brand-800"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </div>

      {/* Panel móvil */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 z-30 bg-surface border-t border-line overflow-y-auto">
          <nav className="container py-6 flex flex-col gap-1" aria-label="Menú móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-4 rounded-lg text-lg font-medium text-ink hover:bg-brand-50 hover:text-brand-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${site.phone.tel}`}
                className="btn-outline btn-lg justify-center"
                onClick={() => setOpen(false)}
              >
                <PhoneIcon className="w-5 h-5" />
                Llamar al {site.phone.display}
              </a>
              <Link
                href="/contacto"
                className="btn-primary btn-lg justify-center"
                onClick={() => setOpen(false)}
              >
                <CalendarIcon className="w-5 h-5" />
                Pedir cita
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-700 text-white font-display font-bold"
    >
      A
    </span>
  );
}
