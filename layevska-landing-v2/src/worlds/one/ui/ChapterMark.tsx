import { motion } from "framer-motion";

/* ============================================================
   MUNDO I · CINTILLO CINEMATOGRÁFICO
   ============================================================
   Esquina superior izquierda. Número romano + fragmento poético.
   Casi imperceptible — habla la atmósfera, no el letrero.
   ============================================================ */

interface ChapterMarkProps {
  number?: string;
  hint?: string;
}

export function ChapterMark({ number = "I", hint = "el comienzo" }: ChapterMarkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
      className="absolute top-6 left-8 z-20 pointer-events-none select-none"
    >
      <div
        className="font-display text-[11px] tracking-[0.45em] leading-none"
        style={{ color: "rgba(201, 169, 97, 0.45)" }}
      >
        {number}
      </div>
      <div
        className="font-serif italic text-[10px] tracking-[0.18em] mt-1.5 leading-none"
        style={{ color: "rgba(250, 247, 242, 0.32)" }}
      >
        {hint}
      </div>
    </motion.div>
  );
}
