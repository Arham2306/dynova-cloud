import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLeadModal } from '../../context/LeadModalContext';
import logoImg from '../../assets/logo-png.png';
import './Navbar.css';

const SERVICES_DROPDOWN_DATA = [
  { title: 'Website Development', path: '/services/website-development' },
  { title: 'E-Commerce', path: '/services/ecommerce' },
  { title: 'Logo Designing', path: '/services/logo-designing' },
  { title: 'Digital Marketing', path: '/services/digital-marketing' },
];

interface NavLinkItem {
  label: string;
  href: string;
  isDropdown?: boolean;
}

const NAV_ITEMS: NavLinkItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services', isDropdown: true },
  { label: 'Process', href: '/#process' },
  { label: 'Portfolio', href: '/#work' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimerRef = useRef<number | null>(null);
  const { openLeadModal } = useLeadModal();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const lenis = (window as any).__lenis;
      const currentScroll = (lenis && typeof lenis.scroll === 'number')
        ? lenis.scroll
        : (window.scrollY || document.documentElement.scrollTop || 0);
      setScrolled(currentScroll > 10);
    };

    // Immediate check on mount and whenever location/route changes
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Connect to Lenis smooth scroll instance if available
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.on === 'function') {
      lenis.on('scroll', handleScroll);
    }

    // Polling fallback to attach to Lenis if initialized slightly after Navbar mounts
    const interval = setInterval(() => {
      const currentLenis = (window as any).__lenis;
      if (currentLenis && typeof currentLenis.on === 'function') {
        currentLenis.on('scroll', handleScroll);
        clearInterval(interval);
      }
      handleScroll();
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      handleScroll();
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
      const activeLenis = (window as any).__lenis;
      if (activeLenis && typeof activeLenis.off === 'function') {
        activeLenis.off('scroll', handleScroll);
      }
    };
  }, [location]);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      window.clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = window.setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo - Links to Root Site URL */}
        <Link to="/" className="navbar-brand" aria-label="Dynova Cloud Home">
          <img src={logoImg} alt="Dynova Cloud - Digital Marketing and Engineering Agency" className="navbar-logo-img" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav">
          {NAV_ITEMS.map((item) => {
            if (item.isDropdown) {
              return (
                <div
                  key={item.label}
                  className={`nav-dropdown-wrapper ${servicesDropdownOpen ? 'is-open' : ''}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a 
                    href={item.href} 
                    className={`nav-link nav-dropdown-trigger ${servicesDropdownOpen ? 'is-active' : ''}`}
                    onClick={() => setServicesDropdownOpen(false)}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} className={`dropdown-chevron ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </a>

                  {/* Minimalist Glassmorphic Dropdown Menu */}
                  <div className={`nav-dropdown-menu ${servicesDropdownOpen ? 'is-visible' : ''}`}>
                    <div className="nav-dropdown-menu-inner">
                      {SERVICES_DROPDOWN_DATA.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="dropdown-item-link"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a 
                key={item.label} 
                href={item.href} 
                className="nav-link"
              >
                {item.label}
              </a>
            );
          })}
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
            {NAV_ITEMS.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="mobile-dropdown-group">
                    <div className="mobile-dropdown-header-row">
                      <a 
                        href={item.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-nav-link"
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        className="mobile-dropdown-toggle-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileServicesOpen(!mobileServicesOpen);
                        }}
                        aria-label="Toggle Services submenu"
                      >
                        <ChevronDown size={18} className={`mobile-chevron ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="mobile-submenu-list">
                        {SERVICES_DROPDOWN_DATA.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="mobile-submenu-link"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
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
