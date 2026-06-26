# Cómo ver la landing React en tu navegador

Guía paso a paso. Tarda 5-10 minutos la primera vez. Después es un solo doble-click.

---

## Paso 1 — Instalar Node.js (solo la primera vez)

Node.js es el motor que necesita el proyecto React para funcionar.

1. Abrí tu navegador y entrá a: **https://nodejs.org**
2. Vas a ver dos botones grandes. Hacé click en el **botón verde de la izquierda** que dice **"LTS"** (es la versión estable recomendada).
3. Se va a descargar un archivo llamado algo como `node-v22.X.X-x64.msi`.
4. Hacé doble click en ese archivo descargado.
5. Aparece un instalador. Apretá **"Next"** en todas las pantallas, aceptá los términos, y al final **"Install"**. Si te pide permiso de administrador, dale **"Sí"**.
6. Cuando termine, apretá **"Finish"**.

### Verificar que se instaló bien

1. Apretá la tecla **Windows** + **R** al mismo tiempo. Se abre una ventanita "Ejecutar".
2. Escribí `cmd` y dale Enter. Se abre una ventana negra (la terminal).
3. Escribí: `node --version` y dale Enter.
4. Si te muestra algo como `v22.X.X`, **¡Node está instalado correctamente!** 🎉
5. Cerrá la ventana negra.

---

## Paso 2 — Primera vez: instalar las dependencias del proyecto

Esto descarga las librerías que el proyecto necesita (React, Framer Motion, etc.). Solo se hace **una vez**.

**Opción fácil:** Doble-click al archivo `INSTALAR.bat` que está en esta misma carpeta.

**Opción manual:** Si la opción fácil falla, abrí la terminal en esta carpeta:
1. Abrí el Explorador de Windows en `C:\Users\herre\Desktop\Layevska web design\layevska-react`.
2. En la barra de direcciones (arriba), borrá lo que dice y escribí `cmd` + Enter. Se abre la terminal directamente en esta carpeta.
3. Escribí: `npm install` y dale Enter.
4. Esperá 2-5 minutos. Vas a ver mucho texto pasando. Cuando termine, vas a tener una nueva carpeta llamada `node_modules` (no la toques).

---

## Paso 3 — Ver la landing en el navegador

**Opción fácil:** Doble-click al archivo `INICIAR.bat`.

**Opción manual:**
1. Misma terminal del paso 2 (o repetí el truco de la barra de direcciones).
2. Escribí: `npm run dev` y dale Enter.
3. Después de unos segundos vas a ver algo como:
   ```
   VITE v5.4.x  ready in 432 ms
   ➜  Local:   http://localhost:5173/
   ```
4. Abrí tu navegador y entrá a: **http://localhost:5173**
5. ¡Listo! Vas a ver la landing.

### Para detener el servidor

En la terminal, apretá `Ctrl + C` y después `S` + Enter cuando te pregunte.

---

## Paso 4 — Próximas veces (más fácil)

Después de la primera instalación, solo necesitás:

- Doble click a `INICIAR.bat` para arrancar el servidor.
- Abrí `http://localhost:5173` en el navegador.
- Cuando termines, cerrá la ventana negra o apretá `Ctrl + C`.

---

## Problemas comunes

### "node no se reconoce como comando"
Reiniciá la computadora después de instalar Node.js. Windows necesita refrescar el PATH del sistema.

### "npm install" da error
- Verificá que tengas conexión a internet.
- Si dice algo de "EACCES" o permisos: cerrá la terminal y abrila como administrador (click derecho → "Ejecutar como administrador").

### El navegador no abre solo
Entrá manualmente a http://localhost:5173 después de correr `npm run dev`.

### "Port 5173 already in use"
Otro proceso está usando ese puerto. Cerrá la terminal anterior con `Ctrl + C` o cambialo en `vite.config.ts`.

---

## ¿Cuándo usar React vs el HTML?

- **Para mostrarle la landing a alguien rápido**: usá el HTML (`03-Layevska-Interactiva.html`). Es doble-click, sin instalación.
- **Para desarrollarla y editarla profesionalmente**: usá el React (esta carpeta). Más mantenible a largo plazo.
- **Para producción en internet**: cualquiera de los dos funciona. Si vas con React, hacé `npm run build` y subí la carpeta `dist/` a AWS S3 o Cloudflare Pages.

---

## ¿Algo falla?

Mandame screenshot del error y te ayudo a resolverlo.
