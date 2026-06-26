import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks";

export function BackToTop() {
  const show = useScrolled(800);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          aria-label="Volver arriba"
          className="fixed bottom-6 left-6 z-40 h-12 w-12 rounded-full bg-navy-deep border border-gold/40 text-gold-bright hover:bg-gold hover:text-navy-deep transition flex items-center justify-center shadow-gold"
        >
          <ArrowUp size={20} strokeWidth={1.8} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
