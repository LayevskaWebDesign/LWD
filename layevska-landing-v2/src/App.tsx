import { useState } from "react";
import { Preloader } from "./components/Preloader";
import { Header } from "./components/Header";
import { WorldOne } from "./worlds/one/WorldOne";
import { WorldTwo } from "./worlds/two/WorldTwo";
import { WorldThree } from "./worlds/three/WorldThree";
import { WorldFour } from "./worlds/four/WorldFour";
import { WorldFive } from "./worlds/five/WorldFive";
import { WorldSix } from "./worlds/six/WorldSix";
import { WorldSeven } from "./worlds/seven/WorldSeven";
import { WorldEight } from "./worlds/eight/WorldEight";
import { Testimonios } from "./components/Testimonios";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { BackToTop } from "./components/BackToTop";
import { SectionTransition } from "./components/SectionTransition";
import { StickyCTAMobile } from "./components/StickyCTAMobile";
import { CalendarModal } from "./components/CalendarModal";
import { ExitIntentModal } from "./components/ExitIntentModal";

function App() {
  const [ready, setReady] = useState(false);
  const [calOpen, setCalOpen] = useState(false);
  const openCal = () => setCalOpen(true);
  const closeCal = () => setCalOpen(false);

  return (
    <>
      <Preloader durationMs={7000} onComplete={() => setReady(true)} />
      <div
        className={`transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Header />
        <main>
          <WorldOne onOpenCalendar={openCal} />
          <SectionTransition variant="canvas" label="el porqué · capítulo II" />
          <WorldTwo />
          <SectionTransition variant="editorial" label="el oficio · capítulo III" />
          <WorldThree />
          <SectionTransition variant="canvas" label="seis pasos · capítulo IV" />
          <WorldFour />
          <SectionTransition variant="cinematic" label="el pacto · capítulo V" />
          <WorldFive />
          <SectionTransition variant="canvas" label="voces reales" />
          <Testimonios />
          <SectionTransition variant="editorial" label="mundos imaginados · capítulo VI" />
          <WorldSix />
          <SectionTransition variant="canvas" label="dudas frecuentes · capítulo VII" />
          <WorldSeven />
          <SectionTransition variant="cinematic" label="hablemos · capítulo VIII" />
          <WorldEight />
        </main>
        <Footer />

        {/* Floating + sticky CTAs */}
        <WhatsAppFloat />
        <BackToTop />
        <StickyCTAMobile onOpenCalendar={openCal} />

        {/* Modales */}
        <CalendarModal open={calOpen} onClose={closeCal} />
        <ExitIntentModal />
      </div>
    </>
  );
}

export default App;
