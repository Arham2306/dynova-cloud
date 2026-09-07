import React from 'react';
import { motion } from 'motion/react';

export interface MetricProps {
  value: string;
  label: string;
  detail?: string;
  className?: string;
}

export const Metric: React.FC<MetricProps> = ({ value, label, detail, className = '' }) => {
  return (
    <div className={`service-metric-card ${className}`.trim()}>
      <span className="metric-big-val">{value}</span>
      <span className="metric-main-lbl">{label}</span>
      {detail && <p className="metric-detail-txt">{detail}</p>}
    </div>
  );
};

export interface MetricsGridProps {
  children: React.ReactNode;
  className?: string;
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ children, className = '' }) => {
  return (
    <div className="service-detail-container">
      <motion.div 
        className={`service-metrics-grid ${className}`.trim()}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
