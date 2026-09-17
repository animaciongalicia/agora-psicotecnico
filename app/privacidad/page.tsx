import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const PATH = "/privacidad";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidad",
  description: `Política de privacidad y tratamiento de datos personales de ${site.name}.`,
  path: PATH,
});

export default function PrivacidadPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-surface">
        <div className="container py-8">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Política de privacidad", href: PATH },
            ]}
          />
        </div>
        <div className="container pb-6 md:pb-10">
          <p className="chip mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink">
            Política de privacidad
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-surface">
        <div className="container-tight prose-agora">
          <div className="p-4 rounded-lg bg-accent-500/10 border border-accent-500/30 text-accent-700 mb-8 text-sm font-medium">
            ⚠️ REVISAR DATOS LEGALES CON CLIENTE — Confirmar responsable del
            tratamiento, delegado de protección de datos (si aplica), plazos
            de conservación y encargados del tratamiento reales.
          </div>

          <h2>Responsable del tratamiento</h2>
          <ul>
            <li>
              <strong>Titular:</strong> {site.legalName}{" "}
              <em className="text-brand-700">(REVISAR CON CLIENTE)</em>
            </li>
            <li>
              <strong>NIF/CIF:</strong>{" "}
              <em className="text-brand-700">REVISAR CON CLIENTE</em>
            </li>
            <li>
              <strong>Domicilio:</strong> {site.address.street},{" "}
              {site.address.postalCode} {site.address.city}.
            </li>
            <li>
              <strong>Contacto:</strong>{" "}
              <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            </li>
          </ul>

          <h2>Datos que recogemos</h2>
          <p>
            Tratamos los datos que nos facilitas al pedir cita (nombre, teléfono,
            servicio solicitado, día y franja preferidos, mensaje opcional) y
            los datos clínicos derivados de los reconocimientos médicos y
            psicotécnicos que realizamos en el centro, siempre conforme a la
            normativa sanitaria vigente.
          </p>

          <h2>Finalidad y base legal</h2>
          <ul>
            <li>
              <strong>Gestionar tu cita:</strong> base legal en la ejecución
              de la relación precontractual/contractual a solicitud del
              interesado.
            </li>
            <li>
              <strong>Realizar el reconocimiento y emitir los certificados:</strong>{" "}
              base legal en la ejecución del contrato y en la normativa
              sanitaria aplicable.
            </li>
            <li>
              <strong>Cumplimiento de obligaciones legales:</strong> facturación,
              conservación de historial y notificaciones a organismos
              competentes cuando la ley lo exige.
            </li>
          </ul>

          <h2>Conservación</h2>
          <p>
            Los datos clínicos se conservan durante los plazos que exige la
            normativa sanitaria. El resto de datos, mientras dure la relación
            con el centro y los plazos legales de prescripción.
          </p>

          <h2>Destinatarios</h2>
          <p>
            No cedemos tus datos a terceros salvo obligación legal (por ejemplo,
            para la tramitación telemática con la DGT o el correspondiente
            organismo autorizado en cada certificado).
          </p>

          <h2>Tus derechos</h2>
          <p>
            Puedes ejercer los derechos de acceso, rectificación, supresión,
            oposición, limitación y portabilidad dirigiéndote al centro por
            teléfono o correo. Si consideras que no hemos atendido tu solicitud,
            puedes presentar reclamación ante la Agencia Española de Protección
            de Datos (www.aepd.es).
          </p>
        </div>
      </section>
    </>
  );
}
