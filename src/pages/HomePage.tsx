import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero/Hero';
import SEO from '../components/SEO/SEO';
import { generateOrganizationSchema, generateWebSiteSchema } from '../lib/seo';

const organizationSchema = generateOrganizationSchema({
  name: 'Dynova Cloud',
  url: 'https://dynova.cloud',
  logo: 'https://dynova.cloud/logo.png',
  description: 'Dynova Cloud unifies custom website development, high-converting e-commerce, iconic logo designing, and data-driven digital marketing into one scalable growth engine.',
  sameAs: ['https://www.instagram.com/dynovacloud'],
});

const websiteSchema = generateWebSiteSchema({
  name: 'Dynova Cloud',
  url: 'https://dynova.cloud',
  description: 'Dynova Cloud unifies custom website development, high-converting e-commerce, iconic logo designing, and data-driven digital marketing into one scalable growth engine.',
  inLanguage: 'en',
});

const About = lazy(() => import('../components/About/About'));
const Services = lazy(() => import('../components/Services/Services'));
const Process = lazy(() => import('../components/Process/Process'));
const Portfolio = lazy(() => import('../components/Portfolio/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'));
const CTA = lazy(() => import('../components/CTA/CTA'));
const Contact = lazy(() => import('../components/Contact/Contact'));

interface LazySectionProps {
  id: string;
  minHeight: string;
  rootMargin?: string;
  children: React.ReactNode;
}

/**
 * Viewport-gated section: only fetches and mounts heavy below-the-fold
 * components when the user approaches within rootMargin (default 500px)
 * or if directly navigated to via anchor hash.
 */
const LazySection: React.FC<LazySectionProps> = ({
  id,
  minHeight,
  rootMargin = '500px 0px',
  children,
}) => {
  const [isNearViewport, setIsNearViewport] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (!('IntersectionObserver' in window)) return true;
    return window.location.hash === `#${id}`;
  });
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isNearViewport) return;
    const el = placeholderRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isNearViewport, rootMargin]);

  // Support direct in-page hash navigation (e.g. clicking navbar link to off-screen section)
  useEffect(() => {
    if (isNearViewport) return;
    const onHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setIsNearViewport(true);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [isNearViewport, id]);

  if (!isNearViewport) {
    return (
      <div
        ref={placeholderRef}
        id={id}
        style={{ minHeight }}
        aria-hidden="true"
      />
    );
  }

  return (
    <Suspense fallback={<div style={{ minHeight }} />}>
      {children}
    </Suspense>
  );
};

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Dynova Cloud | Digital Engineering & Marketing Agency"
        description="Dynova Cloud builds high-performance web platforms, e-commerce storefronts, brand identity systems, and data-driven digital marketing engines."
        canonical="https://dynova.cloud/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main>
        <Hero />
        <LazySection id="about" minHeight="500px">
          <About />
        </LazySection>
        <LazySection id="services" minHeight="600px">
          <Services />
        </LazySection>
        <LazySection id="process" minHeight="600px">
          <Process />
        </LazySection>
        <LazySection id="work" minHeight="800px">
          <Portfolio />
        </LazySection>
        <LazySection id="testimonials" minHeight="500px">
          <Testimonials />
        </LazySection>
        <LazySection id="cta" minHeight="400px">
          <CTA />
        </LazySection>
        <LazySection id="contact" minHeight="600px">
          <Contact />
        </LazySection>
      </main>
    </>
  );
};

export default HomePage;
