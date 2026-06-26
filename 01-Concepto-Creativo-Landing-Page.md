# Layevska Web Design — Informe de Concepto Creativo
## Landing page propia · Fase 0: Estrategia y dirección de arte

> **Tagline conceptual:** *Diseño que se siente como un secreto bien guardado.*
>
> Un estudio que construye landing pages como quien forja una llave: cada una abre una puerta distinta, todas tienen el peso de algo verdadero.

---

## 1. Concepto Maestro

**Nombre del concepto:** *"La Cofradía del Detalle"*

Layevska Web Design no es una agencia: es un **taller artesanal nocturno**. La marca habita en la intersección entre tres mundos:

- La **alta costura silenciosa** — donde cada puntada es invisible pero el resultado se siente.
- El **gótico cinematográfico de Guillermo del Toro** — barroco, oscuro, simbólico, lleno de criaturas que parecen amenazantes pero protegen lo importante.
- La **aventura desbordada de One Piece** — la convicción de que cada cliente tiene un tesoro y que merecemos arriesgarlo todo por ayudarlo a encontrarlo.

Todo esto narrado con la **fluidez animada del Disney de los 2000s**: gestos elásticos, transiciones que respiran, magia que aparece en los bordes de la pantalla sin distraer.

> **Promesa central:** *"Tu landing page no debería verse como las de tus competidores. Debería verse como tú, en tu mejor versión, contado por alguien que estudió tu historia."*

---

## 2. Paleta de Colores (HEX + Tailwind)

### Núcleo cromático

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo principal | Medianoche Profunda | `#0A0708` | Base del sitio, secciones hero |
| Fondo secundario | Terciopelo Borgoña | `#1F0D14` | Bloques alternados, contraste suave |
| Superficie elevada | Carbón Humo | `#1A1517` | Cards, modales, formularios |
| Texto principal | Marfil Perla | `#F4ECDB` | Títulos y body |
| Texto secundario | Plata Antigua | `#A9A09A` | Subtítulos, metadatos |
| Acento primario | Oro Envejecido | `#C9A961` | CTAs, líneas decorativas, iconos |
| Destello mágico | Oro Líquido | `#E8C77E` | Hover, brillos, partículas |
| Misterio | Ciruela Real | `#5B2B47` | Sombras de acento, gradientes |
| Chispa aventura | Rojo Brasa | `#A93226` | Alertas, énfasis narrativo puntual |
| Borde sutil | Bronce Pátina | `#3A2D1F` | Separadores, marcos de imagen |

### Configuración Tailwind (extracto)

```js
// tailwind.config.ts
colors: {
  midnight: '#0A0708',
  velvet:   '#1F0D14',
  smoke:    '#1A1517',
  ivory:    '#F4ECDB',
  antique:  '#A9A09A',
  gold: {
    DEFAULT: '#C9A961',
    glow:    '#E8C77E',
  },
  plum:   '#5B2B47',
  ember:  '#A93226',
  patina: '#3A2D1F',
}
```

### Gradientes firma

- **Gradiente "Velo Nocturno":** `linear-gradient(135deg, #0A0708 0%, #1F0D14 70%, #5B2B47 100%)` — fondo de secciones hero.
- **Gradiente "Llama Dorada":** `linear-gradient(180deg, #C9A961 0%, #E8C77E 50%, #C9A961 100%)` — botones primarios y separadores ornamentales.
- **Gradiente "Aliento Helado":** radial al borde, `radial-gradient(ellipse at top, rgba(232,199,126,0.15), transparent 70%)` — halo detrás de títulos.

---

## 3. Tipografía y Jerarquía

| Uso | Familia | Peso | Justificación |
|---|---|---|---|
| Display (H1, eyebrow) | **Cinzel** | 400/600 | Letras capitales con grabado romano — evoca lápidas antiguas, anillos de poder, sellos lacrados. |
| Subtítulos (H2, H3) | **Cormorant Garamond** | 300/500/700 | Serif italiana de alta costura, perfecta para frases largas con elegancia editorial. |
| Cuerpo | **Inter** | 400/500 | Sans neutra de altísima legibilidad mobile, contrapeso moderno al barroco de los display. |
| Acentos narrativos | **Italiana** | 400 | Cursiva delicada para citas y susurros tipográficos. |
| Monospace (precios, badges) | **JetBrains Mono** | 500 | Refuerza el contraste técnico/artesanal cuando se muestran cifras o specs. |

