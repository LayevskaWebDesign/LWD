import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* ============================================================
   MUNDO I · ATLAS DE MUNDOS — V3 (ZOU ARC)
   ============================================================
   Slideshow cinematográfico de 7 ilustraciones de la isla-ballena
   Zou con:
     · Crossfade extendido (2.0s) que simula interpolación
     · Gaussian blur peak al midpoint (efecto morphing-like)
     · Ken Burns continuo entre frames (el final de uno empata
       con el inicio del siguiente → ilusión de cámara fluida)
     · Camera moves específicos por escena, matcheados a la
       directiva escena-por-escena del cliente
     · Respeta prefers-reduced-motion

   Las imágenes deben estar en /public/hero/ con nombres:
     zou-01.jpg ... zou-07.jpg
   ============================================================ */

interface ZouFrame {
  src: string;
  alt: string;
  /** Coords iniciales y finales del Ken Burns (porcentaje del frame). */
  from: { x: number; y: number; scale: number };
  to: { x: number; y: number; scale: number };
  /** Etiqueta narrativa de la escena (solo para devs). */
  scene: string;
}

/* ============================================================
   7 FRAMES — Camera moves matcheados a la directiva del cliente
   ============================================================
   Cada from→to está calibrado para crear continuidad de cámara
   entre escenas. El "to" del frame N tiene un movimiento similar
   al "from" del frame N+1, dando la sensación de toma única.
   ============================================================ */
const FRAMES: ZouFrame[] = [
  {
    // ESCENA 1 · Establecimiento — vista panorámica amplia con arcoíris
    // Cámara: zoom muy lento, pan suave hacia el centro-abajo
    src: "/hero/zou-01.jpg",
    alt: "Vista panorámica de Zou con arcoíris sobre la isla-ballena",
    from: { x: 0, y: 0, scale: 1.00 },
    to:   { x: 0, y: 3, scale: 1.08 },
    scene: "establishment",
  },
  {
    // ESCENA 2 · Panoramización a la base — pan-down hacia la ciudad antigua
    // Cámara: empieza arriba (continúa el final del frame 1) y baja
    src: "/hero/zou-02.jpg",
    alt: "Detalle de las torres antiguas de piedra con arcoíris al fondo",
    from: { x: 0, y: -3, scale: 1.04 },
    to:   { x: 0, y: 4, scale: 1.12 },
    scene: "pan-down",
  },
  {
    // ESCENA 3 · Primer plano de la espina — pan-up siguiendo la curva del bosque
    // Cámara: empieza abajo, sube. Empata con el final del frame 2.
    src: "/hero/zou-03.jpg",
    alt: "Vista cenital de la meseta central de Zou con el gran árbol",
    from: { x: 0, y: 4, scale: 1.06 },
    to:   { x: 0, y: -3, scale: 1.14 },
    scene: "spine-to-tail",
  },
  {
    // ESCENA 4 · Seguimiento ascendente — espalda de la ballena
    // Cámara: pan-up continuo, leve drift lateral
    src: "/hero/zou-04.jpg",
    alt: "Torre antigua de piedra cubierta de musgo y vegetación",
    from: { x: -1, y: -3, scale: 1.04 },
    to:   { x: 2, y: -1, scale: 1.10 },
    scene: "ascending-back",
  },
  {
    // ESCENA 5 · Primer plano del árbol — enfoque al árbol central
    // Cámara: zoom-in lento sobre el árbol gigante
    src: "/hero/zou-05.jpg",
    alt: "Gran árbol central de Zou con la silueta de aleta de ballena",
    from: { x: 0, y: 0, scale: 1.02 },
    to:   { x: 0, y: -2, scale: 1.16 },
    scene: "tree-closeup",
  },
  {
    // ESCENA 6 · Vista de la espalda completa — la ballena en su totalidad
    // Cámara: pull-back lento con pan lateral suave
    src: "/hero/zou-06.jpg",
    alt: "La espalda de la ballena-isla vista desde lateral",
    from: { x: 0, y: -2, scale: 1.14 },
    to:   { x: -2, y: 0, scale: 1.04 },
    scene: "back-pullback",
  },
  {
    // ESCENA 7 · Reveal de la cima — movimiento majestuoso hacia arriba
    // Cámara: pan-up amplio para enlazar con el frame 1 del loop
    src: "/hero/zou-07.jpg",
    alt: "Reveal final: el gran árbol sobre la cima de Zou",
    from: { x: 0, y: 5, scale: 1.06 },
    to:   { x: 0, y: -2, scale: 1.12 },
    scene: "summit-reveal",
  },
];

