import { cn } from '@/lib/utils';

interface ChapterProps {
  num: string;
  label: string;
  centered?: boolean;
  className?: string;
}

/**
 * Cabecera narrativa de cada sección: "I.  ·  Sobre  ─────"
 */
export function Chapter({ num, label, centered = false, className }: ChapterProps): JSX.Element {
  return (
    <div
      className={cn(
        'flex items-center gap-4 mb-6',
        centered && 'justify-center',
        className
      )}
    >
      <span className="font-display text-lg font-medium italic text-gold">{num}</span>
      <span className="eyebrow">{label}</span>
      {!centered && (
        <span className="h-px flex-1 max-w-[120px] bg-line-strong" />
      )}
    </div>
  );
}
