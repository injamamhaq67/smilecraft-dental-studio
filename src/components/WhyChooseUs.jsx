import React from 'react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: 'view_in_ar',
      title: '3D CBCT Digital Scans',
      desc: 'Millimeter-precise 3D anatomical imaging with 80% lower radiation than conventional X-rays.',
      badge: 'Advanced Tech',
      color: 'text-[#0ea5e9]',
      bgColor: 'bg-[#c9e6ff]/50'
    },
    {
      icon: 'spa',
      title: 'Spa-Like Atmosphere',
      desc: 'Noise-canceling headphones, aromatherapy, heated blankets, and calming visual screens in every suit.',
      badge: 'Zero Anxiety',
      color: 'text-[#006b5f]',
      bgColor: 'bg-[#71f8e4]/40'
    },
    {
      icon: 'ecg_heart',
      title: 'Pain-Free Dentistry',
      desc: 'Gentle laser treatments and twilight sedation options designed for maximum comfort.',
      badge: 'Gentle Touch',
      color: 'text-[#0053db]',
      bgColor: 'bg-[#dbe1ff]/60'
    },
    {
      icon: 'payments',
      title: 'Transparent Pricing',
      desc: 'No hidden fees. Full upfront estimates, flexible monthly payment plans, and direct insurance billing.',
      badge: '0% Interest Plans',
      color: 'text-[#006591]',
      bgColor: 'bg-[#eaedff]'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#faf8ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#eaedff] px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[#006591] text-sm">verified</span>
            <span className="text-xs font-bold text-[#006591] uppercase tracking-wider">The SmileCraft Advantage</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
            Why Patients Choose SmileCraft
          </h2>
          <p className="text-base sm:text-lg text-[#3e4850] mt-4 leading-relaxed">
            We combine clinical excellence with world-class hospitality, eliminating dental anxiety and delivering outcomes you will love to share.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card-panel p-6 sm:p-7 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#006591] bg-[#eaedff] px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="font-['Manrope'] text-xl font-bold text-[#131b2e] mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3e4850] leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f1f5f9] mt-6">
                <span className="text-xs font-semibold text-[#006b5f] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Included in every care plan
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
