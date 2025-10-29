import PropTypes from 'prop-types'
import { FaShieldAlt, FaArrowRight, FaFire, FaCheckCircle, FaStar, FaUsers } from 'react-icons/fa'

function PartnerDealCard({
  brand,
  description,
  href,
  badge = 'Save 70%+ Today',
  backgroundImage,
  note = 'Over 2,500 travelers saved today',
  logoUrl,
  ctaLabel = 'Unlock sale deals',
}) {
  return (
    <article className="overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-sm ring-1 ring-black/5">
      <div className="relative min-h-[600px] sm:aspect-[16/7] lg:aspect-[16/6]">
        <img src={backgroundImage} alt={brand} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />

        {/* Top badges - positioned like in screenshot */}
        <div className="absolute inset-x-4 top-4 flex flex-row items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow ring-1 ring-black/5">
            <FaCheckCircle className="text-green-500 text-xs" />
            <span className="hidden sm:inline">Verified Partner</span>
            <span className="sm:hidden">Verified</span>
          </span>
          <span className="inline-flex items-center rounded-full bg-success px-4 py-2 text-sm font-semibold text-white shadow">
            {badge}
          </span>
        </div>

        {/* Main content card - positioned at bottom like screenshot */}
        <div className="absolute inset-x-4 bottom-4 sm:left-1/2 sm:top-1/2 sm:w-full sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2">
          <div className="bg-yellow-400 sm:bg-accent/95 p-6 sm:p-6 text-center shadow-lg rounded-2xl">
            {/* Logo badge above main card */}
            {logoUrl ? (
              <div className="mx-auto -mt-12 sm:-mt-10 mb-4 sm:mb-3 flex items-center justify-center rounded-full bg-white px-4 py-2 shadow ring-1 ring-black/5 w-fit">
                <img src={logoUrl} alt={`${brand} logo`} className="h-5 w-auto" />
              </div>
            ) : (
              <div className="mx-auto -mt-12 sm:-mt-10 mb-4 sm:mb-3 flex items-center justify-center rounded-full bg-white px-4 py-2 shadow ring-1 ring-black/5 w-fit">
                <span className="text-sm font-semibold text-textPrimary">{brand}</span>
              </div>
            )}
            
            {/* Main headline */}
            <h3 className="text-2xl sm:text-xl lg:text-2xl font-bold text-black leading-tight mb-4 text-center">Save 75% Or More on Your Next Travel Plans or Vacation</h3>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 mb-4 text-xs text-black/70">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUsers className="text-blue-500" />
                <span>25K+ Users</span>
              </div>
              <div className="flex items-center gap-1">
                <FaShieldAlt className="text-green-500" />
                <span>Secure</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-base sm:text-sm lg:text-base text-black/80 leading-relaxed mb-6 text-center">{description}</p>
            
            {/* CTA Button */}
            <a href={href} className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow hover:bg-black mb-4 whitespace-nowrap">
              <span className="truncate">{ctaLabel}</span> <FaArrowRight />
            </a>
            
            {/* Social proof with enhanced trust indicators */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-black/75 whitespace-nowrap">
                <FaFire className="text-red-500 text-xs sm:text-sm" /> 
                <span className="truncate">{note}</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-xs text-black/60">
                <span className="flex items-center gap-1">
                  <FaCheckCircle className="text-green-500 text-xs" />
                  <span>SSL Secured</span>
                </span>
                <span className="flex items-center gap-1">
                  <FaShieldAlt className="text-blue-500 text-xs" />
                  <span>Money Back</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

PartnerDealCard.propTypes = {
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  badge: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  note: PropTypes.string,
  logoUrl: PropTypes.string,
  ctaLabel: PropTypes.string,
}

export default PartnerDealCard


