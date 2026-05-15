// Analytics and tracking constants
// export const ANALYTICS_CONFIG = {
//   GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID,
//   GTAG_ID: process.env.REACT_APP_GTAG_ID,
//   HOTJAR_ID: process.env.REACT_APP_HOTJAR_ID,
//   MIXPANEL_TOKEN: process.env.REACT_APP_MIXPANEL_TOKEN,
//   FACEBOOK_PIXEL_ID: process.env.REACT_APP_FACEBOOK_PIXEL_ID,
// } as const;

export const ANALYTICS_EVENTS = {
  // Page Views
  PAGE_VIEW: 'page_view',
  HOME_PAGE_VIEW: 'home_page_view',
  SERVICES_PAGE_VIEW: 'services_page_view',
  CONTACT_PAGE_VIEW: 'contact_page_view',

  // User Interactions
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_SUCCESS: 'form_success',
  FORM_ERROR: 'form_error',

  // Business Events
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  SERVICE_INQUIRY: 'service_inquiry',
  PROJECT_VIEW: 'project_view',
  DOWNLOAD_BROCHURE: 'download_brochure',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  WHATSAPP_CLICK: 'whatsapp_click',

  // Engagement Events
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  VIDEO_PLAY: 'video_play',
  VIDEO_COMPLETE: 'video_complete',

  // E-commerce Events (if applicable)
  PRODUCT_VIEW: 'product_view',
  ADD_TO_CART: 'add_to_cart',
  BEGIN_CHECKOUT: 'begin_checkout',
  PURCHASE: 'purchase',
} as const;

export const ANALYTICS_CATEGORIES = {
  ENGAGEMENT: 'engagement',
  CONVERSION: 'conversion',
  INTERACTION: 'interaction',
  NAVIGATION: 'navigation',
  BUSINESS: 'business',
} as const;

export const ANALYTICS_LABELS = {
  PRIMARY_CTA: 'primary_cta',
  SECONDARY_CTA: 'secondary_cta',
  HEADER_NAV: 'header_nav',
  FOOTER_LINK: 'footer_link',
  SOCIAL_LINK: 'social_link',
  CONTACT_FORM: 'contact_form',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
} as const;

export const ANALYTICS_VALUES = {
  FORM_SUBMIT_SUCCESS: 1,
  FORM_SUBMIT_ERROR: 0,
  HIGH_ENGAGEMENT: 10,
  MEDIUM_ENGAGEMENT: 5,
  LOW_ENGAGEMENT: 1,
} as const;

export const TRACKING_CONFIG = {
  DEBOUNCE_DELAY: 100,
  SCROLL_DEPTH_THRESHOLDS: [25, 50, 75, 90],
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  MAX_CUSTOM_EVENTS: 100,
} as const;