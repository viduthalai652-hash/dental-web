import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, PhoneCall, Menu, X, Calendar, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Clinics', path: '/clinics' },
    { name: 'Aligners', path: '/aligners' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: scrolled ? '12px 24px' : '20px 24px',
        background: scrolled ? 'rgba(255, 255, 255, 0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 10px 35px rgba(29, 43, 42, 0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid transparent'
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div 
            className="animate-float"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(126, 217, 183, 0.4)'
            }}
          >
            <Sparkles size={24} color="#1D2B2A" />
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--dark-slate)', display: 'block', lineHeight: 1.1 }}>
              RADIANT<span style={{ color: '#59C29D' }}>ALIGN</span>
            </span>
            <span style={{ fontFamily: 'var(--font-subheading)', fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--grey)', textTransform: 'uppercase', fontWeight: 600 }}>
              Premium Dental & Aligners
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop" style={{ background: scrolled ? 'transparent' : 'rgba(255, 255, 255, 0.6)', padding: scrolled ? '0' : '6px 14px', borderRadius: '50px', backdropFilter: scrolled ? 'none' : 'blur(12px)', border: scrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.6)' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-subheading)',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '0.95rem',
                  color: isActive ? 'var(--dark-slate)' : 'var(--grey)',
                  background: isActive ? 'var(--soft-green)' : 'transparent',
                  border: isActive ? '1px solid var(--theme-color)' : '1px solid transparent',
                  transition: 'all 0.25s ease'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="tel:+1800555SMILE"
            className="hide-on-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--dark-slate)',
              textDecoration: 'none',
              fontFamily: 'var(--font-subheading)',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}
          >
            <PhoneCall size={18} color="#59C29D" />
            <span>24/7 VIP Care</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="btn-primary hide-on-mobile"
            style={{
              padding: '12px 24px',
              fontSize: '0.92rem'
            }}
          >
            <Calendar size={18} />
            Book Appointment
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            top: '100%',
            left: '16px',
            right: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '10px'
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontFamily: 'var(--font-subheading)',
                fontWeight: 600,
                color: location.pathname === link.path ? 'var(--dark-slate)' : 'var(--grey)',
                background: location.pathname === link.path ? 'var(--soft-green)' : 'transparent',
                display: 'block'
              }}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn-primary"
            style={{ width: '100%', marginTop: '12px' }}
          >
            <Calendar size={18} />
            Book VIP Appointment
          </button>
        </div>
      )}
    </header>
  );
}
