import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const HeroSection: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to featured deals
    const dealsSection = document.getElementById('featured-deals');
    if (dealsSection) {
      dealsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,126,163,0.03) 0%, rgba(255,107,53,0.03) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Content (60%) */}
          <div className="lg:col-span-3 space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                  color: '#FF6B35',
                }}
              >
                {siteContent.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight"
              style={{
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '-0.02em',
                lineHeight: '1.05',
              }}
            >
              {siteContent.hero.headline.before}{' '}
              <span className="text-primary">{siteContent.hero.headline.highlight}</span>{' '}
              {siteContent.hero.headline.after}
            </h1>

            {/* Subtext */}
            <p
              className="text-lg md:text-xl text-muted max-w-xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}
            >
              {siteContent.hero.subtext}
            </p>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="bg-white shadow-xl rounded-2xl p-6 max-w-2xl animate-fade-up-delay"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Destination Input */}
                <div className="flex-1 relative">
                  <MapPin
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  />
                  <input
                    type="text"
                    placeholder={siteContent.hero.search.destinationPlaceholder}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                {/* Dates Input */}
                <div className="flex-1 relative">
                  <Calendar
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  />
                  <input
                    type="text"
                    placeholder={siteContent.hero.search.datesPlaceholder}
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full md:w-auto mt-4 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {siteContent.hero.search.button}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>

          {/* Right Column - Live Deal Ticker (40%) */}
          <div className="lg:col-span-2 relative h-[500px] lg:h-[600px] overflow-hidden">
            <div className="ticker-scroll space-y-4">
              {/* Duplicate array for seamless loop */}
              {[...siteContent.liveTicker, ...siteContent.liveTicker].map((deal, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-5 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{deal.flag}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-text">
                          {deal.destination}
                        </h3>
                        <p className="text-xs text-muted">{deal.provider}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-bold text-primary">${deal.price}</div>
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Save ${deal.savings}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .ticker-scroll {
          animation: ticker-scroll 20s linear infinite;
        }

        .ticker-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out 0.2s both;
        }

        .animate-fade-up-delay {
          animation: fade-up 0.8s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
