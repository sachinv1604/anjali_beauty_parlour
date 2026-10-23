import React from 'react';
import { Heart, MapPin, Clock, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Top pattern bar */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #B84D38, #D4A0A0, #B84D38)' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pb-10 border-b border-stone-800/60">

          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-roseAccent-600 text-white flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 fill-white" />
              </span>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Anjali Beauty Parlour
                </span>
                <span className="text-[10px] tracking-widest text-stone-500 uppercase">
                  Mundgod
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
              Mundgod's trusted destination for semi-permanent brow tattoos, painless mole removal, natural lip blush, and glowing aesthetic treatments.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-roseAccent-600 text-stone-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-emerald-600 text-stone-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Visiting Details */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400 mb-4">
              Visiting Details
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-roseAccent-400 flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-roseAccent-400 flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.hours} · Open 7 days</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-roseAccent-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BRAND_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400 mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2.5 text-xs">
              {[
                { name: 'Our Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Client Reviews', href: '#testimonials' },
                { name: 'Book Appointment', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-stone-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Book CTA */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-roseAccent-600 hover:bg-roseAccent-700 text-white text-xs font-bold transition-colors"
            >
              <WhatsAppIcon />
              Book on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-600">
          <p>© {currentYear} Anjali Beauty Parlour, Mundgod. All Rights Reserved.</p>
          <p>Main Road, Mundgod, Karnataka · 581349</p>
        </div>

      </div>
    </footer>
  );
}
