import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121415] text-[#9EA3A8] border-t border-white/[0.08] pt-16 pb-24 md:pb-16 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-editorial text-2xl text-white font-medium">
              Dr. Sadhwani’s Dental Clinic
            </h3>
            <p className="text-sm text-[#CCD1D6]">
              Dr. Pooja Sadhwani
            </p>
            <p className="text-xs uppercase tracking-wider text-[#79B7C1]">
              Cosmetic Dentist | Smile Designer
            </p>
            <p className="text-xs text-[#7B8289] max-w-sm pt-2">
              Personalized dental care and smile-focused treatments in Rampuri Camp, Amravati, Maharashtra.
            </p>

            {/* Instagram link */}
            <div className="pt-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#CCD1D6] hover:text-[#E1306C] transition-colors py-1 focus-visible:outline-none"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          {/* Practice Location */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-3">
              Practice Address
            </span>
            <div className="flex items-start gap-2.5 text-xs text-[#CCD1D6] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#79B7C1] shrink-0 mt-0.5" />
              <span>
                Shop No. 14, New Cotton Market Main Road,<br />
                Lane No. 3, Opp. Krishna Nagar,<br />
                Rampuri Camp, Amravati, Maharashtra 444601
              </span>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-2 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-3">
              Direct Inquiries
            </span>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#79B7C1]" />
              <a
                href="tel:+917719994814"
                className="text-white hover:text-[#79B7C1] transition-colors tabular-nums font-medium"
              >
                7719994814
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#676D74]">
          <p>
            Copyright © 2026 Dr. Sadhwani’s Dental Clinic. All rights reserved.
          </p>
          <p className="text-[11px]">
            Amravati, Maharashtra · Rampuri Camp
          </p>
        </div>
      </div>
    </footer>
  );
};

