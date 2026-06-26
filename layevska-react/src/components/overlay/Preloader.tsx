import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader(): JSX.Element {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 2400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-bg-deep"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6">
            <svg viewBox="0 0 320 60" className="h-auto w-[280px]">
              {/* Stroke version (draws first) */}
              <motion.text
                x="0"
                y="46"
                className="font-display text-[48px] font-semibold"
                fill="none"
                stroke="rgb(var(--color-gold))"
                strokeWidth={1}
                strokeDasharray={600}
                initial={{ strokeDashoffset: 600 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              >
                Layevska
              </motion.text>
              {/* Fill version (appears after) */}
              <motion.text
                x="0"
                y="46"
                className="font-display text-[48px] font-semibold"
                fill="rgb(var(--color-gold))"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Layevska
              </motion.text>
            </svg>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="font-mono text-[11px] uppercase tracking-widest text-gold-bright"
            >
              Web Design Studio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
