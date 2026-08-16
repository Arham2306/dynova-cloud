import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Solutions', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openLeadModal } = useLeadModal();

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
        <a href="#hero" className="navbar-brand" aria-label="Dynova Cloud Home">
          <img src={logoImg} alt="Dynova Cloud" className="navbar-logo-img" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <button 
            type="button" 
            onClick={() => openLeadModal()} 
            className="cta-button-primary"
            aria-label="Open project blueprint modal"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={16} className="cta-icon" />
          </button>

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
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-cta-wrapper">
              <button 
                type="button" 
                className="cta-button-primary" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadModal();
                }}
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
