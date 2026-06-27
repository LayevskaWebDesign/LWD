# Cliente: Rodma

**Estado:** 🟢 Las **3 versiones** generadas y verificadas (build OK, render OK, 0 errores de consola).
Pendiente: logos reales (archivos) + deploy.

## Versiones (corren en localhost)
| Plan | Puerto | Qué la distingue |
|---|---|---|
| **Basic** | 5180 | Estática, CSS puro, ultraliviana (~53 kB JS gzip) |
| **Animation** | 5181 | + Framer Motion: reveals al scroll, stagger, fondo de marca animado |
| **Super Pro** | 5182 | + 3D (Three.js/R3F con bloom), **cotizador interactivo**, intro GSAP + preloader |

- **Verlas todas a la vez:** doble-click [`comparar.bat`](comparar.bat).
- Una sola: en `versiones/<plan>/` → `3-INICIAR.bat`.

## Hecho
- [x] Contexto consolidado + paleta extraída del logo.
- [x] Basic, Animation y Super Pro generadas y verificadas.

## Pendiente
- [ ] Guardar los **4 logos** en `marca/logos/` (reemplazan el wordmark de texto y el favicon).
- [ ] (Opcional) QA/Lighthouse → [`mejoras/2-qa-automatizado`](../../Sistema-Landings/mejoras/2-qa-automatizado/) · ficha de entrega → [`mejoras/3-ficha-entrega`](../../Sistema-Landings/mejoras/3-ficha-entrega/)
- [ ] Elegir versión → deploy a Netlify → dominio → ver [`03-Flujo-Generacion-a-Deploy`](../../Sistema-Landings/03-Flujo-Generacion-a-Deploy.md)

## Notas
- El **cotizador** del Super Pro usa **tarifas de referencia** (en `versiones/super-pro/src/lib/cotizador.ts`) — reemplazá con las tarifas reales de RODMA.
- El **3D** solo carga en pantallas ≥ 760 px; en móvil/low-end o con `prefers-reduced-motion` muestra una tarjeta estática (por performance/PageSpeed).

## Atajos
- Guía del estudio: [00-Guia-Uso-Estudio](../../Sistema-Landings/00-Guia-Uso-Estudio.md)
- El prompt maestro: [02-Prompt-Maestro](../../Sistema-Landings/02-Prompt-Maestro.md)
