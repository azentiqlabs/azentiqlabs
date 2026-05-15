// Environment and configuration constants
const env = (import.meta as any).env as Record<string, string | undefined>;

export const ENVIRONMENT = {
  NODE_ENV: env.VITE_NODE_ENV || 'development',
  IS_PRODUCTION: env.VITE_NODE_ENV === 'production',
  IS_DEVELOPMENT: env.VITE_NODE_ENV === 'development',
  IS_TEST: env.VITE_NODE_ENV === 'test',
  IS_STAGING: env.VITE_ENV === 'staging',

  VERSION: env.VITE_VERSION || '1.0.0',
  BUILD_DATE: env.VITE_BUILD_DATE || new Date().toISOString(),
  COMMIT_HASH: env.VITE_COMMIT_HASH || 'development',
} as const;

// Feature flags
export const FEATURES = {
  ENABLE_ANALYTICS: env.VITE_ENABLE_ANALYTICS === 'true',
  ENABLE_NEWSLETTER: env.VITE_ENABLE_NEWSLETTER !== 'false',
  ENABLE_CHAT_WIDGET: env.VITE_ENABLE_CHAT_WIDGET === 'true',
  ENABLE_DARK_MODE: env.VITE_ENABLE_DARK_MODE === 'true',
  ENABLE_MULTILINGUAL: env.VITE_ENABLE_MULTILINGUAL === 'true',
  ENABLE_PWA: env.VITE_ENABLE_PWA === 'true',
  ENABLE_MAINTENANCE_MODE: env.VITE_ENABLE_MAINTENANCE_MODE === 'true',
} as const;

// External service configurations
export const EXTERNAL_SERVICES = {
  ANALYTICS: {
    GA_TRACKING_ID: env.VITE_GA_TRACKING_ID,
    GTAG_ID: env.VITE_GTAG_ID,
    HOTJAR_ID: env.VITE_HOTJAR_ID,
  },

  MARKETING: {
    MAILCHIMP_API_KEY: env.VITE_MAILCHIMP_API_KEY,
    MAILCHIMP_LIST_ID: env.VITE_MAILCHIMP_LIST_ID,
  },

  COMMUNICATION: {
    WHATSAPP_NUMBER: env.VITE_WHATSAPP_NUMBER,
    TELEGRAM_BOT_TOKEN: env.VITE_TELEGRAM_BOT_TOKEN,
  },

  PAYMENT: {
    STRIPE_PUBLISHABLE_KEY: env.VITE_STRIPE_PUBLISHABLE_KEY,
    RAZORPAY_KEY_ID: env.VITE_RAZORPAY_KEY_ID,
  },
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'azentiq_theme',
  LANGUAGE: 'azentiq_language',
  USER_PREFERENCES: 'azentiq_user_preferences',
  FORM_DATA: 'azentiq_form_data',
  ANALYTICS_CONSENT: 'azentiq_analytics_consent',
  COOKIE_CONSENT: 'azentiq_cookie_consent',
  LAST_VISIT: 'azentiq_last_visit',
} as const;

// Cache configuration
export const CACHE_CONFIG = {
  TTL: {
    STATIC_DATA: 24 * 60 * 60 * 1000, // 24 hours
    API_DATA: 5 * 60 * 1000, // 5 minutes
    USER_DATA: 60 * 60 * 1000, // 1 hour
  },
  MAX_SIZE: 50 * 1024 * 1024, // 50MB
} as const;