import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import gsap from 'gsap'

// Splash de marca que se desliza hacia arriba al cargar (entrada coreografiada).
export default function Preloader() {
  const reduce = useReducedMotion()
  const [wide] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 760px)').matches : true,
  )
  const [gone, setGone] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // En móvil/low-end o con reduced-motion no mostramos preloader (no penaliza el LCP).
    if (reduce || !wide) {
      setGone(true)
      return
    }
    const el = ref.current
    if (!el) return
    const tl = gsap.timeline({ onComplete: () => setGone(true) })
    tl.to(el.querySelector('.pl-mark'), { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
      .to(el.querySelector('.pl-bar span'), { scaleX: 1, duration: 0.8, ease: 'power2.inOut' }, '-=0.2')
      .to(el, { yPercent: -100, duration: 0.6, ease: 'power3.inOut' }, '+=0.15')
    return () => {
      tl.kill()
    }
  }, [reduce, wide])

  if (reduce || !wide || gone) return null
  return (
    <div className="preloader" ref={ref} aria-hidden="true">
      <div className="pl-mark">RODMA<span className="dot">.</span></div>
      <div className="pl-bar"><span /></div>
    </div>
  )
}
