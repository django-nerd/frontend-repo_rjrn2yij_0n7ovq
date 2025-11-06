import { Paintbrush, Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-emerald-600 text-white">
            <Paintbrush className="w-4 h-4" />
          </span>
          Perfect Finish Decorators
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#gallery" className="hover:text-gray-900">Gallery</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-3 py-2">
            <Phone className="w-4 h-4" /> Free Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
