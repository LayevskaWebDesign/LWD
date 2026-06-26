import { motion } from "framer-motion";
import { Eye, Smartphone, Zap, ShieldCheck, LucideIcon } from "lucide-react";
import { GUARANTEES } from "../data";

const ICONS: Record<string, LucideIcon> = {
  Eye,
  Smartphone,
  Zap,
  ShieldCheck,
};

export function Garantia() {
  return (
    <section
      id="garantia"
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
          <span className="chapter-label justify-center mb-6">VI. Garantías</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark">
            Lo que <em className="gold-text italic font-serif">prometemos</em> por escrito.
          </h2>
          <p className="mt-6 font-serif italic text-lg text-ivory/75 leading-relaxed">
            Cuatro promesas contractuales que asumimos sin asteriscos.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GUARANTEES.map((g, i) => {
            const Icon = ICONS[g.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative p-6 rounded-sm border border-gold/20 bg-navy-deep/55 hover:border-gold/55 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/45 bg-gold/10 text-gold-bright group-hover:bg-gold/20 group-hover:rotate-12 transition-all duration-500">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2 text-ivory">
                  {g.title}
                </h3>
                <p className="text-sm text-ivory/65 leading-relaxed">{g.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
