# Manual: instalar skills globalmente en este equipo

> **Para Claude.** Runbook para instalar, verificar y mantener skills en la carpeta global
> `~/.claude/skills/` de este dispositivo (Windows, usuario `herre`). Seguí estos pasos al pie de
> la letra cuando el usuario pida "instalar", "activar" o "agregar" una skill de forma global.

---

## 0. Conceptos base (leer una vez)

- **Skill global** = una carpeta dentro de `~/.claude/skills/<nombre>/`. Todo lo que esté ahí se
  **carga automáticamente al iniciar cada sesión** de Claude Code. No requiere ningún comando de
  inicialización.
- **Ruta exacta en este equipo:**
  - Carpeta global activa: `C:\Users\herre\.claude\skills\` (en bash: `~/.claude/skills/`).
  - Archivo fuente (bundle): `C:\Users\herre\Desktop\Layevska web design\skills-bundle\`
    (**99 skills** archivadas; está en `.gitignore`, **no se versiona**).
- **Anatomía de una skill** (una carpeta por skill):
  ```
  <nombre-skill>/
    SKILL.md            # OBLIGATORIO. Frontmatter (name, description) + instrucciones.
    references/         # opcional. Archivos .md que el SKILL.md manda a leer "cuando haga falta".
    scripts/            # opcional. Scripts auxiliares.
    *.md                # opcional. Otros documentos de apoyo.
  ```
- **Regla de oro:** el `name:` del frontmatter de `SKILL.md` **debe coincidir** con el nombre de la
  carpeta. Y hay que copiar la carpeta **completa** (incluido `references/`), no solo el `SKILL.md`,
  o la skill quedará rota al intentar leer archivos que no existen.

### Frontmatter mínimo de un `SKILL.md`
```markdown
---
name: nombre-en-kebab-case
description: Qué hace y CUÁNDO usarla. Esta línea es la que Claude lee para decidir si activarla — sé específico con los disparadores.
---

# Título

