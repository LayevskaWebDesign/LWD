import { testimonios } from '../data/content'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  return (
    <section className="section" id="resenas">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Lo que dicen</span>
          <h2 className="section-title">Clientes que vuelven y recomiendan</h2>
          <p>Reseñas reales de Google de personas y empresas de la zona.</p>
        </div>
        <div className="testi-grid">
          {testimonios.map((t) => (
            <figure className="testi-card" key={t.nombre}>
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
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
