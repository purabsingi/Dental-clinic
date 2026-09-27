import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import smileArtImage from '../assets/images/smile_design_editorial_1790498801528.jpg';

interface SmileDesignProps {
  onOpenBooking: () => void;
}

export const SmileDesign: React.FC<SmileDesignProps> = ({ onOpenBooking }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-[#172326] text-[#FAF9F5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollReveal direction="left" delay={0.1}>
              {/* Identity context */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#79B7C1] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cosmetic Dentist | Smile Designer</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] tracking-tight mb-6 text-balance text-white">
                Your smile should feel like you.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#C7D0D2] leading-relaxed mb-8">
                <p>
                  Cosmetic dentistry is never about applying a standardized mold. A thoughtful smile design begins by respecting the natural proportions of your face, lip line, and facial expression.
                </p>
                <p className="text-base text-[#A8B4B7]">
                  At Dr. Sadhwani’s Dental Clinic in Amravati, Dr. Pooja Sadhwani approaches smile planning through careful clinical assessment, patient dialogue, and conservative techniques designed to harmonize aesthetics with functional comfort.
                </p>
              </div>

              {/* Principles list */}
              <div className="space-y-3.5 mb-10 text-sm text-[#E2E8E9]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#79B7C1] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Facial harmony:</strong> Assessing tooth form and shade in relation to your personal facial profile.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#79B7C1] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Conservative approach:</strong> Preserving healthy natural tooth structure wherever possible.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#79B7C1] shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Collaborative input:</strong> You are actively involved in discussing preferences and treatment choices.</span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#172326] bg-[#FAF9F5] hover:bg-white rounded-md transition-colors shadow-sm"
                >
                  <span>Request a Smile Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Visual */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-lg bg-[#243438] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] aspect-[4/3]">
                  {!imageError ? (
                    <img
                      src={smileArtImage}
                      alt="Dental shade guides and smile design planning tools"
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#202E32]">
                      <Sparkles className="w-8 h-8 text-[#79B7C1] mb-2" />
                      <span className="font-editorial text-xl text-white">Thoughtful Smile Planning</span>
                      <span className="text-xs text-[#A8B4B7] mt-1">Cosmetic Dentistry by Dr. Pooja Sadhwani</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#8D9FA2] px-1">
                  <span>Tailored Dental Aesthetics</span>
                  <span>Dr. Sadhwani’s Dental Clinic · Amravati</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

