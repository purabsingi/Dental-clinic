import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, MapPin, Sparkles, MessageCircle, Heart, Maximize2, X, Navigation } from 'lucide-react';
import { CLINIC_GOOGLE_IMAGE_URL, CLINIC_LOCAL_IMAGE, CLINIC_INFO } from '../assets/clinicAssets';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(CLINIC_GOOGLE_IMAGE_URL);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageError = () => {
    // If the remote Google usercontent URL fails or has CORS issues, smoothly fallback to downloaded local copy
    if (imgSrc !== CLINIC_LOCAL_IMAGE) {
      setImgSrc(CLINIC_LOCAL_IMAGE);
    }
  };

  return (
    <>
      <section id="home" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Local Customer Friendly Copy & Direct Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              {/* Respectful, Modern & Attractive Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3.5"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider bg-gradient-to-r from-[#FF2A85]/15 via-[#E11D48]/10 to-[#0891B2]/15 text-[#E11D48] border border-[#FF2A85]/25 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" />
                  <span>Amravati Leading Clinic</span>
                </span>
                <span className="text-[#0D6E7E]/30" aria-hidden="true">·</span>
                <span className="text-[#0D6E7E] font-bold">{CLINIC_INFO.doctorName}</span>
                <span className="text-[#0D6E7E]/30" aria-hidden="true">·</span>
                <span className="text-white bg-gradient-to-r from-[#0D6E7E] to-[#0891B2] px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-xs">
                  {CLINIC_INFO.qualification}
                </span>
              </motion.div>

              {/* Main Clear Headline understood by any local patient */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#12181A] font-medium leading-[1.14] tracking-tight text-balance mb-4"
              >
                Gentle, <span className="bg-gradient-to-r from-[#0D6E7E] via-[#0891B2] to-[#FF2A85] bg-clip-text text-transparent font-semibold">Pain-Free Dental Care</span> for Kids & Families.
              </motion.h1>

              {/* Local Friendly Subtitle in simple, honest Marathi & English words */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-6 text-pretty"
              >
                Welcome to <strong className="text-[#0D6E7E] font-semibold">{CLINIC_INFO.name}</strong> at Stand Complex, Amravati. Whether it’s your child’s first friendly dental visit, relief from sudden toothache, cavity fillings, milk tooth care, or a confident smile makeover—we make every visit painless, calm, and fear-free.
              </motion.p>

              {/* Quick Local Trust Badges - Rich Colorful Accents */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8 text-xs"
              >
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50/60 border border-pink-200/80 text-pink-950 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-[#FF2A85] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                  <span className="font-semibold text-[11px] sm:text-xs">100% Kid-Friendly & Calm</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50/60 border border-teal-200/80 text-teal-950 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0D6E7E] to-[#0891B2] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-[11px] sm:text-xs">Painless & Sterile Care</span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50/60 border border-sky-200/80 text-sky-950 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-[11px] sm:text-xs">Stand Complex, Flyover</span>
                </div>
              </motion.div>

              {/* Conversion CTA Group: Easy Call, WhatsApp & Booking */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mb-5"
              >
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#0D6E7E] via-[#0A5F6E] to-[#0891B2] hover:from-[#095461] hover:to-[#077691] active:scale-[0.98] rounded-xl transition-all shadow-[0_6px_20px_rgba(13,110,126,0.3)] hover:shadow-[0_8px_24px_rgba(13,110,126,0.4)] group"
                >
                  <span>Book Appointment (अपॉइंटमेंट घ्या)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5">
                  <a
                    href={`tel:${CLINIC_INFO.phoneDial}`}
                    className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-[#0D6E7E] hover:text-[#095461] bg-white hover:bg-teal-50/50 border border-[#0D6E7E]/30 rounded-xl transition-all shadow-xs hover:border-[#0D6E7E]"
                  >
                    <Phone className="w-4 h-4 text-[#0D6E7E]" />
                    <span className="tabular-nums font-bold">Call Now</span>
                  </a>

                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-bold text-[#15803D] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 rounded-xl transition-all shadow-xs hover:scale-[1.02]"
                    title="Chat directly on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-[#16A34A] fill-[#16A34A]/20" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>

              {/* Local Landmark guidance & quick Google Map link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xs text-[#64748B] flex flex-wrap items-center gap-2"
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0D6E7E] shrink-0" />
                  <span>{CLINIC_INFO.address}</span>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FF2A85] hover:text-[#E11D48] hover:underline font-bold"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Exact Google Maps Storefront Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative order-1 lg:order-2"
            >
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Visual Frame with vibrant neon halo */}
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#0B1011] border-2 border-[#FF2A85]/40 hover:border-[#FF2A85] shadow-[0_16px_50px_rgba(255,42,133,0.22),0_6px_25px_rgba(8,145,178,0.18)] aspect-[4/3] sm:aspect-[4/3] transition-all duration-300"
                  onClick={() => setIsZoomed(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setIsZoomed(true)}
                  aria-label="Click to enlarge Brush Dental Clinic real photo"
                >
                  <img
                    src={imgSrc}
                    alt="Brush Dental Clinic exterior storefront at Stand Complex Amravati with Dr. Swapnil Dahapute sign board"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={handleImageError}
                    className={`w-full h-full object-cover object-center group-hover:scale-103 transition-all duration-700 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
                    }`}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="bg-black/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                      <span>Verified Clinic Facade</span>
                    </div>

                    <div className="bg-black/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/15 group-hover:bg-[#FF2A85] transition-colors shadow-sm">
                      <Maximize2 className="w-3 h-3" />
                      <span className="hidden sm:inline">Tap to View</span>
                    </div>
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 sm:p-5 text-white pointer-events-none">
                    <p className="text-sm sm:text-base font-bold flex items-center gap-1.5 text-white">
                      <Sparkles className="w-4 h-4 text-[#FF2A85] shrink-0" />
                      <span className="tracking-wide">BRUSH DENTAL CLINIC</span>
                    </p>
                    <p className="text-xs text-[#F1F5F9] mt-1 font-semibold flex items-center gap-1.5">
                      <span className="text-[#FF85C0] font-bold">डॉ. स्वप्नील दहापुते</span>
                      <span className="text-white/40">·</span>
                      <span>Pediatric Dentist</span>
                    </p>
                    <p className="text-[11px] text-[#94A3B8] mt-0.5 font-medium">
                      Stand Complex, Rajapeth - Irwin Square Flyover, Amravati
                    </p>
                  </div>
                </div>

                {/* Subtitle credentials below image */}
                <div className="mt-3 flex items-center justify-between text-xs text-[#475569] px-1 font-medium">
                  <span className="flex items-center gap-1.5 font-semibold text-[#0D6E7E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A85]"></span>
                    <span>{CLINIC_INFO.doctorNameDevanagari} ({CLINIC_INFO.registrationNo})</span>
                  </span>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF2A85] hover:text-[#E11D48] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox / Full-screen Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#111617] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 sm:p-4 flex items-center justify-between border-b border-white/10 text-white bg-black/50">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold flex items-center gap-2">
                    <span>Brush Dental Clinic — Stand Complex, Amravati</span>
                  </h3>
                  <p className="text-xs text-[#A8B2B4]">
                    Dr. Swapnil Dahapute · Pediatric Dentist
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label="Close image viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={imgSrc}
                  alt="Brush Dental Clinic Front View"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-black/60 text-white text-xs">
                <p className="text-[#D0D6D8]">
                  Address: Stand Complex, Rajapeth - Irwin Square Flyover, Madhokar Peth, Amravati
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#14505C] hover:bg-[#0F3D46] rounded text-white font-medium inline-flex items-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Maps</span>
                  </a>
                  <a
                    href={`tel:${CLINIC_INFO.phoneDial}`}
                    className="px-3 py-1.5 bg-[#E91E63] hover:bg-[#C2185B] rounded text-white font-medium inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: {CLINIC_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


