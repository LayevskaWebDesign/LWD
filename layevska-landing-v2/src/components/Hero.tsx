import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Server } from "lucide-react";
import { BRAND } from "../data";
import { ParticlesBg } from "./ParticlesBg";
import { FloatingFrames } from "./FloatingFrames";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 min-h-[100vh] flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 85% 10%, rgba(201,169,97,0.10) 0%, transparent 45%)," +
          "radial-gradient(ellipse at 10% 90%, rgba(241,203,191,0.10) 0%, transparent 50%)," +
          "linear-gradient(135deg, #070F1A 0%, #0E2435 55%, #1C4058 100%)",
      }}
    >
      <ParticlesBg />

      {/* Línea decorativa dorada superior */}
      <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent z-10" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <span className="chapter-label mb-7">
              — {BRAND.contact.location} ·  Desde 2026
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-shadow-dark">
              <span className="block text-ivory">Diseñamos</span>
              <span className="block text-ivory">landings que</span>
              <span className="block gold-3d italic font-serif">se sienten</span>
              <span className="block text-ivory">hechas a mano.</span>
            </h1>

            <p className="mt-7 text-base md:text-lg text-ivory/75 leading-relaxed max-w-xl">
              Estudio costarricense que combina estrategia, copywriting AIDA/PAS,
              diseño UI editorial y arquitectura serverless AWS.{" "}
              <strong className="text-gold-bright font-semibold">
                Pago único desde $875.
              </strong>{" "}
              Mantenimiento honesto de $120/mes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn btn-primary">
                Cotizar mi landing
                <ArrowRight size={16} className="ml-1" />
              </a>
              <a href="#servicios" className="btn btn-outline">
                Ver modelos y precios
              </a>
            </div>

            {/* Credenciales rápidas */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-7 border-t border-ivory/10 max-w-xl">
              <Cred icon={<Server size={18} />} value="AWS" label="Infraestructura serverless" />
              <Cred icon={<Award size={18} />} value="99.9%" label="Uptime garantizado" />
              <Cred icon={<Clock size={18} />} value="3-7d" label="Entrega completa" />
            </div>
          </motion.div>

          {/* MARCOS 3D FLOTANTES */}
          <div className="relative">
            <FloatingFrames />
          </div>
        </div>
      </div>

      {/* Indicador scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-bright/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] tracking-widest2 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-bright to-transparent" />
      </motion.div>
    </section>
  );
}

function Cred({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <div className="text-gold-bright">{icon}</div>
      <span className="gold-text font-display text-2xl font-semibold leading-none">
        {value}
      </span>
      <span className="text-[11px] text-ivory/55 leading-tight">{label}</span>
    </div>
  );
}
