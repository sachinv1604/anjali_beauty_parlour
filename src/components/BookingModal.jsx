import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/content';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'Brow & Eye Tattoo',
    date: '',
    timeSlot: 'Morning (10 AM - 1 PM)',
  });
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `✨ Appointment Request - Anjali Beauty Parlour Mundgod ✨
Name: ${formData.name}
Phone: ${formData.phone}
Treatment: ${formData.service}
Preferred Date: ${formData.date || 'Earliest slot'}
Time Slot: ${formData.timeSlot}`;

    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 800);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-100 z-10 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-berry-600 block">
              Quick Appointment
            </span>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Anjali Beauty Parlour
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2">
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
            <h4 className="font-heading text-lg font-bold text-stone-800">
              Opening WhatsApp...
            </h4>
            <p className="text-xs text-stone-500">
              Sending your appointment details directly to our parlour on WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-berry-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-berry-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Service *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-berry-600 cursor-pointer"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.price})
                  </option>
                ))}
                <option value="Bridal Makeup">Bridal Makeup</option>
                <option value="Radiant Facial">Radiant Facial</option>
                <option value="Mehendi Art">Mehendi Art</option>
                <option value="Hair Styling & Spa">Hair Styling & Spa</option>
                <option value="General Consultation">General Consultation</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-berry-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:bg-white focus:outline-none focus:border-berry-600 cursor-pointer"
                >
                  <option value="Morning (10 AM - 1 PM)">10 AM - 1 PM</option>
                  <option value="Afternoon (1 PM - 4 PM)">1 PM - 4 PM</option>
                  <option value="Evening (4 PM - 7:30 PM)">4 PM - 7:30 PM</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-berry-600 hover:bg-berry-700 text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm on WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
