# LAYEVSKA WEB DESIGN
## Dirección de arte y desarrollo creativo — Experiencia inmersiva
### Propuesta integral · Mayo 2026

> Miah Layevska & Bryan Barrantes — propuesta de re-arquitectura visual para llevar la landing actual de "muy buena" a **carta de presentación irrepetible**.

---

## 0 · NORTH STAR

> **"Layevska es un atelier-laboratorio donde el oficio artesanal del siglo XVII (relojería, encuadernación, alquimia, cartografía) se encuentra con la sintaxis digital del siglo XXII (holografía, partículas, materia programable)."**

Esta tensión —**ornamento barroco × geometría cuántica**— es la única regla. Cada sección será un cuarto distinto dentro de ese atelier. El usuario no hace scroll por una página: **camina por las habitaciones de un estudio que solo existe digitalmente**.

### Las tres reglas de oro de la experiencia
1. **El navy es el espacio negativo del cosmos.** El dorado es lo que el ojo persigue.
2. **El scroll no es navegación: es cámara.** Cada gesto del usuario altera profundidad, lente y luz.
3. **Ninguna transición se repite.** Cada paso entre mundos tiene su propia gramática.

### Referencias estéticas
- **Guillermo del Toro** → engranajes de bronce, candelabros, criaturas de tinta, sombras profundas, dorados oxidados
- **One Piece** → tipografía épica, mapas con sello dorado, momentos de gran composición, tesoros visibles
- **Sci-fi abstracto** (Refik Anadol, Studio Anrick, Tundra) → partículas, fluidos generativos, materia programable, hologramas
- **Editorial cinematográfico** (Apple Keynote, A24, Active Theory) → tipografía colosal, espacio negativo, timing milimétrico

---

## 1 · SISTEMA DE DISEÑO EXTENDIDO

Conservamos la paleta actual (azul navy + dorado en detalles) y la enriquecemos con **tokens atmosféricos** que solo viven en esta experiencia.

### Paleta base (intacta)
| Token | Hex | Rol |
|-------|-----|-----|
| Navy Black | `#070F1A` | Vacío del cosmos |
| Navy Deep | `#0E2435` | Atmósfera principal |
| Navy | `#1C4058` | Superficies cercanas |
| Navy Light | `#2A5775` | Niebla volumétrica |
| Gold | `#C9A961` | Acento primario / oro vivo |
| Gold Bright | `#DDC289` | Lens flare, brillo emisivo |
| Gold Deep | `#7A6020` | Sombra del oro envejecido |
| Salmon Tint | `#F1CBBF` | Calor humano, secciones cálidas |
| Teal Deep | `#3D7886` | Bronce-mar oxidado |
| Ivory | `#FAF7F2` | Manuscrito, papel pergamino |
| Cream | `#F1E9DD` | Editorial cálido |

### Nuevos tokens atmosféricos (para esta experiencia)
| Token | Hex / mezcla | Uso |
|-------|--------------|-----|
| **Phosphor Gold** | `#FFDD7A` con glow blur | HUD, holograms, líneas de cómputo en pantalla |
| **Brass Patina** | `#5A6B3E` (verde patina) | Engranajes, detalles mecánicos Del Toro |
| **Ink Pool** | `#020812` | Negro absoluto que solo aparece en momentos clímax |
| **Mist Cyan** | `rgba(160,189,193,0.18)` | Vapores volumétricos en backgrounds 3D |
| **Burnt Ember** | `#8E3B2A` | Velas, llamas estilizadas, momentos cálidos |
| **Paper Foxing** | `#D8C7A4` | Manchas de pergamino antiguo |

### Tipografía (extendida)
| Familia | Uso actual | Nuevo uso inmersivo |
|---------|-----------|---------------------|
| **Cinzel** | Display | Logos, headers monumentales (es nuestra "voz de oráculo") |
| **Cormorant Garamond** | Serif elegante | Cuerpo editorial, citas, paratextos |
| **Inter** | UI | Texto funcional, formularios |
| **JetBrains Mono** | Acentos técnicos | Coordenadas, HUD, números técnicos |
| **+ Fraunces Italic** *(añadir)* | Italic dramática | Frases de respiración entre mundos |
| **+ Tasa Orbiter** *(añadir, font display experimental)* | Display futurista alternativa | Solo en momentos sci-fi extremos |

### Iluminación y materiales (Three.js)
| Material preset | Composición | Dónde se usa |
|-----------------|-------------|--------------|
| **Liquid Gold** | metalness 0.95, roughness 0.05, emissive #C9A961 @ 0.25 | Logo, sellos, esferas hero |
| **Patina Brass** | metalness 0.7, roughness 0.4, normalMap rugoso | Engranajes, mecánicas |
| **Ink Glass** | transmission 0.95, IOR 1.5, tint navy | Esferas FAQ, cápsulas |
| **Vellum Paper** | roughness 0.85, subsurface scattering ivory | Manuscritos, cartas |
| **Plasma Field** | shader custom, noise displacement | Backgrounds atmosféricos |

