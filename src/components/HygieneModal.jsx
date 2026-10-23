import React from 'react';
import { X, ShieldCheck, CheckCircle, Sparkles, AlertCircle, Phone } from 'lucide-react';
import { HYGIENE_PROTOCOLS, BRAND_INFO } from '../data/content';

export default function HygieneModal({ isOpen, onClose, onBookNow }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-charcoal-900 border border-gold-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden z-10 my-8">
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-52 h-52 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gold-400/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400">
                Official Clinical Charter
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-100">
                Hygiene & Safety Protocol
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-100 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="mt-5 space-y-5 max-h-[60vh] overflow-y-auto pr-2">
          <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-400/25 text-xs text-stone-200 leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-gold-300 font-semibold block text-sm">
                Our Zero-Compromise Commitment to Mundgod:
              </strong>
              At Anjali Beauty Parlour, our highest priority is your health, skin integrity, and safety. Every aesthetic procedure (brow tattoo, mole removal, lip blush, and BB glow) is performed under rigorous sterile conditions surpassing standard salon practices.
            </div>
          </div>

          <div className="space-y-4">
            {HYGIENE_PROTOCOLS.map((protocol, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-charcoal-850 border border-white/5 flex items-start gap-3.5 hover:border-gold-400/30 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-100">
                    {protocol.title}
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    {protocol.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/10 text-xs text-stone-300 space-y-2">
            <div className="flex items-center gap-2 text-gold-400 font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>Personal Client Verification Guarantee</span>
            </div>
            <p className="leading-relaxed">
              Before your treatment begins, your aesthetician will physically display the sealed sterile expiration date packaging of your needle or cartridge and unseal it in front of you. You are invited to ask questions at any point.
            </p>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-6 pt-4 border-t border-gold-400/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Hi%20Anjali%20Beauty%20Parlour%2C%20I%20have%20questions%20about%20your%20hygiene%20and%20procedures.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-400 hover:text-gold-300 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Have questions? Chat on WhatsApp</span>
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/20 text-stone-300 hover:text-stone-100 text-xs tracking-wider uppercase font-medium transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold text-xs tracking-wider uppercase shadow-gold-sm hover:shadow-gold-md transition-all"
            >
              Book Safe Appointment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
