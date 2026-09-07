import React, { Suspense, lazy, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import SEO from '../components/SEO/SEO';

const About = lazy(() => import('../components/About/About'));
const Services = lazy(() => import('../components/Services/Services'));
const Process = lazy(() => import('../components/Process/Process'));
const Portfolio = lazy(() => import('../components/Portfolio/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'));
const CTA = lazy(() => import('../components/CTA/CTA'));
const Contact = lazy(() => import('../components/Contact/Contact'));

export const HomePage: React.FC = () => {
  useEffect(() => {
    // Preload all below-the-fold chunks right after initial paint during idle time
    const preload = () => {
      import('../components/About/About');
      import('../components/Services/Services');
      import('../components/Process/Process');
      import('../components/Portfolio/Portfolio');
      import('../components/Testimonials/Testimonials');
      import('../components/CTA/CTA');
      import('../components/Contact/Contact');
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preload);
    } else {
      setTimeout(preload, 100);
    }
  }, []);

  return (
    <>
      <SEO
        title="Dynova Cloud | Website Development, E-Commerce, Logo Designing & Digital Marketing"
        description="Dynova Cloud unifies custom website development, high-converting e-commerce, iconic logo designing, and data-driven digital marketing into one scalable growth engine."
      />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '500px' }} />}>
          <About />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <Process />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '800px' }} />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '500px' }} />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <CTA />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
