// Las fotos vienen de picsum.photos. Si el servicio falla o tarda demasiado,
// se sustituyen por la ilustración local del mismo nombre (public/img/<nombre>.svg).
const PICSUM = /picsum\.photos\/seed\/([^/]+)\//
const TIMEOUT = 4000
const firstSeen = new WeakMap()
let picsumDown = false

function fallbackFor(img) {
  const m = img.getAttribute('src')?.match(PICSUM)
  return m ? `${import.meta.env.BASE_URL}img/${decodeURIComponent(m[1])}.svg` : null
}

function swap(img) {
  const fb = fallbackFor(img)
  if (fb) {
    picsumDown = true
    img.setAttribute('src', fb)
  }
}

export function installImageFallback() {
  document.addEventListener('error', (e) => {
    if (e.target instanceof HTMLImageElement) swap(e.target)
  }, true)

  setInterval(() => {
    const now = Date.now()
    document.querySelectorAll('img').forEach((img) => {
      if (!PICSUM.test(img.getAttribute('src') || '')) return
      if (picsumDown) return swap(img)
      if (!firstSeen.has(img) || firstSeen.get(img).src !== img.src) firstSeen.set(img, { src: img.src, t: now })
      const loaded = img.complete && img.naturalWidth > 0
      if (!loaded && now - firstSeen.get(img).t > TIMEOUT) swap(img)
    })
  }, 250)
}
