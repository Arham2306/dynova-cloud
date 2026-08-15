import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import { Cloud } from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
      </main>

      {/* Agency Footer */}
      <footer className="agency-footer">
        <div className="footer-container">
          <div className="footer-brand-column">
            <div className="footer-brand">
              <div className="brand-icon-wrapper">
                <Cloud size={18} />
              </div>
              <div className="brand-text">
                <span className="brand-title">Dynova</span>
                <span className="brand-subtitle">Cloud</span>
              </div>
            </div>
            <p className="footer-tagline">DIGITAL SOLUTIONS. REAL GROWTH.</p>
            <p className="footer-bio">
              We design, engineer, and scale high-performance digital platforms and cloud solutions for modern enterprise growth.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Solutions</h4>
              <a href="#services">Digital Marketing</a>
              <a href="#services">Social Media Management</a>
              <a href="#services">Meta Ads</a>
              <a href="#services">Web Development</a>
              <a href="#services">Analytics & Reporting</a>
              <a href="#services">E-Commerce Solutions</a>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Dynova</a>
              <a href="#services">Our Capabilities</a>
              <a href="#testimonials">Client Voices</a>
              <a href="#hero">Start a Project</a>
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
  );
}

export default App;
