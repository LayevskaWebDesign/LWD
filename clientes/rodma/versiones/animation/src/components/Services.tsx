import { motion, useReducedMotion } from 'framer-motion'
import { servicios } from '../data/content'
import { iconMap } from '../lib/icons'
import { containerStagger, itemUp, fadeUp } from './motion'

export default function Services() {
  const reduce = useReducedMotion()
  return (
    <section className="section" id="servicios">
      <div className="container">
        <motion.div
          className="section-head"
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.5 }}
          variants={reduce ? undefined : fadeUp}
        >
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="section-title">Todo para que tu idea cobre forma</h2>
          <p>De una tarjeta a un rótulo de varios metros: un solo lugar para resolver tus artes gráficas.</p>
        </motion.div>
        <motion.div
          className="cards"
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
          variants={reduce ? undefined : containerStagger}
        >
          {servicios.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <motion.article className="card service-card" key={s.titulo} variants={reduce ? undefined : itemUp}>
                <div className="icon-badge" aria-hidden="true">{Icon && <Icon size={26} strokeWidth={2} />}</div>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
