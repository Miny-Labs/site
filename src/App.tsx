import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchChanged from './components/SearchChanged'
import Mission from './components/Mission'
import Solution from './components/Solution'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen antialiased">
      <Navbar />
      <Hero />
      <SearchChanged />
      <Mission />
      <Solution />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
