import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReelVideoHero from './components/ReelVideoHero';
import TrustHygieneBar from './components/TrustHygieneBar';
import ServicesGrid from './components/ServicesGrid';
import SpecialOffer from './components/SpecialOffer';
import WorkGallery from './components/WorkGallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import BookingModal from './components/BookingModal';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Brow & Eye Tattoo');

  const handleOpenBooking = (serviceName = 'Brow & Eye Tattoo') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen text-[#2D2421] flex flex-col font-sans selection:bg-[#F0C7BD] selection:text-[#7A2C1D]">
      {/* 1. Header Navbar (Clean alignment, no CTA clutter) */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section (Anjali Beauty Parlour) */}
        <Hero />

        {/* 3. Direct Autoplay Instagram Reel Video (Exactly below hero, occupies reel dimension, naturally scrolls to next section) */}
        <ReelVideoHero />

        {/* 4. Trust & Hygiene Bar (4 badges) */}
        <TrustHygieneBar />

        {/* 5. Core Services & Prices (The star of the show) */}
        <ServicesGrid onBookService={(service) => handleOpenBooking(service)} />

        {/* 6. Special 20% OFF Welcome Offer */}
        <SpecialOffer />

        {/* 7. Work Gallery */}
        <WorkGallery />

        {/* 8. Why Choose Us (About Section with sterile hygiene assurance) */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking('Consultation')} />

        {/* 9. Verified Client Testimonials */}
        <Testimonials />

        {/* 10. Booking Form & Location Map (Dedicated single CTA area) */}
        <BookingSection preselectedService={selectedService} />
      </main>

      {/* 11. Clean, Balanced Footer */}
      <Footer />

      {/* 12. Floating WhatsApp for Mobile/Desktop */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking('Brow & Eye Tattoo')} />

      {/* 13. Service Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
