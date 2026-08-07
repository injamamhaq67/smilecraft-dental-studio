import React, { useState } from 'react';

export default function ImplantsSpotlight({ onOpenAppointment }) {
  const [activeStep, setActiveStep] = useState(0);
  const [showAfter, setShowAfter] = useState(true);

  const steps = [
    {
      number: '01',
      title: '3D Scan & Consultation',
      desc: 'We capture a high-resolution 3D CBCT scan to evaluate bone density and map nerves with millimeter accuracy.',
      icon: 'center_focus_strong'
    },
    {
      number: '02',
      title: 'Guided Implant Placement',
      desc: 'Using computer-guided surgical guides, the biocompatible titanium post is positioned with zero guesswork.',
      icon: 'precision_manufacturing'
    },
    {
      number: '03',
      title: 'Osseointegration & Healing',
      desc: 'Over 8-12 weeks, the implant fuses naturally with bone tissue, creating a permanent structural root foundation.',
      icon: 'auto_fix_high'
    },
    {
      number: '04',
      title: 'Custom Crown Restoration',
      desc: 'A hand-crafted porcelain crown matching your natural shade is attached, fully restoring function and beauty.',
      icon: 'workspace_premium'
    }
  ];

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#eaedff]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#71f8e4]/30 border border-[#006b5f]/20 px-4 py-1.5 rounded-full mb-4">
              <span className="material-symbols-outlined text-[#006b5f] text-sm">stars</span>
              <span className="text-xs font-bold text-[#006b5f] uppercase tracking-wider">Spotlight Procedure</span>
            </div>
            <h2 className="font-['Manrope'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
              Precision Dental Implants Restoration
            </h2>
            <p className="text-base sm:text-lg text-[#3e4850] mt-4 leading-relaxed max-w-2xl">
              Replace missing teeth permanently with biocompatible implants that look, feel, and function just like natural teeth. Enjoy a lifetime of confidence.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onOpenAppointment}
              className="btn-primary px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
            >
              <span>Schedule Implant Scan</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Feature Grid: Interactive Journey + Before/After Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Before/After Toggle Card */}
          <div className="lg:col-span-6 card-panel p-6 sm:p-8 bg-white border border-[#bec8d2]/40 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-['Manrope'] text-xl font-bold text-[#131b2e] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006591]">published_with_changes</span>
                Smile Transformation
              </h3>
              
              {/* Before / After Toggle Buttons */}
              <div className="bg-[#f2f3ff] p-1 rounded-full flex gap-1 border border-[#dae2fd]">
                <button
                  onClick={() => setShowAfter(false)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    !showAfter 
                      ? 'bg-[#006591] text-white shadow-xs' 
                      : 'text-[#3e4850] hover:text-[#006591]'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    showAfter 
                      ? 'bg-[#006b5f] text-white shadow-xs' 
                      : 'text-[#3e4850] hover:text-[#006b5f]'
                  }`}
                >
                  After Implant
                </button>
              </div>
            </div>

            {/* Image Container with Dynamic Transition */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-[#f1f5f9]">
              <img
                src={
                  showAfter
                    ? 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
                    : 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
                }
                alt={showAfter ? 'After Dental Implants' : 'Before Dental Implants'}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-[#131b2e] shadow-md border border-white/60">
                {showAfter ? '✨ Full Porcelain Restoration (4 Months Post-Op)' : '⚠️ Missing Tooth & Bone Resorption'}
              </div>
            </div>

            {/* Implants Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="bg-[#f2f3ff] p-3 rounded-xl">
                <p className="text-lg font-extrabold text-[#006591] font-['Manrope']">99.2%</p>
                <p className="text-[11px] font-semibold text-[#3e4850]">Success Rate</p>
              </div>
              <div className="bg-[#f2f3ff] p-3 rounded-xl">
                <p className="text-lg font-extrabold text-[#006b5f] font-['Manrope']">Lifetime</p>
                <p className="text-[11px] font-semibold text-[#3e4850]">Durability</p>
              </div>
              <div className="bg-[#f2f3ff] p-3 rounded-xl">
                <p className="text-lg font-extrabold text-[#0053db] font-['Manrope']">3D Guided</p>
                <p className="text-[11px] font-semibold text-[#3e4850]">Precision</p>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Interactive Journey */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-['Manrope'] text-2xl font-bold text-[#131b2e] mb-4">
              Your 4-Step Implant Journey
            </h3>

            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#006591] shadow-md scale-[1.01]'
                      : 'bg-white/60 border-[#bec8d2]/30 hover:bg-white hover:border-[#dae2fd]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isSelected ? 'bg-[#006591] text-white shadow-xs' : 'bg-[#eaedff] text-[#006591]'
                    }`}>
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-['Manrope'] text-base font-bold text-[#131b2e]">
                          {step.title}
                        </h4>
                        <span className={`material-symbols-outlined text-lg ${isSelected ? 'text-[#006591]' : 'text-[#6e7881]'}`}>
                          {step.icon}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3e4850] mt-1.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
