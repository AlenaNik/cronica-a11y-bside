export default function Masthead() {
  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <div className="masthead">
      <div className="masthead-side masthead-date">
        <div className="date-main">{today}</div>
        <div className="date-sub">Edición impresa de hoy</div>
      </div>
      <div className="masthead-logo" onClick={() => (window.location.hash = '#/')}>
        La Crónica Diaria
      </div>
      <div className="masthead-side masthead-weather">
        <img src="https://picsum.photos/seed/sol/40/40" className="weather-icon" />
        <span className="weather-temp">18°C</span>
        <span className="weather-range">21° / 12°</span>
      </div>
    </div>
  )
}
