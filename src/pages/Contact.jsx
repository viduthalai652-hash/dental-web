import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2, MessageSquare, Navigation, ShieldAlert, HeartPulse, User, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ onOpenBooking }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState('Dr. Alexander Wright');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    clinic: 'Beverly Hills Flagship Studio',
    date: '2026-07-22',
    time: '10:30 AM',
    treatment: 'Invisible Clear Aligners Consultation ($0 Promo)',
    message: ''
  });

  const doctors = [
    { name: 'Dr. Alexander Wright', specialty: 'Lead Prosthodontist & Implants', timings: 'Mon-Wed • 9 AM - 5 PM', exp: '18 Yrs Exp', photo: '👨‍⚕️' },
    { name: 'Dr. Sophia Vance', specialty: 'Chief Orthodontist & Aligners', timings: 'Thu-Sat • 10 AM - 6 PM', exp: '14 Yrs Exp', photo: '👩‍⚕️' },
    { name: 'Dr. Marcus Thorne', specialty: 'Cosmetic Veneer Specialist', timings: 'Tue-Fri • 8 AM - 4 PM', exp: '16 Yrs Exp', photo: '👨🏽‍⚕️' },
    { name: 'Dr. Elena Rostova', specialty: 'Pediatric & Laser Specialist', timings: 'Mon-Sun • 9 AM - 7 PM', exp: '12 Yrs Exp', photo: '👩🏼‍⚕️' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#7ED9B7', '#A8F1D5', '#FFFFFF', '#1D2B2A']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          padding: '100px 24px 120px',
          background: 'var(--dark-slate)',
          color: 'var(--white)',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: `url('/images/clinic_interior.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(3px)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(29, 43, 42, 0.88) 0%, rgba(29, 43, 42, 0.96) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge-mint" style={{ marginBottom: '20px' }}>
            <Sparkles size={16} /> VIP Concierge Scheduling
          </span>
          <h1 className="hero-title-main" style={{ color: 'var(--white)', marginBottom: '20px' }}>
            Book Your Appointment Today
          </h1>
          <p className="hero-desc" style={{ color: '#A0B2B2', lineHeight: 1.7, marginBottom: '36px' }}>
            Select your preferred specialist doctor below to reserve your complimentary 3D digital smile consultation or request immediate dental care.
          </p>
        </div>
      </section>

      {/* 2. QUICK CONTACT OPTIONS BAR */}
      <section style={{ padding: '40px 24px', background: 'var(--white)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <a
            href="tel:+1800555SMILE"
            style={{
              padding: '20px',
              borderRadius: '20px',
              background: 'var(--light-mint)',
              border: '1px solid rgba(126, 217, 183, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: 'var(--dark-slate)',
              transition: 'transform 0.2s'
            }}
          >
            <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--grey)', fontWeight: 600, display: 'block' }}>Call 24/7 Helpline</span>
              <strong style={{ fontSize: '1rem', color: 'var(--dark-slate)' }}>+1 (800) 555-SMILE</strong>
            </div>
          </a>

          <a
            href="mailto:concierge@radiantalign.com"
            style={{
              padding: '20px',
              borderRadius: '20px',
              background: 'var(--light-mint)',
              border: '1px solid rgba(126, 217, 183, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: 'var(--dark-slate)'
            }}
          >
            <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--grey)', fontWeight: 600, display: 'block' }}>VIP Concierge Email</span>
              <strong style={{ fontSize: '1rem', color: 'var(--dark-slate)' }}>concierge@radiantalign.com</strong>
            </div>
          </a>

          <button
            onClick={() => alert("Connecting to WhatsApp Live Chat with Senior Patient Coordinator")}
            style={{
              padding: '20px',
              borderRadius: '20px',
              background: 'var(--light-mint)',
              border: '1px solid rgba(126, 217, 183, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textAlign: 'left',
              cursor: 'pointer'
            }}
          >
            <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--grey)', fontWeight: 600, display: 'block' }}>WhatsApp Support</span>
              <strong style={{ fontSize: '1rem', color: 'var(--dark-slate)' }}>Chat Instantly Online</strong>
            </div>
          </button>

          <a
            href="https://maps.google.com/?q=Beverly+Hills+Medical+Tower"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '20px',
              borderRadius: '20px',
              background: 'var(--light-mint)',
              border: '1px solid rgba(126, 217, 183, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: 'var(--dark-slate)'
            }}
          >
            <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Navigation size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--grey)', fontWeight: 600, display: 'block' }}>Flagship GPS</span>
              <strong style={{ fontSize: '1rem', color: 'var(--dark-slate)' }}>Get Driving Directions</strong>
            </div>
          </a>
        </div>
      </section>

      {/* 3. MAIN APPOINTMENT FORM & DOCTOR SELECTION */}
      <section className="section-container">
        <div className="grid-contact">
          {/* Form Side */}
          <div className="glass-card" style={{ padding: '44px', background: 'var(--white)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '28px' }}>
                  <span className="badge-mint" style={{ marginBottom: '12px' }}>Step 1: Choose Specialist Doctor</span>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--dark-slate)', margin: '4px 0 16px' }}>Select Your Preferred Doctor</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                    {doctors.map((doc) => {
                      const isSelected = selectedDoc === doc.name;
                      return (
                        <div
                          key={doc.name}
                          onClick={() => setSelectedDoc(doc.name)}
                          style={{
                            padding: '16px',
                            borderRadius: '18px',
                            border: isSelected ? '2px solid var(--theme-color)' : '1px solid rgba(0,0,0,0.12)',
                            background: isSelected ? 'var(--soft-green)' : 'var(--white)',
                            cursor: 'pointer',
                            transition: 'all 0.25s',
                            boxShadow: isSelected ? '0 10px 24px rgba(126, 217, 183, 0.35)' : 'none'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                            <span style={{ fontSize: '2rem' }}>{doc.photo}</span>
                            <div>
                              <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--dark-slate)' }}>{doc.name}</strong>
                              <span style={{ fontSize: '0.75rem', color: '#59C29D', fontWeight: 700 }}>{doc.exp}</span>
                            </div>
                          </div>
                          <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--grey)', lineHeight: 1.4, marginBottom: '6px' }}>{doc.specialty}</span>
                          <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: '50px', background: 'rgba(0,0,0,0.06)', fontSize: '0.7rem', fontWeight: 600, color: 'var(--dark-slate)' }}>{doc.timings}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Patient Details Grid */}
                <div style={{ marginBottom: '28px' }}>
                  <span className="badge-mint" style={{ marginBottom: '12px' }}>Step 2: Patient Contact Details</span>
                  <div className="grid-2" style={{ marginTop: '12px', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Eleanor Vance"
                        style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>Email Address *</label>
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
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>Mobile Number *</label>
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
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>Preferred Clinic Studio *</label>
                      <select
                        value={formData.clinic}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none', background: 'var(--white)' }}
                      >
                        <option value="Beverly Hills Flagship Studio">Beverly Hills Flagship Studio</option>
                        <option value="Manhattan Aesthetic Center">Manhattan Aesthetic Center</option>
                        <option value="Silicon Valley Tech Hub">Silicon Valley Tech Hub</option>
                        <option value="Miami Waterfront Studio">Miami Waterfront Studio</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>Appointment Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>Preferred Time Slot *</label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none', background: 'var(--white)' }}
                      >
                        <option value="09:00 AM">09:00 AM - Morning Priority</option>
                        <option value="10:30 AM">10:30 AM - Midday Slot</option>
                        <option value="02:00 PM">02:00 PM - Afternoon Suite</option>
                        <option value="04:30 PM">04:30 PM - Late Afternoon</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Treatment & Notes */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>Treatment / Service Type *</label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none', background: 'var(--white)', marginBottom: '16px' }}
                  >
                    <option value="Invisible Clear Aligners Consultation ($0 Promo)">Invisible Clear Aligners Consultation ($0 Promo)</option>
                    <option value="Digital Smile Makeover & Porcelain Veneers">Digital Smile Makeover & Porcelain Veneers</option>
                    <option value="Same-Day Robotic Ceramic Implants">Same-Day Robotic Ceramic Implants</option>
                    <option value="Painless Laser Root Canal Treatment">Painless Laser Root Canal Treatment</option>
                    <option value="General Checkup & Hygiene Prophylaxis">General Checkup & Hygiene Prophylaxis</option>
                  </select>

                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark-slate)', marginBottom: '8px' }}>Additional Message or Dental History Note</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell our clinical team if you have any dental anxiety, preferred sedation options, or insurance details..."
                    style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.15)', fontSize: '0.95rem', outline: 'none', fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '18px', fontSize: '1.1rem', justifyContent: 'center' }}>
                  <Send size={20} /> Submit Appointment Reservation
                </button>
              </form>
            ) : (
              /* Success screen */
              <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                <div className="animate-pulse" style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'var(--soft-green)', color: '#59C29D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 12px 30px rgba(126, 217, 183, 0.4)' }}>
                  <CheckCircle2 size={48} />
                </div>
                <h3 style={{ fontSize: '2.2rem', color: 'var(--dark-slate)', marginBottom: '12px' }}>Your Priority Request is Confirmed!</h3>
                <p style={{ color: 'var(--grey)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 32px' }}>
                  Specialist <strong style={{ color: 'var(--dark-slate)' }}>{selectedDoc}</strong> has been notified. We have reserved your suite at <strong style={{ color: 'var(--dark-slate)' }}>{formData.clinic}</strong> on {formData.date} at {formData.time}.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-dark" style={{ padding: '16px 36px' }}>
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>

          {/* Right Info Cards & Emergency Banner */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', height: '100%' }}>
            <div className="glass-card" style={{ padding: '36px', background: 'var(--white)' }}>
              <span className="badge-mint" style={{ marginBottom: '16px' }}>Flagship Headquarters</span>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--dark-slate)', marginBottom: '16px' }}>Beverly Hills Medical Tower</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--grey)', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="#7ED9B7" style={{ flexShrink: 0 }} />
                  <span>450 Beverly Hills Medical Tower, Suite 800, Los Angeles, CA 90210</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Phone size={20} color="#7ED9B7" style={{ flexShrink: 0 }} />
                  <strong style={{ color: 'var(--dark-slate)' }}>+1 (310) 888-0192</strong>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Clock size={20} color="#7ED9B7" style={{ flexShrink: 0 }} />
                  <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Emergency Care Banner */}
            <div
              className="glass-dark"
              style={{
                padding: '36px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255, 59, 48, 0.15) 0%, rgba(29, 43, 42, 0.95) 100%)',
                border: '1px solid rgba(255, 59, 48, 0.45)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#FF3B30', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldAlert size={22} color="#FFF" />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF6B6B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>24/7 Acute Care</span>
              </div>

              <h4 style={{ fontSize: '1.4rem', color: 'var(--white)', marginBottom: '12px' }}>Experiencing Dental Trauma or Acute Pain?</h4>
              <p style={{ color: '#A0B2B2', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '24px' }}>
                We reserve emergency surgical suites 365 days a year for knocked-out teeth, broken crowns, severe toothaches, and orthodontic repairs.
              </p>

              <a
                href="tel:+1800555SMILE"
                className="btn-primary"
                style={{ width: '100%', padding: '16px', justifyContent: 'center', background: 'linear-gradient(135deg, #FF6B6B 0%, #FF3B30 100%)', color: '#FFF', boxShadow: '0 8px 25px rgba(255, 59, 48, 0.4)' }}
              >
                <Phone size={18} /> Call +1 (800) 555-SMILE Now
              </a>
            </div>
            
            {/* Map Section */}
            <div
              className="glass-card"
              style={{ padding: '0', borderRadius: '24px', overflow: 'hidden', flex: 1, minHeight: '300px' }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.40035632426017!3d34.0511520177708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf3f6e1f0e1%3A0xc6c4293f0b2f3d5!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1689255013000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="RadiantAlign Clinic Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
