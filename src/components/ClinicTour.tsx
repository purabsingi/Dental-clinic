import React from 'react';
import { Armchair, Shield, MapPin, Sparkles, CheckCircle2, Navigation } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CLINIC_LOCAL_IMAGE, CLINIC_INFO } from '../assets/clinicAssets';
import receptionImg from '../assets/images/clinic_reception_lounge_1790499213965.jpg';
import modelImg from '../assets/images/smile_design_digital_model_1790499231540.jpg';

export const ClinicTour: React.FC = () => {
  return (
    <section id="tour" className="py-16 sm:py-24 lg:py-28 bg-[#F6F4ED]/70 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-2 block">
              Clinic Tour & Premises · आमचा दवाखाना
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
              A peaceful, hygienic clinic right at Stand Complex, Amravati.
            </h2>
            <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
              Designed to replace clinic fear with friendly warmth. Clean air-conditioned interiors, sanitized tools, and a calm space where children and parents feel completely relaxed.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Part Real Photography Gallery - Full Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">
          {/* 1. Exact Google Maps Storefront Landmark */}
          <ScrollReveal delay={0.08}>
            <div className="flex flex-col h-full bg-[#FAF9F5] rounded-xl border border-black/[0.08] overflow-hidden p-3 shadow-xs hover:border-[#14505C]/30 transition-colors">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-[#111617]">
                <img
                  src={CLINIC_LOCAL_IMAGE}
                  alt="Brush Dental Clinic exterior signboard at Stand Complex"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] animate-pulse"></span>
                  <span>Original Facade</span>
                </div>
              </div>
              <div className="pt-3.5 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-[#17191A] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#14505C] shrink-0" />
                    <span>Illuminated Storefront</span>
                  </h3>
                  <p className="text-xs text-[#585D62] mt-1.5 leading-relaxed">
                    Easy to spot glowing pink "BRUSH DENTAL CLINIC" signboard at Stand Complex near Rajapeth - Irwin Square flyover.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-black/[0.05] flex items-center justify-between text-[11px] text-[#14505C] font-semibold">
                  <span>Dr. Swapnil Dahapute</span>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline text-[#E91E63]"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Locate</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Patient Reception Lounge */}
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col h-full bg-[#FAF9F5] rounded-xl border border-black/[0.08] overflow-hidden p-3 shadow-xs">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-[#EBE7DD]">
                <img
                  src={receptionImg}
                  alt="Reception lounge at Brush Dental Clinic"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded flex items-center gap-1">
                  <Armchair className="w-3 h-3 text-[#79B7C1]" />
                  <span>Waiting Area</span>
                </div>
              </div>
              <div className="pt-3 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-[#17191A] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#14505C] shrink-0" />
                    <span>Calm Waiting Lounge</span>
                  </h3>
                  <p className="text-xs text-[#585D62] mt-1 leading-relaxed">
                    Clean, air-conditioned seating where families and kids can relax without crowded rush or noisy stress.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Modern Operatory & Sterile Setup */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col h-full bg-[#FAF9F5] rounded-xl border border-black/[0.08] overflow-hidden p-3 shadow-xs">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-[#EBE7DD]">
                <img
                  src={modelImg}
                  alt="Painless dental treatment & smile design studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#25D366]" />
                  <span>Sterile Treatment</span>
                </div>
              </div>
              <div className="pt-3 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-[#17191A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#14505C] shrink-0" />
                    <span>Painless Dental Chair</span>
                  </h3>
                  <p className="text-xs text-[#585D62] mt-1 leading-relaxed">
                    Equipped with modern dental tools, digital monitors, and gentle pediatric setups for smooth treatment.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Clean Hygiene & Sterilization Reassurance */}
        <ScrollReveal delay={0.25}>
          <div className="p-5 rounded-lg bg-[#FAF9F5] border border-black/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#14505C]/10 flex items-center justify-center text-[#14505C] shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-sm text-[#17191A] font-semibold block">
                  Strict 100% Autoclave Sterilization
                </strong>
                <p className="text-xs text-[#585D62]">
                  Every instrument is packed and sealed after medical-grade heat sterilization. Safe for kids, pregnant mothers, and seniors.
                </p>
              </div>
            </div>

            <a
              href="tel:+917507551234"
              className="whitespace-nowrap px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#14505C] bg-white border border-[#14505C]/30 hover:bg-[#F2EFE8] rounded-md transition-colors"
            >
              Call Clinic: 075075 51234
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
