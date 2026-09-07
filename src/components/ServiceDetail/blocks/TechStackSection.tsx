import React from 'react';
import { motion } from 'motion/react';

export interface TechCategoryCardProps {
  category: string;
  technologies: string[];
  delay?: number;
  className?: string;
}

export const TechCategoryCard: React.FC<TechCategoryCardProps> = ({
  category,
  technologies,
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div 
      className={`tech-category-card ${className}`.trim()}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="tech-cat-title">{category}</h3>
      <div className="tech-pills-wrap">
        {technologies.map((t, idx) => (
          <span key={idx} className="tech-pill">{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

export interface TechStackSectionProps {
  eyebrow?: string;
  title: string;
  leadText?: string;
  children: React.ReactNode;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  eyebrow = 'TECHNOLOGY ECOSYSTEM // MODERN TOOLS',
  title,
  leadText,
  children
}) => {
  return (
    <section className="service-tech-section">
      <div className="service-detail-container">
        <div className="section-header-block">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-h2">{title}</h2>
          {leadText && <p className="section-lead-text">{leadText}</p>}
        </div>

        <div className="tech-categories-grid">
          {children}
        </div>
      </div>
    </section>
  );
};
