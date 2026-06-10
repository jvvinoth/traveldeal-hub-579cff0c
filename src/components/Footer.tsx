import React from 'react';
import { MessageCircle, Mail, Twitter, Facebook, Instagram } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const socialIconMap = {
  Twitter: Twitter,
  Facebook: Facebook,
  Instagram: Instagram,
};

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {siteContent.header.logo}
            </h3>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              {siteContent.footer.tagline}
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                {siteContent.footer.contact.title}
              </h4>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                {siteContent.footer.contact.whatsapp}
              </a>
              <a
                href={`mailto:${siteContent.footer.contact.email}`}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                {siteContent.footer.contact.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {siteContent.footer.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {siteContent.footer.social.map((social) => {
                  const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label={social.platform}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">{siteContent.footer.copyright}</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs text-white/70">
                Live pricing • Updated every 6 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
