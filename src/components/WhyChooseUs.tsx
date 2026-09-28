import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Sparkles, ShieldCheck, Compass, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const values = [
    {
      title: 'MDS Specialist Care (तज्ज्ञ डॉक्टर)',
      description: 'Treatment led by Dr. Swapnil Dahapute (MDS), with specialized expertise in children and family dental care.',
      icon: UserCheck,
      iconBg: 'bg-gradient-to-br from-[#0D6E7E] to-[#0891B2] text-white',
      badge: 'Certified Specialist',
      badgeColor: 'bg-teal-50 text-teal-800 border-teal-200/60',
    },
    {
      title: 'No Pain, No Fear (वेदनारहित उपचार)',
      description: 'Gentle, modern techniques and child-friendly care so children and nervous patients feel totally calm.',
      icon: Sparkles,
      iconBg: 'bg-gradient-to-br from-[#FF2A85] to-[#E11D48] text-white',
      badge: '100% Gentle',
      badgeColor: 'bg-pink-50 text-pink-800 border-pink-200/60',
    },
    {
      title: '100% Sterile & Safe (पूर्णपणे निर्जंतुक)',
      description: 'Strict hospital-grade autoclave sterilization for every instrument. Your health and hygiene come first.',
      icon: ShieldCheck,
      iconBg: 'bg-gradient-to-br from-[#059669] to-[#10B981] text-white',
      badge: 'Hospital Grade',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
    },
    {
      title: 'Honest & Transparent Advice (योग्य सल्ला)',
      description: 'We treat you like family. Complete clarity about treatments and charges beforehand with zero hidden surprises.',
      icon: MessageSquare,
      iconBg: 'bg-gradient-to-br from-[#2563EB] to-[#4F46E5] text-white',
      badge: 'Zero Surprise Bills',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200/60',
    },
    {
      title: 'Central Stand Complex Location (मध्यवर्ती)',
      description: 'Easily accessible at Stand Complex right by the Rajapeth - Irwin Square Flyover, with hassle-free parking.',
      icon: Compass,
      iconBg: 'bg-gradient-to-br from-[#F59E0B] to-[#EA580C] text-white',
      badge: 'Easy Parking',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/60',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-black/[0.05] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6E7E] mb-2 block">
            Why Amravati Chooses Us · आमची वैशिष्ट्ये
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#12181A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
            Dental care you and your family can trust with open eyes.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            We focus on genuine care, clean treatments, and honest advice that makes every clinic visit easy, affordable, and stress-free.
          </p>
        </motion.div>

        {/* 5 genuine values in an attractive, colorful layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className={`p-7 rounded-2xl border border-black/[0.08] bg-white hover:border-[#0D6E7E]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#17191A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


