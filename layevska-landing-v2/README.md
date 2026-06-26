# Layevska Web Design — Landing v2

Versión nueva (desde cero) construida con **React 18 + Vite 5 + TypeScript + Tailwind + Framer Motion + Lucide React**.

## Cómo ejecutarla en Windows (sin terminal)

1. Doble click en `1-DIAGNOSTICO.bat` — verifica que tengas Node.js instalado.
2. Doble click en `2-INSTALAR.bat` — instala todas las dependencias (2-5 min).
3. Doble click en `3-INICIAR.bat` — arranca el servidor de desarrollo.

Cuando veas un link `http://localhost:5173` en la consola, se abre solo en el navegador.

## Stack

- React 18.3 + Vite 5.4 + TypeScript 5.6 (strict)
- Tailwind CSS 3.4 con paleta personalizada
- Framer Motion 11 para animaciones
- Lucide React para iconografía premium

## Estructura

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Composición principal
├── styles.css            # Tailwind + CSS de preloader, sparkles, etc.
├── data.ts               # Contenido del negocio (textos, modelos, FAQ)
├── hooks.ts              # useReducedMotion, useMousePosition, useTilt, useRateLimit, sanitize
└── components/
    ├── Preloader.tsx     # Pantalla 7s con texto 3D dorado + sparkles
    ├── Header.tsx        # Header sticky con logo dorado
    ├── Hero.tsx          # Hero con marcos 3D + partículas
    ├── ParticlesBg.tsx   # Canvas con partículas reactivas al mouse
    ├── FloatingFrames.tsx # 3 marcos tipo museo con tilt 3D
    ├── PorQue.tsx        # Por qué existimos (Círculo de Oro · Why)
    ├── Proceso.tsx       # Cómo trabajamos + lápiz SVG animado al scroll
    ├── Servicios.tsx     # Modelos Estándar y Premium
    ├── Portafolio.tsx    # 6 piezas con liquid transitions + color explosion
    ├── Testimonios.tsx   # 3 testimonios con estrellas
    ├── Garantia.tsx      # 4 garantías contractuales
    ├── FAQ.tsx           # Acordeón de preguntas frecuentes
    ├── Contacto.tsx      # Formulario con rate limit + sanitización
    ├── Footer.tsx        # Cierre con firmas de Miah y Bryan
    ├── WhatsAppFloat.tsx # Botón flotante de WhatsApp
    └── BackToTop.tsx     # Volver arriba al hacer scroll
```

## Características clave

- **Preloader 7s** con texto 3D dorado metálico + 42 sparkles flotantes
- **Hero parallax** con canvas de partículas reactivo al mouse + 3 marcos 3D con tilt
- **Círculo de Oro** (Why → How → What) para el storytelling de venta
- **Lápiz SVG animado** que dibuja wireframe a medida que se hace scroll
- **Portafolio interactivo** con liquid transitions + explosión de colores de la paleta al hover
- **Tilt 3D** en marcos del hero y service cards
- **Rate limiter** de 30 req/min en formulario con feedback visual elegante
- **Sanitización XSS** en todos los inputs antes de armar el mailto
- **WhatsApp pre-cargado** con mensaje persuasivo y `rel="noopener noreferrer"`
- **SEO completo**: meta tags, OG, Twitter Cards, JSON-LD (LocalBusiness + ProfessionalService)
- **Accesibilidad**: `prefers-reduced-motion` respetado, labels en form, aria-labels
- **Mobile-first** responsive nativo

## Paleta de colores

| Color           | Hex       | Uso                          |
|-----------------|-----------|------------------------------|
| Salmon Tint     | `#F1CBBF` | Acento romántico             |
| Salmon Pink     | `#F5C3C0` | Variante clara               |
| Borlotti Bean   | `#D8B0AB` | Acento medio                 |
| Teal Light      | `#A0BDC1` | Detalles cool                |
| Teal Deep       | `#3D7886` | Acento profundo              |
| Navy            | `#1C4058` | Base secundaria              |
| Navy Deep       | `#0E2435` | Base principal               |
| Navy Black      | `#070F1A` | Fondo absoluto               |
| Gold            | `#C9A961` | **Acento primario · marca**  |
| Gold Bright     | `#DDC289` | Highlights dorados           |
| Ivory           | `#FAF7F2` | Texto sobre fondos oscuros   |

El nombre **Layevska Web Design** siempre va en gold metalizado sobre fondos navy/navy-deep para garantizar contraste WCAG AA+.

## Seguridad

- Sin credenciales en el front-end (sin .env con secrets)
- `rel="noopener noreferrer"` en todos los links externos
- Sanitización `sanitize()` elimina `<>`, `javascript:` y handlers `on*=` antes del mailto
- Rate limit 30 req/min en cliente (debe complementarse con rate limit server-side en el back-end de producción)
- Validación estricta de email y teléfono
- LocalStorage para rate limit (no cookies, no tracking)

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para subir a AWS S3 + CloudFront, Vercel, Cloudflare Pages o cualquier hosting estático.

---

**Layevska Web Design** · Miah Layevska & Bryan Barrantes · San José, Costa Rica · +506 8751-8441
