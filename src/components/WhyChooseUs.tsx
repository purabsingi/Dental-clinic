import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Sparkles, Coffee, Compass, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const values = [
    {
      title: 'Personalized attention',
      description: 'Consultations are scheduled with ample time to listen to your needs without feeling rushed.',
      icon: UserCheck,
    },
    {
      title: 'Smile-focused care',
      description: 'Dedicated attention to facial aesthetics, tooth symmetry, and natural oral balance.',
      icon: Sparkles,
    },
    {
      title: 'Comfortable consultation',
      description: 'A serene clinic space crafted to put you at ease from the moment you step through our door.',
      icon: Coffee,
    },
    {
      title: 'Thoughtful treatment planning',
      description: 'Care plans tailored around your specific dental health conditions and aesthetic goals.',
      icon: Compass,
    },
    {
      title: 'Clear communication',
      description: 'Honest explanations of procedures, options, and maintenance without clinical jargon.',
      icon: MessageSquare,
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-black/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-3 block">
            The Clinic Experience
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
            A grounded, patient-first approach to dentistry.
          </h2>
          <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
            We focus on genuine care values that make every visit straightforward, transparent, and respectful of your time.
          </p>
        </motion.div>

        {/* 5 genuine values in an elegant layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className={`p-7 rounded-lg border border-black/[0.07] bg-[#FAF9F5] hover:bg-[#F7F5EE] transition-colors duration-150 flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-[#F2EFE8] flex items-center justify-center text-[#14505C] mb-5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-[#17191A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#585D62] leading-relaxed">
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

