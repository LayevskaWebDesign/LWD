import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import SplitType from 'split-type'
import { site } from '../data/content'

const Scene3D = lazy(() => import('./Scene3D'))
const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensajeWA)}`

function HeroCard() {
  return (
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
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const copyRef = useRef<HTMLDivElement>(null)
  const [wide] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 760px)').matches : true,
  )
  const use3D = !reduce && wide

  useEffect(() => {
    // La intro GSAP/SplitType solo en desktop: en móvil el contenido aparece de una (mejor LCP).
    if (reduce || !wide) return
    const el = copyRef.current
    if (!el) return
    let split: SplitType | null = null
    const ctx = gsap.context(() => {
      const h1 = el.querySelector('h1')
      if (h1) gsap.from(h1, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.25 })
      const lead = el.querySelector('.lead')
      if (lead) {
        split = new SplitType(lead as HTMLElement, { types: 'words' })
        if (split.words) {
          gsap.from(split.words, { y: 16, opacity: 0, stagger: 0.02, duration: 0.5, ease: 'power3.out', delay: 0.65 })
        }
      }
      gsap.from(el.querySelectorAll('.eyebrow, .hero-cta, .hero-trust'), {
        y: 22, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out', delay: 0.45,
      })
    }, el)
    return () => {
      ctx.revert()
      split?.revert()
    }
  }, [reduce, wide])

  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy" ref={copyRef}>
          <span className="eyebrow">Impresión digital y artes gráficas · Desamparados</span>
          <h1>Hacé física <span className="accent">tu idea.</span></h1>
          <p className="lead">
            Impresión digital, gran formato, diseño, sublimación y grabado láser con calidad
            garantizada. +13 años dándole forma a las ideas de personas y empresas en Costa Rica.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href="#cotizador">Cotizá al instante</a>
            <a className="btn btn-ghost btn-lg" href={waLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <p className="hero-trust">
            <span className="stars" aria-hidden="true">★★★★★</span>
            <span>5.0 en Google</span>
            <span aria-hidden="true">·</span>
            <span>+13 años de experiencia</span>
          </p>
        </div>

        <div className="hero-visual">
          {use3D ? (
            <div className="scene-wrap">
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            </div>
          ) : (
            <HeroCard />
          )}
        </div>
      </div>
    </section>
  )
}
