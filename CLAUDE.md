# Instrucciones para agentes (Claude, Copilot y otros)

Este repositorio es **La Crónica Diaria**, un periódico ficticio en React + Vite con **barreras de
accesibilidad intencionadas**. Lo usa el alumnado del curso de accesibilidad de B:side Academy para
auditar y mejorar la web con ayuda de la IA, checkpoint a checkpoint (WCAG 2.2, niveles A y AA).

Responde siempre **en español**, con lenguaje claro: la mayoría del alumnado son diseñadores y
diseñadoras sin experiencia previa programando.

## Cómo ejecutar el proyecto

Requisitos: Node.js 18 o superior.

```bash
npm install        # instalar dependencias (solo la primera vez)
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # build de producción en dist/ (úsalo para comprobar que nada se ha roto)
npm run preview    # servir la build en http://localhost:4173
```

- No hay tests automatizados ni linter configurados. Para verificar un cambio, ejecuta `npm run build`
  y revisa la página en el navegador.
- Rutas (enrutado por hash, sin librería): portada `#/`, artículo `#/articulo/<id>`
  (por ejemplo `#/articulo/cumbre-clima`) y formulario `#/contacto`.
- Las imágenes vienen de `picsum.photos`. Si el entorno no tiene acceso a internet, no cargarán;
  eso no es un fallo del código.
- Si el entorno tiene Playwright, puedes usarlo para hacer capturas o lanzar axe-core sobre
  `npm run preview`. No lo instales como dependencia del proyecto sin que la persona lo pida.

## Mapa del código

| Archivo | Qué contiene |
|---|---|
| `index.html` | `lang`, `<title>`, meta viewport y fuentes |
| `src/App.jsx` | Enrutado y estructura general de la página |
| `src/styles.css` | Todos los estilos: colores, foco, tamaños, layout |
| `src/data/articles.js` | Textos de las noticias (para los ejercicios de lenguaje claro) |
| `src/components/` | `TopBar`, `Masthead`, `NavBar`, `Ticker`, `Carousel`, `EmissionsChart`, `Footer`, `NewsletterPopup`, `CookieBanner` |
| `src/pages/` | `Home`, `Article` y `Contact` (formulario) |

## Cómo trabajar con el alumnado

El objetivo del curso es que **el alumnado aprenda a tener criterio**, no que la IA arregle la web
sola. Por eso:

1. **Haz solo lo que se pide.** Si piden corregir el contraste, no toques encabezados, formularios ni
   otras barreras. Puedes mencionar otras barreras que veas, pero no las corrijas sin permiso.
2. **Explica cada cambio:** qué barrera había, a quién afecta, qué criterio WCAG 2.2 incumple
   (número y nombre, con enlace a https://www.w3.org/WAI/WCAG22/Understanding/) y por qué tu
   solución lo resuelve.
3. **Da los datos para verificar.** En el contraste, indica la relación antes y después (4,5:1 para
   texto normal, 3:1 para texto grande y para elementos no textuales). En los encabezados, muestra la
   jerarquía resultante. En el teclado, describe el orden de tabulación esperado.
4. **Recuerda que hay que comprobarlo a mano.** Al terminar, sugiere una prueba manual concreta:
   tabular con el teclado, VoiceOver/NVDA, zoom al 200 %, ancho de 320 px, WAVE, axe o HeadingsMap.
   Nunca digas que la página «cumple WCAG» ni que es «accesible» solo por tus cambios o por una
   herramienta automática.
5. **Si no estás seguro, dilo.** Sobre todo con el texto alternativo: un `alt` lo tiene que validar una
   persona que sepa qué comunica la imagen. Propón borradores y explica tu razonamiento.
6. **HTML nativo antes que ARIA.** Usa `<button>`, `<a href>`, `<label>`, `<fieldset>`, `<nav>`,
   `<main>`… antes que `role` o `aria-*`. No añadas ARIA si no hace falta.
7. **Cambios pequeños y legibles.** Toca los mínimos archivos posibles, mantén el estilo visual del
   periódico y no añadas dependencias nuevas sin preguntar.
8. **Git:** no hagas commits ni pushes salvo que la persona lo pida. Si lo pide, crea una rama por
   checkpoint (por ejemplo `checkpoint-1-contraste`) y usa mensajes que expliquen la barrera corregida.
9. **Documenta.** Si la persona lo pide, añade a `ACCESSIBILITY.md` lo que se ha corregido y lo que
   queda pendiente, sin inventar pruebas que no se han hecho.

## Los checkpoints del curso

1. Color y contraste: herramientas de verificación y cómo evaluar combinaciones de color
2. Encabezados y landmarks: estructura semántica de la página
3. Contenido: lenguaje claro, direccionalidad y truncamiento
4. Imágenes y gráficos: alt-text con criterio (la IA propone borradores que siempre hay que validar)
5. Interactividad: foco visible y orden de foco
6. Formularios: etiquetas claras y errores bien ubicados (página Contacto)
7 y 8. Layout, reflujo y navegación con teclado

Las barreras están repartidas por toda la web a propósito. **No hagas una lista completa de todas ellas
salvo que te la pidan expresamente:** encontrarlas forma parte del ejercicio.

## Materiales de apoyo del repositorio

- `CHECKLIST.md`: checklist paso a paso (nivel A y guía rápida).
- `ACCESSIBILITY.md`: plantilla organizada por checkpoint. En cada clase el alumnado apunta ahí
  hallazgos, correcciones y qué propuso la IA; al final puede completar las secciones finales.
  Si te piden documentar, rellena la tabla del checkpoint correspondiente.
