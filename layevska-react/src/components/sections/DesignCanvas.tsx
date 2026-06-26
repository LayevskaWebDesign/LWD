import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Phase = 'loading-palette' | 'wireframe' | 'colors' | 'content' | 'published';

const PHASE_LABELS: Record<Phase, string> = {
  'loading-palette': 'cargando paleta',
  wireframe: 'trazando wireframe',
  colors: 'aplicando colores',
  content: 'añadiendo contenido',
  published: 'listo para publicar',
};

interface CursorPos {
  x: number;
  y: number;
}

/**
 * Loop cinematográfico de "diseñando una landing en vivo".
 * Secuencia de ~11 segundos que se repite.
 */
export function DesignCanvas(): JSX.Element {
  const [phase, setPhase] = useState<Phase>('loading-palette');
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: 10, y: 50 });
  const [filled, setFilled] = useState(false);
  const [content, setContent] = useState(false);
  const [published, setPublished] = useState(false);
  const reduced = useReducedMotion();
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    if (reduced) return;

    const schedule = (delay: number, fn: () => void): void => {
      timeoutsRef.current.push(window.setTimeout(fn, delay));
    };

    const runLoop = (): void => {
      // Reset
      setFilled(false);
      setContent(false);
      setPublished(false);
      setPhase('loading-palette');
      setCursorPos({ x: 10, y: 50 });

      // Wireframe phase
      schedule(1800, () => {
        setPhase('wireframe');
        setCursorPos({ x: 50, y: 25 });
      });
      schedule(2400, () => setCursorPos({ x: 50, y: 40 }));
      schedule(2900, () => setCursorPos({ x: 40, y: 65 }));
      schedule(3200, () => setCursorPos({ x: 70, y: 65 }));
      schedule(3500, () => setCursorPos({ x: 40, y: 88 }));

      // Color phase
      schedule(4200, () => {
        setPhase('colors');
        setCursorPos({ x: 10, y: 20 });
      });
      schedule(4900, () => setCursorPos({ x: 60, y: 18 }));
      schedule(5400, () => {
        setFilled(true);
        setCursorPos({ x: 10, y: 35 });
      });
      schedule(5900, () => setCursorPos({ x: 45, y: 88 }));

      // Content
      schedule(6400, () => {
        setPhase('content');
        setContent(true);
        setCursorPos({ x: 50, y: 38 });
      });
      schedule(7200, () => setCursorPos({ x: 55, y: 68 }));

      // Published
      schedule(8000, () => {
        setPhase('published');
        setPublished(true);
        setCursorPos({ x: 85, y: 30 });
      });

      // Loop
      schedule(11000, runLoop);
    };

    const initial = window.setTimeout(runLoop, 200);
    timeoutsRef.current.push(initial);

    return () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, [reduced]);

  return (
    <div
      className="relative aspect-[5/4] overflow-hidden rounded-md border border-line-strong bg-bg-deep shadow-glow"
      style={{
        backgroundImage:
          'linear-gradient(rgba(201,169,97,0.04) 1px,transparent 1px), linear-gradient(90deg,rgba(201,169,97,0.04) 1px,transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Tag */}
      <span className="absolute left-3.5 top-3.5 z-10 inline-flex items-center gap-1.5 rounded-sm border border-line bg-bg-deep/70 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-wider text-gold-bright">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#5eb053] animate-pulse-dot" />
        diseñando en vivo
      </span>

      {/* Palette */}
      <div className="absolute left-6 top-1/2 z-[5] flex -translate-y-1/2 flex-col gap-2.5">
        {[
          { color: '#1A2D4F', delay: '0.3s' },
          { color: '#C9A961', delay: '0.6s' },
          { color: '#EFE5D0', delay: '0.9s' },
          { color: '#5A6378', delay: '1.2s' },
        ].map((s, i) => (
          <span
            key={i}
            className="h-[30px] w-[30px] rounded-full border-2 border-line opacity-0 shadow-md"
            style={{
              background: s.color,
              animation: reduced
                ? 'none'
                : `swatchIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards ${s.delay}`,
            }}
          />
        ))}
      </div>

      {/* Wireframes */}
      <Wireframe className="left-[30%] right-[8%] top-[14%] h-[8%]" delay={1800} reduced={reduced} filled={filled}>
        {null}
      </Wireframe>
      <Wireframe className="left-[30%] right-[8%] top-[26%] h-[24%]" delay={2300} reduced={reduced} filled={filled} variant="hero">
        <div className="flex h-full flex-col justify-center p-3.5">
          <div className="mt-2.5 h-[5px] w-[60%] rounded-sm bg-gold" />
          <Line content={content} thin />
          <Line content={content} thin />
          <Line content={content} short />
        </div>
      </Wireframe>
      <Wireframe className="left-[30%] top-[54%] h-[30%] w-[30%]" delay={2800} reduced={reduced} filled={filled} variant="card">
        <div className="flex h-full flex-col p-3 pt-3.5">
          <div className="mt-0 h-1 w-[30%] rounded-sm bg-gold" />
          <Line content={content} thin />
          <Line content={content} thin />
        </div>
      </Wireframe>
      <Wireframe className="left-[62%] right-[8%] top-[54%] h-[30%]" delay={3100} reduced={reduced} filled={filled} variant="card">
        <div className="flex h-full flex-col p-3 pt-3.5">
          <div className="mt-0 h-1 w-[30%] rounded-sm bg-gold" />
          <Line content={content} thin />
          <Line content={content} thin />
        </div>
      </Wireframe>
      <Wireframe
        className="left-[30%] top-[88%] h-[7%] w-[25%]"
        delay={3400}
        reduced={reduced}
        filled={filled}
        variant="button"
      >
        {null}
      </Wireframe>

      {/* Stamp */}
      <div
        className="absolute right-[12%] top-[22%] z-[15] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gold text-center font-display text-[11px] font-semibold uppercase leading-tight tracking-wider text-bg-deep shadow-[0_8px_24px_-8px_rgb(var(--color-gold))] transition-all duration-500"
        style={{
          transform: published ? 'rotate(-15deg) scale(1)' : 'rotate(-15deg) scale(0.5)',
          opacity: published ? 1 : 0,
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        listo
        <br />✦
      </div>

      {/* Designer cursor */}
      <div
        className="absolute z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0"
        style={{
          left: `${cursorPos.x}%`,
          top: `${cursorPos.y}%`,
          transition: 'left 0.9s cubic-bezier(0.5,0,0.5,1), top 0.9s cubic-bezier(0.5,0,0.5,1)',
          animation: reduced ? 'none' : 'cursorAppear 0.4s ease forwards 1.4s',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full fill-gold-bright drop-shadow-md"
        >
          <path d="M3 2l7 18 2-8 8-2L3 2z" />
        </svg>
      </div>

      {/* Phase label */}
      <div className="absolute bottom-3.5 right-3.5 z-10 font-mono text-[10px] uppercase tracking-wider text-gold-bright">
        <span
          className="inline-block min-w-[120px] transition-opacity duration-300"
          key={phase}
        >
          {PHASE_LABELS[phase]}
        </span>
      </div>

      {/* Inline keyframes for swatches and cursor */}
      <style>{`
        @keyframes swatchIn {
          from { opacity: 0; transform: translateX(-30px) scale(0.5); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes cursorAppear {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

interface WireframeProps {
  className?: string;
  delay: number;
  reduced: boolean;
  filled: boolean;
  variant?: 'hero' | 'card' | 'button' | 'plain';
  children: React.ReactNode;
}

function Wireframe({ className = '', delay, reduced, filled, variant = 'plain', children }: WireframeProps): JSX.Element {
  const baseClass = 'absolute opacity-0 rounded-sm transition-all duration-700';
  const borderStyle = filled
    ? variant === 'hero'
      ? 'border border-solid border-gold bg-bg'
      : variant === 'button'
        ? 'border border-solid border-transparent bg-gold shadow-[0_4px_16px_-4px_rgb(var(--color-gold))]'
        : 'border border-solid border-transparent bg-bg-light'
    : 'border-[1.5px] border-dashed border-gold bg-transparent';

  return (
    <div
      className={`${baseClass} ${borderStyle} ${className}`}
      style={{
        animation: reduced
          ? 'none'
          : `wfDraw 0.5s ease forwards ${delay}ms`,
      }}
    >
      {children}
      <style>{`
        @keyframes wfDraw {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

interface LineProps {
  content: boolean;
  thin?: boolean;
  short?: boolean;
}

function Line({ content, thin, short }: LineProps): JSX.Element {
  return (
    <div
      className={`mx-2 my-1.5 rounded-[1px] bg-text-dim transition-opacity duration-500 ${
        thin ? 'h-[2px]' : 'h-[3px]'
      } ${short ? 'w-[50%]' : 'w-[80%]'}`}
      style={{ opacity: content ? 0.6 : 0 }}
    />
  );
}
