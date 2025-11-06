# Travel Website - MyTravelDeals

A React-based travel deals website with Google Analytics 4 integration for comprehensive user activity tracking.

## Features

- **Google Analytics 4 Integration**: Complete tracking of user activities, button clicks, navigation, and traffic sources
- **Button Tracking**: All buttons have descriptive labels for easy identification in GA4
- **External Link Tracking**: Tracks clicks on affiliate partner links
- **Navigation Tracking**: Tracks user navigation patterns
- **Offer Card Tracking**: Tracks clicks on travel offers
- **Partner Deal Tracking**: Tracks interactions with partner deals

## Google Analytics Setup

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select an existing one
3. Go to Admin → Data Streams → Web
4. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variable

Create a `.env` file in the root directory:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

**Note**: The `.env` file is gitignored for security. Never commit your Measurement ID to version control.

### 3. Tracked Events

The following events are automatically tracked:

#### Button Clicks
- **Hero Section**: "Browse Offers"
- **Navbar**: "Get Quote", "Open/Close Mobile Menu"
- **Partner Deals**: "Unlock Sale Deals", "Find Best Hotels", "Find Best Rentals"
- **Offer Cards**: Individual offer clicks (Hotels, Cruises, Flights, Tours, Car Rentals, Vacation Rentals)

#### Navigation
- **Navbar Links**: Offers, Services, Why Us, Reviews, FAQ, Contact
- **Footer Links**: Services (Flights, Hotels, Holiday Packages, Visa Assistance, Travel Insurance), Company (Why Choose Us, Reviews, FAQs, Contact)
- **Policy Links**: Privacy, Terms, Refunds

#### External Links
- All affiliate partner links (Expedia, Hotels.com, VRBO)
- External offer links

#### Events Tracked
All events include:
- **Category**: Type of interaction (Button Click, Navigation, External Link, Offer Card, Partner Deal)
- **Action**: The action performed (Click, View)
- **Label**: Descriptive label for easy identification
- **Location**: Where the interaction occurred (navbar_desktop, navbar_mobile, footer, hero_section, etc.)

### 4. Viewing Analytics Data

1. Go to your Google Analytics dashboard
2. Navigate to **Events** to see tracked interactions
3. Use **Realtime** reports to see live user activity
4. Check **Acquisition** reports for traffic sources
5. View **Audience** reports for geographic data (country, city)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Button Labels Reference

All buttons are tracked with descriptive labels:

- `Browse Offers` - Hero section CTA
- `Get Quote` - Navbar CTA (desktop/mobile)
- `Open Mobile Menu` / `Close Mobile Menu` - Mobile navigation toggle
- `Hotels - Grab Deal Now` - Hotels offer card
- `Cruises - Grab Deal Now` - Cruises offer card
- `Flights - Grab Deal Now` - Flights offer card
- `Tours - Grab Deal Now` - Tours offer card
- `Car Rentals - Grab Deal Now` - Car rentals offer card
- `Vacation Rentals - Grab Deal Now` - Vacation rentals offer card
- `Expedia - Unlock Sale Deals` - Expedia partner deal
- `Hotels.com - Find Best Hotels` - Hotels.com partner deal
- `VRBO - Find Best Rentals` - VRBO partner deal

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
