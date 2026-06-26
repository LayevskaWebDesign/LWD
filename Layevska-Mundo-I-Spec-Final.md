# LAYEVSKA WEB DESIGN
## Refinamiento de dirección de arte + Especificación del Mundo I

> Esta es la **biblia v2**. Refina tres decisiones: los mundos no tienen nombres literales, las paletas conversan entre ellas como una sinfonía, y cada mundo tiene una emoción nuclear que justifica todo lo demás.

---

# PARTE I · LAS TRES NUEVAS REGLAS

## 1. Los mundos no se nombran. Se sienten.

Olvidá "La Bóveda", "El Manuscrito", "El Pacto". Esos eran nombres internos de trabajo que se filtraron a la propuesta. **El usuario nunca verá un letrero que le diga qué mundo es**.

Cada mundo se identifica por:
- **Un número romano** discreto (I · II · III...) en Cinzel muy pequeño, esquina superior izquierda, opacidad 0.4 — apenas un cintillo cinematográfico
- **Su atmósfera total** — colores, luz, textura, sonido, movimiento — que habla por sí sola
- **Un fragmento poético opcional** de máximo 3 palabras como guía emocional (no nombre): "el comienzo", "donde nace", "cómo trabajamos"

**Internamente** (en el código y entre nosotros) los podemos llamar como queramos para organizarnos. Pero **el usuario solo siente la atmósfera, nunca lee un título de mundo**.

### Ejemplo concreto del Mundo I
- Esquina superior izquierda: `I` en Cinzel 11px, color `#C9A961` con 40% opacity
- Justo debajo, otra línea: `el comienzo` en Cormorant Italic 10px, color ivory con 30% opacity
- Eso es todo. La esfera dorada flotando habla por sí sola.

---

## 2. Los mundos son hermanos, no extraños.

### El ancla constante
**Navy + Dorado** vive en los 8 mundos. Es la columna vertebral cromática. Nadie escapa.

### El acompañante emocional
Cada mundo suma **UN tono más** que define su personalidad. Los 8 acompañantes están elegidos para formar un círculo cromático armónico — si los ves uno al lado del otro, **son una sinfonía**, no un collage.

| Mundo | Ancla | + Acompañante | Hex acompañante | Emoción nuclear |
|-------|-------|---------------|-----------------|------------------|
| **I** | Navy + Gold | **Cosmic Cyan** (frío místico) | `#9CC4D4` | **Asombro** |
| **II** | Navy + Gold | **Ember Warm** (cálido íntimo) | `#E8A87C` | **Intimidad** |
| **III** | Navy + Gold | **Pearl Silver** (frío contemplativo) | `#C5C8D6` | **Curiosidad** |
| **IV** | Navy + Gold | **Brass Patina** (mecánica viva) | `#7A8F6B` | **Confianza** |
| **V** | Navy + Gold | **Crimson Seal** (compromiso) | `#9C3A33` | **Compromiso** |
| **VI** | Navy + Gold | **Iridescent Aurora** (multi-tonal) | `linear blend` | **Juego** |
| **VII** | Navy + Gold | **Teal Mist** (submarino calmo) | `#7AAFB8` | **Calma** |
| **VIII** | Navy + Gold | **Ember Sunset** (despedida cálida) | `#D8835A` | **Promesa** |

### Por qué funciona la sinfonía
Los 8 acompañantes están **distribuidos en círculo cromático** con incrementos armónicos:
- I (cyan frío) → II (ember cálido) crea contraste de bienvenida-intimidad
- III (silver) → IV (brass) frío-cálido contemplativo
- V (crimson) es el clímax cromático en el medio del recorrido
- VI (iridescent) explota colores en el momento más juguetón
- VII (teal mist) baja la energía al ritmo del cierre
- VIII (ember sunset) cierra con el calor del comienzo invertido

### Continuidad visual
**El elemento de "tinta dorada"** aparece en cada transición — como un fluido conector que se filtra entre mundos. Los mundos son habitaciones distintas pero **el mismo oro líquido recorre los pasillos entre ellas**.

---

## 3. Cada mundo tiene UNA emoción que justifica todo.

