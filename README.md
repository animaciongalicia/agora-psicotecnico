# Psicotécnico Ágora — Web oficial

Web corporativa, SEO y de conversión para **Psicotécnico Ágora** (A Coruña).
Construida con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**.

Preparada para GitHub + Vercel.

---

## Arrancar en local

```bash
npm install
cp .env.example .env.local   # editar valores si procede
npm run dev
```

Abrir http://localhost:3000

Scripts disponibles:

- `npm run dev` — desarrollo
- `npm run build` — build de producción
- `npm run start` — servir el build
- `npm run typecheck` — TypeScript sin emitir
- `npm run lint` — ESLint (Next core-web-vitals)

---

## Estructura

```
/app                → páginas (App Router), sitemap, robots, layout raíz
/components         → UI reutilizable (Header, Footer, ServiceCard, FAQ...)
/content            → datos del negocio (site.ts, services.ts) y artículos MDX
/lib                → helpers SEO, schemas JSON-LD, analítica
/public             → imágenes, favicon, OG
```

---

## Editar textos rápidamente

**Datos del negocio (teléfono, dirección, horario, años de experiencia):**
`content/site.ts`

**Servicios y sus rutas SEO:**
`content/services.ts`

**Textos concretos de una página:**
directamente en el `.tsx` correspondiente dentro de `/app`.

---

## Cambiar colores, tipografía, espaciados

**Colores y variables de diseño:** `app/globals.css` (bloque `:root`).
**Tipografías:** cargadas con `next/font/google` en `app/layout.tsx`.
**Escala tipográfica / radios / sombras:** `tailwind.config.ts`.

Cambia una variable, cambia toda la web.

---

## Añadir un artículo nuevo a `/consejos`

_(Sistema completo en el Paso 3)_ Crear un `.mdx` en `content/consejos/`
con frontmatter:

```mdx
---
title: "¿Qué necesito para renovar el carnet en A Coruña?"
description: "Meta description SEO..."
date: "2025-04-15"
slug: "que-necesito-renovar-carnet-conducir-coruna"
category: "Renovación"
---

Cuerpo del artículo en Markdown/MDX...
```

---

## Cambiar el teléfono

1. Editar `content/site.ts` → campos `phone.display` y `phone.tel`.
2. Aparece automáticamente en Header, Footer, barra móvil, footer, CTAs y schema.

---

## Cambiar horarios

Editar `content/site.ts` → `hours.display` (mostrado al usuario) y
`hours.schema` (para JSON-LD).

**Marcado actualmente como `REVISAR CON CLIENTE` — sustituir con horarios reales
antes de publicar en producción.**

---

## Fotografías

Espacios reservados como `<PagePlaceholder>` con el texto **"SUSTITUIR POR FOTO REAL"**.
Sustituir por imágenes optimizadas en `/public/img/` y usar `<Image>` de `next/image`.

Imágenes recomendadas (sin inventar):

- Fachada del centro
- Recepción
- Interior / consultas
- Personal
- Equipos
- Zona de reconocimiento

---

## Variables de entorno

Copiar `.env.example` a `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://agorapsicotecnico.com
NEXT_PUBLIC_GA_ID=G-XXXXXXX             # opcional
NEXT_PUBLIC_GSC_VERIFICATION=xxxxx      # opcional (metatag verificación GSC)
```

Configurar las mismas en Vercel (Project → Settings → Environment Variables).

---

## Desplegar en Vercel

1. Subir el repo a GitHub.
2. En [vercel.com/new](https://vercel.com/new) → Import Project → seleccionar el repo.
3. Framework: Next.js (autodetectado).
4. Añadir variables de entorno (arriba).
5. Deploy.
6. Conectar dominio en **Project → Settings → Domains**: añadir `agorapsicotecnico.com` y `www.agorapsicotecnico.com`.
7. Actualizar los DNS del dominio en el registrador siguiendo las instrucciones de Vercel.
8. Verificar Google Search Console con la URL de producción.

---

## SEO checklist

- ✅ Metadata única por página (title, description, canonical, OG, Twitter)
- ✅ Schema.org: `MedicalBusiness`, `Organization`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`
- ✅ Sitemap dinámico en `/sitemap.xml`
- ✅ Robots en `/robots.txt`
- ✅ Datos NAP idénticos en toda la web (fuente: `content/site.ts`)
- ✅ Imágenes con `next/image` (lazy + AVIF/WebP)
- ✅ Fuentes optimizadas con `next/font`
- ✅ Accesibilidad: focus visible, contraste alto, tipografía grande, targets táctiles ≥48px

---

## Datos pendientes de confirmar con cliente

Todos marcados en el código con `REVISAR CON CLIENTE`:

- Horario del centro
- CIF / razón social (para páginas legales)
- Fotos reales (fachada, interior, personal)
- Coordenadas exactas del local (para mapa/schema)
- ¿Ofrecen recuperación de puntos? (aparece dudoso)
- Colores exactos de identidad Ágora (si difieren de los actuales)
- Reseñas Google para integrar
- Redes sociales

---

## Checklist antes de publicar

Datos y contenido:

- [ ] Confirmar horario real y editarlo en `content/site.ts` → `hours`.
- [ ] Sustituir CIF/razón social en `content/site.ts` y páginas legales.
- [ ] Añadir email real de contacto en `.env` (`NEXT_PUBLIC_CONTACT_EMAIL`) o cambiar el formulario a servicio final.
- [ ] Sustituir todos los `<PagePlaceholder>` por fotografías reales optimizadas (`public/img/`).
- [ ] Integrar reseñas reales de Google (en la Home, sección de confianza).
- [ ] Confirmar coordenadas exactas del local para el mapa.
- [ ] Decidir si se ofrece "recuperación de puntos" y añadir la página si procede.

Infraestructura:

- [ ] Crear cuenta / conectar Vercel al repositorio.
- [ ] Añadir variables de entorno (mínimo `NEXT_PUBLIC_SITE_URL`).
- [ ] Añadir dominio `agorapsicotecnico.com` y `www.agorapsicotecnico.com`.
- [ ] Actualizar DNS del dominio según instrucciones de Vercel.
- [ ] Crear propiedad en Google Search Console y verificar (via metatag o DNS).
- [ ] Subir sitemap `https://agorapsicotecnico.com/sitemap.xml` en GSC.
- [ ] Crear propiedad de Google Analytics 4 y poner el ID en `NEXT_PUBLIC_GA_ID`.
- [ ] Enlazar la ficha de Google Business con el nuevo sitio.

Integraciones opcionales:

- [ ] Sustituir el formulario `mailto:` por Formspree, Resend, Web3Forms, etc.
- [ ] Integrar sistema de cita real (Calendly, Google Calendar, WhatsApp Business).
- [ ] Widget/API de reseñas de Google en la sección de confianza.

Verificación final:

- [ ] `npm run build` sin errores.
- [ ] `npm run typecheck` sin errores.
- [ ] `npm run lint` sin warnings.
- [ ] Verificar Lighthouse en producción (móvil y desktop).
- [ ] Comprobar responsive en móvil real (no solo emulador).
- [ ] Comprobar Rich Results con la herramienta de Google (schema.org).

---

## Licencia y atribución

Código propiedad de Psicotécnico Ágora.
