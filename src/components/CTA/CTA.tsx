import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
import BlurText from '../BlurText/BlurText';
import './CTA.css';

export const CTA: React.FC = () => {
  const { openLeadModal } = useLeadModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  // Cursor Spotlight Glow & Border (Active only on Hover)
  const spotlightBackground = useMotionTemplate`
    radial-gradient(550px circle at ${mouseX}px ${mouseY}px, rgba(255, 195, 0, 0.14), transparent 80%)
  `;

  const spotlightBorder = useMotionTemplate`
    radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255, 214, 10, 0.6), transparent 75%)
  `;

  return (
    <section id="contact" className="cta-section">
      {/* Background Ambient Glow Orbs */}
      <div className="cta-ambient-glow" />
      <div className="cta-ambient-glow-secondary" />

      <div className="cta-container">
        <motion.div
          ref={containerRef}
          className={`cta-card-shell ${isHovered ? 'is-card-hovered' : ''}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 1. Animated Rotating Conic Border Beam (Always Active on Normal State) */}
          <div className="cta-conic-border-wrapper">
            <div className="cta-conic-border-spinner" />
          </div>

          {/* 2. Dynamic Cursor Spotlight Border Tracker (Active on Hover) */}
          <motion.div
            className="cta-spotlight-border"
            style={{ background: spotlightBorder }}
          />

          {/* Inner Glass Surface */}
          <div className="cta-card-inner">
            {/* 3. Dynamic Cursor Spotlight Surface Glow (Active on Hover) */}
            <motion.div
              className="cta-spotlight-glow"
              style={{ background: spotlightBackground }}
            />

            {/* Header & Content */}
            <div className="cta-content-wrapper">
              <motion.div 
                className="cta-eyebrow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="cta-square" />
                <span className="cta-eyebrow-text">START A PROJECT // WORK WITH US</span>
              </motion.div>

              <h2 className="cta-title-wrapper">
                <BlurText
                  text="Let's Build Something Exceptional Together."
                  delay={60}
                  className="cta-title"
                  direction="bottom"
                  stepDuration={0.35}
                />
              </h2>

              <motion.p 
                className="cta-subtitle"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Whether you are launching a new digital platform, scaling paid acquisition channels, or engineering high-speed cloud infrastructure, our team is ready to accelerate your revenue.
              </motion.p>

              {/* Single Simple 'Start Project' Button */}
              <motion.div 
                className="cta-actions-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <button 
                  type="button" 
                  onClick={() => openLeadModal()} 
                  className="cta-primary-btn"
                  aria-label="Start a project blueprint"
                >
                  <span>Start Project</span>
                  <ArrowUpRight size={18} className="cta-arrow-icon" />
                </button>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
