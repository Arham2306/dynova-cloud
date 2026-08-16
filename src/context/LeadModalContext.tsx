/* oxlint-disable react/only-export-components */
import React, { createContext, useState, useCallback, useMemo } from 'react';

export interface LeadModalContextType {
  isOpen: boolean;
  preselectedService?: string;
  openLeadModal: (service?: string) => void;
  closeLeadModal: () => void;
}

export const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export const LeadModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const openLeadModal = useCallback((service?: string) => {
    setPreselectedService(service);
    setIsOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setIsOpen(false);
    setPreselectedService(undefined);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      preselectedService,
      openLeadModal,
      closeLeadModal
    }),
    [isOpen, preselectedService, openLeadModal, closeLeadModal]
  );

  return (
    <LeadModalContext.Provider value={value}>
      {children}
    </LeadModalContext.Provider>
  );
};

export { useLeadModal } from './useLeadModal';
export default LeadModalContext;
