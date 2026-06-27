import { site } from '../data/content'

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensajeWA)}`

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="container">
        <h2>¿Listo para tu próximo proyecto?</h2>
        <p>Escribinos y cotizá hoy mismo. Te respondemos rápido y con la calidad de siempre.</p>
        <a className="btn btn-primary btn-lg" href={waLink} target="_blank" rel="noopener noreferrer">Cotizá por WhatsApp</a>
      </div>
    </section>
  )
}
