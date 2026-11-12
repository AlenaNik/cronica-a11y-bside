import { asset } from '../data/articles.js'

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
        <img src={asset('sol')} className="weather-icon" />
        <span className="weather-temp">18°C</span>
        <span className="weather-range">21° / 12°</span>
      </div>
    </div>
  )
}
