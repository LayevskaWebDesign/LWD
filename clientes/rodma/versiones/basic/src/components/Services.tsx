import { servicios } from '../data/content'
import { iconMap } from '../lib/icons'

export default function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="section-title">Todo para que tu idea cobre forma</h2>
          <p>De una tarjeta a un rótulo de varios metros: un solo lugar para resolver tus artes gráficas.</p>
        </div>
        <div className="cards">
          {servicios.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <article className="card service-card" key={s.titulo}>
                <div className="icon-badge" aria-hidden="true">{Icon && <Icon size={26} strokeWidth={2} />}</div>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