**Escala tipográfica (mobile → desktop):**

- H1: `clamp(2.5rem, 6vw, 5.5rem)` — Cinzel, tracking apretado, color marfil con halo dorado.
- H2: `clamp(1.875rem, 4vw, 3.25rem)` — Cormorant, italic permitido.
- H3: `1.5rem` — Cormorant 500.
- Body: `1.0625rem` con `line-height: 1.7`.
- Caption: `0.875rem` Inter, color plata antigua.

---

## 4. Arquitectura de Secciones (scroll vertical no monótono)

Estructura en **12 actos** — cada uno con propósito narrativo y comportamiento visual distinto. Se prohíbe la rejilla de 3 columnas excepto donde se comparan los **dos modelos**.

```
┌─────────────────────────────────────────────────────────┐
│  ACTO 1 — Hero / "El Velo se Levanta"                    │ Full viewport
│  Fondo: video sutil de polvo dorado + tipografía Cinzel  │ Centrado
├─────────────────────────────────────────────────────────┤
│  ACTO 2 — Manifiesto (texto grande tipográfico)          │ Fondo midnight
│  "No vendemos páginas. Forjamos llaves."                 │ Texto izquierda
├─────────────────────────────────────────────────────────┤
│  ACTO 3 — Los Tres Dolores (alternado L/R)               │ Velvet/Midnight
│  Cada dolor como "criatura nombrada"                     │ Imágenes derecha
├─────────────────────────────────────────────────────────┤
│  ACTO 4 — El Círculo de Oro (Why / How / What)           │ Diagonal split
│  Animación radial al hacer scroll                        │ Foco central
├─────────────────────────────────────────────────────────┤
│  ACTO 5 — Las Dos Llaves (Estándar vs Premium)           │ 2 columnas
│  Cards verticales tipo "selección de personaje"          │ Cinemático
├─────────────────────────────────────────────────────────┤
│  ACTO 6 — Cómo trabajamos (Timeline de 6 pasos)          │ Vertical
│  Línea dorada que se dibuja con el scroll                │ Stagger
├─────────────────────────────────────────────────────────┤
│  ACTO 7 — La Forjadora (Equipo/Fundadora)                │ Texto L / Foto R
│  Retrato tratado en sepia gótico                         │ Velvet bg
├─────────────────────────────────────────────────────────┤
│  ACTO 8 — Cuestionario Interactivo (3 preguntas)         │ Centrado
│  Stepper animado con preguntas tipo "elige tu camino"    │ Conversacional
├─────────────────────────────────────────────────────────┤
│  ACTO 9 — Voces de la Cofradía (Testimonios)             │ Scroll horiz.
│  3 testimonios en burbujas marfil con estrellas oro      │ Carrusel
├─────────────────────────────────────────────────────────┤
│  ACTO 10 — Mantenimiento Honesto ($120/mes)              │ Tabla simple
│  Desglose transparente del costo mensual                 │ Texto justificado
├─────────────────────────────────────────────────────────┤
│  ACTO 11 — Preguntas Frecuentes (Accordion)              │ Centrado
│  6 FAQs con animación de despliegue                      │ Acordeón gold
├─────────────────────────────────────────────────────────┤
│  ACTO 12 — CTA Final + Formulario + WhatsApp             │ Hero invertido
│  "¿Listo para forjar tu llave?"                          │ Centrado pesado
├─────────────────────────────────────────────────────────┤
│  Footer · Botón WhatsApp flotante siempre visible        │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Copys Listos para Producción

### Hero (Acto 1)

**Eyebrow (Cinzel small caps):**
`ESTUDIO ARTESANAL · COSTA RICA · DESDE 2026`

**H1 (Cinzel, marfil con halo dorado):**
> **Landing pages forjadas para gente que ya está cansada de parecerse a todos los demás.**

**Subtítulo (Cormorant italic, plata antigua):**
> *Diseño cinematográfico, ingeniería serverless en AWS y una sola misión: que tu próxima visita se convierta en cliente antes de cerrar la pestaña.*

**CTA primario (Oro Envejecido):**
`Forjar mi landing page →`

**CTA secundario (outline marfil):**
`Conocer los dos modelos`

**Microcopy bajo CTA:**
`Entrega en 3 a 7 días · Hosting y dominio incluidos · Sin contratos eternos.`

---

### Manifiesto (Acto 2)

**(Texto grande, alineado izquierda, fondo midnight)**

> Internet está lleno de plantillas que ya viste mil veces.
>
> Páginas hechas con prisa, vendidas con guion y olvidadas el mismo día que se publican.
>
> **Layevska Web Design existe para lo contrario.**
>
> Construimos landing pages como quien forja una llave a la medida: lentas en el detalle, rápidas en la entrega, hechas para abrir una puerta muy específica — la de tu próximo cliente.

---

### Los Tres Dolores (Acto 3)

**Eyebrow:** `LO QUE NORMALMENTE TE PASA`

**H2:** *Hay tres criaturas que se comen tus clientes antes de que lleguen.*

#### Dolor 1 — *"La Página Fantasma"*
Tienes un sitio, sí. Pero nadie lo recuerda. Carga lento, parece de 2014 y cuando alguien lo visita desde el celular las letras se rompen. La gente entra, mira un segundo y se va. No hay segunda oportunidad.

#### Dolor 2 — *"El Freelancer que Desapareció"*
Pagaste $300 hace un año. Te entregaron una plantilla recoloreada de Wix. Ahora necesitas cambiar un teléfono y no encuentras al freelancer. El sitio sigue ahí, intocable, congelado en el tiempo, mientras tu negocio cambia.

#### Dolor 3 — *"El Hackeo Silencioso"*
Una mañana entras a tu propio sitio y aparece publicidad china, redirecciones extrañas, advertencias rojas de Google. Tu hosting compartido fue vulnerado. Recuperar la reputación en buscadores cuesta entre 3 y 6 semanas. La inversión en pauta se evaporó.

> *(Cada dolor se acompaña de una ilustración estilo grabado victoriano sutilmente animada — humo dorado disolviéndose al hacer hover).*

---

### El Círculo de Oro (Acto 4)

**Eyebrow:** `NUESTRO MÉTODO`

**H2:** *Tres preguntas antes de tocar el código.*

#### EL PORQUÉ
> Porque tu marca merece una **puerta de entrada digna**. Una landing page no es decoración: es la primera conversación que tu negocio tiene con desconocidos. Si esa conversación es genérica, fría o lenta, pierdes — y ni siquiera te enteras. Layevska existe para que esa primera conversación se sienta como entrar a un lugar donde alguien te estaba esperando.

#### EL CÓMO
> Arquitectura **serverless en Amazon Web Services**: sin base de datos que vulnerar, sin WordPress, sin plugins desactualizados. Cada landing es un conjunto de archivos estáticos distribuidos por CDN global, blindados con SSL automático. Combinamos esa infraestructura militar con un proceso de diseño que parte de un Brief Estratégico de 12 preguntas: nada se diseña sin entender primero quién es tu cliente ideal y qué objeciones tiene.

#### EL QUÉ
> Una landing page única, móvil-primero, con copywriting AIDA/PAS calibrado para el mercado costarricense, integración nativa con WhatsApp, SEO local, certificado SSL, hosting y dominio incluidos el primer año. Dos modelos a elegir: **Estándar** (estática, $875) o **Premium** (con animaciones cinematográficas, $1,000).

---

### Las Dos Llaves (Acto 5)

**Eyebrow:** `ELIGE TU LLAVE`

**H2:** *Dos modelos. Una misma artesanía.*

**Subtítulo:** *Ambas llaves abren la misma puerta: la de tu próximo cliente. La diferencia está en cómo se siente girar la cerradura.*

#### Llave de Bronce — Modelo Estándar
**Precio:** `$875 USD` *pago único*
**Cuota mensual:** `$120 USD/mes` (desde el mes 2)
**Tiempo de entrega:** 3 a 5 días hábiles

Landing page profesional, estática, optimizada y lista para convertir. Ideal para profesionales independientes, consultorios y PYMEs que necesitan una presencia digital sólida sin complicaciones.

**Incluye:** Brief estratégico · Copywriting AIDA/PAS · Diseño UI/UX a la medida · Hosting AWS y dominio .com (primer año) · SSL global · Integración WhatsApp · SEO local básico.

`Elegir Bronce →`

#### Llave de Oro — Modelo Premium
**Precio:** `$1,000 USD` *pago único*
**Cuota mensual:** `$120 USD/mes` (desde el mes 2)
**Tiempo de entrega:** 5 a 7 días hábiles

Todo lo del Modelo Estándar **más** animaciones cinematográficas, transiciones suaves y micro-interacciones que comunican sofisticación. Ideal para marcas de alto ticket, despachos legales, clínicas estéticas o servicios premium donde la primera impresión vale miles de dólares.

`Elegir Oro →`

---

### Cómo Trabajamos — Timeline (Acto 6)

**Eyebrow:** `EL VIAJE`

**H2:** *De la primera conversación a tu landing publicada en 7 días.*

1. **Día 0 — El Primer Susurro.** Nos escribes por WhatsApp. Respondemos en menos de 24 horas con una llamada de 15 minutos para entender tu negocio.
2. **Día 1 — El Pergamino.** Te enviamos un formulario de 12 preguntas estratégicas. Esto define el tono, el cliente ideal y el estilo visual.
3. **Día 3-5 — La Vista Previa.** Te entregamos una landing funcional, con tu copy real y tus imágenes propuestas. No es una maqueta — es la página real, en un enlace privado de staging.
4. **Día 5-6 — El Pacto.** Si apruebas, procesas el pago único ($875 o $1,000) por Sinpe Móvil, transferencia o PayPal.
5. **Día 6-7 — El Lanzamiento.** Registramos tu dominio, activamos SSL, conectamos Analytics y publicamos. Tu landing abre sus puertas al mundo.
6. **Mes 2 en adelante — La Custodia.** Comienza la cuota fija de $120/mes que cubre hosting, dominio, monitoreo, backups, soporte WhatsApp y hasta 2 actualizaciones mensuales.

---

### La Forjadora (Acto 7 — Equipo)

**Eyebrow:** `QUIÉN ESTÁ DETRÁS`

**H2:** *La mano que talla cada llave.*

**Body (placeholder marcado — REEMPLAZAR):**
> Layevska es un estudio liderado por **[NOMBRE DEL FUNDADOR/A]**, diseñadora y desarrolladora costarricense con experiencia en branding digital, arquitectura cloud y copywriting de conversión. Antes de fundar el estudio trabajó en **[EXPERIENCIA PREVIA — REEMPLAZAR]** y se especializó en convertir negocios pequeños en marcas que se sienten grandes. Cree firmemente que las herramientas más sofisticadas deberían estar al servicio de los detalles más pequeños.

> *"No me interesa hacer cien páginas iguales. Me interesa hacer la tuya."*
> — [Nombre]

*(Tratamiento de foto: retrato en blanco y negro con grano sutil, viñeta dorada en bordes, posproducción cinematográfica estilo Del Toro — iluminación lateral cálida, expresión seria pero amable).*

---

### Cuestionario Interactivo (Acto 8)

**Eyebrow:** `DESCUBRE QUÉ LLAVE NECESITAS`

**H2:** *Responde tres preguntas y te decimos qué modelo encaja mejor con tu negocio.*

**Pregunta 1:** *¿Qué tan importante es la primera impresión visual para tu cliente?*
- Es lo primero que evalúan antes de contactarme.
- Importa, pero la información clara pesa más.
- Mi cliente decide por referencia, no por visual.

**Pregunta 2:** *¿Cuánto vale para ti un cliente nuevo, en promedio?*
- Más de $1,000.
- Entre $200 y $1,000.
- Menos de $200.

**Pregunta 3:** *¿Cuándo necesitas tener la landing publicada?*
- Esta semana.
- En las próximas 2 semanas.
- Cuando esté lista, sin prisa.

**Resultado (calculado en cliente):**
- Mayoría primera opción → *"Te recomendamos la **Llave de Oro** (Modelo Premium $1,000). Tu negocio vive de la primera impresión."*
- Mayoría segunda opción → *"Te recomendamos la **Llave de Bronce** (Modelo Estándar $875). Funcionalidad sólida sin pagar de más."*
- Resultado mixto → *"Hablemos por WhatsApp. Te ayudamos a decidir sin compromiso."*

---

### Voces de la Cofradía (Acto 9 — Testimonios)

**Eyebrow:** `LO QUE DICEN`

**H2:** *Negocios que ya pasaron por el taller.*

> ⚠️ **Placeholders marcados — reemplazar con testimonios reales una vez se tengan los primeros clientes.**

**Testimonio 1**
> *"En tres días pasé de tener una página fea de Wix a una landing que mis pacientes mencionan en las consultas. La diferencia se nota incluso en el tipo de cliente que ahora llega."*
> — **Dra. [Nombre Apellido]** · Clínica dental · Vía WhatsApp

**Testimonio 2**
> *"Lo que más valoro es que después del lanzamiento no me sentí abandonada. Cada vez que necesito un cambio escribo por WhatsApp y al día siguiente está hecho."*
> — **[Nombre Apellido]** · Consultora financiera · Vía Google Reviews

**Testimonio 3**
> *"Me cotizaron tres agencias antes. Layevska era la única que me explicó por qué cobraba lo que cobraba, sin venderme paquetes mensuales eternos. Total claridad."*
> — **[Nombre Apellido]** · Bufete legal · Vía LinkedIn

*(UI: burbujas con borde dorado fino, estrellas en oro líquido, scroll horizontal en móvil con snap, hover desaceleración en desktop).*

---

### Mantenimiento Honesto (Acto 10)

**Eyebrow:** `SIN LETRA PEQUEÑA`

**H2:** *Por qué cuesta $120 al mes. Desglosado.*

> No creemos en suscripciones inflables. Estos son los conceptos exactos que cubre tu cuota mensual a partir del segundo mes:

| Concepto | Monto | Para qué sirve |
|---|---|---|
| Hosting AWS (S3 + CloudFront) | $20 | Almacenamiento y distribución CDN global |
| Dominio .com (prorrateado) | $2 | Renovación anual repartida mensualmente |
| Backups diarios | $5 | Copias automáticas con retención de 30 días |
| Monitoreo 24/7 | $5 | Alertas si la página cae o se ralentiza |
| Parches de seguridad | $8 | Actualizaciones preventivas AWS + SSL |
| Actualizaciones de contenido | $40 | Hasta 2 cambios menores al mes |
| Soporte WhatsApp prioritario | $25 | Respuesta en menos de 24 h |
| Reporte mensual de tráfico | $15 | Informe consolidado de visitas y SEO |
| **TOTAL** | **$120 USD** | **Predecible. Sin sorpresas.** |

> *Si cancelas la cuota mensual, la landing deja de estar publicada (porque dejamos de cubrir hosting y dominio). Puedes reactivar en cualquier momento.*

---

### Preguntas Frecuentes (Acto 11)

**H2:** *Lo que normalmente nos preguntan.*

1. **¿Tengo que pagar antes de ver mi landing?**
   No. Te entregamos primero una vista previa funcional con tu copy real y tus imágenes. Solo pagas si aprobás.

2. **¿Qué pasa si quiero cambiar algo después del lanzamiento?**
   Tu cuota mensual incluye hasta 2 actualizaciones menores al mes. Para rediseños mayores, cotizamos aparte.

3. **¿El dominio queda a mi nombre?**
   Sí. Layevska lo registra y administra, pero el dominio queda legalmente a nombre de tu negocio.

4. **¿Funciona si mi público está fuera de Costa Rica?**
   Sí. La arquitectura AWS distribuye el sitio globalmente. El copywriting puede adaptarse a cualquier mercado hispanohablante.

5. **¿Por qué no usan WordPress?**
   Porque el 94% de los hackeos a sitios pequeños explotan vulnerabilidades de WordPress y sus plugins. Layevska usa arquitectura serverless: sin base de datos, sin admin, sin superficie de ataque.

6. **¿Qué pasa si después de un año decido cambiar todo el diseño?**
   Cotizamos un rediseño nuevo (probablemente entre $500 y $800 dependiendo del alcance). La cuota mensual no incluye rediseños completos.

---

### CTA Final (Acto 12)

**(Fondo midnight con halo dorado central, tipografía Cinzel a gran escala)**

**H2:**
> **¿Listo para forjar tu llave?**

**Subtítulo:**
> *Te respondemos en menos de 24 horas hábiles. Sin formularios eternos, sin cotizaciones de tres páginas. Un mensaje, una conversación, una decisión.*

**CTA primario:**
`Escribir por WhatsApp →`

**CTA secundario (abre formulario):**
`Solicitar cotización por correo`

**Formulario embebido (campos mínimos):**
- Nombre
- WhatsApp
- ¿Qué hace tu negocio? (textarea breve)
- Modelo de interés (radio: Estándar / Premium / Aún no sé)
- Botón: `Enviar mensaje`

> El formulario debe estar conectado a Formspree o Resend (sin credenciales hardcoded). Hasta tener correo definitivo, el botón abre `wa.me/50687518441` con mensaje pre-cargado.

---

## 6. Dirección de Animación (Framer Motion + GSAP donde aplique)

### Principios generales
- **Magia Disney 2000s:** las cosas no "aparecen", **emergen**. Curvas de ease tipo `cubic-bezier(0.34, 1.56, 0.64, 1)` para overshoots delicados.
- **Disciplina de performance:** ninguna animación que toque `layout`. Solo `transform`, `opacity`, `filter`. 60fps obligatorios en mobile mid-range.
- **Respeto a `prefers-reduced-motion`:** todas las animaciones tienen versión simplificada.

### Animaciones específicas por acto

| Acto | Animación | Implementación |
|---|---|---|
| Hero | Polvo dorado flotando en canvas + fade-in escalonado del título letra por letra | `Framer Motion` + `useReducedMotion` |
| Manifiesto | Texto que se "escribe" como tinta apareciendo | `<motion.span>` con `stagger` por palabra |
| Dolores | Cards alternando entrada desde izquierda/derecha con sombra de humo dorado | `whileInView` + `viewport: { once: true, margin: "-100px" }` |
| Círculo de Oro | Tres círculos concéntricos que se dibujan con scroll | `GSAP ScrollTrigger` con `stroke-dasharray` |
| Dos Llaves | Cards con elevación 3D suave al hover (estilo selección de personaje) | `whileHover` + `rotateY/perspective` |
| Timeline | Línea dorada vertical que se "dibuja" a medida que haces scroll | `GSAP` con `strokeDashoffset` ligado a scroll |
| Forjadora | Retrato con parallax sutil + viñeta animada | `useScroll` + `useTransform` |
| Cuestionario | Stepper con transición de slide horizontal y micro-bounce | `AnimatePresence` con `mode="wait"` |
| Testimonios | Scroll horizontal con snap + hover desaturación inversa | CSS scroll-snap + `whileHover` |
| Mantenimiento | Filas de tabla que aparecen una por una con fade | `staggerChildren: 0.05` |
| FAQ | Accordion con expansión `height: auto` + ícono rotatorio | `motion.div` `animate={{ height }}` |
| CTA final | Botón con "respiración" lenta + halo dorado pulsante | `animate={{ scale: [1, 1.02, 1] }}` loop |

---

## 7. SEO Técnico y Local

### Meta tags base

```html
<title>Layevska Web Design · Landing pages serverless en Costa Rica desde $875</title>
<meta name="description" content="Estudio costarricense especializado en landing pages premium para PYMEs. Diseño artesanal, AWS serverless, entrega en 3-7 días. WhatsApp +506 8751-8441." />
<meta property="og:title" content="Layevska Web Design · Landing pages que convierten" />
<meta property="og:description" content="Dos modelos: Estándar $875 o Premium $1,000. Hosting, dominio y mantenimiento incluidos." />
<meta property="og:image" content="/og/layevska-cover.jpg" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_CR" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://layevska.com/" />
```

### Schema Markup (JSON-LD) — `LocalBusiness` + `Service`

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Layevska Web Design",
  "description": "Estudio costarricense de diseño y desarrollo de landing pages premium con arquitectura serverless AWS.",
  "image": "https://layevska.com/og/layevska-cover.jpg",
  "telephone": "+506 8751-8441",
  "areaServed": {
    "@type": "Country",
    "name": "Costa Rica"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CR",
    "addressRegion": "San José"
  },
  "priceRange": "$875–$1,000 USD pago único · $120/mes mantenimiento",
  "url": "https://layevska.com",
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Modelos de landing page",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Modelo Estándar",
        "price": "875",
        "priceCurrency": "USD",
        "description": "Landing page artesanal sin animaciones, hosting AWS y dominio incluidos."
      },
      {
        "@type": "Offer",
        "name": "Modelo Premium",
        "price": "1000",
        "priceCurrency": "USD",
        "description": "Landing page con animaciones cinematográficas, hosting AWS, dominio y mantenimiento primer mes."
      }
    ]
  }
}
```