---

## 2 · CATÁLOGO DE TRANSICIONES (la gramática cinematográfica)

Diez transiciones disruptivas. Cada mundo usa una distinta (no repetimos).

| # | Nombre | Sensación | Tech |
|---|--------|-----------|------|
| T1 | **Dolly Zoom Vertigo** | La cámara avanza mientras el FOV se abre — efecto Hitchcock | GSAP `scrollTrigger` + Three.js camera FOV interpolation |
| T2 | **Liquid Ink Bleed** | Tinta dorada se filtra y revela el siguiente mundo | SVG `feDisplacementMap` + GSAP morphSVG |
| T3 | **Shutter Iris** | El ojo de la cámara se cierra y abre en otro lugar | clip-path radial animado |
| T4 | **Holographic Glitch Wipe** | Distorsión RGB + escaneo CRT | Shader GLSL custom + post-processing pass |
| T5 | **Page Turn 3D** | Página del manuscrito se voltea físicamente | CSS 3D transform + flexion shader |
| T6 | **Particle Reform** | El contenido se desintegra en oro líquido y se reconstruye | Three.js instancedMesh + GPGPU |
| T7 | **Lens Flare Burst** | Destello cinematográfico cubre la pantalla y cae | GSAP + radial gradient + bloom postprocess |
| T8 | **Wireframe Build-Up** | Líneas finas dibujan la sección antes de "solidificarse" | SVG stroke-dashoffset + opacity step |
| T9 | **Sea Roll** | Una ola roll horizontal arrastra el contenido (vibe One Piece) | Vertex shader + scroll proxy |
| T10 | **Telescope Iris** | Cierre circular hacia el centro tipo "fin de película" | clip-path circle + blur |

---

# 3 · LOS 8 MUNDOS

Cada mundo se entrega con: **🎬 Concepto · 🎨 Atmósfera · 🌀 Transición de entrada · 🎭 Coreografía · 🖱️ Interactividad · ⚙️ Tech**.

---

## MUNDO 1 · **"LA BÓVEDA"** *(Hero / Bienvenida)*

### 🎬 Concepto
El visitante cae dentro de una **cámara acorazada de cosmos**. En el centro, una **esfera líquida de oro fundido** levita y respira. Alrededor, partículas suspendidas como polvo de estrellas atrapado en aceite. Cuando el preloader termina, la cámara hace un *push-in* lento hacia la esfera y el logo **LAYEVSKA WEB DESIGN** emerge desde el interior, como si las partículas se reorganizaran obedientemente.

### 🎨 Atmósfera
- **Fondo:** gradient radial Navy Black → Navy Deep (96% del frame es oscuridad)
- **Foco luminoso central:** rim-light dorado Phosphor Gold con bloom intenso (~3px blur, exposición 1.6)
- **Niebla volumétrica:** ~12% opacity Mist Cyan flotando lentamente
- **Texturas:** noise grain sutil 4% para evitar banding en el gradient
- **Audio cue (opcional):** drone bajo de 60Hz que arranca cuando termina el preloader

### 🌀 Transición de entrada (desde preloader 7s)
**T6 · Particle Reform.** Los sparkles del preloader no desaparecen: **se reorganizan** físicamente para formar la esfera del hero. El texto 3D dorado "Layevska Web Design" se disuelve verticalmente como agua que cae y se acumula en el polo sur de la esfera.

### 🎭 Coreografía en escena (sin scroll todavía)
1. **0-2s:** la esfera respira (escala 0.97 ↔ 1.03 con cubic-bezier)
2. **2s+:** aparecen 3 textos cortos orbitando lentamente sobre planos en Z (paratextos: "Estudio · San José", "Premium · Hand-crafted", "Desde 2026")
3. **Cursor:** un punto dorado más grande con un anillo pulsante. Cuando entra a la zona de la esfera, el cursor se duplica reflejando la esfera. Lleva un pequeño rastro de partículas (motion trail).

### 🖱️ Interactividad
- **Mouse en cualquier parte:** la cámara de Three.js hace parallax sutil (max ±8°). La esfera reacciona como si tuviera mass — gira siguiendo el cursor con damping (lerp 0.06).
- **Click sostenido sobre la esfera:** la esfera se *crackea* (cracks animados como vidrio), revelando un mini-easter-egg dentro (un mensaje secreto navy + gold).
- **Scroll wheel:** la cámara empieza un *dolly out* y la esfera se aleja como abandonando una bóveda.

