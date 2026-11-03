import { useEffect, useState } from 'react'

export default function NewsletterPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 6000)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-close" onClick={() => setShow(false)}>×</div>
        <img src="https://picsum.photos/seed/newsletter/520/200" className="popup-img" />
        <div className="popup-title">No te pierdas nada</div>
        <div className="popup-text">Recibe cada mañana las noticias más importantes en tu correo.</div>
        <input className="popup-input" placeholder="Tu email" />
        <div className="popup-btn" onClick={() => setShow(false)}>Quiero recibirla</div>
        <div className="popup-legal">Al suscribirte aceptas la política de privacidad.</div>
      </div>
    </div>
  )
}
