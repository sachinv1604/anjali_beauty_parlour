import React from 'react';
import { ShieldCheck, Sparkles, Award, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function WhyChooseUs({ onOpenBooking }) {
  const points = [
    {
      title: "Strict Medical Hygiene",
      desc: "All microblading blades and plasma tips are single-use and unsealed right before your eyes.",
    },
    {
      title: "Highest-Grade Products",
      desc: "We use only dermatologically tested, organic pigments and Korean meso serums for zero irritation.",
    },
    {
      title: "Certified Experience",
      desc: "Over 8 years of dedicated beauty and aesthetics expertise in Mundgod.",
    },
    {
      title: "Personalized Consultation",
      desc: "Every face is unique. We tailor brows, lip shades, and skin treatments to your exact undertone.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28" style={{ background: 'linear-gradient(160deg, #FBF8F4 0%, #FFFFFF 60%, #FBF8F4 100%)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Clean Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100 shadow-sm border border-stone-100">
                <img
                  src="/images/bb-glow.jpg"
                  alt="Aesthetic treatment at Anjali Beauty Parlour"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Clean Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-berry-600 block mb-1">
                  About Our Parlour
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                  Mundgod's Trusted Space for Beauty & Aesthetics
                </h2>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed">
                At <strong className="text-stone-900 font-semibold">Anjali Beauty Parlour</strong>, we believe modern aesthetic care should look completely natural, feel comfortable, and adhere to hospital-grade cleanliness.
              </p>

              <p className="text-stone-600 text-sm leading-relaxed">
                Whether you visit us for permanent eyebrow microblading, painless mole removal, lip blush, or glowing bridal makeup, you can relax knowing we use only the safest, skin-friendly certified products.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {points.map((p, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/50">
                    <h4 className="font-heading text-xs font-bold text-stone-900">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-berry-600 hover:bg-berry-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Book Your Visit
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
