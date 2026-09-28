import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121415] text-[#9EA3A8] border-t border-white/[0.08] pt-16 pb-24 md:pb-16 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-editorial text-2xl text-white font-bold">
              BRUSH Dental Clinic
            </h3>
            <p className="text-sm text-[#CCD1D6] font-semibold">
              Dr. Swapnil Dahapute (BDS, MDS)
            </p>
            <p className="text-xs uppercase tracking-wider text-[#79B7C1] font-semibold">
              Pediatric Dentist · लहान मुलांचे व कुटुंबाचे दंततज्ज्ञ · Reg. No. A-18174
            </p>
            <p className="text-xs text-[#7B8289] max-w-sm pt-2">
              Painless, gentle pediatric and family dental care at Stand Complex, Rajapeth - Irwin Square Flyover, Madhokar Peth, Amravati.
            </p>

            {/* Direct Connect Buttons */}
            <div className="pt-3 flex items-center gap-4 text-xs">
              <a
                href="https://wa.me/917507551234?text=Hello%20Dr.%20Swapnil%20Dahapute%2C%20I%20would%20like%20to%20consult%20at%20Brush%20Dental%20Clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline flex items-center gap-1.5 font-semibold"
              >
                <span>WhatsApp: 075075 51234</span>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#CCD1D6] hover:text-[#E1306C] transition-colors py-1 focus-visible:outline-none"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Instagram</span>
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
                Stand Complex, Rajapeth - Irwin Square Flyover,<br />
                Madhokar Peth, Amravati,<br />
                Maharashtra 444605
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
                href="tel:+917507551234"
                className="text-white hover:text-[#79B7C1] transition-colors tabular-nums font-medium"
              >
                075075 51234
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#676D74]">
          <p>
            Copyright © 2026 Brush Dental Clinic. All rights reserved.
          </p>
          <p className="text-[11px]">
            Amravati, Maharashtra · Madhokar Peth
          </p>
        </div>
      </div>
    </footer>
  );
};

