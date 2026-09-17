import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const PATH = "/aviso-legal";

export const metadata: Metadata = buildMetadata({
  title: "Aviso legal",
  description: `Aviso legal de ${site.name}, centro de reconocimientos médicos y psicotécnicos en A Coruña.`,
  path: PATH,
});

export default function AvisoLegalPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Aviso legal", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-6 md:pb-10">
          <p className="chip mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink">
            Aviso legal
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-surface">
        <div className="container-tight prose-agora">
          <div className="p-4 rounded-lg bg-accent-500/10 border border-accent-500/30 text-accent-700 mb-8 text-sm font-medium">
            ⚠️ REVISAR CON CLIENTE — Confirmar denominación exacta de la
            entidad titular y datos de inscripción sanitaria / registro
            autonómico antes de publicar.
          </div>

          <h2>1. Datos identificativos</h2>
          <ul>
            <li>
              <strong>Titular:</strong> {site.legalName}
            </li>
            <li>
              <strong>NIF:</strong> {site.nif}
            </li>
            <li>
              <strong>Domicilio:</strong> {site.address.streetLong},{" "}
              {site.address.postalCode} {site.address.city}.
            </li>
            <li>
              <strong>Teléfono:</strong>{" "}
              <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            </li>
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <strong>Datos de inscripción sanitaria / registro autonómico:</strong>{" "}
              <em className="text-brand-700">REVISAR CON CLIENTE</em>
            </li>
          </ul>

          <h2>2. Objeto</h2>
          <p>
            Este aviso legal regula el uso del sitio web {site.url}, propiedad
            de {site.legalName}. El acceso al sitio implica la aceptación de
            las presentes condiciones. Si no estás de acuerdo con alguna de
            ellas, te rogamos que no lo utilices.
          </p>

          <h2>3. Uso del sitio</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado del sitio, de sus
            contenidos y de sus servicios, absteniéndose de utilizarlos con
            fines o efectos ilícitos, contrarios a lo establecido en este
            aviso legal, lesivos de derechos e intereses de terceros o que de
            cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar
            o impedir su normal uso.
          </p>

          <h2>4. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio (textos, imágenes, marcas, logotipos,
            código fuente, estructura y diseño) son titularidad de {site.legalName}{" "}
            o de terceros que han autorizado su uso. Queda prohibida su
            reproducción, distribución, comunicación pública o transformación
            sin autorización expresa.
          </p>

          <h2>5. Responsabilidad</h2>
          <p>
            {site.legalName} no se hace responsable de los daños derivados del
            uso de este sitio ni de los contenidos de terceros a los que se
            pueda acceder a través de enlaces externos. La información que
            aquí se ofrece es orientativa; para trámites concretos, consulta
            siempre con el organismo competente correspondiente (DGT, Ministerio
            del Interior, ayuntamiento, autoridades marítimas, etc.).
          </p>

          <h2>6. Legislación aplicable</h2>
          <p>
            Este aviso legal se rige por la normativa española. Para cualquier
            controversia serán competentes los Juzgados y Tribunales de A Coruña,
            salvo que la normativa aplicable disponga otra cosa.
          </p>
        </div>
      </section>
    </>
  );
}
