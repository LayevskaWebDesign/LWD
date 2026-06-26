import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "../../data";
import "./styles.css";

/* ============================================================
   MUNDO VII · CALMA
   Teal Mist #7AAFB8 · atmósfera submarina, preguntas suspendidas
   ============================================================ */
const EASE = [0.45, 0.05, 0.25, 1] as const;

export function WorldSeven() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Dudas frecuentes — Layevska Web Design"
      className="world-seven relative py-32 md:py-44 overflow-hidden"
    >
      <div className="world-seven__bg" aria-hidden="true" />
      <div className="world-seven__mist" aria-hidden="true" />
      <div className="world-seven__bubbles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{
            left: `${(i * 8.3 + 4) % 100}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${10 + (i % 5) * 2}s`,
          }} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-8 left-8 z-10 pointer-events-none"
      >
        <div className="font-display text-[11px] tracking-[0.45em] leading-none teal-label">VII</div>
        <div className="font-serif italic text-[10px] tracking-[0.18em] mt-1.5 leading-none ivory-soft">
          tus dudas, en calma
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase teal-label inline-flex items-center gap-3 teal-rule justify-center">
            Antes de firmar
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory mt-4">
            Las <em className="teal-italic font-serif">preguntas</em> que ya escuchamos.
          </h2>
          <p className="mt-6 font-serif italic text-lg text-ivory/75 leading-relaxed">
            Las respondemos antes de que nos las hagas. Sin ruido, sin trampa.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-open={isOpen}
                className="world-seven__faq"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base md:text-lg font-semibold text-ivory">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="shrink-0 teal-label-bright"
                  >
                    <Plus size={22} strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-6 text-sm md:text-base text-ivory/80 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
