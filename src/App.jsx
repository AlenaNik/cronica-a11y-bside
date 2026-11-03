import { useEffect, useState } from 'react'
import TopBar from './components/TopBar.jsx'
import Masthead from './components/Masthead.jsx'
import NavBar from './components/NavBar.jsx'
import Ticker from './components/Ticker.jsx'
import Footer from './components/Footer.jsx'
import NewsletterPopup from './components/NewsletterPopup.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import Home from './pages/Home.jsx'
import Article from './pages/Article.jsx'
import Contact from './pages/Contact.jsx'

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/')
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash || '#/')
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  let page
  if (hash.startsWith('#/articulo/')) {
    page = <Article id={hash.replace('#/articulo/', '')} />
  } else if (hash.startsWith('#/contacto')) {
    page = <Contact />
  } else {
    page = <Home />
  }

  return (
    <div className="app">
      <TopBar />
      <Masthead />
      <NavBar />
      <Ticker />
      <div className="content">{page}</div>
      <Footer />
      <NewsletterPopup />
      <CookieBanner />
    </div>
  )
}
