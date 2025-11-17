import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_30%_-10%,rgba(244,63,94,0.08),transparent),radial-gradient(1200px_600px_at_70%_-10%,rgba(251,146,60,0.08),transparent)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <About />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
