import { site } from '../data/content'

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensajeWA)}`

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand wordmark" href="#inicio" aria-label="RODMA — inicio">
          RODMA<span className="dot">.</span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a className="nav-link" href="#servicios">Servicios</a>
          <a className="nav-link" href="#porque">Por qué RODMA</a>
          <a className="nav-link" href="#resenas">Reseñas</a>
          <a className="nav-link" href="#contacto">Contacto</a>
        </nav>
        <a className="btn btn-primary header-cta" href={waLink} target="_blank" rel="noopener noreferrer">
          Cotizá tu proyecto
        </a>
      </div>
    </header>
  )
}
