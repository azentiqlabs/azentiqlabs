// Main constants export file - organized like API constants
export * from './api';
export * from './ui';
export * from './navigation';
export * from './content';
export * from './forms';
export * from './environment';
export * from './seo';
export * from './analytics';

// Legacy exports for backward compatibility
// export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.azentiqlabs.com';
export const SITE_NAME = 'Azentiq Labs';
export const SITE_TAGLINE = 'Technology That Transforms Ideas Into Reality';

// UI Constants
export const UI = {
  BREAKPOINTS: {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1200,
    LARGE: 1440,
  },

  COLORS: {
    PRIMARY: '#C9A84C',
    PRIMARY_DARK: '#b8942e',
    SECONDARY: '#060a12',
    ACCENT: '#52e07a',
    ERROR: '#e05252',
    WARNING: '#f59e0b',
    SUCCESS: '#52e07a',

    TEXT: {
      PRIMARY: '#fff',
      SECONDARY: '#6a7d94',
      MUTED: '#7a8fa8',
      DARK: '#060a12',
    },

    BACKGROUND: {
      PRIMARY: '#060a12',
      SECONDARY: '#0a1220',
      ACCENT: '#C9A84C',
      CARD: 'rgba(255,255,255,0.02)',
      HOVER: 'rgba(201,168,76,0.03)',
    },

    BORDER: {
      LIGHT: 'rgba(255,255,255,0.06)',
      MEDIUM: 'rgba(201,168,76,0.2)',
      ACCENT: 'rgba(201,168,76,0.3)',
    },
  },

  SPACING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
    XXL: 48,
    XXXL: 64,
  },

  FONT_SIZES: {
    XS: 10,
    SM: 12,
    MD: 14,
    LG: 16,
    XL: 18,
    XXL: 20,
    XXXL: 24,
    HUGE: 32,
    MASSIVE: 48,
  },

  FONT_WEIGHTS: {
    LIGHT: 300,
    NORMAL: 400,
    MEDIUM: 500,
    SEMI_BOLD: 600,
    BOLD: 700,
    EXTRA_BOLD: 800,
    BLACK: 900,
  },

  BORDER_RADIUS: {
    SM: 4,
    MD: 8,
    LG: 12,
    XL: 16,
    XXL: 20,
    FULL: 50,
  },

  SHADOWS: {
    SM: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    MD: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    LG: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    XL: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    GLOW: '0 6px 30px rgba(201,168,76,0.4)',
  },

  Z_INDEX: {
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
  },
} as const;

// Content Constants
export const CONTENT = {
  SITE: {
    NAME: 'Azentiq Labs',
    TAGLINE: 'Technology That Transforms Ideas Into Reality',
    DESCRIPTION: 'We help businesses thrive in the digital world with innovative, reliable, and scalable IT solutions.',
    KEYWORDS: ['web development', 'mobile apps', 'software development', 'digital marketing', 'UI/UX design'],
  },

  CONTACT: {
    PHONE: '+91 83293 05232',
    EMAIL: 'azentiqlabs@gmail.com',
    ADDRESS: 'Pune, Maharashtra, India',
    WHATSAPP: '+918329305232',
  },

  SOCIAL: {
    LINKEDIN: 'https://linkedin.com/company/azentiqlabs',
    GITHUB: 'https://github.com/azentiqlabs',
    TWITTER: 'https://twitter.com/azentiqlabs',
    INSTAGRAM: 'https://instagram.com/azentiqlabs',
  },

  BUSINESS: {
    FOUNDED: 2021,
    EMPLOYEES: '10-50',
    LOCATIONS: ['Pune', 'Akola', 'Amravati'],
    INDUSTRIES: ['Technology', 'E-commerce', 'Healthcare', 'Education', 'Logistics'],
  },
} as const;

// Navigation Constants
export const NAVIGATION = {
  LINKS: [
    { label: 'Home', path: '/', id: 'home' },
    { label: 'Services', path: '/services', id: 'services' },
    { label: 'Why Us', path: '/why-us', id: 'why-us' },
    { label: 'Testimonials', path: '/testimonials', id: 'testimonials' },
    { label: 'Results', path: '/before-after', id: 'before-after' },
    { label: 'Strategy', path: '/strategy', id: 'strategy' },
    { label: 'Contact', path: '/contact', id: 'contact' },
  ],

  FOOTER_LINKS: {
    SERVICES: [
      { label: 'Website Development', path: '/services#web-dev' },
      { label: 'Mobile Apps', path: '/services#mobile' },
      { label: 'Custom Software', path: '/services#software' },
      { label: 'E-Commerce', path: '/services#ecommerce' },
      { label: 'Digital Marketing', path: '/services#marketing' },
      { label: 'UI/UX Design', path: '/services#design' },
    ],
    COMPANY: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/team' },
      { label: 'Careers', path: '/careers' },
      { label: 'Blog', path: '/blog' },
      { label: 'Case Studies', path: '/case-studies' },
    ],
    SUPPORT: [
      { label: 'Help Center', path: '/help' },
      { label: 'Documentation', path: '/docs' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Contact Support', path: '/support' },
    ],
  },
} as const;