### Keywords prioritarias (clusters)

- **Primarias:** *landing page Costa Rica · diseño web San José · landing pages para PYMEs · web premium Costa Rica*
- **Long tail:** *landing page para clínica dental Costa Rica · web para abogados San José · página web serverless AWS · diseño web sin WordPress*
- **Geolocalizadas:** *diseño web Escazú · landing page Heredia · web profesional Curridabat*

### Core Web Vitals — objetivos

- LCP < 1.8s · CLS < 0.05 · INP < 200ms
- Lazy loading nativo (`loading="lazy"`) en todas las imágenes excepto hero
- `<img>` con `width`/`height` explícitos para evitar CLS
- Fonts con `font-display: swap`
- Hosting recomendado: **AWS S3 + CloudFront** (coherente con la propia oferta de la marca) o **Cloudflare Pages**

---

## 8. Stack y Estructura del Proyecto

```
layevska-web-design/
├── public/
│   ├── og/
│   │   └── layevska-cover.jpg
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── logos/
│   │   │   ├── logo-main.svg
│   │   │   ├── logo-dark.svg
│   │   │   └── icon-mark.svg
│   │   ├── images/
│   │   │   ├── hero-dust.webp
│   │   │   ├── pain-1-ghost.webp
│   │   │   ├── pain-2-freelancer.webp
│   │   │   ├── pain-3-hack.webp
│   │   │   └── founder-portrait.webp
│   │   └── icons/
│   │       └── (Lucide React inline)
│   ├── components/
│   │   ├── ui/                  # primitives (Button, Card, Section)
│   │   ├── Hero.tsx
│   │   ├── Manifesto.tsx
│   │   ├── PainPoints.tsx
│   │   ├── GoldenCircle.tsx
│   │   ├── TwoKeys.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── Founder.tsx
│   │   ├── Quiz.tsx
│   │   ├── Testimonials.tsx
│   │   ├── MaintenanceBreakdown.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── ContactForm.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   └── useScrollProgress.ts
│   ├── lib/
│   │   ├── analytics.ts         # placeholder GA4
│   │   ├── validators.ts        # zod schemas
│   │   └── seo.ts               # helpers de meta tags
│   ├── pages/
│   │   └── index.tsx            # SPA principal
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

**Dependencias principales:**
- `react@18`, `react-dom@18`, `react-router-dom@6` (solo si se decide multi-page)
- `framer-motion@11`, `gsap@3` (con `ScrollTrigger`)
- `tailwindcss@3`, `autoprefixer`, `postcss`
- `lucide-react@latest`
- `zod` (validación de formularios)
- `vite@5`, `typescript@5`
- Dev: `@types/react`, `eslint`, `prettier`, `prettier-plugin-tailwindcss`

---

## 9. Ciberseguridad y Buenas Prácticas

- **Sanitización de inputs:** Validación con `zod` en cliente y en el endpoint Formspree/Resend.
- **Headers de seguridad recomendados** (configurar en CloudFront/Cloudflare):
  - `Content-Security-Policy: default-src 'self'; img-src 'self' data:; ...`
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Links externos:** `rel="noopener noreferrer"` en todos los `<a target="_blank">`.
- **Variables de entorno:** `VITE_*` solo para llaves públicas. Endpoints sensibles van detrás de funciones serverless.
- **Honeypot anti-spam:** campo invisible en el formulario que si se rellena descarta el envío.

---

## 10. Conversión y CTAs

Distribución milimétrica de llamados a la acción siguiendo la temperatura del visitante:

- **Fría (Acto 1):** "Forjar mi landing page" + "Conocer los dos modelos" (botón outline).
- **Tibia (Acto 5):** "Elegir Bronce" / "Elegir Oro" (decisión de modelo).
- **Tibia (Acto 8):** "Descubrir mi modelo" (quiz interactivo).
- **Caliente (Acto 12):** "Escribir por WhatsApp" + "Solicitar cotización por correo".
- **Persistente:** Botón WhatsApp flotante (esquina inferior derecha, halo dorado pulsante sutil).

Mensaje pre-cargado del botón WhatsApp:
> *"Hola, vi su página web y me interesa obtener información sobre sus servicios."*

---

## ⚠️ AUDITORÍA DE DATOS PENDIENTES

Antes del despliegue final necesitamos que tú nos proveas manualmente lo siguiente, ya que no existen aún redes sociales activas de Layevska Web Design ni datos públicos extraíbles:

### Datos críticos para texto

1. **Nombre legal de la fundadora/o** y mini biografía (3-4 frases) para el Acto 7 — La Forjadora.
2. **Correo electrónico corporativo** definitivo (sugerido: `hola@layevska.com` o `contacto@layevska.com`). Por ahora todos los CTAs apuntan solo a WhatsApp.
3. **Dominio definitivo** (sugerencia: `layevska.com` · alternativas: `layevskadesign.com`, `layevska.cr`).
4. **Ubicación específica** dentro de la GAM (cantón principal) para mejorar SEO local.
5. **3 testimonios reales** con nombre, profesión y plataforma de origen (Google, WhatsApp, LinkedIn). Mientras tanto los testimonios están marcados como placeholders.
6. **Términos y condiciones** y **Política de privacidad** completas (necesarias para el footer y para LGPD/cumplimiento básico).

### Recursos gráficos a producir

7. **Logotipo principal** en SVG (claro y oscuro) — Layevska no tiene aún identidad visual definitiva.
8. **Favicon** y **Apple Touch Icon** (192×192, 512×512).
9. **Imagen Open Graph** (1200×630) para previews en WhatsApp, Twitter y LinkedIn.
10. **Retrato fotográfico de la fundadora** (recomendado: estudio, fondo neutro oscuro, iluminación lateral cálida para posproducción gótica).
11. **3 ilustraciones de los Dolores** (estilo grabado victoriano con paleta dorada) — pueden generarse con IA siguiendo prompts específicos que entregamos en la siguiente fase.

### Datos comerciales y legales

12. **Métodos de pago confirmados** (Sinpe Móvil número, cuenta bancaria, PayPal email/usuario).
13. **Razón social** y **cédula jurídica** (si aplica) para facturación electrónica.
14. **Política de reembolsos** o garantía explícita (si la hay).
15. **¿Habrá redes sociales al lanzar?** Si sí: usuarios de Instagram, Facebook y LinkedIn para incluir en footer y `sameAs` del Schema.

### Decisiones pendientes de producto

16. **¿Se ofrecerán descuentos por pago anual** de la cuota mensual (ej. $1,200 al pagar el año por adelantado)?
17. **¿Existe un programa de referidos** que merezca su propia mención en la landing?
18. **¿Se aceptarán proyectos fuera de Costa Rica** desde el día uno?

---

## Próximo paso sugerido

Cuando apruebes este concepto (o me digas qué cambiar), procedo a generar:

1. El **proyecto React + Vite + TypeScript completo** con todos los componentes ya descritos.
2. Configuración de Tailwind con los tokens de color y tipografía.
3. Animaciones Framer Motion / GSAP implementadas.
4. Schema JSON-LD listo para insertar.
5. README con instrucciones de despliegue en AWS S3 + CloudFront.

> *Dime si la dirección general te resuena, qué actos te gustaría matizar y si hay placeholders que prefieres definir antes de pasar al código.*
