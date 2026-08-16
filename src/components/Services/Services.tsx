import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import BlurText from '../BlurText/BlurText';

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
    tags: ['Omnichannel Growth', 'Technical SEO', 'Conversion Optimization'],
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
    tags: ['React & Next.js', 'Sub-second TTFB', 'Clean Architecture'],
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
    tags: ['Headless Stores', 'Instant Checkout', 'Conversion Rate'],
    metricLabel: 'Checkout Speed',
    metricValue: '< 1.2s',
    image: imgEcommerce
  }
];

// Interactive Spotlight & Animated Border Card Component
const BentoSpotlightCard: React.FC<{ service: ServiceItem; index: number }> = React.memo(({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  // Vivid cursor-following spotlight glow
  const spotlightBackground = useMotionTemplate`
    radial-gradient(380px circle at ${mouseX}px ${mouseY}px, rgba(255, 195, 0, 0.12), transparent 80%)
  `;

  // Cursor-following border highlight
  const spotlightBorder = useMotionTemplate`
    radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(255, 214, 10, 0.55), transparent 75%)
  `;

  return (
    <motion.div
      ref={cardRef}
      className={`bento-card-container ${isHovered ? 'is-card-hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Animated Rotating Conic Border Beam on Hover */}
      <div className="bento-conic-border-wrapper">
        <div className="bento-conic-border-spinner" />
      </div>

      {/* 2. Dynamic Cursor Spotlight Border Tracker */}
      <motion.div
        className="bento-spotlight-border"
        style={{ background: spotlightBorder }}
      />

      {/* Card Inner Container */}
      <div className="bento-card-inner">
        {/* 3. Dynamic Cursor Spotlight Inner Surface Glow */}
        <motion.div
          className="bento-spotlight-glow"
          style={{ background: spotlightBackground }}
        />

        {/* Card Header */}
        <div className="bento-card-header">
          <div className="bento-meta-wrap">
            <span className="bento-num">{service.num}</span>
            <span className="bento-category">{service.category}</span>
          </div>

          <a href="#hero" className="bento-arrow-btn" title="Scope service">
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Card Title & Description with Fade Reveal */}
        <div className="bento-body">
          <h3 className="bento-title">{service.title}</h3>
          <motion.p 
            className="bento-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
          >
            {service.description}
          </motion.p>
        </div>

        {/* Visual Showcase Stage */}
        <div className="bento-visual-frame">
          <img src={service.image} alt={service.title} className="bento-img" loading="lazy" decoding="async" />
          <div className="bento-visual-overlay" />
          
          {/* Live Metric Badge */}
          <div className="bento-metric-pill">
            <Sparkles size={13} className="metric-sparkle" />
            <span className="bento-metric-val">{service.metricValue}</span>
            <span className="bento-metric-lbl">{service.metricLabel}</span>
          </div>
        </div>

        {/* Tags Matrix */}
        <div className="bento-tags-footer">
          {service.tags.map((tag) => (
            <span key={tag} className="bento-tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Eyebrow Header */}
        <div className="services-header">
          <motion.div 
            className="services-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="services-square" />
            <span className="services-eyebrow-text">OUR EXPERTISE // CAPABILITIES</span>
          </motion.div>

          {/* Section Title with BlurText reveal */}
          <h2 className="services-title-wrapper">
            <BlurText
              text="Engineered Digital Capabilities"
              delay={80}
              className="services-title"
              direction="bottom"
              stepDuration={0.35}
            />
          </h2>

          {/* Section Subtitle with Fade Reveal */}
          <motion.p 
            className="services-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Six high-performance disciplines engineered to accelerate brand authority, cloud infrastructure, and revenue growth.
          </motion.p>
        </div>

        {/* 3x2 Bento Grid with Dynamic Cursor Spotlight & Animated Border */}
        <div className="services-bento-grid">
          {SERVICES_DATA.map((service, index) => (
            <BentoSpotlightCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
