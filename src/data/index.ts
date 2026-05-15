import type { Service, WhyItem, Stat, NavLink } from "../types";

// Startup configuration
const STARTUP_START_DATE = new Date('2026-04-25'); // Day 1 of business

// Utility function to calculate days in business
const getDaysInBusiness = (): number => {
  const today = new Date();
  const diffTime = today.getTime() - STARTUP_START_DATE.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays); // Ensure at least day 1
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Why Us", id: "why-us" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Results", id: "before-after" },
  { label: "Strategy", id: "strategy" },
  { label: "Contact", id: "contact" },
];

export const SERVICES: Service[] = [
  { icon: "⌨️", title: "Website Development", desc: "Modern, responsive & SEO-optimised websites engineered to convert visitors into loyal customers.", tags: ["React", "Next.js", "SEO"] },
  { icon: "📱", title: "Mobile App Development", desc: "Native & cross-platform Android and iOS apps delivering seamless, engaging experiences.", tags: ["Flutter", "React Native", "iOS/Android"] },
  { icon: "⚙️", title: "Custom Software", desc: "Powerful, scalable & secure software solutions purpose-built for your unique business workflows.", tags: ["Node.js", "Python", "Microservices"] },
  { icon: "🛒", title: "E-Commerce Solutions", desc: "High-converting online stores packed with smart features and frictionless UX.", tags: ["Shopify", "WooCommerce", "Custom"] },
  { icon: "📣", title: "Digital Marketing", desc: "Data-driven strategies that grow your brand, amplify reach, and attract more qualified clients.", tags: ["SEO", "PPC", "Social"] },
  { icon: "🎨", title: "UI/UX Design", desc: "Research-led, pixel-perfect designs that captivate users and drive measurable business outcomes.", tags: ["Figma", "Prototyping", "Research"] },
];

export const WHY_US: WhyItem[] = [
  { icon: "🛡️", title: "Quality Assurance", desc: "High quality code with industry best practices and rigorous testing." },
  { icon: "⏰", title: "On-Time Delivery", desc: "We respect your deadlines and deliver on schedule, every time." },
  { icon: "🎧", title: "24/7 Support", desc: "Our team is always on standby — day or night — to assist you." },
  { icon: "💰", title: "Affordable Pricing", desc: "Premium solutions crafted to fit within your budget constraints." },
  { icon: "🤝", title: "Client Satisfaction", desc: "Your success is our KPI. We don't stop until you're delighted." },
];

export const STATS: Stat[] = [
  { num: getDaysInBusiness().toString(), label: "Days in Business" },
  { num: "10+", label: "Projects" },
  { num: "100%", label: "Dedication" },
  { num: "∞", label: "Growth Potential" },
];

export const CITIES = ["Pune", "Akola", "Amravati"];

export const CONTACT_INFO = [
  { icon: "📞", label: "Call / WhatsApp", value: "+91 83293 05232", href: "tel:+918329305232" },
  { icon: "✉️", label: "Email Us", value: "azentiqlabs@gmail.com", href: "mailto:azentiqlabs@gmail.com" },
  { icon: "📍", label: "Location", value: "Pune, Maharashtra, India", href: null },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    role: "Founder, TechVista Solutions",
    location: "Pune",
    rating: 5,
    text: "Azentiq Labs transformed our outdated website into a revenue-generating machine. Within 3 months of launch, our leads increased by 240%. Their team understood our vision perfectly and delivered beyond expectations.",
    avatar: "RS",
    project: "Website Redesign + SEO",
  },
  {
    name: "Priya Kulkarni",
    role: "CEO, FreshBite Delivery",
    location: "Mumbai",
    rating: 5,
    text: "We needed a food delivery app that could handle 10,000+ daily orders. Azentiq built exactly that — on time and on budget. The app's performance is flawless and our customers love the UX.",
    avatar: "PK",
    project: "Mobile App Development",
  },
  {
    name: "Amit Deshmukh",
    role: "Director, Krishi Agro Exports",
    location: "Akola",
    rating: 5,
    text: "As a traditional business entering the digital world, we were nervous. Azentiq Labs held our hand through the entire process. Our e-commerce store now generates ₹15L+ monthly — something we never thought possible.",
    avatar: "AD",
    project: "E-Commerce Platform",
  },
  {
    name: "Sneha Joshi",
    role: "Marketing Head, EduSpark Institute",
    location: "Amravati",
    rating: 5,
    text: "Their digital marketing team is extraordinary. Our Google Ads ROI went from 1.2x to 4.8x in just 6 weeks. Transparent reporting, proactive communication — they're not just vendors, they're partners.",
    avatar: "SJ",
    project: "Digital Marketing",
  },
  {
    name: "Vikram Patil",
    role: "CTO, LogiTrack Enterprises",
    location: "Pune",
    rating: 5,
    text: "We hired Azentiq for a complex logistics management system with real-time tracking. They delivered a robust, scalable solution that cut our operational costs by 35%. Exceptional technical expertise.",
    avatar: "VP",
    project: "Custom Software",
  },
  {
    name: "Meera Nair",
    role: "Owner, StyleCraft Boutique",
    location: "Nagpur",
    rating: 5,
    text: "My boutique needed a beautiful online store. Azentiq Labs created something stunning — the design is exactly on-brand and the checkout experience is seamless. Sales doubled in the first month!",
    avatar: "MN",
    project: "E-Commerce + UI Design",
  },
];

export const BEFORE_AFTER = [
  {
    label: "E-Commerce Store",
    client: "Krishi Agro Exports",
    before: {
      title: "Before Azentiq",
      points: ["No online presence", "100% offline sales only", "Zero digital leads", "Manual order tracking", "Limited to local market"],
      metric: "₹0/month online",
      color: "#e05252",
    },
    after: {
      title: "After Azentiq",
      points: ["Full e-commerce platform", "Pan-India customer reach", "500+ monthly online orders", "Automated inventory system", "B2B + B2C portal launched"],
      metric: "₹15L+/month online",
      color: "#52e07a",
    },
    timeframe: "8 weeks to launch",
    icon: "🛒",
  },
  {
    label: "Digital Marketing",
    client: "EduSpark Institute",
    before: {
      title: "Before Azentiq",
      points: ["1.2x Google Ads ROI", "High cost per lead (₹850)", "Low brand visibility", "No SEO strategy", "Declining enrollment"],
      metric: "12 leads/month",
      color: "#e05252",
    },
    after: {
      title: "After Azentiq",
      points: ["4.8x Google Ads ROI", "Cost per lead reduced to ₹180", "Top 3 Google rankings", "2,800% organic traffic growth", "Record enrollment season"],
      metric: "180+ leads/month",
      color: "#52e07a",
    },
    timeframe: "6 weeks to results",
    icon: "📣",
  },
  {
    label: "Website Redesign",
    client: "TechVista Solutions",
    before: {
      title: "Before Azentiq",
      points: ["Outdated 2015 design", "8.2s page load time", "3% conversion rate", "Not mobile-friendly", "Zero SEO ranking"],
      metric: "18 leads/month",
      color: "#e05252",
    },
    after: {
      title: "After Azentiq",
      points: ["Modern, premium design", "1.1s page load time", "11% conversion rate", "Perfect mobile experience", "Page 1 for 40+ keywords"],
      metric: "61 leads/month (+240%)",
      color: "#52e07a",
    },
    timeframe: "4 weeks to launch",
    icon: "⌨️",
  },
];
