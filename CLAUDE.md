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

## Uso de skills

Hay **28 skills curadas** instaladas en `~/.claude/skills/` (carpeta personal). Se **cargan
automáticamente al iniciar cada sesión** de Claude Code — no requieren ningún comando de
inicialización. El bundle completo (~99) queda archivado en `skills-bundle/` (ignorado por git)
como fuente; para añadir más, cópialas desde ahí a `~/.claude/skills/<nombre>/`.

**Cómo invocarlas:**
- Automático: Claude llama la skill vía la herramienta Skill cuando la tarea encaja.
- Manual: el usuario escribe `/<nombre-de-skill>`.

**Regla general:** antes de empezar una tarea, evalúa si alguna skill encaja y **úsala cuando
sea prudente** — es decir, cuando la tarea coincide claramente con el propósito de la skill y
aplicarla mejora la calidad o reduce el riesgo. No fuerces el uso de una skill si la tarea es
trivial o no aplica. Ante la duda, consulta primero su `description`.

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

> Las listadas arriba son las que están instaladas y activas en `~/.claude/skills/`.
> En `skills-bundle/` hay más (fuzzing, contratos blockchain, etc.) que NO están activas;
> si alguna hace falta, cópiala a `~/.claude/skills/<nombre>/` y estará disponible en la
> siguiente sesión.
