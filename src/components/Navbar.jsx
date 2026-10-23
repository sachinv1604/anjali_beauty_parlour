import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Location', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex flex-col focus:outline-none group"
          >
            <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-stone-900' : 'text-stone-900'} group-hover:text-roseAccent-600`}>
              Anjali Beauty Parlour
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-stone-400 font-medium -mt-0.5">
              Mundgod
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] uppercase tracking-widest font-semibold text-stone-600 hover:text-roseAccent-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916364605480"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-roseAccent-600 text-white hover:bg-roseAccent-700 transition-colors shadow-sm"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-roseAccent-600 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/97 backdrop-blur-md border-b border-stone-200 px-6 py-5 shadow-lg space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-sm font-semibold uppercase tracking-wider text-stone-700 hover:text-roseAccent-600 py-1.5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/916364605480"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded-full bg-roseAccent-600 text-white hover:bg-roseAccent-700 transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
