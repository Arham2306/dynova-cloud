import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Lock, 
  RotateCcw,
  ShieldCheck,
  Zap,
  Layers,
  ChevronDown
} from 'lucide-react';
import Scanner from '../Scanner/Scanner';
import { SERVICE_OPTIONS } from '../LeadForm/types';
import './Hero.css';

interface SimplifiedFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  description: string;
  honeypot?: string;
}

type SimplifiedFormErrors = Partial<Record<keyof SimplifiedFormData, string>>;

const INITIAL_FORM_DATA: SimplifiedFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  description: '',
  honeypot: '',
};

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState<SimplifiedFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<SimplifiedFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof SimplifiedFormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<SimplifiedFormData | null>(null);

  const validateField = (name: keyof SimplifiedFormData, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your email.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'phone':
        if (value.trim() && !/^[\d\s+()-]{7,20}$/.test(value.trim())) {
          return 'Please enter a valid phone number.';
        }
        return '';
      case 'service':
        if (!value) return 'Please select a service.';
        return '';
      case 'description':
        if (!value.trim()) return 'Please tell us about your project.';
        if (value.trim().length < 10) {
          return 'Please provide a bit more detail (min 10 characters).';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof SimplifiedFormData;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof SimplifiedFormData;

    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

    const newErrors: SimplifiedFormErrors = {};
    let valid = true;

    const requiredFields: (keyof SimplifiedFormData)[] = ['name', 'email', 'service', 'description'];
    if (formData.phone) requiredFields.push('phone');

    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field] || '');
      if (error) {
        newErrors[field] = error;
        valid = false;
      }
    });

    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      service: true,
      description: true,
    });
    setErrors(newErrors);

    if (!valid) return;

    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmittedData({ ...formData });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setTouched({});
    setStatus('idle');
    setSubmittedData(null);
  };

  return (
    <section id="hero" className="hero-section">
      {/* 3D WebGL Scanner Background Layer */}
      <div className="hero-webgl-wrapper">
        <Scanner
          color1="#000814"
          color2="#FFC300"
          color3="#003566"
          speed={0.45}
          sweepSpeed={0.22}
          sweepWidth={1.65}
          sweepFalloff={5.8}
          scale={1.4}
          frequency={2.2}
          ripple={0.2}
          bandDensity={12}
          lineSharpness={5.2}
          glow={0.26}
          scanDirection="diagonal"
          colorSpread={0.65}
          brightness={1.15}
          contrast={1.2}
          softness={1.35}
          vignette={0.45}
          scanline={true}
          grain={true}
          grainIntensity={0.04}
          opacity={0.88}
          mouseInteraction={true}
          mouseRadius={0.45}
          mouseStrength={0.55}
        />
        <div className="hero-ambient-vignette" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="hero-split-container">
        {/* LEFT COLUMN: Value Proposition & Typography */}
        <div className="hero-left-column">
          <div className="pre-headline-tag">
            <span className="tag-dot" />
            <span>DYNOVA CLOUD // DIGITAL AGENCY</span>
          </div>

          <h1 className="hero-split-title">
            DIGITAL SOLUTIONS.<br />
            <span className="hero-title-highlight">REAL GROWTH.</span>
          </h1>

          <p className="hero-left-description">
            We engineer high-performance digital platforms, modern cloud infrastructure, 
            and bespoke technology tailored to accelerate ambitious enterprises.
          </p>

          {/* Agency Trust Markers */}
          <div className="hero-trust-grid">
            <div className="trust-item">
              <div className="trust-icon-box">
                <Zap size={16} />
              </div>
              <div className="trust-text">
                <strong>24-Hour Response</strong>
                <span>Direct strategy call with our tech leads</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <ShieldCheck size={16} />
              </div>
              <div className="trust-text">
                <strong>NDA Protected</strong>
                <span>Guaranteed intellectual property protection</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Layers size={16} />
              </div>
              <div className="trust-text">
                <strong>Full-Stack Architecture</strong>
                <span>Web apps, cloud systems & marketing tech</span>
              </div>
            </div>
          </div>

          <div className="hero-secondary-action">
            <a href="#work" className="hero-work-link">
              <span>Explore Featured Work</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Streamlined Lead Card */}
        <div className="hero-right-column">
          <div className="lead-card-box glass-panel">
            {status === 'success' && submittedData ? (
              /* Success State */
              <div className="hero-success-state" role="status" aria-live="polite">
                <div className="success-icon-badge">
                  <CheckCircle2 size={40} className="success-icon" />
                </div>
                <h3 className="success-title">Inquiry Received!</h3>
                <p className="success-message">
                  Thank you, <strong>{submittedData.name}</strong>. Our engineering leads will review 
                  your request and follow up at <strong>{submittedData.email}</strong> within 24 hours.
                </p>

                <div className="hero-summary-pill-list">
                  <div className="summary-pill">
                    <span className="pill-lbl">Service:</span>
                    <span className="pill-val">{submittedData.service}</span>
                  </div>
                  {submittedData.company && (
                    <div className="summary-pill">
                      <span className="pill-lbl">Company:</span>
                      <span className="pill-val">{submittedData.company}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="reset-form-btn"
                  onClick={handleReset}
                >
                  <RotateCcw size={15} />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              /* Simplified Single-Step Form */
              <form onSubmit={handleSubmit} noValidate className="hero-lead-form">
                {/* Spam Trap */}
                <div aria-hidden="true" style={{ display: 'none' }}>
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot || ''}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Card Title */}
                <div className="lead-card-header">
                  <span className="card-badge">START A PROJECT</span>
                  <h3 className="card-title">Request a Consultation</h3>
                </div>

                {status === 'error' && (
                  <div className="error-banner" role="alert">
                    <AlertCircle size={18} />
                    <span>Submission error. Please try again.</span>
                  </div>
                )}

                <div className="form-fields-stack">
                  {/* Name & Email Row */}
                  <div className="form-two-col">
                    <div className={`form-field ${touched.name && errors.name ? 'has-error' : ''}`}>
                      <label htmlFor="lead-name" className="card-label">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        name="name"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="card-input"
                        disabled={status === 'submitting'}
                      />
                      {touched.name && errors.name && (
                        <span className="field-error-msg" role="alert">
                          <AlertCircle size={13} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className={`form-field ${touched.email && errors.email ? 'has-error' : ''}`}>
                      <label htmlFor="lead-email" className="card-label">
                        Work Email <span className="req">*</span>
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        name="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="card-input"
                        disabled={status === 'submitting'}
                      />
                      {touched.email && errors.email && (
                        <span className="field-error-msg" role="alert">
                          <AlertCircle size={13} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="form-two-col">
                    <div className={`form-field ${touched.phone && errors.phone ? 'has-error' : ''}`}>
                      <label htmlFor="lead-phone" className="card-label">
                        Phone <span className="opt">(Optional)</span>
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="card-input"
                        disabled={status === 'submitting'}
                      />
                      {touched.phone && errors.phone && (
                        <span className="field-error-msg" role="alert">
                          <AlertCircle size={13} /> {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="lead-company" className="card-label">
                        Company <span className="opt">(Optional)</span>
                      </label>
                      <input
                        id="lead-company"
                        type="text"
                        name="company"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="card-input"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  {/* Services Dropdown */}
                  <div className={`form-field ${touched.service && errors.service ? 'has-error' : ''}`}>
                    <label htmlFor="lead-service" className="card-label">
                      Service Required <span className="req">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        id="lead-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="card-select"
                        disabled={status === 'submitting'}
                      >
                        <option value="" disabled>Select a service...</option>
                        {SERVICE_OPTIONS.map((srv) => (
                          <option key={srv.id} value={srv.label}>
                            {srv.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="select-arrow" />
                    </div>
                    {touched.service && errors.service && (
                      <span className="field-error-msg" role="alert">
                        <AlertCircle size={13} /> {errors.service}
                      </span>
                    )}
                  </div>

                  {/* Project Description */}
                  <div className={`form-field ${touched.description && errors.description ? 'has-error' : ''}`}>
                    <label htmlFor="lead-desc" className="card-label">
                      Project Description <span className="req">*</span>
                    </label>
                    <textarea
                      id="lead-desc"
                      name="description"
                      rows={3}
                      placeholder="Briefly describe your project goals, scope, and key deliverables..."
                      value={formData.description}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="card-textarea"
                      disabled={status === 'submitting'}
                    />
                    <div className="textarea-mini-footer">
                      {touched.description && errors.description ? (
                        <span className="field-error-msg" role="alert">
                          <AlertCircle size={13} /> {errors.description}
                        </span>
                      ) : (
                        <span className="desc-counter">{formData.description.length} chars</span>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="step-primary-btn"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={17} className="spinner-icon" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Start a Project</span>
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>

                  <div className="card-lock-note">
                    <Lock size={13} className="lock-icon" />
                    <span>Protected by enterprise-grade NDA & encryption</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
