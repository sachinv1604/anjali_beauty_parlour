import React, { useState } from 'react';
import { Phone, Clock, MapPin, Send, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/content';

export default function BookingSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Brow & Eye Tattoo',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
  });
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `✨ Appointment Request - Anjali Beauty Parlour Mundgod ✨
👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
💄 Treatment: ${formData.service}
📅 Date: ${formData.date || 'Earliest slot'}
⏰ Time: ${formData.timeSlot}`;

    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-stone-200/70" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FBF8F4 100%)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C87D6B]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A65B4A] flex items-center gap-1.5">
              <Calendar className="w-3 h-3" /> Consultation & Visit
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C87D6B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Book Appointment & Location
          </h2>
          <p className="text-stone-500 text-sm mt-3 leading-relaxed">
            Reserve your slot online or visit our parlour located on Main Road, Mundgod.
          </p>
        </div>

        {/* 2-Column Clean Layout: Form on Left, Location / Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-clean text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-1">
              Reserve Your Consultation
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Enter your details to confirm your appointment via WhatsApp.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-heading text-lg font-bold text-stone-800">
                  Opening WhatsApp...
                </h4>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  We are opening WhatsApp with your prefilled appointment information for Anjali Beauty Parlour Mundgod.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-roseAccent-600 font-semibold hover:underline pt-2 block mx-auto"
                >
                  Book another slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pooja Hegde"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-card border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-roseAccent-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-card border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-roseAccent-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Select Treatment *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-card border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-roseAccent-600 transition-colors cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.price})
                      </option>
                    ))}
                    <option value="Bridal Makeup">Royal Bridal Makeup</option>
                    <option value="Radiant Facial">Radiant Facial</option>
                    <option value="Mehendi Art">Designer Mehendi Art</option>
                    <option value="Hair Styling & Spa">Hair Styling & Spa</option>
                    <option value="Skin Consultation">General Skin Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-card border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-roseAccent-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-card border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-roseAccent-600 transition-colors cursor-pointer"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM – 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full bg-roseAccent-600 hover:bg-roseAccent-700 text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Booking On WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Mundgod Map (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-clean space-y-4">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-stone-900">
                Salon Address & Hours
              </h4>
              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-roseAccent-600 flex-shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-roseAccent-600 flex-shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.hours} (Open all 7 days)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-roseAccent-600 flex-shrink-0 mt-0.5" />
                  <a href={`https://wa.me/${BRAND_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-roseAccent-600 font-semibold">
                    {BRAND_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl p-3 border border-stone-100 shadow-sm overflow-hidden">
              <div className="rounded-2xl overflow-hidden h-64 w-full relative">
                <iframe
                  title="Anjali Beauty Parlour Mundgod Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.3!2d74.983!3d14.9642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca!2sAnjali+Beauty+Parlour!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-3">
                <a
                  href={BRAND_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-roseAccent-600 hover:underline flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps Application →</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
