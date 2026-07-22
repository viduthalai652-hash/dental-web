import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Star, ArrowRight, Play, CheckCircle2, Shield, HeartPulse, Award, ShieldAlert, Heart, Users, ChevronLeft, ChevronRight, Send, Activity, Settings, UserPlus, FileText, Zap, Camera, Search, UserCheck } from 'lucide-react';

export default function Clinics({ onOpenBooking, onOpenTour }) {
  // Sliders State
  const [reviewIdx, setReviewIdx] = useState(0);
  const [baIdx, setBaIdx] = useState(0);
  const [infraIdx, setInfraIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInfraPaused, setIsInfraPaused] = useState(false);

  // Data Arrays
  const clinicsNetwork = [
    { name: 'Beverly Hills Premium Studio', city: 'Los Angeles, CA', exp: '15+ Years', reviews: '1,240', img: '/images/room_consultation.jpg' },
    { name: 'Manhattan Smile Boutique', city: 'New York, NY', exp: '12+ Years', reviews: '980', img: '/images/clinic_interior.jpg' },
    { name: 'Silicon Valley AI Dental Hub', city: 'Palo Alto, CA', exp: '10+ Years', reviews: '670', img: '/images/tech_laboratory.jpg' },
    { name: 'Miami Waterfront Dental Lounge', city: 'Miami, FL', exp: '14+ Years', reviews: '540', img: '/images/room_operation.jpg' }
  ];

  const infrastructureCards = [
    { title: 'Reception Area', desc: 'Modern reception with digital registration, comfortable seating, and patient assistance.', img: '/images/clinic_interior.jpg' },
    { title: 'Consultation Rooms', desc: 'Private consultation rooms equipped with digital treatment planning systems.', img: '/images/room_consultation.jpg' },
    { title: 'Treatment Rooms', desc: 'Advanced orthodontic chairs with high-precision dental instruments.', img: '/images/room_operation.jpg' },
    { title: 'Sterilization Area', desc: 'International sterilization standards ensuring complete patient safety.', img: '/images/tech_laboratory.jpg' },
    { title: 'Digital Smile Studio', desc: '3D smile simulation and treatment planning using intraoral scanners.', img: '/images/aligner_3d.jpg' },
    { title: 'Waiting Lounge', desc: 'Luxury lounge with refreshments, Wi-Fi, and entertainment.', img: '/images/room_consultation.jpg' }
  ];

  const servicesProvided = [
    { title: 'Clear Aligners', desc: 'Custom-made invisible aligners designed to straighten teeth comfortably without metal braces.', img: '/images/aligner_3d.jpg', icon: <HeartPulse size={24} color="#59C29D" /> },
    { title: 'Teeth Whitening', desc: 'Advanced whitening procedures that safely brighten teeth and improve smile aesthetics.', img: '/images/hero_patient_smile_1784222746175.jpg', icon: <Zap size={24} color="#59C29D" /> },
    { title: 'Dental Implants', desc: 'Permanent tooth replacement solutions providing natural appearance and long-lasting functionality.', img: '/images/room_operation.jpg', icon: <Shield size={24} color="#59C29D" /> },
    { title: 'Cosmetic Dentistry', desc: 'Enhance your smile with veneers, bonding, contouring, and complete smile makeover treatments.', img: '/images/hero_patient.jpg', icon: <Camera size={24} color="#59C29D" /> },
    { title: 'Orthodontic Braces', desc: 'Traditional orthodontic treatments for correcting bite problems and complex tooth alignment.', img: '/images/room_consultation.jpg', icon: <Settings size={24} color="#59C29D" /> },
    { title: 'Pediatric Dentistry', desc: 'Specialized dental care for children in a friendly and comfortable environment.', img: '/images/pediatric_dentistry.jpg', icon: <Users size={24} color="#59C29D" /> },
    { title: 'Root Canal Treatment', desc: 'Pain-free root canal procedures using modern rotary endodontic technology.', img: '/images/tech_laboratory.jpg', icon: <Activity size={24} color="#59C29D" /> },
    { title: 'Dental Crowns & Bridges', desc: 'Restore damaged or missing teeth with durable and aesthetic crown and bridge solutions.', img: '/images/clinic_interior.jpg', icon: <Award size={24} color="#59C29D" /> },
    { title: 'Gum Treatment', desc: 'Advanced gum care to maintain healthy gums and prevent periodontal diseases.', img: '/images/room_consultation.jpg', icon: <Heart size={24} color="#59C29D" /> },
    { title: 'Preventive Dental Care', desc: 'Regular checkups, scaling, polishing, fluoride treatments, and preventive oral care for long-term health.', img: '/images/room_operation.jpg', icon: <CheckCircle2 size={24} color="#59C29D" /> }
  ];

  const technologyCards = [
    { title: 'Digital Intraoral Scanner', desc: 'iTero 5D scanners replace messy putty molds for flawless 3D impressions.', img: '/images/tech_laboratory.jpg' },
    { title: '3D Smile Simulation', desc: 'Visualize your future smile instantly before starting any treatment.', img: '/images/room_consultation.jpg' },
    { title: 'CBCT Scan', desc: '3D bone and nerve mapping for accurate and safe dental implant placement.', img: '/images/tech_laboratory.jpg' },
    { title: 'Digital X-Ray', desc: 'Ultra-low radiation imaging for instant, high-definition diagnostics.', img: '/images/room_operation.jpg' },
    { title: 'AI Treatment Planning', desc: 'Artificial intelligence calculates exact tooth movements for clear aligners.', img: '/images/aligner_3d.jpg' },
    { title: 'CAD/CAM Dentistry', desc: 'Robotic milling of ceramic crowns in a single day.', img: '/images/tech_laboratory.jpg' },
    { title: 'Laser Dentistry', desc: 'Painless, vibration-free treatments for gums and minor surgeries.', img: '/images/clinic_interior.jpg' },
    { title: 'Digital Patient Records', desc: 'Secure, paperless environment ensuring fast access to your dental history.', img: '/images/room_consultation.jpg' }
  ];

  const beforeAfterCases = [
    {
      title: "Crooked Teeth Alignment",
      patient: "Jessica T.",
      desc: "Severe crowding resolved in 9 months using our invisible clear aligners.",
      video: "/videos/teeth_crossbite_alignment.mp4"
    },
    {
      title: "Gap Closure (Diastema)",
      patient: "Michael R.",
      desc: "A noticeable front gap was flawlessly closed in just 6 months.",
      video: "/videos/teeth_gap_alignment.mp4"
    },
    {
      title: "Open Bite Correction",
      patient: "Sarah L.",
      desc: "Complex bite issues corrected allowing normal chewing and a beautiful smile.",
      video: "/videos/teeth_openbite_alignment.mp4"
    },
    {
      title: "Complex Rotation",
      patient: "David W.",
      desc: "Rotated canines perfectly straightened with AI-driven treatment planning.",
      video: "/videos/teeth_overjet_alignment.mp4"
    }
  ];

  const specialists = [
    { name: 'Dr. Evelyn Carter', qual: 'DDS, MS (Orthodontics)', exp: '18 Years', lang: 'English, Spanish', img: '/images/hero_patient.jpg' },
    { name: 'Dr. Julian Rossi', qual: 'DMD, Cosmetic Dentist', exp: '14 Years', lang: 'English, Italian', img: '/images/hero_patient.jpg' },
    { name: 'Dr. Sarah Chen', qual: 'DDS, Implantologist', exp: '12 Years', lang: 'English, Mandarin', img: '/images/hero_patient.jpg' },
    { name: 'Dr. Michael Hayes', qual: 'DMD, Endodontist', exp: '16 Years', lang: 'English', img: '/images/hero_patient.jpg' }
  ];

  const patientReviews = [
    { name: 'Amanda Clarke', treatment: 'Clear Aligners', rating: 5, text: "The most luxurious dental experience I've ever had. My aligners fit perfectly, and the clinic feels like a 5-star hotel.", img: '/images/hero_patient.jpg', location: 'Beverly Hills' },
    { name: 'James Peterson', treatment: 'Dental Implants', rating: 5, text: "Dr. Chen is a master of her craft. The entire implant procedure was painless, and the technology they use is mind-blowing.", img: '/images/hero_patient.jpg', location: 'Manhattan' },
    { name: 'Sophia Lee', treatment: 'Smile Makeover', rating: 5, text: "I can't stop smiling! The 3D simulation showed me exactly what my teeth would look like, and the final result was identical.", img: '/images/hero_patient.jpg', location: 'Silicon Valley' },
    { name: 'Daniel Brooks', treatment: 'Laser Whitening', rating: 5, text: "Incredibly fast and comfortable. The staff is so welcoming and the clinic is spotless. Highly recommend the VIP lounge.", img: '/images/hero_patient.jpg', location: 'Miami' }
  ];

  // Auto-sliding effects
  useEffect(() => {
    if (isPaused) return;
    const reviewTimer = setInterval(() => {
      setReviewIdx((prev) => (prev + 1) % patientReviews.length);
    }, 4000);
    const baTimer = setInterval(() => {
      setBaIdx((prev) => (prev + 1) % beforeAfterCases.length);
    }, 5000);

    return () => {
      clearInterval(reviewTimer);
      clearInterval(baTimer);
    };
  }, [isPaused, patientReviews.length, beforeAfterCases.length]);

  useEffect(() => {
    if (isInfraPaused) return;
    const infraTimer = setInterval(() => {
      setInfraIdx((prev) => (prev + 1) % infrastructureCards.length);
    }, 3000);
    return () => clearInterval(infraTimer);
  }, [isInfraPaused, infrastructureCards.length]);

  return (
    <div className="clinics-page-premium">
      {/* SCOPED CSS FOR PREMIUM WHITE/PURPLE BRANDING */}
      <style>{`
        .clinics-page-premium {
          background-color: #F9F9FB;
          color: #2D2B3D;
          font-family: 'Inter', sans-serif;
        }
        
        .purple-gradient-text {
          background: linear-gradient(135deg, #59C29D 0%, #7ED9B7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bg-purple-gradient {
          background: linear-gradient(135deg, #59C29D 0%, #7ED9B7 100%);
        }

        .glass-card-purple {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 1);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(89, 194, 157, 0.05);
          transition: all 0.4s ease;
        }

        .glass-card-purple:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(89, 194, 157, 0.15);
          border-color: rgba(89, 194, 157, 0.4);
        }

        .glass-card-purple:hover .zoom-img {
          transform: scale(1.05);
        }

        .zoom-img {
          transition: transform 0.6s ease;
        }

        .glow-border:hover {
          box-shadow: 0 0 25px rgba(89, 194, 157, 0.5);
          border: 1px solid #59C29D;
        }

        .btn-purple {
          background: linear-gradient(135deg, #59C29D 0%, #9D7AFF 100%);
          color: white;
          border-radius: 50px;
          padding: 16px 36px;
          font-weight: 700;
          font-size: 1.05rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(89, 194, 157, 0.3);
        }

        .btn-purple:hover {
          box-shadow: 0 12px 35px rgba(89, 194, 157, 0.5);
          transform: translateY(-2px);
        }

        .btn-outline-purple {
          background: transparent;
          color: #59C29D;
          border: 2px solid #59C29D;
          border-radius: 50px;
          padding: 14px 34px;
          font-weight: 700;
          font-size: 1.05rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
          cursor: pointer;
        }

        .btn-outline-purple:hover {
          background: rgba(89, 194, 157, 0.05);
        }

        .section-padding {
          padding: 100px 24px;
        }

        .title-h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #2D2B3D;
          margin-bottom: 20px;
        }
          
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style>

      {/* SECTION 1: HERO BANNER */}
      <section style={{ position: 'relative', background: '#FFFFFF', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(135deg, #EAFBF5 0%, #FFFFFF 100%)', clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
        <div className="grid-hero" style={{ maxWidth: '1400px', margin: '0 auto', alignItems: 'center', minHeight: '90vh' }}>
          
          <div style={{ padding: '40px', zIndex: 1, animation: 'fadeUp 0.8s ease' }}>
            <span style={{ color: '#59C29D', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', display: 'inline-block' }}>
              The Next Standard of Care
            </span>
            <h1 className="hero-title-clinics" style={{ fontWeight: 900, color: '#2D2B3D', lineHeight: 1.1, marginBottom: '24px' }}>
              Experience <span className="purple-gradient-text">Premium Dental Care</span> at Our Clinics
            </h1>
            <p className="hero-desc" style={{ color: '#5A5A6E', lineHeight: 1.7, marginBottom: '40px', maxWidth: '650px' }}>
              Our clinics are equipped with advanced digital dentistry technology, experienced orthodontists, and patient-friendly treatment spaces designed to provide comfortable and precise dental care. Every clinic follows international treatment standards to ensure the highest quality smile transformation.
            </p>
            <div className="mobile-flex-col" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button className="btn-primary mobile-btn-full" onClick={onOpenBooking}>
                Book Appointment <ArrowRight size={20} />
              </button>
              <button className="btn-secondary mobile-btn-full" onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}>
                <MapPin size={20} /> Find Nearest Clinic
              </button>
            </div>
          </div>

          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', zIndex: 1 }}>
            <div style={{ position: 'absolute', width: '400px', height: '400px', background: 'rgba(89, 194, 157, 0.1)', borderRadius: '50%', filter: 'blur(80px)', top: '10%', left: '10%' }} />
            <img src="/images/room_consultation.jpg" className="hero-image-responsive" alt="Premium Dental Clinic" style={{ width: '100%', height: '700px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
          </div>

        </div>
      </section>

      {/* SECTION 2: OUR CLINIC NETWORK */}
      <section className="section-padding" style={{ background: '#F9F9FB' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="title-h2">Our Premium Dental Clinics</h2>
          <p style={{ fontSize: '1.2rem', color: '#5A5A6E', maxWidth: '800px', margin: '0 auto 60px', lineHeight: 1.6 }}>
            Precisalign partners with state-of-the-art dental clinics that provide personalized orthodontic care using advanced digital technology. Each clinic offers expert consultations, customized treatment planning, and continuous support throughout your smile journey.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {clinicsNetwork.map((clinic, idx) => (
              <div key={idx} className="glass-card-purple" style={{ padding: '24px', textAlign: 'left' }}>
                <div style={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
                  <img src={clinic.img} className="zoom-img" alt={clinic.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2D2B3D', marginBottom: '8px' }}>{clinic.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#59C29D', marginBottom: '16px', fontWeight: 600 }}>
                  <MapPin size={18} /> {clinic.city}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <div>
                    <div style={{ display: 'flex', color: '#FFB800', marginBottom: '4px' }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#5A5A6E' }}>{clinic.reviews} Google Reviews</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ display: 'block', color: '#2D2B3D', fontSize: '1rem' }}>{clinic.exp}</strong>
                    <span style={{ fontSize: '0.85rem', color: '#5A5A6E' }}>Experience</span>
                  </div>
                </div>

                <div className="mobile-flex-col" style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn-primary mobile-btn-full" style={{ flex: 1, padding: '12px', fontSize: '0.9rem', justifyContent: 'center' }} onClick={onOpenBooking}>
                    Book Now
                  </button>
                  <button className="btn-secondary mobile-btn-full" style={{ flex: 1, padding: '12px', fontSize: '0.9rem', justifyContent: 'center' }} onClick={onOpenTour}>
                    View Clinic
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PREMIUM CLINIC INFRASTRUCTURE */}
      <section className="section-padding" style={{ background: '#111818', color: '#FFFFFF', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="title-h2" style={{ color: '#FFFFFF' }}>World-Class Infrastructure</h2>
          <p style={{ fontSize: '1.2rem', color: '#A0B2B2', maxWidth: '700px', margin: '0 auto 60px', lineHeight: 1.6 }}>
            Every clinic is designed to create a relaxing, hygienic, and technologically advanced environment for patients.
          </p>

          <div 
            style={{ position: 'relative', height: '520px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onMouseEnter={() => setIsInfraPaused(true)}
            onMouseLeave={() => setIsInfraPaused(false)}
          >
            {infrastructureCards.map((card, idx) => {
              const length = infrastructureCards.length;
              let diff = (idx - infraIdx + length) % length;
              if (diff > Math.floor(length / 2)) diff -= length;

              let translateX = diff * 320; 
              let scale = 1 - Math.abs(diff) * 0.15; 
              let zIndex = 100 - Math.abs(diff); 
              let opacity = 1 - Math.abs(diff) * 0.3; 
              let blur = Math.abs(diff) > 1 ? 'blur(4px)' : 'none';

              const isCenter = diff === 0;

              return (
                <div 
                  key={idx} 
                  style={{ 
                    position: 'absolute',
                    width: '420px',
                    height: '500px',
                    background: '#1D2B2A',
                    borderRadius: '24px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: blur,
                    border: isCenter ? '2px solid #00FFFF' : '1px solid rgba(0, 255, 255, 0.2)',
                    boxShadow: isCenter ? '0 0 40px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1)' : '0 10px 30px rgba(0,0,0,0.5)',
                    cursor: isCenter ? 'default' : 'pointer'
                  }}
                  onClick={() => setInfraIdx(idx)}
                >
                  <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
                    <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#A0B2B2', lineHeight: 1.5 }}>{card.desc}</p>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
            {infrastructureCards.map((_, i) => (
              <button 
                key={i}
                onClick={() => setInfraIdx(i)}
                style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: infraIdx === i ? '#00FFFF' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: infraIdx === i ? '0 0 10px #00FFFF' : 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES PROVIDED */}
      <section className="section-padding" style={{ background: '#F9F9FB' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="title-h2">Complete Dental Solutions Under One Roof</h2>
          <p style={{ fontSize: '1.2rem', color: '#5A5A6E', maxWidth: '800px', margin: '0 auto 60px', lineHeight: 1.6 }}>
            Our clinics provide comprehensive dental and orthodontic treatments using advanced technology and personalized care for patients of all age groups.
          </p>

          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '20px 0' }}>
            <div style={{
              display: 'flex',
              gap: '24px',
              width: 'max-content',
              animation: 'marquee 35s linear infinite',
            }}>
              {[...servicesProvided, ...servicesProvided].map((service, idx) => (
                <div key={idx} className="glass-card-purple" style={{ width: '320px', padding: '0', overflow: 'hidden', textAlign: 'center', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                  <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                    <img src={service.img} className="zoom-img" alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '48px', height: '48px', background: '#EAFBF5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2D2B3D', marginBottom: '12px' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#5A5A6E', lineHeight: 1.5 }}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ADVANCED DENTAL TECHNOLOGY */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="title-h2">Technology That Makes Smiles Perfect</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '60px' }}>
            {technologyCards.map((tech, idx) => (
              <div key={idx} className="glass-card-purple glow-border" style={{ padding: '32px', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #EAFBF5' }}>
                  <img src={tech.img} alt={tech.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#2D2B3D', marginBottom: '12px' }}>{tech.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#5A5A6E', lineHeight: 1.6 }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: BEFORE & AFTER */}
      <section className="section-padding" style={{ background: '#2D2B3D', color: '#FFFFFF', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center' }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>Real People, Real Smiles</h2>
          <p style={{ fontSize: '1.2rem', color: '#A0A0B2', maxWidth: '700px', margin: '0 auto 60px', lineHeight: 1.6 }}>
            See how our personalized treatments have transformed thousands of smiles with visible improvements in alignment, confidence, and oral health.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
            <button onClick={() => setBaIdx((prev) => (prev - 1 + beforeAfterCases.length) % beforeAfterCases.length)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', padding: '16px', borderRadius: '50%', cursor: 'pointer' }}>
              <ChevronLeft size={32} />
            </button>
            
            <div className="video-showcase-container" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex' }}>
              <video 
                src={beforeAfterCases[baIdx].video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', top: '20px', left: '20px', background: '#59C29D', color: '#111818', padding: '8px 18px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800 }}>
                ✨ Live Aligner Transition
              </div>
            </div>

            <button onClick={() => setBaIdx((prev) => (prev + 1) % beforeAfterCases.length)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', padding: '16px', borderRadius: '50%', cursor: 'pointer' }}>
              <ChevronRight size={32} />
            </button>
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>{beforeAfterCases[baIdx].title}</h3>
            <p style={{ color: '#A0A0B2', fontSize: '1.1rem' }}>Patient: {beforeAfterCases[baIdx].patient} • {beforeAfterCases[baIdx].desc}</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: MEET OUR SPECIALISTS */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="title-h2">Experienced Dental Experts</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '60px' }}>
            {specialists.map((doc, idx) => (
              <div key={idx} className="glass-card-purple glow-border" style={{ padding: '0', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                  <img src={doc.img} className="zoom-img" alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#2D2B3D', marginBottom: '4px' }}>{doc.name}</h3>
                  <span style={{ display: 'block', color: '#59C29D', fontWeight: 700, fontSize: '0.95rem', marginBottom: '16px' }}>{doc.qual}</span>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#5A5A6E', fontSize: '0.85rem', marginBottom: '24px', borderTop: '1px solid #EAFBF5', borderBottom: '1px solid #EAFBF5', padding: '12px 0' }}>
                    <div><strong>Exp:</strong> {doc.exp}</div>
                    <div><strong>Lang:</strong> {doc.lang}</div>
                  </div>

                  <button className="btn-outline-purple" style={{ width: '100%', justifyContent: 'center' }} onClick={onOpenBooking}>
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PATIENT REVIEWS */}
      <section className="section-padding" style={{ background: '#EAFBF5', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="title-h2">Trusted by Thousands of Happy Patients</h2>
          
          <div style={{ display: 'flex', gap: '30px', marginTop: '60px', transition: 'transform 0.5s ease', transform: `translateX(-${reviewIdx * 10}%)` }}>
            {patientReviews.map((review, idx) => (
              <div key={idx} className="glass-card-purple" style={{ minWidth: 'min(85vw, 400px)', padding: '40px', textAlign: 'left', flexShrink: 0 }}>
                <div style={{ display: 'flex', color: '#FFB800', marginBottom: '20px' }}>
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p style={{ fontSize: '1.1rem', color: '#2D2B3D', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '30px' }}>"{review.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={review.img} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: '#2D2B3D' }}>{review.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#59C29D', fontWeight: 600 }}>{review.treatment} • {review.location}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicated for smooth loop appearance */}
            {patientReviews.map((review, idx) => (
              <div key={'dup'+idx} className="glass-card-purple" style={{ minWidth: 'min(85vw, 400px)', padding: '40px', textAlign: 'left', flexShrink: 0 }}>
                <div style={{ display: 'flex', color: '#FFB800', marginBottom: '20px' }}>
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p style={{ fontSize: '1.1rem', color: '#2D2B3D', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '30px' }}>"{review.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={review.img} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: '#2D2B3D' }}>{review.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#59C29D', fontWeight: 600 }}>{review.treatment} • {review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
