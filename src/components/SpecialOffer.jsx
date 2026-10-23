import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function SpecialOffer() {
  const handleClaimOffer = () => {
    const text = "Hi Anjali Beauty Parlour! I want to claim the 20% OFF Special Offer for my first visit in Mundgod.";
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        <div
          className="rounded-3xl text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #B84D38 0%, #9B3027 40%, #C87D6B 100%)' }}
        >
          {/* Decorative background circles */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FFF 0%, transparent 70%)', transform: 'translate(25%, -25%)' }} />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FFF 0%, transparent 70%)', transform: 'translate(-25%, 25%)' }} />

          <div className="space-y-2 max-w-xl relative z-10">
            <p className="text-xs tracking-widest uppercase font-semibold text-white/70">Limited Time Welcome Offer</p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Special Offer For You!
            </h3>
            <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
              Experience Mundgod's premier aesthetic and beauty treatments. Enjoy a special welcome discount on your first appointment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 relative z-10">
            <div className="text-4xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-none">
              20% <span className="text-2xl sm:text-3xl">OFF</span>
            </div>

            <button
              onClick={handleClaimOffer}
              className="bg-white hover:bg-stone-50 text-[#B84D38] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 hover:shadow-md"
            >
              <span>Claim On WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
