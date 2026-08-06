import React from 'react';

export default function ServiceDetailModal({ service, onClose, onOpenAppointment }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-white/60 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f2f3ff] text-[#3e4850] hover:bg-[#eaedff] hover:text-[#131b2e] flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center shrink-0 shadow-xs`}>
            <span className="material-symbols-outlined text-3xl">{service.icon}</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#006591] bg-[#eaedff] px-2.5 py-0.5 rounded-full uppercase">
              Specialized Service
            </span>
            <h3 className="font-['Manrope'] text-2xl font-bold text-[#131b2e] mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Details Copy */}
        <div className="space-y-4">
          <p className="text-sm text-[#3e4850] leading-relaxed">
            {service.fullDetails}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4 bg-[#f2f3ff] p-4 rounded-2xl border border-[#dae2fd]">
            <div>
              <p className="text-[11px] font-bold text-[#6e7881] uppercase">Treatment Time</p>
              <p className="text-sm font-bold text-[#131b2e] mt-0.5">{service.duration}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#6e7881] uppercase">Expected Recovery</p>
              <p className="text-sm font-bold text-[#131b2e] mt-0.5">{service.recovery}</p>
            </div>
          </div>

          {/* Key Highlights Checklist */}
          <div>
            <h4 className="font-['Manrope'] text-sm font-bold text-[#131b2e] mb-3">
              Key Procedure Benefits & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#3e4850] font-semibold bg-[#faf8ff] p-2.5 rounded-xl border border-[#bec8d2]/30">
                  <span className="material-symbols-outlined text-[#006b5f] text-base shrink-0">check_circle</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row gap-3 border-t border-[#f1f5f9] mt-6">
            <button
              onClick={() => {
                onClose();
                onOpenAppointment(service.title);
              }}
              className="btn-primary w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span>Book {service.title}</span>
            </button>

            <button
              onClick={onClose}
              className="btn-secondary w-full py-3.5 rounded-xl text-sm font-bold"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
