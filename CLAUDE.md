# CLAUDE.md — guía interna para futuras sesiones

Web oficial de **Psicotécnico Ágora** (A Coruña) — construida con Next.js 15
App Router + TypeScript + Tailwind CSS.

## Stack

- **Next.js 15.5** con App Router y React 19.
- **TypeScript** estricto.
- **Tailwind CSS 3.4** con variables CSS en `app/globals.css`.
- **MDX** para los artículos de `/consejos` (via `next-mdx-remote`).
- Sin base de datos: todo el contenido es estático o vive en `/content`.

## Comandos

```bash
npm install           # instalar dependencias
npm run dev           # servidor de desarrollo (localhost:3000)
npm run build         # build de producción
npm run start         # servir build
npm run typecheck     # tsc --noEmit
npm run lint          # ESLint (Next core-web-vitals)
```

## Estructura clave

- `app/` — rutas del App Router. Cada carpeta es una ruta.
- `components/` — componentes reutilizables (Header, Footer, ServiceCard, FaqList, CtaBlock, etc.).
- `content/site.ts` — **fuente única de verdad** del negocio (nombre, dirección, teléfono, horario, años de experiencia).
- `content/services.ts` — catálogo de servicios con slugs y metadatos SEO.
- `content/consejos/*.mdx` — artículos del blog, cada uno con frontmatter.
- `lib/seo.ts` — helper `buildMetadata()` para metadata coherente en toda la web.
- `lib/schema.ts` — constructores JSON-LD (LocalBusiness, Service, FAQPage, Article, BreadcrumbList).
- `lib/consejos.ts` — lector MDX del blog (frontmatter + orden por fecha).

## Convenciones

- **NAP** (nombre, dirección, teléfono) siempre desde `content/site.ts`. No repetir en línea.
- **Todo el copy** en español de España. Directo, humano, sin marketing vacío.
- Datos sensibles pendientes: marcados como `REVISAR CON CLIENTE` en el código y en el copy visible.
- **No inventar**: horarios reales, precios exactos, requisitos legales, testimonios, CIF/razón social.
- Imágenes reales: sustituir `<PagePlaceholder>` por `<Image>` de `next/image` cuando lleguen las fotos.

## SEO

- Metadata única por página via `buildMetadata()` en `lib/seo.ts`.
- Schema.org: `MedicalBusiness`, `Organization`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`.
- Sitemap dinámico en `app/sitemap.ts` (incluye servicios y artículos).
- Robots en `app/robots.ts`.
- Breadcrumbs visibles y schemados en todas las páginas internas.

## Variables de entorno

```
NEXT_PUBLIC_SITE_URL          # dominio canónico
NEXT_PUBLIC_GA_ID             # Google Analytics 4 (opcional)
NEXT_PUBLIC_GSC_VERIFICATION  # verificación GSC (opcional)
NEXT_PUBLIC_CONTACT_EMAIL     # email destino del formulario (opcional, fallback mailto:)
```

## Formulario de contacto

Actualmente usa fallback `mailto:` — abre el cliente de correo del usuario.
Pendiente de decidir integración final: Formspree/Basin/Web3Forms, endpoint
propio con Resend, WhatsApp Business o Calendly. Ver `components/ContactForm.tsx`.

## Analítica

Google Analytics 4 se carga SOLO tras aceptar cookies (`CookieBanner.tsx`
dispara un `CustomEvent` que activa el script).

Eventos preparados con `data-analytics="..."` en botones clave:
`click-tel-hero`, `click-tel-mobile`, `click-cita-hero`, `click-cita-mobile`,
`click-cita-cta`, `click-tel-cta`, `click-maps`, `submit-form`.

Configurar en GA los eventos personalizados si se quieren medir.

## Deploy

- Push a GitHub → conectar en Vercel (Next.js autodetectado).
- Añadir env vars.
- Conectar dominio `agorapsicotecnico.com`.

## Cosas a NO hacer

- No añadir dependencias pesadas (framework de animación, UI kit, etc.). El proyecto es intencionadamente ligero.
- No meter contenido dinámico que requiera base de datos sin hablarlo primero.
- No cambiar los slugs de las páginas SEO sin redirect (rompe el posicionamiento).
- No inventar información que el cliente no ha confirmado.
