import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

import imgDigitalMarketing from '../../assets/services/digital-marketing.jpg';
import imgSocialMedia from '../../assets/services/social-media.jpg';
import imgMetaAds from '../../assets/services/meta-ads.jpg';
import imgWebDev from '../../assets/services/web-development.jpg';
import imgAnalytics from '../../assets/services/analytics-reporting.jpg';
import imgEcommerce from '../../assets/services/ecommerce-solutions.jpg';

import './Services.css';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metricLabel: string;
  metricValue: string;
  image: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'digital-marketing',
    num: '01',
    title: 'Digital Marketing',
    category: 'Growth & Acquisition',
    description: 'Data-driven omnichannel acquisition funnels, technical SEO architectures, and full-funnel conversion engines.',
    tags: ['Omnichannel Growth', 'Technical SEO', 'Conversion Rate'],
    metricLabel: 'Acquisition Surge',
    metricValue: '+185%',
    image: imgDigitalMarketing
  },
  {
    id: 'social-media',
    num: '02',
    title: 'Social Media Management',
    category: 'Brand & Distribution',
    description: 'Authoritative brand ecosystems, high-engagement content production, and community scaling across global channels.',
    tags: ['Content Strategy', 'Community Scaling', 'Viral Reach'],
    metricLabel: 'Monthly Reach',
    metricValue: '2.4M+',
    image: imgSocialMedia
  },
  {
    id: 'meta-ads',
    num: '03',
    title: 'Meta Ads',
    category: 'Paid Media & ROAS',
    description: 'Algorithmic advertising architectures across Meta engineered with creative testing matrices and maximized ROAS.',
    tags: ['Algorithmic Retargeting', 'Creative Testing', 'Target ROAS'],
    metricLabel: 'Target ROAS',
    metricValue: '3.99x',
    image: imgMetaAds
  },
  {
    id: 'web-development',
    num: '04',
    title: 'Web Development',
    category: 'Engineering & Systems',
    description: 'Bespoke web platforms, scalable React/Next.js architectures, and ultra-fast digital experiences built for speed.',
    tags: ['React & Next.js', 'Sub-second TTFB', 'Clean Code'],
    metricLabel: 'Core Web Vitals',
    metricValue: '99.8%',
    image: imgWebDev
  },
  {
    id: 'analytics-reporting',
    num: '05',
    title: 'Analytics & Reporting',
    category: 'Data & Telemetry',
    description: 'Enterprise business intelligence dashboards, real-time telemetry, and multi-touch attribution for complete clarity.',
    tags: ['BI Telemetry', 'Attribution Modeling', 'Live Dashboards'],
    metricLabel: 'Data SLA',
    metricValue: '99.9%',
    image: imgAnalytics
  },
  {
    id: 'ecommerce-solutions',
    num: '06',
    title: 'E-Commerce Solutions',
    category: 'Commerce Architecture',
    description: 'Headless storefronts, instant 1-click checkout flows, and high-volume commerce architectures that maximize revenue.',
    tags: ['Headless Stores', 'Instant Checkout', 'High Conversion'],
    metricLabel: 'Checkout Speed',
    metricValue: '< 1.2s',
    image: imgEcommerce
  }
];

export const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStep, setCardStep] = useState(408); // 380px width + 28px gap
  const viewportRef = useRef<HTMLDivElement>(null);

  // Update step size dynamically based on screen width
  const updateStep = () => {
    if (window.innerWidth <= 768) {
      setCardStep(320); // 300px + 20px gap
    } else if (window.innerWidth <= 1024) {
      setCardStep(364); // 340px + 24px gap
    } else {
      setCardStep(408); // 380px + 28px gap
    }
  };

  useEffect(() => {
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(SERVICES_DATA.length - 1, prev + 1));
  };

  // Drag Gesture Handling
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 40;
    const velocityThreshold = 300;

    if (
      (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) &&
      currentIndex < SERVICES_DATA.length - 1
    ) {
      setCurrentIndex((prev) => prev + 1);
    } else if (
      (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) &&
      currentIndex > 0
    ) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Progress percentage (0% to 100%)
  const progressPercent = ((currentIndex + 1) / SERVICES_DATA.length) * 100;

  return (
    <section id="services" className="services-section carousel-mode">
      <div className="services-container">
        {/* Header with Navigation Controls */}
        <div className="carousel-header-row">
          <div className="services-header">
            <div className="services-eyebrow">
              <span className="services-square" />
              <span className="services-eyebrow-text">OUR EXPERTISE // CAPABILITIES</span>
            </div>
            <h2 className="services-title">Engineered Digital Capabilities</h2>
            <p className="services-subtitle">
              Drag, swipe, or use the navigation controls to explore our six specialized digital disciplines.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="carousel-nav-controls">
            <button 
              type="button" 
              className="carousel-btn prev-btn" 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous service"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              type="button" 
              className="carousel-btn next-btn" 
              onClick={handleNext}
              disabled={currentIndex === SERVICES_DATA.length - 1}
              aria-label="Next service"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Panoramic Drag Track */}
        <div className="carousel-viewport" ref={viewportRef}>
          <motion.div
            className="carousel-track"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentIndex * cardStep }}
            transition={{
              type: 'spring',
              stiffness: 240,
              damping: 28,
              mass: 0.8
            }}
          >
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={service.id} 
                className={`panoramic-card ${currentIndex === index ? 'is-active-card' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="panoramic-card-inner">
                  {/* Top Meta */}
                  <div className="panoramic-card-header">
                    <div className="panoramic-meta">
                      <span className="panoramic-num">{service.num}</span>
                      <span className="panoramic-category">{service.category}</span>
                    </div>

                    <a href="#hero" className="panoramic-arrow-link" title="Scope service">
                      <ArrowUpRight size={17} />
                    </a>
                  </div>

                  {/* Title & Narrative */}
                  <div className="panoramic-body">
                    <h3 className="panoramic-title">{service.title}</h3>
                    <p className="panoramic-desc">{service.description}</p>
                  </div>

                  {/* Media Visual Showcase */}
                  <div className="panoramic-media-frame">
                    <img src={service.image} alt={service.title} className="panoramic-img" />
                    <div className="panoramic-media-gradient" />
                    
                    {/* Live Metric Badge */}
                    <div className="panoramic-metric-badge">
                      <Sparkles size={12} className="metric-sparkle" />
                      <span className="metric-val">{service.metricValue}</span>
                      <span className="metric-lbl">{service.metricLabel}</span>
                    </div>
                  </div>

                  {/* Tags Footer */}
                  <div className="panoramic-tags-footer">
                    {service.tags.map((tag) => (
                      <span key={tag} className="panoramic-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Progress Bar & Counter */}
        <div className="carousel-bottom-deck">
          <div className="carousel-counter">
            <span className="counter-current">0{currentIndex + 1}</span>
            <span className="counter-divider">/</span>
            <span className="counter-total">0{SERVICES_DATA.length}</span>
          </div>

          <div className="carousel-progress-track">
            <div 
              className="carousel-progress-bar" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>

          <div className="carousel-drag-hint">
            <span>DRAG OR CLICK ARROWS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
