import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (measurementId && typeof window !== 'undefined') {
    ReactGA.initialize(measurementId);
    console.log('Google Analytics initialized with Measurement ID:', measurementId);
  }
};

// Track page views
export const trackPageView = (path) => {
  if (typeof window !== 'undefined') {
    ReactGA.send({ hitType: 'pageview', page: path || window.location.pathname });
  }
};

// Track button clicks
export const trackButtonClick = (buttonLabel, buttonLocation = 'unknown', additionalData = {}) => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category: 'Button Click',
      action: 'Click',
      label: buttonLabel,
      button_location: buttonLocation,
      ...additionalData,
    });
    console.log(`GA Event: Button Click - ${buttonLabel} (Location: ${buttonLocation})`);
  }
};

// Track external link clicks
export const trackExternalLink = (linkUrl, linkLabel, linkLocation = 'unknown') => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category: 'External Link',
      action: 'Click',
      label: linkLabel,
      link_url: linkUrl,
      link_location: linkLocation,
    });
    console.log(`GA Event: External Link - ${linkLabel} (Location: ${linkLocation})`);
  }
};

// Track navigation clicks
export const trackNavigation = (navItem, navLocation = 'navbar') => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category: 'Navigation',
      action: 'Click',
      label: navItem,
      nav_location: navLocation,
    });
    console.log(`GA Event: Navigation - ${navItem} (Location: ${navLocation})`);
  }
};

// Track offer card clicks
export const trackOfferClick = (offerTitle, offerType, offerLocation = 'offers_section') => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category: 'Offer Card',
      action: 'Click',
      label: offerTitle,
      offer_type: offerType,
      offer_location: offerLocation,
    });
    console.log(`GA Event: Offer Card - ${offerTitle} (Type: ${offerType})`);
  }
};

// Track partner deal clicks
export const trackPartnerDealClick = (partnerName, dealType, dealLocation = 'services_section') => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category: 'Partner Deal',
      action: 'Click',
      label: partnerName,
      deal_type: dealType,
      deal_location: dealLocation,
    });
    console.log(`GA Event: Partner Deal - ${partnerName} (Type: ${dealType})`);
  }
};

// Track section views (scroll tracking)
export const trackSectionView = (sectionName) => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category: 'Section View',
      action: 'View',
      label: sectionName,
    });
    console.log(`GA Event: Section View - ${sectionName}`);
  }
};

// Track user engagement
export const trackEngagement = (engagementType, details = {}) => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category: 'User Engagement',
      action: engagementType,
      ...details,
    });
    console.log(`GA Event: User Engagement - ${engagementType}`, details);
  }
};

