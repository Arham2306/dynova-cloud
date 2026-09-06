import { useEffect } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import { LeadModalProvider } from './context/LeadModalContext';
import LeadModal from './components/LeadForm/LeadModal';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollManager from './components/ScrollManager/ScrollManager';
import logoImg from './assets/logo-png.png';
import { usePrefersReducedMotion } from './lib/usePrefersReducedMotion';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Attach to window so ScrollManager and modals can coordinate smooth scrolling
    (window as any).__lenis = lenis;

    // Synchronize Lenis scroll updates with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis RAF from GSAP ticker for perfect 60-120fps frame sync
    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, [prefersReducedMotion]);

  return (
    <BrowserRouter>
      <ScrollManager />
      <MotionConfig reducedMotion="user">
        <LeadModalProvider>
          <div className="app-layout">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <LeadModal />
            <ScrollToTop />

            {/* Agency Footer */}
            <footer className="agency-footer">
              <div className="footer-container">
                <div className="footer-brand-column">
                  <Link to="/" className="footer-brand" aria-label="Dynova Cloud Home">
                    <img src={logoImg} alt="Dynova Cloud - Digital Marketing and Engineering Agency" className="footer-logo-img" />
                  </Link>
                  <p className="footer-tagline">DIGITAL SOLUTIONS. REAL GROWTH.</p>
                  <p className="footer-bio">
                    We design, engineer, and scale high-performance digital platforms and cloud solutions for modern enterprise growth.
                  </p>
                </div>

                <div className="footer-links-group">
                  <div className="footer-col">
                    <h4>Solutions</h4>
                    <Link to="/services/website-development">Website Development</Link>
                    <Link to="/services/ecommerce">E-Commerce</Link>
                    <Link to="/services/logo-designing">Logo Designing</Link>
                    <Link to="/services/digital-marketing">Digital Marketing</Link>
                  </div>

                  <div className="footer-col">
                    <h4>Company</h4>
                    <a href="/#about">About Dynova</a>
                    <a href="/#services">Our Capabilities</a>
                    <a href="/#testimonials">Client Voices</a>
                    <a href="/#contact">Start a Project</a>
                  </div>
                </div>
              </div>

              <div className="footer-bottom-bar">
                <p>© {new Date().getFullYear()} Dynova Cloud. All rights reserved.</p>
                <div className="footer-legal-links">
                  <a href="/#hero">Privacy Policy</a>
                  <span>•</span>
                  <a href="/#hero">Terms of Service</a>
                  <span>•</span>
                  <a href="/#hero">Security &amp; SLA</a>
                </div>
              </div>
            </footer>
          </div>
        </LeadModalProvider>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;