### ⚙️ Tech stack
- **Three.js r160+** con `WebGLRenderer` ToneMapping ACESFilmic
- **Esfera:** `IcosahedronGeometry(2, 64)` deformada por vertex shader con **simplex noise 4D** para respiración orgánica
- **Material:** MeshPhysicalMaterial con `transmission: 0.9`, `thickness: 1.2`, `iridescence: 0.4`, `iridescenceIOR: 1.6`
- **Partículas:** `Points` geometry con 4,000 partículas + custom shader (color = mix de gold según depth)
- **Post-processing:** `EffectComposer` con `UnrealBloomPass` (strength 0.85, threshold 0.3), `FilmPass` sutil (grano 0.18)
- **Cámara intro:** `gsap.timeline()` que mueve camera.position.z de 8 a 4.5 en 2.2s con `power3.inOut`

### ⚡ Performance / mobile / a11y
- **Mobile:** sustituir esfera Three.js por **video MP4 looped** (4MB) o **canvas 2D simplificado**
- **Reduced motion:** logo estático con suave fade-in, sin parallax
- **A11y:** texto "Layevska Web Design" visible en DOM real (no solo en WebGL) para screen readers

---

## MUNDO 2 · **"EL MANUSCRITO"** *(Sobre nosotros / Origen)*

### 🎬 Concepto
La cámara, al salir de la bóveda, desciende sobre una **mesa de cartógrafo iluminada por una sola vela**. Sobre la mesa hay un **libro encuadernado en cuero navy con esquinas doradas**. El libro se abre solo, página por página, contando la historia de Miah y Bryan. Cada página tiene **fotografías que cobran vida** (cinemagraphs), ilustraciones a tinta dorada que se dibujan en tiempo real, y citas en Cormorant italic.

### 🎨 Atmósfera
- **Fondo:** vellum paper (`#F1E9DD`) con manchas Paper Foxing (`#D8C7A4`) generadas por displacement map
- **Iluminación:** point light cálido Burnt Ember encima del manuscrito → sombra dura del libro sobre la mesa
- **Detalles laterales:** plumín dorado, tintero, lupa, brújula pequeña — todos modelados sutilmente en 3D, fuera de foco
- **Polvo en suspensión:** 400 motas micro de Phosphor Gold flotando

### 🌀 Transición de entrada
**T5 · Page Turn 3D.** La pantalla entera se voltea horizontalmente como si fuera la primera página del libro — la bóveda del Mundo 1 se ve "del otro lado" en la página anterior, este mundo es el reverso. Eje de rotación en el borde izquierdo de la pantalla, profundidad real 3D.

### 🎭 Coreografía
1. Llegás a la mesa con el libro **cerrado**
2. Scroll → el libro se abre. La primera página dice "Capítulo I — Cómo nació Layevska"
3. Scroll → la tinta empieza a dibujarse en la página derecha (SVG path animation)
4. La página se voltea sola al hacer scroll del 25% al 35% (3 páginas en total)
5. Cada página combina: **foto cinemagraph** (loop de 4s muy sutil — humo de café, hojas moviéndose) + **texto serif que aparece carácter por carácter** + **ilustración que se dibuja en oro**
6. Última página: una llave dorada que apunta al siguiente mundo

### 🖱️ Interactividad
- **Hover sobre fotos:** se hacen más nítidas, la profundidad de campo cambia
- **Hover sobre palabras en italic dorado:** revelan tooltip con dato curioso (ej. "fundado un 14 de febrero de 2026 con un café cortado en una panadería de Heredia")
- **La vela** del fondo flickea siguiendo el cursor (light position)

### ⚙️ Tech stack
- **GSAP ScrollTrigger** con `scrub: 1.2` para que el scroll controle el avance del manuscrito
- **Page turn:** `CSS transform: rotateY()` + `preserve-3d` + sombra dinámica
- **Tinta que se dibuja:** SVG `<path>` con `stroke-dasharray` + `stroke-dashoffset` animados
- **Cinemagraphs:** `<video muted autoplay loop playsinline>` con masking SVG sobre zonas estáticas
- **Vela:** Three.js mini scene con `PointLight` cuyo `intensity` recibe un noise 1D (luz parpadeante)
- **Tipo carácter por carácter:** `SplitType.js` + GSAP stagger

### ⚡ Performance / mobile / a11y
- **Mobile:** se sustituye el "page turn 3D" por slides verticales con micro-animaciones de tinta
- **Reduced motion:** el libro aparece ya abierto, sin voltear
- **A11y:** todas las "páginas" son `<section>` con texto real, fotos con `alt` descriptivo

---

## MUNDO 3 · **"EL GABINETE DE MARAVILLAS"** *(Portafolio)*

### 🎬 Concepto
La cámara emerge del manuscrito y vuela hacia atrás revelando **una galería abovedada infinita**, tipo Wunderkammer del siglo XVIII pero en cosmos. **Marcos dorados barrocos** flotan en el espacio negro, cada uno encierra un proyecto. Cuando te acercás (scroll), entrás dentro de un marco como Mary Poppins entra a un dibujo.

