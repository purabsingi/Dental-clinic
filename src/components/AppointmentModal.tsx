import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, Clock, Sparkles } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [selectedService, setSelectedService] = useState('Dental Consultation');
  const [preferredTime, setPreferredTime] = useState('Morning');
  const [patientName, setPatientName] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = [
    'Dental Consultation',
    'Smile Designing',
    'Cosmetic Dentistry',
    'Preventive Dental Care',
    'Restorative Dentistry',
    'Teeth Whitening',
  ];

  const timeSlots = ['Morning', 'Afternoon', 'Evening'];

  const messageText = encodeURIComponent(
    `Hello Dr. Sadhwani, ${patientName ? `my name is ${patientName}. ` : ''}I would like to inquire about booking an appointment for ${selectedService} (${preferredTime} preference) at Dr. Sadhwani’s Dental Clinic in Amravati.`
  );

  const whatsappUrl = `https://wa.me/917719994814?text=${messageText}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF9F5] rounded-xl border border-black/[0.08] shadow-2xl p-6 sm:p-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#737579] hover:text-[#17191A] rounded-md hover:bg-black/[0.04] transition-colors focus-visible:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-1.5 block">
            Dr. Sadhwani’s Dental Clinic · Amravati
          </span>
          <h2 id="modal-title" className="font-editorial text-2xl sm:text-3xl text-[#17191A] font-medium">
            Request an Appointment
          </h2>
          <p className="text-xs sm:text-sm text-[#585D62] mt-1">
            Choose your preferred treatment and time, then connect directly with our clinic.
          </p>
        </div>

        {/* Form Options */}
        <div className="space-y-4 mb-6">
          {/* Optional Name */}
          <div>
            <label htmlFor="patient-name" className="block text-xs font-medium text-[#17191A] mb-1.5">
              Your Name (Optional)
            </label>
            <input
              id="patient-name"
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-black/[0.12] rounded-md text-[#17191A] placeholder:text-[#9EA3A8] focus:border-[#14505C] focus:ring-1 focus:ring-[#14505C] outline-none transition-colors"
            />
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="service-select" className="block text-xs font-medium text-[#17191A] mb-1.5">
              Select Dental Service
            </label>
            <select
              id="service-select"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-black/[0.12] rounded-md text-[#17191A] focus:border-[#14505C] focus:ring-1 focus:ring-[#14505C] outline-none transition-colors"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Time */}
          <div>
            <span className="block text-xs font-medium text-[#17191A] mb-1.5">
              Preferred Time of Day
            </span>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setPreferredTime(slot)}
                  className={`py-2 px-3 text-xs font-medium rounded-md border text-center transition-colors ${
                    preferredTime === slot
                      ? 'bg-[#14505C] text-white border-[#14505C]'
                      : 'bg-white text-[#585D62] border-black/[0.1] hover:border-black/[0.2]'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons: Phone & WhatsApp */}
        <div className="space-y-2.5 pt-4 border-t border-black/[0.08]">
          <a
            href="tel:+917719994814"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 text-sm font-semibold text-white bg-[#14505C] hover:bg-[#0F3D46] rounded-md transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4" />
            <span>Call Clinic Directly (7719994814)</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 text-sm font-semibold text-[#17191A] bg-white hover:bg-[#F2EFE8] border border-black/[0.12] rounded-md transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#14505C]" />
            <span>Send Details on WhatsApp</span>
          </a>
        </div>

        {/* Small Note */}
        <p className="text-[11px] text-[#737579] text-center mt-4">
          Location: Rampuri Camp, Amravati · Direct contact with Dr. Pooja Sadhwani’s practice.
        </p>
      </div>
    </div>
  );
};
