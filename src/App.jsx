import Header from './components/Header'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import RulesSection from './components/RulesSection'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <FeatureSection />
        <RulesSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