| Mundo | Emoción nuclear | Cómo se siente |
|-------|------------------|----------------|
| I | **Asombro** | El usuario suelta el aire y piensa "esto no se parece a nada que haya visto" |
| II | **Intimidad** | Se inclina hacia adelante, escucha como si alguien le contara una historia personal |
| III | **Curiosidad** | Quiere tocar todo, explorar, hacer click en cada marco |
| IV | **Confianza** | "Ah, ahora entiendo cómo trabajan. Es serio. Es ordenado." |
| V | **Compromiso** | Lee con atención, sabe que aquí está la decisión |
| VI | **Juego** | Sonríe, juega, no se da cuenta que ya está calificando como lead |
| VII | **Calma** | Sus dudas se disuelven sin ruido |
| VIII | **Promesa** | Envía el formulario sintiendo que arrancó algo importante |

Esta tabla es la guía. Si alguna decisión técnica/visual no refuerza la emoción nuclear, se descarta — por linda que sea.

---

# PARTE II · PROPUESTA DE AUDIO

El audio bien hecho es lo que separa una landing premium de **una experiencia cinematográfica completa**. Pero mal hecho arruina todo. Por eso lo proponemos así:

## Filosofía del audio
- **Default OFF.** Respeto absoluto al usuario.
- **Toggle siempre visible** en el header (icono altavoz + tooltip "Activar sonido ambiente").
- **Volumen máximo bajo.** Si el usuario activa, escucha algo sutil, no un Netflix.
- **No es música.** Es **diseño sonoro narrativo** — atmósfera y micro-eventos.

## Capas de audio

### Capa 1 — Drone atmosférico (continua por mundo)
Cada mundo tiene un drone bajo único (~50-90Hz) que sostiene la atmósfera:
| Mundo | Drone |
|-------|-------|
| I | Drone cósmico profundo (60Hz + armónicos altos sutiles) |
| II | Crackle de chimenea + viento muy lejano |
| III | Sala de museo con eco sutil (silencio + susurros) |
| IV | Tic-tac de engranajes lento y constante |
| V | Sello de biblioteca cerrándose + papel ocasional |
| VI | Hum espacial + bleeps ambient |
| VII | Burbujas + caustics subacuáticos suaves |
| VIII | Crackle de vela + viento lejano (vuelve a empezar) |

### Capa 2 — Micro-eventos (gatillados por interacción)
- Hover sobre la esfera del Mundo I: "twinkle" cristalino agudo, 200ms
- Click sello del Mundo V: golpe sordo + lacre derramándose
- Pluma escribiendo en Mundo VIII: scratch de pluma sobre papel
- Configurador Mundo VI: bleeps suaves al añadir un astro

### Capa 3 — Transiciones entre mundos
Cada transición (las T1-T10) tiene un cue sonoro propio (max 1.5s):
- Particle Reform: shimmer ascendente
- Page Turn: papel volteándose
- Lens Flare: whoosh dorado
- Dolly Zoom: drone que se intensifica brevemente
- Etc.

## Recursos
- **Librería:** Howler.js (ligero, robusto)
- **Assets:** combinación de archivos `.webm` (mejor compresión) + fallback `.mp3`
- **Origen:** Freesound.org con licencia CC0 + procesamiento propio en Audacity
- **Peso total:** < 2 MB para los 8 drones + todos los micro-eventos

## Decisión que necesito de vos
Antes de codear el Mundo I, decime:
- ☐ Sí, incluí audio desde Mundo I
- ☐ Construilo primero sin audio. Lo agregamos en sprint final si vemos que aporta
- ☐ Audio sí, pero solo en transiciones (no drones continuos)

---

# PARTE III · MUNDO I · ESPECIFICACIÓN FINAL PARA CONSTRUIR

A partir de aquí, todo es para implementación. Lo que sigue es lo que necesita el dev para arrancar.

---

## 1 · Brief narrativo

> El usuario sale del preloader y cae dentro de un espacio infinito y oscuro donde flota **una esfera de oro líquido del tamaño de un puño**. La esfera respira, gira lentamente, refleja un cosmos que solo existe del lado interior. El usuario no sabe qué es Layevska todavía. Solo siente que entró a algún lugar serio, hermoso, cuidado al milímetro.
>
> Cuando empieza a mover el mouse, la esfera lo sigue como un imán suave. Cuando hace scroll, la cámara se aleja revelando que la esfera flota en un cuarto de paredes invisibles cubiertas de polvo dorado.
>
> Sobre la esfera, en Cinzel monumental, aparece su nombre — pero no como un letrero, sino emergiendo desde adentro como si la esfera misma lo escupiera. Después aparece una frase italic que da pista de lo que sigue. Y abajo, sin gritar, dos botones: uno dorado lleno (Cotizar) y uno outline (Conocer).

