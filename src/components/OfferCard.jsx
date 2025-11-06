import { FaTag, FaClock } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { trackOfferClick, trackExternalLink } from '../utils/analytics.js'

function OfferCard({
  title,
  subtitle,
  image,
  discountLabel = 'Save 70%+',
  urgencyLabel = 'Limited Time',
  ctaText = 'Grab Deal Now',
  href = '#lead',
}) {
  const handleOfferClick = () => {
    if (href && href.startsWith('http')) {
      trackExternalLink(href, `${title} - ${ctaText}`, 'offer_card');
    } else {
      trackOfferClick(title, 'offer_card', 'offers_section');
    }
  };
  return (
    <article className="group overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
      <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute left-2 right-2 sm:left-4 sm:right-4 top-2 sm:top-4 flex flex-row items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-white/95 px-3 sm:px-3 py-1.5 sm:py-1 text-xs sm:text-xs font-semibold text-textPrimary shadow ring-1 ring-black/5">
            <FaClock className="text-secondary text-xs" /> <span className="hidden sm:inline">{urgencyLabel}</span><span className="sm:hidden">Limited Time</span>
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-success px-3 sm:px-3 py-1.5 sm:py-1 text-xs sm:text-xs font-semibold text-white shadow">
            <FaTag className="opacity-90 text-xs" /> <span className="hidden sm:inline">{discountLabel}</span><span className="sm:hidden">Save 70%</span>
          </span>
        </div>

        <div className="absolute bottom-2 sm:bottom-4 left-1/2 w-[95%] sm:w-[90%] -translate-x-1/2 text-white text-center">
          <div className="mx-auto max-w-[90%] sm:max-w-[85%]">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight drop-shadow-sm text-white">{title}</h3>
            {subtitle ? <p className="mt-1 text-xs sm:text-sm text-white/90 drop-shadow">{subtitle}</p> : null}
          </div>
          <div className="mt-2 sm:mt-3">
            <a 
              href={href} 
              {...(href && href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} 
              className="inline-flex items-center gap-1 sm:gap-2 rounded-lg bg-accent/95 px-4 sm:px-4 py-2.5 sm:py-2 text-sm sm:text-sm font-semibold text-textPrimary shadow hover:brightness-95 whitespace-nowrap"
              onClick={handleOfferClick}
            >
              <span className="text-base">🚀</span> <span className="hidden sm:inline">{ctaText}</span><span className="sm:hidden">Grab Deal Now</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default OfferCard

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  discountLabel: PropTypes.string,
  urgencyLabel: PropTypes.string,
  ctaText: PropTypes.string,
  href: PropTypes.string,
}


