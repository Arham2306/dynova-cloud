import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
import BlurText from '../BlurText/BlurText';

import imgAetheria from '../../assets/portfolio/aetheria.webp';
import imgApex from '../../assets/portfolio/apex.webp';
import imgHorizon from '../../assets/portfolio/horizon.webp';
import imgNexa from '../../assets/portfolio/nexa.webp';
import imgKura from '../../assets/portfolio/kura.webp';
import imgOmniscale from '../../assets/portfolio/omniscale.webp';

import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  num: string;
  client: string;
  year: string;
  category: string;
  title: string;
  description: string;
  impactMetric: string;
  metricLabel: string;
  image: string;
  techStack: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aetheria',
    num: '01',
    client: 'Aetheria Luxury',
    year: '2024',
    category: 'HEADLESS COMMERCE',
    title: 'Haute Couture Storefront & 3D Garment Runway',
    description: 'Custom Next.js & Shopify Plus commerce architecture with real-time 3D garments, micro-interactions, and 1-click accelerated checkout.',
    impactMetric: '+148%',
    metricLabel: 'Mobile Conversion Lift',
    image: imgAetheria,
    techStack: ['Next.js 15', 'Shopify Plus', 'Three.js', 'Tailwind']
  },
  {
    id: 'apex-health',
    num: '02',
    client: 'Apex Health Intelligence',
    year: '2024',
    category: 'WEB & APP ENGINEERING',
    title: 'Clinical Telemetry & Real-Time Biometrics',
    description: 'Sub-second WebSocket patient telemetry dashboard with HIPAA compliance, enterprise encryption, and multi-tenant security.',
    impactMetric: '99.99%',
    metricLabel: 'Uptime & SLA Delivered',
    image: imgApex,
    techStack: ['React', 'TypeScript', 'WebSockets', 'Cloudflare Edge']
  },
  {
    id: 'horizon-fintech',
    num: '03',
    client: 'Horizon Fintech',
    year: '2024',
    category: 'PERFORMANCE MARKETING',
    title: 'Algorithmic Acquisition Scaling & Attribution',
    description: 'Multi-variant creative testing pipeline across Meta and Google, scaling monthly revenue run-rate to $128M+ YTD.',
    impactMetric: '4.2x',
    metricLabel: 'Attributed Return on Ad Spend',
    image: imgHorizon,
    techStack: ['Meta Ads API', 'Segment CDP', 'BigQuery BI', 'Looker Studio']
  },
  {
    id: 'nexa-commerce',
    num: '04',
    client: 'NexaCommerce',
    year: '2024',
    category: 'UI/UX SYSTEMS',
    title: 'Enterprise Design Token Kit & Wireframes',
    description: 'Bespoke design system featuring 40+ accessible component tokens, interactive wireframes, and standardized motion storyboards.',
    impactMetric: '40+',
    metricLabel: 'Production Component Tokens',
    image: imgNexa,
    techStack: ['Figma Tokens', 'Framer Motion', 'Tailwind Grid', 'Storybook']
  },
  {
    id: 'kura-studios',
    num: '05',
    client: 'Kura Studios',
    year: '2024',
    category: '3D INTERACTIVE WEB',
    title: 'Immersive WebGL Brand Flagship & Global Launch',
    description: 'Award-winning digital flagship experience featuring WebGL kinetic sculptures, fluid transitions, and edge caching.',
    impactMetric: '< 210ms',
    metricLabel: 'Global TTFB Average',
    image: imgKura,
    techStack: ['Next.js 15', 'GSAP', 'WebGL / GLSL', 'Vercel Edge']
  },
  {
    id: 'omniscale',
    num: '06',
    client: 'OmniScale Corp',
    year: '2024',
    category: 'CLOUD INFRASTRUCTURE',
    title: 'Multi-Region Serverless Cloud Architecture',
    description: 'Cloud modernization migrating 64,000+ edge nodes across Frankfurt, New York, and Tokyo with automated CI/CD.',
    impactMetric: '-65%',
    metricLabel: 'Global Latency Reduction',
    image: imgOmniscale,
    techStack: ['AWS Serverless', 'Docker', 'Terraform', 'Kubernetes']
  }
];

