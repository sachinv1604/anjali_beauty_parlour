import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function MobileBottomBar({ onOpenBooking }) {
  const handleWhatsApp = () => {
    const text = "Hi Anjali Beauty Parlour! I want to book an appointment in Mundgod.";
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <button
          onClick={handleWhatsApp}
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-card transition-transform hover:scale-105 flex items-center justify-center focus:outline-none"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </button>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/80 px-4 py-2.5 shadow-lg">
        <div className="flex items-center gap-3 max-w-sm mx-auto">
          <button
            onClick={handleWhatsApp}
            className="flex-1 py-2.5 px-3 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 border border-stone-200"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="flex-1 py-2.5 px-4 rounded-full bg-berry-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </>
  );
}
