import { useEffect, useState } from 'react'

const empty = { nombre: '', apellidos: '', email: '', telefono: '', motivo: '', mensaje: '', dni: '', fecha: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [accept, setAccept] = useState(false)
  const [contactPref, setContactPref] = useState('')
  const [seconds, setSeconds] = useState(120)
  const [motivoOpen, setMotivoOpen] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setForm(empty)
          setErrors({})
          return 120
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = () => {
    const e = {}
    if (!form.nombre) e.nombre = true
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = true
    if (form.telefono && !/^\d{9}$/.test(form.telefono)) e.telefono = true
    if (!form.motivo) e.motivo = true
    if (form.mensaje.length < 50) e.mensaje = true
    if (!/^\d{8}[A-Z]$/.test(form.dni)) e.dni = true
    if (!accept) e.accept = true
    setErrors(e)
    if (Object.keys(e).length === 0) setSent(true)
  }

  if (sent) {
    return (
      <div className="contact">
        <div className="contact-ok">✓</div>
      </div>
    )
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <div className="contact">
      <div className="contact-heading">Contacta con la redacción</div>
      <div className="contact-intro">
        ¿Tienes una pista, una corrección o una queja? Rellena el formulario. Los campos en <span style={{ color: '#e33' }}>rojo</span> son obligatorios. Tienes un tiempo limitado para completarlo.
      </div>

      <div className="contact-grid">
        <div className="contact-form">
          {hasErrors && <div className="form-error-top">Error en el formulario</div>}

          <div className="row">
            <input className={'field' + (errors.nombre ? ' invalid' : '')} placeholder="Nombre" value={form.nombre} onChange={set('nombre')} autoComplete="off" />
            <input className="field" placeholder="Apellidos" value={form.apellidos} onChange={set('apellidos')} autoComplete="off" />
          </div>

          <input className={'field' + (errors.email ? ' invalid' : '')} placeholder="Email" value={form.email} onChange={set('email')} autoComplete="off" />

          <label className="lbl">Teléfono</label>
          <input id="telefono" className={'field' + (errors.telefono ? ' invalid' : '')} value={form.telefono} onChange={set('telefono')} />

          <label className="lbl" htmlFor="dni">Documento</label>
          <input id="telefono" className={'field' + (errors.dni ? ' invalid' : '')} placeholder="12345678Z" value={form.dni} onChange={set('dni')} />

          <div className="lbl">Motivo</div>
          <div className={'fake-select' + (errors.motivo ? ' invalid' : '')} onClick={() => setMotivoOpen(!motivoOpen)}>
            {form.motivo || 'Selecciona…'} <span className="fake-caret">▾</span>
            {motivoOpen && (
              <div className="fake-options">
                {['Enviar una pista', 'Solicitar una corrección', 'Suscripciones', 'Publicidad', 'Otro'].map((o) => (
                  <div className="fake-option" key={o} onClick={() => setForm({ ...form, motivo: o })}>{o}</div>
                ))}
              </div>
            )}
          </div>

          <div className="lbl">¿Cómo prefieres que te contactemos?</div>
          <div className="radios">
            {['Email', 'Teléfono', 'No contactar'].map((o) => (
              <span key={o} className="radio-wrap">
                <input type="radio" name="pref" checked={contactPref === o} onChange={() => setContactPref(o)} />
                {o}
              </span>
            ))}
          </div>

          <input type="text" className="field" placeholder="Fecha del suceso" value={form.fecha} onChange={set('fecha')} />

          <textarea className={'field area' + (errors.mensaje ? ' invalid' : '')} placeholder="Escribe tu mensaje" value={form.mensaje} onChange={set('mensaje')} />

          <div className="file-row">
            <div className="file-btn">📎</div>
            <span className="file-hint">Máx. 5 MB</span>
          </div>

          <div className="captcha">
            <img src="https://picsum.photos/seed/captcha/180/50?grayscale" />
            <input className="field small" placeholder="Código" />
            <div className="captcha-refresh">↻</div>
          </div>

          <div className="check-row" onClick={() => setAccept(!accept)}>
            <div className={'fake-check' + (accept ? ' on' : '') + (errors.accept ? ' invalid' : '')}>{accept ? '✓' : ''}</div>
            <span>He leído y acepto la <a href="#" target="_blank">política de privacidad</a></span>
          </div>

          <div className="form-actions">
            <div className="btn-submit" onClick={submit}>Enviar</div>
            <div className="btn-reset" onClick={() => { setForm(empty); setErrors({}) }}>Borrar</div>
          </div>
          <div className="timer">Sesión: {seconds}s</div>
        </div>

        <div className="contact-aside">
          <img src="https://picsum.photos/seed/redaccion/400/260" />
          <div className="aside-title">Nuestra redacción</div>
          <div className="aside-text">Calle Ficticia, 123 · 46001 Valencia</div>
          <div className="aside-text">Lunes a viernes, de 9 a 18 h</div>
          <img src="https://picsum.photos/seed/mapa-redaccion/400/220" className="aside-map" />
          <div className="aside-text">Para encontrarnos, busca el edificio con la puerta azul a la derecha del mapa.</div>
        </div>
      </div>
    </div>
  )
}
