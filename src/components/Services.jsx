import { Palette, Ruler, Wrench, Building, Check } from 'lucide-react'

export default function Services() {
  const items = [
    {
      icon: Palette,
      title: 'Interior & Exterior Painting',
      desc: 'Premium, low-VOC paints with meticulous prep for crisp lines and long-lasting protection.'
    },
    {
      icon: Ruler,
      title: 'Surface Preparation',
      desc: 'Filling, sanding, caulking, stain-blocking and priming to create a flawless base.'
    },
    {
      icon: Wrench,
      title: 'Repairs & Finishing',
      desc: 'Small plaster repairs, woodwork refinishing, trim, doors, frames and skirting boards.'
    },
    {
      icon: Building,
      title: 'Commercial & Rentals',
      desc: 'Flexible scheduling, tidy sites, and professional finishes for offices and landlords.'
    },
  ]

  const badges = ['Fully insured', 'Clean & tidy', 'Free quotes', '5★ rated']

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">Everything you need for a beautiful, durable finish.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <div className="w-11 h-11 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
              <Check className="w-4 h-4" /> {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
