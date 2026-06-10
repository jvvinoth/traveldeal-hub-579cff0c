# TravelDeal Hub

A modern, production-ready travel deal comparison platform built with Vite, React 18, TypeScript, and TailwindCSS.

## 🚀 Features

- **Real-time Deal Comparison** - Compare flights, hotels, and packages from 40+ providers
- **Live Price Updates** - Deals updated every 6 hours with transparent pricing
- **Smart Search** - Find the best deals with flexible search options
- **Price Alerts** - Set custom price alerts for your favorite destinations
- **Responsive Design** - Optimized for all devices with mobile-first approach
- **Accessibility** - WCAG AA compliant with semantic HTML and proper ARIA labels
- **Performance** - Optimized animations and lazy loading for smooth experience

## 🎨 Design System

### Color Palette
- **Primary**: #0A7EA3 (Deep Teal) - Trust & action
- **Secondary**: #1A4D5C (Darker Teal) - Accents & hover states
- **Accent**: #FF6B35 (Coral Orange) - Savings badges & hot deals
- **Success**: #00BA88 (Green) - Best price indicators
- **Background**: #FAFBFC (Cool Off-white)
- **Surface**: #FFFFFF (Pure White)

### Typography
- **Headings**: Manrope (700/600 weight)
- **Body**: Inter (400/500 weight)
- Professional, data-driven aesthetic with excellent readability

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Sticky navigation with mobile menu
│   ├── HeroSection.tsx # Hero with search and live ticker
│   ├── FeaturedDeals.tsx # Deal cards grid
│   ├── HowItWorks.tsx  # 3-step process section
│   ├── DealCategories.tsx # Tabbed category browser
│   ├── TrustSignals.tsx # Provider logos & comparison table
│   ├── CTABanner.tsx   # Price alert form
│   └── Footer.tsx      # Footer with links and contact
├── lib/
│   └── siteContent.ts  # All site copy and data (typed)
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles + design tokens
```

## 🎯 Key Sections

1. **Header** - Sticky navigation with smooth scroll anchors
2. **Hero** - Bold headline, search bar, and live deal ticker
3. **Featured Deals** - 12 top deals in responsive grid
4. **How It Works** - 3-step process explanation
5. **Deal Categories** - Filterable deals by type (Flights, Hotels, Packages, Last-Minute)
6. **Trust Signals** - Provider logos and price comparison table
7. **CTA Banner** - Price alert sign-up form
8. **Footer** - Contact info, links, and social media

## 🔧 Technology Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Manrope + Inter)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- AA contrast ratios (14.8:1 for primary text)
- Focus visible states
- Reduced motion support

## 🚀 Performance Optimizations

- Intersection Observer for scroll animations
- CSS-only animations where possible
- Optimized image loading
- Minimal bundle size (no extra dependencies)
- Production-ready build configuration

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your projects.

---

**Built with MonstarX** 🚀
