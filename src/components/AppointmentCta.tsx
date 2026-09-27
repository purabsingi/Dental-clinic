import React from 'react';
import { Phone, MapPin, Calendar } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AppointmentCtaProps {
  onOpenBooking: () => void;
}

export const AppointmentCta: React.FC<AppointmentCtaProps> = ({ onOpenBooking }) => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Shop+No+14+New+Cotton+Market+Main+Road+Lane+No+3+Opp+Krishna+Nagar+Rampuri+Camp+Amravati+Maharashtra+444601";

  return (
    <section className="py-20 sm:py-24 bg-[#F3F1E9] border-y border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-3 inline-block">
            Appointments & Consultations
          </span>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-5 text-balance">
            Ready to take the next step toward your smile?
          </h2>

          <p className="text-base sm:text-lg text-[#585D62] max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Book a consultation with Dr. Pooja Sadhwani at Dr. Sadhwani’s Dental Clinic, Amravati.
            We welcome new and returning patients for cosmetic and general oral care consultations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+917719994814"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#14505C] hover:bg-[#0F3D46] active:bg-[#0B2C33] rounded-md transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span className="tabular-nums">Call 7719994814</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#17191A] bg-white hover:bg-[#FAF9F5] border border-black/[0.1] rounded-md transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#14505C]" />
              <span>Request Time Slot</span>
            </button>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#585D62] hover:text-[#17191A] bg-transparent hover:bg-black/[0.03] border border-black/[0.08] rounded-md transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#737579]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Small reassurance line */}
          <p className="text-xs text-[#737579]">
            Direct appointment coordination · No complex online registrations required
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

