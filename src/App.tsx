import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { Cloud } from 'lucide-react';
import './App.css';

export function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
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
              <a href="#hero">Web Development</a>
              <a href="#hero">E-Commerce</a>
              <a href="#hero">Digital Marketing</a>
              <a href="#hero">Meta Ads</a>
              <a href="#hero">Analytics & Reporting</a>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <a href="#hero">About Dynova</a>
              <a href="#hero">Featured Work</a>
              <a href="#hero">Start a Project</a>
              <a href="#hero">Security & SLA</a>
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
