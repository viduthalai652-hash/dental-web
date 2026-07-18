import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer style={{ background: 'var(--dark-slate)', color: 'var(--white)', position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '40px' }}>
      {/* Decorative Mint Glow Orb */}
      <div 
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126, 217, 183, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* Newsletter / Emergency Banner */}
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 24px' }}>
        <div 
          className="glass-dark"
          style={{
            padding: '48px',
            borderRadius: 'var(--radius-xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center',
            marginBottom: '80px',
            background: 'linear-gradient(135deg, rgba(45, 67, 65, 0.9) 0%, rgba(29, 43, 42, 0.95) 100%)',
            border: '1px solid rgba(126, 217, 183, 0.3)'
          }}
        >
          <div>
            <span className="badge-mint" style={{ marginBottom: '12px' }}>
              <ShieldCheck size={16} /> VIP Dental Membership & Newsletter
            </span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--white)', margin: '12px 0 8px' }}>
              Join the VIP Smile Club
            </h3>
            <p style={{ color: '#A0B2B2', fontSize: '1rem', maxWidth: '420px' }}>
              Subscribe to receive exclusive oral health masterclasses, early access to new aligner technology, and $150 off your first smile makeover consultation.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Welcome to the VIP Smile Club! Check your inbox for your $150 Voucher."); }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              style={{
                flex: '1',
                minWidth: '240px',
                padding: '16px 24px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(126, 217, 183, 0.3)',
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--white)',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '16px 28px' }}>
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Main Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', paddingBottom: '60px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          {/* Col 1: Brand & Emergency */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={22} color="#1D2B2A" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--white)' }}>
                RADIANT<span style={{ color: '#7ED9B7' }}>ALIGN</span>
              </span>
            </Link>
            <p style={{ color: '#A0B2B2', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
              World-class luxury dental care & precision digital orthodontics. Combining 3D glassmorphism diagnostics with painless treatment protocols across 12 flagship clinics.
            </p>
            <div style={{ padding: '16px 20px', borderRadius: '16px', background: 'rgba(255, 59, 48, 0.12)', border: '1px solid rgba(255, 59, 48, 0.35)', display: 'inline-block' }}>
              <span style={{ display: 'block', fontSize: '0.78rem', color: '#FF6B6B', fontWeight: 700, textTransform: 'uppercase' }}>24/7 Dental Emergency Helpline</span>
              <a href="tel:+1800555SMILE" style={{ color: 'var(--white)', fontWeight: 800, fontSize: '1.15rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <Phone size={18} color="#FF6B6B" /> +1 (800) 555-SMILE
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Explore Clinic</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" style={{ color: '#A0B2B2', textDecoration: 'none', transition: 'color 0.2s' }}>Home & Experience</Link></li>
              <li><Link to="/clinics" style={{ color: '#A0B2B2', textDecoration: 'none', transition: 'color 0.2s' }}>Our 12 Luxury Clinics</Link></li>
              <li><Link to="/aligners" style={{ color: '#A0B2B2', textDecoration: 'none', transition: 'color 0.2s' }}>Invisible Clear Aligners</Link></li>
              <li><Link to="/about" style={{ color: '#A0B2B2', textDecoration: 'none', transition: 'color 0.2s' }}>About Specialists & Story</Link></li>
              <li><Link to="/contact" style={{ color: '#A0B2B2', textDecoration: 'none', transition: 'color 0.2s' }}>Book VIP Appointment</Link></li>
            </ul>
          </div>

          {/* Col 3: Advanced Treatments */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Specialties</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><span style={{ color: '#A0B2B2' }}>Digital Smile Design (DSD)</span></li>
              <li><span style={{ color: '#A0B2B2' }}>Same-Day Ceramic Implants</span></li>
              <li><span style={{ color: '#A0B2B2' }}>Invisalign & AI Aligners</span></li>
              <li><span style={{ color: '#A0B2B2' }}>Microscope Root Canal</span></li>
              <li><span style={{ color: '#A0B2B2' }}>Porcelain Veneers & Makeover</span></li>
              <li><span style={{ color: '#A0B2B2' }}>Pediatric & Sedation Dentistry</span></li>
            </ul>
          </div>

          {/* Col 4: Flagship & Hours */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Flagship Studio</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: '#A0B2B2', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="#7ED9B7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>450 Beverly Hills Medical Tower, Suite 800, Los Angeles, CA 90210</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={20} color="#7ED9B7" style={{ flexShrink: 0 }} />
                <span>Mon - Sun: 8:00 AM - 9:00 PM (365 Days)</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={20} color="#7ED9B7" style={{ flexShrink: 0 }} />
                <span>concierge@radiantalign.com</span>
              </div>
              <button onClick={onOpenBooking} className="btn-secondary" style={{ marginTop: '10px', padding: '12px 20px', fontSize: '0.9rem', width: 'fit-content' }}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', paddingTop: '32px', color: '#6D7A7A', fontSize: '0.88rem' }}>
          <div>
            &copy; {new Date().getFullYear()} RadiantAlign Premium Dental Group LLC. All Rights Reserved. ISO 9001:2015 Healthcare Certified.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ cursor: 'pointer', color: '#A0B2B2' }}>HIPAA Compliance</span>
            <span style={{ cursor: 'pointer', color: '#A0B2B2' }}>Patient Privacy Policy</span>
            <span style={{ cursor: 'pointer', color: '#A0B2B2' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer', color: '#A0B2B2' }}>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
