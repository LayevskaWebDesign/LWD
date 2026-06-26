import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "../data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32"
      style={{
        background:
          "radial-gradient(ellipse at 80% 20%, rgba(241,203,191,0.12) 0%, transparent 55%)," +
          "linear-gradient(180deg, #1C4058 0%, #0E2435 100%)",
      }}
    >
      <div className="container mx-auto px-5 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="chapter-label justify-center mb-6">VII. FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark">
            Dudas <em className="gold-text italic font-serif">frecuentes</em>.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                data-open={isOpen}
                className="faq-item border border-gold/15 rounded-sm overflow-hidden bg-navy-deep/40"
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
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-gold-bright"
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
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-ivory/75 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
