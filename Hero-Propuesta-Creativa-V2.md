# PROPUESTA CREATIVA · HERO V2
**Layevska Web Design** · Reestructuración del Hero · Junio 2026

> Análisis y propuestas basadas en 8 ilustraciones hand-painted estilo One Piece/Ghibli aportadas por el usuario. Cada propuesta respeta la esencia artesanal de las imágenes y la identidad premium-cálida de Layevska Web Design.

---

## 1. 🎬 PROPUESTAS DE ANIMACIÓN

Cuatro conceptos distintos, ordenados de más a menos contemplativo. Todos están pensados para no saturar al usuario en su primer scroll y para no canibalizar el copy del Hero.

---

### CONCEPTO A · "Atlas de Mundos" (Ken Burns + crossfade)

**Idea:** las 8 imágenes funcionan como diapositivas de un atlas ilustrado. Cada una se muestra ~6 segundos con un movimiento sutil de cámara (zoom lento + pan diagonal). Entre escena y escena, un crossfade de 1.5s con un blur muy ligero. Ciclo completo: ~50 segundos. Loop infinito.

**Por qué funciona:**
- Respeta el ritmo pausado de las acuarelas. No las "anima" — las contempla.
- El movimiento de cámara da vida sin tocar la ilustración (no se distorsiona el dibujo).
- Cero competencia con el copy: el ojo lee el título y de fondo "siente" el movimiento.

**Micro-toques recomendados:**
- Vignette suave y grain animado (texture overlay 4-6% opacity)
- Overlay de color tipo navy/crimson al 20% para fundir con la paleta de Layevska
- Audio ambient muy bajo opcional (lluvia distante / viento) — solo si el usuario interactúa

**Stack técnico:**
- **Framer Motion** (`motion.div` con `animate` controlado por `AnimatePresence`)
- `useEffect` + `setInterval` para el switch de escena
- CSS `transform: scale(1.0) → scale(1.08)` + `translateX/Y` para el Ken Burns
- Imágenes optimizadas en WebP responsivo (1920x1080 + variantes para mobile)
- `prefers-reduced-motion`: media query que reemplaza el ciclo por una imagen fija

**Esfuerzo:** Bajo — Tiempo estimado: 1 día de desarrollo.

---

### CONCEPTO B · "Construcción del Mundo" (Stop-motion + pausa narrativa)

**Idea:** las 8 imágenes se muestran en secuencia rápida (350-500 ms cada una) como si estuvieran "construyendo" un mundo frente a tus ojos. Después del último frame, pausa larga de 4 segundos sobre una imagen clave (ej. la del árbol gigante o el castillo con arcoíris) — ese frame se queda como "héroe estático". Loop cada 12 segundos.

**Por qué funciona:**
- Captura atención inmediata (movimiento rápido es magnético en los primeros 200ms del page load).
- Después premia con un momento contemplativo — el ojo "respira".
- El stop-motion irregular se siente artesanal, no robótico.

**Micro-toques recomendados:**
- Variación intencional en duración de cada frame (300-500ms) para evitar tic-tac mecánico
- Ligero "jitter" o desplazamiento de 1-2px entre frames (imita imperfección de stop-motion real)
- Fade de entrada con ease asimétrico (ease-out rápido, ease-in lento)

**Stack técnico:**
- React state + `setTimeout` con timings precargados en un array
- Imágenes precargadas con `<link rel="preload">` para evitar flash
- Sprite sheet opcional para performance extrema (8 imágenes en un PNG → menos requests)
- Fallback estático automático en mobile si la conexión es lenta (`navigator.connection.effectiveType`)

**Esfuerzo:** Medio — Tiempo estimado: 1.5 días.

---

### CONCEPTO C · "Archipiélago Vivo" (Mosaico parallax)

**Idea:** en lugar de mostrar una imagen a la vez, mostrar **3-4 imágenes simultáneamente** en un mosaico asimétrico, cada una flotando con su propio ritmo respiratorio (scale, translate, opacity independientes). Al mover el mouse, las imágenes se desplazan en parallax (las del fondo más lento, las del frente más rápido). En scroll, las imágenes se alejan/escalan/cambian. Las 8 imágenes rotan en posiciones cada 8-10 segundos.

**Por qué funciona:**
- Refleja literalmente el concepto: "cada empresa es un mundo" → varios mundos viven simultáneamente.
- Match perfecto con la imagen #4 (tres islas flotantes) — esa estética se vuelve la metáfora visual del Hero entero.
- Invita a la exploración. El usuario mueve el mouse y "siente" que el sitio responde.

