import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, select, textarea, .clickable, .glass-card');
      if (target) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: 'transform 0.08s ease-out'
      }}
    >
      {/* Outer Glowing Ring */}
      <div
        style={{
          position: 'absolute',
          top: hovered ? '-24px' : '-14px',
          left: hovered ? '-24px' : '-14px',
          width: hovered ? '48px' : '28px',
          height: hovered ? '48px' : '28px',
          borderRadius: '50%',
          border: '2px solid var(--theme-color)',
          background: hovered ? 'rgba(126, 217, 183, 0.2)' : 'transparent',
          boxShadow: hovered ? '0 0 24px rgba(126, 217, 183, 0.8)' : '0 0 10px rgba(126, 217, 183, 0.4)',
          transform: clicking ? 'scale(0.8)' : 'scale(1)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />
      
      {/* Center Precision Dot */}
      <div
        style={{
          position: 'absolute',
          top: '-4px',
          left: '-4px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--theme-color)',
          boxShadow: '0 0 8px var(--theme-color)'
        }}
      />
    </div>
  );
}
