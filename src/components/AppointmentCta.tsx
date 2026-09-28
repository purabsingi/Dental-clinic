import React from 'react';
import { Phone, MapPin, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CLINIC_INFO } from '../assets/clinicAssets';

interface AppointmentCtaProps {
  onOpenBooking: () => void;
}

export const AppointmentCta: React.FC<AppointmentCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#FAF9F5] via-[#F0FDF4]/30 to-[#FAF9F5] border-y border-black/[0.06] relative overflow-hidden">
      {/* Decorative colored glow circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF2A85]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#0891B2]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D6E7E] bg-teal-50 border border-teal-200/60 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
            <span>Easy Appointments · सोपी अपॉइंटमेंट</span>
          </span>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#12181A] font-medium leading-[1.18] tracking-tight mb-5 text-balance">
            Give your teeth the care they deserve today.
          </h2>

          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto mb-9 leading-relaxed text-pretty">
            Book your visit with <strong className="text-[#0D6E7E] font-semibold">{CLINIC_INFO.doctorName}</strong> at <strong className="text-[#0D6E7E] font-semibold">{CLINIC_INFO.name}</strong> (Stand Complex, Rajapeth - Irwin Square Flyover, Amravati). Quick appointments, comfortable waiting area, and gentle treatment for kids and adults.
          </p>

          {/* Action Buttons with high-contrast, lively colors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <a
              href={`tel:${CLINIC_INFO.phoneDial}`}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold tracking-wide text-white bg-gradient-to-r from-[#0D6E7E] to-[#0891B2] hover:from-[#095461] hover:to-[#077691] rounded-xl transition-all shadow-[0_6px_20px_rgba(13,110,126,0.3)] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span className="tabular-nums">Call: {CLINIC_INFO.phone}</span>
            </a>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BA5C] rounded-xl transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Book on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#12181A] bg-white hover:bg-teal-50/50 border border-black/[0.1] hover:border-[#0D6E7E] rounded-xl transition-all shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#0D6E7E]" />
              <span>Select Time Slot</span>
            </button>

            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-[#FF2A85] hover:text-[#E11D48] bg-pink-50/60 hover:bg-pink-100/60 border border-pink-200/80 rounded-xl transition-all shadow-xs"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Reassurance line */}
          <p className="text-xs text-[#64748B] font-medium">
            Direct contact with Dr. Swapnil Dahapute’s clinic · No confusing forms or registration fees
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};


