import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Footer from './components/Footer'
import GalleryPage from './components/GalleryPage'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <GalleryPage />
      <Footer />
    </>
  </StrictMode>,
)
