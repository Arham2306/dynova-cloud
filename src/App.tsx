import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import { LeadModalProvider } from './context/LeadModalContext';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollManager from './components/ScrollManager/ScrollManager';
import logoImg from './assets/logo-png.png';
import { usePrefersReducedMotion } from './lib/usePrefersReducedMotion';
import './App.css';

const WebsiteDevelopmentPage = lazy(() => import('./pages/services/WebsiteDevelopmentPage'));
const EcommercePage = lazy(() => import('./pages/services/EcommercePage'));
const LogoDesigningPage = lazy(() => import('./pages/services/LogoDesigningPage'));
const DigitalMarketingPage = lazy(() => import('./pages/services/DigitalMarketingPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const LeadModal = lazy(() => import('./components/LeadForm/LeadModal'));

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    let lenis: Lenis | null = null;
    let updateRaf: ((time: number) => void) | null = null;
    let isCleanedUp = false;

    // Initialize Lenis Smooth Scrolling on idle so it does not block initial hydration
    const initSmoothScroll = () => {
      if (isCleanedUp) return;

      lenis = new Lenis({
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

      // Drive Lenis RAF from GSAP ticker for perfect frame sync
      updateRaf = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(updateRaf);
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(initSmoothScroll);
      return () => {
        isCleanedUp = true;
        (window as any).cancelIdleCallback(handle);
        if (updateRaf) gsap.ticker.remove(updateRaf);
        lenis?.destroy();
        delete (window as any).__lenis;
      };
    } else {
      const timer = setTimeout(initSmoothScroll, 150);
      return () => {
        isCleanedUp = true;
        clearTimeout(timer);
        if (updateRaf) gsap.ticker.remove(updateRaf);
        lenis?.destroy();
        delete (window as any).__lenis;
      };
    }
  }, [prefersReducedMotion]);

  return (
    <BrowserRouter>
      <ScrollManager />
      <MotionConfig reducedMotion="user">
        <LeadModalProvider>
          <div className="app-layout">
            <Navbar />
            <Suspense fallback={<div style={{ minHeight: '100vh', background: '#000814' }} />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
                <Route path="/services/ecommerce" element={<EcommercePage />} />
                <Route path="/services/logo-designing" element={<LogoDesigningPage />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
            <Suspense fallback={null}>
              <LeadModal />
            </Suspense>
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
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <span>•</span>
                  <Link to="/terms-of-service">Terms of Service</Link>
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
