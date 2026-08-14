import React, { useState, useEffect } from 'react';
import { Cloud, ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Cloud className="brand-icon" size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Dynova</span>
            <span className="brand-subtitle">Cloud</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav">
          <a href="#solutions" className="nav-link">
            Solutions
          </a>
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#capabilities" className="nav-link">
            Capabilities
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <a href="#contact" className="cta-button-primary">
            <span>Start a Project</span>
            <ArrowUpRight size={16} className="cta-icon" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <nav className="mobile-nav">
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <div className="mobile-cta-wrapper">
              <a href="#contact" className="cta-button-primary" onClick={() => setMobileMenuOpen(false)}>
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
