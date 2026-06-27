import { MessageCircle } from 'lucide-react'
import { site } from '../data/content'

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensajeWA)}`

export default function WhatsAppButton() {
  return (
    <a className="wa-fab" href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp">
      <MessageCircle size={22} />
      <span className="lbl">WhatsApp</span>
    </a>
  )
}
