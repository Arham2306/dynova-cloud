import { useContext } from 'react';
import LeadModalContext, { type LeadModalContextType } from './LeadModalContext';

export const useLeadModal = (): LeadModalContextType => {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error('useLeadModal must be used within a LeadModalProvider');
  }
  return context;
};

export default useLeadModal;