// Single Stackable Portfolio Card
const StackablePortfolioCard: React.FC<{ 
  item: CaseStudy; 
  index: number;
  setCardRef: (el: HTMLDivElement | null) => void;
}> = React.memo(({ item, index, setCardRef }) => {
  const { openLeadModal } = useLeadModal();
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardInnerRef.current) return;
    const rect = cardInnerRef.current.getBoundingClientRect();
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
    radial-gradient(550px circle at ${mouseX}px ${mouseY}px, rgba(255, 195, 0, 0.12), transparent 80%)
  `;

  const spotlightBorder = useMotionTemplate`
    radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255, 214, 10, 0.45), transparent 75%)
  `;

  return (
    <div 
      ref={setCardRef}
      className="portfolio-stack-card-container"
      style={{ zIndex: index + 10 }}
    >
      <div
        ref={cardInnerRef}
        className={`portfolio-stack-card ${isHovered ? 'is-hovered' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 1. Animated Conic Border Beam */}
        <div className="stack-conic-border-wrapper">
          <div className="stack-conic-border-spinner" />
        </div>

        {/* 2. Cursor Spotlight Border */}
        <motion.div
          className="stack-spotlight-border"
          style={{ background: spotlightBorder }}
        />

        {/* 3. Card Inner Surface */}
        <div className="portfolio-stack-inner">
          {/* Cursor Glow */}
          <motion.div
            className="stack-spotlight-glow"
            style={{ background: spotlightBackground }}
          />

          {/* Left Column: Narrative & Metrics */}
          <div className="stack-card-left">
            <div className="stack-card-meta">
              <span className="stack-card-index">{item.num} //</span>
              <span className="stack-card-category">{item.category}</span>
            </div>

            <div className="stack-client-badge">
              <span className="stack-client-dot" />
              <span className="stack-client-name">{item.client}</span>
              <span className="stack-client-year">{item.year}</span>
            </div>

            <h3 className="stack-card-title">{item.title}</h3>
            
            <p className="stack-card-desc">{item.description}</p>

            {/* Impact Metric Box */}
            <div className="stack-metric-box">
              <div className="stack-metric-icon-wrap">
                <Sparkles size={16} className="text-[#FFC300]" />
              </div>
              <div className="stack-metric-details">
                <span className="stack-metric-val">{item.impactMetric}</span>
                <span className="stack-metric-lbl">{item.metricLabel}</span>
              </div>
            </div>

            {/* Tech Stack & CTA */}
            <div className="stack-footer-row">
              <div className="stack-tech-pills">
                {item.techStack.map((tech) => (
                  <span key={tech} className="stack-tech-pill">{tech}</span>
                ))}
              </div>

              <button 
                type="button" 
                onClick={() => openLeadModal(item.title)} 
                className="stack-cta-btn"
                aria-label={`Inquire about ${item.title}`}
              >
                <span>View Project</span>
                <ArrowUpRight size={15} className="stack-cta-arrow" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Visual Frame */}
          <div className="stack-card-right">
            <div className="stack-visual-frame">
              <img src={item.image} alt={item.title} className="stack-visual-img" loading="lazy" decoding="async" />
              <div className="stack-visual-glare" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

export const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardContainersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const deck = deckRef.current;
    if (!section || !deck) return;

    const ctx = gsap.context(() => {
      const cardContainers = cardContainersRef.current.filter(Boolean) as HTMLDivElement[];
      if (cardContainers.length === 0) return;

      const totalCards = cardContainers.length;

      cardContainers.forEach((cardContainer, index) => {
        // Pin every card except the last one, or pin all cards so they stack in sequence
        if (index < totalCards - 1) {
          const topOffset = 110 + index * 16; // Stepped top offset
          // Cache DOM reference once — avoid querySelector on every scroll frame
          const cardEl = cardContainer.querySelector('.portfolio-stack-card') as HTMLElement | null;
          
          ScrollTrigger.create({
            trigger: cardContainer,
            start: `top ${topOffset}px`,
            endTrigger: deck,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // As the user continues scrolling past this card, smoothly scale and dim
              if (cardEl) {
                // Calculate progress through remaining cards
                const remainingProgress = self.progress;
                const scale = Math.max(0.88, 1 - remainingProgress * 0.08);
                const brightness = Math.max(0.6, 1 - remainingProgress * 0.35);
                gsap.set(cardEl, {
                  scale,
                  filter: `brightness(${brightness})`,
                  transformOrigin: 'top center'
                });
              }
            }
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="portfolio-stack-section">
      <div className="portfolio-stack-container">
        
        {/* Section Header */}
        <div className="portfolio-stack-header">
          <motion.div 
            className="portfolio-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="portfolio-square" />
            <span className="portfolio-eyebrow-text">SELECTED WORK // THE ARCHIVE</span>
          </motion.div>

          <h2 className="portfolio-title-wrapper">
            <BlurText
              text="Proven Outcomes for Ambitious Brands."
              delay={65}
              className="portfolio-title"
              direction="bottom"
              stepDuration={0.35}
            />
          </h2>

          <motion.p 
            className="portfolio-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A curated portfolio of modern web platforms, headless commerce storefronts, and performance marketing systems engineered for global scale.
          </motion.p>
        </div>

        {/* Stackable Cards Deck */}
        <div ref={deckRef} className="portfolio-stack-deck">
          {CASE_STUDIES.map((item, index) => (
            <StackablePortfolioCard 
              key={item.id} 
              item={item} 
              index={index}
              setCardRef={(el) => { cardContainersRef.current[index] = el; }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
