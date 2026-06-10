import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent, DealCard } from '../lib/siteContent';

const DealCategories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getFilteredDeals = (): DealCard[] => {
    const activeCategory = siteContent.dealCategories.tabs.find(
      (tab) => tab.id === activeTab
    );
    
    if (!activeCategory || !activeCategory.category) {
      return siteContent.featuredDeals.deals.slice(0, 8);
    }
    
    return siteContent.featuredDeals.deals
      .filter((deal) => deal.category === activeCategory.category)
      .slice(0, 8);
  };

  return (
    <section id="hotels" className="bg-white py-20 md:py-28">
      {/* Hidden anchors for navigation */}
      <div id="flights" className="absolute -mt-20" />
      <div id="packages" className="absolute -mt-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-text mb-8"
            style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}
          >
            {siteContent.dealCategories.title}
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {siteContent.dealCategories.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-background text-text hover:bg-primary/10 border border-border'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Deal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getFilteredDeals().map((deal, index) => (
            <div
              key={deal.id}
              className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Image Area */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={deal.image}
                  alt={deal.destination}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Save ${deal.savings}
                </div>
                {deal.isBestPrice && (
                  <div className="absolute top-3 left-3 bg-success text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Best Price
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-text mb-2">
                  {deal.destination}
                </h3>
                <p className="text-sm text-muted mb-3">{deal.description}</p>

                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="text-2xl font-bold text-primary">${deal.price}</div>
                    <div className="text-xs text-muted line-through">
                      ${deal.originalPrice}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted mb-4">{deal.provider}</p>

                <button className="w-full bg-primary text-white py-2.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Enquire Now
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default DealCategories;
