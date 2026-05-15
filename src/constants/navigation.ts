// Navigation and routing constants
export const NAV_LINKS = [
  { label: 'Home', path: '/', id: 'home' },
  { label: 'Services', path: '/services', id: 'services' },
  { label: 'Why Us', path: '/why-us', id: 'why-us' },
  { label: 'Testimonials', path: '/testimonials', id: 'testimonials' },
  { label: 'Results', path: '/before-after', id: 'before-after' },
  { label: 'Strategy', path: '/strategy', id: 'strategy' },
  { label: 'Contact', path: '/contact', id: 'contact' },
] as const;

export const FOOTER_LINKS = {
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
} as const;

export const BREADCRUMB_LABELS = {
  HOME: 'Home',
  SERVICES: 'Services',
  WHY_US: 'Why Choose Us',
  TESTIMONIALS: 'Testimonials',
  RESULTS: 'Results',
  STRATEGY: 'Strategy',
  CONTACT: 'Contact',
  ABOUT: 'About',
  TEAM: 'Team',
  CAREERS: 'Careers',
  BLOG: 'Blog',
} as const;