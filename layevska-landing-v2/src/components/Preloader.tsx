import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PreloaderProps {
  durationMs?: number;
  onComplete?: () => void;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const COUNT = 42;

function generateSparkles(): Sparkle[] {
  return Array.from({ length: COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 35 + Math.random() * 30, // alrededor del texto
    size: 4 + Math.random() * 8,
    delay: Math.random() * 4,
    duration: 1.2 + Math.random() * 1.6,
  }));
}

export function Preloader({
  durationMs = 7000,
  onComplete,
}: PreloaderProps) {
  const [done, setDone] = useState(false);
  const sparkles = useMemo(generateSparkles, []);

  useEffect(() => {
    // Bloquear scroll mientras está el preloader visible
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const restoreScroll = () => {
      document.body.style.overflow = prev || "";
    };

    const t = window.setTimeout(() => {
      setDone(true);
      // Restaurar scroll en cuanto el preloader empieza a desvanecerse
      restoreScroll();
      // Y notificar al padre cuando termina el fade-out
      window.setTimeout(() => onComplete?.(), 1200);
    }, durationMs);

    return () => {
      window.clearTimeout(t);
      restoreScroll();
    };
  }, [durationMs, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader-bg fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.1, ease: [0.2, 0.8, 0.2, 1] } }}
          aria-hidden="true"
        >
          {/* Sparkles dorados flotantes */}
          {sparkles.map((s) => (
            <motion.span
              key={s.id}
              className="sparkle"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: s.size,
                height: s.size,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.6, 1, 0],
                scale: [0, 1.2, 0.9, 1.3, 0],
                y: [0, -60, -30, -90, -120],
                rotate: [0, 180, 270, 360],
              }}
              transition={{
                duration: s.duration,
                delay: s.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Halo radial detrás del texto */}
          <motion.div
            className="absolute"
            style={{
              width: 720,
              height: 720,
              background:
                "radial-gradient(circle, rgba(221,194,137,0.28) 0%, rgba(201,169,97,0.14) 35%, transparent 70%)",
              filter: "blur(40px)",
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.7, 1.05, 0.9, 1], opacity: [0.4, 1, 0.7, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Texto principal 3D dorado */}
          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            <motion.span
              className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold-bright/80 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              — Estudio · San José, Costa Rica —
            </motion.span>

            <motion.h1
              className="gold-3d text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-4"
              initial={{ opacity: 0, scale: 0.85, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ perspective: 800 }}
            >
              Layevska
            </motion.h1>
            <motion.h2
              className="gold-3d text-2xl md:text-4xl lg:text-5xl tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              Web Design
            </motion.h2>

            <motion.div
              className="mt-10 w-44 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.4 }}
            />
            <motion.span
              className="font-serif italic text-ivory/70 text-sm md:text-base mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.8 }}
            >
              Diseño cinematográfico. Conversión obsesiva.
            </motion.span>

            {/* Barra de progreso */}
            <div className="mt-12 w-64 h-[2px] bg-ivory/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-bright"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: durationMs / 1000 - 0.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
