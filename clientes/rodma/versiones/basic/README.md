# RODMA — Versión Basic

Landing estática premium (React + Vite + TypeScript, **CSS puro**, sin librerías de animación).
Liviana y rápida (objetivo PageSpeed ≥ 90).

## Correr en local
- Doble-click en `2-INSTALAR.bat` (solo la primera vez) y luego `3-INICIAR.bat`.
- O por terminal: `pnpm install` → `pnpm dev` → http://localhost:5180

## Compilar
- `4-COMPILAR.bat` o `pnpm build` → genera la carpeta `dist/`.
- Ver el build como en producción (y medir PageSpeed): `pnpm preview` → http://localhost:4180

## Estructura
- `src/components/` — secciones (Header, Hero, Services, WhyUs, Testimonials, Contact, …)
- `src/data/content.ts` — **textos editables** (no hace falta tocar el JSX)
- `src/lib/icons.tsx` — íconos (Lucide)
- `src/index.css` — estilos y tokens de marca (navy + coral)
- `index.html` — SEO, Open Graph, JSON-LD y el form oculto para Netlify Forms

## Logos
Poné los archivos reales en `../../marca/logos/`. Por ahora el sitio usa un wordmark
tipográfico de RODMA y un favicon provisional (`public/favicon.svg`).

## Deploy
Ver [`DEPLOY.md`](DEPLOY.md).
