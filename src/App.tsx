import { useEffect } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import { LeadModalProvider } from './context/LeadModalContext';
import LeadModal from './components/LeadForm/LeadModal';
import SEO from './components/SEO/SEO';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
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
    };
  }, [prefersReducedMotion]);

  return (
    <MotionConfig reducedMotion="user">
      <LeadModalProvider>
      <SEO
        title="Dynova Cloud | Website Development, E-Commerce, Logo Designing & Digital Marketing"
        description="Dynova Cloud unifies custom website development, high-converting e-commerce, iconic logo designing, and data-driven digital marketing into one scalable growth engine."
      />
      <div className="app-layout">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Portfolio />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <LeadModal />
        <ScrollToTop />

      {/* Agency Footer */}
      <footer className="agency-footer">
        <div className="footer-container">
          <div className="footer-brand-column">
            <div className="footer-brand">
              <img src={logoImg} alt="Dynova Cloud - Digital Marketing and Engineering Agency" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">DIGITAL SOLUTIONS. REAL GROWTH.</p>
            <p className="footer-bio">
              We design, engineer, and scale high-performance digital platforms and cloud solutions for modern enterprise growth.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Solutions</h4>
              <a href="#services">Website Development</a>
              <a href="#services">E-Commerce</a>
              <a href="#services">Logo Designing</a>
              <a href="#services">Digital Marketing</a>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Dynova</a>
              <a href="#services">Our Capabilities</a>
              <a href="#testimonials">Client Voices</a>
              <a href="#contact">Start a Project</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Dynova Cloud. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#hero">Privacy Policy</a>
            <span>•</span>
            <a href="#hero">Terms of Service</a>
            <span>•</span>
            <a href="#hero">Security & SLA</a>
          </div>
        </div>
      </footer>
    </div>
  </LeadModalProvider>
</MotionConfig>
);
}

export default App;
