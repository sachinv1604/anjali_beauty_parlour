import React from 'react';
import { GALLERY_IMAGES } from '../data/content';

export default function WorkGallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF8F4 100%)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C87D6B]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A65B4A]">
              Real Results
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C87D6B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Our Work Gallery
          </h2>
          <p className="text-stone-500 text-sm mt-3">
            A glimpse into our client transformations, bridal makeup, and aesthetic procedures.
          </p>
        </div>

        {/* 6-Photo Clean Grid matching the template */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-soft border border-stone-200/60 aspect-[3/4] sm:aspect-square bg-stone-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
