import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLeadModal } from '../../context/LeadModalContext';
import Scanner from '../Scanner/Scanner';
import BlurText from '../BlurText/BlurText';
import architectImg from '../../assets/architect-capsule.jpg';
import platformImg from '../../assets/platform-capsule.jpg';
import './Hero.css';

export const Hero: React.FC = () => {
  const { openLeadModal } = useLeadModal();
  return (
    <section id="hero" className="editorial-hero-section">
      {/* Prominent 3D WebGL Scanner Atmosphere Layer */}
      <div className="hero-scanner-layer">
        <Scanner
          color1="#000814"
          color2="#FFC300"
          color3="#003566"
          speed={0.45}
          sweepSpeed={0.24}
          sweepWidth={1.8}
          sweepFalloff={5.2}
          scale={1.4}
          frequency={2.2}
          ripple={0.22}
          bandDensity={12}
          lineSharpness={5.0}
          glow={0.45}
          scanDirection="diagonal"
          colorSpread={0.65}
          brightness={1.25}
          contrast={1.35}
          softness={1.3}
          vignette={0.4}
          scanline={true}
          grain={true}
          grainIntensity={0.03}
          opacity={0.88}
          mouseInteraction={true}
          mouseRadius={0.45}
          mouseStrength={0.55}
        />
        <div className="hero-dark-vignette" />
      </div>

      <div className="editorial-hero-container">
        {/* Main Editorial Headline with Subtitle Placed Directly Above */}
        <div className="editorial-headline-wrapper">
          {/* Subtitle directly above the main title */}
          <div className="headline-subtitle">
            <span className="subtitle-square" />
            <BlurText
              text="DIGITAL GROWTH & ENGINEERING"
              delay={35}
              className="subtitle-text"
              direction="bottom"
            />
          </div>

          {/* Line 1 */}
          <div className="headline-line line-1">
            <BlurText
              text="FULL-STACK DIGITAL"
              delay={90}
              className="headline-text"
              direction="bottom"
              stepDuration={0.35}
            />
            <motion.div
              className="inline-media-pill pill-architect"
              title="Lead Cloud Architect"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.06 }}
            >
              <img src={architectImg} alt="Dynova Cloud Architect" className="pill-img" decoding="async" fetchPriority="high" />
              <div className="pill-gloss" />
            </motion.div>
          </div>

          {/* Line 2 */}
          <div className="headline-line line-2">
            <BlurText
              text="MARKETING & ENGINEERING"
              delay={110}
              className="headline-text"
              direction="bottom"
              stepDuration={0.35}
            />
          </div>

          {/* Line 3 */}
          <div className="headline-line line-3">
            <BlurText
              text="ECOSYSTEM"
              delay={170}
              className="headline-highlight"
              direction="bottom"
              stepDuration={0.4}
            />
            <motion.div
              className="inline-media-pill pill-platform"
              title="Digital Cloud Platform"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.85,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.06 }}
            >
              <img src={platformImg} alt="Cloud Architecture Interface" className="pill-img" decoding="async" fetchPriority="high" />
              <div className="pill-gloss" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Editorial Narrative & Scroll Indicator (Orchestrated Fade-in) */}
        <div className="hero-bottom-row">
          <div className="bottom-narrative-box">
            <motion.p
              className="narrative-paragraph"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              Dynova Cloud unifies high-performance digital marketing with enterprise-grade technical engineering. We help growth-focused businesses, modern B2B brands, and scaling e-commerce stores capture market share through search engine optimization (SEO), data-backed media buying, full-stack Shopify development, and conversion-centered brand design.
            </motion.p>
            <motion.div
              className="bottom-cta-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.3,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <button
                type="button"
                onClick={() => openLeadModal()}
                className="editorial-cta-link"
                style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
                aria-label="Start a project blueprint"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="bottom-scroll-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.45, duration: 0.6 }}
          >
            <a href="#about" className="scroll-indicator">
              <span className="scroll-dot" />
              <span className="scroll-text">SCROLL</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
