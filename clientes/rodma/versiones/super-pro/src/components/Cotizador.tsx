import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Calculator, MessageCircle } from 'lucide-react'
import { tiposTrabajo, extras, calcular, formatCRC } from '../lib/cotizador'
import { site } from '../data/content'
import { fadeUp } from './motion'

export default function Cotizador() {
  const reduce = useReducedMotion()
  const [tipo, setTipo] = useState(tiposTrabajo[0].id)
  const [cantidad, setCantidad] = useState<number>(tiposTrabajo[0].min)
  const [sel, setSel] = useState<string[]>([])

  const tipoObj = tiposTrabajo.find((t) => t.id === tipo) ?? tiposTrabajo[0]
  const total = useMemo(() => calcular(tipo, cantidad, sel), [tipo, cantidad, sel])

  function toggle(id: string) {
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  }

  const extrasTxt = sel.length
    ? ', extras: ' + sel.map((id) => extras.find((e) => e.id === id)?.label).filter(Boolean).join(', ')
    : ''
  const resumen = `Hola RODMA, quiero cotizar: ${tipoObj.label}, cantidad ${cantidad} ${tipoObj.unidad}${extrasTxt}. Estimado web: ${formatCRC(total)}.`
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(resumen)}`

  return (
    <section className="section section-alt" id="cotizador">
      <div className="container">
        <motion.div
          className="section-head"
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.5 }}
          variants={reduce ? undefined : fadeUp}
        >
          <span className="eyebrow">Cotizá al instante</span>
          <h2 className="section-title">Calculá tu proyecto en segundos</h2>
          <p>Elegí qué necesitás y mirá un estimado al momento. El precio final lo confirma RODMA.</p>
        </motion.div>

        <div className="cotizador">
          <div className="cz-form">
            <div className="cz-block">
              <span className="cz-label">¿Qué necesitás?</span>
              <div className="cz-options">
                {tiposTrabajo.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`cz-chip ${tipo === t.id ? 'is-active' : ''}`}
                    onClick={() => { setTipo(t.id); setCantidad(t.min) }}
                    aria-pressed={tipo === t.id}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="cz-block">
              <label className="cz-label" htmlFor="cz-cant">Cantidad ({tipoObj.unidad})</label>
              <input
                id="cz-cant"
                type="number"
                min={tipoObj.min}
                step={1}
                value={cantidad}
                onChange={(e) => setCantidad(Math.max(parseInt(e.target.value || '0', 10), 0))}
              />
              <small className="cz-hint">Mínimo sugerido: {tipoObj.min} {tipoObj.unidad}</small>
            </div>

            <div className="cz-block">
              <span className="cz-label">Extras</span>
              <div className="cz-extras">
                {extras.map((e) => (
                  <label key={e.id} className={`cz-extra ${sel.includes(e.id) ? 'is-active' : ''}`}>
                    <input type="checkbox" checked={sel.includes(e.id)} onChange={() => toggle(e.id)} />
                    <span>{e.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <aside className="cz-result">
            <span className="cz-result-label"><Calculator size={18} /> Estimado</span>
            <div className="cz-total">{formatCRC(total)}</div>
            <p className="cz-disc">Estimado de referencia. El precio final lo confirma RODMA según tu arte, materiales y acabados.</p>
            <a className="btn btn-primary btn-lg cz-cta" href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> Enviar cotización por WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
