import React, { useState } from 'react';
import { X, Sparkles, Eye, Compass, ChevronLeft, ChevronRight, Info, CheckCircle2 } from 'lucide-react';

export default function VirtualTourModal({ open, onClose, onOpenBooking }) {
  if (!open) return null;

  const rooms = [
    {
      id: 'reception',
      title: 'VIP Flagship Reception & Patient Lounge',
      desc: 'Step into an oasis of luxury. Equipped with organic mint tea bars, aromatherapy air purification, private check-in pods, and zero waiting room stress.',
      img: '/images/clinic_interior.jpg',
      hotspots: [
        { x: 30, y: 55, title: 'Check-In Pods', info: 'Biometric & iPad express check-in with facial recognition.' },
        { x: 75, y: 40, title: 'Refreshment Bar', info: 'Complimentary artisan herbal teas, sparkling water, and tooth-safe xylitol mints.' }
      ]
    },
    {
      id: 'treatment',
      title: '3D Laser & Robotic Surgery Suite',
      desc: 'Our flagship surgical bay featuring the Sirona Ergonomic Cloud Chair, ceiling-mounted 4K entertainment screens, and Waterlase painless laser systems.',
      img: '/images/clinic_interior.jpg',
      hotspots: [
        { x: 45, y: 60, title: 'Ergonomic Cloud Chair', info: 'Memory foam heated dental chair with built-in lumbar massage.' },
        { x: 68, y: 35, title: 'iTero 5D Scanner', info: 'Takes 6,000 photos per second to generate your exact 3D digital smile simulation in 60 seconds.' }
      ]
    },
    {
      id: 'sterilization',
      title: 'Hospital-Grade Sterilization Glass Lab',
      desc: '100% transparent sterilization protocol visible through curved glass. Exceeds JCI and OSHA infection control guidelines.',
      img: '/images/clinic_interior.jpg',
      hotspots: [
        { x: 50, y: 50, title: 'Class-B Medical Autoclave', info: 'Multi-stage thermal and UV sterilization for guaranteed instrument safety.' }
      ]
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const room = rooms[currentIdx];

  const nextRoom = () => {
    setActiveHotspot(null);
    setCurrentIdx((prev) => (prev + 1) % rooms.length);
  };

  const prevRoom = () => {
    setActiveHotspot(null);
    setCurrentIdx((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(29, 43, 42, 0.92)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '1100px',
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--dark-slate)',
          color: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          border: '1px solid rgba(126, 217, 183, 0.4)',
          position: 'relative'
        }}
      >
        {/* Top Control Bar */}
        <div style={{ padding: '20px 28px', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="badge-mint">
              <Compass size={16} /> 360° Interactive Walkthrough
            </span>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--white)' }}>
              {room.title}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.85rem', color: '#A0B2B2' }}>
              Room {currentIdx + 1} of {rooms.length}
            </span>
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--white)', cursor: 'pointer' }}>
              <X size={26} />
            </button>
          </div>
        </div>

        {/* Interactive Panoramic Viewer */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#0D1716' }}>
          {/* Simulated 360 Image Viewport */}
          <img
            src={room.img}
            alt={room.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85) contrast(1.1)'
            }}
          />

          {/* Interactive Hotspots */}
          {room.hotspots.map((hs, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${hs.y}%`,
                left: `${hs.x}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10
              }}
            >
              <button
                onClick={() => setActiveHotspot(hs)}
                className="animate-pulse"
                title={hs.title}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--theme-color)',
                  color: 'var(--dark-slate)',
                  border: '3px solid var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(126, 217, 183, 0.9)'
                }}
              >
                <Info size={20} />
              </button>

              {/* Popup Info Card */}
              {activeHotspot && activeHotspot.title === hs.title && (
                <div
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    bottom: '48px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '280px',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.96)',
                    color: 'var(--dark-slate)',
                    borderRadius: '16px',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                    zIndex: 20
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--dark-slate)' }}>{hs.title}</strong>
                    <button onClick={() => setActiveHotspot(null)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                      <X size={16} color="#6D7A7A" />
                    </button>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--grey)', margin: 0, lineHeight: 1.4 }}>
                    {hs.info}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevRoom}
            style={{
              position: 'absolute',
              top: '50%',
              left: '24px',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.4)',
              color: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextRoom}
            style={{
              position: 'absolute',
              top: '50%',
              right: '24px',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.4)',
              color: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <ChevronRight size={28} />
          </button>

          <div style={{ position: 'absolute', bottom: '20px', left: '28px', background: 'rgba(0,0,0,0.6)', padding: '8px 16px', borderRadius: '50px', fontSize: '0.85rem', color: 'var(--white)', display: 'flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(6px)' }}>
            <Eye size={16} color="#7ED9B7" /> Click any glowing mint pin to inspect clinic technology
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div style={{ padding: '20px 28px', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#A0B2B2', maxWidth: '640px' }}>
            {room.desc}
          </p>
          <button
            onClick={() => { onClose(); onOpenBooking(); }}
            className="btn-primary"
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}
          >
            <CheckCircle2 size={18} /> Book Room Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
