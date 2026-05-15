// Static content and text constants
export const SITE_CONFIG = {
  NAME: 'Azentiq Labs',
  TAGLINE: 'Technology That Transforms Ideas Into Reality',
  DESCRIPTION: 'We help businesses thrive in the digital world with innovative, reliable, and scalable IT solutions.',
  KEYWORDS: ['web development', 'mobile apps', 'software development', 'digital marketing', 'UI/UX design'],
  // VERSION: process.env.REACT_APP_VERSION || '1.0.0',
} as const;

export const CONTACT_INFO = [
  { icon: "📞", label: "Call / WhatsApp", value: "+91 83293 05232", href: "tel:+918329305232" },
  { icon: "✉️", label: "Email Us", value: "azentiqlabs@gmail.com", href: "mailto:azentiqlabs@gmail.com" },
  { icon: "📍", label: "Location", value: "Pune, Maharashtra, India", href: null },
  { icon: "🕒", label: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM IST", href: null },
] as const;

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://linkedin.com/company/azentiqlabs',
  GITHUB: 'https://github.com/azentiqlabs',
  TWITTER: 'https://twitter.com/azentiqlabs',
  INSTAGRAM: 'https://instagram.com/azentiqlabs',
  FACEBOOK: 'https://facebook.com/azentiqlabs',
} as const;

export const BUSINESS_INFO = {
  FOUNDED_YEAR: 2021,
  EMPLOYEE_RANGE: '10-50',
  LOCATIONS: ['Pune', 'Akola', 'Amravati'],
  INDUSTRIES: ['Technology', 'E-commerce', 'Healthcare', 'Education', 'Logistics'],
  SPECIALIZATIONS: ['Web Development', 'Mobile Apps', 'Custom Software', 'Digital Marketing'],
} as const;

export const CTA_TEXT = {
  PRIMARY: 'Start Your Project',
  SECONDARY: 'Get Free Consultation',
  TERTIARY: 'View All Services',
  CONTACT: 'Get In Touch',
  DOWNLOAD: 'Download Brochure',
} as const;

export const FORM_LABELS = {
  NAME: 'Full Name',
  EMAIL: 'Email Address',
  PHONE: 'Phone Number',
  SERVICE: 'Service Required',
  MESSAGE: 'Project Details',
  BUDGET: 'Project Budget',
  TIMELINE: 'Timeline',
  SUBMIT: 'Send Message',
  SENDING: 'Sending...',
} as const;

export const FORM_PLACEHOLDERS = {
  NAME: 'Your full name',
  EMAIL: 'your.email@example.com',
  PHONE: '+91 98765 43210',
  MESSAGE: 'Tell us about your project, requirements, and timeline...',
  BUDGET: 'Select your budget range',
} as const;

export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  MESSAGE_TOO_SHORT: 'Message must be at least 10 characters',
  NETWORK_ERROR: 'Network error. Please try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  FORM_SUBMIT_ERROR: 'Failed to submit form. Please try again.',
} as const;

export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Thank you! Your message has been sent successfully.',
  NEWSLETTER_SUBSCRIBED: 'Successfully subscribed to our newsletter!',
  CONTACT_SOON: 'We\'ll get back to you within 24 hours.',
} as const;