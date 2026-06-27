# 00 · Guía de uso para el estudio (nosotros)

Manual práctico para producir una landing nueva de principio a fin. Si seguís estos
pasos en orden, no te perdés.

---

## Requisitos (se instalan UNA sola vez)

1. **Node.js** (LTS) — https://nodejs.org
2. **pnpm** — abrí PowerShell y corré: `npm install -g pnpm`
3. **Claude Code** — ya lo tenés.
4. **Cuenta Netlify** (gratis) — https://netlify.com (para publicar; ver [03](03-Flujo-Generacion-a-Deploy.md)).

> ¿Por qué pnpm y no npm? Guarda las librerías pesadas (three.js, etc.) **una sola vez**
> en disco aunque tengas muchos clientes × 3 versiones. Mismo flujo de doble-click, sin cambios.

---

## Hacer una landing nueva — paso a paso

### 1. Crear la carpeta del cliente
Copiá toda la carpeta [`clientes/_PLANTILLA/`](../clientes/_PLANTILLA/) y renombrala con el
nombre del cliente en **minúsculas, sin espacios ni tildes** (un *slug*):
`clientes/panaderia-luna/`

### 2. Cargar la marca
Meté los logos en `marca/logos/` y las fotos en `marca/fotos/`. Si el cliente no te pasó
nada todavía, no importa: seguís igual y los agregás después.

### 3. Llenar el contexto
Abrí `clientes/<cliente>/contexto-cliente.md` y completá lo que sepas.
- Lo que no sepas, **dejalo en blanco** y pegá los **links de redes** (Instagram, Facebook,
  Google Business): Claude intentará completarlo desde ahí.
- Regla: **nunca se inventan datos.** Lo que no sea real queda como *pendiente*.

### 4. Generar con Claude
Abrí Claude Code en la carpeta del proyecto y pegá el **Prompt Maestro**
([02-Prompt-Maestro.md](02-Prompt-Maestro.md)) con el **Bloque 0** lleno. Ejemplo de lo que
le decís:

```
CLIENTE: panaderia-luna
VERSIONES A GENERAR: basic, animation, super-pro
```

Podés pedir **una, dos o las tres**. Mismo cliente, distintos planes.

Claude va a:
1. Revisar el contexto y **preguntarte** si falta algo crítico (no genera nada hasta confirmar).
2. Crear las versiones pedidas dentro de `versiones/`.
3. Instalar dependencias con pnpm y levantarlas en **localhost**.

### 5. Comparar las versiones
Doble-click en `clientes/<cliente>/comparar.bat`. Se abren las versiones en sus puertos:
- Basic → http://localhost:5180
- Animation → http://localhost:5181
- Super Pro → http://localhost:5182

Abrilas en pestañas y compará lado a lado.

### 6. Ajustar
Pedile a Claude los cambios que quieras ("subí más el contraste del hero", "cambiá el
copy de la sección de servicios", etc.).

### 7. (Opcional) Control de calidad
Corré las **mejoras** aisladas si querés screenshots y medición:
- QA automatizado → [`mejoras/2-qa-automatizado/`](mejoras/2-qa-automatizado/)

### 8. Enviar al cliente
Llená la **Ficha de Entrega** ([`mejoras/3-ficha-entrega/`](mejoras/3-ficha-entrega/)) con los
links, los precios y la recomendación, y mandásela. Esa ficha está pensada para **sugerir el
upsell** (ver [01](01-Modelo-de-Negocio-y-Planes.md)).

### 9. Publicar y conectar dominio
Cuando el cliente elija un plan, seguí [03-Flujo-Generacion-a-Deploy.md](03-Flujo-Generacion-a-Deploy.md):
compilar esa versión → subir a Netlify → conectar el dominio.

---

## Problemas comunes

| Síntoma | Solución |
|---|---|
| "pnpm no se reconoce" | Te faltó instalarlo: `npm install -g pnpm` y reabrí la terminal. |
| Un puerto ya está ocupado | Cerrá la ventana vieja de esa versión, o reiniciá la PC. Los puertos son 5180/5181/5182. |
| La versión no abre en el navegador | Esperá a que termine de instalar/compilar; mirá la ventana de esa versión por errores. |
| Quiero comparar dos clientes a la vez | El segundo cliente usa puertos 5190/5191/5192 (ver [04](04-Organizacion-de-Carpetas.md)). |

---
*Dudas técnicas → revisá [03](03-Flujo-Generacion-a-Deploy.md) y [04](04-Organizacion-de-Carpetas.md).*
