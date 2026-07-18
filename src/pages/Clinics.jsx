import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Calendar, Star, Compass, CheckCircle2, Shield, HeartPulse, Award, ArrowRight, Plus, Minus, Navigation, Eye, UserCheck, Sparkles, Coffee, Wifi, ShieldAlert, Pause, Play, ChevronLeft, ChevronRight, Heart, Users } from 'lucide-react';

export default function Clinics({ onOpenBooking, onOpenTour }) {
  // Clinic selector states
  const [selectedCity, setSelectedCity] = useState('All Locations');
  const [activeMarker, setActiveMarker] = useState(0);
  const [mapZoom, setMapZoom] = useState(13);
  const [facilityTab, setFacilityTab] = useState(0);
  const [autoSlideIdx, setAutoSlideIdx] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [activeAnimatedSuite, setActiveAnimatedSuite] = useState(0);
  const [suiteFilter, setSuiteFilter] = useState('All');

  const autoGalleryCards = [
    {
      title: 'Beverly Hills VIP Consultation Sanctuary',
      location: 'Los Angeles, CA',
      tag: 'Architectural Lounge',
      desc: 'Warm architectural lighting, organic tea bar, and private biometric check-in pods.',
      img: '/images/room_consultation.jpg',
      specs: '65" 4K OLED Smile Design Screen'
    },
    {
      title: 'Manhattan Robotic Operation Suite',
      location: 'Manhattan, New York',
      tag: 'Surgical Treatment Bay',
      desc: 'Sirona memory-foam heated massage chairs with dual surgical LED arrays and Waterlase laser.',
      img: '/images/room_operation.jpg',
      specs: '100% Painless Laser Protocol'
    },
    {
      title: 'Silicon Valley iTero 5D Imaging Lab',
      location: 'Palo Alto, CA',
      tag: 'AI Diagnostic Lab',
      desc: 'Near-infrared intraoral scanner and CBCT cone-beam holographic 3D X-ray tomography.',
      img: '/images/tech_laboratory.jpg',
      specs: 'Millimeter 3D Jaw Mapping in 12s'
    },
    {
      title: 'Miami Waterfront Panoramic Bay',
      location: 'Biscayne Bay, Miami',
      tag: 'Oceanview Suite',
      desc: 'Floor-to-ceiling soundproof glass rooms with serene ocean views and instant CAD/CAM milling.',
      img: '/images/clinic_interior.jpg',
      specs: 'CEREC Same-Day Ceramic Crowns'
    },
    {
      title: 'Class-B Sterilization Glass Laboratory',
      location: 'Beverly Hills Tower',
      tag: 'OSHA Safety Center',
      desc: 'Medical-grade autoclaves and UV air purification visible behind curved glass walls.',
      img: '/images/room_operation.jpg',
      specs: 'Zero Cross-Contamination Standard'
    },
    {
      title: 'Pediatric & Family Check-in Lounge',
      location: 'Manhattan Flagship',
      tag: 'Family Oasis',
      desc: 'Gentle hygienist lounge with educational 3D dental games and relaxing sensory lighting.',
      img: '/images/room_consultation.jpg',
      specs: 'Anxiety-Free Pediatric Care'
    }
  ];

  useEffect(() => {
    if (isAutoPaused) return;
    const timer = setInterval(() => {
      setAutoSlideIdx((prev) => (prev + 1) % autoGalleryCards.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPaused, autoGalleryCards.length]);

  const clinicsList = [
    {
      id: 0,
      name: 'Beverly Hills Flagship Medical Tower',
      city: 'Los Angeles, CA',
      address: '450 Beverly Hills Medical Tower, Suite 800, Los Angeles, CA 90210',
      phone: '+1 (310) 888-0192',
      hours: 'Mon - Sun: 8:00 AM - 9:00 PM (365 Days)',
      doctors: '14 Specialized Board Doctors',
      services: ['iTero 5D Scans', 'Robotic Implants', 'Invisalign Lab', 'Sedation Suite', 'Pediatric Lounge'],
      amenities: ['Private VIP Check-in Pods', 'Complimentary Organic Tea Bar', 'Valet Parking Included', 'Apple TV & Heated Ergonomic Chairs'],
      rating: '4.99 ⭐ (1,240 Reviews)',
      img: '/images/room_consultation.jpg',
      coords: { x: 30, y: 45 }
    },
    {
      id: 1,
      name: 'Manhattan Aesthetic Dental Center',
      city: 'New York, NY',
      address: '711 5th Avenue, 14th Floor, Manhattan, New York, NY 10022',
      phone: '+1 (212) 555-0188',
      hours: 'Mon - Sun: 7:30 AM - 8:30 PM',
      doctors: '12 Specialized Board Doctors',
      services: ['Porcelain Veneers', 'Laser Gum Therapy', 'Clear Aligners', 'Zoom Laser Whitening'],
      amenities: ['Skyline Panoramic Treatment Bays', 'Soundproof Privacy Studios', 'Instant Digital Smile Design Bar'],
      rating: '4.98 ⭐ (980 Reviews)',
      img: '/images/room_operation.jpg',
      coords: { x: 75, y: 32 }
    },
    {
      id: 2,
      name: 'Silicon Valley Digital Aligner Studio',
      city: 'Palo Alto, CA',
      address: '300 University Avenue, Silicon Tech Plaza, Palo Alto, CA 94301',
      phone: '+1 (650) 444-9021',
      hours: 'Mon - Fri: 8:00 AM - 8:00 PM • Sat - Sun: 9:00 AM - 6:00 PM',
      doctors: '10 AI & Ortho Specialists',
      services: ['AI Diagnostic X-Ray', 'Same-Day Ceramic Crowns', '3D Aligner Milling', 'Preventive Hygiene'],
      amenities: ['Gigabit Wi-Fi Work Lounges', 'Touchless Biometric Check-in', 'VR Meditation Goggles during care'],
      rating: '4.97 ⭐ (670 Reviews)',
      img: '/images/tech_laboratory.jpg',
      coords: { x: 22, y: 38 }
    },
    {
      id: 3,
      name: 'Miami Waterfront Smile Makeover Studio',
      city: 'Miami, FL',
      address: '1100 Biscayne Blvd, Waterfront Tower #402, Miami, FL 33132',
      phone: '+1 (305) 999-3100',
      hours: 'Mon - Sat: 8:30 AM - 7:30 PM',
      doctors: '9 Cosmetic & Implant Doctors',
      services: ['Full Mouth Rehabilitation', 'Zirconia Implants', 'Cosmetic Veneers', 'Sedation Dentistry'],
      amenities: ['Biscayne Bay Ocean Views', 'Post-Op VIP Recovery Lounge', 'Concierge Hotel & Travel Booking'],
      rating: '4.99 ⭐ (540 Reviews)',
      img: '/images/clinic_interior.jpg',
      coords: { x: 80, y: 78 }
    }
  ];

  const filteredClinics = selectedCity === 'All Locations'
    ? clinicsList
    : clinicsList.filter(c => c.city.includes(selectedCity));

  const facilityCategories = [
    {
      title: 'VIP Consultation Suites & Patient Lounge',
      badge: 'Serene Check-in & Smile Design',
      desc: 'Step inside our warm, architecturally curated consultation rooms and check-in lounge. Designed to completely eliminate hospital anxiety with curved glassmorphism partitions and private biometric check-in pods.',
      img: '/images/room_consultation.jpg',
      specs: [
        { label: 'Room Atmosphere', value: 'Heated Ergonomic Seating & Organic Refreshment Tea Bar' },
        { label: 'Visual Display Tech', value: '65-Inch 4K OLED Screens for Real-Time 3D Smile Simulation' },
        { label: 'Privacy Protocol', value: 'Acoustic Soundproof Walls for 100% Confidential Discussions' },
        { label: 'Air Purity System', value: 'Hospital-Grade HEPA H14 Air Purifiers (99.995% Pure Air)' }
      ],
      techFeatured: 'Pearl AI Smile Simulation Bar & Biometric Touchless Check-in'
    },
    {
      title: 'Advanced Surgical & Operation Bays',
      badge: 'Sirona & Waterlase Surgical Suites',
      desc: 'Our surgical operation bays are precision-engineered for 100% painless care. Equipped with memory-foam heated massage dental chairs, dual surgical LED ceiling arrays, and soft-tissue laser dentistry.',
      img: '/images/room_operation.jpg',
      specs: [
        { label: 'Dental Chairs', value: 'Sirona Memory-Foam Heated Lumbar Massage Treatment Bays' },
        { label: 'Laser Technology', value: 'Waterlase iPlus All-Tissue Laser (No Drills, Zero Vibration)' },
        { label: 'Patient Entertainment', value: 'Ceiling 4K Monitors with Apple TV & Noise-Canceling Bose Headphones' },
        { label: 'Surgical Sterility', value: 'Positive-Pressure Laminar Airflow & Touchless Sensor Faucets' }
      ],
      techFeatured: 'Waterlase iPlus Laser & Sirona Orthophos Surgical Suite'
    },
    {
      title: 'Diagnostic Technology & 3D Imaging Lab',
      badge: 'iTero 5D & CBCT Holographic Lab',
      desc: 'We utilize proprietary AI diagnostics and same-day robotic CAD/CAM milling directly inside our clinic labs. Millimeter-accurate jaw bone mapping is completed in under 12 seconds with zero discomfort.',
      img: '/images/tech_laboratory.jpg',
      specs: [
        { label: '3D Scanner Unit', value: 'iTero Element 5D Near-Infrared Intraoral Scanner (No Messy Mold)' },
        { label: 'X-Ray & Tomography', value: 'Ultra-Low Radiation CBCT 3D Cone-Beam Tomography' },
        { label: 'In-House Milling', value: 'Sirona CEREC Robotic CAD/CAM Zirconia & Porcelain Crown Mill' },
        { label: 'Diagnostic AI', value: 'Pearl Second Opinion AI Neural Network for Caries Detection' }
      ],
      techFeatured: 'iTero 5D Near-Infrared Scanner & CEREC Same-Day Robotic Mill'
    }
  ];

  const infrastructureZones = [
    { title: 'Reception & Patient Lounge', desc: 'Warm architectural lighting, organic refreshments, and private biometric check-in pods to completely eliminate pre-appointment anxiety.', badge: 'Oasis Welcome', img: '/images/room_consultation.jpg' },
    { title: 'VIP Consultation Suites', desc: 'Soundproof private rooms equipped with 65-inch 4K screens where doctors display your 3D digital smile simulation and biological treatment roadmap.', badge: '1-on-1 Privacy', img: '/images/room_consultation.jpg' },
    { title: 'Advanced Treatment & Operation Rooms', desc: 'Sirona memory-foam heated dental chairs with ceiling monitors, noise-canceling headphones, and Waterlase painless laser units.', badge: 'Zero Pain Tech', img: '/images/room_operation.jpg' },
    { title: 'Digital X-Ray & CBCT Imaging Lab', desc: 'Ultra-low radiation 3D cone-beam computed tomography providing millimeter-accurate jaw and nerve mapping in under 12 seconds.', badge: 'AI Diagnostics', img: '/images/tech_laboratory.jpg' },
    { title: 'Hospital-Grade Sterilization Center', desc: 'Class-B medical autoclaves and UV purification labs visible behind curved glass, proving our commitment to zero cross-contamination.', badge: 'OSHA Certified', img: '/images/room_operation.jpg' },
    { title: 'Interactive Kids Play Area', desc: 'Dedicated colorful pediatric lounge with educational dental games, gentle hygienists, and reward badges for brave smiles.', badge: 'Family Friendly', img: '/images/room_consultation.jpg' },
    { title: 'On-Site Dental Pharmacy & Boutique', desc: 'Walk out with your custom clear aligner care kit, prescription therapeutic mouthwash, and specialized soft-bristle electric toothbrushes.', badge: 'Complete Care', img: '/images/tech_laboratory.jpg' }
  ];

  const animatedCreativeSuites = [
    {
      id: 1,
      title: 'Beverly Hills VIP Consultation Sanctuary',
      category: 'VIP Consultation',
      roomBadge: 'Private Lounge Suite',
      img: '/images/room_consultation_lounge_1784308798865.jpg',
      dimensions: '720 Sq. Ft. • 16 Ft. High Ceilings',
      atmosphere: 'Calming Organic Eucalyptus Aromatherapy & Biophilic Living Wall',
      desc: 'Step into a serene 5-star consultation environment designed to eliminate all anxiety. Equipped with a 65" 4K OLED Smile Simulation wall and private biometric check-in.',
      techHighlight: 'iTero 5D Near-Infrared Holographic Smile Simulator',
      hotspots: [
        { id: 1, x: '30%', y: '45%', label: '65" 4K OLED Simulation Screen', tech: 'Real-time 3D facial simulation displaying before/after jaw alignment in 4K resolution.' },
        { id: 2, x: '68%', y: '65%', label: 'Italian Leather Reclining Lounge', tech: 'Ergonomic zero-gravity consultation seating with integrated wireless phone chargers.' },
        { id: 3, x: '20%', y: '80%', label: 'Biometric Touchless Kiosk', tech: 'Instant encrypted digital check-in and automated medical history verification.' }
      ]
    },
    {
      id: 2,
      title: 'Manhattan Robotic Surgical & Laser Bay',
      category: 'Operation Suite',
      roomBadge: 'Surgical Suite Alpha',
      img: '/images/operation_surgical_room_1784308817138.jpg',
      dimensions: '850 Sq. Ft. • Positive-Pressure Airflow',
      atmosphere: 'Surround-Sound Noise Cancellation & Mood-Sync Lighting',
      desc: 'Our flagship surgical bay features Sirona memory-foam lumbar massage chairs, touchless laser controls, and ceiling-mounted 4K entertainment screens.',
      techHighlight: 'Waterlase iPlus All-Tissue Laser & Sirona Orthophos Suite',
      hotspots: [
        { id: 1, x: '45%', y: '52%', label: 'Waterlase iPlus Laser Unit', tech: 'Performs precision gum surgery and cavity prep with sterile hydro-photon energy without drills or shots.' },
        { id: 2, x: '60%', y: '40%', label: 'Shadowless Tri-LED Surgical Light', tech: 'Ultra-cool 5500K natural daylight spectrum eliminating shadows during microsurgery.' },
        { id: 3, x: '35%', y: '75%', label: 'Heated Memory-Foam Dental Chair', tech: 'Adapts to patient spine curvature with built-in soothing lumbar massage.' }
      ]
    },
    {
      id: 3,
      title: 'Silicon Valley AI Diagnostic & 5D Imaging Lab',
      category: 'Diagnostic & Lab',
      roomBadge: 'Holographic Lab',
      img: '/images/technology_diagnostic_lab_1784308830643.jpg',
      dimensions: '600 Sq. Ft. • Anti-Radiation Shielding',
      atmosphere: 'Clean Glass Aesthetics & High-Speed Optical Data Transfer',
      desc: 'No more messy impression putty or gag reflexes. Our near-infrared optical scanners and AI caries detection neural network map every micron of your enamel in 12 seconds.',
      techHighlight: 'Pearl Second Opinion AI Neural Network & CBCT Tomography',
      hotspots: [
        { id: 1, x: '38%', y: '48%', label: 'iTero Element 5D Optical Scanner', tech: 'Captures 6,000 frames per second to create a photorealistic 3D jaw model instantly.' },
        { id: 2, x: '72%', y: '55%', label: 'Sirona CEREC Robotic Milling Unit', tech: 'Mills custom monolithic zirconia crowns directly on-site while you watch in under 15 minutes.' },
        { id: 3, x: '25%', y: '68%', label: 'Ultra-Low Radiation CBCT Scanner', tech: '360° Cone-Beam tomography providing 3D nerve and bone density maps with 80% less radiation.' }
      ]
    },
    {
      id: 4,
      title: 'Hospital-Grade Sterilization Glass Center',
      category: 'Sterilization',
      roomBadge: 'OSHA Class-B Certified',
      img: '/images/operation_surgical_room_1784308817138.jpg',
      dimensions: '500 Sq. Ft. • Transparent Curved Glass View',
      atmosphere: '100% Sterile Ozone Purification & UV Sterilization Chamber',
      desc: 'We operate with total transparency. Our Class-B medical autoclaves and UV sterilization chambers sit behind curved glass so patients can witness our zero-contamination protocol.',
      techHighlight: 'Lisa Class-B Medical Autoclave & Ultrasonic Bio-Cleaner',
      hotspots: [
        { id: 1, x: '50%', y: '45%', label: 'Class-B Medical Autoclave Chamber', tech: 'Hospital-grade steam sterilization under vacuum pressure killing 99.999% of all biological pathogens.' },
        { id: 2, x: '75%', y: '60%', label: 'Touchless Ultrasonic Cleaning Vat', tech: 'High-frequency cavitation waves removing microscopic debris prior to sterile pouch sealing.' },
        { id: 3, x: '28%', y: '62%', label: 'UV-C Instrument Storage Locker', tech: 'Continuous ultraviolet germicidal irradiation keeping instruments pristine until surgery.' }
      ]
    },
    {
      id: 5,
      title: 'Pediatric & Family Care Check-in Lounge',
      category: 'Pediatric & Family',
      roomBadge: 'Family Sanctuary',
      img: '/images/room_consultation_lounge_1784308798865.jpg',
      dimensions: '650 Sq. Ft. • Interactive Play Pods',
      atmosphere: 'Cheerful Lighting, Educational Games & Bravery Reward Station',
      desc: 'Designed specially for children and families. Features interactive touch-table dental games, gentle pediatric hygienists, and comfortable family accommodation seating.',
      techHighlight: 'AirFlow Guided Biofilm Therapy (Warm Water Clean)',
      hotspots: [
        { id: 1, x: '40%', y: '50%', label: 'AirFlow Biofilm Therapy Wand', tech: 'Cleans teeth using a gentle, warm sterile water and erythritol powder mist with zero metal scraping.' },
        { id: 2, x: '65%', y: '45%', label: 'Ceiling Nature & Cartoon Display', tech: 'Overhead 4K display streaming calming nature documentaries or favorite animated shows during care.' },
        { id: 3, x: '22%', y: '70%', label: 'Interactive Oral Health Touch-Table', tech: 'Engaging gamified learning screen teaching children proper brushing and flossing techniques.' }
      ]
    },
    {
      id: 6,
      title: 'Miami Oceanview Surgical Suite & Recovery Bay',
      category: 'Operation Suite',
      roomBadge: 'Oceanview Suite VIP',
      img: '/images/clinic_panoramic_interior_1784222760536.jpg',
      dimensions: '900 Sq. Ft. • Floor-to-Ceiling Ocean Windows',
      atmosphere: 'Panoramic Coastal Views & Organic Post-Surgery Tea Service',
      desc: 'Combine complex dental implant surgery with five-star recovery luxury. Enjoy floor-to-ceiling ocean views, private recovery lounges, and dedicated post-op concierge nursing.',
      techHighlight: 'Robotic Titanium Implant Guide & PRF Bio-Healing Centrifuge',
      hotspots: [
        { id: 1, x: '52%', y: '42%', label: 'Robotic Implant Navigation Arm', tech: 'Provides real-time GPS-like guidance during titanium root placement accurate to 0.1 millimeter.' },
        { id: 2, x: '30%', y: '58%', label: 'PRF Bio-Healing Centrifuge Unit', tech: 'Spins patient blood sample to create natural Platelet-Rich Fibrin membranes for 50% faster healing.' },
        { id: 3, x: '78%', y: '65%', label: 'Floor-to-Ceiling Coastal Glass View', tech: 'Natural sunlight and ocean vistas scientifically proven to reduce cortisol and speed up patient recovery.' }
      ]
    }
  ];

  const solutionsShowcase = [
    { title: 'Teeth Cleaning & Hygiene', desc: 'Guided biofilm therapy using warm sterile water spray. Removes 100% plaque without scraping.', icon: '✨' },
    { title: 'Same-Day Dental Implants', desc: 'Robotic-guided titanium root placement with custom zirconia crown attached in 2 hours.', icon: '🦷' },
    { title: 'Cosmetic Smile Makeover', desc: 'Custom ultra-thin porcelain veneers handcrafted by master ceramicists to balance your facial symmetry.', icon: '🎨' },
    { title: 'Invisalign & Clear Aligners', desc: 'Transparent crystal aligners virtually invisible in professional settings and removable for meals.', icon: '😁' },
    { title: 'Microscope Root Canal', desc: 'Endodontic precision under 25x magnification with laser sterilization for permanent tooth preservation.', icon: '🔬' },
    { title: 'Wisdom Tooth Surgery', desc: 'Minimally invasive extraction with PRF bio-healing membranes for rapid 24-hour recovery.', icon: '🛡️' },
    { title: 'Pediatric Dentistry', desc: 'Preventive sealants, fluoride treatments, and gentle behavior guidance for children aged 1 to 16.', icon: '🧸' },
    { title: 'Orthodontic Braces', desc: 'Modern self-ligating ceramic brackets that move teeth up to 30% faster with minimal wire tension.', icon: '🪥' },
    { title: 'Periodontal Gum Care', desc: 'Laser soft-tissue therapy treating gingivitis and bone loss without scalpels or sutures.', icon: '🌿' }
  ];

  return (
    <div style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative',
          padding: '100px 24px 120px',
          background: 'var(--dark-slate)',
          color: 'var(--white)',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.28, backgroundImage: `url('/images/clinic_interior.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(3px)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(29, 43, 42, 0.85) 0%, rgba(29, 43, 42, 0.96) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
          <span className="badge-mint" style={{ marginBottom: '20px' }}>
            <Compass size={16} /> 12 World-Class Locations
          </span>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--white)', marginBottom: '20px' }}>
            Our Luxury Medical Clinics
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#A0B2B2', lineHeight: 1.7, marginBottom: '36px' }}>
            Every RadiantAlign flagship studio is architecturally designed as a calming wellness sanctuary. Equipped with hospital-grade sterilization glass labs, 3D laser suites, and 5-star patient amenities.
          </p>

          <button onClick={onOpenTour} className="btn-primary" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
            <Eye size={20} /> Launch 360° Virtual Clinic Tour
          </button>
        </div>
      </section>

      {/* 2. CLINIC CAROUSEL & FILTER CARDS */}
      <section className="section-container">
        <div className="section-title">
          <span className="badge-mint">Choose Your Preferred Sanctuary</span>
          <h2 style={{ marginTop: '16px' }}>Find a Flagship Studio Near You</h2>
          <p>Open 365 days a year with 24/7 emergency dental suites available across prime metropolitan districts.</p>
        </div>

        {/* City Filter Pills */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '44px', flexWrap: 'wrap' }}>
          {['All Locations', 'Los Angeles', 'New York', 'Palo Alto', 'Miami'].map((city, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCity(city === 'All Locations' ? 'All Locations' : city)}
              style={{
                padding: '12px 24px',
                borderRadius: '50px',
                border: (selectedCity === city || (selectedCity === 'All Locations' && city === 'All Locations')) ? '2px solid var(--theme-color)' : '1px solid rgba(0,0,0,0.12)',
                background: (selectedCity === city || (selectedCity === 'All Locations' && city === 'All Locations')) ? 'var(--soft-green)' : 'var(--white)',
                fontFamily: 'var(--font-subheading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--dark-slate)',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Clinic Cards Grid */}
        <div className="grid-2">
          {filteredClinics.map((clinic) => (
            <div
              key={clinic.id}
              className="glass-card"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                {/* Photo Header */}
                <div style={{ position: 'relative', height: '240px', borderRadius: '20px', overflow: 'hidden', marginBottom: '24px' }}>
                  <img src={clinic.img} alt={clinic.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(29, 43, 42, 0.88)', color: '#7ED9B7', padding: '6px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700 }}>
                    {clinic.rating}
                  </span>
                  <span style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'var(--theme-color)', color: 'var(--dark-slate)', padding: '6px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800 }}>
                    <UserCheck size={14} style={{ verticalAlign: 'middle' }} /> {clinic.doctors}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', color: 'var(--dark-slate)' }}>{clinic.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--grey)', fontSize: '0.94rem', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <MapPin size={18} color="#7ED9B7" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{clinic.address}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Phone size={18} color="#7ED9B7" style={{ flexShrink: 0 }} />
                    <strong style={{ color: 'var(--dark-slate)' }}>{clinic.phone}</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Clock size={18} color="#7ED9B7" style={{ flexShrink: 0 }} />
                    <span>{clinic.hours}</span>
                  </div>
                </div>

                {/* Services Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {clinic.services.map((srv, i) => (
                    <span key={i} style={{ padding: '4px 12px', background: 'var(--soft-green)', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--dark-slate)' }}>
                      • {srv}
                    </span>
                  ))}
                </div>

                {/* Amenities Expandable Preview */}
                <div style={{ padding: '16px', background: 'rgba(234, 251, 245, 0.6)', borderRadius: '16px', marginBottom: '24px', border: '1px solid rgba(126, 217, 183, 0.3)' }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '8px' }}>✨ VIP Patient Amenities:</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '0.82rem', color: 'var(--grey)' }}>
                    {clinic.amenities.map((am, i) => (
                      <span key={i}>✓ {am}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                  style={{ flex: 1, padding: '16px', justifyContent: 'center' }}
                >
                  <Calendar size={18} /> Book Appointment
                </button>
                <button
                  onClick={() => { setActiveMarker(clinic.id); alert(`Opening instant GPS navigation to ${clinic.name}`); }}
                  className="btn-secondary"
                  style={{ padding: '16px 20px' }}
                  title="Navigate via GPS"
                >
                  <Navigation size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GLOBAL FLAGSHIP ARCHITECTURAL TOUR & ROOM SHOWCASE */}
      <section style={{ padding: '90px 24px', background: 'var(--dark-slate)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(#7ED9B7 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        
        <div style={{ maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-mint" style={{ background: 'rgba(126, 217, 183, 0.15)', color: '#7ED9B7', border: '1px solid rgba(126, 217, 183, 0.4)' }}>
              ✨ Automated Flagship Sanctuary Tour
            </span>
            <h2 style={{ marginTop: '16px', color: 'var(--white)', fontSize: '2.75rem' }}>
              Global Flagship Architectural Tour & Room Showcase
            </h2>
            <p style={{ color: '#A0B2B2', maxWidth: '750px', margin: '14px auto 0', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Take a continuous visual journey through our multi-city sanctuaries. Experience 5-star consultation lounges, robotic surgical suites, and holographic diagnostic labs gliding smoothly one after another right before your eyes.
            </p>
          </div>

          {/* Controls Bar for Auto-Motion Slider */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={() => setIsAutoPaused(!isAutoPaused)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '50px',
                  background: isAutoPaused ? 'var(--theme-color)' : 'rgba(255, 255, 255, 0.12)',
                  color: isAutoPaused ? 'var(--dark-slate)' : 'var(--white)',
                  border: '1px solid rgba(126, 217, 183, 0.4)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s',
                  boxShadow: isAutoPaused ? '0 0 20px rgba(126, 217, 183, 0.4)' : 'none'
                }}
              >
                {isAutoPaused ? <Play size={16} /> : <Pause size={16} />}
                {isAutoPaused ? 'Resume Auto-Slide Motion' : 'Sliding Continuously (One by One)'}
              </button>
              <span style={{ fontSize: '0.86rem', color: '#7ED9B7', fontWeight: 600 }}>
                Active Slide: {autoSlideIdx + 1} / {autoGalleryCards.length}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  setIsAutoPaused(true);
                  setAutoSlideIdx((prev) => (prev - 1 + autoGalleryCards.length) % autoGalleryCards.length);
                }}
                style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                title="Previous Slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => {
                  setIsAutoPaused(true);
                  setAutoSlideIdx((prev) => (prev + 1) % autoGalleryCards.length);
                }}
                style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                title="Next Slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Main Hero Spotlight Card with Smooth Slide Animation */}
          <div
            onMouseEnter={() => setIsAutoPaused(true)}
            onMouseLeave={() => setIsAutoPaused(false)}
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              border: '2px solid rgba(126, 217, 183, 0.4)',
              borderRadius: '36px',
              padding: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '44px',
              alignItems: 'center',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              marginBottom: '52px',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ position: 'relative', height: '440px', borderRadius: '26px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', border: '1px solid rgba(126, 217, 183, 0.35)' }}>
              <img
                key={autoSlideIdx}
                src={autoGalleryCards[autoSlideIdx].img}
                alt={autoGalleryCards[autoSlideIdx].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'fadeInSlide 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div style={{ position: 'absolute', top: '18px', right: '18px', background: 'rgba(29, 43, 42, 0.9)', color: '#7ED9B7', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, border: '1px solid rgba(126, 217, 183, 0.4)' }}>
                📍 {autoGalleryCards[autoSlideIdx].location}
              </div>
              <div style={{ position: 'absolute', bottom: '18px', left: '18px', right: '18px', background: 'rgba(29, 43, 42, 0.92)', backdropFilter: 'blur(10px)', padding: '14px 20px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '0.74rem', color: '#A8F1D5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Technical Spotlight</span>
                <strong style={{ display: 'block', fontSize: '0.96rem', color: 'var(--white)', marginTop: '3px' }}>{autoGalleryCards[autoSlideIdx].specs}</strong>
              </div>
            </div>

            <div key={`text-${autoSlideIdx}`} style={{ animation: 'fadeInSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <span className="badge-mint" style={{ background: 'var(--theme-color)', color: 'var(--dark-slate)', fontWeight: 800, marginBottom: '16px' }}>
                {autoGalleryCards[autoSlideIdx].tag}
              </span>
              <h3 style={{ fontSize: '2.35rem', color: 'var(--white)', marginBottom: '18px', lineHeight: 1.25 }}>
                {autoGalleryCards[autoSlideIdx].title}
              </h3>
              <p style={{ color: '#C0D2D2', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                {autoGalleryCards[autoSlideIdx].desc}
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                  Schedule Suite Tour Here <ArrowRight size={18} />
                </button>
                <button onClick={onOpenTour} className="btn-secondary" style={{ padding: '16px 28px', fontSize: '1rem', background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  View 360° Walkthrough
                </button>
              </div>
            </div>
          </div>

          {/* Horizontally Sliding Cards Carousel Track (Glides one after another smoothly like slides) */}
          <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '14px' }}>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                transition: 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: `translateX(-${autoSlideIdx * 340}px)`
              }}
            >
              {autoGalleryCards.map((card, idx) => {
                const isSelected = autoSlideIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setAutoSlideIdx(idx);
                      setIsAutoPaused(true);
                    }}
                    style={{
                      minWidth: '316px',
                      width: '316px',
                      flexShrink: 0,
                      padding: '22px',
                      borderRadius: '24px',
                      background: isSelected ? 'linear-gradient(135deg, rgba(126, 217, 183, 0.24) 0%, rgba(126, 217, 183, 0.08) 100%)' : 'rgba(255, 255, 255, 0.04)',
                      border: isSelected ? '2px solid #7ED9B7' : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isSelected ? 'scale(1.03) translateY(-6px)' : 'scale(0.98)',
                      boxShadow: isSelected ? '0 18px 44px rgba(126, 217, 183, 0.28)' : 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px'
                    }}
                  >
                    <div style={{ position: 'relative', height: '170px', borderRadius: '16px', overflow: 'hidden' }}>
                      <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                      <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(29, 43, 42, 0.88)', color: '#7ED9B7', padding: '4px 12px', borderRadius: '50px', fontSize: '0.72rem', fontWeight: 700 }}>
                        {card.tag}
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', color: '#A8F1D5', fontWeight: 700, display: 'block', marginBottom: '4px' }}>📍 {card.location}</span>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--white)', margin: 0, lineHeight: 1.35 }}>{card.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <style>{`
            @keyframes fadeInSlide {
              from { opacity: 0; transform: translateX(18px); }
              to { opacity: 1; transform: translateX(0); }
            }
          `}</style>
        </div>
      </section>

      {/* 4. OUR PHILOSOPHY & SMARTER COMFORTABLE SMILE SOLUTIONS (Matches attached images exactly) */}
      <section style={{ padding: '110px 24px', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
          
          {/* PART A: OUR PHILOSOPHY / A SMARTER APPROACH TO MODERN ORTHODONTICS (Inspired by Image 1) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '72px', alignItems: 'center', marginBottom: '120px' }}>
            
            {/* Left Column: Creative Layered Image Composition with Overlapping Floating Card */}
            <div style={{ position: 'relative', paddingRight: '40px', paddingBottom: '40px' }}>
              
              {/* Main Rounded Image */}
              <div style={{ position: 'relative', height: '540px', borderRadius: '36px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(29, 43, 42, 0.18)', border: '2px solid rgba(126, 217, 183, 0.4)' }}>
                <img
                  src="/images/hero_patient.jpg"
                  alt="Doctor holding clear aligner with smiling patient"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 70%, rgba(29, 43, 42, 0.4) 100%)' }} />
              </div>

              {/* Overlapping Deep Violet / Slate Vertical Accent Panel on right edge (as seen in Image 1) */}
              <div style={{ position: 'absolute', top: '40px', right: '15px', width: '56px', height: '440px', borderRadius: '28px', background: 'linear-gradient(180deg, var(--dark-slate) 0%, #7ED9B7 100%)', zIndex: 2, boxShadow: '0 16px 40px rgba(0,0,0,0.2)' }} />

              {/* Floating Overlapping Secondary Image Card at Bottom Right (as seen in Image 1) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  right: '0px',
                  width: '310px',
                  height: '210px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '6px solid var(--white)',
                  boxShadow: '0 25px 70px rgba(29, 43, 42, 0.35)',
                  zIndex: 10,
                  background: 'var(--white)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="floating-card-hover"
              >
                <img
                  src="/images/aligner_3d.jpg"
                  alt="Patient inserting clear aligner close-up"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(29, 43, 42, 0.92)', color: '#7ED9B7', padding: '4px 12px', borderRadius: '50px', fontSize: '0.72rem', fontWeight: 800 }}>
                  ✨ Precision Custom Fit
                </div>
              </div>
            </div>

            {/* Right Column: Our Philosophy Content & Stacked Feature List */}
            <div>
              <span style={{ display: 'inline-block', fontSize: '1.1rem', fontWeight: 800, color: '#2C8E6C', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Our Philosophy
              </span>
              <h2 style={{ fontSize: '3rem', color: 'var(--dark-slate)', lineHeight: 1.2, marginBottom: '20px', fontWeight: 800 }}>
                A Smarter Approach To Modern Orthodontics
              </h2>
              <p style={{ color: 'var(--grey)', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '38px' }}>
                We are committed to creating healthy, confident smiles through precision-driven care and personalised attention. Every treatment is powered by advanced technology to ensure accuracy, predictability, and long-lasting results. Our approach simplifies your smile journey, making it comfortable, efficient, and stress-free.
              </p>

              {/* 3 Stacked Feature Items with Circular Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                
                {/* Feature 1 */}
                <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--dark-slate)', color: '#7ED9B7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 24px rgba(29, 43, 42, 0.22)' }}>
                    <Heart size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-slate)', marginBottom: '6px', fontWeight: 800 }}>
                      Patient-First Approach
                    </h3>
                    <p style={{ color: 'var(--grey)', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
                      Every aligner and clinic treatment is customised based on your unique dental structure, goals, and daily lifestyle.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--dark-slate)', color: '#7ED9B7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 24px rgba(29, 43, 42, 0.22)' }}>
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-slate)', marginBottom: '6px', fontWeight: 800 }}>
                      Transparent Results
                    </h3>
                    <p style={{ color: 'var(--grey)', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
                      Visualise your smile transformation in advance with 3D preview technology before starting your treatment.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--dark-slate)', color: '#7ED9B7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 24px rgba(29, 43, 42, 0.22)' }}>
                    <Shield size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-slate)', marginBottom: '6px', fontWeight: 800 }}>
                      Technology-Driven Care
                    </h3>
                    <p style={{ color: 'var(--grey)', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
                      We use advanced digital tools to ensure precise planning progress, zero-pain lasers, and reliable outcomes.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* PART B: SMARTER COMFORTABLE SMILE SOLUTIONS (Inspired by Image 2) */}
          <style>{`
            @keyframes autoPanImage {
              0% { transform: scale(1.02) translate(0%, 0%); }
              50% { transform: scale(1.08) translate(-1.5%, 1.5%); }
              100% { transform: scale(1.05) translate(1.5%, -1%); }
            }
          `}</style>
          <div style={{ paddingTop: '40px', borderTop: '2px dashed rgba(126, 217, 183, 0.3)' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--dark-slate)', textAlign: 'center', marginBottom: '56px', fontWeight: 800 }}>
              Smarter Comfortable Smile Solutions
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
              
              {/* Card 1: Invisible */}
              <div
                style={{
                  background: 'var(--white)',
                  borderRadius: '32px',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(29, 43, 42, 0.08)',
                  border: '1px solid rgba(126, 217, 183, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="solution-card-hover"
              >
                <div style={{ width: '100%', height: '230px', borderRadius: '24px', overflow: 'hidden', marginBottom: '26px', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}>
                  <img
                    src="/images/aligner_3d.jpg"
                    alt="Invisible crystal clear aligners on teeth"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', animation: 'autoPanImage 24s infinite alternate ease-in-out' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.7rem', color: 'var(--dark-slate)', marginBottom: '14px', fontWeight: 800 }}>
                  Invisible
                </h3>
                <p style={{ color: 'var(--grey)', fontSize: '1.02rem', lineHeight: 1.65, margin: 0, padding: '0 12px 14px' }}>
                  Clear aligners designed to be nearly invisible, allowing you to smile confidently throughout your treatment without any metal brackets.
                </p>
              </div>

              {/* Card 2: Comfort-Focused Design */}
              <div
                style={{
                  background: 'var(--white)',
                  borderRadius: '32px',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(29, 43, 42, 0.08)',
                  border: '1px solid rgba(126, 217, 183, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="solution-card-hover"
              >
                <div style={{ width: '100%', height: '230px', borderRadius: '24px', overflow: 'hidden', marginBottom: '26px', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}>
                  <img
                    src="/images/room_operation.jpg"
                    alt="Ergonomic comfort surgical and consultation suite"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', animation: 'autoPanImage 28s infinite alternate-reverse ease-in-out' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.7rem', color: 'var(--dark-slate)', marginBottom: '14px', fontWeight: 800 }}>
                  Comfort-Focused Design
                </h3>
                <p style={{ color: 'var(--grey)', fontSize: '1.02rem', lineHeight: 1.65, margin: 0, padding: '0 12px 14px' }}>
                  Custom-fit aligners and memory-foam ergonomic clinic chairs crafted for a smooth, irritation-free experience and all-day relaxation.
                </p>
              </div>

              {/* Card 3: Removable & Hygienic */}
              <div
                style={{
                  background: 'var(--white)',
                  borderRadius: '32px',
                  padding: '24px',
                  boxShadow: '0 18px 50px rgba(29, 43, 42, 0.08)',
                  border: '1px solid rgba(126, 217, 183, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="solution-card-hover"
              >
                <div style={{ width: '100%', height: '230px', borderRadius: '24px', overflow: 'hidden', marginBottom: '26px', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}>
                  <img
                    src="/images/room_consultation.jpg"
                    alt="Removable clear aligner insertion and hygiene care"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', animation: 'autoPanImage 22s infinite alternate ease-in-out' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.7rem', color: 'var(--dark-slate)', marginBottom: '14px', fontWeight: 800 }}>
                  Removable & Hygienic
                </h3>
                <p style={{ color: 'var(--grey)', fontSize: '1.02rem', lineHeight: 1.65, margin: 0, padding: '0 12px 14px' }}>
                  Easily removable aligners and transparent Class-B sterilization chambers helping maintain better hygiene and oral health during treatment.
                </p>
              </div>

            </div>
          </div>

          <style>{`
            .solution-card-hover:hover {
              transform: translateY(-10px);
              box-shadow: 0 26px 70px rgba(126, 217, 183, 0.28) !important;
              border-color: #7ED9B7 !important;
            }
            .solution-card-hover:hover img {
              transform: scale(1.06);
            }
            .floating-card-hover:hover {
              transform: scale(1.04) translateY(-4px);
            }
          `}</style>

        </div>
      </section>

      {/* 5. DENTAL SOLUTIONS SHOWCASE CAROUSEL */}
      <section style={{ padding: '100px 24px', background: 'var(--light-mint)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="section-title">
            <span className="badge-mint">All Sub-Specialties Under One Roof</span>
            <h2 style={{ marginTop: '16px' }}>Specialized Dental Solutions Showcase</h2>
            <p>From precision laser cleaning to full arch zirconia restorations, our multi-disciplinary specialists coordinate your care.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {solutionsShowcase.map((sol, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '32px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '2.4rem', marginBottom: '16px' }}>{sol.icon}</div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--dark-slate)' }}>{sol.title}</h4>
                  <p style={{ color: 'var(--grey)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>{sol.desc}</p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="btn-secondary"
                  style={{ width: '100%', padding: '12px', fontSize: '0.9rem', justifyContent: 'center' }}
                >
                  Schedule Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VIRTUAL TOUR LAUNCHER CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--dark-slate)', color: 'var(--white)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge-mint" style={{ marginBottom: '20px' }}>Explore From Home</span>
          <h2 style={{ fontSize: '2.75rem', color: 'var(--white)', marginBottom: '16px' }}>
            Step Inside Our Clinic Right Now
          </h2>
          <p style={{ color: '#A0B2B2', fontSize: '1.15rem', marginBottom: '36px', lineHeight: 1.6 }}>
            Use our interactive 360° virtual walkthrough to examine our consultation rooms, surgical laser bays, and sterilization laboratories before your visit.
          </p>
          <button onClick={onOpenTour} className="btn-primary" style={{ padding: '18px 44px', fontSize: '1.1rem' }}>
            <Eye size={22} /> Start Virtual Walkthrough Tour
          </button>
        </div>
      </section>
    </div>
  );
}
