import React, { useState } from 'react'
import Logo from '../../assets/logo-removebg-preview.png'

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full border-b border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            aria-label="Open menu"
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-5 h-0.5 bg-slate-700 mb-1" />
            <div className="w-5 h-0.5 bg-slate-700 mb-1" />
            <div className="w-5 h-0.5 bg-slate-700" />
          </button>

          <img src={Logo} alt="NeoLifeSg" className="h-10 md:h-14 lg:h-16 object-contain" />
        </div>

      </div>

    </header>
  )
}

export default Header