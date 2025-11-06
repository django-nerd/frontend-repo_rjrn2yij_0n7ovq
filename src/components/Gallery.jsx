export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582582621959-48d959c71a8c?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recent Work</h2>
            <p className="mt-3 text-gray-600">A few before & afters and favourite projects.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-emerald-700 font-medium hover:underline">Request a quote</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className={`relative rounded-lg overflow-hidden ${i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img src={src} alt="Project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
