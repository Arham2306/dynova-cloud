import React from 'react';
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

        {/* Supporting Minimal Agency Pillars */}
        <div className="about-subtext-grid">
          <div className="about-subtext-item">
            <span className="subtext-num">01 / ARCHITECTURE</span>
            <p>Engineered with modern stacks, resilience, and zero-compromise security.</p>
          </div>
          <div className="about-subtext-item">
            <span className="subtext-num">02 / VELOCITY</span>
            <p>From initial blueprint to global cloud deployment with rapid iteration.</p>
          </div>
          <div className="about-subtext-item">
            <span className="subtext-num">03 / OUTCOMES</span>
            <p>Technology built to scale operations and accelerate measurable revenue.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
