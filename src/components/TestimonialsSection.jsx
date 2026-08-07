import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Elena Rostova',
      treatment: 'Full Porcelain Veneers & Whitening',
      rating: 5,
      comment: 'I was always self-conscious about my smile in photos. Dr. Jenkins and the SmileCraft team gave me the exact natural-looking smile I dreamed of. The spa atmosphere made the entire process completely painless!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      date: '2 weeks ago'
    },
    {
      name: 'Marcus Vance',
      treatment: 'Dental Implant Restoration',
      rating: 5,
      comment: 'After losing a molar, I was nervous about getting an implant. The 3D scan and guided surgery took under an hour! Recovery was smooth, and I can eat all my favorite foods again without any pain.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      date: '1 month ago'
    },
    {
      name: 'Sophia Patel',
      treatment: 'Clear Aligners Orthodontics',
      rating: 5,
      comment: 'The clear aligners were virtually invisible during my daily business meetings. In just 8 months, my teeth are perfectly aligned. Highly recommend SmileCraft to anyone looking for premium care!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      date: '3 weeks ago'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#eaedff]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f2f3ff] border border-[#dae2fd] px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[#F59E0B] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span className="text-xs font-bold text-[#006591] uppercase tracking-wider">Patient Testimonials</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
            Loved by Over 12,000 Patients
          </h2>
          <p className="text-base sm:text-lg text-[#3e4850] mt-4 leading-relaxed">
            Read real stories from patients who restored their oral health and confidence at SmileCraft Dental Studio.
          </p>
        </div>

        {/* 3 Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="card-panel p-7 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative bg-white border border-[#bec8d2]/30 shadow-md"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex text-[#F59E0B] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <span className="material-symbols-outlined text-[#dae2fd] text-4xl select-none">
                    format_quote
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-sm text-[#3e4850] italic leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-4 border-t border-[#f1f5f9] flex items-center gap-3.5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="font-['Manrope'] text-sm font-bold text-[#131b2e]">
                    {review.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#006591]">{review.treatment}</p>
                  <p className="text-[10px] text-[#6e7881] mt-0.5">Verified Patient • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
