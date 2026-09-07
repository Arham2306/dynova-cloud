import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../SEO/SEO';
import { useLeadModal } from '../../context/LeadModalContext';
import './ServiceDetail.css';

export interface ServiceTemplateProps {
  title: string;
  eyebrow: string;
  heroTagline: string;
  heroDescription: string;
  heroImage?: string;
  heroVisual?: React.ReactNode;
  heroActions?: React.ReactNode;
  specLabel?: string;
  specValue?: string;
  metaTitle: string;
  metaDescription: string;
  children: React.ReactNode;
}

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  eyebrow,
  heroTagline,
  heroDescription,
  heroImage,
  heroVisual,
  heroActions,
  specLabel = 'ARCHITECTURE GRADE',
  specValue = 'Production Enterprise SLA',
  metaTitle,
  metaDescription,
  children
}) => {
  const { openLeadModal } = useLeadModal();

  // Automatic scroll-to-top for every service page
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title]);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: heroDescription,
    provider: {
      '@type': 'Organization',
      name: 'Dynova Cloud',
      url: 'https://dynova.cloud'
    },
    areaServed: 'Worldwide'
  };

  return (
    <div className="service-detail-wrapper">
      <SEO title={metaTitle} description={metaDescription} />

      {/* JSON-LD Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Breadcrumb & Top Navigation Bar ── */}
      <div className="service-top-nav-bar">
        <div className="service-detail-container">
          <nav className="service-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-divider" aria-hidden="true">/</span>
            <Link to="/#services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-divider" aria-hidden="true">/</span>
            <span className="breadcrumb-current" aria-current="page">{title}</span>
          </nav>
          <Link to="/" className="service-back-btn">
            <ArrowLeft size={15} />
            <span>Back to Overview</span>
          </Link>
        </div>
      </div>

      {/* ── Standardized Hero Section ── */}
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
                <span className="badge-text">{eyebrow}</span>
              </div>

              <h1 className="service-hero-title">
                {title}
              </h1>

              <p className="service-hero-tagline">
                {heroTagline}
              </p>

              <p className="service-hero-desc">
                {heroDescription}
              </p>

              {heroActions ?? (
                <div className="service-hero-actions">
                  <button
                    type="button"
                    onClick={() => openLeadModal(title)}
                    className="service-primary-cta"
                    aria-label={`Start ${title} project`}
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight size={17} className="cta-icon-arrow" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openLeadModal(`Consultation: ${title}`)}
                    className="service-secondary-cta"
                    aria-label={`Schedule a ${title} consultation`}
                  >
                    <span>Schedule Consultation</span>
                  </button>
                </div>
              )}
            </motion.div>

            {/* Featured Visual Slot with Default Fallback */}
            {heroVisual ?? (
              <motion.div 
                className="service-hero-visual-frame"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {heroImage && (
                  <div className="hero-img-box">
                    <img
                      src={heroImage}
                      alt={`${title} architecture showcase`}
                      className="service-hero-img"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="hero-img-glass-overlay" />
                  </div>
                )}

                <div className="hero-floating-spec">
                  <div className="spec-icon-box">
                    <Cpu size={18} className="text-[#FFC300]" />
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">{specLabel}</span>
                    <span className="spec-value">{specValue}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Unique Page Body Content ── */}
      <div className="service-page-body">
        {children}
      </div>

      {/* ── Shared Bottom High-Conversion CTA Banner ── */}
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
                Let's Engineer Your Competitive Advantage in {title}.
              </h2>
              <p className="service-cta-desc">
                Schedule a direct technical discovery call with our solutions architects to review your technical scope, target timeline, and conversion goals.
              </p>
              <div className="service-cta-actions">
                <button
                  type="button"
                  onClick={() => openLeadModal(title)}
                  className="service-primary-cta"
                  aria-label={`Start ${title} project`}
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

export default ServiceTemplate;
