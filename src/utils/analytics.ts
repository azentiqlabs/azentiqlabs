import { ANALYTICS_CONFIG } from '../constants/analytics';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const isBrowser = typeof window !== 'undefined';

const ensureAnalyticsReady = () => {
  return isBrowser && ANALYTICS_CONFIG.ENABLE_ANALYTICS && Boolean(ANALYTICS_CONFIG.GTAG_ID);
};

export const initGoogleAnalytics = () => {
  if (!ensureAnalyticsReady()) {
    return;
  }

  if (window.gtag) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GTAG_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', ANALYTICS_CONFIG.GTAG_ID, { send_page_view: false });
};

export const trackPageView = (path: string) => {
  if (!ensureAnalyticsReady() || !window.gtag) {
    return;
  }

  window.gtag('config', ANALYTICS_CONFIG.GTAG_ID, {
    page_path: path,
  });
};

export type AnalyticsEventPayload = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

export const trackEvent = ({ action, category, label, value, ...extra }: AnalyticsEventPayload) => {
  if (!ensureAnalyticsReady() || !window.gtag) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    ...extra,
  });
};
