import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, ExternalLink, Copy, Check, Navigation, Building2, Instagram } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = `Shop No. 14, New Cotton Market Main Road, Lane No. 3, Opp. Krishna Nagar, Rampuri Camp, Amravati, Maharashtra 444601`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Dr. Sadhwani's Dental Clinic Shop No 14 New Cotton Market Main Road Lane No 3 Opp Krishna Nagar Rampuri Camp Amravati Maharashtra 444601"
  )}`;

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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-3 block">
            Clinic Location & Contact
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
            Visiting the clinic in Amravati.
          </h2>
          <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
            Conveniently located in Rampuri Camp, opposite Krishna Nagar. Patients are encouraged to call ahead to schedule consultation times.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address and Direct Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#FAF9F5] border border-black/[0.08] rounded-lg p-8 sm:p-10 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-[#14505C]" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#14505C]">
                  Practice Address
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#17191A] font-medium mb-1">
                Dr. Sadhwani’s Dental Clinic
              </h3>
              <p className="text-sm font-medium text-[#14505C] mb-6">
                Dr. Pooja Sadhwani · Cosmetic Dentist | Smile Designer
              </p>

              <div className="space-y-3 text-sm sm:text-base text-[#464B50] leading-relaxed mb-6 pl-4 border-l-2 border-[#14505C]/30">
                <p>Shop No. 14, New Cotton Market Main Road,</p>
                <p>Lane No. 3, Opp. Krishna Nagar,</p>
                <p>Rampuri Camp, Amravati,</p>
                <p>Maharashtra 444601</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-[#585D62] mb-8">
                <span className="font-medium text-[#17191A]">Landmark:</span>
                <span>Opp. Krishna Nagar, Lane No. 3</span>
              </div>
            </div>

            <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row gap-3">
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
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Direct Phone, Instagram & Consultation Guidance */}
          <div className="lg:col-span-6 space-y-6">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAF9F5] border border-black/[0.08] rounded-lg p-8 sm:p-10"
            >
              <div className="flex items-center gap-2 mb-4 text-[#14505C]">
                <Phone className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-semibold">
                  Telephone Contact
                </span>
              </div>

              <h4 className="text-sm text-[#737579] mb-1">Clinic Contact Number</h4>
              <div className="mb-6">
                <a
                  href="tel:+917719994814"
                  className="font-editorial text-3xl sm:text-4xl text-[#17191A] hover:text-[#14505C] transition-colors tabular-nums font-medium"
                >
                  7719994814
                </a>
                <p className="text-xs text-[#585D62] mt-1">Tap to call directly from your mobile device</p>
              </div>

              <a
                href="tel:+917719994814"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#14505C] hover:bg-[#0F3D46] rounded-md transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic Now (7719994814)</span>
              </a>
            </motion.div>

            {/* Instagram Connection Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAF9F5] border border-black/[0.08] rounded-lg p-6 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D]/15 via-[#E1306C]/15 to-[#405DE6]/15 flex items-center justify-center text-[#E1306C] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#17191A]">Follow on Instagram</h4>
                  <p className="text-xs text-[#585D62]">Explore clinic cases, smile design insights & tips</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#17191A] hover:text-[#E1306C] bg-[#F2EFE8] hover:bg-[#EAE6DD] rounded-md transition-colors shrink-0"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>

            {/* Practical Patient Advice card */}
            <div className="bg-[#F5F3EC] border border-black/[0.06] rounded-lg p-6">
              <h4 className="text-sm font-semibold text-[#17191A] mb-1.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#14505C]" />
                Planning Your Visit
              </h4>
              <p className="text-xs sm:text-sm text-[#585D62] leading-relaxed">
                To guarantee uninterrupted time with Dr. Pooja Sadhwani, we recommend reserving your consultation slot via phone call before arrival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

