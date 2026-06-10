import React from 'react';
import { Check, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const TrustSignals: React.FC = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-text mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}
          >
            {siteContent.trustSignals.title}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            {siteContent.trustSignals.subtitle}
          </p>
          
          {/* Update Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-border">
            <Clock size={16} className="text-primary" />
            <span className="text-sm font-medium text-text">
              {siteContent.trustSignals.updateFrequency}
            </span>
          </div>
        </div>

        {/* Provider Logos Strip */}
        <div className="mb-20 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {siteContent.trustSignals.providers.map((provider, index) => (
              <div
                key={provider}
                className="text-muted font-medium text-lg hover:text-primary transition-colors cursor-default"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {provider}
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3
              className="text-3xl font-bold text-text mb-3"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {siteContent.trustSignals.comparisonTitle}
            </h3>
            <p className="text-base text-muted">
              {siteContent.trustSignals.comparisonDescription}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-background border-b border-border font-semibold text-sm text-text">
              <div>Provider</div>
              <div className="text-right">Base Price</div>
              <div className="text-right">Fees</div>
              <div className="text-right">Total</div>
            </div>

            {/* Table Rows */}
            {siteContent.trustSignals.sampleComparison.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 p-6 border-b border-border last:border-b-0 transition-colors ${
                  row.isBest
                    ? 'bg-primary/5 border-l-4 border-l-primary'
                    : 'hover:bg-background/50'
                }`}
                style={{
                  animation: `slide-in 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-text">{row.provider}</span>
                  {row.isBest && (
                    <span className="flex items-center gap-1 text-xs bg-success text-white px-2 py-0.5 rounded-full">
                      <Check size={12} />
                      Best
                    </span>
                  )}
                </div>
                <div className="text-right text-text">${row.price}</div>
                <div className="text-right text-muted">
                  {row.fees > 0 ? `+$${row.fees}` : 'Free'}
                </div>
                <div
                  className={`text-right font-bold ${
                    row.isBest ? 'text-primary text-xl' : 'text-text'
                  }`}
                >
                  ${row.total}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted">
              Prices checked on{' '}
              {new Date(Date.now() - 86400000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}{' '}
              • Updated in real-time
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '40+', label: 'Travel Providers' },
            { value: '6hrs', label: 'Update Frequency' },
            { value: '$247', label: 'Avg. Savings per Booking' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSignals;
