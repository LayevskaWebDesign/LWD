import { motion, useReducedMotion } from 'framer-motion'
import { testimonios } from '../data/content'
import { containerStagger, itemUp, fadeUp } from './motion'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  const reduce = useReducedMotion()
  return (
    <section className="section" id="resenas">
      <div className="container">
        <motion.div
          className="section-head"
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.5 }}
          variants={reduce ? undefined : fadeUp}
        >
          <span className="eyebrow">Lo que dicen</span>
          <h2 className="section-title">Clientes que vuelven y recomiendan</h2>
          <p>Reseñas reales de Google de personas y empresas de la zona.</p>
        </motion.div>
        <motion.div
          className="testi-grid"
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
          variants={reduce ? undefined : containerStagger}
        >
          {testimonios.map((t) => (
            <motion.figure className="testi-card" key={t.nombre} variants={reduce ? undefined : itemUp}>
              <div className="stars" aria-label={`${t.estrellas} de 5 estrellas`}>{'★'.repeat(t.estrellas)}</div>
              <blockquote>“{t.texto}”</blockquote>
              <figcaption className="testi-foot">
                <span className="testi-avatar" aria-hidden="true">{initials(t.nombre)}</span>
                <span>
                  <span className="testi-name">{t.nombre}</span>
                  <br />
                  <span className="testi-plat">vía {t.plataforma}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
