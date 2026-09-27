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
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex flex-col focus-visible:outline-none"
          aria-label="Dr. Sadhwani's Dental Clinic - Home"
        >
          <span className="font-editorial text-xl sm:text-2xl text-[#17191A] font-medium tracking-tight group-hover:text-[#14505C] transition-colors">
            Dr. Sadhwani’s Dental Clinic
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#585D62]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#17191A] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#14505C] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action & Instagram link */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#585D62] hover:text-[#E1306C] hover:bg-black/[0.03] rounded-md transition-colors"
            title="Follow on Instagram"
            aria-label="Visit clinic on Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href="tel:+917719994814"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#14505C] hover:text-[#0E3A42] py-2 px-2.5 transition-colors"
            title="Call 7719994814"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="font-sans-clean tabular-nums">7719994814</span>
          </a>

          <button
            onClick={onOpenBooking}
            type="button"
            className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#14505C] hover:bg-[#0F3D46] active:bg-[#0B2C33] rounded-md transition-colors shadow-xs"
          >
            Book an Appointment
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
            href="tel:+917719994814"
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
                  href="tel:+917719994814"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#14505C] border border-[#14505C]/30 bg-white rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call 7719994814
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
