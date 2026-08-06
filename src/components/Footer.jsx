import React from 'react';

export default function Footer({ onOpenAppointment }) {
  return (
    <footer id="contact" className="bg-[#283044] text-white w-full pt-16 pb-12 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold text-white font-['Manrope']">
              <div className="w-9 h-9 rounded-xl bg-[#0ea5e9] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">dentistry</span>
              </div>
              <span>SmileCraft <span className="text-[#0ea5e9]">Dental</span></span>
            </div>

            <p className="text-xs sm:text-sm text-[#bec8d2] leading-relaxed">
              Precision in every smile. Combining state-of-the-art dental technology with gentle, spa-like care for patients of all ages.
            </p>

            <div className="flex space-x-3 text-[#bec8d2] pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0ea5e9] hover:text-white flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-lg">language</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0ea5e9] hover:text-white flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a href="tel:+15551234567" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0ea5e9] hover:text-white flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-['Manrope'] text-sm font-bold text-[#c9e6ff] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#bec8d2]">
              <li><a href="#about" className="hover:text-[#71f8e4] transition-colors">About Our Clinic</a></li>
              <li><a href="#services" className="hover:text-[#71f8e4] transition-colors">Comprehensive Services</a></li>
              <li><a href="#treatments" className="hover:text-[#71f8e4] transition-colors">Dental Implants Spotlight</a></li>
              <li><a href="#testimonials" className="hover:text-[#71f8e4] transition-colors">Patient Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#71f8e4] transition-colors">FAQ & Insurance</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Care */}
          <div>
            <h4 className="font-['Manrope'] text-sm font-bold text-[#c9e6ff] uppercase tracking-wider mb-4">
              Patient Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#bec8d2]">
              <li><a href="#" className="hover:text-[#71f8e4] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#71f8e4] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#71f8e4] transition-colors">Patient Bill of Rights</a></li>
              <li><a href="#" className="hover:text-[#71f8e4] transition-colors">Financing & CareCredit</a></li>
              <li><a href="#" className="hover:text-[#71f8e4] transition-colors">24/7 Emergency Protocol</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 className="font-['Manrope'] text-sm font-bold text-[#c9e6ff] uppercase tracking-wider mb-4">
              Visit Clinic
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#bec8d2]">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#0ea5e9] shrink-0">location_on</span>
                <span>123 Dental Way, Suite 100<br />Medical District, City 12345</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base text-[#0ea5e9] shrink-0">phone</span>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#0ea5e9] shrink-0">schedule</span>
                <span>Mon - Sat: 8:00 AM - 6:00 PM<br /><span className="text-[#71f8e4] font-semibold">24/7 Emergency Triage</span></span>
              </li>
            </ul>

            <button
              onClick={onOpenAppointment}
              className="mt-4 w-full btn-primary py-2.5 rounded-full text-xs font-bold"
            >
              Book Online Now
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#bec8d2] gap-4">
          <p>© 2026 SmileCraft Dental Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS • Inspired by Stitch Design System
          </p>
        </div>

      </div>
    </footer>
  );
}
