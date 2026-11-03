const cols = {
  'Noticias': ['Portada', 'España', 'Internacional', 'Economía', 'Ciencia', 'Salud'],
  'Opinión': ['Editoriales', 'Columnistas', 'Cartas', 'Tribunas'],
  'Cultura': ['Libros', 'Cine', 'Música', 'Series', 'Arte'],
  'Más': ['Juegos', 'Cocina', 'Podcasts', 'Newsletters', 'Hemeroteca'],
  'Cuenta': ['Suscríbete', 'Mi cuenta', 'Ayuda', 'Edición impresa'],
}

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">La Crónica Diaria</div>
      <div className="footer-cols">
        {Object.entries(cols).map(([title, links]) => (
          <div className="footer-col" key={title}>
            <div className="footer-col-title">{title}</div>
            {links.map((l) => (
              <a href="#" className="footer-link" key={l}>{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-social">
        <a href="https://example.com" target="_blank"><img src="https://picsum.photos/seed/s1/24/24" /></a>
        <a href="https://example.com" target="_blank"><img src="https://picsum.photos/seed/s2/24/24" /></a>
        <a href="https://example.com" target="_blank"><img src="https://picsum.photos/seed/s3/24/24" /></a>
        <a href="https://example.com" target="_blank"><img src="https://picsum.photos/seed/s4/24/24" /></a>
      </div>
      <div className="footer-bottom">
        © 2026 La Crónica Diaria (medio ficticio) · <a href="#">Aviso legal</a> · <a href="#">Privacidad</a> · <a href="#">Cookies</a> · <a href="#">Accesibilidad</a> · Para más información sobre nuestras condiciones <a href="#">haz clic aquí</a>.
      </div>
    </div>
  )
}
