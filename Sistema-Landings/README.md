# Sistema de Landings · Layevska Web Design

Este directorio documenta **cómo el estudio produce landings por planes**, desde el
contexto del cliente hasta el deploy con dominio. No contiene código de clientes
(eso vive en [`../clientes/`](../clientes/)); contiene la lógica de negocio, el prompt
y las guías de operación.

## Mapa de archivos

| Archivo | Qué es |
|---|---|
| [00-Guia-Uso-Estudio.md](00-Guia-Uso-Estudio.md) | **Empezá acá.** Guía paso a paso para nosotros (Miah & Bryan): hacer una landing nueva de principio a fin. |
| [01-Modelo-de-Negocio-y-Planes.md](01-Modelo-de-Negocio-y-Planes.md) | Los 3 planes (Basic / Animation / Super Pro), precios, qué incluye cada uno, la jerarquía de upsell y el retainer. |
| [02-Prompt-Maestro.md](02-Prompt-Maestro.md) | El prompt que se le pega a Claude Code para generar las versiones. |
| [03-Flujo-Generacion-a-Deploy.md](03-Flujo-Generacion-a-Deploy.md) | El camino técnico: generar → ver en localhost → compilar → subir a Netlify → conectar dominio. |
| [04-Organizacion-de-Carpetas.md](04-Organizacion-de-Carpetas.md) | Estructura de carpetas y convenciones (puertos, nombres, pnpm). |
| [mejoras/](mejoras/) | Mejoras de alto valor **opcionales y aisladas**: analítica, QA automatizado, ficha de entrega. |

## Carpeta hermana

- [`../clientes/`](../clientes/) — el trabajo real por cliente. Cada cliente se clona
  desde [`../clientes/_PLANTILLA/`](../clientes/_PLANTILLA/).

## Reglas de oro

1. El **contexto del cliente** (`clientes/<cliente>/contexto-cliente.md`) es la única
   fuente de verdad; las 3 versiones leen de ahí.
2. **Nunca se inventan** testimonios ni datos. Lo que no es real, se deja pendiente.
3. Las 3 versiones apuntan a **PageSpeed ≥ 90** y deben verse **hermosas** (Basic incluido,
   exprimiendo CSS al máximo).
4. Stack único: **React + Vite + TypeScript** con **pnpm**. El Basic no carga librerías de animación.
5. Cada versión es **autocontenida** (su propio `dist/`) para arrastrarla a Netlify por separado.

---
*Layevska Web Design · Miah Layevska & Bryan Barrantes · +506 8751-8441 · LayevskaWebDesign@gmail.com*
