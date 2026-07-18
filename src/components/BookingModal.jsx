import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, CheckCircle, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ open, onClose, initialDoctor = null, initialService = '' }) {
  if (!open) return null;

  const [step, setStep] = useState(1); // 1: Details & Doctor, 2: Confirmation
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    clinic: 'Beverly Hills Flagship Studio',
    doctor: initialDoctor || 'Dr. Alexander Wright (Prosthodontist)',
    date: '2026-07-20',
    time: '10:30 AM',
    treatment: initialService || 'Invisible Clear Aligners Consultation',
    message: ''
  });

  const doctors = [
    { name: 'Dr. Alexander Wright', specialty: 'Lead Prosthodontist & Implants', exp: '18 Yrs', img: '👨‍⚕️' },
    { name: 'Dr. Sophia Vance', specialty: 'Chief Orthodontist & Aligners', exp: '14 Yrs', img: '👩‍⚕️' },
    { name: 'Dr. Marcus Thorne', specialty: 'Cosmetic Veneer & Smile Master', exp: '16 Yrs', img: '👨‍⚕️' },
    { name: 'Dr. Elena Rostova', specialty: 'Pediatric & Laser Sedation Specialist', exp: '12 Yrs', img: '👩‍⚕️' }
  ];

  const timeSlots = ['09:00 AM', '10:30 AM', '11:45 AM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7ED9B7', '#A8F1D5', '#FFFFFF', '#F5C86B']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(29, 43, 42, 0.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '740px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          position: 'relative',
          border: '1px solid rgba(126, 217, 183, 0.5)'
        }}
      >
        {/* Header */}
        <div style={{ padding: '24px 32px', background: 'var(--dark-slate)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: 'var(--radius-xl)', borderTopRightRadius: 'var(--radius-xl)' }}>
          <div>
            <span className="badge-mint" style={{ marginBottom: '6px' }}>
              <Sparkles size={14} /> VIP Priority Scheduling
            </span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', margin: 0 }}>
              {step === 1 ? 'Book Your VIP Appointment' : 'Appointment Confirmed!'}
            </h3>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#A0B2B2', cursor: 'pointer', padding: '6px' }}>
            <X size={26} />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} style={{ padding: '32px' }}>
            {/* Grid Fields */}
            <div className="grid-2" style={{ marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="eleanor@luxury.com"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (310) 888-0192"
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                  Preferred Clinic Location
                </label>
                <select
                  value={formData.clinic}
                  onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none', background: 'var(--white)' }}
                >
                  <option value="Beverly Hills Flagship Studio">Beverly Hills Flagship Studio</option>
                  <option value="Manhattan Aesthetic Center">Manhattan Aesthetic Center</option>
                  <option value="Silicon Valley Tech Hub">Silicon Valley Tech Hub</option>
                  <option value="Miami Waterfront Dental Studio">Miami Waterfront Dental Studio</option>
                </select>
              </div>
            </div>

            {/* Doctor Selection Cards */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '12px' }}>
                Select Preferred Doctor Specialist *
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                {doctors.map((doc) => {
                  const selected = formData.doctor.includes(doc.name);
                  return (
                    <div
                      key={doc.name}
                      onClick={() => setFormData({ ...formData, doctor: `${doc.name} (${doc.specialty})` })}
                      style={{
                        padding: '12px',
                        borderRadius: '16px',
                        border: selected ? '2px solid var(--theme-color)' : '1px solid rgba(0,0,0,0.1)',
                        background: selected ? 'var(--soft-green)' : 'var(--white)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: selected ? '0 8px 20px rgba(126, 217, 183, 0.3)' : 'none'
                      }}
                    >
                      <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{doc.img}</div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--dark-slate)' }}>{doc.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--grey)', lineHeight: 1.3 }}>{doc.specialty}</div>
                      <span style={{ display: 'inline-block', marginTop: '6px', padding: '2px 8px', borderRadius: '99px', background: 'rgba(0,0,0,0.06)', fontSize: '0.7rem', fontWeight: 600 }}>{doc.exp}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Date & Time Slot Grid */}
            <div className="grid-2" style={{ marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                  Appointment Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                  Preferred Time Slot *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none', background: 'var(--white)' }}
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Treatment Type */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                Treatment / Service Type
              </label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none', background: 'var(--white)' }}
              >
                <option value="Invisible Clear Aligners Consultation">Invisible Clear Aligners Consultation ($0 Promo)</option>
                <option value="3D Digital Smile Makeover & Veneers">3D Digital Smile Makeover & Veneers</option>
                <option value="Same-Day Robotic Dental Implants">Same-Day Robotic Dental Implants</option>
                <option value="Painless Laser Root Canal Treatment">Painless Laser Root Canal Treatment</option>
                <option value="General Comprehensive Checkup & Hygiene">General Comprehensive Checkup & Hygiene</option>
                <option value="Pediatric & Sedation Dentistry">Pediatric & Sedation Dentistry</option>
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '18px', fontSize: '1.05rem', justifyContent: 'center' }}>
              <Calendar size={20} /> Lock In VIP Appointment Slot
            </button>
          </form>
        ) : (
          /* Confirmation State */
          <div style={{ padding: '48px 32px', textAlign: 'center' }}>
            <div
              className="animate-pulse"
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                background: 'var(--soft-green)',
                color: '#59C29D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 12px 30px rgba(126, 217, 183, 0.4)'
              }}
            >
              <CheckCircle size={48} />
            </div>

            <h3 style={{ fontSize: '2rem', color: 'var(--dark-slate)', marginBottom: '12px' }}>
              You're Booked, {formData.fullName || 'VIP Patient'}!
            </h3>
            <p style={{ color: 'var(--grey)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 32px' }}>
              We have reserved your priority consultation room and alerted your selected specialist. A calendar invite has been dispatched to <strong style={{ color: 'var(--dark-slate)' }}>{formData.email}</strong>.
            </p>

            <div
              style={{
                background: 'var(--light-mint)',
                border: '1px solid rgba(126, 217, 183, 0.4)',
                borderRadius: '20px',
                padding: '24px',
                textAlign: 'left',
                maxWidth: '480px',
                margin: '0 auto 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--grey)', fontSize: '0.9rem' }}>Clinic:</span>
                <span style={{ fontWeight: 700, color: 'var(--dark-slate)' }}>{formData.clinic}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--grey)', fontSize: '0.9rem' }}>Specialist:</span>
                <span style={{ fontWeight: 700, color: '#59C29D' }}>{formData.doctor}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--grey)', fontSize: '0.9rem' }}>Date & Time:</span>
                <span style={{ fontWeight: 700, color: 'var(--dark-slate)' }}>{formData.date} at {formData.time}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--grey)', fontSize: '0.9rem' }}>Service:</span>
                <span style={{ fontWeight: 700, color: 'var(--dark-slate)' }}>{formData.treatment}</span>
              </div>
            </div>

            <button
              onClick={() => { setStep(1); onClose(); }}
              className="btn-dark"
              style={{ padding: '16px 36px' }}
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
