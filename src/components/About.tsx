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
                      alt="Dr. Pooja Sadhwani consultation environment at Dr. Sadhwani’s Dental Clinic"
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
                      <span className="font-editorial text-xl text-[#17191A]">Dr. Pooja Sadhwani</span>
                      <span className="text-xs text-[#585D62] mt-1">Cosmetic Dentist & Smile Designer</span>
                    </div>
                  )}
                </div>

                {/* Doctor Details Bar */}
                <div className="mt-4 p-4 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex flex-col">
                  <span className="text-sm font-semibold text-[#17191A]">Dr. Pooja Sadhwani</span>
                  <span className="text-xs text-[#14505C] font-medium mt-0.5">Cosmetic Dentist | Smile Designer</span>
                  <span className="text-xs text-[#737579] mt-1">Dr. Sadhwani’s Dental Clinic · Amravati</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <ScrollReveal direction="right" delay={0.15}>
              {/* Category / Context tag */}
              <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-3 block">
                About the Practice
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-6 text-balance">
                Care that puts your smile first.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#585D62] leading-relaxed mb-8">
                <p>
                  At Dr. Sadhwani’s Dental Clinic, dental care is approached with patience, aesthetic precision, and genuine personal attention. Led by <strong className="font-medium text-[#17191A]">Dr. Pooja Sadhwani</strong>, the clinic is dedicated to helping patients achieve healthy, confident smiles through thoughtfully tailored treatments.
                </p>
                <p className="text-base text-[#585D62]">
                  As a cosmetic dentist and smile designer in Amravati, Dr. Sadhwani believes that every smile is unique. Consultations begin with careful listening—understanding your personal aesthetic goals, addressing oral health concerns, and designing treatment steps focused on long-term comfort and natural-looking harmony.
                </p>
              </div>

              {/* Core Values / Philosophy grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/[0.06]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex items-center justify-center shrink-0 text-[#14505C]">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">Individual Focus</h3>
                    <p className="text-xs text-[#6C7075] mt-0.5 leading-normal">
                      One-on-one attention without rushed appointments or crowded waiting times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex items-center justify-center shrink-0 text-[#14505C]">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">Aesthetic Harmony</h3>
                    <p className="text-xs text-[#6C7075] mt-0.5 leading-normal">
                      Smile design designed to complement your individual facial features naturally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex items-center justify-center shrink-0 text-[#14505C]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">Clear Guidance</h3>
                    <p className="text-xs text-[#6C7075] mt-0.5 leading-normal">
                      Straightforward explanations regarding treatment choices and oral care routines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#FAF9F5] border border-black/[0.06] flex items-center justify-center shrink-0 text-[#14505C]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#17191A]">Calm Atmosphere</h3>
                    <p className="text-xs text-[#6C7075] mt-0.5 leading-normal">
                      A peaceful clinic environment thoughtfully organized for patient ease.
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

