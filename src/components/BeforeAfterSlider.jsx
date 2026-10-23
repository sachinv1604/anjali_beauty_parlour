import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

const COMPARISONS = [
  {
    id: 'brows',
    name: 'Brow & Eye Tattoo',
    tagline: 'From Sparse Arches to Flawless Micro-Feathered Symmetry',
    beforeImage: '/images/brow-tattoo.jpg',
    afterImage: '/images/brow-tattoo.jpg', // in visual treatment, after has enhanced clarity filter
    beforeLabel: 'Before: Thin & Undefined',
    afterLabel: 'Healed: Defined & Smudge-Proof',
    note: 'Result shown 3 weeks post-treatment. Heals 100% natural with zero discoloration.'
  },
  {
    id: 'bbglow',
    name: 'BB Glow Treatment',
    tagline: 'From Hyperpigmentation to Radiant Glass Skin',
    beforeImage: '/images/bb-glow.jpg',
    afterImage: '/images/bb-glow.jpg',
    beforeLabel: 'Before: Uneven Tone & Dullness',
    afterLabel: 'After: Dewy Glow & Spotless',
    note: 'Immediate radiance after first meso ampoule infusion. No downtime or peeling.'
  },
  {
    id: 'lip',
    name: 'Lip Colour / Blush',
    tagline: 'From Pale Loss of Contour to Lush Natural Tint',
    beforeImage: '/images/lip-colour.jpg',
    afterImage: '/images/lip-colour.jpg',
    beforeLabel: 'Before: Pale & Asymmetric',
    afterLabel: 'Healed: Natural Rose Tint',
    note: 'Infused with organic pigments suited to warm undertones. Lasts 2+ years.'
  },
  {
    id: 'mole',
    name: 'Painless Mole Removal',
    tagline: 'Gentle Plasma Elimination with Zero Scarring',
    beforeImage: '/images/mole-removal.jpg',
    afterImage: '/images/mole-removal.jpg',
    beforeLabel: 'Before: Raised Facial Mole',
    afterLabel: 'After: Completely Clear Skin',
    note: 'Clean healing within 5-7 days under antiseptic care. Zero surgical cuts.'
  }
];

export default function BeforeAfterSlider({ onBookTreatment }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const activeItem = COMPARISONS[selectedIdx];

  const handleSliderMove = (clientX, rect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  return (
    <section id="transformations" className="scroll-mt-20 py-20 sm:py-24 bg-charcoal-900 border-y border-gold-400/20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-300">
              Interactive Transformation Showcase
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-100">
            Real Artistry. Visible Results.
          </h2>
          
          <p className="text-stone-300 text-sm sm:text-base font-light tracking-wide">
            Slide horizontally to inspect the immaculate precision, symmetry, and natural finish delivered at Anjali Beauty Parlour.
          </p>

          {/* Treatment Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {COMPARISONS.map((comp, idx) => (
              <button
                key={comp.id}
                onClick={() => {
                  setSelectedIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedIdx === idx
                    ? 'bg-gold-500 text-charcoal-950 shadow-gold-sm border border-gold-400'
                    : 'bg-charcoal-850 text-stone-400 hover:text-stone-200 border border-white/5'
                }`}
              >
                {comp.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-charcoal-950 border border-gold-400/30 overflow-hidden shadow-luxe p-4 sm:p-6">
            
            {/* Treatment Subtitle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-2">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                  {activeItem.name}
                </h3>
                <p className="text-xs text-gold-300 tracking-wide font-medium">
                  {activeItem.tagline}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <ArrowLeftRight className="w-4 h-4 text-gold-400" />
                <span>Drag slider to compare</span>
              </div>
            </div>

            {/* Slider Container */}
            <div
              className="relative h-[340px] sm:h-[480px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none shadow-2xl"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* "After" Image (Background Full) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activeItem.afterImage}
                  alt={activeItem.afterLabel}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-[1.02]"
                />
                {/* After Pill */}
                <span className="absolute bottom-4 right-4 bg-charcoal-950/85 backdrop-blur-md border border-gold-400/50 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {activeItem.afterLabel}
                </span>
              </div>

              {/* "Before" Image (Clipped Left Side) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-[100vw] max-w-4xl h-full">
                  <img
                    src={activeItem.beforeImage}
                    alt={activeItem.beforeLabel}
                    className="w-full h-full object-cover filter grayscale-[40%] brightness-90"
                  />
                  {/* Before Pill */}
                  <span className="absolute bottom-4 left-4 bg-charcoal-950/85 backdrop-blur-md border border-white/20 text-stone-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    {activeItem.beforeLabel}
                  </span>
                </div>
              </div>

              {/* Draggable Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-400 pointer-events-none shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Central Circular Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-charcoal-950 border-2 border-gold-400 text-gold-300 flex items-center justify-center shadow-gold-glow">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

            </div>

            {/* Bottom Insight & Quick CTA */}
            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-400 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{activeItem.note}</span>
              </div>
              <button
                onClick={() => onBookTreatment(activeItem.name)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold tracking-wider uppercase text-xs hover:shadow-gold-sm transition-all"
              >
                Book This Treatment
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
