import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress(): JSX.Element {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[1001] h-[2px] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-gold to-gold-bright shadow-[0_0_12px_rgb(var(--color-gold))]"
        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
      />
    </div>
  );
}
