import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { SITE, NAV_LINKS } from '@/lib/constants';

export function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[80] transition-all duration-300 border-b border-transparent',
        scrolled && 'bg-bg-deep/85 backdrop-blur-xl border-line'
      )}
    >
      {/* Top utility bar */}
      <div className="border-b border-line bg-bg-deep px-8 py-2 text-text-soft font-mono text-[11px] tracking-wider md:flex justify-between hidden">
        <span className="flex items-center gap-2">
          <span className="relative inline-block h-[6px] w-[6px] rounded-full bg-[#5eb053] animate-pulse-dot" />
          Disponible para nuevos proyectos
        </span>
        <span className="flex gap-3">
          <a href={`tel:${SITE.phoneE164}`} className="transition-colors hover:text-gold-bright">
            {SITE.phone}
          </a>
          <span>·</span>
          <span>{SITE.city}, {SITE.country}</span>
        </span>
      </div>

      {/* Main bar */}
      <div className="flex items-center justify-between px-8 py-5">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-wider text-text">
            {SITE.shortName}
            <em className="not-italic text-gold">.</em>
          </span>
          <span className="mt-1 font-mono text-[10px] font-medium uppercase tracking-widest text-gold-bright">
            {SITE.tagline}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[13px] font-medium tracking-wide text-text-soft transition-colors duration-200 hover:text-gold-bright"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 right-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contacto"
            className="magnetic bg-gold px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-bg-deep transition-all duration-300 hover:-translate-y-[2px] hover:bg-gold-bright"
          >
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  );
}
