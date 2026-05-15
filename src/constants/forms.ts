// Form validation and configuration constants
export const FORM_VALIDATION = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: /^[a-zA-Z\s]+$/,
    REQUIRED: true,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    REQUIRED: true,
  },
  PHONE: {
    PATTERN: /^[\+]?[1-9][\d]{0,15}$/,
    MIN_LENGTH: 10,
    MAX_LENGTH: 15,
    REQUIRED: true,
  },
  MESSAGE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 1000,
    REQUIRED: true,
  },
  BUDGET: {
    REQUIRED: false,
  },
  TIMELINE: {
    REQUIRED: false,
  },
} as const;

export const SERVICE_OPTIONS = [
  'Website Development',
  'Mobile App Development',
  'Custom Software',
  'E-Commerce Solutions',
  'Digital Marketing',
  'UI/UX Design',
  'Consultation',
  'Other',
] as const;

export const BUDGET_RANGES = [
  'Under ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹5,00,000',
  '₹5,00,000 - ₹10,00,000',
  '₹10,00,000 - ₹25,00,000',
  'Above ₹25,00,000',
  'Discuss on call',
] as const;

export const TIMELINE_OPTIONS = [
  'ASAP (Rush)',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Flexible',
] as const;

export const FORM_STATUS = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export const FORM_CONFIG = {
  DEBOUNCE_DELAY: 300,
  SUBMIT_TIMEOUT: 10000,
  MAX_RETRIES: 3,
} as const;