import { motion } from "framer-motion";
import { Check, Sparkles, Eye, Smartphone, Zap, ShieldCheck, LucideIcon } from "lucide-react";
import { QUE, COMPARATIVA, GUARANTEES } from "../../data";
import { SealOrnament } from "./scene/SealOrnament";
import { LandingPreview } from "./scene/LandingPreview";
import "./styles.css";

/* ============================================================
   MUNDO V · COMPROMISO
   Crimson Seal #9C3A33 · climax conversion
   3-en-1: precios + comparativa + garantía
   ============================================================ */
const EASE = [0.45, 0.05, 0.25, 1] as const;
const G_ICONS: Record<string, LucideIcon> = { Eye, Smartphone, Zap, ShieldCheck };

export function WorldFive() {
  return (
    <section
      id="precios"
      aria-label="El pacto — Layevska Web Design"
      className="world-five relative py-32 md:py-44 overflow-hidden"
    >
      <div className="world-five__bg" aria-hidden="true" />
      <div className="world-five__crimson" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-8 left-8 z-10 pointer-events-none"
      >
        <div className="font-display text-[11px] tracking-[0.45em] leading-none crimson-label">V</div>
        <div className="font-serif italic text-[10px] tracking-[0.18em] mt-1.5 leading-none ivory-soft">
          el pacto
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* ===== Header con sello ===== */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[320px]">
              <SealOrnament />
            </div>
          </div>
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
            >
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase crimson-label inline-flex items-center gap-3 crimson-rule">
                Lo que firmamos juntos
              </span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory mt-4">
                Dos formas de empezar.{" "}
                <em className="crimson-italic font-serif">Ninguna sorpresa</em> al final.
              </h2>
              <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed max-w-2xl">
                {QUE.lead}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ===== Precios — 2 modelos ===== */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24">
          {QUE.models.map((m, i) => (
            <motion.div
              key={m.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
              className={`world-five__price ${m.featured ? "world-five__price--featured" : ""}`}
            >
              {m.featured && (
                <span className="world-five__price-badge">
                  <Sparkles size={11} /> Recomendado
                </span>
              )}
              <span className="font-mono text-[10px] tracking-[0.30em] uppercase crimson-label">
                — Modelo {m.tier}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ivory mt-2">{m.label}</h3>

              {/* Preview animado de qué incluye visualmente */}
              <div className="mt-5">
                <LandingPreview variant={m.featured ? "animated" : "static"} />
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display crimson-italic text-5xl md:text-6xl font-semibold leading-none">${m.price}</span>
                <span className="text-ivory/55 text-sm">{m.currency}</span>
              </div>
              <p className="mt-2 font-mono text-[11px] text-ivory/55 tracking-wide">{m.meta}</p>
              <ul className="mt-7 space-y-3.5">
                {m.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ivory/85">
                    <Check size={16} className="mt-0.5 shrink-0 crimson-icon" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`mt-8 btn w-full justify-center ${m.featured ? "btn-primary" : "btn-outline"}`}>
                {m.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* ===== Comparativa ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="mb-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl md:text-4xl text-ivory">
              <em className="crimson-italic font-serif">Calidad</em> sobre precio. Siempre.
            </h3>
            <p className="mt-4 font-serif italic text-ivory/72">{COMPARATIVA.lead}</p>
          </div>
          <div className="hidden md:block overflow-hidden rounded-sm border border-crimson/30 bg-navy-deep/60 backdrop-blur-sm">
            <div className="grid grid-cols-12 bg-navy-deep/80 border-b border-crimson/30">
              <div className="col-span-3 p-4 font-mono text-[10px] tracking-[0.25em] uppercase crimson-label">{COMPARATIVA.cols[0]}</div>
              <div className="col-span-3 p-4 text-center relative bg-gradient-to-b from-crimson/20 to-transparent">
                <div className="font-display gold-text text-base font-bold">Layevska</div>
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-crimson text-ivory text-[8px] font-mono tracking-widest font-bold rounded-sm">
                  NOSOTROS
                </span>
              </div>
              <div className="col-span-3 p-4 text-center font-serif text-ivory/80">{COMPARATIVA.cols[2]}</div>
              <div className="col-span-3 p-4 text-center font-serif text-ivory/60">{COMPARATIVA.cols[3]}</div>
            </div>
            {COMPARATIVA.rows.map((r) => (
              <div key={r.label} className="grid grid-cols-12 border-b border-crimson/12 last:border-0 hover:bg-crimson/8">
                <div className="col-span-3 p-4 text-sm text-ivory/85 font-medium">{r.label}</div>
                <div className="col-span-3 p-4 text-center bg-crimson/[0.08] text-sm text-ivory font-medium leading-snug">{r.lay}</div>
                <div className="col-span-3 p-4 text-center text-sm text-ivory/65 leading-snug">{r.ag}</div>
                <div className="col-span-3 p-4 text-center text-sm text-ivory/55 leading-snug">{r.fl}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== Garantías ===== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl md:text-4xl text-ivory">
              Lo que <em className="crimson-italic font-serif">prometemos</em> por escrito.
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GUARANTEES.map((g, i) => {
              const Icon = G_ICONS[g.icon] ?? ShieldCheck;
              return (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="world-five__guarantee group"
                >
                  <div className="world-five__guarantee-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-ivory mb-2">{g.title}</h4>
                  <p className="text-sm text-ivory/65 leading-relaxed">{g.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
