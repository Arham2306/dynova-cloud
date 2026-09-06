import React, { Suspense, lazy, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import SEO from '../components/SEO/SEO';

const Process = lazy(() => import('../components/Process/Process'));
const Portfolio = lazy(() => import('../components/Portfolio/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'));
const CTA = lazy(() => import('../components/CTA/CTA'));
const Contact = lazy(() => import('../components/Contact/Contact'));

export const HomePage: React.FC = () => {
  useEffect(() => {
    // Preload below-the-fold chunks after first paint during idle time
    const preload = () => {
      import('../components/Process/Process');
      import('../components/Portfolio/Portfolio');
      import('../components/Testimonials/Testimonials');
      import('../components/CTA/CTA');
      import('../components/Contact/Contact');
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preload);
    } else {
      setTimeout(preload, 1200);
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
        <About />
        <Services />
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
