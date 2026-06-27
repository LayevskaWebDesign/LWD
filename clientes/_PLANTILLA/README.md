# _PLANTILLA · molde base de cliente

**No edites esta carpeta directamente.** Es el molde que se copia por cada cliente nuevo.

## Para arrancar un cliente
1. **Copiá** toda esta carpeta `_PLANTILLA/` y pegala en `clientes/`.
2. **Renombrala** con el slug del cliente (minúsculas, sin espacios ni tildes): `panaderia-luna`.
3. Poné los logos en `marca/logos/` y las fotos en `marca/fotos/`.
4. Llená [`contexto-cliente.md`](contexto-cliente.md) (o pegá links de redes para que Claude lo complete).
5. Generá las versiones con el [Prompt Maestro](../../Sistema-Landings/02-Prompt-Maestro.md).

## Contenido del molde
- `contexto-cliente.md` — el formulario (fuente única de verdad).
- `marca/` — `logos/`, `fotos/` y `paleta.md`.
- `versiones/` — vacío; acá Claude genera `basic/`, `animation/`, `super-pro/`.

> Guía completa: [Sistema-Landings/00-Guia-Uso-Estudio.md](../../Sistema-Landings/00-Guia-Uso-Estudio.md)
