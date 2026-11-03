import { useState } from 'react'

const sections = {
  'España': ['Política', 'Sociedad', 'Comunidades', 'Tribunales'],
  'Internacional': ['Europa', 'América', 'Asia', 'Oriente Medio', 'África'],
  'Economía': ['Mercados', 'Empresas', 'Vivienda', 'Mis derechos'],
  'Opinión': ['Editoriales', 'Columnas', 'Cartas al director'],
  'Tecnología': ['Inteligencia artificial', 'Gadgets', 'Ciberseguridad'],
  'Ciencia': ['Clima', 'Espacio', 'Biología'],
  'Cultura': ['Libros', 'Cine', 'Música', 'Arte'],
  'Deportes': ['Fútbol', 'Baloncesto', 'Tenis', 'Motor'],
  'Estilo': ['Moda', 'Viajes', 'Cocina'],
  'Juegos': ['Crucigrama', 'Sudoku', 'Palabras'],
}

export default function NavBar() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="navbar" onMouseLeave={() => setHovered(null)}>
      <div className="navbar-inner">
        {Object.keys(sections).map((name) => (
          <span key={name} className="nav-item" onMouseEnter={() => setHovered(name)}>
            {name}
            <span className="nav-caret">▾</span>
          </span>
        ))}
        <span className="nav-item nav-contact" onClick={() => (window.location.hash = '#/contacto')}>Contacto</span>
      </div>
      {hovered && (
        <div className="mega-menu">
          <div className="mega-col">
            <div className="mega-title">{hovered}</div>
            {sections[hovered].map((s) => (
              <span className="mega-link" key={s}>{s}</span>
            ))}
          </div>
          <div className="mega-col mega-promo">
            <img src={`https://picsum.photos/seed/${encodeURIComponent(hovered)}/280/160`} />
            <div className="mega-promo-text">Lo más destacado de {hovered} esta semana</div>
          </div>
        </div>
      )}
    </div>
  )
}
