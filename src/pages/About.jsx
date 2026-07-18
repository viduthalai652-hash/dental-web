import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, HeartPulse, Sparkles, CheckCircle2, User, Eye, Target, TrendingUp, Layers, Heart, Users, Shield } from 'lucide-react';

export default function About({ onOpenBooking }) {
  // Counter Animation State
  const [counts, setCounts] = useState({ clients: 0, aligners: 0, satisfaction: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const interval = 20;
          const steps = duration / interval;

          const timer = setInterval(() => {
            start += 1;
            setCounts({
              clients: Math.floor((10 / steps) * start), // 10K+
              aligners: Math.floor((100 / steps) * start), // 100K+
              satisfaction: Math.floor((100 / steps) * start), // 100%
            });

            if (start >= steps) {
              clearInterval(timer);
              setCounts({ clients: 10, aligners: 100, satisfaction: 100 });
            }
          }, interval);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', padding: '120px 24px', background: 'var(--dark-slate)', color: 'var(--white)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: `url('/images/hero_patient.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(29, 43, 42, 0.95) 0%, rgba(29, 43, 42, 0.75) 100%)' }} />
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <span className="badge-mint" style={{ marginBottom: '20px' }}>About Precisalign</span>
            <h1 style={{ fontSize: '4rem', color: 'var(--white)', marginBottom: '20px', lineHeight: 1.1 }}>
              Precision.<br/><span style={{ color: '#7ED9B7' }}>Comfort.</span><br/>Confidence.
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#A0B2B2', lineHeight: 1.7, marginBottom: '24px' }}>
              At Precisalign, we believe a confident smile transforms not only appearance but also confidence and overall well-being.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '24px' }}>We provide advanced clear aligner treatments that are:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', color: '#A0B2B2', fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Nearly Invisible</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Comfortable</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Customized</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Technology Driven</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Dentist Supervised</li>
            </ul>
            <p style={{ fontSize: '1.05rem', color: '#C0D2D2', lineHeight: 1.6 }}>
              Our treatments combine digital dentistry, expert orthodontic planning, and personalized treatment plans to deliver accurate and predictable smile transformations.
            </p>
          </div>
          <div style={{ position: 'relative', height: '500px', borderRadius: '32px', overflow: 'hidden', border: '4px solid rgba(126, 217, 183, 0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
             <img src="/images/tech_laboratory.jpg" alt="Digital orthodontic scan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 2. COMPANY STATISTICS SECTION */}
      <section ref={sectionRef} style={{ padding: '80px 24px', background: 'var(--theme-color)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--dark-slate)', marginBottom: '48px', fontWeight: 800 }}>The Clear Way to a Perfect Smile</h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ flex: '1 1 250px' }}>
            <div style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--white)', textShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>{counts.clients}K+</div>
            <div style={{ fontSize: '1.2rem', color: 'var(--dark-slate)', fontWeight: 700, marginTop: '10px' }}>Happy Clients</div>
          </div>
          <div style={{ flex: '1 1 250px' }}>
            <div style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--white)', textShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>{counts.aligners}K+</div>
            <div style={{ fontSize: '1.2rem', color: 'var(--dark-slate)', fontWeight: 700, marginTop: '10px' }}>Aligners Delivered</div>
          </div>
          <div style={{ flex: '1 1 250px' }}>
            <div style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--white)', textShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>{counts.satisfaction}%</div>
            <div style={{ fontSize: '1.2rem', color: 'var(--dark-slate)', fontWeight: 700, marginTop: '10px' }}>Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY SECTION */}
      <section style={{ padding: '110px 24px', background: 'var(--white)', position: 'relative' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge-mint">Our Philosophy</span>
            <h2 style={{ fontSize: '3rem', color: 'var(--dark-slate)', marginTop: '16px', fontWeight: 800 }}>A Smarter Approach to Modern Orthodontics</h2>
            <p style={{ color: 'var(--grey)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '800px', margin: '16px auto 0' }}>
              We focus on creating healthy, confident smiles through precision-driven care, personalized attention, and advanced digital technology. Our goal is to simplify the smile journey while ensuring comfortable experiences and long-lasting results.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* Card 1 */}
            <div className="glass-dark" style={{ padding: '0', position: 'relative', overflow: 'hidden', borderRadius: '32px' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img src="/images/hero_patient.jpg" alt="Patient-First Approach" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(29,43,42,0.92) 0%, rgba(29,43,42,0.85) 100%)' }} />
              </div>
              <div style={{ padding: '40px 30px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <Heart size={28} color="#1D2B2A" />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '16px' }}>Patient-First Approach</h3>
                <p style={{ color: '#C0D2D2', lineHeight: 1.6 }}>Every aligner treatment is customized according to your unique dental structure, personal goals, lifestyle, and maximum comfort.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="glass-dark" style={{ padding: '0', position: 'relative', overflow: 'hidden', borderRadius: '32px' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img src="/images/aligner_3d.jpg" alt="Transparent Results" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(29,43,42,0.92) 0%, rgba(29,43,42,0.85) 100%)' }} />
              </div>
              <div style={{ padding: '40px 30px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <Users size={28} color="#1D2B2A" />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '16px' }}>Transparent Results</h3>
                <p style={{ color: '#C0D2D2', lineHeight: 1.6 }}>Patients can vividly preview their future smile before beginning treatment using our advanced 3D simulation technology.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-dark" style={{ padding: '0', position: 'relative', overflow: 'hidden', borderRadius: '32px' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img src="/images/tech_laboratory.jpg" alt="Technology-Driven Care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(29,43,42,0.92) 0%, rgba(29,43,42,0.85) 100%)' }} />
              </div>
              <div style={{ padding: '40px 30px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <Shield size={28} color="#1D2B2A" />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '16px' }}>Technology-Driven Care</h3>
                <p style={{ color: '#C0D2D2', lineHeight: 1.6 }}>Modern digital planning tools ensure highly accurate treatment, consistent progress, reliable outcomes, and a significantly better patient experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. VISION & MISSION */}
      <section style={{ padding: '100px 24px', background: 'var(--dark-slate)', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px' }}>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '32px', padding: '48px', border: '1px solid rgba(126, 217, 183, 0.2)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Eye size={28} color="#1D2B2A" />
            </div>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--white)', marginBottom: '20px' }}>Our Vision</h2>
            <p style={{ fontSize: '1.1rem', color: '#C0D2D2', lineHeight: 1.7, marginBottom: '20px' }}>
              The vision is to make advanced orthodontic care accessible, affordable, and highly effective for people everywhere.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#A0B2B2', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" style={{ marginTop: '4px' }} /> Spread healthy smiles globally</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" style={{ marginTop: '4px' }} /> Improve access to orthodontics</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" style={{ marginTop: '4px' }} /> Support dentists with modern technology</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" style={{ marginTop: '4px' }} /> Maintain rigorous ethical clinical standards</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" style={{ marginTop: '4px' }} /> Deliver reliable patient-friendly treatment experiences</li>
            </ul>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '32px', padding: '48px', border: '1px solid rgba(126, 217, 183, 0.2)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Target size={28} color="#1D2B2A" />
            </div>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--white)', marginBottom: '20px' }}>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', color: '#C0D2D2', lineHeight: 1.7, marginBottom: '20px' }}>
              Precisalign aims to redefine orthodontic care and expand access to modern treatment across cities, towns, and underserved communities through:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#A0B2B2', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Technology-driven treatment</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Patient-centric services</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Affordable clear aligners</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Personalized treatment planning</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Dentist training and support</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Continuous innovation</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} color="#7ED9B7" /> Ethical and transparent clinical care</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE US SECTION (Smarter Comfortable Smile Solutions) */}
      <style>{`
        @keyframes scrollVerticalMarquee {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .vertical-marquee-track {
          display: flex;
          flex-direction: column;
          gap: 40px;
          animation: scrollVerticalMarquee 50s linear infinite;
        }
        .vertical-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 1024px) {
          .solutions-layout {
            grid-template-columns: 1fr !important;
          }
          .solutions-right {
            height: 600px !important;
          }
          .solutions-left {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
      <section style={{ padding: '60px 24px', background: 'var(--light-mint)', overflow: 'hidden' }}>
        <div className="solutions-layout" style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Side: Sticky Title */}
          <div className="solutions-left" style={{ position: 'sticky', top: '150px', alignSelf: 'start' }}>
            <span className="badge-mint" style={{ marginBottom: '16px' }}>The Precisalign Difference</span>
            <h2 style={{ fontSize: '3.8rem', color: 'var(--dark-slate)', marginBottom: '24px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Smarter, Comfortable Smile Solutions.
            </h2>
            <p style={{ color: 'var(--grey)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '40px' }}>
              We have engineered every aspect of our clear aligner treatment to seamlessly integrate into your lifestyle, offering unparalleled comfort, precision, and aesthetics.
            </p>
            <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '20px 44px', fontSize: '1.15rem' }}>
              Start Your Journey
            </button>
          </div>

          {/* Right Side: Vertical Marquee of Large Cards */}
          <div className="solutions-right" style={{ height: '700px', overflow: 'hidden', position: 'relative', maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)' }}>
            <div className="vertical-marquee-track">
              {[
                { title: 'Invisible Aesthetics', desc: 'Nearly invisible clear aligners designed with a matte finish to let patients smile confidently throughout treatment.', img: '/images/aligner_3d.jpg' },
                { title: 'Comfort-Focused Design', desc: 'Custom-fit aligners engineered with laser-trimmed edges for a smooth finish, irritation-free wear, and all-day comfort.', img: '/images/clinic_interior.jpg' },
                { title: 'Removable & Hygienic', desc: 'Aligners can be removed easily for eating and cleaning, making oral hygiene simple and uncompromising.', img: '/images/room_consultation.jpg' },
                { title: 'AI-Driven Precision', desc: 'Every tooth movement is digitally mapped using millions of data points for flawless, predictable alignment.', img: '/images/tech_laboratory.jpg' },
                { title: 'Accelerated Results', desc: 'Our smart-track material applies constant, gentle biological forces that cut treatment time by up to 30%.', img: '/images/hero_patient.jpg' },
                { title: 'Zero Food Restrictions', desc: 'Because you remove them to eat, you never have to give up popcorn, apples, steak, or your favorite meals.', img: '/images/room_operation.jpg' },
                
                // Duplicate for infinite scroll
                { title: 'Invisible Aesthetics', desc: 'Nearly invisible clear aligners designed with a matte finish to let patients smile confidently throughout treatment.', img: '/images/aligner_3d.jpg' },
                { title: 'Comfort-Focused Design', desc: 'Custom-fit aligners engineered with laser-trimmed edges for a smooth finish, irritation-free wear, and all-day comfort.', img: '/images/clinic_interior.jpg' },
                { title: 'Removable & Hygienic', desc: 'Aligners can be removed easily for eating and cleaning, making oral hygiene simple and uncompromising.', img: '/images/room_consultation.jpg' },
                { title: 'AI-Driven Precision', desc: 'Every tooth movement is digitally mapped using millions of data points for flawless, predictable alignment.', img: '/images/tech_laboratory.jpg' },
                { title: 'Accelerated Results', desc: 'Our smart-track material applies constant, gentle biological forces that cut treatment time by up to 30%.', img: '/images/hero_patient.jpg' },
                { title: 'Zero Food Restrictions', desc: 'Because you remove them to eat, you never have to give up popcorn, apples, steak, or your favorite meals.', img: '/images/room_operation.jpg' }
              ].map((card, idx) => (
                <div key={idx} style={{ background: 'var(--white)', borderRadius: '40px', padding: '40px', boxShadow: '0 20px 60px rgba(29, 43, 42, 0.06)' }}>
                  <div style={{ width: '100%', height: '380px', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px' }}>
                    <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '2.2rem', color: 'var(--dark-slate)', marginBottom: '16px', fontWeight: 800 }}>{card.title}</h3>
                  <p style={{ color: 'var(--grey)', fontSize: '1.15rem', lineHeight: 1.65 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* 7. FINAL CALL-TO-ACTION SECTION */}
      <section style={{ padding: '120px 24px', background: 'var(--dark-slate)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(126, 217, 183, 0.1) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--white)', marginBottom: '24px', fontWeight: 800 }}>Craft the Smile You Deserve with Precisalign</h2>
          <p style={{ fontSize: '1.2rem', color: '#A0B2B2', lineHeight: 1.6, marginBottom: '48px' }}>
            Begin your smile transformation with expert-guided clear aligner treatment and personalized care tailored to you.
          </p>
          <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '20px 48px', fontSize: '1.2rem' }}>
            Book Your Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
