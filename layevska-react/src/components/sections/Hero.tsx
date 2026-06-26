import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { DesignCanvas } from './DesignCanvas';

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' as const },
});

export function Hero(): JSX.Element {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-40 lg:pt-40"
      style={{
        background:
          'radial-gradient(ellipse at 80% 20%, rgb(var(--color-gold) / 0.15) 0%, transparent 45%), rgb(var(--color-bg))',
      }}
    >
      <div className="absolute inset-x-0 top-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* TEXT */}
          <div className="hero-text">
            <motion.p {...stagger(0.3)} className="mb-6 flex items-center gap-3 eyebrow">
              <span className="h-px w-8 bg-gold" />
              Estudio de diseño y desarrollo
            </motion.p>

            <motion.h1
              {...stagger(0.5)}
              className="mb-7 font-display text-display-xl font-medium text-text"
            >
              Diseñamos landing pages que{' '}
              <em className="not-italic relative inline-block font-semibold italic text-gold-bright">
                se sienten
                <span className="absolute inset-x-0 bottom-[0.05em] -z-10 h-2 bg-gold/15" />
              </em>{' '}
              hechas a mano.
            </motion.h1>

            <motion.p {...stagger(0.7)} className="mb-9 max-w-[520px] text-lg leading-relaxed text-text-soft">
              Un estudio pequeño en Costa Rica que combina estrategia, copywriting, diseño UI y
              arquitectura serverless AWS. Pago único desde $875, mantenimiento honesto de $120 al mes.
            </motion.p>

            <motion.div {...stagger(0.9)} className="flex flex-wrap gap-3.5">
              <LinkButton href="#contacto" variant="primary" magnetic withArrow>
                Cotizar mi landing
              </LinkButton>
              <LinkButton href="#precios" variant="outline" magnetic>
                Ver precios
              </LinkButton>
            </motion.div>

            <motion.div
              {...stagger(1.1)}
              className="mt-9 flex flex-wrap gap-8 border-t border-line pt-9"
            >
              {[
                { label: 'AWS', detail: 'Infraestructura serverless' },
                { label: '99.9%', detail: 'Uptime garantizado' },
                { label: '3-7d', detail: 'Entrega completa' },
              ].map((cred) => (
                <div key={cred.label} className="font-mono text-xs tracking-wide text-text-dim">
                  <span className="mb-0.5 block font-display text-[22px] italic text-gold-bright">
                    {cred.label}
                  </span>
                  {cred.detail}
                </div>
              ))}
            </motion.div>
          </div>

          {/* DESIGN CANVAS */}
          <motion.div {...stagger(0.9)} className="mx-auto w-full max-w-[480px] lg:max-w-none">
            <DesignCanvas />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
