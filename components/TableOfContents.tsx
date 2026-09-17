"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; text: string; level: 2 | 3 };

/**
 * Índice pegajoso ("En esta página"). Se rellena en cliente a partir de los
 * <h2>/<h3> del artículo. Marca el actual con IntersectionObserver.
 */
export function TableOfContents({ containerId }: { containerId: string }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = document.getElementById(containerId);
    if (!root) return;

    const headings = Array.from(root.querySelectorAll<HTMLHeadingElement>("h2, h3"));
    const list: TocItem[] = [];
    headings.forEach((h, i) => {
      if (!h.id) {
        h.id =
          h.textContent
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-") || `s-${i}`;
      }
      list.push({
        id: h.id,
        text: h.textContent?.trim() || "",
        level: h.tagName === "H2" ? 2 : 3,
      });
    });
    setItems(list);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -60% 0px" },
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [containerId]);

  if (items.length < 3) return null;

  return (
    <aside className="hidden lg:block" aria-label="En esta página">
      <div className="sticky top-24">
        <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
          En esta página
        </div>
        <ul className="space-y-1 border-l border-line">
          {items.map((it) => (
            <li key={it.id} className={it.level === 3 ? "pl-3" : ""}>
              <a
                href={`#${it.id}`}
                className={`block pl-4 -ml-px py-1.5 text-sm leading-snug border-l-2 transition-colors ${
                  activeId === it.id
                    ? "border-accent-500 text-brand-800 font-semibold"
                    : "border-transparent text-ink-muted hover:text-brand-700"
                }`}
              >
                {it.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
