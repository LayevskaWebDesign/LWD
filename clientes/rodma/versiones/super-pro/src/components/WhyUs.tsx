import { motion, useReducedMotion } from 'framer-motion'
import { diferenciadores } from '../data/content'
import { iconMap } from '../lib/icons'
import { containerStagger, itemUp, fadeUp } from './motion'

export default function WhyUs() {
  const reduce = useReducedMotion()
  return (
    <section className="section section-alt" id="porque">
      <div className="container">
        <motion.div
          className="section-head"
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.5 }}
          variants={reduce ? undefined : fadeUp}
        >
          <span className="eyebrow">Por qué RODMA</span>
          <h2 className="section-title">Más de 13 años de confianza en Desamparados</h2>
          <p>No solo imprimimos: te acompañamos para que el resultado sea exactamente lo que imaginaste.</p>
        </motion.div>
        <motion.div
          className="why-grid"
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
          variants={reduce ? undefined : containerStagger}
        >
          {diferenciadores.map((d) => {
            const Icon = iconMap[d.icon]
            return (
              <motion.div className="why-item" key={d.titulo} variants={reduce ? undefined : itemUp}>
                <div className="why-icon" aria-hidden="true">{Icon && <Icon size={22} strokeWidth={2} />}</div>
                <div>
                  <h3>{d.titulo}</h3>
                  <p>{d.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
