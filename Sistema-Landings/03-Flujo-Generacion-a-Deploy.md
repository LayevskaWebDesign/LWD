# 03 · Flujo técnico: del inicio del código al deploy con dominio

El camino completo de una versión: **generar → ver en localhost → compilar → publicar en
Netlify → conectar dominio.** Pensado para nuestro flujo de doble-click en Windows.

---

## 0. Requisitos
Node.js LTS · pnpm (`npm i -g pnpm`) · Claude Code · cuenta Netlify (gratis).

## 1. Generar
Se hace con el [Prompt Maestro](02-Prompt-Maestro.md). Claude crea cada versión como un
proyecto Vite **autocontenido** en `clientes/<cliente>/versiones/<plan>/` y la levanta en
localhost. (Detalle de carpetas y puertos en [04](04-Organizacion-de-Carpetas.md).)

## 2. Ver en localhost (comparar)
Cada versión corre en un puerto fijo con `vite --strictPort`:

| Plan | URL |
|---|---|
| basic | http://localhost:5180 |
| animation | http://localhost:5181 |
| super-pro | http://localhost:5182 |

Doble-click en `clientes/<cliente>/comparar.bat` levanta todas a la vez. Contenido típico:

```bat
@echo off
start "" cmd /k "cd versiones\basic && pnpm dev"
start "" cmd /k "cd versiones\animation && pnpm dev"
start "" cmd /k "cd versiones\super-pro && pnpm dev"
```

## 3. Compilar (build)
Dentro de la versión elegida: `pnpm build`. Genera la carpeta `dist/` (eso es lo que se publica).
Para ver el build como lo verá el cliente (y medir PageSpeed real): `pnpm preview`.

---

## 4. Publicar — Etapa A: Netlify Drop (manual, 2 min)
La más simple, ideal para mostrarle al cliente **ya**:
1. `pnpm build` en la versión.
2. Abrí https://app.netlify.com/drop
3. Arrastrá la carpeta `dist/` al recuadro.
4. Netlify te da una URL `https://nombre-random.netlify.app`. Renombrala a `cliente-plan`.

Hacé esto por cada versión → tenés **3 links** para mandarle al cliente a elegir.

## 5. Publicar — Etapa B: Netlify conectado a Git (auto-deploy) ⭐
La forma profesional. Una vez configurada, **cada push reconstruye y publica solo**.

**Setup (una vez por versión que quieras automatizar):**
1. Subí el repo a GitHub (o GitHub Desktop).
2. En Netlify → **Add new site → Import an existing project** → elegí el repo.
3. Configurá el sitio para que apunte a la subcarpeta de esa versión (patrón monorepo):
   - **Base directory:** `clientes/<cliente>/versiones/<plan>/`
   - **Build command:** `pnpm build`
   - **Publish directory:** `clientes/<cliente>/versiones/<plan>/dist`
4. Deploy. A partir de ahí, cualquier cambio que subás a Git en esa carpeta se publica solo.

> Cada versión = **un sitio** en Netlify, con su propio Base directory. Así podés tener
> `cliente-basic`, `cliente-animation` y `cliente-super-pro` saliendo del mismo repo.

## 6. Publicar — punto medio: Netlify CLI (1 línea)
Si preferís terminal sin UI: dentro de la carpeta de la versión, una vez `netlify link`, después
`netlify deploy --prod --dir=dist`.

---

## 7. `netlify.toml` de referencia (lo genera el prompt por versión)
Va dentro de cada `versiones/<plan>/`. Da el redirect de SPA + headers de seguridad (que además
son argumento de venta):

```toml
[build]
  command = "pnpm build"
  publish = "dist"

# SPA: todas las rutas sirven index.html
[[redirects]]
  from = "/*"
  to   = "/index.html"
  status = 200

# Cabeceras de seguridad
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options        = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy        = "strict-origin-when-cross-origin"
    Permissions-Policy     = "geolocation=(), microphone=(), camera=()"
```

---

## 8. Conectar el dominio
Cuando el cliente elige un plan y compra el dominio (GoDaddy, Namecheap, Cloudflare, etc.):
1. En el sitio Netlify de **esa** versión → **Domain settings → Add a custom domain**.
2. Netlify te da los registros DNS. En el registrador del dominio:
   - Dominio raíz (`cliente.com`) → registro **A** o **ALIAS/ANAME** al valor que da Netlify.
   - `www` → registro **CNAME** al subdominio `.netlify.app` del sitio.
3. El **SSL (candado verde)** se activa solo en minutos (Let's Encrypt).

> Las otras versiones (las no elegidas) pueden quedar como previews `cliente-plan.netlify.app`
> o despublicarse.

---

## 9. Decisión de negocio: ¿de quién es la cuenta Netlify?
- **Cuenta del estudio (recomendado):** vos hospedás bajo el dominio del cliente y cobrás el
  **retainer** de mantenimiento ([01](01-Modelo-de-Negocio-y-Planes.md)). Control y relación continua.
- **Cuenta del cliente:** se la entregás y se desentiende él del hosting. Menos ingreso recurrente,
  menos soporte de tu parte.

Definí esto **antes** de comprar dominio y conectar, porque cambia a nombre de quién queda todo.

---
*Tip: para medir PageSpeed de verdad, corré Lighthouse contra `pnpm preview` (build), no contra
el dev server. Hay un QA automatizado en [`mejoras/2-qa-automatizado/`](mejoras/2-qa-automatizado/).*
