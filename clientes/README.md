# Clientes

Acá vive el **trabajo real por cliente**. Cada cliente es una carpeta propia que se crea
**copiando** [`_PLANTILLA/`](_PLANTILLA/) y renombrándola con el nombre del cliente en *slug*
(minúsculas, sin espacios ni tildes): `panaderia-luna/`, `cafe-altura/`.

## Estructura de un cliente
```
<cliente>/
├─ contexto-cliente.md   ← el formulario: fuente única de verdad (lo leen las 3 versiones)
├─ marca/                ← logos, fotos y paleta que pasa el cliente
└─ versiones/            ← acá Claude genera basic/ animation/ super-pro/ (las que pidas)
   └─ comparar.bat       ← (a nivel del cliente) levanta todas las versiones a la vez
```

## Flujo rápido
1. Copiá `_PLANTILLA/` → `<cliente>/`.
2. Cargá la marca y llená `contexto-cliente.md`.
3. Generá con el [Prompt Maestro](../Sistema-Landings/02-Prompt-Maestro.md).
4. Compará en localhost, ajustá y enviá. Detalle en la
   [Guía de uso](../Sistema-Landings/00-Guia-Uso-Estudio.md).

> `node_modules/` y `dist/` de cada versión **no se versionan** (ya cubierto por el `.gitignore` raíz).
