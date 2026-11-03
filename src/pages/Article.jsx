import { allArticles, articleBody, leadStory } from '../data/articles.js'

export default function Article({ id }) {
  const a = allArticles.find((x) => x.id === id) || leadStory

  return (
    <div className="article">
      <div className="breadcrumb">
        <span onClick={() => (window.location.hash = '#/')}>Portada</span> › <span>{a.kicker}</span>
      </div>
      <div className="article-title">{a.title}</div>
      <h2 className="article-sub">{a.summary}</h2>
      <div className="article-meta">
        <span className="byline">{a.author || 'Redacción'}</span>
        <span className="time">{a.time}</span>
        <div className="share">
          <button className="share-btn"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="3" cy="8" r="2" fill="#666" /><circle cx="13" cy="3" r="2" fill="#666" /><circle cx="13" cy="13" r="2" fill="#666" /><line x1="3" y1="8" x2="13" y2="3" stroke="#666" /><line x1="3" y1="8" x2="13" y2="13" stroke="#666" /></svg></button>
          <button className="share-btn"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 1h10v14l-5-4-5 4z" fill="none" stroke="#666" strokeWidth="1.5" /></svg></button>
          <div className="share-btn" title="Regalar este artículo"><svg width="16" height="16" viewBox="0 0 16 16"><rect x="2" y="6" width="12" height="9" fill="none" stroke="#666" /><rect x="1" y="4" width="14" height="3" fill="#666" /></svg></div>
          <a className="share-btn text" href="#">Comentarios (128)</a>
        </div>
      </div>
      <img className="article-img" src={a.image} />
      <div className="credit">{a.credit || 'Foto: Archivo'}</div>

      <div className="article-body">
        <p className="dropcap">{articleBody[0]}</p>
        <p>{articleBody[1]}</p>
        <h4>Qué dice el texto</h4>
        <p>{articleBody[2]}</p>
        <img src="https://picsum.photos/seed/mapa/700/400" className="article-inline" alt="mapa.png" />
        <div className="color-legend">
          <span className="sw red" /> <span className="sw green" />
        </div>
        <h2>Reacciones</h2>
        <p>{articleBody[3]}</p>
        <blockquote className="pullquote">"No es el acuerdo que queríamos, pero es el acuerdo que podíamos tener"</blockquote>
        <p className="paywall-fade">Para seguir leyendo este artículo, suscríbete. Los suscriptores tienen acceso ilimitado a todos los contenidos, newsletters exclusivas y la edición impresa en formato digital...</p>
        <div className="paywall-btn" onClick={() => alert('Gracias')}>Continuar</div>
      </div>
    </div>
  )
}
