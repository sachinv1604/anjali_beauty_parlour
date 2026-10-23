import React from 'react';
import { Star, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28"
      style={{ background: 'linear-gradient(160deg, #FBF8F4 0%, #FDF5F0 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C87D6B]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A65B4A] flex items-center gap-1.5">
              <Heart className="w-3 h-3 fill-[#A65B4A]" /> Client Feedback
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C87D6B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Loved By Women in Mundgod
          </h2>
          <p className="text-stone-500 text-sm mt-3 leading-relaxed">
            Real experiences highlighting our painless techniques, gentle care, and spotless parlour hygiene.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-100 shadow-sm hover:shadow-md hover:border-roseAccent-200 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-semibold text-stone-400 ml-2">5.0 / 5.0</span>
                </div>

                {/* Quote */}
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-roseAccent-100 text-roseAccent-700 font-bold text-xs flex items-center justify-center">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{item.name}</h4>
                    <p className="text-[11px] text-stone-400">{item.place}</p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold bg-roseAccent-50 text-roseAccent-700 px-3 py-1 rounded-full border border-roseAccent-100">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
