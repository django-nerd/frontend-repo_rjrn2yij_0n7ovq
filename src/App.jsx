import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-600 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Perfect Finish Decorators. All rights reserved.</p>
          <p className="mt-2">Professional painting & decorating across Greater London.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
