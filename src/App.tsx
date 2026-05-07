import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import FeaturedVideoSection from './components/FeaturedVideoSection'
import PhilosophySection from './components/PhilosophySection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-black min-h-screen text-white antialiased">
      <Hero />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <Footer />
    </main>
  )
}

export default App
