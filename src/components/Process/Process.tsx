import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import BlurText from '../BlurText/BlurText';

import imgDiscovery from '../../assets/process/discovery.jpg';
import imgDesign from '../../assets/process/design.jpg';
import imgEngineering from '../../assets/process/engineering.jpg';
import imgGrowth from '../../assets/process/growth.jpg';

import './Process.css';

interface ProcessItem {
  id: string;
  num: string;
  phaseTag: string;
  title: string;
  duration: string;
  description: string;
  metricVal: string;
  metricLabel: string;
  image: string;
  deliverables: string[];
  techStack: string[];
}

const PROCESS_DATA: ProcessItem[] = [
  {
    id: 'discovery',
    num: '01',
    phaseTag: 'PHASE 01 // STRATEGY',
    title: 'Diagnostic & Market Intelligence',
    duration: 'Weeks 1 – 2',
    description: 'Forensic audit of your brand footprint, competitor growth vectors, and user conversion funnels to build a quantitative roadmap with zero guesswork.',
    metricVal: '360°',
    metricLabel: 'Audit Scope',
    image: imgDiscovery,
    deliverables: [
      'Full-Funnel Conversion Audit',
      'Competitor Keyword & Moat Modeling',
      'Technical Architecture Feasibility',
      'Quarterly Execution Blueprint'
    ],
    techStack: ['GA4', 'Hotjar', 'SEMrush API', 'Attribution Matrix']
  },
  {
    id: 'architecture',
    num: '02',
    phaseTag: 'PHASE 02 // DESIGN',
    title: 'High-Impact Design Architecture',
    duration: 'Weeks 2 – 4',
    description: 'Interactive high-fidelity prototypes and conversion-first UI/UX systems. Every layout, typography scale, and interaction is engineered to drive user action.',
    metricVal: '+48%',
    metricLabel: 'Projected Lift',
    image: imgDesign,
    deliverables: [
      'Tokenized Design System & UI Kit',
      'Interactive Figma Prototyping',
      'High-Converting Checkout Funnels',
      'Mobile-First Responsive Layouts'
    ],
    techStack: ['Figma Tokens', 'Framer Motion', 'Tailwind Grid', 'AA+ Compliance']
  },
  {
    id: 'engineering',
    num: '03',
    phaseTag: 'PHASE 03 // BUILD',
    title: 'Production Engineering & Deploy',
    duration: 'Weeks 4 – 7',
    description: 'Ultra-fast React and Next.js web platforms with sub-second TTFB, automated CI/CD deployment pipelines, and enterprise-grade security standards.',
    metricVal: '< 280ms',
    metricLabel: 'Global TTFB',
    image: imgEngineering,
    deliverables: [
      'Modern Next.js & React Architectures',
      'Custom API & Webhook Pipelines',
      'Headless Storefronts & 1-Click Pay',
      'Global Edge CDN & Core Web Vitals'
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Cloudflare Edge']
  },
  {
    id: 'hyper-scale',
    num: '04',
    phaseTag: 'PHASE 04 // SCALE',
    title: 'Hyper-Scale & Revenue Optimization',
    duration: 'Ongoing Growth',
    description: 'Post-launch algorithmic ad scaling, aggressive multi-variant A/B testing, and real-time attribution dashboards to continuously compound business ROI.',
    metricVal: '4.2x',
    metricLabel: 'Target ROAS',
    image: imgGrowth,
    deliverables: [
      'Algorithmic Meta & Search Scaling',
      'Multi-Variant A/B Conversion Tests',
      'Live Executive Telemetry Dashboards',
      'Iterative Growth Feature Cycles'
    ],
    techStack: ['Meta Ads API', 'Segment CDP', 'BigQuery BI', 'Looker Studio']
  }
];

// Luxury Interactive Spotlight Process Card
const ProcessCard: React.FC<{ item: ProcessItem; index: number }> = ({ item, index }) => {
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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const spotlightBackground = useMotionTemplate`
    radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(255, 195, 0, 0.12), transparent 80%)
  `;

  const spotlightBorder = useMotionTemplate`
    radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(255, 214, 10, 0.5), transparent 75%)
  `;

  return (
    <motion.div
      ref={cardRef}
      className={`process-bento-container ${isHovered ? 'is-card-hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Animated Conic Border Beam */}
      <div className="process-conic-border-wrapper">
        <div className="process-conic-border-spinner" />
      </div>

      {/* 2. Cursor Spotlight Border Tracker */}
      <motion.div
        className="process-spotlight-border"
        style={{ background: spotlightBorder }}
      />

      {/* Card Inner Surface */}
      <div className="process-bento-inner">
        {/* Cursor Glow */}
        <motion.div
          className="process-spotlight-glow"
          style={{ background: spotlightBackground }}
        />

        {/* Visual Showcase Stage */}
        <div className="process-visual-frame">
          <img src={item.image} alt={item.title} className="process-img" />
          <div className="process-visual-overlay" />

          {/* Floating Top Header on Image */}
          <div className="process-img-top-bar">
            <span className="process-num-pill">{item.num}</span>
            <span className="process-duration-pill">{item.duration}</span>
          </div>

          {/* Live Metric Badge */}
          <div className="process-metric-pill">
            <Sparkles size={12} className="process-metric-sparkle" />
            <span className="process-metric-val">{item.metricVal}</span>
            <span className="process-metric-lbl">{item.metricLabel}</span>
          </div>
        </div>

        {/* Phase Header */}
        <div className="process-card-content">
          <div className="process-tag-row">
            <span className="process-phase-tag">{item.phaseTag}</span>
          </div>

          <h3 className="process-card-title">{item.title}</h3>
          <p className="process-card-desc">{item.description}</p>
        </div>

        {/* Deliverables Checklist */}
        <div className="process-deliverables-wrap">
          <span className="process-deliverables-title">CORE DELIVERABLES:</span>
          <div className="process-deliverables-list">
            {item.deliverables.map((deliv, dIdx) => (
              <div key={dIdx} className="process-deliv-item">
                <CheckCircle2 size={13} className="process-deliv-icon" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips Footer */}
        <div className="process-tech-footer">
          {item.techStack.map((tech) => (
            <span key={tech} className="process-tech-pill">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="process-section">
      <div className="process-container">
        {/* Section Header */}
        <div className="process-header">
          <motion.div 
            className="process-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="process-square" />
            <span className="process-eyebrow-text">OUR METHODOLOGY // HOW WE BUILD</span>
          </motion.div>

          <h2 className="process-title-wrapper">
            <BlurText
              text="Four Phases. Zero Guesswork."
              delay={75}
              className="process-title"
              direction="bottom"
              stepDuration={0.35}
            />
          </h2>

          <motion.p 
            className="process-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A battle-tested 4-phase framework engineered to eliminate guesswork, accelerate engineering velocity, and compound enterprise revenue.
          </motion.p>
        </div>

        {/* 4-Card Luxury Process Bento Grid */}
        <div className="process-bento-grid">
          {PROCESS_DATA.map((item, index) => (
            <ProcessCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
