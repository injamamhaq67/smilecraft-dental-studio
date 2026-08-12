import React, { useState } from 'react';

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://mdhind7860.app.n8n.cloud/webhook/dental-booking';

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
  const [confirmedData, setConfirmedData] = useState(null);

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

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setSubmitError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      patientName: formData.name.trim(),
      patientPhone: formData.phone.trim(),
      patientEmail: formData.email.trim(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      service: selectedService,
      treatment: selectedService,
      doctor: selectedDoctor,
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
      date: selectedDate,
      time: selectedTime,
      notes: formData.notes.trim(),
    };

    // Determine target URLs and formats to try (Production & Test fallback)
    let primaryUrl = N8N_WEBHOOK_URL;
    let urlsToTry = [primaryUrl];
    if (primaryUrl.includes('/webhook/')) {
      urlsToTry.push(primaryUrl.replace('/webhook/', '/webhook-test/'));
    } else if (primaryUrl.includes('/webhook-test/')) {
      urlsToTry.push(primaryUrl.replace('/webhook-test/', '/webhook/'));
    }

    let success = false;
    let detailedError = '';

    for (const url of urlsToTry) {
      // Attempt 1: Standard application/json
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        let data;
        try {
          data = await response.json();
          if (Array.isArray(data)) {
            data = data[0] || {};
          }
        } catch (jsonErr) {
          data = null;
        }

        if (response.ok && (!data || data.success !== false)) {
          setConfirmedData(data || { appointment: payload });
          setIsSubmitted(true);
          success = true;
          break;
        } else {
          if (data?.hint) {
            detailedError = `${data.message || 'Webhook not registered'}. ${data.hint}`;
          } else if (data?.status === 'booking_error' || response.status === 500) {
            detailedError = `${data?.message || "We could not complete your booking right now."} (Note: n8n received the data, but a downstream node in your n8n workflow threw an error. Check n8n Executions tab to fix it).`;
          } else if (data?.message || data?.error) {
            detailedError = data.message || data.error;
          }
        }
      } catch (err) {
        console.error(`JSON fetch error for ${url}:`, err);
      }

      if (success) break;

      // Attempt 2: text/plain to bypass CORS preflight issues
      try {
        const responseText = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(payload),
        });

        if (responseText.ok) {
          setConfirmedData({ appointment: payload });
          setIsSubmitted(true);
          success = true;
          break;
        }
      } catch (err2) {
        console.error(`text/plain fetch error for ${url}:`, err2);
      }

      if (success) break;
    }

    if (!success) {
      setSubmitError(
        detailedError ||
        "n8n Webhook is not listening right now. If using Test mode in n8n, click 'Execute workflow' before submitting. For 24/7 live submissions, turn ON the Active toggle in n8n."
      );
    }
    setIsSubmitting(false);
  };

  const handleDemoConfirm = () => {
    const payload = {
      patientName: formData.name.trim() || 'Patient',
      patientPhone: formData.phone.trim() || '(555) 000-0000',
      patientEmail: formData.email.trim() || 'patient@example.com',
      service: selectedService,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      notes: formData.notes.trim(),
    };
    setConfirmedData({ appointment: payload, bookingId: 'SC-' + Math.floor(100000 + Math.random() * 900000) });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError('');
    setConfirmedData(null);
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

              {/* Error Message with Option to Complete Offline Demo Booking */}
              {submitError && (
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2.5 bg-[#ffdad6] border border-[#ba1a1a]/30 p-3.5 rounded-xl text-xs text-[#93000a]">
                    <span className="material-symbols-outlined text-base text-[#ba1a1a] shrink-0 mt-0.5">error</span>
                    <div>
                      <p className="font-bold mb-0.5">n8n Webhook Inactive:</p>
                      <p className="leading-relaxed">{submitError}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleDemoConfirm}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#eaedff] hover:bg-[#dce2ff] border border-[#006591]/30 text-[#006591] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    <span>Test Local Booking Confirmation</span>
                  </button>
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
                      <span>Confirming Appointment...</span>
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
              Thank you, <strong className="text-[#006591]">{confirmedData?.appointment?.patientName || confirmedData?.patientName || confirmedData?.name || formData.name || 'Patient'}</strong>. Your appointment for <strong className="text-[#006591]">{confirmedData?.appointment?.service || confirmedData?.service || confirmedData?.treatment || selectedService}</strong> has been successfully confirmed.
            </p>

            <div className="bg-[#f2f3ff] p-4 rounded-2xl text-xs text-left my-6 border border-[#dae2fd] space-y-1.5">
              <p>
                <span className="font-semibold text-[#6e7881]">Date & Time:</span>{' '}
                {confirmedData?.appointment?.date || confirmedData?.appointmentDate || confirmedData?.date || selectedDate} at {confirmedData?.appointment?.time || confirmedData?.appointmentTime || confirmedData?.time || selectedTime}
              </p>
              <p>
                <span className="font-semibold text-[#6e7881]">Doctor:</span>{' '}
                {confirmedData?.appointment?.doctor || confirmedData?.doctor || selectedDoctor}
              </p>
              {(confirmedData?.bookingId || confirmedData?.confirmationCode || confirmedData?.id || confirmedData?.appointment?.id) && (
                <p>
                  <span className="font-semibold text-[#6e7881]">Confirmation Code:</span>{' '}
                  <code className="bg-white px-2 py-0.5 rounded text-[#006591] font-bold">
                    {confirmedData?.bookingId || confirmedData?.confirmationCode || confirmedData?.id || confirmedData?.appointment?.id}
                  </code>
                </p>
              )}
            </div>

            <p className="text-[11px] text-[#6e7881] mb-6">
              Our team will review your request and send a confirmation to <strong>{confirmedData?.appointment?.patientEmail || confirmedData?.patientEmail || confirmedData?.email || formData.email}</strong>.
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
