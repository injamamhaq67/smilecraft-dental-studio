import React, { useState } from 'react';

export default function FaqSection({ onOpenAppointment }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How do I book an appointment at SmileCraft?',
      a: 'You can easily book online using our 24/7 appointment scheduling portal by clicking any "Book Appointment" button on this website, or call our front clinic desk directly at (555) 123-4567.'
    },
    {
      q: 'Does dental implant surgery hurt?',
      a: 'Not at all. We administer targeted local anesthesia and optional conscious twilight sedation during the procedure so you remain completely comfortable and pain-free. Most patients experience minimal mild soreness managed easily with over-the-counter medication.'
    },
    {
      q: 'Do you accept dental insurance and offer financing plans?',
      a: 'Yes! We directly bill all major PPO insurance providers. For out-of-pocket costs, we offer flexible 0% interest monthly payment plans through CareCredit and Sunbit so you can receive immediate treatment without financial strain.'
    },
    {
      q: 'How often should I get my teeth professionally cleaned?',
      a: 'We recommend a professional hygiene cleaning and comprehensive oral exam every 6 months to remove plaque biofilm, prevent gum disease, and identify potential issues early.'
    },
    {
      q: 'What should I do if I have a dental emergency?',
      a: 'If you suffer a knocked-out tooth, severe toothache, or cracked restoration, call our emergency hotline immediately at (555) 123-4567. We save dedicated same-day urgent care slots daily.'
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#faf8ff] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#eaedff] px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[#006591] text-sm">help</span>
            <span className="text-xs font-bold text-[#006591] uppercase tracking-wider">Got Questions?</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#3e4850] mt-3">
            Find quick answers to common questions about our dental services, insurance, and procedures.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-panel overflow-hidden border border-[#bec8d2]/40 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 bg-white hover:bg-[#f2f3ff]/50 transition-colors focus:outline-none"
                >
                  <span className="font-['Manrope'] text-base sm:text-lg font-bold text-[#131b2e]">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-[#006591] text-white rotate-180' : 'bg-[#eaedff] text-[#006591]'
                  }`}>
                    <span className="material-symbols-outlined text-xl">expand_more</span>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#3e4850] leading-relaxed border-t border-[#f1f5f9] bg-[#faf8ff]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center bg-[#eaedff]/60 p-6 rounded-2xl border border-[#dae2fd] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-['Manrope'] text-base font-bold text-[#131b2e]">Still have questions?</h4>
            <p className="text-xs sm:text-sm text-[#3e4850]">Our friendly clinical receptionists are here to assist you.</p>
          </div>
          <button
            onClick={onOpenAppointment}
            className="btn-primary px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0"
          >
            Ask Our Dental Team
          </button>
        </div>

      </div>
    </section>
  );
}
