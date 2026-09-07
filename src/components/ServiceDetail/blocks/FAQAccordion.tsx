import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export interface FAQItemProps {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  id?: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  children,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
  id: customId
}) => {
  const autoId = useId();
  const baseId = customId || autoId;
  const triggerId = `faq-trigger-${baseId}`;
  const panelId = `faq-panel-${baseId}`;

  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(prev => !prev);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        id={triggerId}
        className="faq-trigger-btn"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="faq-question-text">{question}</span>
        <ChevronDown
          size={18}
          className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            className="faq-answer-pane"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="faq-answer-text">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export interface FAQAccordionProps {
  eyebrow?: string;
  title?: string;
  leadText?: string;
  children: React.ReactNode;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  eyebrow = 'COMMON INQUIRIES // FAQ',
  title = 'Frequently Asked Technical Questions',
  leadText,
  children
}) => {
  return (
    <section className="service-faqs-section">
      <div className="service-detail-container">
        <div className="section-header-block">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-h2">{title}</h2>
          {leadText && <p className="section-lead-text">{leadText}</p>}
        </div>

        <div className="faqs-accordion-wrapper">
          {children}
        </div>
      </div>
    </section>
  );
};