### 🎨 Atmósfera
- **Fondo:** Navy Black puro + nebula sutil generada por shader (3 colores: navy, gold, salmon)
- **Marcos:** dorados ornamentales (Gold con bevel + emboss), 6 piezas
- **Cada marco contiene:** una composición estática que **respira sutilmente** + paleta de colores del proyecto flotando en órbita alrededor
- **Polvo cósmico:** ~600 partículas en glow Phosphor Gold

### 🌀 Transición de entrada
**T1 · Dolly Zoom Vertigo.** El manuscrito anterior queda en primer plano congelado mientras la cámara hace dolly-out + FOV-in → la galería se revela como si se descubriera detrás de la mesa. Efecto Hitchcock que vuelve los marcos imposiblemente largos por un instante antes de estabilizarse.

### 🎭 Coreografía
1. Llegás a una **galería con 6 marcos** dispuestos en grid 3×2 pero en un plano curvado (cilindro horizontal)
2. **Scroll horizontal hijack:** el scroll vertical se traduce en un *travelling lateral* de la cámara que recorre los marcos
3. Cada marco tiene un **título en Cinzel arriba** y la paleta de 4 hex codes flotando alrededor como anillos planetarios
4. Cuando **clickeás un marco** → la cámara hace zoom dramático hacia adentro → entrás al proyecto (vista de caso completo)
5. **Click ESC** o backdrop → la cámara se aleja y volvés a la galería

### 🖱️ Interactividad
- **Hover:** el marco se inclina 3D siguiendo el mouse (max 12°) + los hex codes que orbitan explotan en chispas doradas
- **Click sostenido sobre los hex codes:** se copian al portapapeles con un toast "color copiado ✦"
- **Mouse en zonas vacías:** la nebula del fondo reacciona como fluido (mouse displaces field)

### ⚙️ Tech stack
- **GSAP ScrollTrigger pin + horizontal scroll hijack** (`scrub: 1`, `pin: true`)
- **Three.js cilindro escena** con 6 planos texturados como marcos
- **Marcos barrocos:** SVG ornamental + filtro displacement light + `feGaussianBlur` para halo
- **Paleta orbital:** Framer Motion `useTransform` que mapea scroll a rotación de los hex
- **Nebula reactiva:** GLSL shader con `uMouse` uniform + noise field
- **Modal de proyecto:** Framer Motion con `layoutId` para morph del marco al detalle

### ⚡ Performance / mobile / a11y
- **Mobile:** scroll horizontal nativo con snap, marcos en grid simple, sin Three.js
- **Reduced motion:** marcos estáticos en grid 2 columnas
- **A11y:** cada marco es `<article role="article">` con título, descripción y `<dl>` de paleta

---

## MUNDO 4 · **"LA MÁQUINA DEL TIEMPO"** *(Proceso 6 pasos en 7 días)*

### 🎬 Concepto
Después de la galería, la cámara cae en picada hacia abajo y aterriza en un **mecanismo de relojería enorme tipo Del Toro**: engranajes de bronce patinado en plano horizontal, gigantescos, girando lentamente sobre fondo Navy Black. Cada engranaje es un **día** (del 1 al 7). Sobre la rueda central flota una **maqueta 3D de la landing** que se va construyendo en tiempo real conforme avanza el scroll.

### 🎨 Atmósfera
- **Fondo:** Navy Deep + Ink Pool en el horizonte
- **Engranajes:** Brass Patina con normalMap rugoso + scratches dorados
- **Aceite/grasa:** geles oscuros visibles entre los dientes de los engranajes (texturas SSS)
- **Iluminación:** key light dorado desde arriba simulando lámpara industrial colgada
- **Polvo de bronce:** finas partículas verdosas Brass Patina + chispas doradas ocasionales

### 🌀 Transición de entrada
**T7 · Lens Flare Burst.** Un destello dorado masivo cubre la pantalla (como cuando una cámara mira al sol). Cuando el flare se disipa, ya estamos sobre los engranajes. Sentís que cambió de set.

### 🎭 Coreografía
1. Cámara en plano cenital sobre la mecánica
2. **Día 1:** primer engranaje se activa, un wireframe vacío de página aparece en la maqueta central
3. **Scroll:** la cámara hace ligero parallax + el siguiente engranaje engrana con el anterior + nuevo elemento aparece en la maqueta
4. Cada paso (1 a 6) tiene:
   - **Engranaje correspondiente** con label "DÍA X" en Cinzel
   - **Card narrativa** flotante con título + descripción
   - **Microvisualización:** el wireframe central va sumando bloques (header → hero → secciones → animaciones → final)
5. **Día 7:** todos los engranajes giran en sincronía + la maqueta toma color y vida → "LANZAMIENTO" en oro vivo
6. Botón CTA "Empezar el día 1 →" emerge desde el centro del último engranaje

### 🖱️ Interactividad
- **Scroll = giro de engranajes.** El usuario controla literalmente la velocidad de la máquina con la rueda
- **Hover sobre engranaje:** el engranaje se ilumina, suelta una chispa, y la card narrativa hace pop-out
- **Click en engranaje:** zoom in al detalle de ese día + breakdown granular

