import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, ExternalLink, Copy, Check, Navigation, Building2, MessageCircle, Clock } from 'lucide-react';
import { CLINIC_LOCAL_IMAGE, CLINIC_INFO } from '../assets/clinicAssets';

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = CLINIC_INFO.address;
  const mapsUrl = CLINIC_INFO.googleMapsUrl;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-2 block">
            Clinic Location & Contact · संपर्क व पत्ता
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
            Easy to visit, central location in Amravati.
          </h2>
          <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
            Located right at Stand Complex, Rajapeth - Irwin Square Flyover. Easily accessible by two-wheeler, auto, or car with convenient parking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address and Direct Contact Card with Real Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#FAF9F5] border border-black/[0.08] rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs"
          >
            <div>
              {/* Storefront Visual Thumbnail for immediate recognition */}
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-[16/9] bg-[#111617] border border-black/10">
                <img
                  src={CLINIC_LOCAL_IMAGE}
                  alt="Brush Dental Clinic exterior sign board at Stand Complex"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                  Look for the glowing pink "BRUSH" signboard
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-[#14505C]" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#14505C]">
                  Clinic Address · दवाखान्याचा पत्ता
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#17191A] font-bold mb-1">
                BRUSH Dental Clinic
              </h3>
              <p className="text-sm font-semibold text-[#C2185B] mb-4">
                डॉ. स्वप्नील दहापुते · Dr. Swapnil Dahapute (BDS, MDS - Pediatric Dentist)
              </p>

              <div className="space-y-1.5 text-sm sm:text-base text-[#464B50] leading-relaxed mb-6 pl-4 border-l-2 border-[#14505C]/40">
                <p className="font-medium text-[#17191A]">Stand Complex,</p>
                <p>Rajapeth - Irwin Square Flyover,</p>
                <p>Madhokar Peth, Amravati,</p>
                <p>Maharashtra 444605</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-[#585D62] mb-6 p-3 rounded-md bg-[#F5F2E9]">
                <MapPin className="w-4 h-4 text-[#14505C] shrink-0" />
                <span><strong>Landmark:</strong> Stand Complex, near Rajapeth - Irwin Square Flyover, Madhokar Peth</span>
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.08] flex flex-col sm:flex-row gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#14505C] hover:bg-[#0F3D46] rounded-md transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-medium text-[#17191A] bg-[#F2EFE8] hover:bg-[#EAE6DD] rounded-md transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#585D62]" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Direct Phone, WhatsApp & Timings */}
          <div className="lg:col-span-6 space-y-6">
            {/* Phone & WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAF9F5] border border-black/[0.08] rounded-xl p-6 sm:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-4 text-[#14505C]">
                <Phone className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-bold">
                  Direct Phone & WhatsApp Booking
                </span>
              </div>

              <h4 className="text-sm text-[#737579] mb-1">Doctor & Clinic Contact</h4>
              <div className="mb-6">
                <a
                  href="tel:+917507551234"
                  className="font-editorial text-3xl sm:text-4xl text-[#17191A] hover:text-[#14505C] transition-colors tabular-nums font-bold block"
                >
                  075075 51234
                </a>
                <p className="text-xs text-[#585D62] mt-1">Tap below to call directly or send a WhatsApp message</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+917507551234"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-white bg-[#14505C] hover:bg-[#0F3D46] rounded-md transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 075075 51234</span>
                </a>

                <a
                  href="https://wa.me/917507551234?text=Hello%20Dr.%20Swapnil%20Dahapute%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20at%20Brush%20Dental%20Clinic%20in%20Amravati."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5C] rounded-md transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Timings and Walk-in Guide */}
            <div className="bg-[#F5F3EC] border border-black/[0.06] rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[#17191A] mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#14505C]" />
                Clinic Hours & Visiting Advice · दवाखान्याची वेळ
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-[#585D62] leading-relaxed">
                <div className="flex justify-between border-b border-black/[0.06] pb-1.5">
                  <span className="font-medium text-[#17191A]">Monday – Saturday:</span>
                  <span>Morning & Evening Sessions</span>
                </div>
                <div className="flex justify-between pt-1 text-[#737579]">
                  <span>Prior Appointment:</span>
                  <span className="text-[#14505C] font-semibold">Recommended to avoid waiting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

