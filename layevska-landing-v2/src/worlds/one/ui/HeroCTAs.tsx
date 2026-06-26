import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Calendar } from "lucide-react";

interface HeroCTAsProps {
  onOpenCalendar?: () => void;
}

/* ============================================================
   MUNDO I · CTAs + Risk reversal + Scroll hint
   ============================================================
   Ya NO usa absolute. Vive dentro del flex-col del WorldOne
   asegurando que nunca tape el logo y siempre sea clickeable.
   ============================================================ */

const EASE = [0.45, 0.05, 0.25, 1] as const;

export function HeroCTAs({ onOpenCalendar }: HeroCTAsProps) {
  return (
    <>
      {/* Botones CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 7.4, ease: EASE }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md sm:max-w-none"
      >
        <a
          href="#contacto"
          className="btn btn-primary group !px-7 !py-4 text-sm justify-center"
        >
          Cotizar mi landing
          <span className="inline-flex transition-transform group-hover:translate-x-1">
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </a>
        {onOpenCalendar ? (
          <button
            type="button"
            onClick={onOpenCalendar}
            className="btn btn-outline group !px-7 !py-4 text-sm inline-flex items-center justify-center gap-2"
          >
            <Calendar size={16} strokeWidth={1.8} />
            Agendar llamada
          </button>
        ) : (
          <a
            href="#por-que"
            className="btn btn-outline !px-7 !py-4 text-sm justify-center"
          >
            Conocer el estudio
          </a>
        )}
      </motion.div>

      {/* Risk reversal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 8.0 }}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-gold/25"
        style={{
          background: "rgba(201,169,97,0.08)",
          backdropFilter: "blur(4px)",
        }}
      >
        <ShieldCheck size={13} strokeWidth={1.8} className="text-gold-bright shrink-0" />
        <span className="font-serif italic text-[12px] md:text-[13px] text-ivory/85 leading-tight">
          Vista previa antes de pagar. Si no te enamora,{" "}
          <em className="gold-text not-italic font-semibold">no cobramos</em>.
        </span>
      </motion.div>

      {/* Hint de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 8.6 }}
        className="flex flex-col items-center gap-1 pointer-events-none mt-1"
      >
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-gold-bright/50">
          desplazar
        </span>
        <motion.span
          animate={{ y: [0, 5, 0], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-bright/65"
        >
          <ChevronDown size={18} strokeWidth={1.4} />
        </motion.span>
      </motion.div>
    </>
  );
}
