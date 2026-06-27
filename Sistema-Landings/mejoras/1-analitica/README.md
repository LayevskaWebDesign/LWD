# Mejora 1 · Analítica de conversión

**Para qué:** medir si la landing **convierte** (no solo si tiene visitas). Sin esto no podés
demostrarle al cliente el retorno ni justificar el retainer.

## Qué se mide
- Visitas y páginas/secciones vistas.
- **Click en WhatsApp** (la conversión más importante de estas landings).
- **Envío del formulario** de contacto.
- **Cotizador completado** (solo Super Pro).

## Herramienta recomendada: Plausible
Recomiendo **Plausible** sobre Google Analytics 4 por dos razones que importan a este negocio:
1. **Liviano (~1 KB)** → no pelea con el objetivo PageSpeed ≥ 90.
2. **Sin cookies** → no dispara la obligación de banner de consentimiento y encaja con la
   postura de privacidad de la **Ley 8968** (ver el aviso de privacidad de la base).

GA4 es válido si el cliente ya lo usa, pero es más pesado y **sí** requiere consentimiento de cookies.

## Cómo integrar
1. Crear el sitio en Plausible (o GA4) y obtener el dominio/ID.
2. Pegar el snippet de [`analytics.snippet.html`](analytics.snippet.html) en el `<head>` del
   `index.html` de la versión.
3. Disparar los eventos en los botones (WhatsApp, submit, cotizador). El snippet trae los
   ejemplos en React.

> Activación por prompt: `MEJORAS OPCIONALES: analitica`.
