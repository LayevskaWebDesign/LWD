import { SITE } from '@/lib/constants';
import { Container } from '@/components/ui/Container';

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-line bg-bg-deep py-10 text-center font-mono text-[13px] tracking-wide text-text-dim">
      <Container>
        {SITE.name} · <span className="text-gold-bright">{SITE.phone}</span> ·{' '}
        {SITE.city}, {SITE.country} · © {SITE.year}
      </Container>
    </footer>
  );
}
