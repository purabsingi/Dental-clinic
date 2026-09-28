import React, { useState } from 'react';
import { Sparkles, HeartHandshake, Eye, MessageSquare } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import suiteImage from '../assets/images/doctor_consultation_suite_1790498788214.jpg';

export const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F5F3EC]/70 border-y border-black/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual / Consultation suite */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-lg bg-[#EFECE4] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] aspect-[3/4]">
                  {!imageError ? (
                    <img
                      src={suiteImage}
                      alt="Consultation environment at Brush Dental Clinic"
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#E8E4DA]">
                      <div className="w-12 h-12 rounded-full bg-[#14505C]/10 flex items-center justify-center mb-3 text-[#14505C]">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <span className="font-editorial text-xl text-[#17191A]">Dr. Swapnil Dahapute</span>
                      <span className="text-xs text-[#585D62] mt-1">Pediatric Dentist · Brush Dental Clinic</span>
                    </div>
                  )}
                </div>

                {/* Doctor Details Bar */}
                <div className="mt-4 p-4 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-[#17191A]">Dr. Swapnil Dahapute</span>
                    <span className="text-[11px] bg-[#14505C]/10 text-[#14505C] font-semibold px-2 py-0.5 rounded">
                      Reg: A-18174
                    </span>
                  </div>
                  <span className="text-xs text-[#C2185B] font-bold mt-1">
                    BDS, MDS (Pediatric Dentist)
                  </span>
                  <span className="text-xs text-[#585D62] mt-0.5 font-medium">
                    Brush Dental Clinic · Stand Complex, Madhokar Peth, Amravati
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <ScrollReveal direction="right" delay={0.15}>
              {/* Category / Context tag */}
              <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-2 block">
                Meet Your Doctor · दंततज्ज्ञ परिचय
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-5 text-balance">
                Friendly, honest dental care you can always trust.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#585D62] leading-relaxed mb-8">
                <p>
                  At <strong className="font-semibold text-[#17191A]">Brush Dental Clinic</strong>, led by <strong className="font-semibold text-[#17191A]">Dr. Swapnil Dahapute (BDS, MDS)</strong>, we understand that visiting a dentist can sometimes cause worry—especially for young kids and nervous patients.
                </p>
                <p className="text-base text-[#585D62]">
                  That is why our Amravati clinic is built around warmth, patience, and clear communication. Every appointment begins by listening carefully to you or your child, explaining each step simply in Marathi, Hindi, or English, and ensuring total comfort before any treatment begins.
                </p>
              </div>

              {/* Core Values / Philosophy grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/[0.06]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex items-center justify-center shrink-0 text-[#E91E63]">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">Zero Fear for Kids (बालस्नेही उपचार)</h3>
                    <p className="text-xs text-[#6C7075] mt-0.5 leading-normal">
                      Gentle, play-based approach so your children look forward to every visit without crying or anxiety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex items-center justify-center shrink-0 text-[#14505C]">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">Painless Treatment (वेदनारहित)</h3>
                    <p className="text-xs text-[#6C7075] mt-0.5 leading-normal">
                      Modern equipment and delicate numbing techniques for comfortable cavity fillings and root canals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex items-center justify-center shrink-0 text-[#14505C]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">Honest, Transparent Advice</h3>
                    <p className="text-xs text-[#6C7075] mt-0.5 leading-normal">
                      No pushy treatments or unexpected bills. You receive clear explanations of options upfront.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex items-center justify-center shrink-0 text-[#14505C]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">Clean & Hygienic Clinic</h3>
                    <p className="text-xs text-[#6C7075] mt-0.5 leading-normal">
                      Hospital-grade autoclave sterilization for every single instrument to guarantee your family's safety.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