## 2 · Emoción nuclear · **ASOMBRO**

Todo decisión visual debe responder: ¿esto produce asombro silencioso o lo arruina?

## 3 · Paleta exacta del Mundo I

| Token | Hex | Uso |
|-------|-----|-----|
| `--world-1-bg-deep` | `#070F1A` | Fondo absoluto (cosmos) |
| `--world-1-bg` | `#0E2435` | Cuerpo de la atmósfera |
| `--world-1-bg-mid` | `#1C4058` | Niebla volumétrica densa |
| `--world-1-bg-far` | `#2A5775` | Niebla volumétrica lejana |
| `--world-1-cosmic-cyan` | `#9CC4D4` | Acento emocional (luz de polvo cósmico) |
| `--world-1-cosmic-cyan-soft` | `rgba(156,196,212,0.08)` | Brumas |
| `--gold-primary` | `#C9A961` | Esfera principal |
| `--gold-bright` | `#DDC289` | Highlights esféricos |
| `--gold-phosphor` | `#FFDD7A` | Glow emisivo (bloom) |
| `--gold-deep` | `#7A6020` | Sombras de profundidad |
| `--ivory-text` | `#FAF7F2` | Texto principal |
| `--ivory-soft` | `rgba(250,247,242,0.72)` | Texto secundario |

## 4 · Atmósfera completa

| Capa | Composición | Notas |
|------|-------------|-------|
| **Fondo base** | radial gradient: `#070F1A` (centro) → `#0E2435` (bordes) | El centro es ligeramente más oscuro para "hundir" la esfera |
| **Niebla volumétrica** | 3 capas de noise en parallax (lento, medio, rápido) | Sensación de profundidad. Sin esto el espacio se siente plano |
| **Polvo cósmico** | ~600 partículas Phosphor Gold + ~200 Cosmic Cyan | Las cyan son ~25% del total, casi imperceptibles pero clave |
| **Esfera central** | IcosahedronGeometry(2, 64) deformada por noise 4D | Diámetro: ~24% del viewport-min |
| **Material esfera** | MeshPhysicalMaterial: transmission 0.9 · IOR 1.5 · thickness 1.2 · iridescence 0.4 · emissive `--gold-primary` @ 0.25 | Tiene que parecer **oro vivo dentro de cristal** |
| **Iluminación** | Key: directional dorada desde 30° NE · Rim: cyan desde NW · Fill: ivory desde abajo · Ambient muy baja (~0.15) | El rim cyan es lo que crea el toque "místico". Sin él se ve solo dorada. |
| **Bloom** | UnrealBloomPass: strength 0.85 · radius 0.55 · threshold 0.32 | El bloom es lo que hace que el dorado se sienta luminoso, no pintado |
| **Vignette** | sutil oscurecimiento en bordes para enfocar el centro | Como una lente de cine real |
| **Film grain** | 0.18 de intensidad, animado | Le quita la sensación "plástica" del 3D digital |

## 5 · Composición y layout

```
                                I
                          el comienzo

                  [Estudio costarricense de
                  landing pages premium]

                              ◯
                          (esfera)
                              ◯

                   LAYEVSKA WEB DESIGN

                       Diseño que se
                  siente hecho a mano.

                 [Cotizar]    [Conocer]

                  ↓ scroll cinematográfico ↓
```

**Coordenadas exactas (desktop 1440×900):**
- Cintillo `I · el comienzo`: top 24px, left 32px
- Microetiqueta superior `Estudio costarricense...`: top 140px, centrada
- Esfera: centrada vertical y horizontalmente, ocupa ~360×360px
- Título `LAYEVSKA WEB DESIGN` en Cinzel 56px: 80px debajo de la esfera, centrado
- Subtítulo italic Cormorant 22px: 24px debajo del título
- CTAs: 48px debajo del subtítulo, centrados con gap 16px
- Indicador scroll `↓`: bottom 32px, centrado, opacidad pulsante