**Micro-toques recomendados:**
- 4 imágenes visibles a la vez en grid 2x2 asimétrico (tamaños distintos)
- Cada imagen con sombra suave + rotación 1-3° aleatoria (imperfección hand-painted)
- En mobile: parallax por scroll en lugar de mouse, mismo concepto
- Hover sobre una imagen la trae al frente con scale 1.08

**Stack técnico:**
- **Framer Motion** + `useTransform` + `useMotionValue` para parallax fluido
- `useScroll` para vincular movimiento a scroll
- IntersectionObserver para iniciar/detener animaciones (battery friendly)
- GSAP opcional si se quiere drag/throw (mobile táctil)

**Esfuerzo:** Alto — Tiempo estimado: 2-3 días. Requiere balance visual cuidadoso.

---

### CONCEPTO D · "Travelogue Horizontal" (Film strip + scroll-jacking suave)

**Idea:** las 8 imágenes están dispuestas en una tira horizontal infinita, scrolleando lentamente de derecha a izquierda (auto-pan a 30-40px/s). Cada imagen, al cruzar el centro de la pantalla, hace un sutil scale-up de 1.0 → 1.05 y eleva opacity de 0.85 → 1.0. El usuario también puede scrollear manualmente con la rueda del mouse o arrastrando con el dedo en mobile. Nunca se detiene del todo — siempre hay un flujo cinematográfico de fondo.

**Por qué funciona:**
- Comunica narrativa lineal: "estamos viajando por mundos distintos juntos".
- Combina elegancia automática + control manual. El usuario que quiere explorar puede; el que solo quiere leer el copy, también.
- Funciona excepcionalmente bien con tipografías serif grandes superpuestas (el film strip queda detrás semi-difuminado).

**Micro-toques recomendados:**
- Mask gradient en los bordes laterales (las imágenes "entran" y "salen" del cuadro con fade)
- Velocidad muy lenta — esto es contemplativo, no urgente
- El cursor cambia a "grab" sobre la tira para invitar a interactuar
- Si el usuario pausa por 4 seg de inactividad, vuelve auto-pan

**Stack técnico:**
- **GSAP Horizontal Loop** (utility oficial de GreenSock — bombproof) o `framer-motion-marquee`
- `useGesture` para drag interaction en mobile
- `requestAnimationFrame` puro si se quiere control máximo
- Imágenes lazy-load con IntersectionObserver

**Esfuerzo:** Medio-Alto — Tiempo estimado: 2 días.

---

### Tabla comparativa rápida

| Concepto | Energía | Originalidad | Esfuerzo | Riesgo de saturar |
|---|---|---|---|---|
| A · Atlas (Ken Burns) | Baja-Media | Media | Bajo | Muy bajo |
| B · Stop-motion narrativo | Media-Alta | Alta | Medio | Medio |
| C · Archipiélago parallax | Media | Muy Alta | Alto | Alto si se sobre-anima |
| D · Travelogue horizontal | Media | Alta | Medio-Alto | Bajo |

**Mi recomendación como senior:** **Concepto A** como base segura, o **Concepto D** si querés algo más distintivo sin perder elegancia. El **B** y el **C** son brillantes pero pueden distraer del copy en una landing de servicios premium.

---

## 2. ✍️ COPYS PARA EL HERO (5 variaciones)

Cinco direcciones distintas. Cada una nace de la idea base — *"cada empresa es un mundo"* — pero la interpreta desde un ángulo emocional y filosófico diferente. Todas evitan deliberadamente verbos cliché tipo "transformar", "potenciar", "llevar al siguiente nivel", "revolucionar".

---

### OPCIÓN 1 · Editorial Premium

> **H1: Cada empresa es un mundo. Le damos forma en el digital.**
>
> **Sub:** Layevska diseña landing pages a la medida de la esencia que tu negocio ya tiene. Una por una, calibradas a mano, sin plantillas.

**Tono:** sereno, confiado, profesional. Suena como editorial de revista — sin alardear, sin pedir disculpas.

**Cuándo elegirla:** si querés que el copy se sienta como "esto es lo que somos, así de simple" — autoridad callada.

---

### OPCIÓN 2 · Narrativa Cálida (Studio Ghibli)

> **H1: Tu negocio ya tiene alma. Nuestro oficio es enseñarla.**
>
> **Sub:** Diseñamos experiencias digitales para empresas con esencia. Si la tuya la tiene, la traducimos en pixeles, color y voz.

**Tono:** humano, casi poético, con respeto profundo por lo que el cliente ya construyó. Funciona especialmente bien con las imágenes anime (mundo orgánico, casi espiritual).

