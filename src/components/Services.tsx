import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Smile, Shield, Activity, Sun, MessageCircleQuestion } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceList = [
    {
      id: 'cosmetic-dentistry',
      name: 'Cosmetic Dentistry',
      description: 'Aesthetic enhancements tailored to harmonize tooth form, symmetry, and proportions.',
      icon: Sparkles,
      note: 'Aesthetic care'
    },
    {
      id: 'smile-designing',
      name: 'Smile Designing',
      description: 'Customized smile planning that blends clinical precision with your personal smile objectives.',
      icon: Smile,
      note: 'Signature focus'
    },
    {
      id: 'preventive-care',
      name: 'Preventive Dental Care',
      description: 'Routine cleanings, comprehensive oral evaluations, and guidance to maintain lasting dental wellness.',
      icon: Shield,
      note: 'Foundation care'
    },
    {
      id: 'restorative-dentistry',
      name: 'Restorative Dentistry',
      description: 'Careful restoration of damaged or decayed teeth to re-establish natural function and strength.',
      icon: Activity,
      note: 'Functional health'
    },
    {
      id: 'teeth-whitening',
      name: 'Teeth Whitening',
      description: 'Professional, controlled brightening treatments designed for comfort and natural radiance.',
      icon: Sun,
      note: 'Radiance care'
    },
    {
      id: 'dental-consultation',
      name: 'Dental Consultation',
      description: 'An open, unhurried discussion of your oral health, concerns, and tailored treatment alternatives.',
      icon: MessageCircleQuestion,
      note: 'First appointment'
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-3 block">
            Clinical Services
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
            Thoughtful care for your oral health and smile aesthetics.
          </h2>
          <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
            Every treatment is tailored to the individual patient, prioritizing comfortable techniques and clear communication at every stage.
          </p>
        </motion.div>

        {/* Services Grid: Clean, restrained, single elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="group relative bg-[#FAF9F5] p-7 sm:p-8 rounded-lg border border-black/[0.08] hover:border-[#14505C]/30 hover:bg-[#F6F4ED]/50 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-md bg-[#F2EFE8] flex items-center justify-center text-[#14505C] group-hover:bg-[#14505C] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-editorial text-sm text-[#8D9094] tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#17191A] group-hover:text-[#14505C] transition-colors mb-2">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#585D62] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs text-[#737579]">{service.note}</span>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="text-xs font-semibold text-[#14505C] hover:underline underline-offset-4 focus-visible:outline-none"
                  >
                    Inquire &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