### ⚙️ Tech stack
- **Three.js** scene con 7 `CylinderGeometry` chatos como engranajes, `EdgesHelper` no, mejor texturas de dientes
- **Animation rig:** los engranajes se animan vía `gsap.timeline()` con `scrub: true`
- **Maqueta central:** segunda scene 3D más pequeña con `OrthographicCamera` mostrando isométrico de la landing
- **Construcción wireframe → final:** array de meshes con `material.opacity` mapeado a scroll progress
- **Chispas:** `Sprite` con custom `AdditiveBlending` material
- **Texturas patina:** mapas de `normalMap` + `roughnessMap` libres tipo poliigon

### ⚡ Performance / mobile / a11y
- **Mobile:** los engranajes se simplifican a SVG 2D con `<animateTransform>` + scroll natural
- **Reduced motion:** versión narrativa simple tipo timeline vertical actual
- **A11y:** `<ol>` con steps reales en DOM. Los engranajes son decorativos `aria-hidden`

---

## MUNDO 5 · **"EL PACTO"** *(Precios + Comparativa + Garantía)*

### 🎬 Concepto
La cámara sale del taller de relojería y entra a una **biblioteca privada con escritorio de notario**. En el escritorio: **dos pergaminos** (Estándar y Premium) lacrados con sellos dorados. A un lado, un **espejo de comparativa** que enfrenta Layevska vs Agencia vs Freelancer. Detrás, una **vitrina con escudo dorado** que contiene las 4 garantías escritas en latín como si fueran mandamientos.

### 🎨 Atmósfera
- **Fondo:** Navy Deep con candelabros laterales (Burnt Ember + bloom)
- **Material pergaminos:** Vellum Paper material con bordes ligeramente quemados
- **Sellos:** Liquid Gold material con relieve "L" + escudo Layevska
- **Espejo:** marco dorado barroco enmarcando una tabla holográfica Phosphor Gold sobre vidrio Ink Glass
- **Polvo de archivo:** menos partículas, más calmo

### 🌀 Transición de entrada
**T8 · Wireframe Build-Up.** La habitación se dibuja con líneas finas Phosphor Gold (como blueprint) y después se rellena con materiales reales. Toma ~1.4s. Es el respiro técnico del recorrido.

### 🎭 Coreografía
1. Escritorio en plano frontal, dos pergaminos cerrados
2. **Scroll:** los pergaminos se desenrollan revelando precio + features
3. El pergamino Premium tiene un **sello dorado animado** que se posa con un sonido de cera caliente
4. Después de ambos pergaminos, la cámara hace **pan a la derecha** revelando el **espejo de comparativa**
5. La tabla aparece columna por columna. La columna Layevska tiene un **halo dorado** que la separa de las otras dos
6. Pan a la izquierda revela la **vitrina de garantías**. Las 4 garantías aparecen como mandamientos en Cinzel + ícono ornamental (Eye, Smartphone, Zap, ShieldCheck)
7. Cierre: cita central "Si firmamos, lo cumplimos. Si no, devolvemos."

### 🖱️ Interactividad
- **Hover sobre pergamino:** se inclina 3D + el sello se levanta levemente con sombra
- **Click "Solicitar Premium":** efecto de tinta gold que se derrama desde el botón y la pantalla se tiñe brevemente → te lleva al contacto
- **Hover en la tabla comparativa:** la columna Layevska "se levanta" del plano (translateZ +12px) y las otras dos se opacan
- **Mouse en garantías:** el escudo dorado responde con un reflejo según el ángulo del cursor (like a real metal sheen)

### ⚙️ Tech stack
- **GSAP scrollTrigger** orquesta los 3 sub-bloques (pergaminos → tabla → garantías) como una secuencia continua
- **Pergamino desenrollado:** SVG path morphing + mask animation. Alternativa simple: CSS clip-path
- **Sello dorado:** Three.js `CylinderGeometry` plano con `MeshPhysicalMaterial` Liquid Gold
- **Tinta derramada:** SVG `<filter>` con `feTurbulence` + `feDisplacementMap` animado al click
- **Escudo metálico reactivo:** `MeshPhysicalMaterial` con `envMap` que recibe posición del cursor para simular highlights
- **Tipografía Cinzel** con `text-shadow` apilado para profundidad 3D real

### ⚡ Performance / mobile / a11y
- **Mobile:** pergaminos se vuelven cards full-width que se expanden tap-to-open
- **Reduced motion:** desenrollado se reemplaza por fade-in simple, sellos estáticos
- **A11y:** tabla real en `<table>` con `<th scope>` correctos. Garantías son `<dl>`

---

## MUNDO 6 · **"EL CONFIGURADOR DEL COSMOS"** *(Cotizador interactivo)*

