import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundFx from './components/BackgroundFx';
import LoadingScreen from './components/LoadingScreen';
import AccessibilityBar from './components/AccessibilityBar';
import LiveChatModal from './components/LiveChatModal';
import BookingModal from './components/BookingModal';
import VirtualTourModal from './components/VirtualTourModal';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import Clinics from './pages/Clinics';
import About from './pages/About';
import Aligners from './pages/Aligners';
import Contact from './pages/Contact';

// ScrollToTop Helper when changing route
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  const handleOpenTour = () => setTourOpen(true);
  const handleCloseTour = () => setTourOpen(false);

  return (
    <Router>
      <ScrollToTop />
      
      {/* 2.5s Premium Initial Splash Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Global Background Effects & Custom Cursor */}
      <CustomCursor />
      <BackgroundFx />
      <AccessibilityBar />
      <BackToTop />

      {/* Sticky Glassmorphism Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Page Routing */}
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
          <Route path="/clinics" element={<Clinics onOpenBooking={handleOpenBooking} onOpenTour={handleOpenTour} />} />
          <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
          <Route path="/aligners" element={<Aligners onOpenBooking={handleOpenBooking} />} />
          <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
        </Routes>
      </main>

      {/* Global Modals & Floating Concierge */}
      <LiveChatModal onOpenBooking={handleOpenBooking} />
      <BookingModal open={bookingOpen} onClose={handleCloseBooking} />
      <VirtualTourModal open={tourOpen} onClose={handleCloseTour} onOpenBooking={handleOpenBooking} />

      {/* Global Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </Router>
  );
}
