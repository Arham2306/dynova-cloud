import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Lock, 
  Sparkles,
  ArrowRight,
  RotateCcw,
  Check
} from 'lucide-react';
import type { LeadFormData, FormErrors } from './types';
import { 
  SERVICE_OPTIONS, 
  BUDGET_OPTIONS, 
  TIMELINE_OPTIONS 
} from './types';
import './LeadForm.css';

const INITIAL_FORM_DATA: LeadFormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  budget: '',
  timeline: '',
  description: '',
  honeypot: '',
};

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof LeadFormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<LeadFormData | null>(null);

  // Validate a single field
  const validateField = (name: keyof LeadFormData, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g. name@company.com).';
        }
        return '';
      case 'phone':
        if (value.trim() && !/^[\d\s+()-]{7,20}$/.test(value.trim())) {
          return 'Please enter a valid phone number.';
        }
        return '';
      case 'service':
        if (!value) return 'Please select a service for your project.';
        return '';
      case 'budget':
        if (!value) return 'Please select an approximate budget range.';
        return '';
      case 'timeline':
        if (!value) return 'Please select an expected project timeline.';
        return '';
      case 'description':
        if (!value.trim()) return 'Please provide a brief description of your project.';
        if (value.trim().length < 15) {
          return 'Please share a few more details (minimum 15 characters).';
        }
        return '';
      default:
        return '';
    }
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Check honeypot for bot detection
    if (formData.honeypot) {
      return false;
    }

    const fieldsToValidate: (keyof LeadFormData)[] = [
      'name',
      'email',
      'service',
      'budget',
      'timeline',
      'description',
    ];

    if (formData.phone) {
      fieldsToValidate.push('phone');
    }

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field] || '');
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof LeadFormData;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof LeadFormData;

    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSelectOption = (field: 'service' | 'budget' | 'timeline', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched: Partial<Record<keyof LeadFormData, boolean>> = {
      name: true,
      email: true,
      company: true,
      phone: true,
      service: true,
      budget: true,
      timeline: true,
      description: true,
    };
    setTouched(allTouched);

    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorElement = document.querySelector('.has-error');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setStatus('submitting');

    try {
      // Simulate client-side API submission delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

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
    <section id="contact" className="lead-form-section">
      <div className="lead-form-container">
        {/* Section Header */}
        <div className="lead-form-header">
          <div className="lead-form-tag">
            <Sparkles size={14} className="tag-sparkle" />
            <span>START A PROJECT</span>
          </div>
          <h2 className="lead-form-title">
            Let’s Build Something <span className="title-highlight">Exceptional</span>
          </h2>
          <p className="lead-form-subtitle">
            Tell us about your project scope, timeline, and goals. Our engineering team 
            will review your inquiry and schedule a strategic consultation within 24 hours.
          </p>
        </div>

        {/* Form Card or Success State */}
        <div className="lead-form-card glass-panel">
          {status === 'success' && submittedData ? (
            <div className="success-state-container" role="status" aria-live="polite">
              <div className="success-icon-badge">
                <CheckCircle2 size={48} className="success-icon" />
              </div>

              <h3 className="success-title">Inquiry Received Successfully</h3>
              <p className="success-message">
                Thank you, <strong>{submittedData.name}</strong>. We have received your project details and 
                a confirmation has been sent to <strong>{submittedData.email}</strong>.
              </p>

              {/* Structured Submission Summary */}
              <div className="submission-summary-box">
                <h4 className="summary-heading">Project Snapshot</h4>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span className="summary-label">Service:</span>
                    <span className="summary-value">{submittedData.service}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Budget:</span>
                    <span className="summary-value">{submittedData.budget}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Timeline:</span>
                    <span className="summary-value">{submittedData.timeline}</span>
                  </div>
                  {submittedData.company && (
                    <div className="summary-item">
                      <span className="summary-label">Company:</span>
                      <span className="summary-value">{submittedData.company}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="success-next-steps">
                <div className="next-step-item">
                  <span className="step-num">01</span>
                  <div className="step-text">
                    <strong>Technical Review</strong>
                    <span>Our leads analyze your architecture & business goals.</span>
                  </div>
                </div>
                <div className="next-step-item">
                  <span className="step-num">02</span>
                  <div className="step-text">
                    <strong>Discovery Call</strong>
                    <span>We schedule a 30-minute scoping session with your team.</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="reset-form-btn"
                onClick={handleReset}
              >
                <RotateCcw size={16} />
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          ) : (
            <form 
              className="lead-form-element" 
              onSubmit={handleSubmit} 
              noValidate
            >
              {/* Spam Trap Honeypot field (hidden from visual users and screenreaders) */}
              <div className="hp-field" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="hp_lead_trap">Leave this blank</label>
                <input
                  id="hp_lead_trap"
                  type="text"
                  name="honeypot"
                  value={formData.honeypot || ''}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Error Banner */}
              {status === 'error' && (
                <div className="error-banner" role="alert">
                  <AlertCircle size={20} />
                  <span>Something went wrong while submitting. Please try again or contact us directly.</span>
                </div>
              )}

              {/* Step 1: Contact Information */}
              <div className="form-section-block">
                <div className="section-label-row">
                  <span className="section-index">01</span>
                  <h3 className="section-heading">Contact Information</h3>
                </div>

                <div className="form-grid-two">
                  {/* Name */}
                  <div className={`form-group ${touched.name && errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="lead-name" className="form-label">
                      Full Name <span className="required-mark">*</span>
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="form-input"
                      aria-required="true"
                      aria-invalid={!!(touched.name && errors.name)}
                      aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                      disabled={status === 'submitting'}
                    />
                    {touched.name && errors.name && (
                      <span id="name-error" className="field-error-msg" role="alert">
                        <AlertCircle size={14} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className={`form-group ${touched.email && errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="lead-email" className="form-label">
                      Work Email <span className="required-mark">*</span>
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      name="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="form-input"
                      aria-required="true"
                      aria-invalid={!!(touched.email && errors.email)}
                      aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                      disabled={status === 'submitting'}
                    />
                    {touched.email && errors.email && (
                      <span id="email-error" className="field-error-msg" role="alert">
                        <AlertCircle size={14} /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="form-group">
                    <label htmlFor="lead-company" className="form-label">
                      Company / Organization <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      id="lead-company"
                      type="text"
                      name="company"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {/* Phone */}
                  <div className={`form-group ${touched.phone && errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="lead-phone" className="form-label">
                      Phone Number <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="form-input"
                      aria-invalid={!!(touched.phone && errors.phone)}
                      aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                      disabled={status === 'submitting'}
                    />
                    {touched.phone && errors.phone && (
                      <span id="phone-error" className="field-error-msg" role="alert">
                        <AlertCircle size={14} /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 2: Required Service */}
              <div className={`form-section-block ${touched.service && errors.service ? 'has-error' : ''}`}>
                <div className="section-label-row">
                  <span className="section-index">02</span>
                  <h3 className="section-heading">
                    Required Service <span className="required-mark">*</span>
                  </h3>
                </div>

                <div 
                  className="chips-grid" 
                  role="radiogroup" 
                  aria-label="Required service options"
                  aria-required="true"
                >
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = formData.service === service.label;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        className={`service-chip-card ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleSelectOption('service', service.label)}
                        disabled={status === 'submitting'}
                      >
                        <div className="chip-header">
                          <span className="chip-title">{service.label}</span>
                          <div className="chip-radio-circle">
                            {isSelected && <Check size={12} className="check-mark" />}
                          </div>
                        </div>
                        <span className="chip-description">{service.description}</span>
                      </button>
                    );
                  })}
                </div>

                {touched.service && errors.service && (
                  <span className="field-error-msg select-error" role="alert">
                    <AlertCircle size={14} /> {errors.service}
                  </span>
                )}
              </div>

              {/* Step 3: Budget & Timeline */}
              <div className="form-section-block">
                <div className="section-label-row">
                  <span className="section-index">03</span>
                  <h3 className="section-heading">Scope & Parameters</h3>
                </div>

                {/* Budget Range */}
                <div className={`scope-group ${touched.budget && errors.budget ? 'has-error' : ''}`}>
                  <label className="form-label">
                    Approximate Budget <span className="required-mark">*</span>
                  </label>
                  <div 
                    className="pills-flex-wrap" 
                    role="radiogroup" 
                    aria-label="Approximate budget options"
                    aria-required="true"
                  >
                    {BUDGET_OPTIONS.map((budget) => {
                      const isSelected = formData.budget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`pill-button ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => handleSelectOption('budget', budget)}
                          disabled={status === 'submitting'}
                        >
                          <span>{budget}</span>
                        </button>
                      );
                    })}
                  </div>
                  {touched.budget && errors.budget && (
                    <span className="field-error-msg select-error" role="alert">
                      <AlertCircle size={14} /> {errors.budget}
                    </span>
                  )}
                </div>

                {/* Project Timeline */}
                <div className={`scope-group ${touched.timeline && errors.timeline ? 'has-error' : ''}`}>
                  <label className="form-label">
                    Project Timeline <span className="required-mark">*</span>
                  </label>
                  <div 
                    className="pills-flex-wrap" 
                    role="radiogroup" 
                    aria-label="Project timeline options"
                    aria-required="true"
                  >
                    {TIMELINE_OPTIONS.map((timeline) => {
                      const isSelected = formData.timeline === timeline;
                      return (
                        <button
                          key={timeline}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`pill-button ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => handleSelectOption('timeline', timeline)}
                          disabled={status === 'submitting'}
                        >
                          <span>{timeline}</span>
                        </button>
                      );
                    })}
                  </div>
                  {touched.timeline && errors.timeline && (
                    <span className="field-error-msg select-error" role="alert">
                      <AlertCircle size={14} /> {errors.timeline}
                    </span>
                  )}
                </div>
              </div>

              {/* Step 4: Project Description */}
              <div className={`form-section-block ${touched.description && errors.description ? 'has-error' : ''}`}>
                <div className="section-label-row">
                  <span className="section-index">04</span>
                  <h3 className="section-heading">
                    Project Description <span className="required-mark">*</span>
                  </h3>
                </div>

                <div className="form-group">
                  <label htmlFor="lead-description" className="form-label">
                    Tell us about your project, key objectives & existing challenges
                  </label>
                  <textarea
                    id="lead-description"
                    name="description"
                    rows={4}
                    placeholder="We need to build a high-performance web platform that integrates with our internal API and scales to 50k daily active users..."
                    value={formData.description}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="form-textarea"
                    aria-required="true"
                    aria-invalid={!!(touched.description && errors.description)}
                    aria-describedby={touched.description && errors.description ? 'desc-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  <div className="textarea-footer">
                    {touched.description && errors.description ? (
                      <span id="desc-error" className="field-error-msg" role="alert">
                        <AlertCircle size={14} /> {errors.description}
                      </span>
                    ) : (
                      <span className="textarea-hint">The more details you share, the better we can prepare.</span>
                    )}
                    <span className="char-count">{formData.description.length} chars</span>
                  </div>
                </div>
              </div>

              {/* Form Action & Security */}
              <div className="form-submit-footer">
                <div className="security-assurance">
                  <Lock size={15} className="lock-icon" />
                  <span>Your information is protected by enterprise-grade NDA & encryption.</span>
                </div>

                <button
                  type="submit"
                  className="lead-submit-button"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="spinner-icon" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
