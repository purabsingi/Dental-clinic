import React from 'react';
import { Armchair, Shield, Microscope, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import receptionImg from '../assets/images/clinic_reception_lounge_1790499213965.jpg';
import modelImg from '../assets/images/smile_design_digital_model_1790499231540.jpg';

export const ClinicTour: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F4ED]/70 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-3 block">
              Inside the Clinic
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
              A calm, unhurried space for dental wellness.
            </h2>
            <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
              Designed to replace clinical anxiety with serene comfort. From warm natural wood textures to precision smile design planning, every corner is curated with your well-being in mind.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Lounge View */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal delay={0.1}>
              <div className="relative overflow-hidden rounded-xl bg-[#EBE7DD] border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={receptionImg}
                  alt="Reception lounge at Dr. Sadhwani’s Dental Clinic"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-sm">
                  Patient Lounge & Reception
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Armchair className="w-4 h-4 text-[#14505C] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-[#585D62] leading-relaxed">
                  A quiet, relaxing waiting area where patients can unwind comfortably before appointments without feeling hurried.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Precision Studio / Detail View */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal delay={0.15}>
              <div>
                <div className="relative overflow-hidden rounded-xl bg-[#EBE7DD] border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] aspect-[4/3]">
                  <img
                    src={modelImg}
                    alt="Precision dental shade inspection and smile design modeling"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-sm">
                    Precision Smile Assessment
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <Microscope className="w-4 h-4 text-[#14505C] mt-1 shrink-0" />
                  <p className="text-xs sm:text-sm text-[#585D62] leading-relaxed">
                    Careful examination of tooth symmetry, contouring lines, and individualized shade guides for optimal cosmetic harmony.
                  </p>
                </div>
              </div>

              {/* Hygiene & Sanitization Reassurance Card */}
              <div className="mt-6 p-4 rounded-lg bg-[#FAF9F5] border border-black/[0.08] flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#14505C] shrink-0" />
                <div className="text-xs text-[#585D62]">
                  <strong className="text-[#17191A] font-medium block">Sterile Clinical Standards</strong>
                  Every instrument and surface undergoes strict sterilization protocols between visits.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
