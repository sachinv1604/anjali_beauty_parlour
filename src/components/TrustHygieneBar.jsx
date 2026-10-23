import React from 'react';
import { Gem, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { TRUST_BADGES } from '../data/content';

export default function TrustHygieneBar() {
  const iconMap = {
    Gem: Gem,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    Heart: Heart,
  };

  return (
    <section id="hygiene" className="py-10 sm:py-14 bg-white border-y border-stone-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {TRUST_BADGES.map((badge, idx) => {
            const IconComponent = iconMap[badge.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-[#FBF8F4] rounded-2xl p-4 sm:p-5 text-center border border-stone-100 flex flex-col items-center justify-center space-y-2.5 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-full bg-roseAccent-50 text-roseAccent-600 flex items-center justify-center border border-roseAccent-100">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-stone-900">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
