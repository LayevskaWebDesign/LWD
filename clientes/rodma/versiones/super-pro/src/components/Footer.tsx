import { site } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="wordmark wordmark--light">RODMA<span className="dot">.</span></span>
            <p>{site.tagline}. {site.propuesta}</p>
          </div>
          <div>
            <h4>Contacto</h4>
            <a className="row" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">{site.whatsappDisplay}</a>
            <a className="row" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="row" href={site.maps} target="_blank" rel="noopener noreferrer">{site.ciudad}</a>
          </div>
          <div>
            <h4>Horario</h4>
            {site.horario.map((h) => (
              <span className="row" key={h.dia}>{h.dia}: {h.horas}</span>
            ))}
          </div>
          <div>
            <h4>Seguinos</h4>
            <a className="row" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="row" href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} RODMA · Desamparados, Costa Rica</span>
          <details id="privacidad">
            <summary>Aviso de privacidad</summary>
            <p>
              En RODMA tratamos tus datos (nombre, correo, teléfono y mensaje) únicamente para responder
              tu consulta y darte seguimiento, conforme a la Ley N.º 8968 de Protección de la Persona frente
              al Tratamiento de sus Datos Personales (Costa Rica). No los compartimos con terceros ni los
              usamos para otros fines. Podés solicitar acceso, rectificación o eliminación escribiendo a {site.email}.
            </p>
          </details>
          <span>Hecho por Layevska Web Design</span>
        </div>
      </div>
    </footer>
  )
}