Instrucciones de la skill...
```

---

## 1. Decidir el origen de la skill

Hay tres orígenes posibles. Identificá cuál aplica antes de copiar:

| Origen | Cuándo | Dónde está |
|---|---|---|
| **A. Bundle local** | La skill ya está entre las 99 archivadas | `skills-bundle/<nombre>/` |
| **B. Plugin** | Es una skill de un plugin (p. ej. `anthropic-skills:*`) | `C:\Users\herre\AppData\Roaming\Claude\local-agent-mode-sessions\skills-plugin\...\skills\<nombre>\` |
| **C. Desde cero** | No existe en ningún lado; hay que escribirla | — |

---

## 2A. Instalar desde el bundle local (caso más común)

1. **Confirmá que existe en el bundle** y mirá su contenido (puede traer `references/`, `scripts/`):
   ```bash
   ls -la "skills-bundle/<nombre>/"
   ```
2. **Copiá la carpeta completa** al destino global:
   ```bash
   cp -r "skills-bundle/<nombre>" ~/.claude/skills/
   ```
   En PowerShell:
   ```powershell
   Copy-Item -Recurse "skills-bundle\<nombre>" "$env:USERPROFILE\.claude\skills\"
   ```
3. Pasá a **§3 Verificación**.

> Para instalar **varias a la vez**, repetí el `cp -r` por cada nombre. No copies todo el bundle:
> el objetivo es una carpeta global **curada**, no las 99.

---

## 2B. Instalar desde un plugin

1. **Ubicá la carpeta de la skill** dentro del plugin (la ruta tiene IDs que cambian):
   ```powershell
   Get-ChildItem -Path "$env:APPDATA\Claude" -Recurse -Filter "SKILL.md" -ErrorAction SilentlyContinue |
     Where-Object { $_.FullName -like "*<nombre>*" } | Select-Object -ExpandProperty FullName
   ```
2. **Revisá el `SKILL.md`**: fijate qué archivos referencia (sección "Archivos de referencia" o menciones
   a `references/...`). **Verificá que esos archivos existan** junto al `SKILL.md`:
   ```bash
   ls -R "<carpeta-del-plugin>/<nombre>/"
   ```
3. **Si los `references/` existen** → copiá la carpeta completa a `~/.claude/skills/`.
   **Si faltan** (caso conocido: la skill del plugin trae solo `SKILL.md`) → hay que **reconstruirlos**:
   - Creá `~/.claude/skills/<nombre>/SKILL.md` con el contenido original.
   - Creá `~/.claude/skills/<nombre>/references/` y escribí cada archivo que el `SKILL.md` lista,
     guiándote por la descripción que el propio `SKILL.md` da de cada uno y por las convenciones del
     proyecto. (Así se hizo con `landing-page-builder` — ver memoria del proyecto.)
4. Pasá a **§3 Verificación**.

---

## 2C. Crear una skill desde cero

1. Si la tarea lo amerita, usá la skill `skill-creator` (`anthropic-skills:skill-creator`) para
   andamiar y validar la nueva skill.
2. Estructura mínima:
   ```bash
   mkdir -p ~/.claude/skills/<nombre>/references
   ```
   Creá `SKILL.md` con el frontmatter de §0. Mové la sustancia larga a `references/*.md` y referenciála
   desde el `SKILL.md` ("lee `references/x.md` cuando…") para mantener el `SKILL.md` liviano.
3. Pasá a **§3 Verificación**.

---

## 3. Verificación (obligatoria)

1. **Estructura correcta** — existe el `SKILL.md` y todos los `references/` que menciona:
   ```bash
   ls -R ~/.claude/skills/<nombre>/
   ```
2. **Frontmatter válido** — `name:` coincide con la carpeta y hay `description:`:
   ```bash
   sed -n '1,5p' ~/.claude/skills/<nombre>/SKILL.md
   ```
3. **Sin referencias colgantes** — ningún `references/x.md` mencionado en el `SKILL.md` debe faltar.
4. **Activación** — las skills se cargan **al iniciar sesión**. En una sesión nueva, la skill debe
   aparecer en la lista de skills disponibles y poder invocarse con `/<nombre>`. Si ya estás en una
   sesión, avisá al usuario que reinicie la sesión (o abra una nueva) para que se cargue.

---

## 4. Mantenimiento

- **Listar lo instalado:**
  ```bash
  ls -d ~/.claude/skills/*/
  ```
- **Actualizar una skill** desde el bundle (sobrescribe):
  ```bash
  cp -r "skills-bundle/<nombre>" ~/.claude/skills/
  ```
  ⚠️ Si la skill tiene `references/` **reconstruidos a mano** (no venían en el origen), actualizar
  desde el plugin/bundle puede **borrarlos**. Conservalos o regeneralos.
- **Quitar una skill:**
  ```bash
  rm -rf ~/.claude/skills/<nombre>
  ```
- **Añadir más desde el bundle:** las 99 están en `skills-bundle/`; copiá a `~/.claude/skills/<nombre>/`
  solo las que vayas a usar.

---

## 5. Errores frecuentes (checklist anti-fallos)

- [ ] Copiaste la carpeta **completa**, no solo el `SKILL.md` (perdés los `references/`).
- [ ] El `name:` del frontmatter **coincide** con el nombre de la carpeta.
- [ ] No quedó ningún `references/x.md` mencionado pero inexistente.
- [ ] La copiaste a `~/.claude/skills/` (global), no a `.claude/skills/` del proyecto, salvo que se
      quiera solo para este repo.
- [ ] Avisaste que hace falta **sesión nueva** para que cargue.
- [ ] No versionaste `skills-bundle/` (está en `.gitignore` a propósito).

---

## Referencia rápida (TL;DR)

```bash
# Desde el bundle local:
cp -r "skills-bundle/<nombre>" ~/.claude/skills/
ls -R ~/.claude/skills/<nombre>/        # verificar estructura + references
# -> nueva sesión -> /<nombre> disponible
```
