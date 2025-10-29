import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="mt-16 bg-background border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <img src={logo} alt="MyTravelDeals" className="h-8 w-auto" />
            </div>
            <p className="mt-3 text-sm text-textSecondary">Your trusted partner for flights, hotels, visas, insurance and complete travel packages worldwide.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-textPrimary">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-textSecondary">
              <li><a href="#services" className="hover:text-gray-900">Flights</a></li>
              <li><a href="#services" className="hover:text-gray-900">Hotels</a></li>
              <li><a href="#services" className="hover:text-gray-900">Holiday Packages</a></li>
              <li><a href="#services" className="hover:text-gray-900">Visa Assistance</a></li>
              <li><a href="#services" className="hover:text-gray-900">Travel Insurance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-textPrimary">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-textSecondary">
              <li><a href="#trust" className="hover:text-gray-900">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-gray-900">Reviews</a></li>
              <li><a href="#faq" className="hover:text-gray-900">FAQs</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-textPrimary">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-textSecondary">
              <li>Email: hello@mytraveldeals.example</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Mon-Sat 9:00-18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textSecondary">
          <p>© {new Date().getFullYear()} MyTravelDeals. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="/privacy" className="hover:text-gray-700">Privacy</a>
            <span aria-hidden>•</span>
            <a href="/terms" className="hover:text-gray-700">Terms</a>
            <span aria-hidden>•</span>
            <a href="/refunds" className="hover:text-gray-700">Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


