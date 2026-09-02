import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLeadModal } from '../../context/LeadModalContext';
import logoImg from '../../assets/logo.png';
import LeadForm from './LeadForm';
import './LeadModal.css';

export const LeadModal: React.FC = () => {
  const { isOpen, preselectedService, closeLeadModal } = useLeadModal();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLeadModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Save previous overflow and prevent background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, closeLeadModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="lead-modal-portal">
          {/* Backdrop Blur Overlay */}
          <motion.div
            className="lead-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLeadModal}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="lead-modal-scroll-wrapper" onClick={(e) => {
            if (e.target === e.currentTarget) closeLeadModal();
          }}>
            <motion.div
              ref={modalRef}
              className="lead-modal-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Conic Border Beam */}
              <div className="modal-conic-border-wrapper">
                <div className="modal-conic-border-spinner" />
              </div>

              {/* Modal Inner Surface */}
              <div className="lead-modal-inner">
                {/* Modal Top Bar */}
                <div className="lead-modal-header">
                  <div className="modal-header-brand">
                    <img src={logoImg} alt="Dynova Cloud official logo" className="modal-logo-img" />
                    <div className="modal-header-titles">
                      <span className="modal-brand-tag">DYNOVA CLOUD // DIRECT INTAKE</span>
                      <h2 id="modal-title" className="modal-title">Initiate Project Blueprint</h2>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={closeLeadModal}
                    aria-label="Close project blueprint modal"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Lead Form Content */}
                <div className="lead-modal-body">
                  <LeadForm 
                    variant="modal" 
                    initialService={preselectedService} 
                  />
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
