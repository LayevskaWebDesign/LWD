import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import { PORQUE } from "../../data";
import { MedalionThreads } from "./scene/MedalionThreads";
import "./styles.css";

/* ============================================================
   MUNDO II · INTIMIDAD
   ============================================================
   Acompañante cromático: Ember Warm #E8A87C
   Emoción nuclear: intimidad / calidez / cercanía humana.
   Layout asimétrico: medallón ornamental a la izquierda,
   texto editorial a la derecha. Contenido del PorQue presentado
   como confidencia, no como copy.
   ============================================================ */

const EASE = [0.45, 0.05, 0.25, 1] as const;

const ICONS = [Heart, ShieldCheck, Sparkles] as const;

export function WorldTwo() {
  return (
    <section
      id="por-que"
      aria-label="Por qué existimos — Layevska Web Design"
      className="world-two relative py-32 md:py-40 overflow-hidden"
    >
      {/* Capas de fondo: navy + ember radial cálido */}
      <div className="world-two__bg" aria-hidden="true" />
      <div className="world-two__warmth" aria-hidden="true" />
      <div className="world-two__noise" aria-hidden="true" />

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
          style={{ color: "rgba(232, 168, 124, 0.55)" }}
        >
          II
        </div>
        <div
          className="font-serif italic text-[10px] tracking-[0.18em] mt-1.5 leading-none"
          style={{ color: "rgba(250, 247, 242, 0.38)" }}
        >
          el porqué
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Columna izquierda — Medallón ornamental */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px]">
              <MedalionThreads />
            </div>
          </div>

          {/* Columna derecha — Editorial */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, delay: 0.4, ease: EASE }}
            >
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-ember mb-5 inline-flex items-center gap-3 ember-rule">
                Nuestra razón de ser
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory mt-4">
                Hacemos visible lo que tu marca{" "}
                <em className="ember-italic font-serif">ya es</em>: digna de ser elegida.
              </h2>
              <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed max-w-2xl">
                {PORQUE.lead}
              </p>
            </motion.div>

            {/* 3 puntos como confidencias editoriales */}
            <div className="mt-12 space-y-7">
              {PORQUE.points.map((p, i) => {
                const Icon = ICONS[i] ?? Heart;
                return (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.75, delay: 0.5 + i * 0.15, ease: EASE }}
                    className="world-two__card group"
                  >
                    {/* Número en esquina + Icono */}
                    <div className="world-two__card-marker">
                      <span className="font-display ember-gold text-2xl leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-ember-bright opacity-80 group-hover:opacity-100 transition"
                      />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-ivory mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm md:text-base text-ivory/72 leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Firma editorial */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="mt-12 pt-8 border-t border-ember/20"
            >
              <p className="font-serif italic text-sm text-ivory/55">
                — <span className="ember-italic">Miah Layevska</span> &{" "}
                <span className="ember-italic">Bryan Barrantes</span>, fundadores
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
