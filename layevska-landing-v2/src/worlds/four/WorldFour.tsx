import { motion } from "framer-motion";
import { PROCESO_6 } from "../../data";
import { ClockworkOrnament } from "./scene/ClockworkOrnament";
import "./styles.css";

/* ============================================================
   MUNDO IV · CONFIANZA
   Brass Patina #7A8F6B · clockwork
   ============================================================ */
const EASE = [0.45, 0.05, 0.25, 1] as const;

export function WorldFour() {
  return (
    <section
      id="proceso-6"
      aria-label="Proceso en 6 pasos — Layevska Web Design"
      className="world-four relative py-32 md:py-44 overflow-hidden"
    >
      <div className="world-four__bg" aria-hidden="true" />
      <div className="world-four__patina" aria-hidden="true" />

      {/* Cintillo */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-8 left-8 z-10 pointer-events-none"
      >
        <div className="font-display text-[11px] tracking-[0.45em] leading-none brass-label">IV</div>
        <div className="font-serif italic text-[10px] tracking-[0.18em] mt-1.5 leading-none ivory-soft">
          el oficio en marcha
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Ornamento clockwork central */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE }}
              className="world-four__ornament-wrap"
            >
              <ClockworkOrnament />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <span className="font-mono text-[9px] tracking-[0.35em] uppercase brass-label">
                Mecánica de 7 días · sin caja negra
              </span>
            </motion.div>
          </div>

          {/* Steps editorial */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
            >
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase brass-label inline-flex items-center gap-3 brass-rule">
                Cómo trabajamos contigo
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory mt-4">
                Seis pasos, siete días.{" "}
                <em className="brass-italic font-serif">Cero ambigüedad</em> de principio a fin.
              </h2>
              <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed max-w-2xl">
                {PROCESO_6.lead}
              </p>
            </motion.div>

            <ol className="mt-12 space-y-3">
              {PROCESO_6.steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
                  className="world-four__step group"
                >
                  <div className="world-four__step-marker">
                    <span className="font-display brass-italic text-2xl leading-none">{s.n}</span>
                    <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-ivory/55 mt-1">
                      {s.day}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-ivory">{s.title}</h3>
                    <p className="text-sm text-ivory/72 leading-relaxed mt-1">{s.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <a href="#contacto" className="btn btn-primary">Empezar el día 1 →</a>
              <p className="mt-4 font-mono text-[10px] tracking-[0.35em] uppercase brass-label">
                Tu landing publicada en una semana
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
