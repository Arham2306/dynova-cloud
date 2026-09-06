import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef<string>(pathname);

  useEffect(() => {
    const isDifferentPage = prevPathnameRef.current !== pathname;
    prevPathnameRef.current = pathname;

    // If a hash exists (e.g. #services, #about, #work, #contact)
    if (hash) {
      const lenis = (window as any).__lenis;

      // If switching from another page, reset scroll position to top first to prevent showing old scroll position
      if (isDifferentPage) {
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }

      const scrollToTarget = () => {
        const element = document.querySelector(hash);
        if (element) {
          if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(element, { offset: -90, duration: 1.0 });
          } else {
            const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: Math.max(0, yCoordinate), behavior: 'smooth' });
          }
        }
      };

      // Delay on page transition so DOM can finish mounting and layout is stabilized
      const timer = setTimeout(scrollToTarget, isDifferentPage ? 100 : 20);
      return () => clearTimeout(timer);
    } else {
      // If no hash is present, reset scroll to the very top (0, 0)
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  // Also handle in-page hashchange events
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash) {
        const element = document.querySelector(currentHash);
        if (element) {
          const lenis = (window as any).__lenis;
          if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(element, { offset: -90, duration: 1.0 });
          } else {
            const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: Math.max(0, yCoordinate), behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
};

export default ScrollManager;
