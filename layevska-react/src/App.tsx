import { Preloader } from '@/components/overlay/Preloader';
import { CustomCursor } from '@/components/overlay/CustomCursor';
import { ThemeSwitch } from '@/components/overlay/ThemeSwitch';
import { ScrollProgress } from '@/components/overlay/ScrollProgress';
import { BackToTop } from '@/components/overlay/BackToTop';
import { WhatsAppButton } from '@/components/overlay/WhatsAppButton';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';

function App() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <CustomCursor />
      <ThemeSwitch />
      <Header />

      <main>
        <Hero />
        {/* Phase 2 sections will be added here:
            <About />, <Services />, <ProcessVisual />, <Portfolio />,
            <Prices />, <ProcessTimeline />, <FAQ />, <Configurator />, <ContactForm />
        */}
      </main>

      <Footer />

      <BackToTop />
      <WhatsAppButton />
    </>
  );
}

export default App;
