import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      icon: 'sentiment_very_satisfied',
      value: '12,000+',
      label: 'Happy Patients',
      sublabel: 'Transformed smiles',
      color: 'text-[#0ea5e9]',
      bgColor: 'bg-[#c9e6ff]/50',
    },
    {
      icon: 'thumb_up',
      value: '99.4%',
      label: 'Satisfaction Rate',
      sublabel: 'Verified reviews',
      color: 'text-[#006b5f]',
      bgColor: 'bg-[#71f8e4]/40',
    },
    {
      icon: 'badge',
      value: '15+',
      label: 'Board Specialists',
      sublabel: 'Expert dental team',
      color: 'text-[#0053db]',
      bgColor: 'bg-[#dbe1ff]/60',
    },
    {
      icon: 'e911_emergency',
      value: '24/7',
      label: 'Emergency Readiness',
      sublabel: 'Always available',
      color: 'text-[#ba1a1a]',
      bgColor: 'bg-[#ffdad6]/60',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#eaedff]/60 via-[#f2f3ff] to-[#eaedff]/60 border-y border-[#dae2fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-panel p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${stat.bgColor} ${stat.color} flex items-center justify-center mb-3 shadow-xs`}>
                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
              </div>
              <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-[#006591] mt-1">{stat.label}</p>
              <p className="text-xs text-[#6e7881] mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
