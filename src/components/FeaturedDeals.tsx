import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const FeaturedDeals: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="featured-deals" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-text mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}
          >
            {siteContent.featuredDeals.title}
          </h2>
          <p className="text-lg text-muted">{siteContent.featuredDeals.subtitle}</p>
        </div>

        {/* Deal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.featuredDeals.deals.map((deal, index) => (
            <div
              key={deal.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`deal-card bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                visibleCards.has(index) ? 'card-visible' : 'card-hidden'
              }`}
              style={{
                animationDelay: `${(index % 4) * 100}ms`,
              }}
            >
              {/* Image Area */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={deal.image}
                  alt={deal.destination}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Savings Badge */}
                <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Save ${deal.savings}
                </div>
                {/* Best Price Badge */}
                {deal.isBestPrice && (
                  <div className="absolute top-3 left-3 bg-success text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Best Price
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-text mb-2">
                  {deal.destination}
                </h3>
                <p className="text-sm text-muted mb-3">{deal.description}</p>

                {/* Price Row */}
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="text-3xl font-bold text-primary">${deal.price}</div>
                    <div className="text-sm text-muted line-through">
                      ${deal.originalPrice}
                    </div>
                  </div>
                </div>

                {/* Provider */}
                <p className="text-xs text-muted mb-4">{deal.provider}</p>

                {/* CTA Button */}
                <button className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-secondary transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Enquire Now
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 group">
            View All Deals
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>

      <style>{`
        .card-hidden {
          opacity: 0;
          transform: translateY(30px);
        }

        .card-visible {
          animation: card-reveal 0.6s ease-out forwards;
        }

        @keyframes card-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedDeals;