**Cuándo elegirla:** si tu cliente ideal es un negocio con historia (familia, oficio, trayectoria) — la mueblería del guion, una imprenta como Rodma, un bufete de 36 años.

---

### OPCIÓN 3 · Cinematográfica

> **H1: No diseñamos páginas web. Construimos mundos donde tu marca puede vivir.**
>
> **Sub:** Landing pages a medida, hechas a mano, una a la vez. Layevska Web Design — el estudio que traduce esencia en arquitectura digital.

**Tono:** declaración directa, casi de manifiesto. Reformula la categoría: "no somos lo que crees que somos".

**Cuándo elegirla:** si querés posicionarte fuera de la conversación de "agencias vs freelancers" — vos hacés otra cosa. Funciona perfecto con el Concepto C de animación (archipiélago).

---

### OPCIÓN 4 · Confianza Premium

> **H1: Tu marca merece su propio universo. No una plantilla.**
>
> **Sub:** Diseñamos landing pages premium para negocios que entienden que la primera impresión digital es la única que cuenta.

**Tono:** asertivo, casi provocador. Apela al ego sano del dueño de negocio que ya sabe que quiere algo mejor.

**Cuándo elegirla:** si tu cliente ideal es alguien con presupuesto y criterio (clínicas premium, firmas legales, restaurantes boutique) — empresarios que valoran sentirse distintos.

---

### OPCIÓN 5 · Poética / Filosófica

> **H1: Algunas empresas merecen más que un sitio. Merecen un lugar al cual volver.**
>
> **Sub:** Layevska construye landings que se sienten escritas a mano. Diseñadas como mundos, no como plantillas.

**Tono:** literario, reflexivo. Trabaja la metáfora del "lugar" — un sitio web no como destino transaccional sino como espacio emocional.

**Cuándo elegirla:** si vas a destacarte por la profundidad conceptual del estudio — perfil de "boutique de autor". Ideal con el Concepto A (Atlas contemplativo) y tipografía serif clásica.

---

### Recomendación de combinaciones copy + animación

| Si elegís el copy... | La animación que mejor acompaña es... |
|---|---|
| 1 · Editorial Premium | A (Atlas Ken Burns) |
| 2 · Narrativa Cálida | D (Travelogue horizontal) |
| 3 · Cinematográfica | C (Archipiélago parallax) |
| 4 · Confianza Premium | B (Stop-motion narrativo) |
| 5 · Poética | A (Atlas Ken Burns) |

---

## 3. 🎨 COMBINACIONES TIPOGRÁFICAS (3 pairings)

Todas las fuentes están en **Google Fonts** — instalación gratuita, performance excelente, soporte completo de pesos variables. Cada pairing comunica una personalidad distinta de Layevska.

---

### PAIRING 1 · Editorial Sofisticado · **Fraunces + Inter**

