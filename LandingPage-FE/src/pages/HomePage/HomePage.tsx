import React, { useState } from 'react'
import Yeobo from '../../assets/yeobo.jpeg'
import Logo from '../../assets/logo-removebg-preview.png'
import whatsappIcon from '../../assets/waIcon.svg'

const products = [
	{ id: 1, name: 'Yeobo Skincare', price: 'Rp. 1.150.000', desc: 'Lightweight daily cleanser', image: Yeobo },
]

const HomePage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
       {/* Top bar */}
      <header className="w-full border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded-md hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {/* simple hamburger */}
              <div className="w-5 h-0.5 bg-slate-700 mb-1" />
              <div className="w-5 h-0.5 bg-slate-700 mb-1" />
              <div className="w-5 h-0.5 bg-slate-700" />
            </button>

            {/* use logo image for brand */}
            <img src={Logo} alt="NeoLifeSg" className="h-10 md:h-14 lg:h-16 object-contain" />
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-700">
            <a href="#" className="hover:text-slate-900">Shop</a>
            <a href="#" className="hover:text-slate-900">Beauty</a>
            <a href="#" className="hover:text-slate-900">About</a>
            <a href="#" className="hover:text-slate-900">Help</a>
            <a href="#" className="hover:text-slate-900">Journal</a>
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-md hover:bg-slate-100">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
              </svg>
            </button>

            <button className="px-3 py-2 rounded-md text-sm font-medium bg-transparent text-slate-700 hover:text-slate-900">Sign in</button>
            <button className="px-4 py-2 rounded-md bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600">Shop</button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white shadow-sm">
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#" className="py-2 text-slate-700">Shop</a>
              <a href="#" className="py-2 text-slate-700">Beauty</a>
              <a href="#" className="py-2 text-slate-700">About</a>
              <a href="#" className="py-2 text-slate-700">Help</a>
              <a href="#" className="py-2 text-slate-700">Journal</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-sky-500">New collection</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 md:text-left">
              Clean, effortless beauty for every day
            </h1>
            <p className="mt-2 text-lg text-slate-600 max-w-xl">
              Lightweight formulas and curated routines to simplify your morning — crafted with care and science.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold shadow">Shop the collection</button>
              <button className="px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-700 hover:text-slate-900">Learn more</button>
            </div>

            <div className="mt-6 flex gap-8 text-sm text-slate-600">
              <div><strong className="text-slate-900">100k+</strong> customers</div>
              <div><strong className="text-slate-900">4.8</strong> average rating</div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            {/* Image placeholder (keep image assets blank for now) */}
            <div className="w-80 h-96 rounded-3xl bg-gradient-to-tr from-sky-200 to-sky-100 flex items-center justify-center">
              <div className="w-48 h-80 bg-slate-50 rounded-xl flex items-center justify-center text-sm text-slate-700">IMAGE</div>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Produk Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <article key={p.id} className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 rounded-lg object-cover mb-4"
                />
                 <h3 className="text-lg font-semibold">{p.name}</h3>
                 <p className="text-sm text-slate-600 my-2">{p.desc}</p>
                 <div className="flex items-center justify-between mt-4">
                   <div className="text-slate-900 font-semibold">{p.price}</div>
                 </div>
               </article>
             ))}
           </div>
         </section>

        {/* Testimonials */}
        <section className="w-full border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Testimoni</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <blockquote className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <p className="text-slate-700">"Gentle on skin and truly effective. My morning routine is so much simpler."</p>
                <footer className="mt-4 text-sm text-sky-500">— Alex</footer>
              </blockquote>

              <blockquote className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <p className="text-slate-700">"Lovely textures and the packaging feels premium. Will repurchase."</p>
                <footer className="mt-4 text-sm text-sky-500">— Morgan</footer>
              </blockquote>

              <blockquote className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <p className="text-slate-700">"My skin looks brighter after a week — impressed."</p>
                <footer className="mt-4 text-sm text-sky-500">— Sam</footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-semibold text-slate-900">Hubungi Kami</h2>

          <a
            href="https://wa.me/6281283822163?text=Halo%2C%20saya%20tertarik%20untuk%20join%20member%21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#20b65a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  
        {/* Footer */}
       <footer className="w-full border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-slate-700">
          <div>
            <div className="text-2xl font-extrabold tracking-wide text-slate-900">NeoLifeSg</div>
            <p className="mt-2 text-slate-600">Everyday beauty routines made simple.</p>
          </div>

          <div>
             <h4 className="text-slate-900 font-semibold mb-2">Shop</h4>
             <ul className="space-y-1">
               <li><a href="#" className="hover:text-slate-900">All products</a></li>
               <li><a href="#" className="hover:text-slate-900">Kits</a></li>
               <li><a href="#" className="hover:text-slate-900">New arrivals</a></li>
             </ul>
           </div>
 
          <div>
             <h4 className="text-slate-900 font-semibold mb-2">Company</h4>
             <ul className="space-y-1">
               <li><a href="#" className="hover:text-slate-900">About</a></li>
               <li><a href="#" className="hover:text-slate-900">Careers</a></li>
               <li><a href="#" className="hover:text-slate-900">Press</a></li>
             </ul>
           </div>
 
          <div>
             <h4 className="text-slate-900 font-semibold mb-2">Support</h4>
             <ul className="space-y-1">
               <li><a href="#" className="hover:text-slate-900">FAQ</a></li>
               <li><a href="#" className="hover:text-slate-900">Contact</a></li>
               <li><a href="#" className="hover:text-slate-900">Shipping</a></li>
             </ul>
           </div>
         </div>
  
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 text-sm text-slate-600">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>© {new Date().getFullYear()} NeoLifeSg. All rights reserved.</div>
              <div className="flex gap-4 mt-3 md:mt-0">
               <a href="#" className="hover:text-slate-900">Privacy</a>
               <a href="#" className="hover:text-slate-900">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
	  )
	}
 
export default HomePage;