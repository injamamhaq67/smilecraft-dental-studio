import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import ImplantsSpotlight from './components/ImplantsSpotlight';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ServiceDetailModal from './components/ServiceDetailModal';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedInitialService, setSelectedInitialService] = useState('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  const handleOpenAppointment = (serviceName = '') => {
    setSelectedInitialService(serviceName);
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
  };

  const handleSelectServiceDetail = (service) => {
    setSelectedServiceDetail(service);
  };

  const handleCloseServiceDetail = () => {
    setSelectedServiceDetail(null);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Fixed Glassmorphic Navigation Bar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Landing Page Content */}
      <main className="flex-grow">
        <HeroSection onOpenAppointment={() => handleOpenAppointment()} />
        <StatsSection />
        <ServicesSection 
          onSelectService={handleSelectServiceDetail}
          onOpenAppointment={() => handleOpenAppointment()}
        />
        <ImplantsSpotlight onOpenAppointment={() => handleOpenAppointment()} />
        <WhyChooseUs />
        <TestimonialsSection />
        <FaqSection onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal 
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        initialService={selectedInitialService}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedServiceDetail}
        onClose={handleCloseServiceDetail}
        onOpenAppointment={(srvTitle) => handleOpenAppointment(srvTitle)}
      />
    </div>
  );
}
