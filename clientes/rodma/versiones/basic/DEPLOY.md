# Deploy — RODMA Basic

## Rápido (Netlify Drop · 2 min)
1. `pnpm build` (o `4-COMPILAR.bat`) → genera `dist/`.
2. Abrí https://app.netlify.com/drop
3. Arrastrá la carpeta `dist/`. Netlify te da una URL; renombrala a `rodma-basic`.

El `netlify.toml` ya configura el redirect de SPA y las **cabeceras de seguridad**.

## Formulario (Netlify Forms)
El formulario "contacto" se detecta solo (hay un `<form>` oculto en `index.html`). Las respuestas
llegan a **Netlify → Forms**; ahí podés activar notificación por correo. Trae honeypot + time-trap
+ validación. Para un límite estricto de 30 req/min se puede agregar una Netlify Edge Function.

## Dominio
Netlify → **Domain settings → Add custom domain** → seguí las instrucciones DNS del registrador.
El SSL (candado) se activa automáticamente.

> Para un número de PageSpeed creíble, medí sobre el build (`pnpm build && pnpm preview`), no sobre el dev server.