**Títulos:** [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Serif moderna variable con ejes opsz (optical size) y soft (suavidad)
- Pesos disponibles: 100-900, regular + italic
- Recomendado para H1: **weight 500, soft 50, opsz auto, italic en palabras clave**

**Cuerpo:** [Inter](https://fonts.google.com/specimen/Inter)
- Sans-serif neutral, diseñada para pantallas
- Workhorse: máxima legibilidad sin robarse el show
- Recomendado para body: **weight 400, line-height 1.6**

**Por qué encaja con la estética del Hero:**
Fraunces tiene calidez artesanal por su construcción (serifas suaves, contrastes modulados) — se siente "dibujada a mano" sin perder seriedad editorial. Combinada con Inter neutro, crea el contraste clásico revista premium: encabezado con alma + cuerpo silencioso y funcional. Es la combinación más segura de las tres y la que envejecerá mejor.

**Ejemplo de jerarquía:**
```
Fraunces 64px italic soft 100  →  "Cada empresa es un mundo"
Fraunces 64px regular soft 0   →  "Le damos forma en el digital"
Inter 18px regular             →  Subtítulo / párrafo de cuerpo
```

---

### PAIRING 2 · Boutique Romántico · **Cormorant Garamond + DM Sans**

**Títulos:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
- Reinterpretación delicada del Garamond clásico
- Trazos ultra-finos, mucha personalidad en weight Light/Medium
- Recomendado para H1: **weight 300 o 400, mucha tracking-tight, italics generosos**

**Cuerpo:** [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- Sans-serif geométrico con curvas suaves
- Moderno sin frialdad — un poco más cálido que Inter
- Recomendado para body: **weight 400, tracking ligeramente abierto**

**Por qué encaja con la estética del Hero:**
Cormorant Garamond es una fuente literaria, casi poética. Comunica tradición clásica, oficio, libros de arte. Junto a DM Sans (moderno pero amable), la combinación se siente como una revista literaria contemporánea — sofisticación con corazón. Esta es la opción más romántica de las tres; tiene riesgo de verse "demasiado delicada" si el resto de la página es agresivo, pero brilla en una estética como la propuesta.

**Ejemplo de jerarquía:**
```
Cormorant Garamond 80px light italic  →  "Algunas empresas merecen"
Cormorant Garamond 80px regular        →  "más que un sitio"
DM Sans 18px medium                    →  Subtítulo / párrafo
```

---

### PAIRING 3 · Moda y Arquitectura · **Italiana + Manrope**

**Títulos:** [Italiana](https://fonts.google.com/specimen/Italiana)
- Serif extremadamente narrow y alta
- Estética tipo Vogue, Architectural Digest, alta moda
- Recomendado para H1: **weight 400 (única disponible), letter-spacing 0.02em, mayúsculas opcionales**

**Cuerpo:** [Manrope](https://fonts.google.com/specimen/Manrope)
- Sans-serif humanista moderno, formas redondeadas
- Variable weight 200-800
- Recomendado para body: **weight 500, line-height 1.65**

**Por qué encaja con la estética del Hero:**
Italiana es escultural — comunica sofisticación callada, presencia vertical, lujo editorial puro. Combinada con Manrope humanista, crea una tensión visualmente interesante: el título es vertical y artístico (las imágenes anime también lo son — torres, árboles, casas apiladas hacia arriba), el cuerpo es horizontal y confiable. Esta es la opción más distinctiva — la que más se aleja de lo que cualquier competencia está usando. Riesgo: Italiana solo tiene un peso, así que toda la jerarquía descansa en tamaño + spacing.

**Ejemplo de jerarquía:**
```
Italiana 96px regular                 →  "Tu marca merece su propio"
Italiana 96px regular italic          →  "universo"
Manrope 18px medium                   →  Subtítulo / párrafo
```

---

### Tabla comparativa rápida — tipografías

| Pairing | Personalidad | Riesgo | Originalidad | Recomendado para |
|---|---|---|---|---|
| 1 · Fraunces + Inter | Editorial cálido y serio | Bajo | Media | Cualquier copy. Seguro y elegante. |
| 2 · Cormorant + DM Sans | Boutique literario, romántico | Medio | Alta | Copys 2 y 5 (narrativa cálida / poética). |
| 3 · Italiana + Manrope | Moda alta, arquitectónica | Medio-Alto | Muy Alta | Copys 3 y 4 (cinematográfica / confianza premium). |

---

## 4. 🧭 RECOMENDACIÓN COMBINADA (mi voto como senior)

Si tuviera que elegir UNA combinación completa para Layevska Web Design, considerando que vendes un servicio premium hand-crafted y que las imágenes son acuarelas anime, mi voto es:

> **🎬 Animación: Concepto A — Atlas de Mundos (Ken Burns + crossfade)**
> **✍️ Copy: Opción 2 — Narrativa Cálida**
> **🎨 Tipografía: Pairing 1 — Fraunces + Inter**

**Por qué esta combinación:**
- Es elegante sin ser estridente — coherente con un estudio de dos personas que vende artesanía digital.
- Funciona perfecto en mobile (donde la mayoría de tus prospectos van a verla primero).
- Es la más fácil de mantener y modificar a largo plazo.
- No envejecerá rápido — ninguna decisión es "moda de 2026".
- Combinada, genera una primera impresión que se siente como abrir un libro ilustrado, no como aterrizar en otra landing más.

**Plan B (si querés algo más arriesgado y distintivo):**
> Concepto C (Archipiélago) + Copy 3 (Cinematográfica) + Pairing 3 (Italiana + Manrope) = una landing memorable pero técnicamente más cara de construir y más exigente con el diseño general del resto de la página.

---

## 5. 📋 PRÓXIMO PASO

Decime con qué combinación querés avanzar (animación + copy + tipografía) y procedo a:

1. Reconstruir el archivo `WorldOne.tsx` desde cero con la nueva arquitectura
2. Ajustar `styles.css` del Mundo I con las nuevas variables tipográficas
3. Procesar las 8 imágenes (optimizar a WebP + generar srcset responsivo)
4. Actualizar el resto de la página solo en tipografía (para mantener coherencia con el nuevo Hero)
5. Hacer build de prueba y mostrarte capturas antes del deploy

**Tiempo total estimado** (según combinación elegida): 1-3 días de trabajo.

---

**Layevska Web Design** · Miah Layevska & Bryan Barrantes
San José, Costa Rica · LayevskaWebDesign@gmail.com · WhatsApp +506 8751-8441
