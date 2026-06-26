import { useTheme } from '@/hooks/useTheme';

export function ThemeSwitch(): JSX.Element {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar tema claro/oscuro"
      className="magnetic fixed right-6 top-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-surface/40 backdrop-blur transition-all duration-300 hover:rotate-[20deg] hover:border-gold"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 transition-transform duration-500"
        style={{ transform: theme === 'light' ? 'rotate(180deg)' : 'rotate(0deg)' }}
        stroke="rgb(var(--color-gold-bright))"
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
