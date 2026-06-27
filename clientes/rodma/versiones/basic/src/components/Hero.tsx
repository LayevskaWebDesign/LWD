import { site } from '../data/content'

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensajeWA)}`

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Impresión digital y artes gráficas · Desamparados</span>
          <h1>Hacé física <span className="accent">tu idea.</span></h1>
          <p className="lead">
            Impresión digital, gran formato, diseño, sublimación y grabado láser con calidad
            garantizada. +13 años dándole forma a las ideas de personas y empresas en Costa Rica.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href={waLink} target="_blank" rel="noopener noreferrer">Cotizá tu proyecto</a>
            <a className="btn btn-ghost btn-lg" href="#servicios">Ver servicios</a>
          </div>
          <p className="hero-trust">
            <span className="stars" aria-hidden="true">★★★★★</span>
            <span>5.0 en Google</span>
            <span aria-hidden="true">·</span>
            <span>Respuesta rápida por WhatsApp</span>
          </p>
        </div>

        <div className="hero-visual">
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
        </div>
      </div>
    </section>
  )
}
