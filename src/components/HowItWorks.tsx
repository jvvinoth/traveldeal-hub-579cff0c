import React from 'react';
import { Search, BarChart3, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Search: Search,
  BarChart3: BarChart3,
  CheckCircle2: CheckCircle2,
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-text mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}
          >
            {siteContent.howItWorks.title}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {siteContent.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {siteContent.howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="relative group"
                style={{
                  animation: `fade-up 0.8s ease-out ${0.2 + index * 0.15}s both`,
                }}
              >
                {/* Connecting Line (desktop only) */}
                {index < siteContent.howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border z-0">
                    <div className="h-full bg-primary origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                )}

                <div className="relative z-10 text-center md:text-left">
                  {/* Step Number */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-primary/20 mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-0 right-4 md:right-auto md:left-12 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3
                    className="text-2xl font-semibold text-text mb-3"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-border">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium text-text">
              Comparing prices from 40+ providers right now
            </span>
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default HowItWorks;
