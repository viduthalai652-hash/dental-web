import React, { useState } from 'react';
import { Eye, Type, Sun, Check } from 'lucide-react';

export default function AccessibilityBar() {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [fontSize, setFontSize] = useState('normal'); // normal, large, xlarge

  const toggleHighContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'high-contrast');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const toggleDyslexia = () => {
    const next = !dyslexiaFont;
    setDyslexiaFont(next);
    if (next) {
      document.documentElement.setAttribute('data-font', 'dyslexia');
    } else {
      document.documentElement.removeAttribute('data-font');
    }
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    if (size === 'large') {
      document.documentElement.style.fontSize = '18px';
    } else if (size === 'xlarge') {
      document.documentElement.style.fontSize = '20px';
    } else {
      document.documentElement.style.fontSize = '16px';
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999 }}>
      {open && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            bottom: '64px',
            left: 0,
            width: '310px',
            padding: '24px',
            boxShadow: '0 20px 50px rgba(29, 43, 42, 0.2)',
            animation: 'pulse-glow 0.4s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '12px' }}>
            <Eye size={20} color="#7ED9B7" />
            <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--dark-slate)' }}>Accessibility Controls</h4>
          </div>

          {/* Font Size Selector */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--grey)', marginBottom: '8px' }}>
              Text Size Scaling
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['normal', 'large', 'xlarge'].map((s) => (
                <button
                  key={s}
                  onClick={() => changeFontSize(s)}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '8px',
                    border: fontSize === s ? '2px solid var(--theme-color)' : '1px solid rgba(0,0,0,0.1)',
                    background: fontSize === s ? 'var(--soft-green)' : 'var(--white)',
                    fontFamily: 'var(--font-subheading)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    textTransform: 'capitalize'
                  }}
                >
                  {s === 'xlarge' ? 'X-Large' : s}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast Mode */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', padding: '10px 12px', background: 'rgba(255,255,255,0.6)', borderRadius: '12px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-slate)' }}>High-Contrast Mode</span>
            <button
              onClick={toggleHighContrast}
              style={{
                width: '46px',
                height: '26px',
                borderRadius: '99px',
                background: highContrast ? 'var(--theme-color)' : '#CCCCCC',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#FFF',
                  position: 'absolute',
                  top: '3px',
                  left: highContrast ? '23px' : '3px',
                  transition: 'left 0.25s ease'
                }}
              />
            </button>
          </div>

          {/* Dyslexia Friendly Font */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: 'rgba(255,255,255,0.6)', borderRadius: '12px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-slate)' }}>Dyslexia-Friendly Font</span>
            <button
              onClick={toggleDyslexia}
              style={{
                width: '46px',
                height: '26px',
                borderRadius: '99px',
                background: dyslexiaFont ? 'var(--theme-color)' : '#CCCCCC',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#FFF',
                  position: 'absolute',
                  top: '3px',
                  left: dyslexiaFont ? '23px' : '3px',
                  transition: 'left 0.25s ease'
                }}
              />
            </button>
          </div>
        </div>
      )}

      {/* Main Accessibility Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        title="Accessibility Tools & Adjustments"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--dark-slate)',
          color: 'var(--white)',
          border: '2px solid var(--theme-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(29, 43, 42, 0.3)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Eye size={24} color="#7ED9B7" />
      </button>
    </div>
  );
}
