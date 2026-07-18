import React from 'react';

export default function BackgroundFx() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
      {/* Orb 1: Mint Top Right */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126, 217, 183, 0.28) 0%, rgba(168, 241, 213, 0.1) 45%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
      
      {/* Orb 2: Soft Green Mid Left */}
      <div
        className="animate-float-slow"
        style={{
          position: 'absolute',
          top: '40%',
          left: '-15%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234, 251, 245, 0.9) 0%, rgba(126, 217, 183, 0.15) 50%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />

      {/* Orb 3: Light Teal Bottom Right */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126, 217, 183, 0.22) 0%, transparent 70%)',
          filter: 'blur(45px)'
        }}
      />

      {/* Subtle Grid / Noise Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(29, 43, 42, 0.04) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          opacity: 0.6
        }}
      />
    </div>
  );
}
