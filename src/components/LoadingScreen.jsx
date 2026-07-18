import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onFinish]);

  const displayProgress = progress > 100 ? 100 : progress;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'var(--gradient-dark)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--white)',
        transition: 'opacity 0.6s ease, visibility 0.6s ease'
      }}
    >
      {/* Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126, 217, 183, 0.25) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }}
      />

      {/* 3D Rotating Tooth / Logo Icon */}
      <div 
        className="animate-float-3d"
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '32px',
          background: 'var(--gradient-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(126, 217, 183, 0.45)',
          marginBottom: '32px',
          position: 'relative'
        }}
      >
        <Sparkles size={56} color="#1D2B2A" />
      </div>

      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, letterSpacing: '0.04em', marginBottom: '8px' }}>
        RADIANT<span style={{ color: '#7ED9B7' }}>ALIGN</span>
      </h1>
      <p style={{ color: '#A0B2B2', fontFamily: 'var(--font-subheading)', fontSize: '1.05rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '40px' }}>
        Premium Dental & Clear Aligners
      </p>

      {/* Progress Bar Container */}
      <div
        style={{
          width: '280px',
          height: '6px',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '99px',
          overflow: 'hidden',
          marginBottom: '16px',
          position: 'relative'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${displayProgress}%`,
            background: 'var(--gradient-primary)',
            borderRadius: '99px',
            transition: 'width 0.1s ease-out'
          }}
        />
      </div>

      {/* Percentage */}
      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: '#7ED9B7' }}>
        {displayProgress}%
      </span>

      <span style={{ position: 'absolute', bottom: '40px', fontSize: '0.82rem', color: '#6D7A7A', letterSpacing: '0.08em' }}>
        CALIBRATING 3D SMILE DIAGNOSTICS...
      </span>
    </div>
  );
}
