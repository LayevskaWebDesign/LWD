# Layevska Web Design — React + Vite + TypeScript

Landing page del estudio Layevska Web Design construida con React 18, Vite 5, TypeScript estricto, Tailwind CSS, Framer Motion y React Hook Form.

---

## Estado del proyecto

Este proyecto se entrega en fases:

- **Fase 1 — COMPLETA**: Setup, arquitectura, sistema de tema (claro/oscuro), preloader, cursor personalizado, scroll progress, back-to-top, WhatsApp flotante, Header, Footer y Hero con el loop cinematográfico "diseñando en vivo".
- **Fase 2 — PENDIENTE**: Secciones de contenido (About, Servicios, Proceso Visual, Portafolio, Precios, Hoja de ruta, FAQ, Configurador, Formulario).
- **Fase 3 — PENDIENTE**: Features nuevas (Testimonios, Garantía, Comparativa, Exit-intent, Sticky CTA, ROI calculator, 404 custom, Easter eggs, PWA, Analytics).

---

## Stack técnico

| Categoría | Herramienta |
| --- | --- |
| Framework | React 18.3 + TypeScript 5 (strict mode) |
| Build tool | Vite 5 |
| Estilos | Tailwind CSS 3.4 con design tokens via CSS variables |
| Animaciones | Framer Motion 11 + animaciones CSS puras donde tiene sentido |
| Formularios | React Hook Form 7 + Zod (validación) |
| Iconos | SVG inline (sin librería) |
| Fonts | Cormorant Garamond + Inter + JetBrains Mono (Google Fonts) |

---

## Estructura de carpetas

```
layevska-react/
├── public/                  # Assets estáticos (og-image.png, favicon, etc.)
├── src/
│   ├── assets/              # Logos e imágenes locales
│   ├── components/
│   │   ├── ui/              # Primitives (Button, Container, Chapter)
│   │   ├── overlay/         # Layers globales (Cursor, Preloader, ThemeSwitch...)
│   │   ├── sections/        # Secciones de la landing (Hero, About, etc.)
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── hooks/               # Hooks reutilizables
│   ├── lib/                 # Helpers y constantes
│   ├── styles/              # globals.css (tokens + base)
│   ├── types/               # Tipos compartidos
│   ├── App.tsx
│   └── main.tsx
├── index.html               # Meta tags + Schema JSON-LD + entry point
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Setup local

Requiere **Node.js 18+** y **npm 9+** (o pnpm/yarn equivalentes).

```bash
# 1. Entrar a la carpeta
cd layevska-react

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo (abre automáticamente en http://localhost:5173)
npm run dev

# 4. Build de producción
npm run build

# 5. Preview del build
npm run preview

# 6. Verificar tipos sin compilar
npm run type-check
```

---

## Sistema de tema (claro/oscuro)

El tema se controla con el atributo `data-theme` en el `<html>` y se persiste en `localStorage` con la key `layevska-theme`. Los colores se definen como variables CSS en `src/styles/globals.css` y Tailwind las consume vía la config en `tailwind.config.ts`.

Ejemplo de uso:

```tsx
<div className="bg-bg text-text border-line">
  <h2 className="text-gold-bright">Título dorado</h2>
</div>
```

El sistema responde automáticamente al cambiar tema, sin necesidad de cambiar clases.

---

## Animaciones

- **Framer Motion** se usa para transiciones de entrada y micro-interacciones (Hero, Preloader, BackToTop).
- **CSS keyframes inline** se usan para animaciones cíclicas de bajo costo (cursor trail, swatches del DesignCanvas, pulse del botón WhatsApp).
- El hook `useReducedMotion` desactiva animaciones costosas para usuarios con esa preferencia del sistema.

---

## Deploy a producción

### Opción A: AWS S3 + CloudFront (recomendado, coherente con la oferta del estudio)

```bash
# 1. Build
npm run build

# 2. Sube dist/ a un bucket S3
aws s3 sync dist/ s3://layevska-com-prod --delete

# 3. Invalida la caché de CloudFront para reflejar los cambios
aws cloudfront create-invalidation --distribution-id E1234ABCD --paths "/*"
```

Configuración recomendada de CloudFront:
- Custom origin: el bucket S3 (con OAI o OAC para no exponerlo público directamente).
- Default root object: `index.html`.
- Error pages: 404 → `/index.html` con status 200 (para que React maneje rutas no encontradas con un componente custom).
- Headers: agregar `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` vía Lambda@Edge o CloudFront Functions.

### Opción B: Cloudflare Pages (sin esfuerzo)

1. Conecta el repo en `pages.cloudflare.com`.
2. Build command: `npm run build`.
3. Output directory: `dist`.
4. Listo. Cloudflare provee CDN global, SSL y dominios custom gratis.

### Opción C: Vercel

```bash
npm i -g vercel
vercel
```

Vercel detecta automáticamente que es Vite y configura todo.

---

## Convenciones de código

- **TypeScript estricto**: prohibido `any` salvo casos justificados.
- **Naming**: PascalCase para componentes, camelCase para hooks y utils, UPPER_SNAKE para constantes.
- **Imports**: `import { ... } from '@/...'` para imports desde `src/`.
- **Tailwind**: usar clases utilitarias; reservar `@layer components` para patrones repetidos.
- **Accesibilidad**: cada elemento interactivo necesita `aria-label`, focus visible y soporta navegación por teclado.

---

## Variables de entorno

Sin variables en Fase 1. Cuando se integre analytics o backend, se agregarán en `.env.local`:

```env
VITE_GA_ID=G-XXXXXXXXXX
VITE_CLARITY_ID=xxxxxxxxxx
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

---

## Próximos pasos

1. Ejecutar `npm install` y `npm run dev` para verificar que la Fase 1 corre correctamente.
2. Confirmar el feedback visual del Hero, preloader, cursor y tema.
3. Aprobar el avance para empezar **Fase 2** (secciones de contenido).

---

## Contacto

**Layevska Web Design**  ·  +506 8751-8441  ·  San José, Costa Rica  ·  © 2026
