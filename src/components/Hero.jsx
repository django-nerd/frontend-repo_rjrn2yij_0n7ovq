import { Paintbrush, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 mb-6 text-sm font-medium">
              <Paintbrush className="w-4 h-4" />
              Premium Painting & Decorating
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Transform your space with flawless finishes
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-prose">
              We deliver meticulous interior and exterior painting, wallpapering, and decorating services for homes and businesses. Clean lines, durable coatings, and a spotless site—every time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 shadow-sm transition"
              >
                <Phone className="w-5 h-5" />
                Get a free quote
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold px-5 py-3 bg-white transition"
              >
                View recent work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img alt="client" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white" />
                <img alt="client" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=128&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white" />
                <img alt="client" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <p>
                Trusted by 300+ homeowners and local businesses
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-200/40 to-sky-200/40 blur-2xl rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1581094478183-de6f28df38e6?q=80&w=1400&auto=format&fit=crop"
              alt="Painter at work"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
