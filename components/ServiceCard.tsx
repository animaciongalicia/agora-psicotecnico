import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  icon?: ReactNode;
  highlight?: boolean;
};

export function ServiceCard({
  href,
  title,
  description,
  icon,
  highlight = false,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group card-hover p-6 flex flex-col gap-3 ${
        highlight ? "border-brand-300 bg-brand-50/40" : ""
      }`}
    >
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
      )}
      <h3 className="font-display font-semibold text-xl text-ink group-hover:text-brand-800 transition-colors">
        {title}
      </h3>
      <p className="text-ink-soft leading-relaxed">{description}</p>
      <span className="inline-flex items-center gap-1 mt-auto pt-2 text-brand-700 font-semibold group-hover:text-brand-800">
        Ver información
        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
