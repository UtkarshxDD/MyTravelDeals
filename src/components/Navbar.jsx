import { useState } from 'react'
import logo from '../assets/logo.png'
import { trackButtonClick, trackNavigation } from '../utils/analytics.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (navItem, location) => {
    trackNavigation(navItem, location);
  };

  const handleButtonClick = (buttonLabel, location) => {
    trackButtonClick(buttonLabel, location);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-16 items-center justify-between relative">
          <a 
            href="/" 
            className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            onClick={() => handleNavClick('Logo/Home', 'navbar')}
          >
            <img src={logo} alt="MyTravelDeals" className="h-10 w-auto md:h-12 max-w-[180px] object-contain" />
          </a>

        <div className="hidden md:flex items-center gap-8">
            <a href="#offers" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => handleNavClick('Offers', 'navbar_desktop')}>Offers</a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => handleNavClick('Services', 'navbar_desktop')}>Services</a>
            <a href="#trust" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => handleNavClick('Why Us', 'navbar_desktop')}>Why Us</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => handleNavClick('Reviews', 'navbar_desktop')}>Reviews</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => handleNavClick('FAQ', 'navbar_desktop')}>FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => handleNavClick('Contact', 'navbar_desktop')}>Contact</a>
            <a href="#lead" className="btn-primary px-3 py-2" onClick={() => handleButtonClick('Get Quote', 'navbar_desktop')}>Get Quote</a>
          </div>

          <button 
            aria-label="Open menu" 
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" 
            onClick={() => {
              setIsOpen(!isOpen);
              handleButtonClick(isOpen ? 'Close Mobile Menu' : 'Open Mobile Menu', 'navbar_mobile');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="grid gap-2">
            <a href="#offers" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => handleNavClick('Offers', 'navbar_mobile')}>Offers</a>
            <a href="#services" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => handleNavClick('Services', 'navbar_mobile')}>Services</a>
            <a href="#trust" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => handleNavClick('Why Us', 'navbar_mobile')}>Why Us</a>
            <a href="#testimonials" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => handleNavClick('Reviews', 'navbar_mobile')}>Reviews</a>
            <a href="#faq" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => handleNavClick('FAQ', 'navbar_mobile')}>FAQ</a>
            <a href="#contact" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => handleNavClick('Contact', 'navbar_mobile')}>Contact</a>
            <a href="#lead" className="mt-2 btn-primary px-3 py-2" onClick={() => handleButtonClick('Get Quote', 'navbar_mobile')}>Get Quote</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar


