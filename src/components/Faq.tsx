import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is a smile design consultation and what happens during it?',
      answer:
        'A smile design consultation with Dr. Pooja Sadhwani begins with an in-depth conversation about your aesthetic preferences and oral health goals. We evaluate your tooth shape, symmetry, shade, and how your smile harmonizes with your facial features. You will receive a personalized treatment recommendation without pressure.',
    },
    {
      question: 'How do I schedule an appointment with Dr. Pooja Sadhwani?',
      answer:
        'You can call the clinic directly at 7719994814, or click the "Book an Appointment" button on this website to select your preferred time of day and initiate a call or WhatsApp message. We prioritize dedicated appointment slots so patients receive undivided attention.',
    },
    {
      question: 'Where is Dr. Sadhwani’s Dental Clinic located in Amravati?',
      answer:
        'The clinic is situated at Shop No. 14, New Cotton Market Main Road, Lane No. 3, Opposite Krishna Nagar, Rampuri Camp, Amravati, Maharashtra 444601. It is easily accessible with convenient landmark navigation.',
    },
    {
      question: 'Do cosmetic dental treatments look natural?',
      answer:
        'Yes. Dr. Sadhwani specializes in natural cosmetic dentistry. Treatments are customized to reflect your natural tooth characteristics, translucency, and facial symmetry rather than creating an artificial or cookie-cutter look.',
    },
    {
      question: 'Is parking and accessibility convenient at the clinic?',
      answer:
        'Yes, the clinic is located along New Cotton Market Main Road at Rampuri Camp, allowing easy vehicular approach, drop-offs, and local transit access.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Patient Inquiries</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
            Helpful answers to common questions about appointments, consultations, and our clinic.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-black/[0.08] rounded-lg bg-[#FAF9F5] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none hover:bg-black/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#17191A]">
                    {faq.question}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#F2EFE8] flex items-center justify-center text-[#14505C] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#585D62] leading-relaxed border-t border-black/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
