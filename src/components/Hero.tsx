import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/clinic_interior_hero_1790498775389.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Zero-Pill Trust Line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#14505C] mb-6"
            >
              <span>Cosmetic Dentist</span>
              <span className="text-[#14505C]/40" aria-hidden="true">·</span>
              <span>Smile Designer</span>
              <span className="text-[#14505C]/40" aria-hidden="true">·</span>
              <span>Amravati</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#17191A] font-medium leading-[1.12] tracking-tight text-balance mb-6"
            >
              Confident Smiles, Thoughtfully Designed.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#585D62] leading-relaxed max-w-xl mb-10 text-pretty"
            >
              Personalized dental care and smile-focused treatments by Dr. Pooja Sadhwani in Amravati.
              Focused on clinical comfort, natural aesthetics, and thoughtful consultation.
            </motion.p>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10"
            >
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#14505C] hover:bg-[#0F3D46] active:bg-[#0B2C33] rounded-md transition-all shadow-xs group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="tel:+917719994814"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#17191A] hover:text-[#14505C] bg-[#F2EFE8] hover:bg-[#EAE6DD] border border-black/[0.04] rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#14505C]" />
                <span className="tabular-nums">Call 7719994814</span>
              </a>
            </motion.div>

            {/* Subtle genuine clinic highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-black/[0.06] flex items-center gap-3 text-xs sm:text-sm text-[#737579]"
            >
              <ShieldCheck className="w-4 h-4 text-[#14505C] shrink-0" />
              <span>Independent dental practice dedicated to comfortable, one-on-one patient attention.</span>
            </motion.div>
          </div>

          {/* Right Column: Visual Area with Resilient Fallback */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-lg bg-[#EFECE4] border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.06)] aspect-[4/3] sm:aspect-[4/3]">
                {!imageError ? (
                  <img
                    src={heroImage}
                    alt="Dr. Sadhwani’s Dental Clinic interior and consultation environment"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
                    }`}
                  />
                ) : (
                  /* Zero-broken-image fallback container */
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#EAE6DD]">
                    <div className="w-12 h-12 rounded-full bg-[#14505C]/10 flex items-center justify-center mb-3 text-[#14505C]">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span className="font-editorial text-xl text-[#17191A] mb-1">Dr. Sadhwani’s Dental Clinic</span>
                    <span className="text-xs text-[#585D62]">Rampuri Camp, Amravati</span>
                  </div>
                )}
              </div>

              {/* Quiet caption underneath visual */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#737579] px-1">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#14505C]" />
                  Clinical Consultation Space
                </span>
                <span>Amravati, Maharashtra</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

