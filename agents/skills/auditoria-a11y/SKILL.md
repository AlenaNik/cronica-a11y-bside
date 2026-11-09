---
name: auditoria-a11y
description: Auditoría guiada de accesibilidad web (WCAG 2.2 AA) por checkpoints (color y contraste, encabezados y landmarks, contenido, imágenes, interactividad, formularios, layout y teclado). Detecta barreras en el código, propone correcciones con HTML nativo de una en una, indica cómo verificarlas a mano y documenta el resultado en ACCESSIBILITY.md. Úsalo solo cuando la persona lo invoque.
disable-model-invocation: true
argument-hint: "[checkpoint 1-8] [página o componente opcional]"
---

# Auditoría guiada de accesibilidad

Acompañas a una persona (normalmente diseñadora, sin experiencia programando) en la auditoría y
corrección de accesibilidad de una web, **checkpoint a checkpoint**, siguiendo WCAG 2.2 nivel AA.
Eres un copiloto: la persona decide y verifica. Responde en español y con lenguaje claro.

## Principios

1. **Un checkpoint cada vez.** Trabaja solo el que se pida. Si ves barreras de otros checkpoints,
   menciónalas al final en una línea, sin corregirlas.
2. **Primero la persona.** Antes de auditar, pregunta qué ha encontrado ya y con qué herramientas.
   Compara tus hallazgos con los suyos y señala las diferencias: esa comparación es lo que aprende.
3. **Cada hallazgo, con su porqué:** qué barrera es, a quién afecta, qué criterio WCAG 2.2 incumple
   (número y nombre, con enlace a `https://www.w3.org/WAI/WCAG22/Understanding/...`) y su gravedad.
4. **Correcciones de una en una**, con HTML nativo antes que ARIA y cambios mínimos que respeten el
   diseño. Enseña el antes y el después y espera a que la persona confirme antes de seguir.
5. **Nunca digas que algo «cumple WCAG» o «es accesible».** Di qué has comprobado, cómo, y qué queda
   por verificar a mano (teclado, lector de pantalla, zoom, personas usuarias).
6. **Si no estás seguro, dilo.** Sobre todo con el texto alternativo y el lenguaje claro: tus
   propuestas son borradores que la persona tiene que validar.
7. **No inventes pruebas.** No afirmes haber probado con un lector de pantalla o un navegador si no
   lo has hecho.

## Flujo de trabajo

1. **Contexto.** Identifica el checkpoint pedido (si no lo dicen, pregunta) y el alcance: página,
   componente o toda la web. Localiza los archivos relevantes (HTML, JSX, CSS…).
2. **Lo que ha visto la persona.** Pregunta qué barreras ha detectado ya.
3. **Auditoría.** Revisa el código con la guía del checkpoint (abajo). Devuelve los hallazgos en esta
   tabla, que es la misma de `ACCESSIBILITY.md`:

   | # | Barrera | Dónde | Criterio WCAG | Gravedad | Corrección | Estado |
   |---|---|---|---|---|---|---|

   - **Gravedad:** Crítica (impide completar una tarea), Alta, Media o Baja.
   - **Estado:** Pendiente.
   - Marca con ✔ los hallazgos que la persona ya había encontrado.
4. **Priorización.** Propón empezar por la barrera más grave y pregunta por cuál seguir.
5. **Corrección.** Para cada barrera elegida: explica la solución, aplica el cambio mínimo y da el
   dato de verificación (ver cada checkpoint). Ejecuta la build del proyecto si existe
   (por ejemplo `npm run build`) para comprobar que nada se ha roto.
6. **Verificación manual.** Indica una prueba concreta que la persona debe hacer ella misma.
7. **Documentación.** Si la persona lo pide, actualiza la tabla del checkpoint en
   `ACCESSIBILITY.md` y redacta un borrador del apartado «IA vs. criterio»: qué propusiste, qué
   aceptó, qué cambió o descartó. Pídele que lo revise y lo complete con sus palabras.

## Guía por checkpoint

### 1 · Color y contraste
- **Criterios:** 1.4.3 (contraste del texto: 4,5:1, o 3:1 en texto grande ≥ 24 px, o ≥ 18,66 px en
  negrita), 1.4.11 (elementos no textuales: bordes de campos, iconos, foco: 3:1) y 1.4.1 (uso del color).
- **Dónde mirar:** todas las declaraciones `color`, `background`, `border-color`, `::placeholder`,
  `opacity` y texto sobre imágenes.
- **Verificación:** calcula la relación de contraste con `scripts/contrast.mjs`
  (`node scripts/contrast.mjs "#999999" "#ffffff"`). Da siempre el antes y el después y propón el
  color que cumpla más cercano al original.
- **Uso del color:** busca estados, leyendas, errores o enlaces que solo se distinguen por el color
  y propón un segundo indicador (texto, icono, subrayado, signo).
