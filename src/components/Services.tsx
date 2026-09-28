import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Smile, Shield, Activity, Sun, MessageCircleQuestion, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceList = [
    {
      id: 'pediatric-dentistry',
      name: 'Kids Dental Care (लहान मुलांचे दंतोपचार)',
      description: 'Specialized gentle care for children & teens: painless cavity fillings, milk teeth protection, fluoride anti-cavity coating, and gentle habit guidance.',
      icon: Smile,
      note: 'Dr. Dahapute Specialty (MDS)',
      cardGradient: 'from-pink-500/10 via-rose-500/5 to-white',
      borderColor: 'border-pink-200/80 hover:border-pink-400',
      iconBg: 'bg-gradient-to-br from-[#FF2A85] to-[#E11D48] text-white shadow-[0_4px_12px_rgba(255,42,133,0.3)]',
      badgeColor: 'bg-pink-100/80 text-pink-700 font-bold',
      accentColor: 'text-[#E11D48]',
    },
    {
      id: 'pain-relief-rct',
      name: 'Toothache Relief & Root Canal (रूट कॅनॉल)',
      description: 'Instant relief from severe tooth pain and sensitivity. Modern, painless single-sitting root canal treatment that saves your natural tooth.',
      icon: Activity,
      note: 'Fast Pain Relief',
      cardGradient: 'from-cyan-500/10 via-teal-500/5 to-white',
      borderColor: 'border-cyan-200/80 hover:border-cyan-400',
      iconBg: 'bg-gradient-to-br from-[#0D6E7E] to-[#0891B2] text-white shadow-[0_4px_12px_rgba(8,145,178,0.3)]',
      badgeColor: 'bg-cyan-100/80 text-cyan-800 font-bold',
      accentColor: 'text-[#0D6E7E]',
    },
    {
      id: 'teeth-cleaning',
      name: 'Cleaning & Stain Removal (दात स्वच्छता)',
      description: 'Ultrasonic gentle cleaning that removes yellow stains, tartar, and plaque for clean teeth, fresh breath, and healthy pink gums.',
      icon: Shield,
      note: 'Preventive Care',
      cardGradient: 'from-emerald-500/10 via-teal-500/5 to-white',
      borderColor: 'border-emerald-200/80 hover:border-emerald-400',
      iconBg: 'bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-[0_4px_12px_rgba(16,185,129,0.3)]',
      badgeColor: 'bg-emerald-100/80 text-emerald-800 font-bold',
      accentColor: 'text-[#059669]',
    },
    {
      id: 'smile-designing',
      name: 'Smile Designing & Gap Closure (सुंदर हसू)',
      description: 'Closing gaps between front teeth, repairing chipped edges with tooth-colored composite bonding, and natural artistic smile enhancement.',
      icon: Sparkles,
      note: 'Cosmetic Artistry',
      cardGradient: 'from-purple-500/10 via-fuchsia-500/5 to-white',
      borderColor: 'border-purple-200/80 hover:border-purple-400',
      iconBg: 'bg-gradient-to-br from-[#9333EA] to-[#C026D3] text-white shadow-[0_4px_12px_rgba(192,38,211,0.3)]',
      badgeColor: 'bg-purple-100/80 text-purple-800 font-bold',
      accentColor: 'text-[#9333EA]',
    },
    {
      id: 'teeth-whitening',
      name: 'Teeth Brightening (दात पांढरे करणे)',
      description: 'Safe, enamel-friendly clinic whitening that lifts dullness and yellow stains for a confident, bright sparkling smile before events and weddings.',
      icon: Sun,
      note: 'Enamel-Safe Brightening',
      cardGradient: 'from-amber-500/10 via-orange-500/5 to-white',
      borderColor: 'border-amber-200/80 hover:border-amber-400',
      iconBg: 'bg-gradient-to-br from-[#F59E0B] to-[#EA580C] text-white shadow-[0_4px_12px_rgba(245,158,11,0.3)]',
      badgeColor: 'bg-amber-100/80 text-amber-800 font-bold',
      accentColor: 'text-[#D97706]',
    },
    {
      id: 'family-consultation',
      name: 'Family Dental Checkup & Advice (तपासणी)',
      description: 'Comprehensive digital oral examination and unhurried consultation for all family members. Honest advice with zero pressure or surprise bills.',
      icon: MessageCircleQuestion,
      note: 'First Consultation',
      cardGradient: 'from-blue-500/10 via-indigo-500/5 to-white',
      borderColor: 'border-blue-200/80 hover:border-blue-400',
      iconBg: 'bg-gradient-to-br from-[#2563EB] to-[#4F46E5] text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]',
      badgeColor: 'bg-blue-100/80 text-blue-800 font-bold',
      accentColor: 'text-[#2563EB]',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative ambient background spots */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-[#FF2A85]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#0891B2]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6E7E] mb-2 block">
            Our Dental Services · आमचे दंतोपचार
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#12181A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
            Complete, gentle dental treatments for your whole family.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Every procedure is done with gentle hands, hospital-grade sterilization standards, and clear explanations in simple words.
          </p>
        </motion.div>

        {/* Services Grid: Colorful, attractive, high-contrast cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className={`group relative bg-gradient-to-br ${service.cardGradient} p-6 sm:p-7 rounded-2xl border ${service.borderColor} shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className="font-editorial text-sm font-bold text-gray-400 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#17191A] group-hover:text-[#0D6E7E] transition-colors mb-2.5">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className={`text-[11px] px-2.5 py-1 rounded-md ${service.badgeColor}`}>
                    {service.note}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className={`inline-flex items-center gap-1 text-xs font-bold ${service.accentColor} hover:underline underline-offset-4 focus-visible:outline-none`}
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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


