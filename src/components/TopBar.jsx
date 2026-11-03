import { useState } from 'react'

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="icon-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="18" height="18" viewBox="0 0 18 18"><rect y="2" width="18" height="2" fill="#333" /><rect y="8" width="18" height="2" fill="#333" /><rect y="14" width="18" height="2" fill="#333" /></svg>
        </div>
        <button className="icon-btn" onClick={() => setSearchOpen(!searchOpen)}>
          <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="6.5" cy="6.5" r="5" stroke="#333" strokeWidth="2" fill="none" /><line x1="10.5" y1="10.5" x2="15" y2="15" stroke="#333" strokeWidth="2" /></svg>
        </button>
        {searchOpen && (
          <div className="search-box">
            <input type="text" placeholder="Buscar" />
            <div className="search-go">IR</div>
          </div>
        )}
        <div className="edition-links">
          <span className="edition active">ESPAÑA</span>
          <span className="edition">AMÉRICA</span>
          <span className="edition">ENGLISH</span>
        </div>
      </div>
      <div className="topbar-right">
        <a className="btn-subscribe" tabIndex="3">SUSCRÍBETE POR 0,50 €/SEMANA</a>
        <a className="btn-login" href="#" tabIndex="1">INICIAR SESIÓN</a>
      </div>

      {menuOpen && (
        <div className="side-menu">
          <div className="side-menu-close" onClick={() => setMenuOpen(false)}>✕</div>
          <div className="side-menu-title">Secciones</div>
          {['Portada', 'España', 'Internacional', 'Economía', 'Opinión', 'Tecnología', 'Ciencia', 'Salud', 'Deportes', 'Cultura', 'Estilo', 'Cocina', 'Juegos'].map((s) => (
            <div className="side-menu-item" key={s} onClick={() => setMenuOpen(false)}>{s}</div>
          ))}
        </div>
      )}
    </div>
  )
}
