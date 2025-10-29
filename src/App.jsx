import './App.css'
import Layout from './components/Layout'
import { FaShieldAlt, FaClock, FaStar } from 'react-icons/fa'
import OfferCard from './components/OfferCard'

function App() {
  return (
    <Layout>
      <section className="relative isolate w-full bg-transparent">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-textPrimary">
            Get Up to 75% OFF Your Next Trip!
    </h1>
          <p className="mt-6 text-xl sm:text-2xl text-textPrimary max-w-3xl mx-auto">
            Flights, hotels, and packages from trusted partners all at unbeatable prices.
          </p>
          <p className="mt-4 text-base sm:text-lg text-textSecondary max-w-3xl mx-auto">
            Don’t miss out on massive savings book now before these deals disappear! We compare top brands, secure real discounts, and support you 24/7.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#offers" className="btn-secondary px-7 py-3.5 text-base rounded-lg shadow-sm">Browse Offers</a>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center justify-center gap-2 rounded-lg border border-success/20 bg-success/10 px-4 py-3 text-base text-textPrimary">
              <FaShieldAlt className="text-success" /> <span className="font-semibold">100% Genuine</span> <span className="text-textSecondary">Verified partners</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg border border-secondary/20 bg-secondary/10 px-4 py-3 text-base text-textPrimary">
              <FaClock className="text-secondary" /> <span className="font-semibold">Fast Quotes</span> <span className="text-textSecondary">under 15 minutes</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-background px-4 py-3 text-base text-textPrimary">
              <FaStar className="text-accent" /> <span className="font-semibold">25k+ Happy Travelers</span>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-textPrimary">Hot offers right now</h2>
        <p className="mt-2 text-textSecondary">Grab limited-time savings up to 75% across categories. Deals update daily.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          <OfferCard
            title="Hotels"
            subtitle="Luxury stays worldwide"
            image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop"
            discountLabel="Save 70%"
            urgencyLabel="Limited Time"
          />
          <OfferCard
            title="Cruises"
            subtitle="Ocean adventures"
            image="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1600&auto=format&fit=crop"
            discountLabel="Up to 75%"
            urgencyLabel="Book Now"
          />
          <OfferCard
            title="Flights"
            subtitle="Best airfare deals"
            image="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            discountLabel="Save 60%"
            urgencyLabel="Today Only"
          />
          <OfferCard
            title="Tours"
            subtitle="Guided experiences"
            image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop"
            discountLabel="Up to 65%"
            urgencyLabel="Hot Deals"
          />
          <OfferCard
            title="Car Rentals"
            subtitle="Rental vehicles"
            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
            discountLabel="Save 50%"
            urgencyLabel="Last Chance"
          />
          <OfferCard
            title="Vacation Rentals"
            subtitle="Beach houses & villas"
            image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
            discountLabel="Up to 80%"
            urgencyLabel="Exclusive"
          />
          <OfferCard
            title="Vacation Insurance"
            subtitle="Travel protection"
            image="https://images.unsplash.com/photo-1560332944-d047e59ac9b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            discountLabel="Best Rates"
            urgencyLabel="Protect Now"
          />
        </div>
      </section>

      <section id="services" className="relative py-20 w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230077B6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Exclusive Partner Deals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-textPrimary mb-4">
              Explore More Of Our{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Deals Below</span>
            </h2>
            <p className="text-lg sm:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
              We compare across top brands and surface the biggest limited-time savings from trusted travel partners.
            </p>
          </div>

          {/* Deals Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8 lg:gap-12">
              
              {/* Expedia Deal */}
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-[500px] lg:h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1600&auto=format&fit=crop" 
                    alt="Expedia Travel Deals" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 md:top-6 md:left-6 md:right-6 flex justify-between items-start gap-2">
                    <div className="flex items-center gap-1 md:gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg max-w-[60%] sm:max-w-none">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_2012_logo.svg/1920px-Expedia_2012_logo.svg.png?20151206014301" 
                        alt="Expedia" 
                        className="h-3 md:h-5 w-auto"
                      />
                    </div>
                    <div className="bg-success text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap flex-shrink-0">
                      Save 75%+
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl text-center">
                      <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-textPrimary mb-2 md:mb-4">
                        Save up to 75% on flights, cruises, hotels and more
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-textSecondary mb-4 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                        Limited-time exclusive deals available now. Book your dream vacation with trusted partners.
                      </p>
                      
                      {/* Trust Indicators */}
                      <div className="flex items-center justify-center gap-2 md:gap-8 mb-4 md:mb-8 text-xs md:text-sm">
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-textSecondary hidden sm:inline">Verified Partner</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-textSecondary hidden sm:inline">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-textSecondary hidden lg:inline">Best Price Guarantee</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 md:gap-4">
                        <a 
                          href="#lead"
                          className="bg-primary hover:bg-primary/90 text-white px-6 md:px-12 py-2.5 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                          Unlock Sale Deals
                        </a>
                        <div className="text-xs md:text-sm text-textSecondary">Over 2,500 travelers saved today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotels.com Deal */}
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-[500px] lg:h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
                    alt="Hotels.com Deals" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 md:top-6 md:left-6 md:right-6 flex justify-between items-start gap-2">
                    <div className="flex items-center gap-1 md:gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg max-w-[60%] sm:max-w-none">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/16/Hotels.com_Logo_2023.svg" 
                        alt="Hotels.com" 
                        className="h-3 md:h-5 w-auto"
                      />
                    </div>
                    <div className="bg-secondary text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap flex-shrink-0">
                      Save 70%+
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl text-center">
                      <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-textPrimary mb-2 md:mb-4">
                        Save 70%+ on luxury stays and city breaks worldwide
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-textSecondary mb-4 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                        Discover amazing hotels and accommodations with exclusive member rates and perks.
                      </p>
                      
                      {/* Trust Indicators */}
                      <div className="flex items-center justify-center gap-2 md:gap-8 mb-4 md:mb-8 text-xs md:text-sm">
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-textSecondary hidden sm:inline">Verified Reviews</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-textSecondary hidden sm:inline">Free Cancellation</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-textSecondary hidden lg:inline">Best Price Match</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 md:gap-4">
                        <a 
                          href="#lead"
                          className="bg-secondary hover:bg-secondary/90 text-white px-6 md:px-12 py-2.5 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                          Find Best Hotels
                        </a>
                        <div className="text-xs md:text-sm text-textSecondary">Millions of verified hotel reviews</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Insurance Deal */}
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-[500px] lg:h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1560332944-d047e59ac9b2?q=80&w=1600&auto=format&fit=crop" 
                    alt="Travel Insurance" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 md:top-6 md:left-6 md:right-6 flex justify-between items-start gap-2">
                    <div className="flex items-center gap-1 md:gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg max-w-[60%] sm:max-w-none">
                      <span className="text-textPrimary font-bold text-xs md:text-base">🛡️ <span className="hidden sm:inline">Travel Insurance</span></span>
                    </div>
                    <div className="bg-accent text-textPrimary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap flex-shrink-0">
                      Best Rates
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl text-center">
                      <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-textPrimary mb-2 md:mb-4">
                        Best-value, comprehensive travel insurance from trusted providers
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-textSecondary mb-4 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                        Protect your trip with comprehensive coverage including medical, trip cancellation, and more.
                      </p>
                      
                      {/* Trust Indicators */}
                      <div className="flex items-center justify-center gap-2 md:gap-8 mb-4 md:mb-8 text-xs md:text-sm">
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-textSecondary hidden sm:inline">Licensed Providers</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-textSecondary hidden sm:inline">24/7 Emergency</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-textSecondary hidden lg:inline">Instant Coverage</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 md:gap-4">
                        <a 
                          href="#lead" 
                          className="bg-accent hover:bg-accent/90 text-textPrimary px-6 md:px-12 py-2.5 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                          Find Best Insurance
                        </a>
                        <div className="text-xs md:text-sm text-textSecondary">Trusted coverage from licensed providers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* VRBO Deal */}
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-[500px] lg:h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop" 
                    alt="VRBO Vacation Rentals" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 md:top-6 md:left-6 md:right-6 flex justify-between items-start gap-2">
                    <div className="flex items-center gap-1 md:gap-2 bg-white/95 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg max-w-[60%] sm:max-w-none">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Vrbo.svg/1920px-Vrbo.svg.png?20191107171133" 
                        alt="VRBO" 
                        className="h-3 md:h-5 w-auto"
                      />
                    </div>
                    <div className="bg-success text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap flex-shrink-0">
                      Save 75%
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl text-center">
                      <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-textPrimary mb-2 md:mb-4">
                        Beach houses, villas and family-ready homes up to 75% off
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-textSecondary mb-4 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                        Book unique vacation rentals for your next family getaway or romantic escape.
                      </p>
                      
                      {/* Trust Indicators */}
                      <div className="flex items-center justify-center gap-2 md:gap-8 mb-4 md:mb-8 text-xs md:text-sm">
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-textSecondary hidden sm:inline">Verified Properties</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-textSecondary hidden sm:inline">Family Friendly</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-textSecondary hidden lg:inline">Unique Stays</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 md:gap-4">
                        <a 
                          href="#lead" 
                          className="bg-success hover:bg-success/90 text-white px-6 md:px-12 py-2.5 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                          Find Best Rentals
                        </a>
                        <div className="text-xs md:text-sm text-textSecondary">Over 2 million vacation rentals worldwide</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 md:mt-16">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Ready to Save on Your Next Trip?
              </h3>
              <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 opacity-90 max-w-2xl mx-auto">
                Join thousands of travelers who save big with our exclusive partner deals and personalized service.
              </p>
              <a 
                href="#lead" 
                className="inline-flex items-center gap-2 bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              >
                Get Your Free Quote
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section id="testimonials" className="bg-gray-50 py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-textPrimary">Real travelers. Real savings.</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <figure className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="Sarah M." className="h-10 w-10 overflow-hidden rounded-full object-cover" />
                <figcaption className="text-sm">
                  <div className="font-semibold text-textPrimary">Sarah M.</div>
                  <div className="text-textSecondary">Saved $1,200 on Europe trip</div>
                </figcaption>
              </div>
              <blockquote className="mt-3 text-sm text-textPrimary">"Amazing! Found flights to Paris for $450 when everyone else was charging $800+. The team was incredibly helpful throughout the booking process. Highly recommend!"</blockquote>
            </figure>
            <figure className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <img src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="Michael R." className="h-10 w-10 overflow-hidden rounded-full object-cover" />
                <figcaption className="text-sm">
                  <div className="font-semibold text-textPrimary">Michael R.</div>
                  <div className="text-textSecondary">Saved $800 on family vacation</div>
                </figcaption>
              </div>
              <blockquote className="mt-3 text-sm text-textPrimary">"Booked a 7-day Caribbean cruise for my family of 4. Saved over $800 compared to direct booking. The customer service was outstanding and everything went smoothly."</blockquote>
            </figure>
            <figure className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-3">
                <img src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Emma L." className="h-10 w-10 overflow-hidden rounded-full object-cover" />
                  <figcaption className="text-sm">
                  <div className="font-semibold text-textPrimary">Emma L.</div>
                  <div className="text-textSecondary">Saved $600 on business trip</div>
                  </figcaption>
                </div>
              <blockquote className="mt-3 text-sm text-textPrimary">"Needed last-minute flights for a business trip to Tokyo. They found me a great deal that saved me $600 compared to other sites. Quick response and professional service!"</blockquote>
              </figure>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-textPrimary">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {[
              {q:'Are you an airline or OTA?', a:'We are an affiliate-led travel desk partnering with top suppliers to secure verified deals.'},
              {q:'How do I get a quote?', a:'Submit the form with your route/dates or ping us on WhatsApp. We respond within 15 minutes.'},
              {q:'Is my booking protected?', a:'Yes. All bookings follow supplier terms with clear refunds/cancellation policies shared upfront.'},
            ].map((f, idx) => (
              <details key={f.q} className="group p-4" {...(idx===0?{open:true}:{})}>
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                  {f.q}
                  <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded bg-secondary/10 text-textPrimary group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-2 text-sm text-textSecondary">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default App
