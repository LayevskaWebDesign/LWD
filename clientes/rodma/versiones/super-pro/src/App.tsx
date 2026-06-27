import './animations.css'
import './superpro.css'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBand from './components/TrustBand'
import Services from './components/Services'
import Cotizador from './components/Cotizador'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { Reveal } from './components/motion'

export default function App() {
  return (
    <>
      <Preloader />
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <TrustBand />
        <Services />
        <Cotizador />
        <WhyUs />
        <Testimonials />
        <Reveal><Contact /></Reveal>
        <Reveal><FinalCTA /></Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
