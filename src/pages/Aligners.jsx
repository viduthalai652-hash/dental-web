import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Calendar, ChevronDown, ChevronUp, Smile, Zap, RefreshCw, Layers, Award, Clock } from 'lucide-react';

export default function Aligners({ onOpenBooking }) {
  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // 3D Smile Simulator state
  const [simPos, setSimPos] = useState(50);
  const [activeCase, setActiveCase] = useState('crowding');

  const treatmentCases = [
    {
      id: 'crowding',
      title: 'Severe Crowding & Overlapping Teeth',
      desc: 'Teeth that are bunched up, twisted, or overlapping due to lack of jaw arch space. Left untreated, crowded teeth trap bacteria and lead to early periodontal gum disease.',
      symptoms: ['Floss getting stuck between teeth', 'Difficulty cleaning gum margins', 'Uneven enamel wear on front incisors'],
      duration: '4 to 6 Months Average',
      benefits: ['Effortless flossing & brushing', 'Symmetrical arch expansion without tooth extraction', 'Immediate confidence boost'],
      imgBefore: '/images/teeth_alignment_transition_slow.gif',
      imgAfter: '/images/teeth_alignment_transition_slow.gif',
      gif: '/images/teeth_alignment_transition_slow.gif'
    },
    {
      id: 'spacing',
      title: 'Diastema & Multiple Teeth Spacing (Gaps)',
      desc: 'Noticeable spaces or gaps between teeth, frequently caused by abnormal jawbone growth or missing adjacent teeth. Our clear aligners gently draw teeth together.',
      symptoms: ['Food impaction between gaps', 'Self-consciousness when smiling or speaking', 'Shifting adjacent teeth over time'],
      duration: '3 to 5 Months Average',
      benefits: ['Seamless gap closure without metal brackets', 'Protection of exposed gum tissue', 'Improved speech clarity'],
      imgBefore: '/images/teeth_gap_to_aligned.gif',
      imgAfter: '/images/teeth_gap_to_aligned.gif',
      gif: '/images/teeth_gap_to_aligned.gif'
    },
    {
      id: 'overjet',
      title: 'Protruding Anterior Overjet (Buck Teeth)',
      desc: 'Upper front teeth that protrude significantly outward over the lower teeth. This condition creates facial profile imbalance and increases risk of traumatic front tooth fracture.',
      symptoms: ['Upper lip unable to comfortably close over teeth', 'High risk of dental trauma during sports', 'Lower teeth biting into upper roof of mouth'],
      duration: '6 to 8 Months Average',
      benefits: ['Balanced profile and chin harmony', 'Elimination of trauma risk', 'Normal relaxed lip closure'],
      imgBefore: '/images/teeth_rotated_to_aligned_creative.gif',
      imgAfter: '/images/teeth_rotated_to_aligned_creative.gif',
      gif: '/images/teeth_rotated_to_aligned_creative.gif'
    },
    {
      id: 'crossbite',
      title: 'Anterior & Posterior Crossbite',
      desc: 'One or more upper teeth bite inside the lower teeth instead of outside. This forces the jaw to shift to one side when chewing, causing chronic TMJ joint pain and headaches.',
      symptoms: ['Jaw clicking, popping, or chronic morning headaches', 'Asymmetrical jaw posture when chewing', 'Rapid chipping of tooth cusps'],
      duration: '5 to 7 Months Average',
      benefits: ['Instant relief from jaw muscle tension & TMJ pain', 'Symmetrical chewing bite distribution', 'Long-term enamel protection'],
      imgBefore: '/images/teeth_crooked_to_aligned.gif',
      imgAfter: '/images/teeth_crooked_to_aligned.gif',
      gif: '/images/teeth_crooked_to_aligned.gif'
    },
    {
      id: 'openbite',
      title: 'Vertical Anterior Open Bite',
      desc: 'Upper and lower front teeth fail to touch when the back teeth are closed together. Often caused by childhood thumb-sucking or tongue thrusting habits.',
      symptoms: ['Inability to bite into thin foods like pizza or sandwiches', 'Lisping or speech impediments', 'Excessive chewing strain on back molars'],
      duration: '6 to 9 Months Average',
      benefits: ['Restored front biting mechanics', 'Elimination of speech lisps', 'Balanced molar chewing pressure'],
      imgBefore: '/images/teeth_openbite_to_aligned.gif',
      imgAfter: '/images/teeth_openbite_to_aligned.gif',
      gif: '/images/teeth_openbite_to_aligned.gif'
    }
  ];

  const processSteps = [
    { num: '01', title: 'iTero 5D Laser Scan', desc: 'A 60-second digital scan captures 100,000 optical points of your teeth with zero gooey putty.', bgImg: '/images/tech_laboratory.jpg' },
    { num: '02', title: 'AI 3D Treatment Plan', desc: 'Our orthodontists map your exact tooth movements and show you a 3D video simulation of your final smile.', bgImg: '/images/room_consultation.jpg' },
    { num: '03', title: 'Custom Aligner Fabrication', desc: 'Your medical-grade crystal transparent aligner series is precision 3D printed inside our laboratory.', bgImg: '/images/aligner_3d.jpg' },
    { num: '04', title: 'Kit Delivery & Fit Check', desc: 'Pick up your complete aligner box. We check your initial fit and provide your UV sterilization storage case.', bgImg: '/images/clinic_interior.jpg' },
    { num: '05', title: 'App-Based Monitoring', desc: 'Scan your teeth weekly using your smartphone and our Radiant AI app—no need for monthly clinic visits.', bgImg: '/images/hero_patient.jpg' },
    { num: '06', title: 'Final Retainers & Guarantee', desc: 'Enjoy your flawless new smile! We provide 3 custom Vivera-grade retainers and a lifetime smile warranty.', bgImg: '/images/room_operation.jpg' }
  ];

  const faqs = [
    {
      q: 'Are clear aligners really 100% invisible?',
      a: 'Yes! Our custom crystal polymer blend is ultra-transparent, matte-finished to match natural enamel reflection, and custom-trimmed right along your gumline. Even close friends and colleagues will not notice you are wearing them.'
    },
    {
      q: 'Do clear aligners cause pain or discomfort?',
      a: 'Unlike traditional metal braces that use high-tension wires and sharp brackets that cut your cheeks, clear aligners apply gentle, continuous micro-forces. You may feel a mild pressure for the first 24 hours of each new set, which is a sign your teeth are moving correctly!'
    },
    {
      q: 'How many hours a day do I need to wear my aligners?',
      a: 'For optimal and rapid treatment, you must wear your aligners for 20 to 22 hours per day. You only remove them when eating meals, drinking hot/colored beverages like coffee or wine, and brushing/flossing.'
    },
    {
      q: 'Can I eat any food I want during treatment?',
      a: 'Absolutely! Since you take your aligners out before meals, there are zero dietary restrictions. You can enjoy popcorn, apples, steak, and sticky caramel without ever worrying about breaking a bracket or wire.'
    },
    {
      q: 'How much do clear aligners cost compared to braces?',
      a: 'At RadiantAlign, we believe luxury orthodontic care should be accessible. Our clear aligners start at just $120 per month with 0% interest financing, making them comparable to or even more affordable than traditional metal braces.'
    }
  ];

  return (
    <div style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      {/* 1. HERO SECTION WITH 3D ROTATING ALIGNER */}
      <section
        style={{
          position: 'relative',
          padding: '100px 24px 140px',
          background: 'linear-gradient(135deg, #1D2B2A 0%, #2A403E 100%)',
          color: 'var(--white)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(126, 217, 183, 0.35) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <span className="badge-mint" style={{ marginBottom: '24px' }}>
              <Sparkles size={16} /> Precision Digital Orthodontics
            </span>
            <h1 style={{ fontSize: '3.6rem', color: 'var(--white)', lineHeight: 1.12, marginBottom: '24px' }}>
              Experience the Future of <span style={{ color: '#7ED9B7' }}>Invisible Teeth Alignment</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#A0B2B2', lineHeight: 1.7, marginBottom: '36px' }}>
              Straighten your teeth up to 50% faster than metal braces with our ultra-transparent, removable crystal aligners. Custom 3D-printed for your unique dental anatomy.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '18px 38px', fontSize: '1.05rem' }}>
                <Calendar size={20} /> Book Free 3D Aligner Scan
              </button>
              <a href="#simulator" className="btn-secondary" style={{ padding: '18px 38px', fontSize: '1.05rem', color: 'var(--white)', borderColor: 'var(--white)' }}>
                Try Smile Simulator
              </a>
            </div>
          </div>

          {/* Right 3D Rotating Aligner Render */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div className="animate-float-3d" style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: '440px' }}>
              <div
                className="glass-dark"
                style={{
                  padding: '24px',
                  borderRadius: '32px',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                  textAlign: 'center',
                  border: '1px solid rgba(126, 217, 183, 0.4)'
                }}
              >
                <img
                  src="/images/aligner_3d.jpg"
                  alt="Crystal Clear Aligner 3D Render"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '24px', marginBottom: '16px' }}
                />
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#7ED9B7', display: 'block' }}>Radiant Crystal-Poly™ Series</span>
                <span style={{ fontSize: '0.82rem', color: '#A0B2B2' }}>0.3mm Laser-Trimmed Scalloped Gumline Fit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE 3D SMILE SIMULATOR */}
      <section id="simulator" style={{ padding: '100px 24px', background: 'var(--light-mint)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="section-title">
            <span className="badge-mint">Interactive Ortho Preview</span>
            <h2 style={{ marginTop: '16px' }}>Interactive 3D Smile Simulator</h2>
            <p>Select your dental alignment condition and drag the slider to witness how our aligners gently guide your teeth into ideal biological harmony.</p>
          </div>

          <div className="glass-panel" style={{ padding: '44px', background: 'var(--white)', borderRadius: '32px' }}>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginBottom: '36px', flexWrap: 'wrap' }}>
              {treatmentCases.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCase(c.id)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '50px',
                    border: activeCase === c.id ? '2px solid var(--theme-color)' : '1px solid rgba(0,0,0,0.12)',
                    background: activeCase === c.id ? 'var(--soft-green)' : 'var(--white)',
                    fontFamily: 'var(--font-subheading)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    color: 'var(--dark-slate)',
                    cursor: 'pointer',
                    transition: 'all 0.25s'
                  }}
                >
                  {c.title.split('(')[0]}
                </button>
              ))}
            </div>

            {/* Selected Case Slider View */}
            {(() => {
              const current = treatmentCases.find((c) => c.id === activeCase);
              return (
                <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
                  <div style={{ position: 'relative', height: '440px', borderRadius: '28px', overflow: 'hidden', border: '2px solid rgba(126, 217, 183, 0.4)', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                    <img src={current.imgBefore} alt="Before Aligner" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: current.gif ? 'none' : 'sepia(0.18) contrast(0.92)' }} />
                    <span style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(29,43,42,0.85)', color: '#FFF', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, zIndex: 5 }}>BEFORE (Misaligned)</span>

                    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: `${100 - simPos}%`, overflow: 'hidden', zIndex: 2 }}>
                      <img src={current.imgAfter} alt="After Aligner" style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', objectFit: 'cover', filter: current.gif ? 'none' : 'brightness(1.08) contrast(1.06)' }} />
                      <span style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--theme-color)', color: 'var(--dark-slate)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, zIndex: 5 }}>AFTER ({current.duration})</span>
                    </div>

                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${simPos}%`, width: '4px', background: 'var(--white)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--gradient-primary)', color: 'var(--dark-slate)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                        ↔
                      </div>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={simPos}
                      onChange={(e) => setSimPos(Number(e.target.value))}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'ew-resize', zIndex: 15 }}
                    />
                  </div>

                  <div>
                    <span className="badge-mint" style={{ marginBottom: '14px' }}>Case Study Diagnosis</span>
                    <h3 style={{ fontSize: '2.1rem', color: 'var(--dark-slate)', marginBottom: '14px' }}>{current.title}</h3>
                    <p style={{ color: 'var(--grey)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>{current.desc}</p>

                    <div style={{ marginBottom: '24px' }}>
                      <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--dark-slate)', marginBottom: '8px' }}>✨ Key Benefits of Aligner Correction:</strong>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.94rem', color: 'var(--grey)' }}>
                        {current.benefits.map((b, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <CheckCircle2 size={18} color="#59C29D" /> {b}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: '18px 22px', background: 'var(--soft-green)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                      <span style={{ fontWeight: 600, color: 'var(--dark-slate)' }}>Estimated Treatment Time:</span>
                      <strong style={{ color: '#59C29D', fontSize: '1.1rem' }}>{current.duration}</strong>
                    </div>

                    <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '16px 36px' }}>
                      Schedule Consultation For This Case <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 3. DEDICATED TREATMENT CASES SECTIONS (Alternating Layout) */}
      <section className="section-container">
        <div className="section-title">
          <span className="badge-mint">Orthodontic Excellence</span>
          <h2 style={{ marginTop: '16px' }}>Detailed Clinical Case Studies</h2>
          <p>Examine how our clear aligners address every single class of malocclusion with gentle, computer-guided force.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {treatmentCases.map((caseItem, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={caseItem.id}
                className="glass-card"
                style={{
                  padding: '48px',
                  display: 'grid',
                  gridTemplateColumns: isEven ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                  gap: '48px',
                  alignItems: 'center',
                  background: 'var(--white)'
                }}
              >
                <div style={{ order: isEven ? 1 : 2 }}>
                  <span className="badge-mint" style={{ marginBottom: '16px' }}>Case Study #{idx + 1}</span>
                  <h3 style={{ fontSize: '2.1rem', color: 'var(--dark-slate)', marginBottom: '16px' }}>{caseItem.title}</h3>
                  <p style={{ color: 'var(--grey)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>{caseItem.desc}</p>

                  <div style={{ marginBottom: '24px' }}>
                    <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--dark-slate)', marginBottom: '8px' }}>Common Clinical Symptoms:</strong>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--grey)', fontSize: '0.94rem' }}>
                      {caseItem.symptoms.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
                      Consult Our Orthodontists
                    </button>
                    <span style={{ fontSize: '0.9rem', color: '#59C29D', fontWeight: 700 }}>
                      ⏱ {caseItem.duration}
                    </span>
                  </div>
                </div>

                <div style={{ order: isEven ? 2 : 1, position: 'relative', height: '360px', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}>
                  <img src={caseItem.gif || caseItem.imgBefore} alt={caseItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(29,43,42,0.88)', color: '#7ED9B7', padding: '8px 18px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700 }}>
                    {caseItem.gif ? '✨ Animated Alignment Transition' : '✨ AI Simulation Available on Visit'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TREATMENT PROCESS TIMELINE */}
      <section style={{ padding: '100px 24px', background: 'var(--dark-slate)', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="section-title">
            <span className="badge-mint">Your Path to Perfection</span>
            <h2 style={{ marginTop: '16px', color: 'var(--white)' }}>Our 6-Step Digital Aligner Roadmap</h2>
            <p style={{ color: '#A0B2B2' }}>From your first 60-second laser scan to your lifetime Vivera retainers, every step is seamless and stress-free.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {processSteps.map((step, idx) => (
              <div key={idx} className="glass-dark" style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                  <img src={step.bgImg} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(29,43,42,0.92) 0%, rgba(29,43,42,0.85) 100%)' }} />
                </div>
                <div style={{ padding: '36px 30px', position: 'relative', zIndex: 1 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'rgba(126, 217, 183, 0.2)', position: 'absolute', top: '20px', right: '24px' }}>
                    {step.num}
                  </span>
                  <span className="badge-mint" style={{ marginBottom: '16px' }}>Step {step.num}</span>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--white)', marginBottom: '12px' }}>{step.title}</h4>
                  <p style={{ color: '#A0B2B2', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPANDABLE FAQ ACCORDION */}
      <section className="section-container">
        <div className="section-title">
          <span className="badge-mint">Frequently Asked Questions</span>
          <h2 style={{ marginTop: '16px' }}>Everything You Need to Know About Aligners</h2>
          <p>Clear answers directly from our Harvard and UCLA orthodontic specialists.</p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '24px 30px',
                  background: isOpen ? 'var(--white)' : 'rgba(255, 255, 255, 0.65)',
                  cursor: 'pointer',
                  border: isOpen ? '2px solid var(--theme-color)' : '1px solid rgba(255, 255, 255, 0.8)'
                }}
                onClick={() => setOpenFaq(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--dark-slate)', margin: 0, fontWeight: 700 }}>
                    {faq.q}
                  </h4>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: isOpen ? 'var(--soft-green)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isOpen ? <ChevronUp size={22} color="#59C29D" /> : <ChevronDown size={22} color="var(--grey)" />}
                  </div>
                </div>

                {isOpen && (
                  <p style={{ color: 'var(--grey)', fontSize: '0.96rem', lineHeight: 1.7, marginTop: '16px', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
