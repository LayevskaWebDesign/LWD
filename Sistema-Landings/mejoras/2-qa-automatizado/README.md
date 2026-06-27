# Mejora 2 · QA automatizado

**Para qué:** antes de mandarle las versiones al cliente, sacar **screenshots** (móvil + desktop)
de cada una y medir **PageSpeed/Lighthouse**. Así verificás que lo que prometés (SEO, performance,
que se ve bien en celular) es real — no asumido.

## Qué hace
- `qa.mjs` (Playwright): captura cada versión que esté corriendo, en **móvil (390×844)** y
  **desktop (1440×900)**, a página completa → carpeta `qa-output/`.
- `qa.bat`: corre los screenshots y, además, un **Lighthouse** por versión (performance, SEO,
  accesibilidad) → reportes HTML en `qa-output/`.

## Requisitos (una vez)
```
pnpm add -D playwright
npx playwright install chromium
```
Lighthouse se corre con `npx` (no requiere instalación previa).

## Cómo correrlo
1. Levantá las versiones (doble-click en el `comparar.bat` del cliente).
2. Doble-click en `qa.bat` (o `node qa.mjs` solo para screenshots).
3. Mirá la carpeta `qa-output/`.

## ⚠️ Importante sobre PageSpeed
El **dev server es más lento** que el sitio real. Para un número de PageSpeed creíble, medí
contra el **build**: en cada versión corré `pnpm build && pnpm preview` y apuntá Lighthouse al
puerto de preview (Vite usa 4173 por defecto). Los screenshots sí podés sacarlos contra el dev server.

> La carpeta `qa-output/` es descartable y está ignorada por el `.gitignore` local de este módulo.
> Activación por prompt: `MEJORAS OPCIONALES: qa`.
