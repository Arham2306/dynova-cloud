import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion';
import './ScrollToTop.css';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top-btn ${visible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
