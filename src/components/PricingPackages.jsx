import React from 'react';
import { Sparkles, Check, Gift, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { PACKAGES, BRAND_INFO } from '../data/content';

export default function PricingPackages({ onSelectPackage }) {
  const handleOfferWhatsApp = () => {
    const text = `Hi Anjali Beauty Parlour! I want to claim the Special 20% OFF Offer on BB Glow / Brow Styling. Please check availability for this week.`;
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="packages" className="scroll-mt-20 py-20 sm:py-28 bg-charcoal-950 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SPECIAL OFFER BANNER (Inspired directly by the template image's vibrant special offer card) */}
        <div className="relative rounded-3xl overflow-hidden mb-20 p-8 sm:p-12 bg-gradient-to-r from-red-950/80 via-charcoal-900 to-red-950/80 border border-gold-400/40 shadow-luxe">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,171,79,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-widest">
                <Gift className="w-3.5 h-3.5 text-gold-400" />
                <span>Limited Time Promotion</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-100">
                Glow Today, Shine Everyday!
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Experience Mundgod's premier aesthetic luxury with an exclusive <strong className="text-gold-300">20% OFF</strong> on your first-time BB Glow or Brow & Eye Tattoo consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <div className="px-6 py-4 rounded-2xl bg-charcoal-950/90 border border-gold-400/50 text-center shadow-gold-sm">
                <span className="text-xs uppercase tracking-widest text-stone-400 block">First Visit</span>
                <span className="font-serif text-4xl sm:text-5xl font-black text-gold-400">20% OFF</span>
              </div>
              <button
                onClick={handleOfferWhatsApp}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-metallic-light to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-widest shadow-gold-md hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Tag className="w-4 h-4" />
                <span>Claim Offer On WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-300">
              Curated Luxury Packages
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-100">
            Transparent Pricing, Unmatched Value
          </h2>
          
          <p className="text-stone-300 text-sm sm:text-base font-light tracking-wide">
            Designed for long-lasting transformation and comprehensive skin health with genuine international products.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.featured
                  ? 'bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-2 border-gold-400 shadow-gold-md lg:-translate-y-3'
                  : 'bg-charcoal-900/80 border border-gold-400/20 hover:border-gold-400/50 shadow-luxe'
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold text-[10px] tracking-widest uppercase shadow-gold-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-charcoal-950" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      {pkg.subtitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-gold-400 bg-gold-500/15 px-2.5 py-1 rounded-full border border-gold-400/30">
                    {pkg.discount}
                  </span>
                </div>

                {/* Price Display */}
                <div className="py-6 flex items-baseline gap-3">
                  <span className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-100">
                    {pkg.price}
                  </span>
                  <span className="text-base text-stone-500 line-through">
                    {pkg.originalPrice}
                  </span>
                  <span className="text-xs text-gold-400 font-medium ml-auto">
                    All-Inclusive
                  </span>
                </div>

                {/* Perks List */}
                <div className="space-y-3.5 pt-2">
                  <p className="text-xs font-semibold tracking-wider uppercase text-gold-300">
                    Package Inclusions:
                  </p>
                  {pkg.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300">
                      <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 shadow-gold-sm hover:shadow-gold-md'
                      : 'border border-gold-400/40 text-gold-300 hover:bg-gold-500 hover:text-charcoal-950'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Backed by 100% Sterile Protocol</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