// Timing cinematográfico — 3.5s visible + 2s crossfade ≈ 5.5s por escena
const SCENE_DURATION_MS = 3500;
const CROSSFADE_DURATION = 2.0;  // segundos
const KEN_BURNS_DURATION = (SCENE_DURATION_MS / 1000) + CROSSFADE_DURATION;
const BLUR_PEAK_PX = 6;  // Pico del Gaussian blur al midpoint del crossfade

// Easing in-out cinematográfico
const CINEMATIC_EASE = [0.65, 0, 0.35, 1] as const;

export function AtlasOfWorlds() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % FRAMES.length);
    }, SCENE_DURATION_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  // Reduced motion → primera imagen estática, sin animaciones
  if (reducedMotion) {
    return (
      <div className="atlas-of-worlds atlas-of-worlds--static">
        <img src={FRAMES[0].src} alt={FRAMES[0].alt} className="atlas-frame__img" />
        <div className="atlas-of-worlds__vignette" aria-hidden="true" />
        <div className="atlas-of-worlds__grain" aria-hidden="true" />
        <div className="atlas-of-worlds__overlay" aria-hidden="true" />
      </div>
    );
  }

  const current = FRAMES[index];

  return (
    <div className="atlas-of-worlds" role="img" aria-label="Atlas cinematográfico de mundos">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="atlas-frame"
          // Estados: 0 → 1 → 0 con blur peak en 0.5
          initial={{
            opacity: 0,
            scale: current.from.scale,
            x: `${current.from.x}%`,
            y: `${current.from.y}%`,
            filter: `blur(${BLUR_PEAK_PX}px)`,
          }}
          animate={{
            opacity: 1,
            scale: current.to.scale,
            x: `${current.to.x}%`,
            y: `${current.to.y}%`,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            filter: `blur(${BLUR_PEAK_PX}px)`,
          }}
          transition={{
            // Crossfade: 2s con curva cinematográfica
            opacity: { duration: CROSSFADE_DURATION, ease: CINEMATIC_EASE },
            // Blur dissolve: mismo timing que opacity (peak natural al midpoint)
            filter:  { duration: CROSSFADE_DURATION, ease: CINEMATIC_EASE },
            // Ken Burns: lineal a lo largo de toda la duración visible
            scale:   { duration: KEN_BURNS_DURATION, ease: "linear" },
            x:       { duration: KEN_BURNS_DURATION, ease: "linear" },
            y:       { duration: KEN_BURNS_DURATION, ease: "linear" },
          }}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="atlas-frame__img"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      {/* Vignette suave para anclar la mirada en el centro */}
      <div className="atlas-of-worlds__vignette" aria-hidden="true" />
      {/* Grain procedural — sensación de acuarela */}
      <div className="atlas-of-worlds__grain" aria-hidden="true" />
      {/* Overlay navy para fundir con la paleta Layevska */}
      <div className="atlas-of-worlds__overlay" aria-hidden="true" />

      {/* Indicador discreto de progreso (7 puntos abajo derecha) */}
      <div className="atlas-of-worlds__progress" aria-hidden="true">
        {FRAMES.map((_, i) => (
          <span
            key={i}
            className={`atlas-of-worlds__dot ${i === index ? "is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
