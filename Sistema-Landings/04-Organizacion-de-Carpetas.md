# 04 · Organización de carpetas y convenciones

## Árbol general

```
Layevska web design/
├─ Sistema-Landings/          ← documentación, lógica de negocio, prompt, mejoras (este sistema)
│  ├─ README.md
│  ├─ 00-Guia-Uso-Estudio.md
│  ├─ 01-Modelo-de-Negocio-y-Planes.md
│  ├─ 02-Prompt-Maestro.md
│  ├─ 03-Flujo-Generacion-a-Deploy.md
│  ├─ 04-Organizacion-de-Carpetas.md   ← este archivo
│  └─ mejoras/                ← mejoras de alto valor, opcionales y AISLADAS
│     ├─ 1-analitica/
│     ├─ 2-qa-automatizado/
│     └─ 3-ficha-entrega/
│
└─ clientes/                  ← el trabajo real por cliente
   ├─ _PLANTILLA/             ← molde base; se COPIA por cada cliente nuevo
   │  ├─ contexto-cliente.md  ← el formulario (fuente única de verdad)
   │  ├─ marca/               ← logos, fotos, paleta que pasa el cliente
   │  │  ├─ logos/
   │  │  ├─ fotos/
   │  │  └─ paleta.md
   │  └─ versiones/           ← acá se generan los proyectos (vacío al inicio)
   │
   └─ panaderia-luna/         ← ejemplo de cliente real
      ├─ contexto-cliente.md
      ├─ marca/ …
      ├─ comparar.bat         ← levanta todas las versiones generadas a la vez
      └─ versiones/
         ├─ basic/            ← proyecto Vite autocontenido → su propio dist  (:5180)
         ├─ animation/        ← proyecto Vite autocontenido → su propio dist  (:5181)
         └─ super-pro/        ← proyecto Vite autocontenido → su propio dist  (:5182)
```

## Convenciones

### Nombres (slugs)
Carpeta de cliente en **minúsculas, sin espacios ni tildes**: `panaderia-luna`, `cafe-altura`.
Sitios en Netlify: `cliente-plan` → `panaderia-luna-animation.netlify.app`.

### Puertos (localhost)
| Plan | Puerto (cliente 1) | Cliente 2 simultáneo |
|---|---|---|
| basic | 5180 | 5190 |
| animation | 5181 | 5191 |
| super-pro | 5182 | 5192 |

Se fijan con `vite --strictPort` para que fallen ruidoso si el puerto está ocupado (en vez de
saltar a otro y confundir). Si comparás dos clientes a la vez, el segundo usa el bloque 519x.

### Gestor de paquetes: pnpm
Todas las versiones usan **pnpm**. Guarda las librerías pesadas una sola vez en disco (store
global) aunque haya muchos clientes × 3 versiones, **sin acoplar** los proyectos: cada versión
sigue siendo autocontenida y desplegable por separado.

### Versiones autocontenidas
Cada `versiones/<plan>/` es un proyecto Vite completo (su `package.json`, su `dist/`). Ventaja:
arrastrás ese `dist/` a Netlify por separado y cada plan puede ir a su propia URL/dominio.
Decisión deliberada: **no** se comparte una librería de componentes entre versiones (se mantienen
independientes; si más adelante el volumen lo pide, se evalúa un template clonable).

### Qué se versiona en Git y qué no
- **Se versiona:** el código de cada versión, el `contexto-cliente.md`, los assets de `marca/`.
- **NO se versiona** (ya cubierto por el `.gitignore` raíz): `node_modules/`, `dist/`, `build/`,
  `.vite/`, `.env*`. No hay que tocar el `.gitignore`.

### Diferencia entre planes a nivel de dependencias
| Plan | Dependencias extra |
|---|---|
| basic | — (solo react, react-dom, lucide-react) |
| animation | + framer-motion |
| super-pro | + three, @react-three/fiber, @react-three/drei, @react-three/postprocessing, gsap, split-type |

Así el Basic queda liviano de verdad (sin cargar lo que no usa) y mantiene PageSpeed alto sin esfuerzo.
