import { useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div className="cookie-banner">
      <div className="cookie-text">
        Utilizamos cookies propias y de terceros para fines analíticos y para mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación. Puedes obtener más información y configurar tus preferencias <span className="cookie-link">aquí</span>.
      </div>
      <div className="cookie-actions">
        <div className="cookie-reject" onClick={() => setVisible(false)}>Rechazar</div>
        <div className="cookie-accept" onClick={() => setVisible(false)}>ACEPTAR Y CONTINUAR</div>
      </div>
    </div>
  )
}
