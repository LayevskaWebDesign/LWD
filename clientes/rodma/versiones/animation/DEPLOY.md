# Deploy — RODMA Animation

## Rápido (Netlify Drop · 2 min)
1. `pnpm build` (o `4-COMPILAR.bat`) → genera `dist/`.
2. Abrí https://app.netlify.com/drop
3. Arrastrá la carpeta `dist/`. Renombrá la URL a `rodma-animation`.

El `netlify.toml` ya configura el redirect de SPA y las cabeceras de seguridad.

## Formulario (Netlify Forms)
Igual que la Basic: el form "contacto" se detecta solo (hay un `<form>` oculto en `index.html`).
Respuestas en Netlify → Forms.

## Dominio
Netlify → Domain settings → Add custom domain → DNS → SSL automático.

> Medí PageSpeed sobre el build (`pnpm build && pnpm preview`), no sobre el dev server.
