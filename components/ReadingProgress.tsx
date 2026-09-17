"use client";

import { useEffect, useState } from "react";

/**
 * Barra fina de progreso de lectura, fija en la parte superior.
 * Se muestra solo en pantallas medianas+ para no distraer en móvil.
 */
export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = window.scrollY || h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setPct(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-40 pointer-events-none"
      aria-hidden
    >
      <div
        className="h-full bg-accent-500 transition-[width] duration-100 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
