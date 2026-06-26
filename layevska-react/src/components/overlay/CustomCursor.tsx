import { useEffect, useRef, useState } from 'react';

const HOVER_SELECTOR =
  'a, button, .magnetic, .faq-trigger, .service-card, .price-card, .config-option, .config-palette';

const MAGNETIC_SELECTOR = '.magnetic';
const TRAIL_THROTTLE_MS = 40;
const TRAIL_LIFETIME_MS = 700;

export function CustomCursor(): JSX.Element | null {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let lastTrail = 0;
    let raf = 0;

    const handleMove = (e: MouseEvent): void => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      const now = Date.now();
      if (now - lastTrail > TRAIL_THROTTLE_MS) {
        lastTrail = now;
        const trail = document.createElement('div');
        trail.className = 'trail-dot';
        trail.style.left = `${mouseX + (Math.random() * 8 - 4)}px`;
        trail.style.top = `${mouseY + (Math.random() * 8 - 4)}px`;
        document.body.appendChild(trail);
        window.setTimeout(() => trail.remove(), TRAIL_LIFETIME_MS);
      }
    };

    const animateRing = (): void => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    // Hover detection on existing interactive elements
    const interactives = document.querySelectorAll(HOVER_SELECTOR);
    const onEnter = (): void => ring.classList.add('hover');
    const onLeave = (): void => ring.classList.remove('hover');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Magnetic effect
    const magnetic = document.querySelectorAll<HTMLElement>(MAGNETIC_SELECTOR);
    const magnetMove = (e: MouseEvent): void => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const mx = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const my = (e.clientY - rect.top - rect.height / 2) * 0.25;
      el.style.transform = `translate(${mx}px, ${my}px)`;
    };
    const magnetReset = (e: MouseEvent): void => {
      (e.currentTarget as HTMLElement).style.transform = '';
    };
    magnetic.forEach((el) => {
      el.addEventListener('mousemove', magnetMove);
      el.addEventListener('mouseleave', magnetReset);
    });

    document.addEventListener('mousemove', handleMove);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', handleMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      magnetic.forEach((el) => {
        el.removeEventListener('mousemove', magnetMove);
        el.removeEventListener('mouseleave', magnetReset);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
