import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV } from "../data";
import { useScrolled } from "../hooks";

export function Header() {
  const scrolled = useScrolled(40);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-xl border-b border-gold/15 py-3"
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-5 md:px-8 flex items-center justify-between gap-6">
        {/* Logo dorado prominente */}
        <a
          href="#hero"
          className="group flex items-center gap-3 shrink-0"
          aria-label="Layevska Web Design — inicio"
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-sm bg-navy-deep ring-1 ring-gold/50 shadow-gold">
            <span className="gold-text font-display text-2xl font-bold leading-none">
              L
            </span>
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="gold-text font-display text-lg font-bold tracking-wide">
              Layevska
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-ivory/70">
              Web Design
            </span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[13px] tracking-wide text-ivory/80 hover:text-gold-bright transition-colors duration-200 relative group py-2"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 right-0 mx-auto h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="btn btn-primary hidden md:inline-flex !px-5 !py-2.5 !text-xs"
          >
            Cotizar
          </a>
          <button
            type="button"
            onClick={() => setOpenMobile((v) => !v)}
            className="lg:hidden text-ivory p-2 rounded hover:bg-gold/10 transition"
            aria-label={openMobile ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={openMobile}
          >
            {openMobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Nav mobile drawer */}
      {openMobile && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-gold/15 mt-3"
        >
          <nav className="container mx-auto px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpenMobile(false)}
                className="py-3 text-ivory/90 hover:text-gold-bright border-b border-ivory/5 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpenMobile(false)}
              className="btn btn-primary mt-3 justify-center"
            >
              Cotizar mi landing
            </a>
            <a
              href={`tel:${BRAND.contact.whatsapp}`}
              className="text-center mt-2 text-gold-bright text-xs font-mono tracking-widest"
            >
              {BRAND.contact.whatsappDisplay}
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
