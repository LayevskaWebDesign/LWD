import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

// Variantes reutilizables de animación (entrada suave hacia arriba + stagger).
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const containerStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export const itemUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// Revela una sección al entrar al viewport (una sola vez). Respeta reduced-motion.
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  )
}