// Form Constants
export const FORMS = {
  VALIDATION: {
    NAME: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 50,
      PATTERN: /^[a-zA-Z\s]+$/,
    },
    EMAIL: {
      PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    PHONE: {
      PATTERN: /^[\+]?[1-9][\d]{0,15}$/,
      MIN_LENGTH: 10,
      MAX_LENGTH: 15,
    },
    MESSAGE: {
      MIN_LENGTH: 10,
      MAX_LENGTH: 1000,
    },
  },

  PLACEHOLDERS: {
    NAME: 'Your full name',
    EMAIL: 'your.email@example.com',
    PHONE: '+91 98765 43210',
    MESSAGE: 'Tell us about your project...',
  },

  SERVICES: [
    'Website Development',
    'Mobile App Development',
    'Custom Software',
    'E-Commerce Solutions',
    'Digital Marketing',
    'UI/UX Design',
    'Consultation',
    'Other',
  ],
} as const;

// Animation Constants
export const ANIMATIONS = {
  DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },

  EASING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
    LINEAR: 'linear',
  },

  DELAYS: {
    XS: 100,
    SM: 200,
    MD: 300,
    LG: 400,
    XL: 500,
  },
} as const;

// SEO Constants
export const SEO = {
  DEFAULT_TITLE: 'Azentiq Labs - Technology That Transforms Ideas Into Reality',
  DEFAULT_DESCRIPTION: 'Leading software development company in Pune, India. We specialize in web development, mobile apps, custom software, and digital marketing solutions.',
  DEFAULT_KEYWORDS: 'software development, web development, mobile apps, digital marketing, Pune, India',

  OG_IMAGE: '/images/og-image.jpg',
  TWITTER_CARD: 'summary_large_image',

  SCHEMA: {
    ORGANIZATION: {
      '@type': 'Organization',
      name: 'Azentiq Labs',
      url: 'https://azentiqlabs.com',
      logo: 'https://azentiqlabs.com/images/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-83293-05232',
        contactType: 'customer service',
      },
    },
  },
} as const;

// Analytics Constants
// export const ANALYTICS = {
//   GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID || 'GA_MEASUREMENT_ID',
//   GTAG_ID: process.env.REACT_APP_GTAG_ID || 'GTAG_ID',

//   EVENTS: {
//     CONTACT_FORM_SUBMIT: 'contact_form_submit',
//     SERVICE_INQUIRY: 'service_inquiry',
//     PROJECT_VIEW: 'project_view',
//     DOWNLOAD_BROCHURE: 'download_brochure',
//     PHONE_CLICK: 'phone_click',
//     EMAIL_CLICK: 'email_click',
//   },

//   CATEGORIES: {
//     ENGAGEMENT: 'engagement',
//     CONVERSION: 'conversion',
//     INTERACTION: 'interaction',
//   },
// } as const;

// Error Constants
export const ERRORS = {
  MESSAGES: {
    NETWORK_ERROR: 'Network connection failed. Please check your internet connection.',
    SERVER_ERROR: 'Server error occurred. Please try again later.',
    VALIDATION_ERROR: 'Please check your input and try again.',
    FORM_SUBMIT_ERROR: 'Failed to submit form. Please try again.',
    NOT_FOUND: 'The requested resource was not found.',
    UNAUTHORIZED: 'You are not authorized to access this resource.',
  },

  CODES: {
    NETWORK_ERROR: 'NETWORK_ERROR',
    SERVER_ERROR: 'SERVER_ERROR',
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    FORM_ERROR: 'FORM_ERROR',
    NOT_FOUND: 'NOT_FOUND',
    UNAUTHORIZED: 'UNAUTHORIZED',
  },
} as const;

// Feature Flags
// export const FEATURES = {
//   ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
//   ENABLE_NEWSLETTER: true,
//   ENABLE_CHAT_WIDGET: false,
//   ENABLE_DARK_MODE: false,
//   ENABLE_MULTILINGUAL: false,
//   ENABLE_PWA: false,
// } as const;

// // Environment Constants
// export const ENVIRONMENT = {
//   IS_PRODUCTION: process.env.NODE_ENV === 'production',
//   IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
//   IS_TEST: process.env.NODE_ENV === 'test',

//   VERSION: process.env.REACT_APP_VERSION || '1.0.0',
//   BUILD_DATE: process.env.REACT_APP_BUILD_DATE || new Date().toISOString(),
// } as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'azentiq_theme',
  LANGUAGE: 'azentiq_language',
  USER_PREFERENCES: 'azentiq_user_preferences',
  FORM_DATA: 'azentiq_form_data',
  ANALYTICS_CONSENT: 'azentiq_analytics_consent',
} as const;

// Time Constants
export const TIME = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,

  FORMATS: {
    DATE: 'DD/MM/YYYY',
    TIME: 'HH:mm:ss',
    DATETIME: 'DD/MM/YYYY HH:mm:ss',
    ISO: 'YYYY-MM-DDTHH:mm:ssZ',
  },
} as const;

// File Upload Constants
export const UPLOAD = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  MAX_FILES: 5,

  MESSAGES: {
    FILE_TOO_LARGE: 'File size must be less than 10MB',
    INVALID_TYPE: 'File type not supported',
    TOO_MANY_FILES: 'Maximum 5 files allowed',
  },
} as const;