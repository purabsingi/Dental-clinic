/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { SmileDesign } from './components/SmileDesign';
import { ClinicTour } from './components/ClinicTour';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Faq } from './components/Faq';
import { AppointmentCta } from './components/AppointmentCta';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#17191A] flex flex-col font-sans-clean selection:bg-[#14505C]/15 selection:text-[#14505C]">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#14505C] text-white rounded text-sm font-medium shadow-lg"
      >
        Skip to main content
      </a>

      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About Dr. Pooja Sadhwani */}
        <About />

        {/* Clinical Services */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* Interactive Before & After Smile Comparison */}
        <BeforeAfter onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* Smile Design / Feature Section */}
        <SmileDesign onOpenBooking={() => handleOpenBooking('Smile Designing')} />

        {/* Inside Clinic Tour & Atmosphere */}
        <ClinicTour />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Simple Appointment CTA */}
        <AppointmentCta onOpenBooking={() => handleOpenBooking()} />

        {/* Location & Contact with Instagram Link */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Appointment Consultation Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />

      {/* Mobile Sticky Bar for quick local patient calling */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
