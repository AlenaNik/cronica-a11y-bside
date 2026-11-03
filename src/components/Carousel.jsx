import { useEffect, useState } from 'react'
import { carousel } from '../data/articles.js'

export default function Carousel() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % carousel.length), 3500)
    return () => clearInterval(t)
  }, [])

  const item = carousel[i]
  return (
    <div className="carousel">
      <img src={item.image} alt="foto" />
      <div className="carousel-caption">{item.title}</div>
      <div className="carousel-arrow left" onClick={() => setI((i - 1 + carousel.length) % carousel.length)}>‹</div>
      <div className="carousel-arrow right" onClick={() => setI((i + 1) % carousel.length)}>›</div>
      <div className="carousel-dots">
        {carousel.map((c, idx) => (
          <span key={c.id} className={'dot' + (idx === i ? ' active' : '')} onClick={() => setI(idx)} />
        ))}
      </div>
    </div>
  )
}