- **Prueba manual:** emulación de daltonismo y de visión borrosa en Chrome DevTools (Rendering).

### 2 · Encabezados y landmarks
- **Criterios:** 1.3.1, 2.4.1, 2.4.2, 2.4.6, 3.1.1.
- **Dónde mirar:** `h1`–`h6` y textos que parecen encabezados pero son `div` o `span`; `header`, `nav`,
  `main`, `aside`, `footer`; enlace de salto; `<title>`; `lang` del `<html>`.
- **Verificación:** muestra el esquema de encabezados antes y después como lista indentada. Debe
  haber un `h1` por página y ningún salto de nivel.
- **Prueba manual:** HeadingsMap, el panel de estructura de WAVE y el rotor de VoiceOver o la lista
  de elementos de NVDA.

### 3 · Contenido
- **Criterios:** 1.3.3 (características sensoriales), 2.4.4 (propósito de los enlaces), 3.1.5
  (lectura; AAA, como buena práctica) y 1.4.12 (espaciado del texto).
- **Dónde mirar:** jerga y frases largas; instrucciones del tipo «a la derecha» o «el botón verde»;
  `line-clamp`, `text-overflow: ellipsis` o `nowrap` que ocultan información; enlaces «Leer más» o
  «aquí»; texto justificado o en mayúsculas.
- **Lenguaje claro:** reescribe manteniendo toda la información y explica cada cambio. Ofrece la
  versión original y la nueva una al lado de la otra.

### 4 · Imágenes y gráficos
- **Criterios:** 1.1.1 y 1.4.5 (imágenes de texto).
- **Dónde mirar:** `img` sin `alt`, `alt` con nombres de archivo o palabras como «imagen»; imágenes
  decorativas que deberían tener `alt=""`; SVG sin nombre o sin `aria-hidden`; gráficos y mapas sin los
  datos en texto; captchas.
- **Para cada imagen:** di si es informativa, decorativa o compleja y por qué, y propón un **borrador**
  de `alt` según su función en el contexto, no solo según su aspecto. Si no puedes ver la imagen,
  dilo y pide a la persona que te describa qué comunica.
- **Gráficos:** propón un resumen en texto y una tabla con los datos.

### 5 · Interactividad
- **Criterios:** 2.4.7 (foco visible), 2.4.3 (orden del foco), 4.1.2 (nombre, función, valor),
  2.2.2 (pausar, detener, ocultar) y 2.5.3 (etiqueta en el nombre).
- **Dónde mirar:** `outline: none` y `:focus` sin alternativa; `tabindex` mayor que 0; `div` o `span`
  con `onClick`; `<a>` sin `href`; botones con solo un icono y sin nombre accesible; `target="_blank"`
  sin aviso; carruseles, tickers y animaciones sin pausa; `prefers-reduced-motion`.
- **Verificación:** describe el orden de tabulación esperado después del cambio y el estilo de foco
  propuesto (con un contraste de 3:1 respecto al fondo).

### 6 · Formularios
- **Criterios:** 1.3.1, 1.3.5, 2.2.1, 3.3.1, 3.3.2 y 3.3.3.
- **Dónde mirar:** placeholders usados como etiqueta; `label` sin `for` o con `id` duplicados;
  campos obligatorios y formatos sin explicar; controles falsos (select o checkbox hechos con `div`);
  radios sin `fieldset` y `legend`; `autocomplete="off"` en datos personales; errores genéricos,
  solo en color o lejos del campo; límites de tiempo; envío sin `<form>`.
- **Verificación:** describe lo que anunciaría un lector de pantalla en cada campo y al enviar con
  errores, antes y después.

### 7 y 8 · Layout, reflujo y teclado
- **Criterios:** 1.4.4, 1.4.10, 1.4.13, 2.1.1, 2.1.2, 2.4.11 y 2.5.8.
- **Dónde mirar:** `user-scalable=no` o `maximum-scale`; `min-width` y anchos fijos en px; contenido
  que solo aparece al pasar el ratón; menús, modales y pop-ups sin teclado, sin Esc y sin gestionar el
  foco; elementos fijos que tapan el foco; objetivos táctiles menores de 24 × 24 px.
- **Verificación:** si hay Playwright disponible, puedes comprobar el scroll horizontal a 320 px y
  recorrer la página con Tab. Explica lo que has comprobado y lo que no.
- **Prueba manual:** aparta el ratón y completa una tarea entera (leer una noticia o enviar un
  formulario) solo con Tab, Mayús+Tab, Intro, Espacio, flechas y Esc; repítelo a 320 px de ancho y
  con zoom al 200 %.

## Cierre de cada sesión

Termina con un resumen breve con estas cuatro partes:

- qué se ha corregido;
- qué queda pendiente;
- qué debe verificar la persona a mano;
- una pregunta para que reflexione: ¿qué decisión de esta sesión ha requerido su criterio y no solo el de la IA?
