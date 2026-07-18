import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);

      if (scrollTop > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: '100px', right: '28px', zIndex: 9998 }}>
      <button
        onClick={scrollToTop}
        title="Scroll Back to Top"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--white)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(29, 43, 42, 0.15)',
          position: 'relative',
          transition: 'all 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        {/* SVG Progress Ring */}
        <svg
          width="52"
          height="52"
          style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
        >
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="transparent"
            stroke="rgba(126, 217, 183, 0.2)"
            strokeWidth="3.5"
          />
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="transparent"
            stroke="var(--theme-color)"
            strokeWidth="3.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.1s ease' }}
          />
        </svg>

        <ArrowUp size={20} color="#1D2B2A" />
      </button>
    </div>
  );
}
