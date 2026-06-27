import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/content'
import { containerStagger, itemUp } from './motion'

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensajeWA)}`

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduce ? undefined : 'hidden'}
          animate={reduce ? undefined : 'show'}
          variants={reduce ? undefined : containerStagger}
        >
          <motion.span className="eyebrow" variants={reduce ? undefined : itemUp}>
            Impresión digital y artes gráficas · Desamparados
          </motion.span>
          <motion.h1 variants={reduce ? undefined : itemUp}>
            Hacé física <span className="accent">tu idea.</span>
          </motion.h1>
          <motion.p className="lead" variants={reduce ? undefined : itemUp}>
            Impresión digital, gran formato, diseño, sublimación y grabado láser con calidad
            garantizada. +13 años dándole forma a las ideas de personas y empresas en Costa Rica.
          </motion.p>
          <motion.div className="hero-cta" variants={reduce ? undefined : itemUp}>
            <a className="btn btn-primary btn-lg" href={waLink} target="_blank" rel="noopener noreferrer">Cotizá tu proyecto</a>
            <a className="btn btn-ghost btn-lg" href="#servicios">Ver servicios</a>
          </motion.div>
          <motion.p className="hero-trust" variants={reduce ? undefined : itemUp}>
            <span className="stars" aria-hidden="true">★★★★★</span>
            <span>5.0 en Google</span>
            <span aria-hidden="true">·</span>
            <span>Respuesta rápida por WhatsApp</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduce ? undefined : { opacity: 0, y: 30 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-card">
            <div className="hero-badge" aria-hidden="true">R.</div>
            <h2>Calidad garantizada en cada trabajo</h2>
            <div className="hero-chips">
              <span className="chip">Impresión Digital</span>
              <span className="chip">Gran Formato</span>
              <span className="chip">Diseño</span>
              <span className="chip">Sublimación</span>
              <span className="chip">Grabado Láser</span>
            </div>
            <div className="hero-rating">
              <span className="num">+13</span>
              <div>
                <span className="stars" aria-hidden="true">★★★★★</span>
                <small>años imprimiendo confianza</small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
