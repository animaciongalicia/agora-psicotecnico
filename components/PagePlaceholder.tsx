/**
 * Placeholder visual elegante para imágenes que faltan por sustituir.
 * Uso: <PagePlaceholder label="Fachada del centro" aspect="16/9" />
 */
type Props = {
  label: string;
  aspect?: "16/9" | "4/3" | "1/1" | "3/2";
  tone?: "light" | "brand";
};

export function PagePlaceholder({ label, aspect = "16/9", tone = "brand" }: Props) {
  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  }[aspect];

  const toneClass =
    tone === "brand"
      ? "bg-gradient-to-br from-brand-100 via-brand-50 to-surface text-brand-700 border-brand-200"
      : "bg-surface-muted text-ink-muted border-line";

  return (
    <div
      className={`relative w-full ${aspectClass} rounded-xl border-2 border-dashed ${toneClass} flex flex-col items-center justify-center gap-2 overflow-hidden`}
      role="img"
      aria-label={`Imagen pendiente: ${label}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-10 h-10 opacity-60"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-sm font-medium opacity-70">{label}</span>
      <span className="text-xs font-mono opacity-50 uppercase tracking-wider">
        Sustituir por foto real
      </span>
    </div>
  );
}
