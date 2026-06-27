import { diferenciadores } from '../data/content'
import { iconMap } from '../lib/icons'

export default function WhyUs() {
  return (
    <section className="section section-alt" id="porque">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Por qué RODMA</span>
          <h2 className="section-title">Más de 13 años de confianza en Desamparados</h2>
          <p>No solo imprimimos: te acompañamos para que el resultado sea exactamente lo que imaginaste.</p>
        </div>
        <div className="why-grid">
          {diferenciadores.map((d) => {
            const Icon = iconMap[d.icon]
            return (
              <div className="why-item" key={d.titulo}>
                <div className="why-icon" aria-hidden="true">{Icon && <Icon size={22} strokeWidth={2} />}</div>
                <div>
                  <h3>{d.titulo}</h3>
                  <p>{d.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
