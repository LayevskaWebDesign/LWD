import { motion } from "framer-motion";
import { useState } from "react";
import { PORTFOLIO } from "../../data";
import "./styles.css";

/* ============================================================
   MUNDO VI · JUEGO
   Iridescent Aurora · multi-color saturado armónico
   Galería interactiva donde cada paleta canta
   ============================================================ */
const EASE = [0.45, 0.05, 0.25, 1] as const;

export function WorldSix() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="portafolio"
      aria-label="Portafolio imaginado — Layevska Web Design"
      className="world-six relative py-32 md:py-44 overflow-hidden"
    >
      <div className="world-six__bg" aria-hidden="true" />
      <div className="world-six__aurora" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-8 left-8 z-10 pointer-events-none"
      >
        <div className="font-display text-[11px] tracking-[0.45em] leading-none aurora-label">VI</div>
        <div className="font-serif italic text-[10px] tracking-[0.18em] mt-1.5 leading-none ivory-soft">
          mundos imaginados
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase aurora-label">
            — Galería de futuras landings —
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory mt-4">
            Seis landings <em className="aurora-italic font-serif">imaginadas</em> para distintas industrias.
          </h2>
          <p className="mt-6 font-serif italic text-lg text-ivory/75 leading-relaxed">
            Aún no las construimos, pero ya las sentimos. Pasá el cursor por cada una y mirá su paleta cantar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {PORTFOLIO.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="world-six__card group"
              style={{
                background: active === i
                  ? `linear-gradient(135deg, ${p.palette[0]} 0%, ${p.palette[1]} 50%, ${p.palette[2] ?? p.accent} 100%)`
                  : "linear-gradient(135deg, rgba(14,36,53,0.7) 0%, rgba(28,64,88,0.7) 100%)",
                transition: "background 0.6s cubic-bezier(0.2,0.8,0.2,1)",
              }}
            >
              {/* Aurora gradient overlay */}
              <div className="world-six__card-aurora" />

              {/* Title block */}
              <div className="relative z-10">
                <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-ivory/60">
                  Caso #{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ivory mt-2">
                  {p.name}
                </h3>
                <span className="font-serif italic text-sm text-ivory/65">{p.industry}</span>
              </div>

              {/* Palette dots */}
              <div className="relative z-10 mt-6 flex gap-2 flex-wrap">
                {p.palette.map((hex, j) => (
                  <motion.span
                    key={j}
                    className="world-six__swatch"
                    style={{ background: hex }}
                    animate={active === i
                      ? { scale: [1, 1.3, 1], y: [0, -8, 0] }
                      : { scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: j * 0.08, repeat: active === i ? Infinity : 0, repeatDelay: 1.2 }}
                  />
                ))}
              </div>

              {/* Summary */}
              <p className="relative z-10 mt-5 text-sm text-ivory/80 leading-relaxed">
                {p.summary}
              </p>

              {/* Hover accent line */}
              <span className="world-six__card-line" />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }} className="mt-16 text-center"
        >
          <a href="#contacto" className="btn btn-primary">Imaginar la tuya →</a>
        </motion.div>
      </div>
    </section>
  );
}
