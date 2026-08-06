import React, { useState } from 'react';

export default function Navbar({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('About');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (label, href) => {
    setActiveNav(label);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/85 backdrop-blur-xl border-b border-white/60 shadow-xs transition-all duration-300">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-20">
        
        {/* Brand Logo & Name */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight text-[#006591] hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#006591] to-[#0ea5e9] flex items-center justify-center text-white shadow-md">
            <span className="material-symbols-outlined text-2xl">dentistry</span>
          </div>
          <span className="font-['Manrope']">SmileCraft <span className="text-[#0ea5e9] font-normal">Dental</span></span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label, item.href);
                }}
                className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                  isActive 
                    ? 'text-[#006591]' 
                    : 'text-[#3e4850] hover:text-[#006591]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#006591] rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+15551234567"
            className="text-sm font-semibold text-[#006591] flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-[#eaedff] transition-colors"
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              call
            </span>
            <span>(555) 123-4567</span>
          </a>

          <button
            onClick={onOpenAppointment}
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">calendar_month</span>
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Call CTA & Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenAppointment}
            className="btn-primary px-4 py-2 rounded-full text-xs font-semibold"
          >
            Book Now
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#006591] hover:bg-[#eaedff] transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8ff]/95 backdrop-blur-2xl border-b border-[#dae2fd] shadow-xl px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label, item.href);
                }}
                className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                  activeNav === item.label
                    ? 'bg-[#eaedff] text-[#006591]'
                    : 'text-[#3e4850] hover:bg-[#f2f3ff]'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#dae2fd] flex flex-col gap-3">
              <a
                href="tel:+15551234567"
                className="btn-secondary w-full py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                <span>Call (555) 123-4567</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="btn-primary w-full py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
