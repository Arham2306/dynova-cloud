import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Eyebrow Subtitle */}
        <div className="about-eyebrow">
          <span className="about-square" />
          <span className="about-eyebrow-text">ABOUT US // OUR PHILOSOPHY</span>
        </div>

        {/* Editorial Statement with ScrollReveal */}
        <div className="about-text-wrapper">
          <ScrollReveal
            baseOpacity={0.14}
            blurStrength={6}
            textClassName="about-large-text"
          >
            We engineer high-performance digital systems and cloud architecture built to scale enterprises, outperform competitors, and drive real business growth. We transform complex technical challenges into competitive market advantages.
          </ScrollReveal>
        </div>

        {/* Supporting Minimal Agency Pillars with Fade-Up on Scroll */}
        <div className="about-subtext-grid">
          <motion.div 
            className="about-subtext-item"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="subtext-num">01 / ARCHITECTURE</span>
            <p>Engineered with modern stacks, resilience, and zero-compromise security.</p>
          </motion.div>

          <motion.div 
            className="about-subtext-item"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <span className="subtext-num">02 / VELOCITY</span>
            <p>From initial blueprint to global cloud deployment with rapid iteration.</p>
          </motion.div>

          <motion.div 
            className="about-subtext-item"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <span className="subtext-num">03 / OUTCOMES</span>
            <p>Technology built to scale operations and accelerate measurable revenue.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
