import { useRef, useState, type FormEvent } from 'react'
import { MapPin, Mail, Phone, Instagram, Facebook, Send } from 'lucide-react'
import { site } from '../data/content'

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensajeWA)}`

type Status = 'idle' | 'sending' | 'ok' | 'err'

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const loadedAt = useRef(Date.now())

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    // Anti-spam: honeypot + time-trap (UX; la protección real va en el servidor/Netlify)
    if ((fd.get('bot-field') as string) || '') return
    if (Date.now() - loadedAt.current < 2500) {
      setStatus('err'); setError('Esperá un momento antes de enviar.'); return
    }
    // Rate-limit simple por cliente (evita reenvíos en ráfaga)
    const last = Number(localStorage.getItem('rodma-last-submit') || 0)
    if (last > 0 && Date.now() - last < 30_000) {
      setStatus('err'); setError('Ya enviaste un mensaje hace poco. Probá en un momento o escribinos por WhatsApp.'); return
    }

    const nombre = ((fd.get('nombre') as string) || '').trim()
    const email = ((fd.get('email') as string) || '').trim()
    const mensaje = ((fd.get('mensaje') as string) || '').trim()
    const telefono = ((fd.get('telefono') as string) || '').trim()
    const consent = fd.get('consentimiento')

    if (!nombre || !email || !mensaje) { setStatus('err'); setError('Completá nombre, correo y mensaje.'); return }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setStatus('err'); setError('Revisá el correo: no parece válido.'); return }
    if (!consent) { setStatus('err'); setError('Necesitamos tu consentimiento para contactarte.'); return }

    setStatus('sending'); setError('')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contacto', nombre, email, telefono, mensaje }),
      })
      localStorage.setItem('rodma-last-submit', String(Date.now()))
      setStatus('ok'); form.reset()
    } catch {
      setStatus('err'); setError('No se pudo enviar. Escribinos por WhatsApp y con gusto te atendemos.')
    }
  }

  return (
    <section className="section section-alt" id="contacto">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Hablemos</span>
          <h2>Cotizá tu próximo proyecto</h2>
          <p>Contanos qué necesitás imprimir y te respondemos rápido con un estimado.</p>

          <ul className="info-list">
            <li className="info-item">
              <span className="ic" aria-hidden="true"><Phone size={20} /></span>
              <span><span className="lbl">WhatsApp / Tel.</span><br /><a href={waLink} target="_blank" rel="noopener noreferrer">{site.whatsappDisplay}</a></span>
            </li>
            <li className="info-item">
              <span className="ic" aria-hidden="true"><Mail size={20} /></span>
              <span><span className="lbl">Correo</span><br /><a href={`mailto:${site.email}`}>{site.email}</a></span>
            </li>
            <li className="info-item">
              <span className="ic" aria-hidden="true"><MapPin size={20} /></span>
              <span><span className="lbl">Ubicación</span><br /><span className="val">{site.ciudad}, {site.provincia}</span> · <a href={site.maps} target="_blank" rel="noopener noreferrer">Cómo llegar</a></span>
            </li>
          </ul>

          <div className="hours">
            {site.horario.map((h) => (
              <div className="hours-row" key={h.dia}><span className="d">{h.dia}</span><span>{h.horas}</span></div>
            ))}
          </div>

          <div className="social-row">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de RODMA"><Instagram size={20} /></a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de RODMA"><Facebook size={20} /></a>
          </div>
        </div>

        <div className="contact-form-wrap">
          <form name="contacto" onSubmit={handleSubmit} noValidate>
            <p className="hp" aria-hidden="true">
              <label>No llenar: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
            </p>
            <div className="field">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" required maxLength={80} autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Correo</label>
              <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="telefono">Teléfono (opcional)</label>
              <input id="telefono" name="telefono" type="tel" maxLength={30} autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="mensaje">¿Qué necesitás?</label>
              <textarea id="mensaje" name="mensaje" required maxLength={1000} placeholder="Ej.: 2 banners de 1×2 m para una feria el próximo mes." />
            </div>
            <label className="consent">
              <input type="checkbox" name="consentimiento" required />
              <span>Autorizo a RODMA a contactarme para responder mi consulta, conforme al <a href="#privacidad">aviso de privacidad</a> (Ley 8968).</span>
            </label>
            <button className="btn btn-primary btn-lg form-submit" type="submit" disabled={status === 'sending'}>
              <Send size={18} /> {status === 'sending' ? 'Enviando…' : 'Enviar y cotizar'}
            </button>
            {status === 'ok' && <p className="form-msg ok" role="status">¡Gracias! Recibimos tu mensaje y te contactamos pronto.</p>}
            {status === 'err' && <p className="form-msg err" role="alert">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
