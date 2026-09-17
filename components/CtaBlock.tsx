import Link from "next/link";
import { site } from "@/content/site";
import { PhoneIcon, CalendarIcon } from "./icons";

type CtaBlockProps = {
  title?: string;
  description?: string;
  variant?: "default" | "compact";
};

export function CtaBlock({
  title = "¿Quieres pedir cita?",
  description = "Llámanos y te atendemos en el momento, o pide tu cita online. Te lo ponemos fácil.",
  variant = "default",
}: CtaBlockProps) {
  const isCompact = variant === "compact";
  return (
    <section
      className={`${
        isCompact ? "py-10" : "py-14 md:py-20"
      } bg-brand-700 text-white`}
    >
      <div className="container text-center">
        <h2
          className={`font-display font-bold ${
            isCompact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
          } mb-4`}
        >
          {title}
        </h2>
        <p
          className={`${
            isCompact ? "text-lg" : "text-lg md:text-xl"
          } text-brand-100 mb-8 max-w-2xl mx-auto`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contacto"
            className="btn-primary btn-lg justify-center"
            data-analytics="click-cita-cta"
          >
            <CalendarIcon className="w-5 h-5" />
            Pedir cita
          </Link>
          <a
            href={`tel:${site.phone.tel}`}
            className="btn justify-center bg-white text-brand-800 hover:bg-brand-50 btn-lg"
            data-analytics="click-tel-cta"
          >
            <PhoneIcon className="w-5 h-5" />
            Llamar al {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
