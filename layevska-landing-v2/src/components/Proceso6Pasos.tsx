import { motion } from "framer-motion";
import { PROCESO_6 } from "../data";

/* ============================================================
   Nuestro Proceso en 6 Pasos
   Layout asimétrico zig-zag con línea vertical conectora dorada
   ============================================================ */
export function Proceso6Pasos() {
  return (
    <section
      id="proceso-6"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 10% 20%, rgba(241,203,191,0.10) 0%, transparent 55%)," +
          "radial-gradient(ellipse at 90% 80%, rgba(160,189,193,0.08) 0%, transparent 55%)," +
          "linear-gradient(180deg, #0E2435 0%, #070F1A 100%)",
      }}
    >
      {/* Línea decorativa superior tipo lente fotográfico */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <div className="container mx-auto px-5 md:px-8">
        {/* Header — alineación CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="chapter-label justify-center mb-6">
            {PROCESO_6.chapter}
          </span>
          <h2
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark"
            dangerouslySetInnerHTML={{
              __html: PROCESO_6.title.replace(
                /<em>(.*?)<\/em>/g,
                '<em class="gold-text italic font-serif">$1</em>'
              ),
            }}
          />
          <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed">
            {PROCESO_6.lead}
          </p>
        </motion.div>

        {/* Steps en zig-zag con línea vertical central */}
        <div className="relative max-w-5xl mx-auto">
          {/* Línea vertical central (visible solo md+) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(201,169,97,0.45) 8%, rgba(201,169,97,0.45) 92%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <ol className="relative space-y-10 md:space-y-20">
            {PROCESO_6.steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={s.n}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.08 * i }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Tarjeta del paso */}
                  <div
                    className={`relative group p-7 md:p-9 rounded-sm border border-gold/20 bg-navy-deep/60 backdrop-blur-sm hover:border-gold/55 hover:shadow-gold transition-all duration-500 ${
                      isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-bright/80">
                      {s.day}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-ivory mt-2">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-ivory/70 leading-relaxed">
                      {s.body}
                    </p>
                  </div>

                  {/* Número grande dorado del lado opuesto + nodo en la línea central */}
                  <div
                    className={`relative flex items-center ${
                      isLeft
                        ? "md:justify-start"
                        : "md:justify-end"
                    }`}
                  >
                    {/* Nodo en la línea central (visible md+) */}
                    <div
                      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${
                        isLeft ? "-left-6" : "-right-6"
                      } w-12 h-12 items-center justify-center rounded-full bg-navy-deep border-2 border-gold shadow-gold-glow z-10`}
                      aria-hidden="true"
                    >
                      <span className="font-display gold-text text-sm font-bold">
                        {s.n}
                      </span>
                    </div>
                    {/* Número grande tipo poster */}
                    <span
                      className={`gold-3d font-display text-7xl md:text-8xl lg:text-9xl font-bold leading-none select-none opacity-90 ${
                        isLeft ? "md:pl-16" : "md:pr-16"
                      }`}
                      style={{
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {s.n}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* CTA al final del proceso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <a href="#contacto" className="btn btn-primary">
            Empezar el día 1 →
          </a>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-widest2 text-gold-bright/70">
            Tu landing publicada en una semana
          </p>
        </motion.div>
      </div>
    </section>
  );
}
