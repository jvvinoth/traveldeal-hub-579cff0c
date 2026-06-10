import React, { useState } from 'react';
import { Bell, Check, ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const CTABanner: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination && budget) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setDestination('');
        setBudget('');
      }, 3000);
    }
  };

  return (
    <section id="price-alerts" className="bg-primary py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Bell size={18} />
              <span className="text-sm font-medium">Price Alerts</span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}
            >
              {siteContent.ctaBanner.title}
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {siteContent.ctaBanner.subtitle}
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {siteContent.ctaBanner.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="alert-destination" className="block text-sm font-medium text-text mb-2">
                    Destination
                  </label>
                  <input
                    id="alert-destination"
                    type="text"
                    placeholder={siteContent.ctaBanner.form.destinationPlaceholder}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="alert-budget" className="block text-sm font-medium text-text mb-2">
                    Maximum Budget (USD)
                  </label>
                  <input
                    id="alert-budget"
                    type="number"
                    placeholder={siteContent.ctaBanner.form.budgetPlaceholder}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                    min="0"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {siteContent.ctaBanner.form.button}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <p className="text-xs text-muted text-center">
                  We'll notify you via WhatsApp when prices drop below your budget
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-2">Alert Set!</h3>
                <p className="text-muted">
                  We'll notify you when {destination} drops below ${budget}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
