import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COMO } from "../data";

/* ============================================================
   Sección "Cómo lo hacemos"
   El lápiz dibuja un wireframe a medida que se hace scroll.
   ============================================================ */
export function Proceso() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Mapeamos progreso 0-1 a stroke-dashoffset 1-0
  const dashOffset = useTransform(scrollYProgress, [0.1, 0.85], [1, 0]);
  const pencilT = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const [pencilPos, setPencilPos] = useState({ x: 60, y: 60 });

  // Path SVG en string compartido por el dibujo y el lápiz
  const PATH_D =
    "M60 60 L740 60 M60 60 L60 460 M740 60 L740 460 M60 460 L740 460 " + // marco exterior
    "M60 130 L740 130 " + // header
    "M120 200 L420 200 M120 240 L380 240 M120 280 L320 280 " + // texto izquierda
    "M120 340 L260 340 " + // botón izquierda
    "M480 200 L680 200 M480 220 L680 220 M480 240 L660 240 M480 260 L680 260 M480 280 L640 280 " + // bloque derecho
    "M120 410 L320 410 M340 410 L540 410 M560 410 L680 410"; // pie

  // Lista de puntos por los que pasa el lápiz (aprox.)
  const KEY_POINTS = [
    { x: 60, y: 60 }, { x: 740, y: 60 }, { x: 740, y: 460 }, { x: 60, y: 460 }, { x: 60, y: 60 },
    { x: 60, y: 130 }, { x: 740, y: 130 },
    { x: 120, y: 200 }, { x: 420, y: 200 },
    { x: 120, y: 240 }, { x: 380, y: 240 },
    { x: 120, y: 280 }, { x: 320, y: 280 },
    { x: 120, y: 340 }, { x: 260, y: 340 },
    { x: 480, y: 200 }, { x: 680, y: 200 },
    { x: 480, y: 280 }, { x: 640, y: 280 },
    { x: 120, y: 410 }, { x: 680, y: 410 },
  ];

  useEffect(() => {
    const unsub = pencilT.on("change", (t) => {
      // Interpolar entre puntos clave
      const idx = Math.min(KEY_POINTS.length - 2, Math.floor(t * (KEY_POINTS.length - 1)));
      const local = t * (KEY_POINTS.length - 1) - idx;
      const a = KEY_POINTS[idx];
      const b = KEY_POINTS[idx + 1];
      if (a && b) {
        setPencilPos({
          x: a.x + (b.x - a.x) * local,
          y: a.y + (b.y - a.y) * local,
        });
      }
    });
    return () => unsub();
  }, [pencilT]);

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="section-light tone-ivory relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="chapter-label mb-6">{COMO.chapter}</span>
          <h2
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark"
            dangerouslySetInnerHTML={{
              __html: COMO.title.replace(
                /<em>(.*?)<\/em>/g,
                '<em class="gold-text italic font-serif">$1</em>'
              ),
            }}
          />
          <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed">
            {COMO.lead}
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* SVG wireframe + lápiz animado */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[800/520] bg-navy-deep/60 border border-gold/25 rounded-sm overflow-hidden shadow-cinematic">
              {/* Grid sutil */}
              <svg
                className="absolute inset-0 w-full h-full opacity-15"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path
                      d="M 32 0 L 0 0 0 32"
                      fill="none"
                      stroke="rgba(201,169,97,0.4)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              <svg viewBox="0 0 800 520" className="absolute inset-0 w-full h-full">
                {/* Path que se dibuja */}
                <motion.path
                  d={PATH_D}
                  fill="none"
                  stroke="#DDC289"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  pathLength={1}
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: dashOffset,
                  }}
                />

                {/* Lápiz SVG (estilógrafo) */}
                <motion.g
                  style={{ x: pencilPos.x - 6, y: pencilPos.y - 60 }}
                  transition={{ type: "tween", ease: "linear", duration: 0.05 }}
                >
                  {/* Cuerpo del lápiz */}
                  <rect x="-3" y="0" width="6" height="40" fill="#1C4058" stroke="#C9A961" strokeWidth="0.5" />
                  <rect x="-3" y="40" width="6" height="14" fill="#C9A961" />
                  {/* Punta */}
                  <polygon points="-3,54 3,54 0,60" fill="#0E2435" />
                  {/* Brillo metálico */}
                  <rect x="-2" y="2" width="1" height="36" fill="rgba(255,247,212,0.5)" />
                </motion.g>
              </svg>

              {/* Label flotante */}
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest2 uppercase text-gold-bright/80 bg-navy-deep/80 px-2 py-1 rounded-sm border border-gold/25">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-salmon-light mr-1.5 animate-pulse" />
                dibujando wireframe...
              </div>
            </div>
          </div>

          {/* Pasos */}
          <ol className="lg:col-span-2 flex flex-col gap-5">
            {COMO.steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex gap-5 p-4 rounded-sm border border-transparent hover:border-gold/30 hover:bg-navy-deep/50 transition-all"
              >
                <span className="font-display text-3xl md:text-4xl gold-text font-semibold leading-none shrink-0 w-12">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-ivory mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ivory/65 leading-relaxed">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
