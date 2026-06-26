import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Download, BookOpen, Gift } from "lucide-react";
import { BRAND } from "../data";
import { isValidEmail, sanitize } from "../hooks";

/* ============================================================
   EXIT-INTENT MODAL
   ============================================================
   Se activa cuando el cursor sale por arriba del viewport
   (signal de "voy a cerrar la pestaña"). Solo desktop, una vez
   por sesión, y solo si llevan 8+ segundos en la página.

   Ofrece: PDF "7 errores al pedir una landing page" gratis a
   cambio del email. El PDF ya existe en public/.
   ============================================================ */

const STORAGE_KEY = "lay_exit_seen_v1";
const PDF_URL = "/07-Errores-Layevska.pdf";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Solo desktop (sin mouseout en touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Una vez por sesión
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const start = Date.now();
    let armed = false;
    const arm = window.setTimeout(() => { armed = true; }, 8000);

    const onLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY < 5 && !open) {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
    };

    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mouseleave", onLeave);
      window.clearTimeout(arm);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isValidEmail(email)) {
      setError("Email inválido. Probá de nuevo.");
      return;
    }
    if (name.trim().length < 2) {
      setError("Necesito tu nombre.");
      return;
    }

    // Mailto con datos pre-cargados (sustituí esto por API/Formspree cuando lo conectes)
    const subject = encodeURIComponent(`Lead magnet — ${sanitize(name)}`);
    const body = encodeURIComponent([
      `Nuevo lead desde exit-intent popup:`,
      ``,
      `Nombre: ${sanitize(name)}`,
      `Email: ${sanitize(email)}`,
      ``,
      `Quiere recibir el PDF "7 errores al pedir una landing page".`,
    ].join("\n"));
    // Lo abrimos en background tab (no estorba al usuario)
    const a = document.createElement("a");
    a.href = `mailto:${BRAND.contact.email}?subject=${subject}&body=${body}`;
    a.click();

    // Mostrar éxito y disparar download
    setSent(true);
    window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = PDF_URL;
      link.download = "Layevska-7-Errores.pdf";
      link.click();
    }, 600);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-6"
          style={{ background: "rgba(7,15,26,0.88)", backdropFilter: "blur(10px)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.94, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 24, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-sm"
            style={{
              background:
                "radial-gradient(ellipse at 80% 10%, rgba(201,169,97,0.18) 0%, transparent 50%), linear-gradient(160deg, #0E2435 0%, #1C4058 100%)",
              border: "1px solid rgba(201,169,97,0.45)",
              boxShadow:
                "0 40px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full flex items-center justify-center border border-gold/30 text-ivory/65 hover:bg-gold/10 hover:text-gold-bright transition"
            >
              <X size={16} />
            </button>

            {!sent ? (
              <div className="p-7 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gold/15 border border-gold/40 shrink-0">
                    <Gift size={20} strokeWidth={1.8} className="text-gold-bright" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-gold-bright/85">
                      Antes de irte
                    </span>
                    <h3 className="font-display text-xl md:text-2xl text-ivory mt-1 leading-tight">
                      Llevate <em className="gold-text italic font-serif">gratis</em> nuestra guía
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div
                      className="aspect-[3/4] rounded-sm overflow-hidden border border-gold/30 flex items-center justify-center"
                      style={{
                        background:
                          "radial-gradient(ellipse at 30% 30%, rgba(221,194,137,0.25) 0%, transparent 60%), linear-gradient(160deg, #14233F 0%, #0E2435 100%)",
                      }}
                    >
                      <div className="text-center px-4">
                        <BookOpen size={32} strokeWidth={1.2} className="text-gold-bright mx-auto mb-3" />
                        <p className="font-display text-base text-ivory leading-tight">
                          7 errores al pedir una landing page
                        </p>
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-gold-bright/70 mt-3">
                          PDF · 10 páginas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <p className="font-serif italic text-base md:text-lg text-ivory/85 leading-relaxed">
                      Diez páginas. Los siete errores más caros que vemos cada semana en landings ajenas. Cómo evitarlos antes de pagar a alguien.
                    </p>

                    <form onSubmit={onSubmit} className="mt-5 space-y-3" noValidate>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full bg-black/25 border border-gold/25 px-4 py-3 text-sm text-ivory rounded-sm outline-none focus:border-gold-bright transition"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@correo.com"
                        className="w-full bg-black/25 border border-gold/25 px-4 py-3 text-sm text-ivory rounded-sm outline-none focus:border-gold-bright transition"
                      />
                      {error && (
                        <p className="text-xs font-mono text-salmon-light">{error}</p>
                      )}
                      <button
                        type="submit"
                        className="btn btn-primary w-full justify-center !text-xs"
                      >
                        <Download size={14} /> Descargar guía gratis
                      </button>
                      <p className="font-mono text-[9px] tracking-wide text-ivory/45 text-center">
                        Sin spam. Sin lista interminable. Un solo email.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-10 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gold/15 border border-gold/40 mb-4">
                  <Download size={28} strokeWidth={1.5} className="text-gold-bright" />
                </div>
                <h3 className="font-display text-2xl text-ivory">
                  Está bajando ahora
                </h3>
                <p className="font-serif italic text-ivory/75 mt-3 max-w-md mx-auto">
                  Si no se descargó automáticamente, hacé click acá:
                </p>
                <a
                  href={PDF_URL}
                  download="Layevska-7-Errores.pdf"
                  className="btn btn-outline mt-5 inline-flex items-center gap-2"
                >
                  <Download size={14} /> Bajar PDF manualmente
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
