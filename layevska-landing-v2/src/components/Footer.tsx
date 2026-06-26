import { motion } from "framer-motion";
import { BRAND, NAV } from "../data";
import { whatsappLink } from "../hooks";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" style={{ background: "#070F1A" }}>
      <div className="container mx-auto px-5 md:px-8">
        {/* Línea decorativa */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-14" />

        <div className="grid md:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <a href="#hero" className="inline-flex flex-col">
              <span className="gold-3d font-display text-3xl md:text-4xl font-bold leading-none">
                Layevska
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-bright/80 mt-1">
                Web Design · Costa Rica
              </span>
            </a>
            <p className="mt-5 font-serif italic text-ivory/65 leading-relaxed max-w-md">
              Diseñamos landing pages premium desde San José para profesionales y PYMEs que quieren
              dejar de competir por precio y empezar a competir por calidad.
            </p>
          </motion.div>

          {/* Nav rápida */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold-bright mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-ivory/65 hover:text-gold-bright transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold-bright mb-4">
              Contacto
            </h4>
            <div className="space-y-2.5 text-sm text-ivory/65">
              <a
                href={whatsappLink(BRAND.contact.whatsapp, BRAND.contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold-bright transition-colors"
              >
                WhatsApp · {BRAND.contact.whatsappDisplay}
              </a>
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="block hover:text-gold-bright transition-colors break-all"
              >
                {BRAND.contact.email}
              </a>
              <div className="text-ivory/55">{BRAND.contact.location}</div>
              <div className="text-ivory/55 text-xs">Lun–Vie · 8:00 a 18:00 CST</div>
            </div>
          </div>
        </div>

        {/* Firmas socios + copyright */}
        <div className="pt-8 border-t border-gold/15 flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs font-mono text-ivory/50">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>
              Diseñado y operado por{" "}
              <span className="text-gold-bright">Miah Layevska</span> &{" "}
              <span className="text-gold-bright">Bryan Barrantes</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span>© 2026 Layevska Web Design</span>
            <span className="text-ivory/30">·</span>
            <a href="#hero" className="hover:text-gold-bright transition-colors">
              Volver arriba ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
