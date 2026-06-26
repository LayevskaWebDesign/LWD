import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, ExternalLink } from "lucide-react";

/* ============================================================
   CALENDAR MODAL — Cal.com embebido
   ============================================================
   IMPORTANTE — Setup en 3 pasos:
   1. Crear cuenta gratis en https://cal.com
   2. Crear event type "Discovery 20 min"
   3. Reemplazar CAL_USER + CAL_EVENT abajo con tu username
      y el slug del evento.
   ============================================================ */

const CAL_USER = "layevska-web-design"; // TODO: cambiar al username real
const CAL_EVENT = "discovery-20min";    // TODO: cambiar al slug real

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CalendarModal({ open, onClose }: Props) {
  // Cerrar con Escape + bloquear scroll del body cuando abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-6"
          style={{ background: "rgba(7, 15, 26, 0.85)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-hidden rounded-sm"
            style={{
              background: "linear-gradient(180deg, #0E2435 0%, #1C4058 100%)",
              border: "1px solid rgba(201,169,97,0.35)",
              boxShadow: "0 40px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-5 md:p-7 border-b border-gold/15">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gold/15 border border-gold/35 shrink-0">
                  <Calendar size={18} strokeWidth={1.8} className="text-gold-bright" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-gold-bright/80">
                    Llamada de descubrimiento
                  </span>
                  <h2 className="font-display text-xl md:text-2xl text-ivory mt-1 leading-tight">
                    Reservá <em className="gold-text italic font-serif">20 minutos</em> con Miah o Bryan
                  </h2>
                  <p className="font-serif italic text-sm text-ivory/65 mt-1">
                    Sin guion, sin venta robótica. Solo conversamos para entender tu proyecto.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="shrink-0 h-9 w-9 rounded-full flex items-center justify-center border border-gold/25 text-ivory/75 hover:bg-gold/10 hover:text-gold-bright transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Iframe Cal.com */}
            <div className="relative" style={{ height: "65vh", maxHeight: "640px" }}>
              <iframe
                title="Agendar con Layevska Web Design"
                src={`https://cal.com/${CAL_USER}/${CAL_EVENT}?theme=dark&layout=month_view`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, background: "#0E2435" }}
                loading="lazy"
              />
              {/* Fallback overlay si Cal.com no carga */}
              <div className="absolute bottom-4 right-4 pointer-events-auto">
                <a
                  href={`https://cal.com/${CAL_USER}/${CAL_EVENT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-ivory/55 hover:text-gold-bright transition bg-navy-deep/70 px-3 py-2 rounded-sm border border-gold/15"
                >
                  Abrir en Cal.com <ExternalLink size={11} strokeWidth={2} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