### 🎬 Concepto
El visitante entra a un **panel de control alquímico-espacial**. En el centro, una **constelación 3D** que el usuario va modificando. Cada decisión (industria, paleta, secciones, animaciones) **agrega un astro nuevo o cambia su órbita** en tiempo real. Mientras compone su universo, el precio se calcula en una **tablilla de pergamino lateral** con números que giran tipo slot-machine elegante.

### 🎨 Atmósfera
- **Fondo:** vacío cósmico (Navy Black) con star-field generativo + nebulas distantes
- **HUD periférico:** marcos dorados ornamentales con esquinas que parecen circuitos antiguos (mix Del Toro + sci-fi)
- **Constelación central:** astros como **icosaedros doradados** con líneas de conexión Phosphor Gold + bloom

### 🌀 Transición de entrada
**T4 · Holographic Glitch Wipe.** Glitch RGB + scan lines + un brief blackout (50ms) y aparecés en el cosmos. Sensación de "te conectaste a otro sistema".

### 🎭 Coreografía
1. **Paso 1 — Industria:** 6 órbitas vacías. Eligen industria (clínica, bufete, restaurante, spa, tienda, otra) → aparece un astro central representando esa industria
2. **Paso 2 — Paleta:** 3 paletas pre-armadas como "esquemas planetarios". Al hover, los astros cambian color en tiempo real
3. **Paso 3 — Secciones:** lista de 8 secciones como anillos satélites. Cada uno que activan agrega un orbe pequeño + actualiza precio
4. **Paso 4 — Nivel de animación:** slider físico (estilo dial barroco). Al subirlo: las partículas crecen, las órbitas se aceleran, los astros tiemblan
5. **Resumen final:** la constelación se compacta en un **logo personalizado** + se imprime un "tiquete cósmico" con el precio total

### 🖱️ Interactividad
- **Drag de astros:** podés reorganizar las órbitas (vibe "tu universo, tus reglas")
- **Hover sobre astro:** muestra tooltip con qué representa
- **El slider del paso 4** se puede manipular como dial físico (rotación con mouse)
- **Compartir resultado:** botón "Bajar mi cosmos personalizado" que exporta una imagen PNG del estado actual + precio

### ⚙️ Tech stack
- **Three.js + react-three-fiber** (rama dedicada)
- **Astros:** `IcosahedronGeometry` con `MeshPhysicalMaterial` Liquid Gold + bloom selectivo
- **Conexiones:** `Line2` (LineMaterial) con dash animation
- **Orbits:** Cada astro es un `<Object3D>` parent que se rota en su propio eje → animación con `useFrame`
- **Slot machine numbers:** `Framer Motion` + `useSpring` para el número de precio
- **State machine:** XState para los 4 pasos (clean transitions)
- **Export PNG:** `renderer.domElement.toBlob()` → composición canvas final

### ⚡ Performance / mobile / a11y
- **Mobile:** se mantiene la mecánica de pasos pero los astros son SVG 2D animados, no Three.js
- **Reduced motion:** versión tabular simple del configurador actual
- **A11y:** cada paso es un fieldset real, controles teclables. La constelación es decorativa

---

## MUNDO 7 · **"LA CÁMARA DE LAS PREGUNTAS"** *(FAQ)*

### 🎬 Concepto
La cámara emerge del cosmos y entra a una **cripta acuática**: una habitación submarina donde flotan **esferas de cristal con tinta dorada** atrapada adentro. Cada esfera es una pregunta frecuente. Las esferas se mueven con física suave (boyancia, drag) y reaccionan al cursor como peces tímidos. Al hacer click, la esfera se rompe en mil partículas doradas que se reorganizan formando la respuesta en texto.

### 🎨 Atmósfera
- **Fondo:** Teal Deep + Navy con caustics submarinos sutiles
- **Esferas:** Ink Glass material (transmission alta, IOR 1.5, ligeramente tint navy)
- **Tinta dorada interna:** simulada con shader que se mueve dentro de cada esfera (subtle 3D noise)
- **Burbujas de aire:** miles, finísimas, en background
- **Iluminación:** key light cenital azul, rim Phosphor Gold

### 🌀 Transición de entrada
**T10 · Telescope Iris.** Cierre circular hacia el centro (tipo "fin de película") y reabre. Cuando reabre, el ambiente ha cambiado totalmente al subacuático.

### 🎭 Coreografía
1. 6-8 esferas flotando en patrones orgánicos (boids algorithm simplificado)
2. Cada esfera tiene una pregunta visible en su superficie (texto sobre el material)
3. **Click esfera:** la esfera se quiebra → su contenido escapa en partículas que se reagrupan en una **carta abierta** con la respuesta
4. La carta tiene un botón "Volver a la cripta" que regresa la esfera (reforma)
5. Solo se puede tener UNA pregunta abierta a la vez → cinematográfico

### 🖱️ Interactividad
- **Cursor influye en las esferas** (repulsión sutil — se alejan del mouse)
- **Hover prolongado** sobre una esfera: zoom-in de cámara, la esfera ocupa 60% pantalla
- **Drag de esfera:** sí, podés moverlas (vibe juguete)
- **Doble click esfera:** se rompe (respuesta abre)

