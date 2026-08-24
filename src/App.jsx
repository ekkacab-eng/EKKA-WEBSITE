import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page" id="top">
      <SiteHeader />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}
