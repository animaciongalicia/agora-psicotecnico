import Link from "next/link";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Migas de pan" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-muted">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-ink-soft font-medium" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="hover:text-brand-800 underline underline-offset-2">
                  {c.name}
                </Link>
              )}
              {!last && <span aria-hidden>›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
