import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO } from "../data";

export function Portafolio() {
  return (
    <section
      id="portafolio"
      className="section-light tone-ivory relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="chapter-label mb-6">IV. Portafolio</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark">
            Seis landings <em className="gold-text italic font-serif">imaginadas</em> para
            distintas industrias.
          </h2>
          <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed">
            Pasá el cursor sobre cada pieza: los colores de su paleta van a saltar
            como pequeñas explosiones cromáticas, igual que cuando un diseñador
            descubre la armonía perfecta.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((p, i) => (
            <PortfolioCard key={p.name} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Item = (typeof PORTFOLIO)[number];

function PortfolioCard({ item, index }: { item: Item; index: number }) {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        ref={ref}
        className="museum-frame aspect-[4/5] cursor-pointer relative overflow-hidden"
      >
        <div
          className="absolute inset-3 overflow-hidden"
          style={{
            clipPath: hover
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: "clip-path 0.6s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {/* Imagen abstracta (gradiente de la paleta) */}
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${item.palette.join(", ")})`,
            }}
          />

          {/* Liquid mask overlay (efecto cinematográfico al hover) */}
          <AnimatePresence>
            {hover && (
              <motion.div
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 3, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${item.accent}80 0%, transparent 70%)`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </AnimatePresence>

          {/* Mock UI dentro */}
          <div className="relative h-full p-5 flex flex-col">
            <div className="h-1.5 w-12 bg-white/40 rounded-sm" />
            <div className="mt-2 h-1 w-20 bg-white/25 rounded-sm" />
            <div className="mt-1 h-1 w-16 bg-white/25 rounded-sm" />
            <div className="mt-auto flex gap-1.5">
              <div className="h-3.5 w-14 bg-gold rounded-sm" />
              <div className="h-3.5 w-10 border border-white/50 rounded-sm" />
            </div>
          </div>

          {/* Color explosion: dots de la paleta volando al hacer hover */}
          <AnimatePresence>
            {hover &&
              item.palette.map((hex, i) => {
                const angle = (i / item.palette.length) * Math.PI * 2;
                const distance = 90;
                return (
                  <motion.span
                    key={hex + i}
                    initial={{
                      opacity: 0,
                      x: 0,
                      y: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance,
                      scale: [0, 1.4, 1, 0.4],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.4,
                      delay: i * 0.06,
                      ease: "easeOut",
                    }}
                    className="color-pop absolute top-1/2 left-1/2"
                    style={{ color: hex, background: hex, opacity: 1, transform: "translate(-50%, -50%)" }}
                  />
                );
              })}
          </AnimatePresence>
        </div>
      </div>

      {/* Caption debajo */}
      <div className="mt-5 px-1">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-mono text-[9px] tracking-widest2 uppercase text-gold-bright">
            {item.industry}
          </span>
          <div className="flex gap-1">
            {item.palette.map((c, i) => (
              <span
                key={c + i}
                className="w-2.5 h-2.5 rounded-full border border-ivory/20"
                style={{ background: c }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <h3 className="font-serif text-xl font-semibold text-ivory leading-tight">
          {item.name}
        </h3>
        <p className="mt-1.5 text-xs text-ivory/60 leading-relaxed">
          {item.summary}
        </p>
      </div>
    </motion.div>
  );
}
