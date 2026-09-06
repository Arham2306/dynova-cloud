import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, ArrowUpRight, Send, AlertCircle, Loader2 } from 'lucide-react';
import './LeadForm.css';

const SERVICES_OPTIONS = [
  'Website Development',
  'E-Commerce',
  'Logo Designing',
  'Digital Marketing',
  'Custom Consultation / Full-Suite'
];

interface LeadFormProps {
  variant?: 'modal' | 'embedded';
  initialService?: string;
  onSuccess?: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  _hp_check: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  email: '',
  phone: '',
  service: SERVICES_OPTIONS[0],
  message: '',
  _hp_check: ''
};

export const LeadForm: React.FC<LeadFormProps> = ({
  variant = 'embedded',
  initialService,
  onSuccess
}) => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const getMailtoUrl = () => {
    const subject = `New Lead Blueprint: ${formData.fullName} (${formData.service})`;
    const body = [
      `Full Name: ${formData.fullName}`,
      `Work Email: ${formData.email}`,
      `Phone Number: ${formData.phone || 'Not provided'}`,
      `Selected Service: ${formData.service}`,
      '',
      `Project Brief / Requirements:`,
      formData.message,
      '',
      `---`,
      `Sent via Dynova Cloud Direct Intake`
    ].join('\n');
    return `mailto:info@dynova.cloud?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Sync initialService if passed
  useEffect(() => {
    if (initialService) {
      // Find closest match or default
      const match = SERVICES_OPTIONS.find(s =>
        s.toLowerCase().includes(initialService.toLowerCase()) ||
        initialService.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setFormData(prev => ({ ...prev, service: match }));
      }
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief overview of your project';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Project brief should be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service,
      message: formData.message,
      _hp_check: formData._hp_check
    };

    let isSuccess = false;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (response.ok) {
        const data = await response.json().catch(() => null);
        if (data && data.success === true) {
          isSuccess = true;
        }
      }
    } catch {
      // Network failure, timeout, or static response in dev mode
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }

    if (isSuccess) {
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } else {
      setSubmitError(
        'Unable to complete automated transmission right now. You can send your project blueprint directly via your email client, or try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className={`lead-form-success-card ${variant === 'modal' ? 'is-modal' : ''}`}>
        <div className="success-icon-wrap">
          <CheckCircle2 size={44} className="success-icon" />
        </div>
        <div className="success-badge">
          <Sparkles size={14} className="text-[#FFC300]" />
          <span>PROJECT BLUEPRINT RECEIVED</span>
        </div>
        <h3 className="success-title">Thank you, {formData.fullName.split(' ')[0]}!</h3>
        <p className="success-desc">
          Your project inquiry for <strong>{formData.service}</strong> has been dispatched directly to our intake team at <strong>info@dynova.cloud</strong>. Our lead solutions architect will review your technical requirements and respond to <strong>{formData.email}</strong> within <strong>24 business hours</strong>.
        </p>

        <div className="success-meta-box">
          <div className="meta-item">
            <span className="meta-lbl">Selected Capability</span>
            <span className="meta-val">{formData.service}</span>
          </div>
          <div className="meta-item">
            <span className="meta-lbl">Response SLA</span>
            <span className="meta-val">&lt; 24 Hours Guaranteed</span>
          </div>
        </div>

        <button type="button" onClick={handleReset} className="success-reset-btn">
          <span>Submit Another Project</span>
          <ArrowUpRight size={15} />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`lead-form-container ${variant === 'modal' ? 'is-modal' : ''}`}
      noValidate
    >
      {/* Anti-Bot Honeypot Field (Hidden visually & from assistive tech) */}
      <div
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          height: 0,
          width: 0,
          zIndex: -1,
          overflow: 'hidden'
        }}
        aria-hidden="true"
      >
        <label htmlFor={`hp-${variant}`}>Do not fill this field</label>
        <input
          id={`hp-${variant}`}
          type="text"
          name="_hp_check"
          value={formData._hp_check}
          onChange={(e) => setFormData({ ...formData, _hp_check: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {/* Form Header for Embedded Variant */}
      {variant === 'embedded' && (
        <div className="lead-form-header">
          <div className="lead-form-badge">
            <Sparkles size={13} className="text-[#FFC300]" />
            <span>PROJECT SCOPING // DIRECT INTAKE</span>
          </div>
          <h3 className="lead-form-title">Initiate Your Project Blueprint</h3>
          <p className="lead-form-subtitle">
            Complete the fields below to schedule a strategy consultation with our SEO, paid media, and Shopify development team.
          </p>
        </div>
      )}

      <div className="lead-form-grid">
        {/* Full Name */}
        <div className="form-field-group">
          <label htmlFor={`name-${variant}`} className="form-label">
            Full Name <span className="req-star">*</span>
          </label>
          <input
            id={`name-${variant}`}
            type="text"
            className={`form-input ${errors.fullName ? 'has-error' : ''}`}
            placeholder="e.g. Alexander Wright"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: '' });
            }}
            disabled={isSubmitting}
            autoComplete="name"
          />
          {errors.fullName && (
            <span className="form-error-msg">
              <AlertCircle size={13} />
              {errors.fullName}
            </span>
          )}
        </div>

        {/* Work Email */}
        <div className="form-field-group">
          <label htmlFor={`email-${variant}`} className="form-label">
            Work Email <span className="req-star">*</span>
          </label>
          <input
            id={`email-${variant}`}
            type="email"
            className={`form-input ${errors.email ? 'has-error' : ''}`}
            placeholder="alexander@enterprise.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            disabled={isSubmitting}
            autoComplete="email"
          />
          {errors.email && (
            <span className="form-error-msg">
              <AlertCircle size={13} />
              {errors.email}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className="form-field-group">
          <label htmlFor={`phone-${variant}`} className="form-label">
            Phone Number <span className="opt-tag">(Optional)</span>
          </label>
          <input
            id={`phone-${variant}`}
            type="tel"
            className="form-input"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            disabled={isSubmitting}
            autoComplete="tel"
          />
        </div>

        {/* Service Dropdown */}
        <div className="form-field-group">
          <label htmlFor={`service-${variant}`} className="form-label">
            Required Service <span className="req-star">*</span>
          </label>
          <div className="select-wrapper">
            <select
              id={`service-${variant}`}
              className="form-select"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              disabled={isSubmitting}
            >
              {SERVICES_OPTIONS.map((svc) => (
                <option key={svc} value={svc} className="select-option">
                  {svc}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Project Brief / Message Textarea */}
      <div className="form-field-group full-width">
        <label htmlFor={`msg-${variant}`} className="form-label">
          Project Brief &amp; Goals <span className="req-star">*</span>
        </label>
        <textarea
          id={`msg-${variant}`}
          className={`form-textarea ${errors.message ? 'has-error' : ''}`}
          rows={variant === 'modal' ? 3 : 4}
          placeholder="Describe your project vision, target timeline, technical requirements, or business objectives..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
          disabled={isSubmitting}
        />
        {errors.message && (
          <span className="form-error-msg">
            <AlertCircle size={13} />
            {errors.message}
          </span>
        )}
      </div>

      {submitError && (
        <div className="form-error-banner" role="alert">
          <div className="form-error-header">
            <AlertCircle size={18} className="form-error-icon" />
            <span className="form-error-title">Direct Dispatch Option</span>
          </div>
          <p className="form-error-text">{submitError}</p>
          <div className="form-error-actions">
            <a
              href={getMailtoUrl()}
              className="form-error-mailto-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Transmit via Email App (Pre-filled)</span>
              <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              onClick={() => setSubmitError(null)}
              className="form-error-dismiss-btn"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Submission CTA */}
      <div className="form-submit-row">
        <button
          type="submit"
          className="lead-form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="submit-spinner" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit</span>
              <Send size={16} className="submit-icon" />
            </>
          )}
        </button>

        <span className="submit-security-note">
          Secure &amp; confidential. Zero spam policy.
        </span>
      </div>

      {/* Direct Intake Fallback */}
      <div className="form-direct-intake">
        <span>Prefer direct email? </span>
        <a href="mailto:info@dynova.cloud" className="form-direct-link">
          info@dynova.cloud
        </a>
      </div>
    </form>
  );
};

export default LeadForm;
