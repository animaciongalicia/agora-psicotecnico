"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left font-semibold text-ink hover:bg-brand-50/40"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-lg">{item.question}</span>
              <span
                aria-hidden
                className={`w-6 h-6 flex items-center justify-center rounded-full bg-brand-100 text-brand-700 flex-shrink-0 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  className="w-4 h-4"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 md:px-6 md:pb-6 text-ink-soft leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
