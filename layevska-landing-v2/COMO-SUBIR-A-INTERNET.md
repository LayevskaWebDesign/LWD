# Cómo subir tu landing a internet (gratis)

Tres opciones, ordenadas de **más simple** a **más profesional**. Las tres son **100% gratis** para una landing como esta.

---

## OPCIÓN 1 · Netlify Drop (la más fácil, 2 minutos)

> Esta es la que recomiendo para verla **online ya mismo** sin complicaciones.

### Paso a paso

1. **Doble click en `4-COMPILAR.bat`**
   Esto genera una carpeta llamada `dist` dentro de `layevska-landing-v2`. Cuando termina, te pregunta si querés abrir la carpeta — decí **S**.

2. **En el navegador, abrí:** https://app.netlify.com/drop

3. **Arrastrá la carpeta `dist`** completa al recuadro que dice *"Drag and drop your site output folder here"*.

4. **Esperá ~30 segundos.** Netlify te muestra una URL tipo `https://random-name-123.netlify.app`.

5. **Listo, tu landing está online.** Compartí ese link con quien quieras.

### Si querés guardar el sitio

Después del primer deploy, Netlify te ofrece **crear cuenta gratis** (con email o GitHub). Una vez con cuenta:
- Podés cambiar el nombre random por `layevska-web-design.netlify.app`
- Podés conectar tu dominio propio cuando lo compres
- Cada vez que cambies algo, repetís: `4-COMPILAR.bat` → arrastrás `dist` → se actualiza

---

## OPCIÓN 2 · Vercel Drop (similar a Netlify, también fácil)

### Paso a paso

1. **Doble click en `4-COMPILAR.bat`** (genera la carpeta `dist`).

2. **En el navegador, abrí:** https://vercel.com/new

3. **Hacé login** con email o cuenta de GitHub (gratis).

4. Buscá la opción **"Deploy without Git"** o **"Other"** y elegí **"Upload"**.

5. **Arrastrá la carpeta `dist`**.

6. Vercel te da una URL tipo `https://layevska-web-design.vercel.app`.

---

## OPCIÓN 3 · Vercel CLI (1 sola línea, requiere que abras una terminal)

> Esta es la más profesional. Una vez configurada, deployás con **1 sola palabra**.

### Setup inicial (solo una vez)

1. Abrí PowerShell o Terminal en la carpeta `layevska-landing-v2`
   *(En Windows: shift + click derecho en la carpeta → "Abrir ventana de PowerShell aquí")*

2. Instalá Vercel CLI globalmente:
   ```
   npm install -g vercel
   ```

3. Hacé login (te abre el navegador para autorizar):
   ```
   vercel login
   ```

4. Primer deploy:
   ```
   vercel
   ```
   Te hace 4 preguntas — dale Enter a todas (acepta los defaults).

5. Para que sea producción (URL definitiva):
   ```
   vercel --prod
   ```

### Deploys futuros

Solo una palabra:
```
vercel --prod
```

---

## OPCIÓN 4 · GitHub + Vercel (la más pro, auto-deploy)

Esta es la que usan los estudios profesionales. Cada vez que cambiás un archivo y lo subís a GitHub, Vercel reconstruye y publica solo.

### Pasos

1. Hacé cuenta en https://github.com (gratis).
2. Instalá GitHub Desktop: https://desktop.github.com
3. En GitHub Desktop → File → New Repository → seleccionás la carpeta `layevska-landing-v2`.
4. Push the repository.
5. Entrá a https://vercel.com/new, login con GitHub.
6. Importás el repo `layevska-landing-v2`.
7. Vercel detecta Vite automáticamente. Click **Deploy**.

A partir de ahí: cualquier cambio que hagas y subas a GitHub se publica solo.

---

## Comparativa de las 4 opciones

| Opción | Tiempo | Requiere terminal | Auto-deploy | Recomendado para |
|---|---|---|---|---|
| **Netlify Drop** | 2 min | No | No | Ver online YA |
| **Vercel Drop** | 3 min | No | No | Misma que Netlify |
| **Vercel CLI** | 5 min setup | Sí (1 vez) | No (manual) | Si te animas a la terminal |
| **GitHub + Vercel** | 15 min setup | Mejor con GitHub Desktop | **Sí** | Trabajar a largo plazo |

---

## Dominio propio (cuando estés listo)

Cuando compres `layevska.com` (en GoDaddy, Namecheap, Cloudflare, etc.), en cualquiera de las 4 opciones podés conectarlo:

- **Netlify:** Domain settings → Add custom domain
- **Vercel:** Settings → Domains → Add

Te dan las instrucciones DNS para que cambies en tu registrador. SSL (candado verde) se activa automáticamente en minutos.

---

## ¿Cuál elegir?

**Para verla rápido y compartirla con clientes hoy** → **Netlify Drop** (Opción 1).
**Para trabajar a largo plazo y que se actualice sola** → **GitHub + Vercel** (Opción 4).

---

**Layevska Web Design** · Miah Layevska & Bryan Barrantes · +506 8751-8441 · LayevskaWebDesign@gmail.com
