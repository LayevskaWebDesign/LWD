import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline';

interface BaseProps {
  variant?: Variant;
  magnetic?: boolean;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const baseStyles =
  'inline-flex items-center gap-[10px] px-7 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.15em] border border-transparent transition-all duration-[350ms] ease-bounce no-underline';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gold text-bg-deep hover:bg-gold-bright hover:-translate-y-[3px] hover:shadow-gold-glow',
  outline:
    'text-text border-text hover:bg-text hover:text-bg',
};

const Arrow = (): JSX.Element => (
  <span className="btn-arrow transition-transform duration-300 group-hover:translate-x-1">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  </span>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', magnetic = false, withArrow = false, className, children, ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(
        'group',
        baseStyles,
        variantStyles[variant],
        magnetic && 'magnetic',
        className
      )}
      {...rest}
    >
      {children}
      {withArrow && <Arrow />}
    </button>
  )
);
Button.displayName = 'Button';

export function LinkButton({
  variant = 'primary',
  magnetic = false,
  withArrow = false,
  className,
  children,
  ...rest
}: AnchorProps): JSX.Element {
  return (
    <a
      className={cn(
        'group',
        baseStyles,
        variantStyles[variant],
        magnetic && 'magnetic',
        className
      )}
      {...rest}
    >
      {children}
      {withArrow && <Arrow />}
    </a>
  );
}
