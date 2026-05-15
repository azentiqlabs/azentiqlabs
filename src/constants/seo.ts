// SEO and meta tag constants
export const SEO_DEFAULTS = {
  TITLE: 'Azentiq Labs - Technology That Transforms Ideas Into Reality',
  DESCRIPTION: 'Leading software development company in Pune, India. We specialize in web development, mobile apps, custom software, and digital marketing solutions.',
  KEYWORDS: 'software development, web development, mobile apps, digital marketing, Pune, India, custom software',
  AUTHOR: 'Azentiq Labs',
  ROBOTS: 'index, follow',
  CANONICAL: 'https://azentiqlabs.com',
} as const;

export const OPEN_GRAPH = {
  TYPE: 'website',
  SITE_NAME: 'Azentiq Labs',
  IMAGE: '/images/og-image.jpg',
  IMAGE_WIDTH: 1200,
  IMAGE_HEIGHT: 630,
  IMAGE_ALT: 'Azentiq Labs - Technology Solutions',
  LOCALE: 'en_US',
} as const;

export const TWITTER_CARD = {
  CARD: 'summary_large_image',
  SITE: '@azentiqlabs',
  CREATOR: '@azentiqlabs',
  IMAGE: '/images/twitter-card.jpg',
  IMAGE_ALT: 'Azentiq Labs - Technology Solutions',
} as const;

export const SCHEMA_ORG = {
  ORGANIZATION: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Azentiq Labs',
    url: 'https://azentiqlabs.com',
    logo: 'https://azentiqlabs.com/images/logo.png',
    description: 'Leading software development company specializing in web development, mobile apps, and digital solutions.',
    foundingDate: '2021',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-83293-05232',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: 'en',
    },
    sameAs: [
      'https://linkedin.com/company/azentiqlabs',
      'https://github.com/azentiqlabs',
      'https://twitter.com/azentiqlabs',
    ],
  },

  WEBSITE: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Azentiq Labs',
    url: 'https://azentiqlabs.com',
    description: 'Technology solutions for modern businesses',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://azentiqlabs.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
} as const;

export const META_ROBOTS = {
  INDEX_FOLLOW: 'index, follow',
  NO_INDEX_FOLLOW: 'noindex, follow',
  INDEX_NO_FOLLOW: 'index, nofollow',
  NO_INDEX_NO_FOLLOW: 'noindex, nofollow',
} as const;

export const PAGE_TITLES = {
  HOME: 'Azentiq Labs - Technology That Transforms Ideas Into Reality',
  SERVICES: 'Our Services - Web Development, Mobile Apps & More | Azentiq Labs',
  WHY_US: 'Why Choose Us - Proven Track Record & Quality Guarantee | Azentiq Labs',
  TESTIMONIALS: 'Client Testimonials & Success Stories | Azentiq Labs',
  RESULTS: 'Before & After Results - Real Client Transformations | Azentiq Labs',
  STRATEGY: 'Our Strategy & Process - How We Deliver Excellence | Azentiq Labs',
  CONTACT: 'Contact Us - Get Your Free Consultation | Azentiq Labs',
  ABOUT: 'About Azentiq Labs - Our Story & Mission',
  CAREERS: 'Careers at Azentiq Labs - Join Our Team',
  BLOG: 'Blog - Insights & Updates from Azentiq Labs',
} as const;

export const PAGE_DESCRIPTIONS = {
  HOME: 'Leading software development company in Pune, India. We specialize in web development, mobile apps, custom software, and digital marketing solutions.',
  SERVICES: 'Comprehensive technology services including web development, mobile apps, custom software, e-commerce solutions, and digital marketing.',
  WHY_US: 'Why choose Azentiq Labs? Quality assurance, on-time delivery, 24/7 support, and proven results that drive business growth.',
  TESTIMONIALS: 'Read what our satisfied clients say about working with Azentiq Labs. Real testimonials from real businesses.',
  RESULTS: 'See the transformation results - before and after case studies showing how we\'ve helped businesses achieve remarkable growth.',
  STRATEGY: 'Learn about our proven development strategy and process that ensures quality, timely delivery, and client satisfaction.',
  CONTACT: 'Ready to start your project? Contact Azentiq Labs for a free consultation. We\'re here to help transform your ideas into reality.',
} as const;