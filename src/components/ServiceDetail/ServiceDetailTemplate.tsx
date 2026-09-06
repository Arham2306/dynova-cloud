import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronDown, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServicePageData } from '../../data/servicesData';
import { useLeadModal } from '../../context/LeadModalContext';
import './ServiceDetail.css';

interface ServiceDetailTemplateProps {
  data: ServicePageData;
}

export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({ data }) => {
  const { openLeadModal } = useLeadModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="service-detail-wrapper">
      {/* ── Breadcrumb & Top Navigation Bar ── */}
      <div className="service-top-nav-bar">
        <div className="service-detail-container">
          <div className="service-breadcrumbs">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-divider">/</span>
            <Link to="/#services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-current">{data.title}</span>
          </div>
          <Link to="/" className="service-back-btn">
            <ArrowLeft size={15} />
            <span>Back to Overview</span>
          </Link>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="service-hero-section">
        <div className="service-detail-container">
          <div className="service-hero-grid">
            <motion.div 
              className="service-hero-content"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="service-badge">
                <span className="badge-square" />
                <span className="badge-text">{data.eyebrow}</span>
              </div>

              <h1 className="service-hero-title">
                {data.title}
              </h1>

              <p className="service-hero-tagline">
                {data.heroTagline}
              </p>

              <p className="service-hero-desc">
                {data.heroDescription}
              </p>

              <div className="service-hero-actions">
                <button
                  type="button"
                  onClick={() => openLeadModal(data.title)}
                  className="service-primary-cta"
                  aria-label={`Start ${data.title} project`}
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={17} className="cta-icon-arrow" />
                </button>

                <button
                  type="button"
                  onClick={() => openLeadModal(`Consultation: ${data.title}`)}
                  className="service-secondary-cta"
                  aria-label="Schedule an architecture review"
                >
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </motion.div>

            {/* Featured Visual Frame */}
            <motion.div 
              className="service-hero-visual-frame"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-img-box">
                <img
                  src={data.heroImage}
                  alt={`${data.title} architecture showcase`}
                  className="service-hero-img"
                  fetchPriority="high"
                />
                <div className="hero-img-glass-overlay" />
              </div>

              <div className="hero-floating-spec">
                <div className="spec-icon-box">
                  <Cpu size={18} className="text-[#FFC300]" />
                </div>
                <div className="spec-content">
                  <span className="spec-label">ARCHITECTURE GRADE</span>
                  <span className="spec-value">Production Enterprise SLA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Key Performance Metrics Bar ── */}
          {data.keyMetrics && data.keyMetrics.length > 0 && (
            <motion.div 
              className="service-metrics-grid"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {data.keyMetrics.map((metric, idx) => (
                <div key={idx} className="service-metric-card">
                  <span className="metric-big-val">{metric.value}</span>
                  <span className="metric-main-lbl">{metric.label}</span>
                  <p className="metric-detail-txt">{metric.detail}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Comparative Strategy: Problem vs. Solution ── */}
      {data.overview && (
        <section className="service-overview-section">
          <div className="service-detail-container">
            <div className="section-header-block">
              <span className="section-eyebrow">STRATEGIC ARCHITECTURE // THE DIFFERENCE</span>
              <h2 className="section-h2">Engineering Beyond Conventional Limitations</h2>
            </div>

            <div className="overview-comparison-grid">
              {/* Problem Card */}
              <motion.div 
                className="comparison-card problem-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="comparison-card-top">
                  <span className="comparison-indicator indicator-problem">THE INDUSTRY STANDARD</span>
                  <h3 className="comparison-card-title">{data.overview.problemTitle}</h3>
                </div>
                <p className="comparison-card-text">
                  {data.overview.problemDescription}
                </p>
              </motion.div>

              {/* Solution Card */}
              <motion.div 
                className="comparison-card solution-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="comparison-card-top">
                  <span className="comparison-indicator indicator-solution">THE DYNOVA STANDARD</span>
                  <h3 className="comparison-card-title">{data.overview.solutionTitle}</h3>
                </div>
                <p className="comparison-card-text">
                  {data.overview.solutionDescription}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── Core Technical Deliverables ── */}
      {data.deliverables && data.deliverables.length > 0 && (
        <section className="service-deliverables-section">
          <div className="service-detail-container">
            <div className="section-header-block">
              <span className="section-eyebrow">WHAT WE BUILD // CORE DELIVERABLES</span>
              <h2 className="section-h2">Production-Grade Capabilities Included in Every Engagement</h2>
              <p className="section-lead-text">
                Every line of code and architectural decision is guided by strict benchmarks for conversion, SEO visibility, and high concurrency resilience.
              </p>
            </div>

            <div className="deliverables-cards-grid">
              {data.deliverables.map((item, index) => (
                <motion.div 
                  key={index}
                  className="deliverable-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                >
                  <div className="deliverable-top-bar">
                    <span className="deliverable-num">{item.num}</span>
                    <Layers size={18} className="deliverable-icon" />
                  </div>

                  <h3 className="deliverable-title">{item.title}</h3>
                  <p className="deliverable-summary">{item.summary}</p>

                  <ul className="deliverable-features-list">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="feature-item">
                        <CheckCircle2 size={15} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Technical Stack & Infrastructure ── */}
      {data.techStack && data.techStack.length > 0 && (
        <section className="service-tech-section">
          <div className="service-detail-container">
            <div className="section-header-block">
              <span className="section-eyebrow">TECHNOLOGY ECOSYSTEM // MODERN TOOLS</span>
              <h2 className="section-h2">Best-in-Class Engineering Stack</h2>
            </div>

            <div className="tech-categories-grid">
              {data.techStack.map((techCat, idx) => (
                <motion.div 
                  key={idx}
                  className="tech-category-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <h3 className="tech-cat-title">{techCat.category}</h3>
                  <div className="tech-pills-wrap">
                    {techCat.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Phased Roadmap & Execution Timeline ── */}
      {data.processRoadmap && data.processRoadmap.length > 0 && (
        <section className="service-roadmap-section">
          <div className="service-detail-container">
            <div className="section-header-block">
              <span className="section-eyebrow">EXECUTION ROADMAP // HOW WE DELIVER</span>
              <h2 className="section-h2">Four-Stage Production Protocol</h2>
              <p className="section-lead-text">
                From initial technical discovery through to zero-downtime DNS deployment, our milestone structure guarantees transparency, precision, and predictable delivery dates.
              </p>
            </div>

            <div className="roadmap-phases-grid">
              {data.processRoadmap.map((phase, pIdx) => (
                <motion.div 
                  key={pIdx}
                  className="roadmap-phase-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                >
                  <div className="phase-card-header">
                    <span className="phase-step-tag">{phase.phase}</span>
                    <span className="phase-timeline-tag">{phase.timeline}</span>
                  </div>
                  <h3 className="phase-title">{phase.title}</h3>
                  <p className="phase-description">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Frequently Asked Questions (SEO Rich Accordion) ── */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="service-faqs-section">
          <div className="service-detail-container">
            <div className="section-header-block">
              <span className="section-eyebrow">COMMON INQUIRIES // FAQ</span>
              <h2 className="section-h2">Frequently Asked Technical Questions</h2>
            </div>

            <div className="faqs-accordion-wrapper">
              {data.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div 
                    key={fIdx} 
                    className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-trigger-btn"
                      onClick={() => toggleFaq(fIdx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                    </button>
                    {isOpen && (
                      <motion.div 
                        className="faq-answer-pane"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="faq-answer-text">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom High-Conversion CTA Banner ── */}
      <section className="service-bottom-cta-section">
        <div className="service-detail-container">
          <motion.div 
            className="service-cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-cta-glow" />
            <div className="service-cta-content">
              <div className="service-badge">
                <span className="badge-square" />
                <span className="badge-text">READY TO BUILD</span>
              </div>
              <h2 className="service-cta-title">
                Let's Engineer Your Competitive Advantage in {data.title}.
              </h2>
              <p className="service-cta-desc">
                Schedule a direct technical discovery call with our solutions architects to review your technical scope, target timeline, and conversion goals.
              </p>
              <div className="service-cta-actions">
                <button
                  type="button"
                  onClick={() => openLeadModal(data.title)}
                  className="service-primary-cta"
                  aria-label={`Start ${data.title} project`}
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={17} className="cta-icon-arrow" />
                </button>
                <Link to="/#services" className="service-cta-back-link">
                  <span>← Explore Other Capabilities</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailTemplate;
