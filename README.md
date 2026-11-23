# La Crónica Diaria — proyecto de prácticas de accesibilidad

> [!WARNING]
> **Este proyecto es inaccesible a propósito.** Es un periódico digital ficticio, inspirado en la
> maquetación de los grandes diarios internacionales, que contiene **barreras de accesibilidad
> intencionadas** para auditarlas y corregirlas en clase. No lo uses como referencia de buenas prácticas.

Proyecto creado para el bloque **«Diseño sin barreras: accesibilidad e inclusión en la era de la IA»**
del curso de accesibilidad de **[B:side Academy](https://bsideacademy.com/)**, impartido por Alena Nikolaeva.

*La Crónica Diaria* es un medio inventado: los nombres, las noticias, las personas y los datos son ficticios
y las fotos son imágenes aleatorias de [Lorem Picsum](https://picsum.photos/). Si picsum no responde, la web
muestra automáticamente las ilustraciones propias de `public/img/`.

🔗 **Demo:** https://alenanik.github.io/cronica-a11y-bside/ (GitHub Pages)

## Qué vamos a hacer

A lo largo del bloque analizaremos esta web aplicando el checklist de diseño accesible
(WCAG 2.2, niveles A y AA) y usaremos Claude y GitHub Copilot como copilotos para auditar, redactar y
proponer correcciones, **verificando siempre lo que propone la IA**.

### Checkpoints de la auditoría

| # | Checkpoint | Qué revisaremos |
|---|---|---|
| 1 | **Color y contraste** | Herramientas de verificación y cómo pedirle a Claude que evalúe combinaciones de color. |
| 2 | **Encabezados y landmarks** | Estructura semántica de la página. |
| 3 | **Contenido** | Lenguaje claro, direccionalidad y truncamiento. |
| 4 | **Imágenes y gráficos** | Alt-text con criterio; Claude como generador de borradores de alt-text que siempre hay que validar. |
| 5 | **Interactividad** | Foco visible y orden de foco. |
| 6 | **Formularios** | Etiquetas claras y errores bien ubicados (página **Contacto**). |
| 7 y 8 | **Layout y teclado** | Layout, reflujo y navegación con teclado. |

### Dónde buscar

- **Portada** (`#/`): cabecera, navegación, ticker de última hora, noticia principal con gráfico,
  carrusel de fotos, opinión, lo más leído, juegos, podcast, publicidad, pop-up de newsletter y banner de cookies.
- **Artículo** (`#/articulo/cumbre-clima`, o pulsa en cualquier noticia): estructura del texto, mapa,
  botones de compartir, muro de pago.
- **Contacto** (`#/contacto`, en el menú): formulario completo.

## Materiales del repositorio

- [`CHECKLIST.md`](CHECKLIST.md): checklist de accesibilidad paso a paso para seguir trabajando después del curso
  (traducción al español del taller [2024-react-alicante](https://github.com/david-workshops/2024-react-alicante)).
- [`ACCESSIBILITY.md`](ACCESSIBILITY.md): plantilla organizada por checkpoint. En cada clase apuntas la auditoría y las
  correcciones; al final del bloque, si quieres, completas las secciones finales (inspirada en el proyecto
  [ACCESSIBILITY.md](https://mgifford.github.io/ACCESSIBILITY.md/) de Mike Gifford).

## Trabajar con Claude (u otro agente de IA)

El repositorio incluye [`CLAUDE.md`](CLAUDE.md) con instrucciones para agentes: cómo ejecutar el proyecto,
dónde está cada cosa y cómo deben acompañarte (cambios pequeños, explicación del criterio WCAG de cada
cambio y recordatorio de que hay que comprobarlo a mano). Claude Code lo lee automáticamente.
[`AGENTS.md`](AGENTS.md) y [`.github/copilot-instructions.md`](.github/copilot-instructions.md)
remiten a él para otros agentes y para GitHub Copilot.

### Skill de lenguaje inclusivo

En [`.claude/skills/inclusive-language/`](.claude/skills/inclusive-language/SKILL.md) hay un skill que revisa
textos (copy de la interfaz, mensajes de error, documentación, texto alternativo…) y propone alternativas
respetuosas e inclusivas: género, discapacidad y neurodiversidad, origen y etnia, y exclusión implícita.
Lo leen Claude Code y GitHub Copilot. Claude lo usa por su cuenta cuando escribes o revisas textos, y también
puedes invocarlo a mano con `/inclusive-language`. Es especialmente útil en el **checkpoint 3 (contenido)**.

Ejemplo: «Revisa con el skill de lenguaje inclusivo los textos del formulario de contacto y del banner de cookies».

> Las listas de términos del skill están en inglés. Al aplicarlo a textos en español, pide a Claude que adapte
> las recomendaciones (por ejemplo, «los usuarios» → «las personas usuarias») y valida tú cada propuesta.

Ejemplos de peticiones:

- «Revisa el contraste de color de la cabecera y propón colores que cumplan WCAG 2.2 AA. Explícame las relaciones de contraste.»
- «Analiza la jerarquía de encabezados de la portada y propón una estructura con landmarks.»
- «Reescribe con lenguaje claro el primer párrafo del artículo.»
- «Propón un borrador de texto alternativo para las imágenes de la portada y explica por qué.»
- «Haz que el formulario de contacto se pueda usar con teclado y lector de pantalla.»

## Cómo arrancarlo

### En GitHub Codespaces (sin instalar nada)

1. Pulsa **Code → Codespaces → Create codespace on main**.
2. En la terminal: `npm install` y después `npm run dev`.
3. Abre el puerto 5173 cuando VS Code te lo proponga.

### En local

Necesitas [Node.js](https://nodejs.org/) 18 o superior.

```bash
git clone https://github.com/AlenaNik/cronica-a11y-bside.git
```

```bash
cd cronica-a11y-bside
```

```bash
npm install
```

```bash
npm run dev
```

## Preparación para la sesión 4: GitHub, Copilot y accesibilidad en el código

En la sesión 4 comentamos la tarea, vemos GitHub para diseñadores (repositorio, *pull request* y cómo
leer código sin saber programar), convertimos GitHub Copilot Chat en un asistente experto en
accesibilidad y hacemos una demo de auditoría de esta web combinando herramientas y Copilot.
Trae lo siguiente preparado:

### Extensiones de Chrome imprescindibles

- [ ] [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- [ ] [HeadingsMap](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
- [ ] [axe DevTools](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)

### Extensiones y herramientas opcionales

- [ ] [Accessibility Checker de IBM](https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp)
- [ ] [Web Developer](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)
- [ ] [VisBug](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc)
- [ ] [taba11y](https://chromewebstore.google.com/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga)
- [ ] Un lector de pantalla: VoiceOver (macOS/iOS), NVDA (Windows) o TalkBack (Android)

### Conocimientos previos (lo justo)

- [ ] Nociones básicas de [React](https://es.react.dev/): la web está hecha con componentes de React.
- [ ] Échale un vistazo a [Storybook](https://storybook.js.org/): lo usaremos para ver componentes aislados.
- [ ] Si te interesan los tests automáticos, mira cómo [integrar axe con Cypress](https://github.com/component-driven/cypress-axe).
- [ ] Ten a mano la [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/).

### Herramienta para corregir el contraste

Usaremos [Colour Contrast Checker](https://colourcontrast.cc/?background=ffffff&foreground=33a1cc)
para comprobar y corregir combinaciones de color. Tenla abierta en una pestaña. Como alternativa, el
[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Prompt base para convertir Copilot Chat en asistente de accesibilidad

Pega este prompt al empezar cada conversación en GitHub Copilot Chat (o en Claude, ChatGPT u otro
cliente de IA). Además, Copilot lee automáticamente
[`.github/copilot-instructions.md`](.github/copilot-instructions.md), que remite a [`CLAUDE.md`](CLAUDE.md).

```text
Necesito aprender sobre accesibilidad y escribir código que cumpla los criterios de conformidad
de nivel A y AA de las WCAG 2.2 definidos en https://www.w3.org/TR/WCAG22/. Quiero que seas mi
coach de accesibilidad, una persona experta en la materia que me haga pensar y tener en cuenta
todos los requisitos de accesibilidad y las mejoras de usabilidad. Cuando respondas preguntas sobre
accesibilidad, utiliza fuentes de prestigio como w3.org, webaim.org, developer.mozilla.org y
https://www.ibm.com/able/. Siempre que sea posible, incluye enlaces y referencias para seguir
aprendiendo. Cuando sugieras código, utiliza HTML semántico, asegúrate de que se pueda manejar con
el teclado, sigue las técnicas suficientes de las WCAG 2.2 y sigue la guía de prácticas de autoría
de ARIA (ARIA Authoring Practices Guide) y sus patrones de diseño. ¿Entiendes estas instrucciones?
```

Buenas prácticas al pedirle cosas:

- **Una barrera por petición.** Adjunta el archivo (`#file` en Copilot), selecciona el código o pega
  el mensaje de axe/WAVE.
- **Pide criterio y datos:** el criterio WCAG con número, nombre y enlace; la relación de contraste
  antes y después; la jerarquía de encabezados resultante.
- **HTML nativo antes que ARIA.** Desconfía si la propuesta añade `role` o `aria-*` a un `<div>`.
- **Verifica siempre a mano.** Una herramienta automática o la IA nunca bastan para decir que algo
  «cumple WCAG».

## Checklist: determina el estado de accesibilidad de la página

Sigue estos pasos en orden sobre la [demo](https://alenanik.github.io/cronica-a11y-bside/) o en
`http://localhost:5173`. Apunta lo que encuentres en [`ACCESSIBILITY.md`](ACCESSIBILITY.md).

1. **Abre la web.**
2. **Mide cómo de grave es la situación** con un comprobador automático:
   [webaccessibility.com](https://www.webaccessibility.com/),
   [WAVE](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) o
   [axe](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd).
3. **Abre la extensión** [Web Developer](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=es).
4. **Desactiva todos los estilos** (Web Developer → CSS → *Disable All Styles*):
   - [ ] ¿La web funciona sin CSS (por si no carga)?
   - [ ] ¿El orden de los elementos de la página tiene sentido?
   - [ ] ¿Las imágenes y los iconos tienen un tamaño correcto?
   - [ ] ¿El documento está bien estructurado?
5. **Renderizado (visión borrosa, contraste)** con Chrome DevTools: abre DevTools, pulsa
   `Ctrl/Cmd + Shift + P`, escribe *Show Rendering* y prueba *Emulate vision deficiencies*
   (visión borrosa, contraste reducido, daltonismos).
   - [ ] Los enlaces se distinguen del texto normal (por ejemplo, con subrayado), no solo por el color.
   - [ ] En el mismo panel, activa *Emulate CSS media feature prefers-reduced-motion*: las animaciones,
     el zoom y los desplazamientos pueden ser un problema para personas con trastornos vestibulares.
6. **Usa la tecla `Tab`** ➡️ aparta el ratón y recorre toda la página con el teclado
   (`Tab`, `Shift + Tab`, `Enter`, `Espacio`, `Esc` y flechas). ¿Puedes usar cada parte de la web sin
   ratón ni trackpad?
   - [ ] ¿Los estilos de foco se ven claramente?
   - [ ] ¿Puedes navegar entre encabezados (con un lector de pantalla o HeadingsMap)?
   - [ ] ¿Todo lo que debería recibir el foco lo recibe?
   - [ ] ¿Los botones son `<button>` de verdad?
   - [ ] ¿La experiencia general con teclado es buena?
   - [ ] ¿Se gestiona bien el foco (pop-ups, banner de cookies, menús)?
   - [ ] ¿Los elementos se ocultan y se muestran correctamente?
   - [ ] ¿El orden visual coincide con el orden del DOM? (la extensión taba11y te ayuda a verlo)
   - [ ] Activa WAVE y axe y revisa las etiquetas ARIA y el resto de avisos.
   - [ ] Haz zoom al 200 % (`Ctrl/Cmd + +`): ¿el texto escala bien y no se corta ni se solapa?
7. **Revisa los encabezados con HeadingsMap:** un solo `<h1>`, sin saltos de nivel y con textos que
   describan cada sección.
8. **Revisa las descripciones de las imágenes** con
   [Web Developer](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=es)
   (Images → *Display Alt Attributes*): ¿cada `alt` comunica lo mismo que la imagen? ¿Las decorativas
   tienen `alt=""`?
9. **Comprueba el contraste de color** de los elementos con
   [VisBug](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=en).
   Sigue la comprobación manual de abajo.

### Comprobación manual del contraste paso a paso

1. Activa VisBug y elige la herramienta de **accesibilidad**. Al pasar el ratón
   por un texto verás su color, el color de fondo y la relación de contraste. También puedes usar el
   selector de color de Chrome DevTools (pestaña *Elements* → *Styles* → clic en el cuadro de color).
2. Copia el color del texto y el del fondo en formato hexadecimal.
3. Pégalos en [Colour Contrast Checker](https://colourcontrast.cc/?background=ffffff&foreground=33a1cc)
   (campos *Background* y *Foreground*).
4. Compara el resultado con el mínimo de las WCAG 2.2 (nivel AA):
   - **4,5:1** para texto normal ([1.4.3 Contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).
   - **3:1** para texto grande: 24 px o más, o 18,66 px o más en negrita.
   - **3:1** para iconos, bordes de campos y estados de foco
     ([1.4.11 Contraste no textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)).
5. Si no llega, ajusta el color en la herramienta hasta que pase, intentando mantener el tono de la marca.
6. Pide a Copilot que aplique el nuevo color en `src/styles.css`, por ejemplo:
   «Cambia el color de este texto por `#xxxxxx`. Dime la relación de contraste antes y después
   y qué criterio WCAG resuelve».
7. Vuelve a medir con VisBug o WAVE para confirmar el cambio y apúntalo en `ACCESSIBILITY.md`.

Para seguir trabajando después del curso tienes el checklist completo en [`CHECKLIST.md`](CHECKLIST.md).

## Estructura del código

```
src/
├── App.jsx               # Enrutado sencillo por hash y layout general
├── styles.css            # Todos los estilos
├── data/articles.js      # Noticias ficticias
├── components/           # Cabecera, navegación, ticker, carrusel, gráfico, pie, pop-ups…
└── pages/                # Portada, artículo y contacto
```

## Cómo contribuir con tus correcciones

1. Haz un *fork* del repositorio.
2. Crea una rama por checkpoint (por ejemplo, `checkpoint-1-contraste`).
3. Corrige, verifica con herramientas **y** con teclado / lector de pantalla.
4. Apunta en la tabla del checkpoint de tu `ACCESSIBILITY.md` qué propuso la IA, qué aceptaste y qué tuviste que corregir o descartar.

---

Proyecto educativo sin relación con ningún medio de comunicación real.
