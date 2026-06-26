import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTop(): JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (): void => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTop = (e: React.MouseEvent): void => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#"
          onClick={scrollTop}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="magnetic fixed bottom-[108px] right-8 z-[150] flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-surface/40 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-gold"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            stroke="rgb(var(--color-gold-bright))"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
