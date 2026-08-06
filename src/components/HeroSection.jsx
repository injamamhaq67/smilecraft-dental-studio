import React from 'react';

export default function HeroSection({ onOpenAppointment }) {
  return (
    <section id="about" className="relative w-full min-h-[90vh] flex items-center bg-[#faf8ff] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#c9e6ff] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-glowing" />
        <div className="absolute top-48 -left-32 w-80 h-80 bg-[#71f8e4] rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse-glowing" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#dbe1ff] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-glowing" style={{ animationDelay: '5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Hero Left Content Column */}
        <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-left order-2 lg:order-1">
          
          {/* Clinic Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f2f3ff] border border-[#dae2fd] px-4 py-1.5 rounded-full w-fit shadow-xs">
            <span className="material-symbols-outlined text-[#006b5f] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="text-xs font-semibold text-[#3e4850] tracking-wide uppercase">
              Top Rated Dental Studio & Clinic
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#131b2e] leading-[1.15] tracking-tight">
            Creating Healthy, Confident Smiles with{' '}
            <span className="gradient-text">Advanced Dental Care</span>
          </h1>

          {/* Body Copy */}
          <p className="text-base sm:text-lg text-[#3e4850] leading-relaxed max-w-xl">
            Experience a new standard of dental care in a spa-like environment. Our expert team combines state-of-the-art technology with a gentle touch to ensure your visit is comfortable, precise, and exceptional.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenAppointment}
              className="btn-primary px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book Appointment</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <a
              href="tel:+15551234567"
              className="btn-secondary px-8 py-3.5 rounded-full text-base font-bold flex items-center justify-center gap-2 group"
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                call
              </span>
              <span>Call Clinic</span>
            </a>
          </div>

          {/* Social Proof & Rating Bar */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#bec8d2]/30 mt-4">
            <div className="flex -space-x-3 items-center">
              <img
                className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Satisfied Patient"
              />
              <img
                className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Satisfied Patient"
              />
              <img
                className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                alt="Satisfied Patient"
              />
              <div className="w-11 h-11 rounded-full border-2 border-white bg-[#eaedff] flex items-center justify-center text-xs font-bold text-[#006591] shadow-sm">
                12k+
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex text-[#F59E0B] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-[#3e4850] mt-0.5">
                4.9 Google Rating (1,400+ Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Hero Right Visual Column */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 my-4 lg:my-0">
          
          {/* Main Dentist Portrait Image Container */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/80">
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
              alt="Dr. Sarah Jenkins - Lead Dentist at SmileCraft Studio"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/50 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg">
              <p className="text-sm font-bold text-[#131b2e] font-['Manrope']">Dr. Sarah Jenkins, D.D.S.</p>
              <p className="text-xs font-medium text-[#006591]">Lead Aesthetic & Implant Specialist</p>
            </div>
          </div>

          {/* Floating Glass Metric Card 1: Experience */}
          <div className="absolute -top-4 -left-4 sm:-left-8 lg:-left-12 glass-panel rounded-2xl p-4 flex items-center gap-3.5 animate-float-slow shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#6df5e1]/40 flex items-center justify-center text-[#006b5f]">
              <span className="material-symbols-outlined text-2xl">workspace_premium</span>
            </div>
            <div>
              <p className="text-base font-bold text-[#131b2e] font-['Manrope']">20+ Years</p>
              <p className="text-xs font-semibold text-[#3e4850]">Clinical Experience</p>
            </div>
          </div>

          {/* Floating Glass Metric Card 2: Emergency */}
          <div className="absolute -bottom-4 -right-4 sm:-right-8 lg:-right-12 glass-panel rounded-2xl p-4 flex items-center gap-3.5 animate-float-delayed shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#ffdad6]/60 flex items-center justify-center text-[#ba1a1a]">
              <span className="material-symbols-outlined text-2xl">medical_services</span>
            </div>
            <div>
              <p className="text-base font-bold text-[#131b2e] font-['Manrope']">24/7 Support</p>
              <p className="text-xs font-semibold text-[#3e4850]">Emergency Dental Care</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
