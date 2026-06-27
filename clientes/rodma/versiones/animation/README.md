# RODMA — Versión Animation

Igual que la Basic + **movimiento** con Framer Motion: revelados al hacer scroll, entrada del
hero, stagger en tarjetas, transiciones suaves y fondo animado sutil. Respeta `prefers-reduced-motion`.

## Correr en local
- Doble-click en `2-INSTALAR.bat` (la primera vez) y luego `3-INICIAR.bat`.
- O: `pnpm install` → `pnpm dev` → http://localhost:5181

## Compilar
- `4-COMPILAR.bat` o `pnpm build` → `dist/`. Ver el build: `pnpm preview` → http://localhost:4181

## Qué cambia respecto a Basic
- `framer-motion` agregado.
- `src/components/motion.tsx` — variantes y el componente `Reveal`.
- `src/animations.css` — fondo animado del hero + flotación de la tarjeta.
- Hero, Services, WhyUs, Testimonials y secciones revelan al entrar en viewport.

## Deploy
Ver [`DEPLOY.md`](DEPLOY.md).
