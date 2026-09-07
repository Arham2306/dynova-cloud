import React from 'react';
import { motion } from 'motion/react';

export interface ComparisonCardProps {
  type: 'problem' | 'solution';
  badge: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  type,
  badge,
  title,
  children,
  delay = 0
}) => {
  const isProblem = type === 'problem';
  return (
    <motion.div 
      className={`comparison-card ${isProblem ? 'problem-card' : 'solution-card'}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="comparison-card-top">
        <span className={`comparison-indicator ${isProblem ? 'indicator-problem' : 'indicator-solution'}`}>
          {badge}
        </span>
        <h3 className="comparison-card-title">{title}</h3>
      </div>
      <div className="comparison-card-text">
        {children}
      </div>
    </motion.div>
  );
};

export interface ComparisonSectionProps {
  eyebrow?: string;
  title: string;
  leadText?: string;
  children: React.ReactNode;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  eyebrow = 'STRATEGIC ARCHITECTURE // THE DIFFERENCE',
  title,
  leadText,
  children
}) => {
  return (
    <section className="service-overview-section">
      <div className="service-detail-container">
        <div className="section-header-block">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-h2">{title}</h2>
          {leadText && <p className="section-lead-text">{leadText}</p>}
        </div>

        <div className="overview-comparison-grid">
          {children}
        </div>
      </div>
    </section>
  );
};
