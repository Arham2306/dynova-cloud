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
            baseOpacity={1}
            blurStrength={3.5}
            wordAnimationStart="top 92%"
            wordAnimationEnd="center 55%"
            textClassName="about-large-text"
          >
            We bridge the gap between performance marketing and full-stack
            code. A brilliant ad campaign fails on a slow website, and a fast
            site is useless without qualified search traffic. Dynova Cloud
            operates as one integrated growth partner, combining SEO, paid
            performance marketing, full-stack development, and UI/UX design
            into a single revenue strategy.
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
            <span className="subtext-num">01 / DATA-FIRST DECISIONS</span>
            <p>We base strategies on real search intent volumes, verified conversion data, and technical site performance metrics.</p>
          </motion.div>

          <motion.div
            className="about-subtext-item"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <span className="subtext-num">02 / CLEAN CODE & SPEED PRIORITY</span>
            <p>Site performance is non-negotiable. Every build is optimized for fast server responses and high Core Web Vitals performance.</p>
          </motion.div>

          <motion.div
            className="about-subtext-item"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <span className="subtext-num">03 / TOTAL TRANSPARENCY</span>
            <p>Clear communication, live campaign dashboards, and direct reporting focused on revenue performance rather than vanity metrics.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
