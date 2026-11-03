const items = [
  'ÚLTIMA HORA: El Congreso aprueba la reforma de la ley de vivienda',
  'Un terremoto de magnitud 5,1 sacude el sur de Italia sin causar víctimas',
  'La selección femenina se clasifica para la final del europeo',
  'El Banco Central mantiene los tipos de interés sin cambios',
  'Cortes de tráfico en el centro por la maratón del domingo',
]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-label">● EN DIRECTO</div>
      <div className="ticker-track">
        <div className="ticker-move">
          {[...items, ...items].map((t, i) => (
            <span className="ticker-item" key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
