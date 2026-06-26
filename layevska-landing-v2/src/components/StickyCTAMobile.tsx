import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ArrowRight, Calendar } from "lucide-react";
import { BRAND } from "../data";
import { whatsappLink } from "../hooks";

/* ============================================================
   STICKY CTA BAR — MOBILE ONLY
   Aparece al hacer scroll > 200px. Tres acciones: WhatsApp,
   Agendar, Cotizar. Reemplaza al WhatsAppFloat en mobile.
   ============================================================ */

interface Props {
  onOpenCalendar?: () => void;
}

export function StickyCTAMobile({ onOpenCalendar }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2 pointer-events-none"
        >
          <div
            className="flex items-stretch gap-2 pointer-events-auto rounded-full border border-gold/30 p-1.5"
            style={{
              background: "rgba(7, 15, 26, 0.88)",
              backdropFilter: "blur(16px)",
              boxShadow:
                "0 -8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset",
            }}
          >
            {/* WhatsApp */}
            <a
              href={whatsappLink(BRAND.contact.whatsapp, BRAND.contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center h-11 w-11 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #F2D88A 0%, #C9A961 60%, #A88944 100%)",
              }}
            >
              <MessageCircle size={18} strokeWidth={2} className="text-navy-deep" />
            </a>

            {/* Agendar */}
            {onOpenCalendar && (
              <button
                type="button"
                onClick={onOpenCalendar}
                aria-label="Agendar llamada"
                className="flex items-center justify-center h-11 w-11 rounded-full border border-gold/40 text-gold-bright hover:bg-gold/15 transition"
              >
                <Calendar size={17} strokeWidth={1.8} />
              </button>
            )}

            {/* Cotizar (principal) */}
            <a
              href="#contacto"
              className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-full font-sans text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                background: "linear-gradient(180deg, #DDC289 0%, #C9A961 60%, #A88944 100%)",
                color: "#0E2435",
              }}
            >
              Cotizar <ArrowRight size={14} strokeWidth={2.2} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
