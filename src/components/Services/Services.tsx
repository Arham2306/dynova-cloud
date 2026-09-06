import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLeadModal } from '../../context/LeadModalContext';
import BlurText from '../BlurText/BlurText';

import imgWebDev from '../../assets/services/Web Development.jpg';
import imgEcommerce from '../../assets/services/E-Commerce.jpg';
import imgLogoDesigning from '../../assets/services/Logo Designing.jpg';
import imgDigitalMarketing from '../../assets/services/Digital Marketing.jpg';

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
    id: 'website-development',
    num: '01',
    title: 'Website Development',
    category: 'Engineering & Architecture',
    description: 'Bespoke web platforms, scalable React/Next.js architectures, and ultra-fast digital experiences engineered for peak speed and conversion.',
    tags: ['React & Next.js', 'Sub-second TTFB', 'Clean Architecture'],
    metricLabel: 'Core Web Vitals',
    metricValue: '99.8%',
    image: imgWebDev
  },
  {
    id: 'ecommerce',
    num: '02',
    title: 'E-Commerce',
    category: 'Storefronts & Conversions',
    description: 'High-conversion Shopify & headless commerce architectures, frictionless 1-click checkout funnels, and enterprise scalability.',
    tags: ['Shopify Plus', 'Headless Stores', 'Frictionless Checkout'],
    metricLabel: 'Checkout Speed',
    metricValue: '< 1.2s',
    image: imgEcommerce
  },
  {
    id: 'logo-designing',
    num: '03',
    title: 'Logo Designing',
    category: 'Brand Identity & Aesthetics',
    description: 'Distinctive brand identities, iconic vector marks, comprehensive design systems, and visual guidelines that command authority.',
    tags: ['Brand Identity', 'Vector Systems', 'Visual Guidelines'],
    metricLabel: 'Brand Recall',
    metricValue: '96.4%',
    image: imgLogoDesigning
  },
  {
    id: 'digital-marketing',
    num: '04',
    title: 'Digital Marketing',
    category: 'Growth & Acquisition',
    description: 'Data-driven omnichannel acquisition funnels, technical SEO dominance, and high-ROAS paid media campaigns built for revenue.',
    tags: ['Technical SEO', 'Paid Media & ROAS', 'Omnichannel Funnels'],
    metricLabel: 'Acquisition Surge',
    metricValue: '+185%',
    image: imgDigitalMarketing
  }
];

// Interactive Spotlight & Animated Border Card Component
const BentoSpotlightCard: React.FC<{ service: ServiceItem; index: number }> = React.memo(({ service, index }) => {
  const { openLeadModal } = useLeadModal();
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

          <button
            type="button"
            onClick={() => openLeadModal(service.title)}
            className="bento-arrow-btn"
            title={`Scope ${service.title}`}
            aria-label={`Scope ${service.title}`}
          >
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Card Title & Description with Fade Reveal */}
        <div className="bento-body">
          <Link to={`/services/${service.id}`} className="bento-title-link">
            <h3 className="bento-title">{service.title}</h3>
          </Link>
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
        <Link to={`/services/${service.id}`} className="bento-visual-frame" aria-label={`View ${service.title} service blueprint`}>
          <img src={service.image} alt={service.title} className="bento-img" loading="lazy" decoding="async" />
        </Link>

        {/* Tags Matrix & Blueprint Link */}
        <div className="bento-footer-row">
          <div className="bento-tags-footer">
            {service.tags.map((tag) => (
              <span key={tag} className="bento-tag-pill">{tag}</span>
            ))}
          </div>
          <Link to={`/services/${service.id}`} className="bento-explore-blueprint-link">
            <span>Explore Blueprint</span>
            <ArrowUpRight size={13} />
          </Link>
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
            <span className="services-eyebrow-text">OUR EXPERTISE // CORE CAPABILITIES</span>
          </motion.div>

          {/* Section Title with BlurText reveal */}
          <h2 className="services-title-wrapper">
            <BlurText
              text="Core Digital Growth Capabilities"
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
            Four integrated growth disciplines built to capture organic search visibility, scale high-ROI paid acquisition, and engineer full-stack digital experiences that convert.
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
