export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
  honeypot?: string;
}

export type FormErrors = Partial<Record<keyof LeadFormData, string>>;

export interface ServiceOption {
  id: string;
  label: string;
  description: string;
}

export const SERVICE_OPTIONS: ServiceOption[] = [
  { id: 'web-dev', label: 'Web Development', description: 'Custom web apps, platforms & high-performance portals' },
  { id: 'ecommerce', label: 'E-Commerce', description: 'Scalable online stores, custom checkout & Shopify Plus' },
  { id: 'digital-marketing', label: 'Digital Marketing', description: 'Growth strategies, SEO & multi-channel acquisition' },
  { id: 'meta-ads', label: 'Meta Ads', description: 'High-ROI paid campaigns across Instagram & Facebook' },
  { id: 'social-media', label: 'Social Media Management', description: 'Brand positioning, content creation & community growth' },
  { id: 'analytics', label: 'Analytics & Reporting', description: 'Attribution modeling, data pipelines & conversion tracking' },
  { id: 'other', label: 'Other', description: 'Bespoke software architecture, consulting & custom scopes' },
];

export const BUDGET_OPTIONS: string[] = [
  '< $5,000',
  '$5,000 - $15,000',
  '$15,000 - $35,000',
  '$35,000 - $75,000',
  '$75,000+',
];

export const TIMELINE_OPTIONS: string[] = [
  'Immediate (< 1 month)',
  '1 - 3 months',
  '3 - 6 months',
  'Flexible',
];
