import { motion } from "framer-motion";
import { COMO } from "../../data";
import { BlueprintCanvas } from "./scene/BlueprintCanvas";
import "./styles.css";

/* ============================================================
   MUNDO III · CURIOSIDAD
   ============================================================
   Acompañante cromático: Pearl Silver #C5C8D6
   Atmósfera: mesa de dibujante, atelier técnico, blueprint
   premium. Light section (alterna con los dos navy previos).
   Layout asimétrico izquierda-pesado (texto stack vertical
   con números + blueprint SVG a la derecha grande).
   ============================================================ */

const EASE = [0.45, 0.05, 0.25, 1] as const;

export function WorldThree() {
  return (
    <section
      id="proceso"
      aria-label="Cómo lo hacemos — Layevska Web Design"
      className="world-three relative py-32 md:py-40 overflow-hidden"
    >
      {/* Capas de fondo */}
      <div className="world-three__bg" aria-hidden="true" />
      <div className="world-three__paper" aria-hidden="true" />
      <div className="world-three__grid" aria-hidden="true" />

      {/* Cintillo */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-8 left-8 z-10 pointer-events-none"
      >
        <div
          className="font-display text-[11px] tracking-[0.45em] leading-none"
          style={{ color: "rgba(20, 35, 63, 0.55)" }}
        >
          III
        </div>
        <div
          className="font-serif italic text-[10px] tracking-[0.18em] mt-1.5 leading-none"
          style={{ color: "rgba(20, 35, 63, 0.42)" }}
        >
          el oficio
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna izquierda — Texto stack vertical */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            >
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase silver-ink mb-5 inline-flex items-center gap-3 silver-rule">
                El oficio detrás
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] navy-text mt-4">
                Diseño hecho a{" "}
                <em className="silver-italic font-serif">mano</em>. Nunca a máquina.
              </h2>
              <p className="mt-6 font-serif italic text-lg md:text-xl navy-text/75 leading-relaxed max-w-md">
                {COMO.lead}
              </p>
            </motion.div>

            {/* 4 pasos como ledger técnico */}
            <ol className="mt-10 space-y-1">
              {COMO.steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.12, ease: EASE }}
                  className="world-three__step group"
                >
                  <span className="world-three__step-num">{s.n}</span>
                  <div className="world-three__step-content">
                    <h3 className="font-serif text-lg md:text-xl font-semibold navy-text">
                      {s.title}
                    </h3>
                    <p className="text-sm navy-text/70 leading-relaxed mt-1">
                      {s.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Columna derecha — Blueprint canvas (scroll natural, sin sticky) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
              className="world-three__blueprint-frame"
            >
              <BlueprintCanvas />
              {/* Etiqueta tipo plano arquitectónico */}
              <div className="world-three__blueprint-label">
                <span className="font-mono text-[9px] tracking-[0.35em] uppercase navy-text/65">
                  Maqueta de referencia · sin escala
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
