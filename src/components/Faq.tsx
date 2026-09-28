import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is dental treatment or toothache treatment painful at Brush Dental Clinic?',
      answer:
        'Not at all! Dr. Swapnil Dahapute uses gentle, modern numbing and advanced methods so treatments like cavity fillings, root canals, or cleanings are virtually painless. We take special care to keep children and nervous patients calm and smiling throughout.',
    },
    {
      question: 'When should I bring my child for their first dental visit?',
      answer:
        'Pediatric dentists recommend bringing your child around their first birthday or when their first baby tooth emerges. This helps catch early cavity risks, check healthy jaw growth, and builds a friendly, fear-free relationship with the dentist.',
    },
    {
      question: 'Do you treat adult patients, or only children?',
      answer:
        'We treat the whole family! In addition to Dr. Dahapute’s specialized pediatric dental care for kids, Brush Dental Clinic provides full adult dental services—including toothache relief, root canals, cosmetic smile designing, gap closure, ceramic caps, and teeth brightening.',
    },
    {
      question: 'Where exactly is the clinic located in Amravati?',
      answer:
        'Brush Dental Clinic is located at Stand Complex, Rajapeth - Irwin Square Flyover, Madhokar Peth, Amravati (Maharashtra 444605). You will easily spot our illuminated pink "BRUSH DENTAL CLINIC" neon sign board right from the flyover approach.',
    },
    {
      question: 'How do I book an appointment?',
      answer:
        'It is very easy! Just call us at 075075 51234 or click the WhatsApp button on this website to message us directly. Booking ahead gives you a dedicated time slot without waiting.',
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
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions · नेहमी विचारले जाणारे प्रश्न</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
            Quick, honest answers to make your clinic visit completely stress-free.
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
