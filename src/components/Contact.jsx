import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! We\'ll get back to you shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Get a free quote</h2>
            <p className="mt-3 text-gray-600">Tell us about your project and we\'ll respond within one business day.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-600" /> 0123 456 789</p>
              <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-600" /> hello@perfectfinish.co.uk</p>
              <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-emerald-600" /> Serving Greater London & surrounding areas</p>
            </div>
            <div className="mt-6 text-sm text-gray-500">Open Mon–Sat • Fully insured • Satisfaction guaranteed</div>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Project details</label>
                <textarea required rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3">
              <Send className="w-5 h-5" /> Send request
            </button>
            {status && <p className="mt-3 text-emerald-700 font-medium">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
