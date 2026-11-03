# Checklist de accesibilidad

> [!NOTE]
> Este documento es una traducción al español del README del taller
> [**david-workshops/2024-react-alicante**](https://github.com/david-workshops/2024-react-alicante),
> creado por David Jensenius y [Alena Nikolaeva](https://x.com/alenanik11) (equipo de GitHub Copilot)
> y publicado con licencia MIT (ver aviso al final). Se incluye aquí para que el alumnado de
> B:side Academy lo tenga como guía de trabajo después del curso. La sección «Puesta en marcha»
> se ha adaptado a este repositorio; el resto es una traducción fiel.

En este taller nos sumergimos en el mundo de la accesibilidad en el código apoyándonos en Copilot, el asistente de programación con IA de GitHub.
Impartido por David Jensenius y [Alena Nikolaeva](https://x.com/alenanik11), del equipo de GitHub Copilot.

## Introducción

### Definición

En su nivel más básico, la accesibilidad garantiza que todas las personas, independientemente de sus capacidades, su nivel educativo y el software que utilicen, puedan acceder a tu web o aplicación.
Sin embargo, la definición tiene más matices. La Web está diseñada, en esencia, para funcionar para todas las personas. Pero las aplicaciones mal diseñadas e inaccesibles provocan una exclusión a gran escala.

### ¿Quién define la accesibilidad web?

El World Wide Web Consortium (W3C), mediante las [Pautas de Accesibilidad para el Contenido Web](https://www.w3.org/WAI/standards-guidelines/wcag/es) (WCAG).

Es importante tener en cuenta que las WCAG son pautas, no leyes. El propio W3C evalúa a las organizaciones según estos estándares, pero no tiene autoridad para hacerlos cumplir. Las WCAG 2.1 son un estándar completo de accesibilidad web y, actualmente, también son la base de la legislación sobre accesibilidad web en muchas partes del mundo.

Para mantener vivo el compromiso y, sobre todo, convertirlo en acciones, todas las personas del equipo necesitan saber cómo deben contribuir desde [su propio rol](https://www.w3.org/community/wai-engage/wiki/Accessibility_Responsibility_Breakdown).

### ¿Para quién?

Existe una gran variedad de discapacidades, pero la accesibilidad busca que las personas puedan usar la web sean cuales sean sus capacidades. Es importante tener en cuenta y diseñar para distintos casos de uso, entre ellos:

- Uso sin visión
- Uso con visión limitada
- Uso sin percepción del color
- Uso sin audición
- Uso con audición limitada
- Uso sin capacidad vocal
- Uso sin capacidad de manipulación o sin fuerza
- Uso con alcance limitado
- Minimizar los desencadenantes de crisis fotosensibles
- Uso con capacidad cognitiva limitada

## Cuaderno de trabajo paso a paso

### 1. Recursos y herramientas

- [ ] Instala extensiones de Chrome como [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh), [HeadingsMap](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) y [axe](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)

Extensiones y herramientas opcionales:

- [ ] Instala [Accessibility Checker](https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp)
- [ ] Instala la extensión [Web Developer](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?pli=1)
- [ ] Instala la extensión [VisBug](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=es)
- [ ] Instala la extensión [taba11y](https://chromewebstore.google.com/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga?pli=1)
- [ ] Trae un portátil con acceso a [GitHub](https://github.com/).
- [ ] Conocimientos básicos de accesibilidad (no obligatorio).
- [ ] [VS Code](https://code.visualstudio.com/download)
- [ ] Conocimientos básicos de [React](https://es.react.dev/)
- [ ] Infórmate un poco sobre [Storybook](https://storybook.js.org/).
- [ ] Si te interesan los tests automatizados, puedes incluso [integrar axe con Cypress](https://github.com/component-driven/cypress-axe).
- [ ] Usaremos [esta herramienta para corregir el contraste de color](https://colourcontrast.cc/?background=ffffff&foreground=33a1cc), ¡tenla a mano!
- [ ] Ten a mano un prompt base que convierta Copilot Chat (o Claude) en un asistente de accesibilidad:

```
Necesito aprender sobre accesibilidad y escribir código que cumpla los criterios de conformidad
de nivel A y AA de las WCAG 2.1 definidos en https://www.w3.org/TR/WCAG21/. Quiero que seas mi
coach de accesibilidad, una persona experta en la materia que me haga pensar y tener en cuenta
todos los requisitos de accesibilidad y las mejoras de usabilidad. Cuando respondas preguntas
sobre accesibilidad, utiliza fuentes de prestigio como w3.org, webaim.org,
developer.mozilla.org y https://www.ibm.com/able/. Siempre que sea posible, incluye enlaces y
referencias para seguir aprendiendo. Cuando sugieras código, utiliza HTML semántico, asegúrate
de que se pueda manejar con el teclado, sigue las técnicas suficientes de las WCAG 2.1 y sigue
la guía de prácticas de autoría de ARIA (ARIA Authoring Practices Guide) y sus patrones de
diseño. ¿Entiendes estas instrucciones?
```

### 2. Puesta en marcha (adaptado a este repositorio)

1. Abre este repositorio en GitHub.
2. Pulsa el botón **Code**.
3. Selecciona la pestaña **Codespaces**.
4. Pulsa **Create codespace on main**.
5. En la terminal, ejecuta `npm install` y después `npm run dev`.
6. Abre la URL que aparece (puerto 5173) en el navegador.

También puedes hacerlo en local: clona el repositorio, ejecuta `npm install` y `npm run dev`.

### 3. Determina el estado de accesibilidad de la página

1. Abre la web.
2. Comprueba lo grave que es la situación con un [verificador automático sencillo](https://www.webaccessibility.com/), con [WAVE](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) o con [axe](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd).
3. Abre la extensión [Web Developer](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=es).
4. Desactiva todos los estilos:
   - [ ] ¿Funciona la web sin CSS (por si no llegara a cargar)?
   - [ ] ¿Tiene sentido el orden de los elementos de la página?
   - [ ] ¿Las imágenes y los iconos tienen el tamaño correcto?
   - [ ] ¿Está bien estructurado el documento?
5. Renderizado (visión borrosa, contraste): usa las Chrome DevTools. Un ejemplo perfecto son los enlaces: deberían estar subrayados para diferenciarlos fácilmente del texto normal.
   P. D.: `prefers-reduced-motion`. Las animaciones, el zoom y los desplazamientos pueden ser problemáticos para las personas con trastornos vestibulares.
6. Usa el teclado.
   Tecla `Tab` ➡️
   Aparta el ratón y recorre la página con el tabulador para ver si puedes usar todas y cada una de las partes de la web sin ratón ni panel táctil.
   - [ ] ¿Los estilos de foco se ven con claridad?
   - [ ] ¿Puedes navegar entre los encabezados?
   - [ ] ¿Todo lo que debería recibir el foco lo recibe?
   - [ ] ¿Tus botones son `<button>` de verdad?
   - [ ] ¿La experiencia general con el teclado es buena?
   - [ ] ¿Gestionas el foco correctamente?
   - [ ] ¿Ocultas y muestras los elementos correctamente?
   - [ ] ¿El orden visual coincide con el orden del DOM?
   - [ ] Activa WAVE y revisa las etiquetas ARIA y demás → WAVE y → axe.
   - [ ] Haz zoom al 200 % para comprobar si el texto se escala correctamente y cómo lo hace.
7. Revisa los encabezados con HeadingsMap.
8. Revisa las descripciones de las imágenes con la extensión [Web Developer](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=es).
9. Revisa el contraste de color de los elementos con [VisBug](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=es).

### 4. ¡Manos a la obra con las correcciones!

En lo que respecta al código HTML subyacente, tenemos suerte: fue diseñado desde el principio para ser inclusivo. HTML es una caja de herramientas para la inclusión. Usar el elemento adecuado para cada tarea no solo beneficia a las pocas personas que usan lectores de pantalla: también te da accesibilidad con teclado de serie.

La guía de este taller toma como referencia las [Pautas de Accesibilidad para el Contenido Web (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/es). Las WCAG son un estándar compartido de accesibilidad del contenido web para personas, organizaciones y gobiernos. [Con licencia CC](https://creativecommons.org/licenses/by-sa/4.0/deed.es).

Las recomendaciones cubren muchas, aunque no todas, de las cuestiones de nivel A y AA, y te invitan a revisar aspectos que abarcan una amplia variedad de discapacidades.

> [!NOTE]
> ¡No olvides preguntarle a Copilot (o a Claude) cómo corregir estos problemas en tu código!

**Nivel A**

#### 1. Perceptible: ¿pueden las personas leer el contenido?

- [ ] Alternativas textuales: las imágenes deben tener un texto descriptivo (`alt`). [1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)
- [ ] Cualquier contenido solo de audio debe transmitirse también en texto. Cualquier vídeo sin pista de audio también debe describirse en texto, aunque también podría describirse con audio. ([1.2.1](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded))
- [ ] El audio de los vídeos debe tener subtítulos. [1.2.2](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded)
- [ ] Las acciones, descripciones y otros contenidos importantes de los vídeos que no son audio deben describirse en los subtítulos o en una pista de audio aparte. ([1.2.3](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded))
- [ ] La información o las relaciones visuales entre contenidos también se transmiten a través del código, mediante HTML o ARIA (por ejemplo, el atributo `for` en la etiqueta de un formulario, o `aria-describedby` en un campo que tiene texto de ayuda). [1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [ ] La presentación visual del contenido coincide con lo que lee un lector de pantalla. ([1.3.2](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence))
- [ ] No se hace referencia a nada únicamente por su color, tamaño, posición, forma, etc. [1.3.3](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics)
- [ ] El color no debe ser lo único que se use para transmitir significado. [1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color)
- [ ] El audio que se reproduce automáticamente durante más de 3 segundos se puede bajar o detener. [1.4.2](https://www.w3.org/WAI/WCAG22/Understanding/audio-control)

#### 2. Operable: ¿pueden las personas usar el contenido?

- [ ] Se puede navegar usando solo el teclado. [2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [ ] No debería darse una situación en la que entres en un modal con el teclado y no puedas volver adonde estabas. ([2.1.2](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap))
- [ ] Los atajos de teclado deben usar teclas modificadoras, como [ctrl], [command] o [alt]/[option], y se deben poder desactivar. [2.1.4](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts)
- [ ] Hay que evitar los límites de tiempo, salvo que se puedan ampliar. [2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable)
- [ ] El contenido que se mueve o se anima automáticamente durante más de 5 segundos debe poder detenerse u ocultarse. [2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)
- [ ] Nada destella, parpadea ni centellea más de tres veces por segundo. [2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold)
- [ ] Hay «enlaces de salto» disponibles para que las personas que usan el teclado puedan saltarse la navegación. [2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)
- [ ] Cada página tiene un `<title>` único que describe su contenido. [2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled)
- [ ] Cuando una persona recorre la página con el tabulador, el orden va de arriba abajo y de izquierda a derecha, tal y como se leería la página. [2.4.3](https://www.w3.org/WAI/WCAG22/Understanding/focus-order)
- [ ] Queda claro adónde lleva un enlace, ya sea por el propio texto del enlace o por la información de la frase que lo precede. [2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context)
- [ ] Todas las acciones que se realizan con un gesto (deslizar, pellizcar, etc.) o dibujando también pueden hacerse con uno o varios botones. [2.5.1](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures)
- [ ] Las acciones (como pulsar un botón) no se activan al presionar el botón del ratón, sino al soltarlo. [2.5.2](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation)
- [ ] El texto visible de un campo de formulario, botón o enlace coincide con el texto del código subyacente. [2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name)
- [ ] No se depende del movimiento del dispositivo, como agitarlo o inclinarlo, para realizar una acción. [2.5.4](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation)

#### 3. Comprensible: ¿pueden las personas entender el contenido?

- [ ] Hay un atributo `lang` en el elemento `<html>` que coincide con el idioma de la página. [3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page)
- [ ] No ocurre nada inesperado cuando un elemento de la página, como un `<button>`, recibe el foco del teclado. [3.2.1](https://www.w3.org/WAI/WCAG22/Understanding/on-focus)
- [ ] No ocurre nada inesperado cuando se elige el valor de un campo de formulario, como una opción de un `select`. [3.2.2](https://www.w3.org/WAI/WCAG22/Understanding/on-input)
- [ ] Hay algún tipo de ayuda disponible en todas las páginas, ya sean datos de contacto, un formulario de contacto, un enlace a una página de contacto o un enlace a la documentación de ayuda. [3.2.6](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help)
- [ ] Los mensajes de error y de validación deben comunicarse en texto y ofrecer sugerencias que ayuden a la persona a continuar con éxito. [3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification)
- [ ] Se ofrece toda la ayuda necesaria para evitar que se produzca un error en el formulario; la etiqueta del campo puede bastar, pero quizá también haga falta un texto de ayuda. [3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions)
- [ ] Si la persona ya ha dado cierta información, o no se le vuelve a pedir, o aparece rellenada previamente en el campo siguiente, o está disponible para seleccionarla en un desplegable. [3.3.7](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry)

#### 4. Robusto: ¿pueden las personas usarlo con cualquier dispositivo?

- [ ] El significado semántico de cada elemento interactivo (controles de formulario, enlaces, encabezados, landmarks, tablas, etc.) es correcto, y cada uno tiene un nombre accesible. [4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)

<hr>

### 🎉 ¡Enhorabuena! ¡Has revisado todos los criterios de nivel A!

<hr>

### Si necesitas un poco más…

<hr>

### Una guía rápida para detectar más errores

- [ ] Asegúrate de que el zoom del viewport no está desactivado ([cambio de tamaño del texto](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)).
- [ ] Asegúrate de que el flujo del contenido es lineal ([orden del foco](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)).

<details>
<summary>Pista</summary>

Elimina los valores del atributo `tabindex` que no sean `0` o `-1`. Los elementos que reciben el foco de forma nativa, como los enlaces o los elementos `button`, no necesitan `tabindex`. Los elementos que no reciben el foco de forma nativa no deberían tener `tabindex`, salvo en casos de uso muy concretos.

</details>

- [ ] Evita usar el atributo `autofocus` ([orden del foco](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)).

<details>
<summary>Pista</summary>

Las personas ciegas o con baja visión pueden desorientarse cuando el foco se mueve sin su permiso. Además, `autofocus` puede ser problemático para personas con discapacidades motoras, ya que puede suponerles un trabajo extra salir del área con foco automático para ir a otras partes de la página o vista.

</details>

- [ ] Ten cuidado con los tiempos de expiración de la sesión ([tiempo ajustable](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)).

<details>
<summary>Pista</summary>

Si no puedes evitarlos, avisa a la persona que usa tu web de que existe ese límite de tiempo con antelación, y dale un aviso con margen suficiente antes de que se agote.

</details>

- [ ] Elimina los tooltips del atributo `title` ([nombre, función, valor](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)).

<details>
<summary>Pista</summary>

El atributo `title` tiene numerosos problemas y no debería usarse si la información que contiene es importante para todo el mundo. Un uso aceptable del atributo `title` sería etiquetar un elemento `iframe` para indicar qué contenido incluye.

</details>

#### Teclado

Es importante que tu interfaz y tu contenido se puedan manejar y recorrer con el teclado. Algunas personas no pueden usar un ratón o utilizan otras tecnologías de apoyo que quizá no les permitan pasar el cursor por encima de los elementos ni hacer clic con precisión.

- [ ] Asegúrate de que hay un estilo de foco visible para los elementos interactivos a los que se llega con el teclado ([foco visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)).
- [ ] Comprueba que el orden del foco del teclado coincide con la disposición visual ([secuencia significativa](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)).

<details>
<summary>Pista</summary>

¿Puede una persona que navega con teclado o con lector de pantalla moverse por la página de forma predecible?

</details>

- [ ] Elimina los elementos invisibles que reciben el foco ([orden del foco](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)).

<details>
<summary>Pista</summary>

Elimina la posibilidad de enfocar elementos que no están pensados para descubrirse en ese momento. Esto incluye cosas como menús desplegables inactivos, navegaciones fuera de la pantalla o modales.

</details>

#### Imágenes

- [ ] Asegúrate de que todos los elementos `img` tienen un atributo `alt` ([contenido no textual](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)).

<details>
<summary>Pista</summary>

Los atributos `alt` (texto alternativo) describen una imagen para las personas que quizá no puedan verla. Cuando una imagen no tiene atributo `alt`, el lector de pantalla puede anunciar en su lugar el nombre del archivo y su ruta. Eso no comunica el contenido de la imagen.

</details>

- [ ] Asegúrate de que las imágenes decorativas tienen un atributo `alt` **nulo** (vacío).

<details>
<summary>Pista</summary>

Los atributos `alt` nulos también se conocen como atributos `alt` vacíos. Se crean sin incluir ninguna información entre las comillas de apertura y cierre del atributo `alt`. Las imágenes decorativas no comunican información necesaria para entender el significado general de la web.

</details>

- [ ] Ofrece una alternativa textual para las imágenes complejas, como gráficos, diagramas y mapas ([contenido no textual](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)).

<details>
<summary>Pista</summary>

¿Hay un texto plano que enumere los puntos del mapa o las secciones de un diagrama de flujo? Describe toda la información visible. Esto incluye los ejes del gráfico, los datos y sus etiquetas, y la idea general que comunica el gráfico.

</details>

#### Encabezados

Los elementos de encabezado (`h1`, `h2`, `h3`, etc.) ayudan a dividir el contenido de la página en «bloques» de información relacionada. Son de una importancia enorme para ayudar a las personas que usan tecnologías de apoyo a entender el significado de una página o vista.

- [ ] Usa elementos de encabezado para introducir el contenido ([encabezados o etiquetas](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)).

<details>
<summary>Pista</summary>

Los elementos de encabezado construyen el esquema del documento y no deberían usarse con fines puramente visuales.

</details>

- [ ] Intenta usar un único elemento `h1` por página o vista ([encabezados o etiquetas](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)).

<details>
<summary>Pista</summary>

El elemento `h1` debería usarse para comunicar el propósito general de la página o vista.

</details>

- [ ] Los encabezados deben seguir una secuencia lógica.

<details>
<summary>Pista</summary>

El orden de los encabezados debe descender según la «profundidad» del contenido. Por ejemplo, un elemento `h4` no debería aparecer en una página antes del primer `h3`. Una herramienta como [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=es) puede ayudarte a evaluarlo.

</details>

#### Controles y enlaces

Los controles son elementos interactivos, como enlaces y botones, que permiten a una persona ir a un destino o realizar una acción.

- [ ] Los enlaces siempre deben tener un atributo `href` ([información y relaciones](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)).

<details>
<summary>Pista</summary>

Sin un atributo `href`, el enlace no se expone correctamente a las tecnologías de apoyo. Un ejemplo sería un enlace que usa un evento `onClick` en lugar de un atributo `href`.

</details>

- [ ] Asegúrate de que los enlaces se reconocen como enlaces ([uso del color](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)).

<details>
<summary>Pista</summary>

El color por sí solo no basta para indicar que hay un enlace. El subrayado es una forma popular y comúnmente entendida de indicar que un contenido es un enlace.

</details>

- [ ] Asegúrate de que los controles tienen estados de `:focus` ([foco visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)).

<details>
<summary>Pista</summary>

Los estilos de foco visibles ayudan a las personas a saber qué elemento interactivo tiene el foco del teclado. Así saben que pueden realizar acciones como activar un botón o ir al destino de un enlace.

</details>

- [ ] Usa el elemento `button` para los botones ([información y relaciones](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)).

<details>
<summary>Pista</summary>

Los botones se usan para enviar datos o realizar una acción en pantalla que no desplaza el foco del teclado. Puedes añadir `type="button"` a un elemento `button` para evitar que el navegador intente enviar la información del formulario al activarlo.

</details>

- [ ] Ofrece un enlace de salto y asegúrate de que es visible cuando recibe el foco ([evitar bloques](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)).

<details>
<summary>Pista</summary>

```html
<a href="#main">Saltar al contenido principal</a>
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/about">Sobre nosotros</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>
<main id="main">
  <!-- contenido específico de la página -->
</main>
```

Un enlace de salto permite acceder rápidamente al contenido principal de una página o vista. Así una persona puede saltarse fácilmente el contenido que se repite en todo el sitio, como la navegación principal o un buscador persistente.

</details>

- [ ] Identifica los enlaces que se abren en una pestaña o ventana nueva ([avisar a las personas antes de abrir una ventana nueva](https://www.w3.org/TR/WCAG20-TECHS/G201.html)).

<details>
<summary>Pista</summary>

Lo ideal es evitar los enlaces que se abren en una pestaña o ventana nueva. Si alguno lo hace, asegúrate de que ese comportamiento se comunica de forma clara para todo el mundo. Así las personas entenderán qué va a pasar antes de activar el enlace. Aunque técnicamente esta técnica no es obligatoria para cumplir la norma, es una fuente de frustración citada con frecuencia por personas que usan muchos tipos distintos de tecnologías de apoyo.

</details>

#### Formularios

Los formularios permiten a las personas introducir información en una web para procesarla y manipularla.

- [ ] Todos los campos de un formulario están asociados a su elemento `label` correspondiente ([comprensión de «Al introducir datos»](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html)).

<details>
<summary>Pista</summary>

Usa una pareja `for`/`id` para garantizar el máximo nivel de compatibilidad con navegadores y tecnologías de apoyo.

</details>

- [ ] Usa los elementos `fieldset` y `legend` cuando corresponda ([información y relaciones](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)).

<details>
<summary>Pista</summary>

¿Tu formulario contiene varias secciones de campos relacionados? Usa `fieldset` para agruparlos y `legend` para indicar para qué sirve cada sección.

</details>

- [ ] Los campos usan `autocomplete` cuando corresponde ([identificar el propósito de los campos](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)).

<details>
<summary>Pista</summary>

[Ofrecer un mecanismo](https://www.w3.org/TR/html52/sec-forms.html#sec-autofill) que ayude a las personas a rellenar de forma más rápida, sencilla y precisa los campos que piden información habitual (por ejemplo, nombre, dirección o número de teléfono).

</details>

- [ ] Asegúrate de que los errores de los campos se muestran en una lista encima del formulario tras enviarlo ([identificación de errores](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)).

<details>
<summary>Pista</summary>

Así las personas que usan tecnologías de apoyo pueden hacerse rápidamente una idea general de qué problemas hay en el formulario. Esto es especialmente importante en formularios largos con muchos campos. Asegúrate de que cada error de la lista enlaza también con el campo correspondiente que tiene el dato incorrecto.

</details>

- [ ] Asocia cada mensaje de error con el campo al que corresponde ([identificación de errores](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)).

<details>
<summary>Pista</summary>

Técnicas como [usar `aria-describedby`](https://developer.paciellogroup.com/blog/2018/09/describing-aria-describedby/) permiten a las personas que usan tecnologías de apoyo entender más fácilmente la diferencia entre el campo y el mensaje de error asociado.

</details>

#### Multimedia

El contenido multimedia incluye contenidos como audio y vídeo pregrabados y en directo.

- [ ] Asegúrate de que el contenido multimedia no se reproduce automáticamente ([control del audio](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html)).

<details>
<summary>Pista</summary>

El vídeo y el audio inesperados pueden distraer y molestar, sobre todo a personas con ciertos tipos de discapacidad cognitiva, como el TDAH.

</details>

- [ ] Comprueba que todo el contenido multimedia se puede pausar ([teclado](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)).

<details>
<summary>Pista</summary>

Ofrece una función global de pausa en cualquier elemento multimedia. Si el dispositivo tiene teclado, asegúrate de que pulsar la `barra espaciadora` pausa la reproducción. Asegúrate también de no interferir con la capacidad de la `barra espaciadora` de desplazar la página o vista cuando el foco no está en un control de formulario.

</details>

#### Animación

Contenido que se mueve, ya sea por sí solo o cuando lo activa una persona al usar un control.

- [ ] Asegúrate de que las animaciones son sutiles y no destellan demasiado ([umbral de tres destellos o menos](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)).

<details>
<summary>Pista</summary>

Ciertos tipos de animaciones estroboscópicas o con destellos pueden desencadenar crisis epilépticas. Otras pueden distraer y molestar, sobre todo a personas con ciertos tipos de discapacidad cognitiva, como el TDAH.

</details>

- [ ] Ofrece un mecanismo para pausar el vídeo de fondo ([pausar, detener, ocultar](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)).

<details>
<summary>Pista</summary>

El vídeo de fondo puede distraer, sobre todo si hay contenido colocado encima.

</details>

- [ ] Asegúrate de que todas las animaciones respetan la media query `prefers-reduced-motion` ([animación a partir de interacciones](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

<details>
<summary>Pista</summary>

Elimina las animaciones cuando esté activado el ajuste de «reducir movimiento». Si la animación es necesaria para comunicar el significado de un concepto, haz que dure más y vaya más despacio.

</details>

#### Contraste de color

El contraste de color indica lo legibles que son los colores cuando se colocan unos junto a otros o unos encima de otros.

- [ ] Para cumplir el nivel AA se necesita una relación de contraste de 4,5:1 para el texto de tamaño normal, y de 3:1 para iconos, bordes de los campos, botones de opción, casillas de verificación, etc. ([contraste](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)).
- [ ] Revisa los colores personalizados de `::selection`.

<details>
<summary>Pista</summary>

¿Es suficiente el contraste de color que has definido en [tu declaración CSS de `::selection`](https://developer.mozilla.org/es/docs/Web/CSS/::selection)? Si no, puede que alguien no consiga leer el texto cuando lo seleccione.

</details>

#### Móvil / táctil

- [ ] Comprueba que la web se puede girar a cualquier orientación ([orientación](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)).
- [ ] Elimina el desplazamiento horizontal ([reflujo](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)).

<details>
<summary>Pista</summary>

Obligar a desplazarse horizontalmente puede resultar difícil para algunas personas y molesto para todas.

</details>

- [ ] Asegúrate de que los iconos de botones y enlaces se pueden activar con facilidad ([tamaño del objetivo](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)).

<details>
<summary>Pista</summary>

Conviene asegurarse de que elementos como los menús hamburguesa, los iconos de redes sociales, los visores de galerías y otros controles táctiles se pueden usar con una amplia variedad de tamaños de mano y de lápiz óptico.

</details>

- [ ] Asegúrate de que hay espacio suficiente entre los elementos interactivos para dejar una zona por la que desplazarse ([evitar bloques](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)).

<details>
<summary>Pista</summary>

Algunas personas con problemas de control motor, como temblores en las manos, pueden tener muchas dificultades para desplazarse más allá de elementos interactivos que no tienen espacio entre ellos.

</details>

## Buenas noticias

La accesibilidad nunca puede ser perfecta, pero si piensas de forma inclusiva desde la planificación, pasando por el prototipado, hasta el código, puedes reducir a minutos el tiempo que dedicas a programarla. Nunca había sido tan fácil.

[Esta guía es estupenda si quieres seguir aprendiendo](https://www.accessibility-developer-guide.com/introduction/); también tienes checklists visuales de todos los criterios WCAG [en CodePen](https://codepen.io/weboverhauls/full/zYvopYE), o [puedes pedirle a Copilot](https://github.blog/developer-skills/github/prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/) que sea tu asistente personal de accesibilidad. Además, los [principios de diseño inclusivo](https://inclusivedesignprinciples.info/) pueden ser muy útiles para colaborar en equipo.

Y recuerda:

![Imagen de cierre del taller original](https://github.com/user-attachments/assets/4f1419f3-2012-4d50-bd1d-587628bf4778)

---

<details>
<summary>Licencia del documento original (MIT)</summary>

MIT License

Copyright (c) 2024 David Jensenius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details>
