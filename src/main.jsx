import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { installImageFallback } from './imageFallback.js'

installImageFallback()

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
