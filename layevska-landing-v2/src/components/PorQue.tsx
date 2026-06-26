import { motion } from "framer-motion";
import { Lock, ShieldCheck, TrendingUp, LucideIcon } from "lucide-react";
import { PORQUE } from "../data";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  TrendingUp,
  Lock,
};

export function PorQue() {
  return (
    <section
      id="por-que"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1C4058 0%, #0E2435 100%)" }}
    >
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="chapter-label mb-6">{PORQUE.chapter}</span>
          <h2
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ivory text-shadow-dark"
            dangerouslySetInnerHTML={{
              __html: PORQUE.title.replace(
                /<em>(.*?)<\/em>/g,
                '<em class="gold-text italic font-serif">$1</em>'
              ),
            }}
          />
          <p className="mt-6 font-serif italic text-lg md:text-xl text-ivory/75 leading-relaxed">
            {PORQUE.lead}
          </p>
        </motion.div>

        {/* 3 puntos */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {PORQUE.points.map((p, i) => {
            const Icon = ICONS[p.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative p-7 rounded-sm border border-gold/20 bg-navy-deep/60 backdrop-blur-sm hover:border-gold/55 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-sm border border-gold/40 bg-gold/10 text-gold-bright group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 text-ivory">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base text-ivory/70 leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
