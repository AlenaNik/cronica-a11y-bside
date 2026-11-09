#!/usr/bin/env node
// Calcula la relación de contraste WCAG 2.x entre dos colores hexadecimales.
// Uso: node contrast.mjs "#999999" "#ffffff"

const [fg, bg] = process.argv.slice(2)
if (!fg || !bg) {
  console.error('Uso: node contrast.mjs "#color-texto" "#color-fondo"')
  process.exit(1)
}

function parse(hex) {
  let h = hex.trim().replace(/^#/, '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new Error(`Color no válido: ${hex}`)
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
}

function luminance(hex) {
  const [r, g, b] = parse(hex).map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const [l1, l2] = [luminance(fg), luminance(bg)].sort((a, b) => b - a)
const ratio = (l1 + 0.05) / (l2 + 0.05)
const ok = (min) => (ratio >= min ? 'cumple' : 'no cumple')

console.log(`${fg} sobre ${bg}: ${ratio.toFixed(2)}:1`)
console.log(`- Texto normal (AA, 4,5:1): ${ok(4.5)}`)
console.log(`- Texto grande (AA, 3:1): ${ok(3)}`)
console.log(`- Elementos no textuales (AA, 3:1): ${ok(3)}`)
console.log(`- Texto normal (AAA, 7:1): ${ok(7)}`)
