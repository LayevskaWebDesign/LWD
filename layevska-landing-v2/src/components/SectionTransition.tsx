import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ============================================================
   SECTION TRANSITION
   Tres variantes artísticas que se colocan ENTRE secciones:

   - "cinematic": lens flare horizontal + barrido de luz dorada
   - "editorial": esquina dorada tipo "página de libro" + chapter dot
   - "canvas":    líneas finas dibujándose + forma orgánica acuarela

   Uso:
   <SectionTransition variant="cinematic" />
   ============================================================ */

type Variant = "cinematic" | "editorial" | "canvas";

interface Props {
  variant?: Variant;
  label?: string;
}

export function SectionTransition({ variant = "canvas", label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Mapas reutilizables
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const flareX = useTransform(scrollYProgress, [0, 1], ["-30%", "130%"]);
  const dash = useTransform(scrollYProgress, [0.1, 0.9], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <div
      ref={ref}
      className="relative w-full h-24 md:h-32 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {variant === "cinematic" && (
        <>
          {/* Lens flare barriendo de izquierda a derecha */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-[40%] h-12 blur-2xl"
            style={{
              x: flareX,
              opacity,
              background:
                "radial-gradient(ellipse, rgba(255,247,212,0.85) 0%, rgba(221,194,137,0.45) 35%, transparent 70%)",
            }}
          />
          {/* Línea fina horizontal de "horizonte cinematográfico" */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 left-[10%] right-[10%] h-px"
            style={{
              opacity,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(201,169,97,0.7) 50%, transparent 100%)",
            }}
          />
          {/* 2 puntos centrales tipo "marca de centrado" */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gold-bright shadow-gold-glow"
            style={{ opacity }}
          />
          {label && (
            <motion.span
              style={{ opacity }}
              className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-widest2 text-gold-bright/70"
            >
              ◆ {label} ◆
            </motion.span>
          )}
        </>
      )}

      {variant === "editorial" && (
        <>
          {/* Esquina dorada como "doblez de página" */}
          <motion.div
            className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32"
            style={{
              opacity,
              clipPath: "polygon(100% 0%, 100% 100%, 0% 0%)",
              background:
                "linear-gradient(135deg, rgba(201,169,97,0.30) 0%, rgba(122,96,32,0.10) 70%, transparent 100%)",
              boxShadow:
                "inset -1px 1px 0 rgba(221,194,137,0.55), -1px 1px 8px rgba(0,0,0,0.4)",
            }}
          />
          {/* Línea diagonal dorada (la marca del doblez) */}
          <motion.svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32"
            style={{ opacity }}
          >
            <motion.line
              x1="100"
              y1="0"
              x2="0"
              y2="100"
              stroke="#C9A961"
              strokeWidth="0.5"
              strokeDasharray="200"
              style={{ strokeDashoffset: useTransform(dash, (v) => v * 200) }}
            />
          </motion.svg>
          {/* Chapter dot al centro izquierdo */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 left-[8%] flex items-center gap-3"
            style={{ opacity }}
          >
            <span className="w-2 h-2 rounded-full bg-gold-bright shadow-gold-glow" />
            <span className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
            {label && (
              <span className="font-mono text-[9px] uppercase tracking-widest2 text-gold-bright/70">
                {label}
              </span>
            )}
          </motion.div>
        </>
      )}

      {variant === "canvas" && (
        <>
          {/* Forma orgánica acuarela rotando lento */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              opacity,
              rotate,
              width: 160,
              height: 36,
              borderRadius: "50% 60% 70% 40% / 50% 60% 40% 50%",
              background:
                "radial-gradient(ellipse, rgba(241,203,191,0.18) 0%, rgba(160,189,193,0.12) 50%, transparent 80%)",
              filter: "blur(8px)",
            }}
          />
          {/* Tres líneas finas dibujándose */}
          <motion.svg
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            style={{ opacity }}
          >
            <motion.line
              x1="100"
              y1="50"
              x2="700"
              y2="50"
              stroke="#C9A961"
              strokeWidth="0.5"
              strokeOpacity="0.65"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: dash,
              }}
            />
            <motion.line
              x1="180"
              y1="38"
              x2="620"
              y2="38"
              stroke="#DDC289"
              strokeWidth="0.4"
              strokeOpacity="0.35"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: useTransform(dash, (v) => Math.max(0, v - 0.1)),
              }}
            />
            <motion.line
              x1="180"
              y1="62"
              x2="620"
              y2="62"
              stroke="#DDC289"
              strokeWidth="0.4"
              strokeOpacity="0.35"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: useTransform(dash, (v) => Math.max(0, v - 0.1)),
              }}
            />
          </motion.svg>
          {/* Diamante central ◆ */}
          <motion.span
            style={{ opacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold text-xs"
          >
            ◆
          </motion.span>
          {label && (
            <motion.span
              style={{ opacity }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-widest2 text-gold-bright/60"
            >
              {label}
            </motion.span>
          )}
        </>
      )}
    </div>
  );
}
