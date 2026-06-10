import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedDeals from './components/FeaturedDeals';
import HowItWorks from './components/HowItWorks';
import DealCategories from './components/DealCategories';
import TrustSignals from './components/TrustSignals';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set page language and direction
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedDeals />
        <HowItWorks />
        <DealCategories />
        <TrustSignals />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
