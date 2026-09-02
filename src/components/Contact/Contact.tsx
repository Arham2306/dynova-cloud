import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import BlurText from '../BlurText/BlurText';
import LeadForm from '../LeadForm/LeadForm';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      {/* Background Ambient Glows */}
      <div className="contact-ambient-glow-1" />
      <div className="contact-ambient-glow-2" />

      <div className="contact-container">
        {/* Left Column: Direct Agency Coordinates & Value Narrative */}
        <div className="contact-info-col">
          {/* Eyebrow */}
          <motion.div
            className="contact-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="contact-square" />
            <span className="contact-eyebrow-text">GET IN TOUCH // START A CONVERSATION</span>
          </motion.div>

          {/* Section Title with BlurText */}
          <h2 className="contact-title-wrapper">
            <BlurText
              text="Let's Engineer Your Next Competitive Advantage."
              delay={60}
              className="contact-title"
              direction="bottom"
              stepDuration={0.35}
            />
          </h2>

          <motion.p
            className="contact-narrative"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Connect directly with our SEO strategists, paid media specialists, Shopify developers, and UI/UX designers. Every partnership starts with a comprehensive digital audit and a tailored growth roadmap.
          </motion.p>

          {/* Agency Coordinates & Guarantees */}
          <div className="contact-details-grid">
            <motion.div
              className="contact-detail-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="detail-icon-wrap">
                <Mail size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-lbl">DIRECT EMAIL INTAKE</span>
                <a href="mailto:info@dynova.cloud" className="detail-val link">
                  info@dynova.cloud
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact-detail-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="detail-icon-wrap">
                <MapPin size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-lbl">GLOBAL HEADQUARTERS</span>
                <span className="detail-val">San Francisco, CA &amp; Edge Distributed</span>
              </div>
            </motion.div>

            <motion.div
              className="contact-detail-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="detail-icon-wrap">
                <Clock size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-lbl">RESPONSE SLA</span>
                <span className="detail-val">&lt; 24 Hours Guaranteed Review</span>
              </div>
            </motion.div>

            <motion.div
              className="contact-detail-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div className="detail-icon-wrap">
                <ShieldCheck size={18} />
              </div>
              <div className="detail-content">
                <span className="detail-lbl">SECURITY &amp; NDA</span>
                <span className="detail-val">Enterprise Grade Confidentiality</span>
              </div>
            </motion.div>
          </div>

          {/* Live Availability Badge */}
          <motion.div
            className="contact-availability-pill"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <span className="live-dot" />
            <span>Currently onboarding Q3/Q4 enterprise partnerships</span>
          </motion.div>
        </div>

        {/* Right Column: Embedded Lead Form Card */}
        <motion.div
          className="contact-form-shell"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Conic Border Beam */}
          <div className="contact-conic-border-wrapper">
            <div className="contact-conic-border-spinner" />
          </div>

          {/* Inner Surface */}
          <div className="contact-form-card-inner">
            <LeadForm variant="embedded" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
