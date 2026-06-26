import { motion } from "framer-motion";
import { AtlasOfWorlds } from "./scene/AtlasOfWorlds";
import { ChapterMark } from "./ui/ChapterMark";
import { HeroCTAs } from "./ui/HeroCTAs";
import "./styles.css";

/* ============================================================
   MUNDO I · HERO V2 — ATLAS DE MUNDOS
   ============================================================
   Atlas de 8 acuarelas hand-painted con Ken Burns + crossfade,
   tipografía Fraunces para el H1 y subtítulo, copy nuevo basado
   en "Cada empresa es un mundo. Hacemos que también exista en
   el real."

   Estructura vertical (mobile-first):
     1) Background atlas (full-bleed, posición fixed-like)
     2) Capa de contenido:
        - Cintillo cinematográfico
        - Bloque editorial central (H1 + subtítulo + CTAs)
        - Indicador de scroll
   ============================================================ */
const EASE = [0.45, 0.05, 0.25, 1] as const;

interface WorldOneProps {
  onOpenCalendar?: () => void;
}

export function WorldOne({ onOpenCalendar }: WorldOneProps = {}) {
  return (
    <section
      id="world-one"
      aria-label="Inicio — Layevska Web Design"
      className="world-one relative w-full min-h-screen overflow-hidden flex flex-col"
    >
      {/* Atlas de mundos — capa visual de fondo (ocupa toda la sección) */}
      <div className="world-one__atlas" aria-hidden="true">
        <AtlasOfWorlds />
      </div>

      {/* Cintillo cinematográfico encima de todo */}
      <div className="relative z-30">
        <ChapterMark />
      </div>

      {/* Bloque editorial — copy principal */}
      <div className="world-one__content relative z-20 flex-1 flex items-center justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="w-full max-w-[1180px] mx-auto text-center">
          {/* Tagline mini sobre el H1 */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: EASE }}
            className="world-one__eyebrow"
          >
            <span className="world-one__eyebrow-line" />
            Layevska Web Design
            <span className="world-one__eyebrow-line" />
          </motion.span>

          {/* H1 — dos líneas tipo libro */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
            className="world-one__h1"
          >
            <span className="world-one__h1-line">
              Cada empresa es un{" "}
              <em className="world-one__h1-em">mundo</em>.
            </span>
            <span className="world-one__h1-line">
              Hacemos que también exista en el{" "}
              <em className="world-one__h1-em world-one__h1-em--alt">real</em>.
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.5, ease: EASE }}
            className="world-one__sub"
          >
            Layevska construye landing pages a la medida.
            <span className="world-one__sub-divider" />
            Una por una. Hechas a mano.
          </motion.p>

          {/* CTAs + risk reversal */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.9, ease: EASE }}
            className="mt-10 flex justify-center"
          >
            <HeroCTAs onOpenCalendar={onOpenCalendar} />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint — discreto, abajo centro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 2.6 }}
        className="world-one__scrollhint"
        aria-hidden="true"
      >
        <span className="world-one__scrollhint-text">explorar</span>
        <span className="world-one__scrollhint-line" />
      </motion.div>

      {/* SEO + screen readers */}
      <div className="sr-only">
        <h1>Layevska Web Design — landing pages a medida en Costa Rica</h1>
        <p>
          Estudio costarricense que diseña landing pages premium hechas a mano.
          Cada empresa es un mundo. Hacemos que también exista en el real.
          Una por una. Sin plantillas.
        </p>
      </div>
    </section>
  );
}
