import { leadStory, topStories, moreStories, opinion, markets, mostRead } from '../data/articles.js'
import Carousel from '../components/Carousel.jsx'
import EmissionsChart from '../components/EmissionsChart.jsx'

const go = (id) => (window.location.hash = '#/articulo/' + id)

export default function Home() {
  return (
    <div className="home">
      <div className="markets-bar">
        {markets.map((m) => (
          <div className="market" key={m.name}>
            <span className="market-name">{m.name}</span>
            <span className="market-value">{m.value}</span>
            <span className={m.up ? 'market-up' : 'market-down'}>{m.change}</span>
          </div>
        ))}
      </div>

      <div className="grid-top">
        <div className="lead">
          <div className="live-tag"><span className="live-dot" /> {leadStory.kicker}</div>
          <h3 className="lead-title" onClick={() => go(leadStory.id)}>{leadStory.title}</h3>
          <div className="lead-summary truncate-3">{leadStory.summary}</div>
          <ul className="lead-bullets">
            {leadStory.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <div className="byline">{leadStory.author} · <span className="time">{leadStory.time}</span> · <span className="readtime">{leadStory.readTime}</span></div>
        </div>
        <div className="lead-media">
          <img src={leadStory.image} onClick={() => go(leadStory.id)} />
          <div className="credit">{leadStory.credit}</div>
          <EmissionsChart />
        </div>
        <div className="side-col">
          <div className="section-label">MÁS NOTICIAS</div>
          {topStories.map((s) => (
            <div className="side-story" key={s.id} onClick={() => go(s.id)}>
              <img src={s.image} alt={s.image.split('/').slice(-3)[0] + '.jpg'} />
              <div className="kicker">{s.kicker}</div>
              <h5 className="side-title truncate-2">{s.title}</h5>
              <div className="side-summary truncate-2">{s.summary}</div>
              <div className="meta">{s.time} · {s.readTime}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rule" />

      <h1 className="tiny-heading">Lo último</h1>
      <div className="grid-more">
        {moreStories.map((s) => (
          <div className="card" key={s.id}>
            <img src={s.image} alt="imagen" />
            <div className="kicker">{s.kicker}</div>
            <h4 className="card-title">{s.title}</h4>
            <div className="meta">{s.time}</div>
            <a className="read-more" onClick={() => go(s.id)}>Leer más</a>
          </div>
        ))}
      </div>

      <div className="rule" />

      <div className="grid-split">
        <div className="gallery-block">
          <h2 className="block-title">Fotografía</h2>
          <Carousel />
        </div>
        <div className="opinion-block">
          <div className="block-title">Opinión</div>
          {opinion.map((o) => (
            <div className="opinion-item" key={o.id} onClick={() => go(o.id)}>
              <img src={o.avatar} className="avatar" alt={'Fotografía de ' + o.author + ', columnista de La Crónica Diaria, sonriendo frente a una pared blanca con una camisa de color azul claro'} />
              <div>
                <div className="opinion-author">{o.author.toUpperCase()}</div>
                <h6 className="opinion-title">{o.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rule" />

      <div className="grid-bottom">
        <div className="most-read">
          <div className="block-title">Lo más leído</div>
          <ol>
            {mostRead.map((m, idx) => (
              <li key={idx}><span className="most-read-text">{m}</span></li>
            ))}
          </ol>
        </div>

        <div className="games-promo">
          <img src="https://picsum.photos/seed/juegos/600/300" />
          <div className="games-overlay">
            <div className="games-title">Juegos</div>
            <div className="games-text">Crucigrama, sudoku y el reto de palabras diario. Pulsa el botón verde para jugar.</div>
            <div className="games-buttons">
              <div className="game-btn green">▶</div>
              <div className="game-btn grey">?</div>
            </div>
          </div>
        </div>

        <div className="podcast">
          <div className="block-title">El podcast de la mañana</div>
          <img src="https://picsum.photos/seed/podcast/360/200" />
          <div className="podcast-controls">
            <button className="pc-btn"><svg width="14" height="14" viewBox="0 0 14 14"><polygon points="2,1 13,7 2,13" fill="#fff" /></svg></button>
            <div className="pc-progress"><div className="pc-bar" /></div>
            <span className="pc-time">00:00 / 24:13</span>
            <button className="pc-btn small"><svg width="12" height="12" viewBox="0 0 12 12"><rect x="1" y="4" width="3" height="4" fill="#fff" /><polygon points="4,4 9,1 9,11 4,8" fill="#fff" /></svg></button>
          </div>
          <div className="podcast-desc">Episodio 214 · Sin transcripción disponible</div>
        </div>
      </div>

      <div className="ad-slot">
        <div className="ad-label">PUBLICIDAD</div>
        <img src="https://picsum.photos/seed/anuncio/970/250" />
        <div className="ad-text">¡OFERTA FLASH! -50 % SOLO HOY · Termina en 00:04:59</div>
      </div>
    </div>
  )
}
