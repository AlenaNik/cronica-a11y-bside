# La Crónica Diaria — proyecto de prácticas de accesibilidad

> [!WARNING]
> **Este proyecto es inaccesible a propósito.** Es un periódico digital ficticio, inspirado en la
> maquetación de los grandes diarios internacionales, que contiene **barreras de accesibilidad
> intencionadas** para auditarlas y corregirlas en clase. No lo uses como referencia de buenas prácticas.

Proyecto creado para el bloque **«Diseño sin barreras: accesibilidad e inclusión en la era de la IA»**
del curso de accesibilidad de **[B:side Academy](https://bsideacademy.com/)**, impartido por Alena Nikolaeva.

*La Crónica Diaria* es un medio inventado: los nombres, las noticias, las personas y los datos son ficticios
y las imágenes son fotografías aleatorias de [Lorem Picsum](https://picsum.photos/).

🔗 **Demo:** https://alenanik.github.io/cronica-a11y-bside/ (GitHub Pages)

## Qué vamos a hacer

A lo largo del bloque analizaremos esta web aplicando el checklist de diseño accesible
(WCAG 2.2, niveles A y AA) y usaremos Claude y GitHub Copilot como copilotos para auditar, redactar y
proponer correcciones, **verificando siempre lo que propone la IA**.

### Checkpoints de la auditoría

| # | Checkpoint | Qué revisaremos |
|---|---|---|
| 1 | **Color y contraste** | Herramientas de verificación y cómo pedir a Claude que evalúe combinaciones de color. |
| 2 | **Encabezados y landmarks** | Estructura semántica de la página. |
| — | *Demo en directo* | Usar Claude para revisar una jerarquía de encabezados y reescribir un fragmento de copy con lenguaje claro. |
| 3 | **Contenido** | Lenguaje claro, direccionalidad y truncamiento. |
| 4 | **Imágenes y gráficos** | Alt-text con criterio; Claude como generador de borradores que siempre hay que validar. |
| 5 | **Interactividad** | Foco visible, orden de foco, botones y controles. |
| 6 | **Formularios** | Etiquetas claras, instrucciones y errores bien ubicados (página **Contacto**). |
| 7 | **Layout** | Reflujo, zoom y adaptación a distintas pantallas. |
| 8 | **Teclado** | Navegación completa sin ratón. |

### Dónde buscar

- **Portada** (`#/`): cabecera, navegación, ticker de última hora, noticia principal con gráfico,
  carrusel de fotos, opinión, lo más leído, juegos, podcast, publicidad, pop-up de newsletter y banner de cookies.
- **Artículo** (`#/articulo/cumbre-clima`, o pulsa en cualquier noticia): estructura del texto, mapa,
  botones de compartir, muro de pago.
- **Contacto** (`#/contacto`, en el menú): formulario completo.

## Materiales del repositorio

- [`CHECKLIST.md`](CHECKLIST.md): checklist de accesibilidad paso a paso para seguir trabajando después del curso
  (traducción al español del taller [2024-react-alicante](https://github.com/david-workshops/2024-react-alicante)).
- [`ACCESSIBILITY.md`](ACCESSIBILITY.md): plantilla de compromiso de accesibilidad para que la completes con tu auditoría
  (basada en el proyecto [ACCESSIBILITY.md](https://mgifford.github.io/ACCESSIBILITY.md/) de Mike Gifford).

## Trabajar con Claude (u otro agente de IA)

El repositorio incluye [`CLAUDE.md`](CLAUDE.md) con instrucciones para agentes: cómo ejecutar el proyecto,
dónde está cada cosa y cómo deben acompañarte (cambios pequeños, explicación del criterio WCAG de cada
cambio y recordatorio de que hay que comprobarlo a mano). Claude Code lo lee automáticamente.
[`AGENTS.md`](AGENTS.md) y [`.github/copilot-instructions.md`](.github/copilot-instructions.md)
remiten a él para otros agentes y para GitHub Copilot.

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

## Herramientas recomendadas

- [WAVE](https://wave.webaim.org/extension/), [axe DevTools](https://www.deque.com/axe/devtools/) y [HeadingsMap](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
- [Colour Contrast Checker](https://colourcontrast.cc/) o el [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Un lector de pantalla: VoiceOver (macOS/iOS), NVDA (Windows) o TalkBack (Android)
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)

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
4. Documenta en tu `ACCESSIBILITY.md` qué propuso la IA, qué aceptaste y qué tuviste que corregir o descartar.

---

Proyecto educativo sin relación con ningún medio de comunicación real.
