# Skills para agentes de IA

Esta carpeta guarda el skill **`auditoria-a11y`**: una auditoría guiada de accesibilidad
(WCAG 2.2 AA) por checkpoints que funciona con Claude Code y con GitHub Copilot.

> [!NOTE]
> **Está desactivado a propósito.** Durante el curso queremos que hagáis las auditorías con vuestro
> propio criterio. El skill se presentará en la demo de la última clase y se queda aquí como
> referencia para que lo uséis en vuestros proyectos después del curso.

## Qué hace

1. Te pregunta qué has encontrado tú antes de auditar.
2. Revisa el código **de un solo checkpoint** y devuelve los hallazgos en el formato de la tabla de
   `ACCESSIBILITY.md` (barrera, dónde, criterio WCAG, gravedad).
3. Propone correcciones de una en una, con HTML nativo, y te da el dato para verificarlas
   (por ejemplo, la relación de contraste antes y después).
4. Te indica la prueba manual que tienes que hacer tú.
5. Si se lo pides, documenta el resultado en `ACCESSIBILITY.md`, incluido el apartado «IA vs. criterio».

Incluye `scripts/contrast.mjs`, que calcula la relación de contraste entre dos colores:

```bash
node agents/skills/auditoria-a11y/scripts/contrast.mjs "#999999" "#ffffff"
```

## Cómo activarlo

Las herramientas solo detectan los skills en carpetas concretas. Esta (`agents/`, sin punto) no es
una de ellas, por eso ahora está inactivo. Para activarlo, cópialo a `.claude/skills/`, que leen
tanto Claude Code como GitHub Copilot:

```bash
mkdir -p .claude/skills && cp -r agents/skills/auditoria-a11y .claude/skills/
```

Después, abre una sesión nueva de Claude Code o de Copilot en el proyecto e invócalo:

```
/auditoria-a11y checkpoint 1
/auditoria-a11y checkpoint 6 página de contacto
```

El skill tiene `disable-model-invocation: true`: el agente **no lo usa por su cuenta**, solo cuando tú
lo invocas. Si quieres que se active solo cuando la petición encaje, borra esa línea de `SKILL.md`.

## Usarlo en otro proyecto

Copia la carpeta `auditoria-a11y` en `.claude/skills/` de tu proyecto, o en `~/.claude/skills/` para
tenerlo en todos tus proyectos con Claude Code. Funciona con cualquier web, no solo con La Crónica Diaria.
