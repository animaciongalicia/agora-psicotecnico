import { ReactNode } from "react";

export type Step = {
  n: number;
  title: string;
  text: string;
};

export function ServiceStepsBlock({
  title,
  intro,
  steps,
}: {
  title: string;
  intro?: string;
  steps: Step[];
}) {
  return (
    <div>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
        {title}
      </h2>
      {intro && <p className="text-lg text-ink-soft mb-10 max-w-2xl">{intro}</p>}
      <ol className="space-y-5">
        {steps.map((step) => (
          <li key={step.n} className="flex gap-4 md:gap-6">
            <span
              aria-hidden
              className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-brand-700 text-white font-display font-bold flex items-center justify-center text-lg md:text-2xl flex-shrink-0 shadow-soft"
            >
              {step.n}
            </span>
            <div className="pt-1">
              <h3 className="font-display font-semibold text-xl text-ink mb-1">
                {step.title}
              </h3>
              <p className="text-ink-soft">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ChecklistBlock({
  title,
  items,
  tone = "brand",
}: {
  title: string;
  items: (string | ReactNode)[];
  tone?: "brand" | "warn";
}) {
  const toneClass =
    tone === "warn"
      ? "border-accent-500/30 bg-accent-500/5"
      : "border-brand-200 bg-brand-50/50";
  const iconClass =
    tone === "warn" ? "bg-accent-500/20 text-accent-700" : "bg-brand-100 text-brand-700";
  return (
    <div className={`rounded-2xl border ${toneClass} p-6 md:p-7`}>
      <h3 className="font-display font-semibold text-xl text-ink mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 text-ink-soft leading-relaxed">
            <span
              className={`w-6 h-6 rounded-full ${iconClass} flex items-center justify-center flex-shrink-0 mt-0.5`}
              aria-hidden
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="flex-1">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
