import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-b border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
          : 'bg-[#FAF9F5] border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Clinic Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex flex-col focus-visible:outline-none"
          aria-label="Brush Dental Clinic - Home"
        >
          <div className="flex items-center gap-2">
            <span className="font-editorial text-2xl sm:text-3xl font-extrabold tracking-tight text-[#17191A] group-hover:text-[#0D6E7E] transition-colors">
              <span className="text-[#FF2A85]">B</span>RUSH
            </span>
            <span className="text-[11px] uppercase tracking-wider font-extrabold bg-gradient-to-r from-[#FF2A85] to-[#E11D48] text-white px-2.5 py-0.5 rounded-full shadow-xs">
              Dental Clinic
            </span>
          </div>
          <span className="text-[11px] text-[#64748B] font-medium tracking-normal mt-0.5 flex items-center gap-1.5">
            <span className="font-semibold text-[#0D6E7E]">Dr. Swapnil Dahapute</span>
            <span className="text-gray-300">·</span>
            <span>Pediatric Dentist · Amravati</span>
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#475569]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#0D6E7E] transition-colors relative py-1 focus-visible:outline-none font-sans-clean font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Direct Phone & WhatsApp Booking */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/917507551234?text=Hello%20Dr.%20Swapnil%20Dahapute%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Brush%20Dental%20Clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#15803D] hover:text-[#166534] px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all border border-[#25D366]/30 shadow-xs"
            title="Chat on WhatsApp"
          >
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+917507551234"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-extrabold text-[#0D6E7E] hover:text-[#095461] py-2 px-2.5 transition-colors"
            title="Call 075075 51234"
          >
            <Phone className="w-3.5 h-3.5 text-[#0D6E7E]" aria-hidden="true" />
            <span className="font-sans-clean tabular-nums">075075 51234</span>
          </a>

          <button
            onClick={onOpenBooking}
            type="button"
            className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-white bg-gradient-to-r from-[#0D6E7E] to-[#0891B2] hover:from-[#095461] hover:to-[#077691] rounded-lg transition-all shadow-[0_4px_14px_rgba(8,145,178,0.3)] hover:shadow-[0_6px_18px_rgba(8,145,178,0.4)] active:scale-[0.98]"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-1">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#585D62] hover:text-[#E1306C] rounded-md"
            aria-label="Visit clinic on Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="tel:+917507551234"
            className="p-2 text-[#14505C] hover:bg-[#F3F1EB] rounded-md transition-colors"
            aria-label="Call clinic directly"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-[#17191A] hover:bg-[#F3F1EB] rounded-md transition-colors focus-visible:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-black/[0.08] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#17191A] hover:text-[#14505C] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-black/[0.08] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#14505C] hover:bg-[#0F3D46] rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+917507551234"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#14505C] border border-[#14505C]/30 bg-white rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call 075075 51234
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#17191A] border border-black/[0.1] bg-white rounded-md transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                  Instagram
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
