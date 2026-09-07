import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layers } from 'lucide-react';

export interface DeliverableCardProps {
  num: string;
  title: string;
  summary: React.ReactNode;
  features?: React.ReactNode[];
  icon?: React.ReactNode;
  delay?: number;
  className?: string;
}

export const DeliverableCard: React.FC<DeliverableCardProps> = ({
  num,
  title,
  summary,
  features,
  icon,
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div 
      className={`deliverable-card ${className}`.trim()}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="deliverable-top-bar">
        <span className="deliverable-num">{num}</span>
        {icon ?? <Layers size={18} className="deliverable-icon" />}
      </div>

      <h3 className="deliverable-title">{title}</h3>
      <div className="deliverable-summary">{summary}</div>

      {features && features.length > 0 && (
        <ul className="deliverable-features-list">
          {features.map((feat, idx) => (
            <li key={idx} className="feature-item">
              <CheckCircle2 size={15} className="feature-check-icon" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export interface DeliverablesSectionProps {
  eyebrow?: string;
  title: string;
  leadText?: string;
  children: React.ReactNode;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({
  eyebrow = 'WHAT WE BUILD // CORE DELIVERABLES',
  title,
  leadText,
  children
}) => {
  return (
    <section className="service-deliverables-section">
      <div className="service-detail-container">
        <div className="section-header-block">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-h2">{title}</h2>
          {leadText && <p className="section-lead-text">{leadText}</p>}
        </div>

        <div className="deliverables-cards-grid">
          {children}
        </div>
      </div>
    </section>
  );
};
