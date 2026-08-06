import React from 'react';

export const servicesData = [
  {
    id: 'general',
    title: 'General Dentistry',
    icon: 'dentistry',
    color: 'text-[#006591]',
    bgColor: 'bg-[#c9e6ff]/50',
    accentBg: 'bg-[#c9e6ff]/30',
    description: 'Comprehensive exams, professional cleanings, and preventative care to maintain your optimal oral health for a lifetime.',
    duration: '45 - 60 mins',
    recovery: 'Immediate',
    highlights: ['Comprehensive Digital Exam', 'Ultrasonic Scaling & Polish', 'Oral Cancer Screening', 'Custom Fluoride Treatment'],
    fullDetails: 'Our general dentistry services serve as the foundation of your long-term oral health. Utilizing high-resolution intraoral cameras and low-radiation digital X-rays, we detect potential issues before they develop into serious conditions.'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    icon: 'medical_services',
    color: 'text-[#006b5f]',
    bgColor: 'bg-[#71f8e4]/40',
    accentBg: 'bg-[#6df5e1]/30',
    description: 'Permanent, natural-looking solutions for missing teeth to restore full chew function and a confident, complete smile.',
    duration: '1 - 2 hours per implant',
    recovery: '3 - 5 days',
    highlights: ['3D CBCT Guided Placement', 'Titanium & Zirconia Posts', 'Same-Day Temporary Crowns', 'Lifetime Warranty Available'],
    fullDetails: 'Dental implants are the gold standard for replacing missing teeth. They look, feel, and function exactly like natural teeth, integrating directly into the jawbone to preserve bone structure and facial aesthetics.'
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    icon: 'sentiment_satisfied',
    color: 'text-[#0053db]',
    bgColor: 'bg-[#dbe1ff]/60',
    accentBg: 'bg-[#7397ff]/30',
    description: 'Professional laser whitening treatments for a dramatically brighter, radiant smile up to 8 shades lighter in one visit.',
    duration: '60 mins',
    recovery: 'None',
    highlights: ['Laser-Activated Formula', 'Up to 8 Shades Brighter', 'Zero Sensitivity Protocol', 'Take-Home Touchup Kit Included'],
    fullDetails: 'Our in-office whitening procedure uses medical-grade peroxide gel activated by soft blue LED light to break down stubborn stains from coffee, tea, wine, and aging without causing enamel sensitivity.'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    icon: 'auto_awesome',
    color: 'text-[#0ea5e9]',
    bgColor: 'bg-[#c9e6ff]/60',
    accentBg: 'bg-[#0ea5e9]/20',
    description: 'Porcelain veneers, composite bonding, and full smile makeovers tailored precisely to your facial symmetry.',
    duration: '2 appointments',
    recovery: '1 - 2 days',
    highlights: ['Custom Porcelain Veneers', 'Digital Smile Design Preview', 'Biocompatible Resin Bonding', 'Enamel-Preserving Techniques'],
    fullDetails: 'Transform your smile with bespoke cosmetic solutions. We use Digital Smile Design (DSD) software to simulate your final smile before treatment even begins, ensuring total predictability and harmony.'
  },
  {
    id: 'orthodontics',
    title: 'Clear Aligners & Ortho',
    icon: 'straighten',
    color: 'text-[#006b5f]',
    bgColor: 'bg-[#71f8e4]/50',
    accentBg: 'bg-[#006b5f]/20',
    description: 'Discreet, removable clear aligners that straighten crooked or misaligned teeth comfortably without metal braces.',
    duration: '6 - 18 months total',
    recovery: 'None (Daily Wear)',
    highlights: ['3D Digital Impression Scan', 'Virtually Invisible Trays', 'Fewer In-Office Visits', 'Includes Custom Retainers'],
    fullDetails: 'Straighten your teeth seamlessly. Clear aligners offer a transparent, comfortable alternative to traditional metal braces, allowing you to eat, brush, and floss with zero restrictions.'
  },
  {
    id: 'emergency',
    title: 'Emergency Dental Care',
    icon: 'e911_emergency',
    color: 'text-[#ba1a1a]',
    bgColor: 'bg-[#ffdad6]/60',
    accentBg: 'bg-[#ffdad6]/40',
    description: 'Same-day urgent appointments for toothaches, chipped teeth, broken restorations, and oral trauma.',
    duration: 'Immediate / Urgent',
    recovery: 'Varies',
    highlights: ['Same-Day Urgent Appointments', 'Rapid Pain Relief Management', 'Emergency Root Canals & Repairs', '24/7 Phone Triage'],
    fullDetails: 'Dental emergencies require prompt, compassionate intervention. We reserve dedicated daily appointment slots specifically for emergency patients needing immediate pain alleviation and repair.'
  }
];

export default function ServicesSection({ onSelectService, onOpenAppointment }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#faf8ff] bg-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#eaedff] px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[#006591] text-sm">stars</span>
            <span className="text-xs font-bold text-[#006591] uppercase tracking-wider">Our Core Specialties</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
            Comprehensive Dental Services
          </h2>
          <p className="text-base sm:text-lg text-[#3e4850] mt-4 leading-relaxed">
            From routine preventative check-ups to advanced cosmetic reconstructions, we offer a full spectrum of world-class dental care utilizing state-of-the-art technology.
          </p>
        </div>

        {/* Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="card-panel p-8 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner Expanding Circle Animation */}
              <div className={`absolute top-0 right-0 w-36 h-36 ${service.accentBg} rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-175 duration-500 pointer-events-none`} />

              <div>
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 relative z-10 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>

                {/* Service Title */}
                <h3 className="font-['Manrope'] text-2xl font-bold text-[#131b2e] mb-3 relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#3e4850] leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between relative z-10">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#006591] hover:text-[#0ea5e9] transition-colors cursor-pointer group/btn"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <button
                  onClick={onOpenAppointment}
                  className="text-xs font-semibold text-[#006b5f] bg-[#71f8e4]/20 hover:bg-[#71f8e4]/40 px-3 py-1.5 rounded-full transition-colors"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
