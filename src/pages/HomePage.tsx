import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Process from '../components/Process/Process';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';

export const HomePage: React.FC = () => {
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
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
