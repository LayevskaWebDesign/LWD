# 01 · Modelo de negocio y planes

Layevska vende **landings premium productizadas** en tres planes. La oferta está diseñada
para que el cliente **no se lleve el primero**, sino el segundo — y para que el tercero se
sienta como un salto a otra categoría.

---

## Los tres planes

| Capa | **Basic · $500** | **Animation · $600** | **Super Pro · $875** |
|---|:--:|:--:|:--:|
| Hasta 5 secciones · SPA con scroll | ✅ | ✅ | ✅ |
| SEO local + JSON-LD | ✅ | ✅ | ✅ |
| Botón flotante de WhatsApp | ✅ | ✅ | ✅ |
| Formulario (Netlify Forms + anti-spam) | ✅ | ✅ | ✅ |
| Aviso de privacidad (Ley 8968 CR) | ✅ | ✅ | ✅ |
| Imágenes optimizadas + lazy load | ✅ | ✅ | ✅ |
| Rate limiting 30/min + security headers | ✅ | ✅ | ✅ |
| **PageSpeed ≥ 90** | ✅ | ✅ | ✅ |
| Estética premium exprimiendo CSS | ✅ | ✅ | ✅ |
| **Movimiento** | Estático (hover CSS) | **Framer Motion** | Todo Animation **+** |
| Video | — | Hero / secciones | + fondo cinematográfico |
| Entrada coreografiada | — | reveal on-scroll | **Preloader + GSAP + SplitType** |
| **Cotizador interactivo** | — | — | **✅ multi-paso, cálculo en vivo** |
| **Animación 3D** | — | — | **✅ Three.js / R3F + postprocessing** |
| Micro-interacciones | — | medias | cursor custom, parallax, magnetic |

---

## La jerarquía de upsell (la psicología)

- **Basic ($500) — "completo, pero en calma".** Tiene todo lo esencial y se ve **hermoso**,
  pero quieto. Su belleza sale 100 % del CSS (tipografía, espaciado, gradientes, jerarquía).
  > ⚠️ Regla innegociable: el Basic **nunca** se ve barato. Si se viera de plantilla, el
  > cliente desconfía de los tres planes. El cliente sube de plan por **lo que le falta**
  > (movimiento, 3D, cotizador), no porque el Basic sea feo.

- **Animation ($600) — "la misma marca, ahora con vida".** Por **+$100** todo cobra
  movimiento: reveals al hacer scroll, transiciones suaves, video. Debe sentirse como la
  **elección obvia** frente al Basic.

- **Super Pro ($875) — "el salto premium".** El salto Animation→Super Pro (**+$275**) se
  justifica con **cuatro cosas que se señalan con el dedo**: animación **3D**, **cotizador
  interactivo**, **entrada coreografiada** y **video cinematográfico**. Eso ancla toda la
  oferta como premium.

**Cómo presentarlo:** mostrá las tres en vivo (localhost o previews de Netlify) en la misma
sesión. Ver el Super Pro al lado del Animation es el mejor vendedor del Super Pro.

---

## Qué incluye cada plan (detalle)

### Base común (los tres lo tienen)
Estructura semántica HTML5 · hasta 5 secciones (Inicio · Servicio en formato *Por qué / Cómo /
Qué* · Prueba social · Contacto con ubicación, teléfono, correo y mapa · +1 a definir) · SEO
local con meta tags + Open Graph + JSON-LD · botón flotante de WhatsApp con mensaje pre-cargado ·
formulario por **Netlify Forms** con honeypot anti-spam y validación anti-XSS · **aviso de
privacidad y consentimiento (Ley 8968)** · rate limiting 30 req/min · security headers · imágenes
WebP/AVIF con lazy load · **PageSpeed ≥ 90** · diseño premium con CSS moderno · `prefers-reduced-motion`
y contraste WCAG AA.

### Basic — añade
Nada de movimiento: solo estados y hover en CSS puro. Foco total en composición y tipografía.

### Animation — añade
Framer Motion (reveals on-scroll, staggered layouts, transiciones entre secciones, hover de
tarjetas, micro-interacciones) + video en hero/secciones.

### Super Pro — añade
Entrada coreografiada (preloader + timeline GSAP + SplitType en titulares) · escena **3D** con
Three.js / React-Three-Fiber + postprocessing (diferida para no costar PageSpeed) · **cotizador
interactivo** multi-paso que manda el resumen a WhatsApp/correo · video de fondo cinematográfico ·
cursor custom, parallax, botones magnéticos.

---

## Plan de Mantenimiento (retainer) — *mejora de alto valor #4*

Después de publicar, el cliente casi siempre necesita cambios (precios, fotos, promos, textos).
Con el deploy conectado a Git ([03](03-Flujo-Generacion-a-Deploy.md)), editar es **barato y rápido**
→ conviene ofrecerlo como **plan mensual recurrente**.

**Qué incluye (sugerido):**
- Cambios de contenido menores (textos, fotos, precios, horarios).
- Monitoreo de que el sitio esté arriba y rápido.
- Pequeñas mejoras y correcciones.
- Reporte mensual básico de visitas/conversiones (si se activó la analítica — [mejoras/1](mejoras/1-analitica/)).

**Precio:** *a definir por el estudio* (ej. un % del valor del plan, mensual). Para que tenga
sentido cobrarlo, conviene que la **cuenta de Netlify sea del estudio** (ver decisión en [03](03-Flujo-Generacion-a-Deploy.md)).

**Por qué importa:** convierte un proyecto de una sola venta en **ingreso recurrente** y mantiene
la relación con el cliente abierta para futuras ventas (otra landing, otro servicio).

---
*Referencias: estándares técnicos en [03](03-Flujo-Generacion-a-Deploy.md) · generación en [02](02-Prompt-Maestro.md).*
