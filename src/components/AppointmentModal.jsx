import React, { useState } from 'react';

const N8N_WEBHOOK_URL = 'https://inju7890.app.n8n.cloud/webhook-test/dental-booking';

export default function AppointmentModal({ isOpen, onClose, initialService }) {
  const [selectedService, setSelectedService] = useState(initialService || 'General Checkup & Cleaning');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sarah Jenkins (Lead Specialist)');
  const [selectedDate, setSelectedDate] = useState('2026-08-10');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [confirmationCode] = useState(() => `SC-${Math.floor(100000 + Math.random() * 900000)}`);

  if (!isOpen) return null;

  const services = [
    'General Checkup & Cleaning',
    'Dental Implants Consultation',
    'Laser Teeth Whitening',
    'Cosmetic Porcelain Veneers',
    'Clear Aligners Consultation',
    'Urgent Emergency Dental Care'
  ];

  const doctors = [
    'Dr. Sarah Jenkins (Lead Specialist)',
    'Dr. Robert Chen (Implant Surgeon)',
    'Dr. Maya Lin (Cosmetic Dentist)'
  ];

  const timeSlots = [
    '09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      confirmation_code: confirmationCode,
      patient_name: formData.name,
      patient_email: formData.email,
      patient_phone: formData.phone,
      notes: formData.notes,
      service: selectedService,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      submitted_at: new Date().toISOString(),
    };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setSubmitError(
        'We could not submit your booking right now. Please try again or call us directly at (555) 123-4567.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError('');
    setFormData({ name: '', phone: '', email: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/60 backdrop-blur-md">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white/60 relative overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f2f3ff] text-[#3e4850] hover:bg-[#eaedff] hover:text-[#131b2e] flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 bg-[#eaedff] px-3 py-1 rounded-full mb-2">
                <span className="material-symbols-outlined text-[#006591] text-xs">calendar_month</span>
                <span className="text-[11px] font-bold text-[#006591] uppercase">Online Booking</span>
              </div>
              <h3 className="font-['Manrope'] text-2xl font-bold text-[#131b2e]">
                Schedule Your Appointment
              </h3>
              <p className="text-xs text-[#3e4850] mt-1">
                Select your preferred service, specialist, and time slot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Select Service */}
              <div>
                <label className="block text-xs font-bold text-[#131b2e] mb-1.5">
                  Select Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="input-field w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#131b2e]"
                >
                  {services.map((srv) => (
                    <option key={srv} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>

              {/* Select Doctor */}
              <div>
                <label className="block text-xs font-bold text-[#131b2e] mb-1.5">
                  Select Specialist
                </label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="input-field w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#131b2e]"
                >
                  {doctors.map((doc) => (
                    <option key={doc} value={doc}>{doc}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#131b2e] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="input-field w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#131b2e]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#131b2e] mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="input-field w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#131b2e]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Fields */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#131b2e] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field w-full px-3.5 py-2.5 rounded-xl text-sm text-[#131b2e]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#131b2e] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field w-full px-3.5 py-2.5 rounded-xl text-sm text-[#131b2e]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#131b2e] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field w-full px-3.5 py-2.5 rounded-xl text-sm text-[#131b2e]"
                      required
                    />
                  </div>
                </div>

                {/* Notes (optional) */}
                <div>
                  <label className="block text-xs font-bold text-[#131b2e] mb-1">
                    Notes / Special Requests <span className="text-[#6e7881] font-normal">(optional)</span>
                  </label>
                  <textarea
                    placeholder="Any allergies, concerns, or special requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={2}
                    className="input-field w-full px-3.5 py-2.5 rounded-xl text-sm text-[#131b2e] resize-none"
                  />
                </div>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="flex items-start gap-2.5 bg-[#ffdad6] border border-[#ba1a1a]/30 p-3.5 rounded-xl text-xs text-[#93000a]">
                  <span className="material-symbols-outlined text-base text-[#ba1a1a] shrink-0">error</span>
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      {/* Spinner */}
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      <span>Booking your appointment...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                      <span>Confirm Appointment</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#71f8e4]/40 text-[#006b5f] flex items-center justify-center mx-auto mb-4 animate-bounce">
              <span className="material-symbols-outlined text-4xl">verified</span>
            </div>

            <h3 className="font-['Manrope'] text-2xl font-bold text-[#131b2e]">
              Appointment Confirmed!
            </h3>
            <p className="text-xs text-[#3e4850] mt-2 max-w-sm mx-auto">
              Thank you, <strong className="text-[#006591]">{formData.name || 'Patient'}</strong>. Your appointment for <strong className="text-[#006591]">{selectedService}</strong> has been successfully submitted to our team.
            </p>

            <div className="bg-[#f2f3ff] p-4 rounded-2xl text-xs text-left my-6 border border-[#dae2fd] space-y-1.5">
              <p><span className="font-semibold text-[#6e7881]">Date & Time:</span> {selectedDate} at {selectedTime}</p>
              <p><span className="font-semibold text-[#6e7881]">Doctor:</span> {selectedDoctor}</p>
              <p><span className="font-semibold text-[#6e7881]">Confirmation Code:</span>{' '}
                <code className="bg-white px-2 py-0.5 rounded text-[#006591] font-bold">{confirmationCode}</code>
              </p>
            </div>

            <p className="text-[11px] text-[#6e7881] mb-6">
              Our team will review your request and send a confirmation to <strong>{formData.email}</strong> within 1 hour.
            </p>

            <button
              onClick={handleReset}
              className="btn-primary px-8 py-3 rounded-full text-xs font-bold"
            >
              Done & Return Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
