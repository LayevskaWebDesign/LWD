import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { QUE } from "../data";
import { useTilt } from "../hooks";

export function Servicios() {
  return (
    <section
      id="servicios"
      className="section-light tone-cream relative py-24 md:py-32"
    >
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="chapter-label justify-center mb-6">{QUE.chapter}</span>
          <h2
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark"
            dangerouslySetInnerHTML={{
              __html: QUE.title.replace(
                /<em>(.*?)<\/em>/g,
                '<em class="gold-text italic font-serif">$1</em>'
              ),
            }}
          />
          <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed">
            {QUE.lead}
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {QUE.models.map((m, i) => (
            <PriceCard key={m.tier} model={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Model = (typeof QUE.models)[number];

function PriceCard({ model, index }: { model: Model; index: number }) {
  const tilt = useTilt<HTMLDivElement>(6, 8);

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`relative p-8 md:p-10 rounded-sm transition-all duration-500 will-change-transform ${
        model.featured
          ? "border-2 border-gold bg-gradient-to-br from-gold/20 via-navy-deep/70 to-navy-deep/80 shadow-gold"
          : "border border-gold/25 bg-navy-deep/60"
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {model.featured && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold text-navy-deep font-mono text-[10px] uppercase tracking-widest2 font-bold rounded-sm">
          <Sparkles size={12} /> Recomendado
        </span>
      )}

      <span className="font-mono text-[10px] tracking-widest2 uppercase text-gold-bright">
        — Modelo {model.tier}
      </span>
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ivory mt-2">
        {model.label}
      </h3>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="gold-text font-display text-5xl md:text-6xl font-semibold leading-none">
          ${model.price}
        </span>
        <span className="text-ivory/55 text-sm">{model.currency}</span>
      </div>
      <p className="mt-2 font-mono text-[11px] text-ivory/55 tracking-wide">
        {model.meta}
      </p>

      <ul className="mt-7 space-y-3.5">
        {model.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-ivory/85">
            <Check size={16} className="mt-0.5 shrink-0 text-gold-bright" strokeWidth={2.5} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className={`mt-8 btn w-full justify-center ${
          model.featured ? "btn-primary" : "btn-outline"
        }`}
      >
        {model.cta}
      </a>
    </motion.div>
  );
}
