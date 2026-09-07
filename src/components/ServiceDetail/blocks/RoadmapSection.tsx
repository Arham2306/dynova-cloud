import React from 'react';
import { motion } from 'motion/react';

export interface RoadmapStepProps {
  phase: string;
  timeline: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const RoadmapStep: React.FC<RoadmapStepProps> = ({
  phase,
  timeline,
  title,
  children,
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div 
      className={`roadmap-phase-card ${className}`.trim()}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="phase-card-header">
        <span className="phase-step-tag">{phase}</span>
        <span className="phase-timeline-tag">{timeline}</span>
      </div>
      <h3 className="phase-title">{title}</h3>
      <div className="phase-description">{children}</div>
    </motion.div>
  );
};

export interface RoadmapSectionProps {
  eyebrow?: string;
  title: string;
  leadText?: string;
  children: React.ReactNode;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  eyebrow = 'EXECUTION ROADMAP // HOW WE DELIVER',
  title,
  leadText,
  children
}) => {
  return (
    <section className="service-roadmap-section">
      <div className="service-detail-container">
        <div className="section-header-block">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-h2">{title}</h2>
          {leadText && <p className="section-lead-text">{leadText}</p>}
        </div>

        <div className="roadmap-phases-grid">
          {children}
        </div>
      </div>
    </section>
  );
};
