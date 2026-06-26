import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";
import { COMPARATIVA } from "../data";

/* ============================================================
   Comparativa Layevska vs Agencia vs Freelancer
   Título alineado a la derecha, tabla elegante con columna destacada
   ============================================================ */
export function Comparativa() {
  return (
    <section
      id="comparativa"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 90% 20%, rgba(201,169,97,0.10) 0%, transparent 55%)," +
          "radial-gradient(ellipse at 10% 90%, rgba(216,176,171,0.10) 0%, transparent 55%)," +
          "linear-gradient(180deg, #1C4058 0%, #0E2435 100%)",
      }}
    >
      <div className="container mx-auto px-5 md:px-8">
        {/* Header — alineación DERECHA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl ml-auto text-right mb-14"
        >
          <span className="chapter-label justify-end mb-6">
            {COMPARATIVA.chapter}
          </span>
          <h2
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark"
            dangerouslySetInnerHTML={{
              __html: COMPARATIVA.title.replace(
                /<em>(.*?)<\/em>/g,
                '<em class="gold-text italic font-serif">$1</em>'
              ),
            }}
          />
          <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed">
            {COMPARATIVA.lead}
          </p>
        </motion.div>

        {/* Tabla — desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block overflow-hidden rounded-sm border border-gold/25 bg-navy-deep/60 backdrop-blur-sm shadow-cinematic"
        >
          {/* Header de columnas */}
          <div className="grid grid-cols-12 bg-navy-deep/80 border-b border-gold/30">
            <div className="col-span-3 p-5 font-mono text-[10px] uppercase tracking-widest2 text-gold-bright">
              {COMPARATIVA.cols[0]}
            </div>
            <div className="col-span-3 p-5 text-center relative bg-gradient-to-b from-gold/15 to-transparent">
              <div className="font-display gold-text text-base md:text-lg font-bold">
                Layevska
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-gold-bright/70">
                Web Design
              </div>
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-gold text-navy-deep text-[8px] font-mono tracking-widest2 font-bold rounded-sm">
                NOSOTROS
              </span>
            </div>
            <div className="col-span-3 p-5 text-center">
              <div className="font-serif text-base md:text-lg text-ivory/80 font-semibold">
                {COMPARATIVA.cols[2]}
              </div>
            </div>
            <div className="col-span-3 p-5 text-center">
              <div className="font-serif text-base md:text-lg text-ivory/60 font-semibold">
                {COMPARATIVA.cols[3]}
              </div>
            </div>
          </div>

          {/* Filas */}
          {COMPARATIVA.rows.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="grid grid-cols-12 border-b border-gold/10 last:border-0 hover:bg-gold/5 transition-colors group"
            >
              <div className="col-span-3 p-5 flex items-center gap-3">
                <Check size={14} className="text-gold/40 shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-ivory/85 font-medium">{r.label}</span>
              </div>
              <div className="col-span-3 p-5 text-center relative bg-gold/[0.06] group-hover:bg-gold/15 transition-colors">
                <span className="text-sm md:text-base text-ivory font-medium leading-snug">
                  {r.lay}
                </span>
              </div>
              <div className="col-span-3 p-5 text-center">
                <span className="text-sm text-ivory/65 leading-snug">{r.ag}</span>
              </div>
              <div className="col-span-3 p-5 text-center">
                <span className="text-sm text-ivory/55 leading-snug">{r.fl}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabla — mobile (cards apiladas) */}
        <div className="md:hidden space-y-5">
          {/* Card Layevska destacada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-sm border-2 border-gold bg-gradient-to-br from-gold/15 to-navy-deep/70 p-6 relative"
          >
            <span className="absolute -top-3 left-5 inline-flex items-center gap-1.5 px-3 py-1 bg-gold text-navy-deep font-mono text-[10px] tracking-widest2 font-bold rounded-sm">
              NOSOTROS
            </span>
            <h3 className="gold-text font-display text-2xl font-bold mb-1">
              Layevska Web Design
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold-bright/80 mb-5">
              La opción que estás leyendo
            </p>
            <ul className="space-y-3">
              {COMPARATIVA.rows.map((r) => (
                <li key={r.label} className="flex items-start gap-3 pb-3 border-b border-gold/15 last:border-0 last:pb-0">
                  <Check size={14} className="text-gold-bright mt-0.5 shrink-0" strokeWidth={2.5} />
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-gold-bright/70 font-mono">
                      {r.label}
                    </div>
                    <div className="text-sm text-ivory">{r.lay}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card Agencia tradicional */}
          <CompareCardMobile
            title="Agencia tradicional"
            subtitle="Modelo legacy del mercado"
            rows={COMPARATIVA.rows.map((r) => ({ label: r.label, value: r.ag }))}
            icon={<Minus className="text-ivory/40 mt-0.5 shrink-0" size={14} strokeWidth={2.5} />}
            opacity="text-ivory/75"
          />

          {/* Card Freelancer */}
          <CompareCardMobile
            title="Freelancer económico"
            subtitle="Opción barata, sin garantía"
            rows={COMPARATIVA.rows.map((r) => ({ label: r.label, value: r.fl }))}
            icon={<X className="text-ivory/30 mt-0.5 shrink-0" size={14} strokeWidth={2.5} />}
            opacity="text-ivory/60"
          />
        </div>

        {/* Cierre con CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center max-w-2xl mx-auto"
        >
          <p className="font-serif italic text-lg md:text-xl text-ivory/80 leading-relaxed">
            Si valoras tu tiempo, tu marca y tu paz mental, la decisión correcta es siempre la misma.
          </p>
          <a href="#contacto" className="btn btn-primary mt-6">
            Hablemos de tu proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* --- Card mobile auxiliar --- */
interface CompareCardMobileProps {
  title: string;
  subtitle: string;
  rows: { label: string; value: string }[];
  icon: React.ReactNode;
  opacity: string;
}
function CompareCardMobile({
  title,
  subtitle,
  rows,
  icon,
  opacity,
}: CompareCardMobileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-sm border border-ivory/15 bg-navy-deep/50 p-6"
    >
      <h3 className="font-serif text-xl font-semibold text-ivory/85 mb-1">{title}</h3>
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-ivory/45 mb-5">
        {subtitle}
      </p>
      <ul className="space-y-3">
        {rows.map((r) => (
          <li
            key={r.label}
            className="flex items-start gap-3 pb-3 border-b border-ivory/10 last:border-0 last:pb-0"
          >
            {icon}
            <div>
              <div className="text-[10px] uppercase tracking-wide text-ivory/40 font-mono">
                {r.label}
              </div>
              <div className={`text-sm ${opacity}`}>{r.value}</div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
