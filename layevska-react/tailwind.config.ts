import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-deep': 'rgb(var(--color-bg-deep) / <alpha-value>)',
        'bg-light': 'rgb(var(--color-bg-light) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'text-soft': 'rgb(var(--color-text-soft) / <alpha-value>)',
        'text-dim': 'rgb(var(--color-text-dim) / <alpha-value>)',
        gold: {
          DEFAULT: 'rgb(var(--color-gold) / <alpha-value>)',
          bright: 'rgb(var(--color-gold-bright) / <alpha-value>)',
          soft: 'rgb(var(--color-gold-soft) / <alpha-value>)',
        },
        line: 'rgb(var(--color-line) / <alpha-value>)',
        'line-strong': 'rgb(var(--color-line-strong) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.1' }],
        'display-lg': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.15' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.35em',
      },
      boxShadow: {
        glow: '0 30px 60px -20px rgb(var(--color-bg-deep) / 0.6)',
        'gold-glow': '0 16px 40px -10px rgb(var(--color-gold) / 0.4)',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite',
        'wa-pulse': 'waPulse 3s infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease forwards',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(94,176,83,0.6)' },
          '50%': { boxShadow: '0 0 0 6px rgba(94,176,83,0)' },
        },
        waPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,169,97,0.6)' },
          '70%': { boxShadow: '0 0 0 20px rgba(201,169,97,0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.15)', opacity: '0.7' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
