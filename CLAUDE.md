# Layevska Web Design

Estudio costarricense de **landing pages premium** sobre arquitectura serverless (AWS).
Este repositorio reúne tanto los entregables del estudio (propuestas, libro de marca,
contratos, correos a prospectos, mockups) como las implementaciones de las landings.

## Estructura del proyecto

- `layevska-landing-v2/` — App **React + Vite + TypeScript** (versión actual de la landing).
- `layevska-react/` — App **React + Vite + TypeScript** (variante / iteración previa).
- `mockups-v2/` — Mockups visuales.
- `Correos-Prospectos/` — Plantillas de correos de prospección.
- `*.md`, `*.pdf` — Documentación del estudio: concepto creativo, dirección de arte,
  libro de marca, propuestas, contratos.
- `index.html`, `404.html`, `manifest.json`, `robots.txt`, `sitemap.xml`, `sw.js` — Activos de sitio.

## Convenciones

- Idioma del producto y la documentación: **español (es-CR)**.
- Apps React: TypeScript, componentes funcionales, estilos en CSS por componente/módulo.
- Antes de subir cambios al remoto, confirma con el equipo (rama `main` es producción).
- `skills-bundle/` está en `.gitignore`: es una herramienta local, **no se versiona**.

## Uso de skills (`skills-bundle/`)

Este proyecto incluye un bundle local de ~99 skills en `skills-bundle/`. Cada skill vive en
`skills-bundle/<nombre>/SKILL.md` con su `name` y `description`.

**Regla general:** antes de empezar una tarea, evalúa si alguna skill del bundle encaja y
**úsala cuando sea prudente** — es decir, cuando la tarea coincide claramente con el propósito
de la skill y aplicarla mejora la calidad o reduce el riesgo. No fuerces el uso de una skill
si la tarea es trivial o no aplica. Ante la duda, consulta primero el `SKILL.md` correspondiente.

Skills más relevantes para este proyecto, por categoría:

### Diseño y frontend (lo más usado aquí)
- `frontend-design` — dirección visual distintiva al construir o rediseñar UI.
- `design-taste-frontend`, `emil-design-eng` — criterio estético y calidad de detalle.
- `web-design-guidelines` — guías de diseño web.
- `vercel-react-best-practices` — buenas prácticas React/Vercel.

### Planificación y flujo de trabajo
- `ask-questions-if-underspecified` — pedir aclaraciones cuando el encargo es ambiguo.
- `brainstorming` — explorar opciones antes de implementar.
- `writing-plans` / `executing-plans` — planear e implementar cambios grandes.
- `subagent-driven-development`, `dispatching-parallel-agents` — trabajo en paralelo.

### Calidad, pruebas y debugging
- `systematic-debugging` — depuración metódica de bugs.
- `test-driven-development`, `property-based-testing` — pruebas.
- `webapp-testing` — probar la app web en navegador.
- `verification-before-completion` — verificar que un cambio realmente funciona antes de cerrar.

### Revisión de código y git
- `requesting-code-review`, `receiving-code-review`, `second-opinion`, `differential-review`.
- `git-cleanup`, `using-git-worktrees`, `finishing-a-development-branch`, `gh-cli`.

### Seguridad (sitios de clientes)
- `insecure-defaults`, `semgrep`, `codeql` — detección de vulnerabilidades.
- `supply-chain-risk-auditor`, `agentic-actions-auditor` — auditoría de dependencias y acciones.

> Para descubrir la skill adecuada, revisa el `description` en `skills-bundle/<nombre>/SKILL.md`.
> Hay más skills de las listadas aquí (fuzzing, contratos blockchain, etc.); úsalas solo si
> el contexto lo amerita.
