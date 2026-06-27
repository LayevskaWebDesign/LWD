@echo off
REM ───────────────────────────────────────────────────────────────
REM QA: screenshots (Playwright) + Lighthouse de las 3 versiones.
REM Antes de correr esto, levantá las versiones con el comparar.bat del cliente.
REM Para PageSpeed creíble, medí contra el build (pnpm build && pnpm preview) — ver README.
REM ───────────────────────────────────────────────────────────────

echo === 1/2 · Screenshots (Playwright) ===
call node qa.mjs

echo.
echo === 2/2 · Lighthouse (movil) ===
call npx lighthouse http://localhost:5180 --output=html --output-path=qa-output/lh-basic.html      --form-factor=mobile --only-categories=performance,seo,accessibility --quiet --chrome-flags="--headless"
call npx lighthouse http://localhost:5181 --output=html --output-path=qa-output/lh-animation.html  --form-factor=mobile --only-categories=performance,seo,accessibility --quiet --chrome-flags="--headless"
call npx lighthouse http://localhost:5182 --output=html --output-path=qa-output/lh-super-pro.html  --form-factor=mobile --only-categories=performance,seo,accessibility --quiet --chrome-flags="--headless"

echo.
echo Listo. Abri la carpeta qa-output para ver screenshots y reportes Lighthouse.
pause
