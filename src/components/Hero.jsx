import React from 'react';
import { MapPin, Clock, Sparkles, ChevronDown } from 'lucide-react';

// Elegant floral SVG for hero background
const FloralBg = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="floralHero" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        {/* Large center flower */}
        <circle cx="60" cy="60" r="5" fill="none" stroke="#E8CFC7" strokeWidth="0.8" />
        <circle cx="60" cy="42" r="6" fill="none" stroke="#E8CFC7" strokeWidth="0.7" />
        <circle cx="60" cy="78" r="6" fill="none" stroke="#E8CFC7" strokeWidth="0.7" />
        <circle cx="42" cy="60" r="6" fill="none" stroke="#E8CFC7" strokeWidth="0.7" />
        <circle cx="78" cy="60" r="6" fill="none" stroke="#E8CFC7" strokeWidth="0.7" />
        <circle cx="47" cy="47" r="5.5" fill="none" stroke="#EDD9D0" strokeWidth="0.6" />
        <circle cx="73" cy="47" r="5.5" fill="none" stroke="#EDD9D0" strokeWidth="0.6" />
        <circle cx="47" cy="73" r="5.5" fill="none" stroke="#EDD9D0" strokeWidth="0.6" />
        <circle cx="73" cy="73" r="5.5" fill="none" stroke="#EDD9D0" strokeWidth="0.6" />
        {/* Leaf accent */}
        <path d="M60 30 Q66 38 60 46 Q54 38 60 30Z" fill="none" stroke="#DFC4BB" strokeWidth="0.6" />
        <path d="M30 60 Q38 66 46 60 Q38 54 30 60Z" fill="none" stroke="#DFC4BB" strokeWidth="0.6" />
        <path d="M74 60 Q82 66 90 60 Q82 54 74 60Z" fill="none" stroke="#DFC4BB" strokeWidth="0.6" />
        <path d="M60 74 Q66 82 60 90 Q54 82 60 74Z" fill="none" stroke="#DFC4BB" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#floralHero)" />
  </svg>
);

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('video') || document.getElementById('services');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FDF6F0 0%, #F8EEE7 40%, #FBF5F0 100%)' }}
    >
      {/* Floral background pattern */}
      <FloralBg />

      {/* Top left decorative accent */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-20">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200 Q50 100 100 50 Q150 0 200 0 Q100 50 50 100 Q0 150 0 200Z" fill="#D4A0A0" />
        </svg>
      </div>

      {/* Bottom right decorative accent */}
      <div className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none opacity-15">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 0 Q150 100 100 150 Q50 200 0 200 Q100 150 150 100 Q200 50 200 0Z" fill="#C87D6B" />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto pt-24 pb-16">

        {/* Tiny elegant label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C87D6B]" />
          <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#A65B4A]">
            Welcome
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C87D6B]" />
        </div>

        {/* Main Brand Name */}
        <h1 className="font-serif font-bold leading-tight text-stone-900">
          <span className="block text-5xl sm:text-6xl md:text-7xl tracking-tight">
            Anjali Beauty
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl tracking-tight italic text-[#B84D38] mt-1">
            Parlour
          </span>
        </h1>

        {/* Floral divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A0A0]" />
          <span className="text-[#C87D6B] text-xl">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A0A0]" />
        </div>

        {/* Tagline */}
        <p className="text-stone-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-light tracking-wide">
          Enhance Your Beauty, Enhance Your Confidence
        </p>
        <p className="text-stone-400 text-xs mt-1 tracking-widest uppercase">
          Mundgod, Karnataka
        </p>

        {/* Info pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#E8D5C8] text-[#6B4640] text-xs font-medium shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#B84D38]" />
            Main Road, Mundgod
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#E8D5C8] text-[#6B4640] text-xs font-medium shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#B84D38]" />
            Mon – Sun · 10 AM – 7:30 PM
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#E8D5C8] text-[#6B4640] text-xs font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B84D38]" />
            100% Sterile Protocols
          </span>
        </div>

        {/* Scroll CTA */}
        <button
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="mt-14 flex flex-col items-center gap-1.5 mx-auto text-stone-400 hover:text-[#B84D38] transition-colors group"
        >
          <span className="text-[10px] tracking-widest uppercase font-semibold">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