### ⚙️ Tech stack
- **Three.js + rapier (physics)** para la flotación / colisiones
- **Esferas:** `SphereGeometry(0.8, 64, 64)` con `MeshPhysicalMaterial` transmissive
- **Tinta interna:** shader que distorsiona una textura noise en función del tiempo y de la velocidad de la esfera
- **Rompimiento:** `BufferGeometry` que explota en N puntos (vertex shader animation), GSAP morph hacia las posiciones del texto target
- **Texto en superficie de la esfera:** `Text` (drei) bend con `cylindricalMapping`

### ⚡ Performance / mobile / a11y
- **Mobile:** acordeón limpio sobre fondo de gradiente subacuático estático
- **Reduced motion:** acordeón actual
- **A11y:** las preguntas son `<button aria-expanded>` reales. Las esferas decoran

---

## MUNDO 8 · **"EL SELLO FINAL"** *(Contacto / Cierre)*

### 🎬 Concepto
Última habitación: un **escritorio lacrado** con una **carta abierta esperando ser firmada**. Sobre la carta, el formulario. Cada campo está pintado con una **caligrafía Cinzel/Fraunces** que se va completando con tinta dorada cuando el usuario tipea. Al enviar, un **sello dorado con la "L" de Layevska** cae lentamente sobre la carta con un **lacre** que se expande físicamente como cera caliente. La carta se enrolla, se ata con una cinta dorada, y se lanza hacia atrás dentro de un **tubo neumático estilo Bioshock** que la dispara hacia las estrellas (vibe One Piece: mensaje al horizonte).

### 🎨 Atmósfera
- **Fondo:** Navy con candelabros laterales + niebla cálida Salmon Tint hacia el horizonte
- **Mesa:** texture Vellum Paper con manchas Paper Foxing
- **Materiales:** plumín dorado Liquid Gold, tintero Ink Pool con reflejo, vela Burnt Ember
- **Iluminación clímax:** spotlight cálido sobre la carta + rim dorado en los bordes

### 🌀 Transición de entrada
**T2 · Liquid Ink Bleed.** Una mancha de tinta dorada se filtra desde el fondo del último FAQ y se expande cubriendo toda la pantalla. Cuando se aclara, ya estamos en el escritorio.

### 🎭 Coreografía
1. Carta en blanco sobre la mesa, pluma al lado
2. Los campos del formulario aparecen como **líneas grabadas** sobre la carta
3. Al typear: cada caracter se "dibuja" en Fraunces Italic con un trazo dorado (ink-flow effect)
4. **Validación:** un error hace que la pluma haga un trazo rojo que se borra solo después de 1.5s. Sin shake violento, elegante
5. **Submit:** botón "Sellar y enviar" → la pluma se levanta, vuela y firma sola el espacio "firma" abajo
6. Después, el **sello dorado cae** con peso (gravity), aplasta una **gota de lacre rojo** que se expande físicamente
7. La carta se enrolla, se ata con una cinta dorada
8. Salta al tubo neumático y se dispara hacia el cosmos
9. **Mensaje final:** "Tu mensaje viaja hacia Layevska. Te responderemos en menos de 24 horas."

### 🖱️ Interactividad
- **Cursor cerca del tintero:** la tinta tiembla
- **Cursor sobre la pluma:** se levanta sutilmente
- **Hover sobre "Sellar y enviar"**: el sello empieza a glow + vibra como si quisiera caer
- **Después del envío:** el cosmos de fondo cobra vida brevemente (la esfera del Mundo 1 reaparece pequeña en el horizonte como mensaje recibido)

### ⚙️ Tech stack
- **Ink flow effect** al typear: SVG path + GSAP `drawSVG` por caracter
- **Validación elegante:** Framer Motion error states + auto-clear
- **Pluma firmando sola:** `<svg>` con `<animateMotion>` siguiendo path de firma + GSAP
- **Sello dorado:** Three.js `CylinderGeometry` con Liquid Gold, animado con física `cannon.js` o `rapier`
- **Lacre rojo:** SVG con `feMorphology` + GSAP scaleX/Y
- **Tubo neumático:** 2D CSS animation simple (la carta sube + zoom hacia atrás)

### ⚡ Performance / mobile / a11y
- **Mobile:** formulario tradicional con bonita estética (sin físicas), micro-animaciones del lacre se mantienen
- **Reduced motion:** sin sello cayendo, transición fade
- **A11y:** formulario es 100% accesible, labels, errores anunciados a screen readers, sello decorativo

---

# 4 · STACK TÉCNICO INTEGRAL

