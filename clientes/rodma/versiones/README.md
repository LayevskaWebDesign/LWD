# versiones/ — Rodma

Acá **Claude genera** los proyectos, uno por plan que pidas:

```
versiones/
├─ basic/        ← React+Vite+TS autocontenido · puerto 5180
├─ animation/    ← React+Vite+TS autocontenido · puerto 5181
└─ super-pro/    ← React+Vite+TS autocontenido · puerto 5182
```

- **No los crees a mano**: salen del [Prompt Maestro](../../../Sistema-Landings/02-Prompt-Maestro.md).
- Cada versión es independiente y compila a su propio `dist/` (eso es lo que se sube a Netlify).
- `node_modules/` y `dist/` no se versionan (ya cubierto por el `.gitignore` raíz).
- Para verlas todas a la vez, usá el `comparar.bat` (se genera a nivel del cliente al crear las versiones).
