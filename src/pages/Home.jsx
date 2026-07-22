import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, ArrowLeft, CheckCircle2, Shield, Award, HeartPulse, Smile, Star, ChevronLeft, ChevronRight, Play, Zap, Clock, ThumbsUp, Layers, Cpu, ShieldCheck, Phone } from 'lucide-react';

export default function Home({ onOpenBooking }) {
  // Testimonials state
  const [testIdx, setTestIdx] = useState(0);
  
  // Medical Spectrum Slider State
  const [spectrumIdx, setSpectrumIdx] = useState(0);
  const [isSpectrumPaused, setIsSpectrumPaused] = useState(false);

  const testimonials = [
    {
      name: 'Victoria Sterling',
      role: 'Fashion Designer & Model',
      photo: '👸🏼',
      rating: 5,
      treatment: 'Invisalign Clear Aligners (5 Months)',
      text: "RadiantAlign transformed not just my smile, but my entire professional confidence. The 3D Digital Smile Design showed me my exact final smile on day one! The aligners were virtually invisible during fashion week, and the 360 clinic experience feels like a 5-star spa."
    },
    {
      name: 'Marcus Thorne Jr.',
      role: 'Tech Executive & Founder',
      photo: '👨🏽‍💼',
      rating: 5,
      treatment: 'Robotic Ceramic Dental Implants',
      text: "As someone terrified of traditional dental drills, their laser dentistry and sedation protocols were a complete revelation. Zero pain, same-day ceramic crowns, and the most luxurious consultation rooms I have ever seen."
    },
    {
      name: 'Elena & Lucas Vance',
      role: 'Verified Parents',
      photo: '👩‍👧‍👦',
      rating: 5,
      treatment: 'Pediatric & Family Preventive Care',
      text: "Our kids actually ask when we get to go back to the dentist! The pediatric play lounge and gentle doctors make every checkup completely stress-free. Truly world-class healthcare."
    }
  ];

  // Before/After Gallery State
  const [galleryTab, setGalleryTab] = useState(0);
  const cases = [
    {
      id: 'crowding',
      title: 'Severe Crowding & Arch Expansion',
      subtitle: 'Complete resolution of twisted anterior teeth without extractions',
      doctor: 'Dr. Sophia Vance (Chief Orthodontist)',
      duration: '5 Months Average (14 Aligner Pairs)',
      enamelPreserved: '100% Healthy Enamel Retained',
      comfortRating: '9.9 / 10 (Zero Wires or Metal)',
      technique: '3D AI Arch Expansion & Micro-Movement',
      desc: 'By applying targeted biological micro-forces using our matte crystal aligners, we expanded the upper and lower dental arches by 4.2mm. This allowed bunched incisors to glide smoothly into golden-ratio alignment without a single extraction.',
      gif: '/videos/teeth_alignment.mp4'
    },
    {
      id: 'diastema',
      title: 'Diastema (Front Gap) Seamless Closure',
      subtitle: 'Precision closure of central and lateral diastema gaps',
      doctor: 'Dr. Marcus Thorne (Cosmetic Specialist)',
      duration: '3.5 Months Average (10 Aligner Pairs)',
      enamelPreserved: '100% Enamel & Gum Protection',
      comfortRating: '10 / 10 Painless Care',
      technique: 'Symmetrical Central Approximation',
      desc: 'Our clear aligners exerted gentle elastic pull to close a prominent 3.8mm central gap while stabilizing the papilla gum tissue. The result is a seamless, tight contact point that prevents food impaction and enhances speech clarity.',
      gif: '/videos/teeth_gap_alignment.mp4'
    },
    {
      id: 'overjet',
      title: 'Protruding Overjet & Rotated Incisors',
      subtitle: 'Retraction of protruding anterior teeth and 28° rotation correction',
      doctor: 'Dr. Alexander Wright (Prosthodontist & Ortho)',
      duration: '6 Months Average (18 Aligner Pairs)',
      enamelPreserved: 'Zero Shaving Required',
      comfortRating: '9.8 / 10 Ultra-Smooth Fit',
      technique: 'AI-Guided Torque & Derotation',
      desc: 'This patient presented with protruding upper front teeth and severe axial rotation. Using custom laser-trimmed aligners, we derotated the lateral incisors by 28 degrees while bringing the overjet back into harmonious facial balance.',
      gif: '/videos/teeth_overjet_alignment.mp4'
    },
    {
      id: 'crossbite',
      title: 'Complex Crossbite & TMJ Relief',
      subtitle: 'Re-aligning inverted biting forces to eliminate jaw clicking',
      doctor: 'Dr. Elena Rostova (Laser & Ortho Director)',
      duration: '6.5 Months Average (19 Aligner Pairs)',
      enamelPreserved: '100% Natural Cusps Saved',
      comfortRating: '10 / 10 TMJ Muscle Relaxation',
      technique: 'Quadratic Arch De-collapsing',
      desc: 'Inverted upper teeth were causing chronic jaw muscle strain and TMJ clicking during chewing. Our aligners gently jumped the crossbite, restoring symmetrical chewing pressure across all back molars and providing instant headache relief.',
      gif: '/videos/teeth_crossbite_alignment.mp4'
    },
    {
      id: 'openbite',
      title: 'Vertical Anterior Open Bite Restoration',
      subtitle: 'Achieving ideal vertical overlap for confident speech and biting',
      doctor: 'Dr. Sophia Vance (Chief Orthodontist)',
      duration: '7 Months Average (20 Aligner Pairs)',
      enamelPreserved: '100% Molar Height Balanced',
      comfortRating: '9.9 / 10 Gentle Posterior Intrusion',
      technique: 'Molar Intrusion & Anterior Extrusion',
      desc: 'Anterior open bites make biting into thin foods difficult and often induce lisps. Our biological aligner protocol gently intruded the posterior molars while guiding upper incisors downward, creating a flawless 2mm vertical bite overlap.',
      gif: '/videos/teeth_openbite_alignment.mp4'
    }
  ];

  const nextTestimonial = () => setTestIdx((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setTestIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const spectrumServices = [
    { title: 'Dental Implants', desc: 'Robotic high-precision titanium & ceramic root replacements.', icon: '🦷', img: '/images/room_operation.jpg' },
    { title: 'Root Canal Treatment', desc: '100% painless microscope root therapy saved in a single visit.', icon: '🔬', img: '/images/tech_laboratory.jpg' },
    { title: 'Cosmetic Dentistry', desc: 'Ultra-thin porcelain veneers and Hollywood smile makeovers.', icon: '✨', img: '/images/hero_patient.jpg' },
    { title: 'Braces & Orthodontics', desc: 'Ceramic aesthetic brackets and fast self-ligating systems.', icon: '🪥', img: '/images/clinic_interior.jpg' },
    { title: 'Invisible Aligners', desc: 'Our flagship 3D CAD crystal clear aligners starting at $120/mo.', icon: '😁', img: '/images/aligner_3d.jpg' },
    { title: 'Teeth Whitening', desc: 'Zoom 45-minute laser whitening up to 8 shades brighter.', icon: '⚡', img: '/images/teeth_whitening_alt.jpg' },
    { title: 'Pediatric Dentistry', desc: 'Gentle, fun, and fear-free dental care tailored for children.', icon: '🧸', img: '/images/pediatric_dentistry.jpg' },
    { title: 'Oral & Maxillofacial', desc: 'Wisdom tooth extraction & bone grafting with zero swelling.', icon: '🛡️', img: '/images/room_consultation.jpg' }
  ];

  const nextSpectrum = () => setSpectrumIdx((prev) => (prev + 1) % spectrumServices.length);
  const prevSpectrum = () => setSpectrumIdx((prev) => (prev - 1 + spectrumServices.length) % spectrumServices.length);

  useEffect(() => {
    if (isSpectrumPaused) return;
    const timer = setInterval(() => {
      setSpectrumIdx((prev) => (prev + 1) % spectrumServices.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isSpectrumPaused, spectrumServices.length]);

  return (
    <div style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      {/* 1. HERO SECTION */}
      <section 
        style={{
          minHeight: 'calc(100vh - 80px)',
          padding: '60px 24px 120px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(160deg, #F4FFFB 0%, #EAFBF5 60%, #D4F7EA 100%)'
        }}
      >
        {/* Animated Background Rings & Particles */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '650px', height: '650px', borderRadius: '50%', border: '1px dashed rgba(126, 217, 183, 0.45)', pointerEvents: 'none' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '20%', right: '12%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(126, 217, 183, 0.35) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />

        <div className="grid-hero" style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
          {/* Left Hero Content */}
          <div>
            <div className="badge-mint" style={{ marginBottom: '24px' }}>
              <Sparkles size={16} color="#1D2B2A" /> #1 Luxury Dental & Clear Aligner Brand
            </div>

            <h1 style={{ fontSize: '3.6rem', fontWeight: 800, lineHeight: 1.12, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--dark-slate)' }}>
              Crafting Confident Smiles with <span className="gradient-text-mint">Advanced Dental Care</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--grey)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '580px' }}>
              Experience the pinnacle of modern dentistry. Combining precision 3D AI diagnostics, virtually invisible crystal aligners, and 100% painless sedation care inside ultra-luxury wellness clinics.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '44px' }}>
              <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
                <Calendar size={20} /> Book Appointment
              </button>

              <Link to="/clinics" className="btn-secondary" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
                Explore 12 Clinics <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div style={{ display: 'flex', gap: '32px', borderTop: '1px solid rgba(126, 217, 183, 0.3)', paddingTop: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(126, 217, 183, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={20} color="#1D2B2A" />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--dark-slate)' }}>ISO 9001:2015</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--grey)' }}>Certified Luxury Healthcare</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(126, 217, 183, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={20} color="#1D2B2A" />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--dark-slate)' }}>100% Painless</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--grey)' }}>Laser Sedation Protocols</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Area with 3D Floating Elements */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Soft Glowing Rings Behind */}
            <div style={{ position: 'absolute', inset: -20, borderRadius: '40px', background: 'radial-gradient(circle, rgba(126, 217, 183, 0.6) 0%, transparent 70%)', filter: 'blur(35px)', zIndex: 0 }} />

            {/* Main Smiling Patient Visual */}
            <div
              className="glass-panel"
              style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '36px',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.85)',
                boxShadow: '0 30px 80px rgba(29, 43, 42, 0.18)',
                maxWidth: '480px',
                width: '100%'
              }}
            >
              <img
                src="/images/hero_patient.jpg"
                alt="Confident Patient Smile"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  borderRadius: '26px'
                }}
              />

              {/* Floating Aligner Card Overlaid */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: '-24px',
                  padding: '16px 20px',
                  borderRadius: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 16px 40px rgba(29, 43, 42, 0.14)',
                  zIndex: 4
                }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Smile size={28} color="#1D2B2A" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#59C29D', textTransform: 'uppercase', letterSpacing: '0.08em' }}>AI Smile Simulation</span>
                  <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--dark-slate)' }}>6-Month Clear Aligner Arch</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--grey)' }}>0% Interest Financing Available</span>
                </div>
              </div>
            </div>

            {/* Floating 3D Aligner Render Top Right */}
            <div
              className="glass-card animate-float-slow"
              style={{
                position: 'absolute',
                top: '24px',
                right: '-32px',
                width: '180px',
                padding: '12px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.92)',
                boxShadow: '0 18px 45px rgba(29, 43, 42, 0.12)',
                zIndex: 3,
                textAlign: 'center'
              }}
            >
              <img
                src="/images/aligner_3d.jpg"
                alt="3D Aligner Model"
                style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '16px', marginBottom: '8px' }}
              />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-slate)', display: 'block' }}>Precision Crystal Poly-Aligner</span>
              <span style={{ fontSize: '0.68rem', color: '#59C29D', fontWeight: 600 }}>0.3mm Ultra-Thin & Invisible</span>
            </div>
          </div>
        </div>

        {/* Curved Wave Separator at Bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '70px', fill: 'var(--light-mint)' }}>
            <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,45 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <section style={{ padding: '60px 24px', background: 'var(--light-mint)', position: 'relative', zIndex: 5 }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div
            className="glass-panel"
            style={{
              padding: '48px 36px',
              borderRadius: '32px',
              background: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 20px 50px rgba(126, 217, 183, 0.18)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              textAlign: 'center'
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--dark-slate)', display: 'block', lineHeight: 1 }}>
                15,000<span style={{ color: '#7ED9B7' }}>+</span>
              </span>
              <span style={{ fontFamily: 'var(--font-subheading)', fontSize: '1rem', fontWeight: 600, color: 'var(--grey)', marginTop: '8px', display: 'block' }}>Happy Patients</span>
            </div>

            <div style={{ borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--dark-slate)', display: 'block', lineHeight: 1 }}>
                12
              </span>
              <span style={{ fontFamily: 'var(--font-subheading)', fontSize: '1rem', fontWeight: 600, color: 'var(--grey)', marginTop: '8px', display: 'block' }}>State-of-Art Clinics</span>
            </div>

            <div style={{ borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--dark-slate)', display: 'block', lineHeight: 1 }}>
                45<span style={{ color: '#7ED9B7' }}>+</span>
              </span>
              <span style={{ fontFamily: 'var(--font-subheading)', fontSize: '1rem', fontWeight: 600, color: 'var(--grey)', marginTop: '8px', display: 'block' }}>Certified Doctors</span>
            </div>

            <div style={{ borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--dark-slate)', display: 'block', lineHeight: 1 }}>
                28,000<span style={{ color: '#7ED9B7' }}>+</span>
              </span>
              <span style={{ fontFamily: 'var(--font-subheading)', fontSize: '1rem', fontWeight: 600, color: 'var(--grey)', marginTop: '8px', display: 'block' }}>Successful Treatments</span>
            </div>

            <div style={{ borderLeft: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--dark-slate)', display: 'block', lineHeight: 1 }}>
                18<span style={{ color: '#7ED9B7' }}> Yrs</span>
              </span>
              <span style={{ fontFamily: 'var(--font-subheading)', fontSize: '1rem', fontWeight: 600, color: 'var(--grey)', marginTop: '8px', display: 'block' }}>Healthcare Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="section-container">
        <div className="section-title">
          <span className="badge-mint">Why Choose RadiantAlign</span>
          <h2 style={{ marginTop: '16px' }}>The Gold Standard of Modern Healthcare</h2>
          <p>We combine high-precision diagnostic AI, ultra-comfortable sedation protocols, and transparent pricing to give you the dental experience you truly deserve.</p>
        </div>

        <div className="grid-3">
          {[
            {
              icon: <Cpu size={32} color="#1D2B2A" />,
              title: 'Advanced Technology',
              desc: 'Featuring iTero 5D Intraoral Scanners, Pearl AI 3D diagnostics, and Sirona CAD/CAM same-day ceramic crown milling right inside the clinic.',
              bgImg: '/images/tech_laboratory.jpg'
            },
            {
              icon: <Award size={32} color="#1D2B2A" />,
              title: 'Certified Specialists',
              desc: 'Our clinical team is led by Harvard, UCLA, and Columbia educated prosthodontists and orthodontists with 15+ years of clinical perfection.',
              bgImg: '/images/room_operation.jpg'
            },
            {
              icon: <HeartPulse size={32} color="#1D2B2A" />,
              title: 'Comfortable Treatment',
              desc: '100% anxiety-free care with Waterlase laser dentistry, needle-free anesthesia options, and heated lumbar massage dental chairs.',
              bgImg: '/images/room_consultation.jpg'
            },
            {
              icon: <Smile size={32} color="#1D2B2A" />,
              title: 'Digital Smile Design',
              desc: 'Preview your exact future smile before starting! We create a physical 3D mockup so you can test drive your new teeth before commitment.',
              bgImg: '/images/clinic_interior.jpg'
            },
            {
              icon: <Zap size={32} color="#1D2B2A" />,
              title: 'Affordable Care',
              desc: 'Transparent pricing with zero hidden fees. We partner with all major insurance providers and offer flexible 0% interest monthly installments.',
              bgImg: '/images/hero_patient.jpg'
            },
            {
              icon: <ShieldCheck size={32} color="#1D2B2A" />,
              title: 'Personalized Treatment',
              desc: 'Every patient receives a dedicated VIP care coordinator and custom biological treatment plan tailored to your exact lifestyle and goals.',
              bgImg: '/images/aligner_3d.jpg'
            }
          ].map((card, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img src={card.bgImg} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 100%)' }} />
              </div>
              <div style={{ padding: '36px 30px', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 10px 24px rgba(126, 217, 183, 0.4)'
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', color: 'var(--dark-slate)' }}>{card.title}</h3>
                <p style={{ color: 'var(--grey)', fontSize: '0.96rem', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </div>

          ))}
        </div>
      </section>

      {/* 4. SMILE TRANSFORMATION SHOWCASE (Animated Interactive Showcase) */}
      <section style={{ padding: '100px 24px', background: 'var(--soft-green)', position: 'relative' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="section-title">
            <span className="badge-mint">Clinical Case Studies Suite</span>
            <h2 style={{ marginTop: '16px' }}>Interactive Before & After Smile Showcase</h2>
            <p>Explore real animated orthodontic transformations across 5 complex dental conditions. Witness how our AI digital planning moves teeth millimeter by millimeter.</p>
          </div>

          <div className="glass-panel" style={{ padding: '44px', background: 'var(--white)', borderRadius: '36px', boxShadow: '0 30px 80px rgba(29, 43, 42, 0.12)' }}>
            {/* Case Selector Tabs */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
              {cases.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryTab(i)}
                  style={{
                    padding: '14px 26px',
                    borderRadius: '50px',
                    border: galleryTab === i ? '2px solid var(--theme-color)' : '1px solid rgba(0,0,0,0.1)',
                    background: galleryTab === i ? 'var(--dark-slate)' : 'var(--white)',
                    fontFamily: 'var(--font-subheading)',
                    fontWeight: 700,
                    fontSize: '0.94rem',
                    color: galleryTab === i ? 'var(--white)' : 'var(--dark-slate)',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    boxShadow: galleryTab === i ? '0 10px 25px rgba(29, 43, 42, 0.28)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: galleryTab === i ? '#7ED9B7' : 'var(--soft-green)', color: 'var(--dark-slate)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                    {i + 1}
                  </span>
                  {c.title.split('&')[0].split('(')[0].trim()}
                </button>
              ))}
            </div>

            {/* Selected Case Showcase Box */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
              {/* Left Animated Visual Frame */}
              <div style={{ position: 'relative', height: '440px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.18)', border: '2px solid rgba(126, 217, 183, 0.5)', background: 'var(--dark-slate)' }}>
                {cases[galleryTab].gif.endsWith('.mp4') ? (
                  <video src={cases[galleryTab].gif} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <img
                    src={cases[galleryTab].gif}
                    alt={cases[galleryTab].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
                
                {/* Top Status Pill */}
                <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(29, 43, 42, 0.9)', color: '#7ED9B7', padding: '8px 18px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700, zIndex: 5, border: '1px solid rgba(126, 217, 183, 0.3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={14} /> Case #{galleryTab + 1}: Live 3D Aligner Transition
                </div>

                {/* Bottom Technique Overlay */}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'rgba(29, 43, 42, 0.92)', color: 'var(--white)', padding: '14px 20px', borderRadius: '20px', zIndex: 5, backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#A8F1D5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '2px' }}>
                    Orthodontic Biomechanics
                  </span>
                  <strong style={{ fontSize: '0.94rem', color: 'var(--white)' }}>
                    {cases[galleryTab].technique}
                  </strong>
                </div>
              </div>

              {/* Right Comprehensive Clinical Summary */}
              <div>
                <span className="badge-mint" style={{ marginBottom: '14px' }}>
                  {cases[galleryTab].subtitle}
                </span>
                <h3 style={{ fontSize: '2.1rem', marginBottom: '16px', color: 'var(--dark-slate)', lineHeight: 1.25 }}>
                  {cases[galleryTab].title}
                </h3>
                <p style={{ color: 'var(--grey)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  {cases[galleryTab].desc}
                </p>

                {/* 4 Clinical Specification Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ padding: '16px 18px', background: 'var(--light-mint)', borderRadius: '18px', border: '1px solid rgba(126, 217, 183, 0.35)' }}>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--grey)', fontWeight: 600, marginBottom: '4px' }}>👨‍⚕️ Lead Specialist</span>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--dark-slate)', display: 'block' }}>{cases[galleryTab].doctor}</strong>
                  </div>

                  <div style={{ padding: '16px 18px', background: 'var(--light-mint)', borderRadius: '18px', border: '1px solid rgba(126, 217, 183, 0.35)' }}>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--grey)', fontWeight: 600, marginBottom: '4px' }}>⏱ Duration & Trays</span>
                    <strong style={{ fontSize: '0.92rem', color: '#59C29D', display: 'block' }}>{cases[galleryTab].duration}</strong>
                  </div>

                  <div style={{ padding: '16px 18px', background: 'var(--light-mint)', borderRadius: '18px', border: '1px solid rgba(126, 217, 183, 0.35)' }}>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--grey)', fontWeight: 600, marginBottom: '4px' }}>🛡️ Enamel Integrity</span>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--dark-slate)', display: 'block' }}>{cases[galleryTab].enamelPreserved}</strong>
                  </div>

                  <div style={{ padding: '16px 18px', background: 'var(--light-mint)', borderRadius: '18px', border: '1px solid rgba(126, 217, 183, 0.35)' }}>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--grey)', fontWeight: 600, marginBottom: '4px' }}>⭐ Patient Comfort</span>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--dark-slate)', display: 'block' }}>{cases[galleryTab].comfortRating}</strong>
                  </div>
                </div>

                {/* Dual CTA */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                    Consult For This Case ($0 Promo) <ArrowRight size={18} />
                  </button>
                  <Link to="/aligners" className="btn-secondary" style={{ padding: '16px 28px', fontSize: '1rem' }}>
                    Full Aligner Specs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TREATMENT CATEGORIES COVERFLOW */}
      <section className="section-container" style={{ overflow: 'hidden', background: '#111818', margin: 0, maxWidth: 'none', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-title">
            <span className="badge-mint" style={{ background: 'rgba(0, 255, 255, 0.1)', color: '#00FFFF', border: '1px solid rgba(0, 255, 255, 0.2)' }}>Our Complete Medical Spectrum</span>
            <h2 style={{ marginTop: '16px', color: '#FFF' }}>Comprehensive Dental Solutions</h2>
            <p style={{ color: '#A0B2B2' }}>From preventive crystal aligners to full mouth ceramic rehabilitations, everything is performed in-house by sub-specialty masters.</p>
          </div>

          <div 
            style={{ 
              position: 'relative', 
              height: '500px', 
              marginTop: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              perspective: '1200px'
            }}
            onMouseEnter={() => setIsSpectrumPaused(true)}
            onMouseLeave={() => setIsSpectrumPaused(false)}
          >
            {spectrumServices.map((srv, idx) => {
              // Calculate distance from center (accounting for wrap-around)
              const halfLen = Math.floor(spectrumServices.length / 2);
              let diff = (idx - spectrumIdx + spectrumServices.length) % spectrumServices.length;
              if (diff > halfLen) diff -= spectrumServices.length;
              
              const isCenter = diff === 0;
              const absDiff = Math.abs(diff);
              
              // Only show items within distance of 2 from center
              if (absDiff > 2) return null;

              const translateX = diff * 320;
              const scale = isCenter ? 1 : Math.max(0.7, 1 - absDiff * 0.15);
              const zIndex = 10 - absDiff;
              const opacity = isCenter ? 1 : Math.max(0.2, 0.8 - absDiff * 0.3);
              const blur = isCenter ? 'blur(0px)' : `blur(${absDiff * 2}px)`;

              return (
                <div 
                  key={idx}
                  onClick={() => setSpectrumIdx(idx)}
                  style={{
                    position: 'absolute',
                    width: '400px',
                    height: '500px',
                    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter: blur,
                    cursor: isCenter ? 'default' : 'pointer',
                    borderRadius: '24px',
                    padding: '0',
                    background: '#1A2424',
                    border: isCenter ? '2px solid #00FFFF' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: isCenter ? '0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.2)' : '0 10px 30px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img src={srv.img} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #1A2424)' }} />
                  </div>
                  <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '2.5rem' }}>{srv.icon}</div>
                      <h4 style={{ fontSize: '1.4rem', margin: 0, color: isCenter ? '#00FFFF' : '#FFF', transition: 'color 0.4s' }}>{srv.title}</h4>
                    </div>
                    <p style={{ color: '#A0B2B2', fontSize: '1rem', lineHeight: 1.6, flex: 1 }}>{srv.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onOpenBooking(); }}
                        style={{ 
                          background: isCenter ? '#00FFFF' : 'rgba(255,255,255,0.1)', 
                          border: 'none', 
                          color: isCenter ? '#111818' : '#FFF', 
                          padding: '12px 32px', 
                          borderRadius: '50px',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                      >
                        Learn More & Book
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PATIENT TESTIMONIALS CAROUSEL */}
      <section style={{ padding: '100px 24px', background: 'var(--dark-slate)', color: 'var(--white)', position: 'relative' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="section-title">
            <span className="badge-mint">Verified Patient Reviews</span>
            <h2 style={{ marginTop: '16px', color: 'var(--white)' }}>What Our Patients Say About Us</h2>
            <p style={{ color: '#A0B2B2' }}>Rated 4.9 out of 5.0 stars across more than 3,400+ verified Google and Trustpilot reviews globally.</p>
          </div>

          <div
            className="glass-dark"
            style={{
              padding: '50px',
              borderRadius: '32px',
              maxWidth: '860px',
              margin: '0 auto',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
              {[...Array(testimonials[testIdx].rating)].map((_, i) => (
                <Star key={i} size={22} color="#F5C86B" fill="#F5C86B" />
              ))}
            </div>

            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: 'var(--white)', fontStyle: 'italic', marginBottom: '32px' }}>
              "{testimonials[testIdx].text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--gradient-primary)', fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {testimonials[testIdx].photo}
                </div>
                <div>
                  <h4 style={{ color: 'var(--white)', fontSize: '1.1rem', margin: 0 }}>{testimonials[testIdx].name}</h4>
                  <span style={{ fontSize: '0.85rem', color: '#7ED9B7' }}>{testimonials[testIdx].role} • {testimonials[testIdx].treatment}</span>
                </div>
              </div>

              {/* Carousel Controls */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={prevTestimonial} style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <ChevronLeft size={22} />
                </button>
                <button onClick={nextTestimonial} style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--theme-color)', border: 'none', color: 'var(--dark-slate)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSURANCE & PAYMENT PARTNERS MARQUEE */}
      <section style={{ padding: '48px 0', background: 'var(--white)', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--grey)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Accredited & Partnered with Global Healthcare Providers
          </span>
        </div>

        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '0 24px', opacity: 0.75 }}>
          {['DELTA DENTAL', 'CIGNA HEALTHCARE', 'METLIFE DENTAL', 'CARECREDIT 0% EMI', 'APPLE PAY', 'ALLIANZ MEDICAL', 'AETNA VIP CARE', 'GUARDIAN HEALTH'].map((partner, idx) => (
            <span key={idx} style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--dark-slate)', letterSpacing: '0.05em' }}>
              • {partner}
            </span>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section style={{ padding: '80px 24px', background: 'var(--light-mint)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div
            className="glass-panel"
            style={{
              padding: '64px 48px',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, #1D2B2A 0%, #2D4341 100%)',
              color: 'var(--white)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(29, 43, 42, 0.35)'
            }}
          >
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(126, 217, 183, 0.25) 0%, transparent 70%)' }} />

            <span className="badge-mint" style={{ marginBottom: '20px' }}>
              <Sparkles size={16} /> Instant VIP Scheduling
            </span>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--white)', marginBottom: '16px' }}>
              Start Your Smile Journey Today
            </h2>
            <p style={{ color: '#A0B2B2', fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.6 }}>
              Receive a comprehensive 3D digital oral health evaluation, complete intraoral scan, and your personalized orthodontic simulation at any of our 12 clinics.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '18px 40px', fontSize: '1.05rem' }}>
                <Calendar size={20} /> Book VIP Appointment Now
              </button>
              <Link to="/contact" className="btn-secondary" style={{ padding: '18px 40px', fontSize: '1.05rem', borderColor: 'var(--white)', color: 'var(--white)' }}>
                Contact Clinic Directory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