**Coordenadas mobile (375×667):**
- Esfera: 60% width, centrada
- Todo más compacto, mismo orden vertical
- CTAs apilados verticalmente full-width

## 6 · Coreografía paso a paso

### Fase 0 · Llegada (0-1.2s después del preloader)
- Las partículas del preloader se reagrupan en torno al centro
- La esfera emerge desde un punto microscópico y crece a su tamaño final con `power3.out`
- Audio (si activado): drone cósmico arranca al 30% volumen

### Fase 1 · Manifestación (1.2-2.8s)
- Sobre la esfera aparecen líneas finas doradas que la "miden" — como compás de arquitecto
- Esas líneas se disuelven
- El nombre LAYEVSKA WEB DESIGN se forma carácter por carácter desde adentro de la esfera, sale flotando, se asienta en su posición
- Stagger de 60ms entre letras

### Fase 2 · Respiración (continuo desde 2.8s)
- La esfera respira: scale 0.97 ↔ 1.03 cada 4s con sine ease
- Las partículas hacen drift orgánico hacia arriba muy lento
- Subtítulo italic aparece con typing effect, 35ms por letra
- CTAs hacen fade-in suave

### Fase 3 · Interactividad ambiental (continuo)
- La cámara tiene parallax sutil hacia el cursor (max ±8° en cada eje)
- La esfera **siempre persigue al cursor** con lerp 0.06 (visible pero relajado)
- Las partículas cyan brillan más cuando el cursor pasa cerca

### Fase 4 · Despedida (scroll)
- En `scroll-y > 100px`: la cámara empieza un dolly out
- En `scroll-y > 300px`: la esfera empieza a alejarse y a desintegrarse en partículas
- En `scroll-y > 500px`: las partículas se reorganizan para formar el siguiente mundo (transición T6 · Particle Reform)

## 7 · Interactividad detallada

| Gesto | Reacción |
|-------|----------|
| **Mouse hover sobre esfera** | El cursor se vuelve un punto dorado más grande con anillo pulsante. La esfera intensifica su iridescencia. Twinkle audio si está activo. |
| **Click sostenido sobre esfera (1.5s)** | La esfera "crackea" como vidrio: aparecen fisuras doradas. Si sostenés más, se rompe y revela un mensaje secreto: *"Diseñado con paciencia obsesiva. Si llegaste aquí, sos del 1%. Hablame y te bajo 5%. — Miah & Bryan"* |
| **Click en "Cotizar"** | Botón hace pulse + transition liquid ink hacia el Mundo VIII (contacto) |
| **Click en "Conocer"** | Smooth scroll hacia el Mundo II |
| **Doble click en cualquier zona** | Easter egg: la esfera gira a 360° rápido + chispa |
| **Scroll wheel** | Inicia transición de despedida |
| **Cursor inactivo > 6s** | La esfera empieza a flotar hacia un punto random, como si "se aburriera" |
| **Tecla `S`** | Toggle audio on/off |
| **Tecla `Escape`** | Vuelve al inicio del mundo |

## 8 · Stack técnico exacto

### Dependencias a sumar (a las que ya tenemos)
```json
{
  "three": "^0.165.0",
  "@react-three/fiber": "^8.16.8",
  "@react-three/drei": "^9.108.0",
  "@react-three/postprocessing": "^2.16.2",
  "gsap": "^3.12.5",
  "split-type": "^0.3.4",
  "howler": "^2.2.4"
}
```

### Estructura de archivos del Mundo I
```
src/
└── worlds/
    └── one/
        ├── WorldOne.tsx              ← componente principal del mundo
        ├── scene/
        │   ├── Sphere.tsx            ← esfera 3D
        │   ├── ParticleField.tsx     ← partículas cosmic + cyan
        │   ├── VolumetricFog.tsx     ← niebla 3 capas
        │   ├── Lighting.tsx          ← rig de luces
        │   └── PostFX.tsx            ← bloom + vignette + grain
        ├── ui/
        │   ├── ChapterMark.tsx       ← "I · el comienzo"
        │   ├── Title.tsx             ← LAYEVSKA WEB DESIGN
        │   ├── Subtitle.tsx          ← typing italic
        │   ├── CTAs.tsx              ← 2 botones
        │   └── ScrollHint.tsx        ← flecha pulsante
        ├── interactions/
        │   ├── useSphereCursor.ts    ← cursor + lerp esfera hacia mouse
        │   ├── useCrackEasterEgg.ts  ← click sostenido
        │   └── useChapterAudio.ts    ← drone + twinkles
        ├── shaders/
        │   ├── sphere.vert.glsl      ← deformación noise 4D
        │   └── particle.frag.glsl    ← shimmer dorado
        └── styles.css                 ← variables locales + animations
```

