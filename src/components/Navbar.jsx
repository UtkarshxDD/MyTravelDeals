import { useState } from 'react'

import logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-16 items-center justify-between relative">
          <a href="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <img src={logo} alt="MyTravelDeals" className="h-8 w-auto" />
          </a>

        <div className="hidden md:flex items-center gap-8">
            <a href="#offers" className="text-sm font-medium text-gray-700 hover:text-gray-900">Offers</a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900">Services</a>
            <a href="#trust" className="text-sm font-medium text-gray-700 hover:text-gray-900">Why Us</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-gray-900">Reviews</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-gray-900">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#lead" className="btn-primary px-3 py-2">Get Quote</a>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="grid gap-2">
            <a href="#offers" className="px-2 py-2 rounded hover:bg-gray-50">Offers</a>
            <a href="#services" className="px-2 py-2 rounded hover:bg-gray-50">Services</a>
            <a href="#trust" className="px-2 py-2 rounded hover:bg-gray-50">Why Us</a>
            <a href="#testimonials" className="px-2 py-2 rounded hover:bg-gray-50">Reviews</a>
            <a href="#faq" className="px-2 py-2 rounded hover:bg-gray-50">FAQ</a>
            <a href="#contact" className="px-2 py-2 rounded hover:bg-gray-50">Contact</a>
            <a href="#lead" className="mt-2 btn-primary px-3 py-2">Get Quote</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar


