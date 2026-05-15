// UI and Design constants
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200,
  LARGE: 1440,
} as const;

export const COLORS = {
  // Brand Colors
  PRIMARY: '#C9A84C',
  PRIMARY_DARK: '#b8942e',
  SECONDARY: '#060a12',
  ACCENT: '#52e07a',

  // Status Colors
  SUCCESS: '#52e07a',
  ERROR: '#e05252',
  WARNING: '#f59e0b',
  INFO: '#3b82f6',

  // Text Colors
  TEXT_PRIMARY: '#fff',
  TEXT_SECONDARY: '#6a7d94',
  TEXT_MUTED: '#7a8fa8',
  TEXT_DARK: '#060a12',

  // Background Colors
  BG_PRIMARY: '#060a12',
  BG_SECONDARY: '#0a1220',
  BG_ACCENT: '#C9A84C',
  BG_CARD: 'rgba(255,255,255,0.02)',
  BG_HOVER: 'rgba(201,168,76,0.03)',

  // Border Colors
  BORDER_LIGHT: 'rgba(255,255,255,0.06)',
  BORDER_MEDIUM: 'rgba(201,168,76,0.2)',
  BORDER_ACCENT: 'rgba(201,168,76,0.3)',
} as const;

export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 48,
  XXXL: 64,
} as const;

export const FONT_SIZES = {
  XS: 10,
  SM: 12,
  MD: 14,
  LG: 16,
  XL: 18,
  XXL: 20,
  XXXL: 24,
  HUGE: 32,
  MASSIVE: 48,
} as const;

export const FONT_WEIGHTS = {
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
} as const;

export const BORDER_RADIUS = {
  SM: 4,
  MD: 8,
  LG: 12,
  XL: 16,
  XXL: 20,
  FULL: 50,
} as const;

export const SHADOWS = {
  SM: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  MD: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  LG: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  XL: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  GLOW: '0 6px 30px rgba(201,168,76,0.4)',
} as const;

export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
} as const;