### Variables CSS extendidas (sumar a styles.css global)
```css
:root {
  /* Mundo I */
  --w1-bg-deep: #070F1A;
  --w1-bg: #0E2435;
  --w1-bg-mid: #1C4058;
  --w1-bg-far: #2A5775;
  --w1-cosmic-cyan: #9CC4D4;
  --w1-cosmic-cyan-soft: rgba(156, 196, 212, 0.08);
  --gold-phosphor: #FFDD7A;
  --gold-deep: #7A6020;
}
```

### Configuración del Canvas (react-three-fiber)
```typescript
<Canvas
  camera={{ position: [0, 0, 6], fov: 50 }}
  gl={{
    antialias: true,
    toneMapping: ACESFilmicToneMapping,
    toneMappingExposure: 1.15,
    alpha: false,
  }}
  dpr={[1, 1.8]}                  // capado para performance
  shadows={false}                  // no usamos shadows reales (caro), simulamos con materiales
/>
```

## 9 · Performance / mobile / a11y · checklist

### Performance
- [x] Mobile detect → si `window.innerWidth < 768`: usar versión simplificada (esfera CSS 3D, sin Three.js)
- [x] DPR capado a 1.8 incluso en retina
- [x] Bloom solo en desktop
- [x] Particle count: 600 desktop / 200 mobile
- [x] Texturas comprimidas KTX2 si sumamos algún cubemap
- [x] Lazy load de Three.js (carga después de que el DOM principal pintó)

### Mobile fallback (sin Three.js)
- Esfera: `<div>` con gradient radial dorado + box-shadow gold-glow + `@keyframes` respiración
- Partículas: 30 `<span>` con animation float
- Niebla: gradient overlay con noise SVG
- Sigue siendo hermoso, pero pesa 95% menos

### Reduced motion
- Sin parallax, sin perseguir al cursor
- Esfera estática
- Partículas estáticas
- Solo fade-in al cargar y nada más

### Accesibilidad
- Toda la info textual está en el DOM real (no solo en WebGL canvas)
- Canvas tiene `aria-hidden="true"` (es decorativo)
- Los CTAs son `<button>` o `<a>` reales con focus visible custom
- Skip-to-content link en la primera tab
- Audio toggle se anuncia a screen readers

## 10 · Plan de ejecución del Mundo I · 5 días

| Día | Entregable |
|-----|------------|
| **1** | Setup react-three-fiber + Canvas + escena básica + cámara + luces. La esfera aparece sin materiales finos. |
| **2** | Material físico de la esfera + bloom + vignette + film grain. Empieza a verse "premium". |
| **3** | ParticleField con cosmic + cyan + drift orgánico. Niebla volumétrica 3 capas. |
| **4** | UI completa (ChapterMark, Title con typing, Subtitle, CTAs, ScrollHint). Coreografía Fase 0-2 perfecta. |
| **5** | Interactividad (cursor, crack easter egg, fase de despedida, transición T6). Audio si lo activamos. Polish, accesibilidad, mobile fallback. QA con vos. |

---

# PARTE IV · LO QUE NECESITO DE VOS PARA EMPEZAR

Antes de tocar código, necesito tu OK en estos 4 puntos:

1. **¿La identificación "I · el comienzo" te gusta** como cintillo discreto, o preferís solo el número romano, o sin nada?
2. **¿El mensaje secreto del easter egg** te resuena, o querés que diga otra cosa?
3. **¿Audio sí o no en el Mundo I?** (ver propuesta arriba)
4. **¿El plan de 5 días te calza** o querés que lo aceleremos/desaceleremos?

Cuando confirmes, arranco el Día 1 inmediatamente.

---

**Layevska Web Design** · Miah Layevska & Bryan Barrantes
San José, Costa Rica · LayevskaWebDesign@gmail.com · +506 8751-8441
