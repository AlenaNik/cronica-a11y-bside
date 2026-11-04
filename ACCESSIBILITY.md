# ACCESSIBILITY.md — La Crónica Diaria

> [!TIP]
> **Cómo usar este archivo**
>
> 1. **En cada clase**, céntrate en la auditoría y en las correcciones del checkpoint que toque.
>    Apunta aquí lo que encuentres y lo que corrijas en la tabla de ese checkpoint.
> 2. **Al final del bloque** (opcional), completa las secciones finales: limitaciones, cómo informar
>    de barreras y reflexión. Así tendrás un `ACCESSIBILITY.md` real para tu portfolio.
>
> No hace falta rellenarlo todo. Borra lo que no uses y busca `{{` para encontrar los campos pendientes.
> Si quieres ver ejemplos más completos, consulta el proyecto
> [ACCESSIBILITY.md](https://mgifford.github.io/ACCESSIBILITY.md/) de Mike Gifford, en el que se inspira esta plantilla.

## Datos del proyecto

| Campo | Valor |
|---|---|
| Proyecto | La Crónica Diaria (proyecto de prácticas) |
| Autor/a de la auditoría | `{{TU_NOMBRE}}` |
| Objetivo | WCAG 2.2, nivel AA |
| Páginas auditadas | Portada (`#/`), Artículo (`#/articulo/...`), Contacto (`#/contacto`) |
| Herramientas | `{{WAVE, axe, HeadingsMap, VisBug, lector de pantalla, Claude…}}` |
| Última revisión | `{{AAAA-MM-DD}}` |

## Nuestro compromiso

`{{Escribe en 2-3 frases qué significa la accesibilidad para este proyecto. Por ejemplo: «Queremos que
cualquier persona pueda leer las noticias y contactar con la redacción, use teclado, lector de pantalla,
zoom o el dispositivo que use».}}`

---

## Registro de auditoría por checkpoint

En cada tabla, usa una fila por barrera:

- **Gravedad:** Crítica (impide completar una tarea), Alta, Media o Baja.
- **Estado:** Pendiente, Corregida o Descartada (explica por qué).

En el apartado **IA vs. criterio** apunta qué propuso Claude (o Copilot), qué aceptaste y qué tuviste
que corregir o descartar. Es la parte más importante de la entrega.

### Checkpoint 1 · Color y contraste

**Qué revisar**

- Contraste de texto: 4,5:1 para el texto normal y 3:1 para el texto grande. ([1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum))
- Contraste de los elementos no textuales (bordes de los campos, iconos, foco): 3:1. ([1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast))
- Información que se transmite solo con color. ([1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color))

**Herramientas:** [Colour Contrast Checker](https://colourcontrast.cc/), [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/), VisBug y la emulación de visión de Chrome DevTools.

**Prompt de ejemplo:**
> «Evalúa el contraste entre el color de texto `#xxxxxx` y el fondo `#xxxxxx` según WCAG 2.2 AA. Dime la relación de contraste y propón la alternativa más cercana que cumpla, manteniendo el estilo de la marca.»

| # | Barrera | Dónde | Criterio WCAG | Gravedad | Corrección | Estado |
|---|---|---|---|---|---|---|
| 1.1 | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` |

**IA vs. criterio:** `{{}}`

### Checkpoint 2 · Encabezados y landmarks

**Qué revisar**

- Un `h1` que describa la página y una jerarquía sin saltos. ([1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships), [2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels))
- Landmarks: `header`, `nav`, `main`, `aside` y `footer`.
- Enlace para saltar al contenido. ([2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks))
- `<title>` de cada página e idioma (`lang`). ([2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled), [3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page))

**Herramientas:** HeadingsMap, el panel de landmarks de WAVE y el rotor de VoiceOver o la lista de elementos de NVDA.

**Prompt de ejemplo:**
> «Esta es la lista de encabezados de mi página: [pega la salida de HeadingsMap]. ¿Es una jerarquía lógica? Propón una estructura de encabezados y landmarks y explica cada decisión.»

| # | Barrera | Dónde | Criterio WCAG | Gravedad | Corrección | Estado |
|---|---|---|---|---|---|---|
| 2.1 | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` |

**Jerarquía de encabezados (antes → después):**

```
{{pega aquí el esquema de encabezados}}
```

**IA vs. criterio:** `{{}}`

### Checkpoint 3 · Contenido

**Qué revisar**

- Lenguaje claro: frases cortas, sin jerga y con la idea principal primero.
- Instrucciones que dependen de la posición, la forma o el color («a la derecha», «el botón verde»). ([1.3.3](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics))
- Texto truncado que oculta información importante.
- Enlaces que se entienden por sí mismos (nada de «Leer más» o «aquí» sin contexto). ([2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context))

**Prompt de ejemplo:**
> «Reescribe este párrafo con lenguaje claro para un público general, sin perder información: [texto]. Explícame qué has cambiado y por qué.»

| # | Barrera | Dónde | Criterio WCAG | Gravedad | Corrección | Estado |
|---|---|---|---|---|---|---|
| 3.1 | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` |

**Texto original → texto reescrito:** `{{}}`

**IA vs. criterio:** `{{}}`

### Checkpoint 4 · Imágenes y gráficos

**Qué revisar**

- Todas las imágenes tienen `alt`. ([1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content))
- Las imágenes informativas describen lo que aportan, no solo lo que se ve.
- Las imágenes decorativas tienen `alt=""`.
- Los gráficos y mapas tienen los datos también en texto.

**Herramientas:** WAVE, la extensión Web Developer (Images → Display Alt Attributes) y un lector de pantalla.

**Prompt de ejemplo:**
> «Esta imagen aparece junto a la noticia "[titular]". Propón un borrador de texto alternativo y dime si crees que es decorativa o informativa y por qué.»

> [!IMPORTANT]
> Claude solo genera **borradores**. Tú decides qué comunica la imagen en su contexto.

| # | Barrera | Dónde | Criterio WCAG | Gravedad | Corrección | Estado |
|---|---|---|---|---|---|---|
| 4.1 | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` |

**IA vs. criterio:** `{{}}`

### Checkpoint 5 · Interactividad

**Qué revisar**

- Foco visible en todos los elementos interactivos. ([2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible))
- Un orden de foco lógico, que siga el orden visual. ([2.4.3](https://www.w3.org/WAI/WCAG22/Understanding/focus-order))
- Botones y enlaces de verdad (`<button>`, `<a href>`), con un nombre accesible. ([4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value))
- El contenido que se mueve se puede pausar. ([2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide))

**Herramientas:** la tecla Tab, taba11y y axe.

**Prompt de ejemplo:**
> «Este componente usa un `div` con `onClick` como botón: [código]. ¿Qué problemas de accesibilidad tiene? Propón la versión con HTML nativo.»

| # | Barrera | Dónde | Criterio WCAG | Gravedad | Corrección | Estado |
|---|---|---|---|---|---|---|
| 5.1 | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` |

**IA vs. criterio:** `{{}}`

### Checkpoint 6 · Formularios

**Qué revisar**

- Cada campo tiene una etiqueta visible y asociada (`label` + `for`/`id`). ([1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships), [3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions))
- Los campos obligatorios y los formatos se explican antes de rellenar.
- Errores en texto, junto al campo y con una indicación de cómo corregirlos. ([3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification), [3.3.3](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion))
- Grupos de opciones con `fieldset` y `legend`. `autocomplete` en los datos personales. ([1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose))
- Sin límites de tiempo, o que se puedan ampliar. ([2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable))

**Prompt de ejemplo:**
> «Revisa este formulario como si fueras una persona que usa lector de pantalla: [código]. ¿Qué escucharía en cada campo y al enviarlo con errores?»

| # | Barrera | Dónde | Criterio WCAG | Gravedad | Corrección | Estado |
|---|---|---|---|---|---|---|
| 6.1 | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` |

**IA vs. criterio:** `{{}}`

### Checkpoints 7 y 8 · Layout, reflujo y navegación con teclado

**Qué revisar**

- Se puede hacer zoom. Al 200 % el texto sigue siendo legible. ([1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text))
- A 320 px de ancho no hay scroll horizontal. ([1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow))
- Objetivos táctiles de al menos 24 × 24 px. ([2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum))
- Todo se puede usar solo con el teclado y sin trampas. ([2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard), [2.1.2](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap))
- Los menús, modales y pop-ups se abren y se cierran con el teclado (Esc), y el foco vuelve a su sitio.
- Nada fijo tapa el elemento que tiene el foco. ([2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum))

**Prueba manual:** aparta el ratón e intenta leer una noticia y enviar el formulario de contacto solo con Tab, Mayús+Tab, Intro, Espacio, flechas y Esc. Repite con el navegador a 320 px de ancho y con zoom al 200 %.

| # | Barrera | Dónde | Criterio WCAG | Gravedad | Corrección | Estado |
|---|---|---|---|---|---|---|
| 7.1 | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` | `{{}}` |

**IA vs. criterio:** `{{}}`

---

## Al final del bloque (opcional)

### Limitaciones conocidas

Barreras que quedan sin resolver, a quién afectan y si hay alguna alternativa.

| Barrera | A quién afecta | Alternativa | Prioridad |
|---|---|---|---|
| `{{}}` | `{{}}` | `{{}}` | `{{}}` |

> Si no hay limitaciones documentadas, escribe: «No hay limitaciones documentadas. Eso no significa
> que no existan: si encuentras una barrera, avísanos».

### Cómo informar de una barrera

`{{Por ejemplo: abre un issue en este repositorio describiendo qué intentabas hacer, en qué página,
qué ocurrió y qué navegador o tecnología de apoyo usabas. No hace falta que nos cuentes si tienes
una discapacidad.}}`

### Cómo se ha probado

| Navegador | Tecnología de apoyo | Qué se probó | Fecha |
|---|---|---|---|
| `{{Chrome 1xx}}` | `{{NVDA 2025.x / VoiceOver / ninguna}}` | `{{Leer una noticia, enviar el formulario…}}` | `{{AAAA-MM-DD}}` |

> No afirmes que la web «cumple WCAG» por haber pasado una herramienta automática. Indica qué has
> probado tú y qué no.

### Reflexión: IA y criterio humano

- **¿Qué resolvió bien la IA?** `{{}}`
- **¿Qué tuviste que corregir o descartar, y por qué?** `{{}}`
- **¿Qué solo pudiste comprobar tú (con teclado, lector de pantalla o probando con personas)?** `{{}}`
- **¿Qué harías distinto desde el primer boceto (shift left)?** `{{}}`

### Historial de cambios

| Fecha | Cambio | Checkpoint |
|---|---|---|
| `{{AAAA-MM-DD}}` | `{{}}` | `{{}}` |
