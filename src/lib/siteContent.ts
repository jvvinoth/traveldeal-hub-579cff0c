export interface DealCard {
  id: string;
  destination: string;
  description: string;
  price: number;
  originalPrice: number;
  savings: number;
  provider: string;
  image: string;
  category: 'flight' | 'hotel' | 'package' | 'lastminute';
  isBestPrice?: boolean;
}

export interface LiveDealTicker {
  destination: string;
  flag: string;
  price: number;
  savings: number;
  provider: string;
}

export const siteContent = {
  meta: {
    title: 'TravelDeal Hub - Compare Flights, Hotels & Travel Packages',
    description: 'Compare flights, hotels, and packages from 40+ providers in one place. Real-time pricing. Zero hidden fees. Just the best deal, every time.',
  },
  
  header: {
    logo: 'TravelDeal Hub',
    nav: ['Flights', 'Hotels', 'Packages', 'Price Alerts'],
    cta: 'Contact Us',
  },
  
  hero: {
    badge: 'Live Deals • Updated Every 6 Hours',
    headline: {
      before: "The travel deals you've been",
      highlight: 'tab-hopping',
      after: 'for',
    },
    subtext: 'Compare flights, hotels, and packages from 40+ providers in one place. Real-time pricing. Zero hidden fees. Just the best deal, every time.',
    search: {
      destinationPlaceholder: 'Destination or city',
      datesPlaceholder: 'Flexible dates',
      button: 'Search Deals →',
    },
  },
  
  liveTicker: [
    { destination: 'Tokyo', flag: '🇯🇵', price: 487, savings: 203, provider: 'Multiple airlines' },
    { destination: 'Bali', flag: '🇮🇩', price: 612, savings: 178, provider: 'Flight + Hotel' },
    { destination: 'Paris', flag: '🇫🇷', price: 823, savings: 312, provider: 'Premium package' },
    { destination: 'Dubai', flag: '🇦🇪', price: 534, savings: 189, provider: 'Round-trip' },
  ] as LiveDealTicker[],
  
  featuredDeals: {
    title: "Today's Top Deals",
    subtitle: 'Updated 3 hours ago • Prices include all fees',
    deals: [
      {
        id: '1',
        destination: 'Tokyo, Japan',
        description: 'Round-trip flight + 5 nights',
        price: 1284,
        originalPrice: 1487,
        savings: 203,
        provider: 'Via Expedia & Japan Airlines',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80',
        category: 'package',
        isBestPrice: true,
      },
      {
        id: '2',
        destination: 'Bali, Indonesia',
        description: 'Beach resort stay • 7 nights',
        price: 892,
        originalPrice: 1156,
        savings: 264,
        provider: 'Via Booking.com',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
        category: 'hotel',
      },
      {
        id: '3',
        destination: 'New York, USA',
        description: 'Round-trip direct flight',
        price: 387,
        originalPrice: 542,
        savings: 155,
        provider: 'Via United Airlines',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80',
        category: 'flight',
      },
      {
        id: '4',
        destination: 'Santorini, Greece',
        description: 'Luxury villa + flight package',
        price: 1649,
        originalPrice: 2103,
        savings: 454,
        provider: 'Via Luxury Escapes',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1600&q=80',
        category: 'package',
      },
      {
        id: '5',
        destination: 'London, UK',
        description: 'Round-trip + 4-star hotel',
        price: 967,
        originalPrice: 1254,
        savings: 287,
        provider: 'Via British Airways',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
        category: 'package',
      },
      {
        id: '6',
        destination: 'Maldives',
        description: 'All-inclusive resort • 5 nights',
        price: 2187,
        originalPrice: 2899,
        savings: 712,
        provider: 'Via Hotels.com',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80',
        category: 'hotel',
        isBestPrice: true,
      },
      {
        id: '7',
        destination: 'Barcelona, Spain',
        description: 'Weekend getaway flight',
        price: 289,
        originalPrice: 412,
        savings: 123,
        provider: 'Via Ryanair',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80',
        category: 'flight',
      },
      {
        id: '8',
        destination: 'Dubai, UAE',
        description: 'Luxury hotel • 6 nights',
        price: 1543,
        originalPrice: 1998,
        savings: 455,
        provider: 'Via Marriott Bonvoy',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
        category: 'hotel',
      },
      {
        id: '9',
        destination: 'Iceland',
        description: 'Northern Lights tour package',
        price: 1834,
        originalPrice: 2276,
        savings: 442,
        provider: 'Via Gray Line Iceland',
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80',
        category: 'lastminute',
      },
      {
        id: '10',
        destination: 'Singapore',
        description: 'Round-trip direct flight',
        price: 723,
        originalPrice: 945,
        savings: 222,
        provider: 'Via Singapore Airlines',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80',
        category: 'flight',
      },
      {
        id: '11',
        destination: 'Phuket, Thailand',
        description: 'Beach resort + flights',
        price: 1092,
        originalPrice: 1387,
        savings: 295,
        provider: 'Via Agoda',
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=80',
        category: 'package',
      },
      {
        id: '12',
        destination: 'Sydney, Australia',
        description: 'Round-trip + harbor hotel',
        price: 1876,
        originalPrice: 2298,
        savings: 422,
        provider: 'Via Qantas',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
        category: 'lastminute',
      },
    ] as DealCard[],
  },
  
  howItWorks: {
    title: 'Find your best deal in three steps',
    subtitle: "We do the heavy lifting so you don't have to",
    steps: [
      {
        number: '01',
        title: 'Search once',
        description: "Tell us where you want to go and when. We'll scan 40+ providers in seconds.",
        icon: 'Search',
      },
      {
        number: '02',
        title: 'Compare everything',
        description: 'See all options side-by-side with transparent pricing. No hidden fees, ever.',
        icon: 'BarChart3',
      },
      {
        number: '03',
        title: 'Book with confidence',
        description: "Choose the best deal and book directly with the provider. We're here if you need help.",
        icon: 'CheckCircle2',
      },
    ],
  },
  
  dealCategories: {
    title: 'Browse by category',
    tabs: [
      { id: 'all', label: 'All Deals', category: null },
      { id: 'flights', label: 'Flights', category: 'flight' },
      { id: 'hotels', label: 'Hotels', category: 'hotel' },
      { id: 'packages', label: 'Packages', category: 'package' },
      { id: 'lastminute', label: 'Last-Minute', category: 'lastminute' },
    ],
  },
  
  trustSignals: {
    title: 'Trusted by thousands of travelers',
    subtitle: "Real-time data from the world's leading travel providers",
    updateFrequency: 'Updated every 6 hours',
    providers: [
      'Expedia', 'Booking.com', 'Kayak', 'Skyscanner', 'Hotels.com',
      'Agoda', 'Priceline', 'Qatar Airways', 'Emirates', 'Singapore Airlines',
    ],
    comparisonTitle: 'See the difference',
    comparisonDescription: 'Real example: Tokyo round-trip flight comparison',
    sampleComparison: [
      { provider: 'TravelDeal Hub', price: 1284, fees: 0, total: 1284, isBest: true },
      { provider: 'Expedia', price: 1298, fees: 45, total: 1343, isBest: false },
      { provider: 'Booking.com', price: 1312, fees: 38, total: 1350, isBest: false },
      { provider: 'Direct airline', price: 1289, fees: 72, total: 1361, isBest: false },
    ],
  },
  
  ctaBanner: {
    title: 'Never miss a deal again',
    subtitle: 'Set price alerts for your dream destinations and get notified instantly when prices drop below your budget.',
    features: [
      'Real-time price tracking across 40+ providers',
      'WhatsApp notifications when prices drop',
      'No spam, only alerts you care about',
    ],
    form: {
      destinationPlaceholder: 'e.g., Tokyo, Bali, Paris',
      budgetPlaceholder: 'e.g., 1000',
      button: 'Set Price Alert',
    },
  },
  
  footer: {
    tagline: 'Your one-stop destination for comparing travel deals from the world\'s leading providers. Real-time pricing, zero hidden fees.',
    contact: {
      title: 'Get in touch',
      whatsapp: '+1 (234) 567-890',
      email: 'hello@traveldeal.hub',
    },
    quickLinks: [
      { label: 'Flights', href: '#flights' },
      { label: 'Hotels', href: '#hotels' },
      { label: 'Packages', href: '#packages' },
      { label: 'Price Alerts', href: '#price-alerts' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
    social: [
      { platform: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/traveldeal' },
      { platform: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/traveldeal' },
      { platform: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/traveldeal' },
    ],
    copyright: '© 2024 TravelDeal Hub. All rights reserved.',
  },
};
