import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES, ADDITIONAL_SERVICES } from '../data/content';

export default function ServicesGrid({ onBookService }) {
  return (
    <section
      id="services"
      className="py-20 sm:py-28"
      style={{ background: 'linear-gradient(180deg, #FBF8F4 0%, #FFFFFF 40%, #FBF8F4 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C87D6B]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A65B4A] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Core Offerings
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C87D6B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Our Services & Treatments
          </h2>
          <p className="text-stone-500 text-sm mt-3 leading-relaxed">
            Clinical precision, safe procedures, and natural beauty enhancements in Mundgod.
          </p>
        </div>

        {/* 4 Core Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SERVICES.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md hover:border-roseAccent-200 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-roseAccent-600 text-white text-[10px] font-bold flex items-center justify-center shadow">
                  {item.id}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-roseAccent-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-roseAccent-700 font-medium mt-0.5 mb-3">{item.tagline}</p>

                <ul className="space-y-1.5 text-xs text-stone-600 flex-1">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-roseAccent-50 text-roseAccent-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-800 bg-stone-50 border border-stone-200/80 px-3 py-1 rounded-full">
                    {item.price}
                  </span>
                  <button
                    onClick={() => onBookService(item.title)}
                    className="text-xs font-semibold text-roseAccent-600 hover:text-roseAccent-700 flex items-center gap-1 transition-all group-hover:translate-x-0.5"
                  >
                    Book <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 pt-14 border-t border-stone-200/60">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Additional Salon Care
            </h3>
            <p className="text-xs text-stone-500 mt-2">
              Bridal makeup, facials, hair treatments, and designer mehendi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADDITIONAL_SERVICES.map((add, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm text-center hover:border-roseAccent-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3"
              >
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900">
                    {add.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1.5 leading-snug">
                    {add.desc}
                  </p>
                </div>
                <div>
                  <span className="bg-roseAccent-50 text-roseAccent-700 font-semibold text-xs px-3 py-1 rounded-full inline-block">
                    {add.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
