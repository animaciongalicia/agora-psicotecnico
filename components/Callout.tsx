import type { ReactNode } from "react";

/**
 * Bloque destacado dentro del contenido (aviso, consejo, importante).
 * Uso en MDX:
 *   <Callout type="tip">Texto...</Callout>
 */
type Tone = "tip" | "info" | "warn" | "success";

const styles: Record<
  Tone,
  { bg: string; border: string; text: string; icon: string; label: string; svg: ReactNode }
> = {
  tip: {
    bg: "bg-brand-50",
    border: "border-brand-200",
    text: "text-brand-900",
    icon: "text-brand-600",
    label: "Consejo",
    svg: (
      <>
        <path d="M12 2a7 7 0 0 0-4 12.7V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 2z" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </>
    ),
  },
  info: {
    bg: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-800",
    icon: "text-slate-500",
    label: "Nota",
    svg: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </>
    ),
  },
  warn: {
    bg: "bg-accent-500/10",
    border: "border-accent-500/30",
    text: "text-accent-700",
    icon: "text-accent-600",
    label: "Importante",
    svg: (
      <>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
  },
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-900",
    icon: "text-emerald-600",
    label: "Bien",
    svg: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
};

export function Callout({
  type = "tip",
  title,
  children,
}: {
  type?: Tone;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`my-6 rounded-xl border ${s.border} ${s.bg} p-5 flex gap-4`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-6 h-6 flex-shrink-0 mt-0.5 ${s.icon}`}
        aria-hidden
      >
        {s.svg}
      </svg>
      <div className={`flex-1 ${s.text}`}>
        <div className="font-display font-semibold text-lg mb-1">
          {title ?? s.label}
        </div>
        <div className="[&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:my-2 [&>ol]:my-2 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