| Capa | Tecnología | Por qué |
|------|-----------|---------|
| **Framework** | React 18 + Vite (continuamos) | Ya está montado, hot reload, build optimizado |
| **3D core** | Three.js r160+ | Estable, gigante comunidad |
| **3D React** | @react-three/fiber + drei + postprocessing | Componibilidad declarativa de escenas 3D |
| **Físicas** | @react-three/rapier | Esferas FAQ + sello cayendo |
| **Animación timeline** | GSAP 3 + ScrollTrigger | Sincronización scroll-driven que Framer no alcanza |
| **Animación reactiva** | Framer Motion 11 (mantener) | Animaciones de UI, gestos, layout |
| **Shaders custom** | glslify + raw-loader o tsl (Three.js Shading Language) | Plasma fields, tinta dorada, holographic glitch |
| **Tipografía animada** | SplitType + GSAP | Caracter por caracter, masking inteligente |
| **State del cotizador** | XState 5 | Máquina de 4 estados clara |
| **Audio (opcional)** | Howler.js | Drones bajos, ambient cues entre mundos |
| **Asset 3D** | Blender → GLB exportado | Manuscrito, engranajes, plumín, vela |
| **Texturas y HDRI** | Polyhaven, ambientCG | Ambientes, IBL para los materiales reflectivos |

---

# 5 · ROADMAP DE IMPLEMENTACIÓN (sugerido en 4 sprints)

### Sprint A (1 semana) · Cimientos cinematográficos
- Setup react-three-fiber + GSAP + ScrollTrigger + postprocessing
- Configurar EffectComposer global (bloom, film grain, vignette)
- Implementar **Mundo 1 (La Bóveda)** completo
- Construir la biblioteca de **transiciones T1–T10** como componentes reusables

### Sprint B (1 semana) · Manuscrito + Galería
- **Mundo 2 (Manuscrito)** — page turn 3D, ink drawing
- **Mundo 3 (Gabinete)** — galería horizontal hijacked scroll

### Sprint C (1.5 semanas) · Mecánica + Pacto
- **Mundo 4 (Máquina del tiempo)** — engranajes + maqueta construyéndose
- **Mundo 5 (El Pacto)** — pergaminos + espejo + vitrina

### Sprint D (1.5 semanas) · Cosmos + Cripta + Sello
- **Mundo 6 (Configurador cósmico)** — XState + Three.js constelación
- **Mundo 7 (FAQ submarina)** — físicas Rapier
- **Mundo 8 (Sello final)** — formulario con ink flow + sello físico

### Sprint E (1 semana) · Polish + Performance
- Mobile fallbacks
- Reduced motion paths
- Accessibility audit completo
- Lighthouse > 90 desktop / > 75 mobile
- Audio mastering (si decidimos sumarlo)

**Total estimado: ~6 semanas para una landing que se vuelve la mejor del país en su categoría.**

---

# 6 · CONSIDERACIONES FINALES

### Estrategia de carga
- **Hero (Mundo 1)** carga primero, todo lo demás se hace lazy
- **Texturas 3D** se comprimen como `.ktx2` (Basis Universal) — pesos hasta 80% menores que `.png`/`.jpg`
- **Modelos GLB** con Draco compression
- **First Contentful Paint < 1.5s** garantizado en escritorio porque solo cargamos el hero al inicio

### Mobile / responsive
**Cada mundo tiene un fallback mobile** definido. La esencia narrativa se mantiene pero la complejidad técnica baja:
- Three.js → fallback canvas 2D o video
- Físicas → animaciones predefinidas
- Scroll hijack → scroll nativo con snap

### Accesibilidad — premisa innegociable
- Toda navegación accesible con **teclado**
- `prefers-reduced-motion` → degrada a una experiencia limpia tipo "libro digital" (no estática, pero sin físicas ni cámara)
- Texto siempre en DOM real para screen readers
- Contraste WCAG AA mínimo en todo elemento informativo

### Lo que NO vamos a hacer (y por qué)
- ❌ Audio autoplay con volumen alto (rompe el efecto y molesta)
- ❌ Cursor totalmente reemplazado (mantenemos el dorado custom pero el sistema sigue visible)
- ❌ Force-scroll (que el usuario no pueda scrollear libre) — siempre puede saltar a otro mundo
- ❌ Pop-ups intrusivos
- ❌ "Quiz" que bloquea el contenido

---

# 7 · LO QUE TE ENTREGO AHORA EN ESTE DOCUMENTO

Esta propuesta es la **biblia creativa y técnica** del proyecto. A partir de acá podemos:

1. **Discutir y refinar** mundos específicos (¿el manuscrito te parece muy literario? ¿la máquina del tiempo muy Del Toro?)
2. **Cortar o sumar** mundos (¿agregamos uno entre el 4 y el 5?)
3. **Definir prioridades** (¿qué mundo es el más crítico para arrancar?)
4. **Empezar a construir** mundo por mundo, en orden, con cada uno listo antes de pasar al siguiente

---

**Layevska Web Design** · Miah Layevska & Bryan Barrantes
San José, Costa Rica · LayevskaWebDesign@gmail.com · +506 8751-8441
