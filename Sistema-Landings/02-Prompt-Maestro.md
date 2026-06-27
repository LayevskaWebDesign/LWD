# 02 · Prompt Maestro (v5.1)

Este es el prompt que se le pega a **Claude Code** para generar las versiones de una landing.
Es la evolución del `Prompt Página Web (4).md` (que queda intacto como referencia histórica):
ahora es **parametrizable**, agrega el plan **Super Pro**, el **modo multi-versión**, la
**compuerta de contexto**, el **preview en localhost** y deja todo **listo para deploy**.

## Cómo usarlo
1. Asegurate de tener el contexto del cliente cargado (`clientes/<cliente>/contexto-cliente.md`).
2. Copiá TODO el bloque de abajo.
3. Llená el **Bloque 0** (cliente + qué versiones querés).
4. Pegalo en Claude Code dentro de la carpeta del proyecto.

> **Mejoras opcionales:** por defecto el prompt **no** incluye las mejoras de alto valor
> (analítica, QA, ficha). Son módulos **aislados** en [`mejoras/`](mejoras/). Si querés alguna,
> indicalo en el Bloque 0 (`MEJORAS OPCIONALES: analitica`) y Claude la integra siguiendo su carpeta.

---

```text
PROMPT MAESTRO — GENERADOR DE LANDINGS LAYEVSKA (v5.1 · multi-versión)

ROL: Actuá como desarrollador senior full-stack experto en UX/UI, SEO local
avanzado, branding digital, performance y ciberseguridad. Trabajás para Layevska
Web Design (estudio costarricense de landings premium). La web nunca debe verse
como plantilla genérica: debe transmitir autoridad de marca de lujo en su nicho.

USÁ LAS SKILLS antes de codear: seguí `landing-page-builder` (premium-playbook,
structure, security, react-vite-ts), `frontend-design`, `emil-design-eng`,
`design-taste-frontend` y `web-design-guidelines`. Para el motor de animación/3D
del Super Pro, REUTILIZÁ el código ya probado de `layevska-landing-v2/`
(three + @react-three/fiber + drei + postprocessing + gsap + split-type). No reinventes.

━━━ BLOQUE 0 · PARÁMETROS (los lleno yo antes de ejecutar) ━━━
CLIENTE (slug):        ej. panaderia-luna
VERSIONES A GENERAR:   una o varias de [basic, animation, super-pro]
MEJORAS OPCIONALES:    ninguna por defecto. Si indico [analitica|qa|ficha], integralas
                       siguiendo Sistema-Landings/mejoras/. No las incluyas si no las pido.
PUERTOS:               basic=5180 · animation=5181 · super-pro=5182
RUTA BASE:             clientes/<CLIENTE>/
CONTEXTO:              clientes/<CLIENTE>/contexto-cliente.md

━━━ BLOQUE 1 · COMPUERTA DE CONTEXTO (no se genera NADA sin esto) ━━━
1. Leé clientes/<CLIENTE>/contexto-cliente.md.
   · Si NO existe: creálo desde la plantilla y PEDIME que lo complete. Detené todo.
   · Si faltan campos críticos (nombre, rubro, ubicación, contacto, propuesta de
     valor, CTA): pedímelos. Detené todo.
2. Si te pasé links (IG/FB/LinkedIn/Google Business): hacé extracción de marca
   (personalidad, paleta HEX, tono, buyer persona, testimonios reales) y PRE-LLENÁ
   los campos vacíos. Mostrame el resumen para aprobarlo.
3. NO inventes testimonios, contactos ni cifras. Lo que no sea real, marcalo como
   pendiente; no lo fabriqués.
4. Confirmá el contexto conmigo (resumen de ~6 líneas) ANTES de seguir.

Campos de contexto-cliente.md: nombre comercial · rubro/nicho · ubicación
(ciudad/país, para SEO local) · propuesta de valor en 1 frase · buyer persona ·
tono · servicios con Why-How-What · paleta HEX (o "extraer de redes") · tipografías ·
rutas de logos/fotos en marca/ · WhatsApp (con código país) · email · dirección+mapa ·
redes (links) · testimonios reales (texto+nombre+plataforma) · CTA principal ·
dominio deseado · referencias/competencia.

━━━ BLOQUE 2 · GENERACIÓN POR VERSIÓN ━━━
Por cada plan en VERSIONES, creá un proyecto React+Vite+TS AUTOCONTENIDO en
clientes/<CLIENTE>/versiones/<plan>/ (propio package.json, propio dist), gestionado
con pnpm, leyendo SIEMPRE del mismo contexto y de clientes/<CLIENTE>/marca/.
TypeScript estricto (sin any).

BASE COMÚN (la tienen los 3):
· HTML5 semántico, H1 único, hasta 5 secciones (Inicio · Servicio en Why/How/What ·
  Prueba social · Contacto con ubicación/teléfono/correo/mapa · +1 a definir).
· SEO local: title (keyword+ciudad), description CTR, Open Graph, Twitter Cards,
  JSON-LD (LocalBusiness/Service).
· Botón flotante de WhatsApp con mensaje pre-cargado.
· Formulario por Netlify Forms (honeypot anti-spam) + fallback mailto:; validación
  y sanitización anti-XSS; rel="noopener noreferrer" en externos.
· Aviso de privacidad + checkbox de consentimiento conforme a la LEY 8968 de Costa
  Rica (protección de datos personales) + link a la política de privacidad.
· Prueba social SOLO con testimonios REALES (nunca inventados); si no hay, se omite
  o se marca "próximamente".
· Rate limiting 30 req/min (lógica de cliente + nota de edge/headers).
· PERFORMANCE — objetivo PAGESPEED ≥ 90 en los 3 planes (Core Web Vitals en verde):
  imágenes WebP/AVIF optimizadas, lazy loading, alt descriptivos, sin CLS, JS diferido.
· ESTÉTICA (obligatoria en los 3) — diseño hermoso y premium exprimiendo CSS moderno
  al máximo: grid/flex avanzado, clamp() para tipografía fluida, gradientes y mezclas,
  sombras en capas, :has()/container queries, estados y micro-detalles en CSS puro.
  El Basic, al ser estático, saca su belleza 100% del CSS.
· prefers-reduced-motion respetado · contraste WCAG AA.
· netlify.toml (redirect SPA + security headers) · DEPLOY.md · .bat (instalar/iniciar/compilar, con pnpm).
· Deps: react, react-dom, lucide-react. (Sin librerías de animación.)

BASIC ($500) — "completo, pero en calma":
· Todo lo de BASE. Estático: sin movimiento, solo hover/estados CSS. Debe verse
  premium e impecable aunque esté quieto. Puerto 5180.

ANIMATION ($600) — "la misma marca, ahora con vida":
· BASIC + Framer Motion: reveals on-scroll (fade/slide), staggered layouts,
  transiciones suaves, hover de tarjetas, micro-interacciones, video en hero/secciones.
· Deps += framer-motion. Puerto 5181. (Mantené PageSpeed ≥ 90.)

SUPER PRO ($875) — "el salto premium" (reutilizá el motor de layevska-landing-v2):
· ANIMATION +
  - Entrada coreografiada: preloader elegante + timeline GSAP + SplitType en titulares.
  - Escena 3D: hero con Three.js/R3F + postprocessing, objeto/escena interactiva.
  - Cotizador interactivo multi-paso con cálculo en vivo; CTA que manda el resumen
    a WhatsApp/correo.
  - Video de fondo cinematográfico, cursor custom, parallax, botones magnéticos.
· Deps += three, @react-three/fiber, @react-three/drei, @react-three/postprocessing,
  gsap, split-type. Puerto 5182.
· PAGESPEED ≥ 90 TAMBIÉN ACÁ (es la restricción más dura): el 3D y el video van
  DIFERIDOS/CONDICIONALES — canvas lazy + solo en dispositivos capaces, poster
  estático en el primer pintado y en móvil/low-end/reduced-motion, video comprimido
  y diferido. El 3D no debe costar el score.

━━━ BLOQUE 3 · PREVIEW EN LOCALHOST ━━━
Instalá deps y levantá cada versión en su puerto fijo (vite --strictPort). Dame URLs:
basic→http://localhost:5180 · animation→http://localhost:5181 · super-pro→http://localhost:5182
Generá clientes/<CLIENTE>/comparar.bat que abra en paralelo TODAS las versiones generadas.

━━━ BLOQUE 4 · LISTO PARA DEPLOY (sin subir nada) ━━━
Cada versión compila a su propio dist/ listo para arrastrar a Netlify Drop. Por versión:
netlify.toml + DEPLOY.md (3 pasos) + build verificado (pnpm build sin errores).
NO desplegués. Solo dejalo listo.

━━━ BLOQUE 5 · CIERRE Y CONTROL DE CALIDAD ━━━
Antes de dar por terminada cada versión, VERIFICÁ (no afirmes sin medir): build OK ·
PAGESPEED/Lighthouse ≥ 90 (corré la medición sobre el build, no el dev server) · SEO
presente (meta + JSON-LD válido + H1 único) · formulario funcional · aviso de privacidad
presente · móvil correcto · headers de seguridad · reduced-motion · estética premium.
Entregá una "ficha": links localhost, qué incluye cada plan, precio, y el pitch de upsell
basic→animation→super-pro.

DATOS DEL NEGOCIO: (se leen de contexto-cliente.md)
```

---
*La plantilla de contexto está en [`../clientes/_PLANTILLA/contexto-cliente.md`](../clientes/_PLANTILLA/contexto-cliente.md).*
