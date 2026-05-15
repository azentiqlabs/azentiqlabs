// // Environment and configuration constants
// export const ENVIRONMENT = {
//   NODE_ENV: process.env.NODE_ENV,
//   IS_PRODUCTION: process.env.NODE_ENV === 'production',
//   IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
//   IS_TEST: process.env.NODE_ENV === 'test',
//   IS_STAGING: process.env.REACT_APP_ENV === 'staging',

//   VERSION: process.env.REACT_APP_VERSION || '1.0.0',
//   BUILD_DATE: process.env.REACT_APP_BUILD_DATE || new Date().toISOString(),
//   COMMIT_HASH: process.env.REACT_APP_COMMIT_HASH || 'development',
// } as const;

// // Feature flags
// export const FEATURES = {
//   ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
//   ENABLE_NEWSLETTER: process.env.REACT_APP_ENABLE_NEWSLETTER !== 'false',
//   ENABLE_CHAT_WIDGET: process.env.REACT_APP_ENABLE_CHAT_WIDGET === 'true',
//   ENABLE_DARK_MODE: process.env.REACT_APP_ENABLE_DARK_MODE === 'true',
//   ENABLE_MULTILINGUAL: process.env.REACT_APP_ENABLE_MULTILINGUAL === 'true',
//   ENABLE_PWA: process.env.REACT_APP_ENABLE_PWA === 'true',
//   ENABLE_MAINTENANCE_MODE: process.env.REACT_APP_MAINTENANCE_MODE === 'true',
// } as const;

// // External service configurations
// export const EXTERNAL_SERVICES = {
//   ANALYTICS: {
//     GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID,
//     GTAG_ID: process.env.REACT_APP_GTAG_ID,
//     HOTJAR_ID: process.env.REACT_APP_HOTJAR_ID,
//   },

//   MARKETING: {
//     MAILCHIMP_API_KEY: process.env.REACT_APP_MAILCHIMP_API_KEY,
//     MAILCHIMP_LIST_ID: process.env.REACT_APP_MAILCHIMP_LIST_ID,
//   },

//   COMMUNICATION: {
//     WHATSAPP_NUMBER: process.env.REACT_APP_WHATSAPP_NUMBER,
//     TELEGRAM_BOT_TOKEN: process.env.REACT_APP_TELEGRAM_BOT_TOKEN,
//   },

//   PAYMENT: {
//     STRIPE_PUBLISHABLE_KEY: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
//     RAZORPAY_KEY_ID: process.env.REACT_APP_RAZORPAY_KEY_ID,
//   },
// } as const;

// // Local storage keys
// export const STORAGE_KEYS = {
//   THEME: 'azentiq_theme',
//   LANGUAGE: 'azentiq_language',
//   USER_PREFERENCES: 'azentiq_user_preferences',
//   FORM_DATA: 'azentiq_form_data',
//   ANALYTICS_CONSENT: 'azentiq_analytics_consent',
//   COOKIE_CONSENT: 'azentiq_cookie_consent',
//   LAST_VISIT: 'azentiq_last_visit',
// } as const;

// // Cache configuration
// export const CACHE_CONFIG = {
//   TTL: {
//     STATIC_DATA: 24 * 60 * 60 * 1000, // 24 hours
//     API_DATA: 5 * 60 * 1000, // 5 minutes
//     USER_DATA: 60 * 60 * 1000, // 1 hour
//   },
//   MAX_SIZE: 50 * 1024 * 1024, // 50MB
// } as const;