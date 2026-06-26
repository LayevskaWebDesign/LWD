import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export function Testimonios() {
  return (
    <section
      id="testimonios"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 80%, rgba(241,203,191,0.18) 0%, transparent 55%)," +
          "linear-gradient(180deg, #1C4058 0%, #0E2435 100%)",
      }}
    >
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="chapter-label justify-center mb-6">V. Voces</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark">
            Lo que dicen quienes ya{" "}
            <em className="gold-text italic font-serif">trabajaron con nosotros</em>.
          </h2>
        </motion.div>

        {/* Carrusel horizontal en mobile, grid en desktop */}
        <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-7 overflow-x-auto md:overflow-visible pb-2 -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative shrink-0 w-[85vw] md:w-auto snap-center bg-navy-deep/65 backdrop-blur-sm border border-gold/20 rounded-sm p-7 hover:border-gold/55 hover:shadow-gold transition-all"
            >
              <Quote
                size={32}
                strokeWidth={1.2}
                className="absolute top-5 right-5 text-gold/40"
                aria-hidden="true"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, k) => (
                  <Star
                    key={k}
                    size={15}
                    fill="#DDC289"
                    stroke="#DDC289"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <blockquote className="font-serif italic text-base md:text-lg text-ivory/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-gold/15">
                <div className="font-semibold text-ivory text-sm">{t.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-wide text-gold-bright/80 mt-0.5">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
