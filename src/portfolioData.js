/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Edit this file to update your personal information, projects,
 * skills, experience, and contact details. Everything in the portfolio
 * automatically renders from this central data configuration.
 */

export const personalInfo = {
  name: "Amar Abbas",
  title: "WordPress / CMS Specialist & Web Developer",
  tagline: "Architecting high-converting WordPress sites, custom themes, and fast modern web apps.",
  bio: "I specialize in transforming complex business visions into ultra-fast, responsive, and secure digital experiences. With deep expertise in custom WordPress themes, bespoke plugins, WooCommerce architecture, modern JavaScript/React and Laravel, I bridge the gap between powerful CMS control and cutting-edge frontend performance.",
  location: "Available Worldwide / Remote",
  statusBadge: "Available for New Projects",
  email: "amarabbas1414@gmail.com",
  phone: "+92 3098915950",
  resumeUrl: "#resume", // Link to your downloadable resume PDF
  socials: {
    github: "https://github.com/AmarAbbas123",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    whatsapp: "https://wa.me/+923098915950",
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Completed Projects", value: "15+" },
    { label: "Average PageSpeed", value: "98/100" },
    { label: "Client Satisfaction", value: "100%" },
  ],
};

export const categories = [
  "All",
  "WordPress / WooCommerce",
  "Custom Themes & Plugins",
  "Headless & React",
  "Full-Stack Web",
];

export const projects = [
  {
    id: "project-1",
    title: "Apex Luxe E-Commerce",
    category: "WordPress / WooCommerce",
    featured: true,
    tagline: "High-volume luxury fashion storefront with bespoke checkout and sub-second load times.",
    description:
      "A high-performing WooCommerce enterprise platform handling 15,000+ monthly orders. Built with customized cart & checkout flows, Redis object caching, Stripe & PayPal custom gateways, and real-time inventory synchronization.",
    tags: ["WooCommerce", "WordPress", "PHP 8.2", "Tailwind CSS", "Redis Cache", "Stripe API"],
    metrics: {
      speedScore: 99,
      conversionBoost: "+38%",
      pageLoad: "0.7s",
    },
    imageGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)",
    liveDemo: "https://example.com/demo1",
    github: "https://github.com/example/apex-luxe",
    highlights: [
      "Custom Gutenberg blocks for editorial marketing pages",
      "Dynamic AJAX filtering for 2,000+ SKUs with zero page reload",
      "Automated transactional emails with custom HTML templates",
      "Headless order webhooks linked to external ERP software",
    ],
  },
  {
    id: "project-2",
    title: "VenturePulse Corporate Portal",
    category: "Custom Themes & Plugins",
    featured: true,
    tagline: "Custom WordPress block theme built with ACF Pro, FSE, and strict security hardening.",
    description:
      "A corporate digital hub for a venture capital firm. Crafted from scratch without heavy page builders, achieving top-tier Lighthouse scores and clean editorial control via Advanced Custom Fields Pro and custom Gutenberg blocks.",
    tags: ["Custom Theme", "ACF Pro", "Gutenberg FSE", "PHP", "SCSS", "SEO Optimization"],
    metrics: {
      speedScore: 98,
      conversionBoost: "+45%",
      pageLoad: "0.6s",
    },
    imageGradient: "linear-gradient(135deg, #065f46 0%, #10b981 50%, #14b8a6 100%)",
    liveDemo: "https://example.com/demo2",
    github: "https://github.com/example/venture-pulse",
    highlights: [
      "100% lightweight custom theme with 0 unnecessary vendor scripts",
      "Tailored custom post types for Portfolios, Partners, and Insights",
      "Multi-language support with Polylang integration",
      "Automated XML Sitemap and structured schema markup for top SEO ranking",
    ],
  },
  {
    id: "project-3",
    title: "Novafy Headless Magazine",
    category: "Headless & React",
    featured: true,
    tagline: "Next-gen editorial media platform combining WordPress REST API / GraphQL with React.",
    description:
      "A decoupled publishing system combining the easy content writing of WordPress admin with a lightning-fast React / Next.js frontend. Instant page navigation, static generation for articles, and live preview mode.",
    tags: ["Headless WordPress", "React.js", "WPGraphQL", "Node.js", "Tailwind CSS", "Vercel"],
    metrics: {
      speedScore: 100,
      conversionBoost: "+62%",
      pageLoad: "0.4s",
    },
    imageGradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #ec4899 100%)",
    liveDemo: "https://example.com/demo3",
    github: "https://github.com/example/novafy-headless",
    highlights: [
      "Decoupled architecture serving millions of monthly readers effortlessly",
      "Incremental Static Regeneration (ISR) for immediate post publishing",
      "Algolia instant search indexing content directly from WordPress hooks",
      "Dark mode and fluid reading experience designed with modern CSS",
    ],
  },
  {
    id: "project-4",
    title: "WP SpeedShield Optimizer",
    category: "Custom Themes & Plugins",
    featured: false,
    tagline: "Proprietary WordPress performance & asset optimization plugin.",
    description:
      "A custom-coded WordPress plugin that automatically defers uncritical JavaScript, converts image uploads to WebP/AVIF formats, minifies CSS on-the-fly, and provides pre-fetching rules.",
    tags: ["WordPress Plugin Dev", "PHP", "MySQL", "Core Web Vitals", "Asset Pipeline"],
    metrics: {
      speedScore: 100,
      conversionBoost: "+50%",
      pageLoad: "0.5s",
    },
    imageGradient: "linear-gradient(135deg, #831843 0%, #be185d 50%, #f43f5e 100%)",
    liveDemo: "https://example.com/demo4",
    github: "https://github.com/example/speedshield",
    highlights: [
      "Automated image generation to next-gen WebP with fallback",
      "Per-page script disabling to eliminate unused CSS & JS",
      "Clean settings UI built with React & WordPress REST API",
    ],
  },
  {
    id: "project-5",
    title: "OmniBooking Multi-Vendor Hub",
    category: "Full-Stack Web",
    featured: false,
    tagline: "Comprehensive appointment & booking engine for service businesses.",
    description:
      "A modern web application integrating calendar sync, automated SMS reminders, customer portals, and seamless payment processing with customizable staff schedules.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Twilio", "Stripe"],
    metrics: {
      speedScore: 97,
      conversionBoost: "+30%",
      pageLoad: "0.8s",
    },
    imageGradient: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #64748b 100%)",
    liveDemo: "https://example.com/demo5",
    github: "https://github.com/example/omnibooking",
    highlights: [
      "Real-time calendar scheduling with Google Calendar two-way sync",
      "Interactive customer dashboard with past history and invoices",
      "Automated webhooks for SMS & email reminders",
    ],
  },
  {
    id: "project-6",
    title: "EstatePrime Real Estate Engine",
    category: "WordPress / WooCommerce",
    featured: false,
    tagline: "Dynamic property listing engine with interactive map filtering & agent management.",
    description:
      "An advanced real estate portal built on custom WordPress taxonomy and map APIs. Features multi-criteria property search, 360 virtual tour embeds, and automatic lead forwarding to CRM.",
    tags: ["WordPress", "Google Maps API", "ACF Pro", "JavaScript", "CRM Integration"],
    metrics: {
      speedScore: 96,
      conversionBoost: "+40%",
      pageLoad: "0.9s",
    },
    imageGradient: "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #06b6d4 100%)",
    liveDemo: "https://example.com/demo6",
    github: "https://github.com/example/estateprime",
    highlights: [
      "Custom geolocation search with radius query filters",
      "Mortgage calculator widget built with vanilla JS",
      "Direct webhook sync with HubSpot and Mailchimp",
    ],
  },
];

export const skillCategories = [
  {
    category: "WordPress & CMS Ecosystem",
    icon: "Layout",
    description: "Deep mastery of the core WordPress engine, theme/plugin engineering, and headless stacks.",
    skills: [
      { name: "Custom Theme Development", level: 95 },
      { name: "Custom Plugin Engineering", level: 90 },
      { name: "WooCommerce & Custom Gateways", level: 92 },
      { name: "Advanced Custom Fields (ACF Pro)", level: 98 },
      { name: "Headless WordPress (REST & WPGraphQL)", level: 88 },
      { name: "Gutenberg Custom Blocks & FSE", level: 86 },
      { name: "Elementor / Divi Custom Modules", level: 90 },
      { name: "Security Hardening & Malware Cleanup", level: 94 },
    ],
  },
  {
    category: "Frontend Development",
    icon: "Code",
    description: "Building responsive, engaging, and accessible client-side interfaces.",
    skills: [
      { name: "React.js / Next.js", level: 88 },
      { name: "JavaScript (ES6+) & TypeScript", level: 90 },
      { name: "HTML5, Semantic UI & ARIA", level: 96 },
      { name: "CSS3, Flexbox, CSS Grid & Animations", level: 95 },
      { name: "Tailwind CSS & Modern Utility Frameworks", level: 92 },
      { name: "Component-Driven Architecture", level: 89 },
    ],
  },
  {
    category: "Backend, Databases & APIs",
    icon: "Database",
    description: "Robust server logic, database optimizations, and third-party integrations.",
    skills: [
      { name: "PHP (7.4 - 8.3 OOP & Hooks)", level: 94 },
      { name: "MySQL & Database Query Tuning", level: 87 },
      { name: "RESTful API Development & Webhooks", level: 92 },
      { name: "Node.js & Express Basics", level: 82 },
      { name: "Redis & Object Caching", level: 86 },
      { name: "Authentication (JWT, OAuth, WP Nonces)", level: 90 },
    ],
  },
  {
    category: "Performance, DevOps & SEO",
    icon: "Zap",
    description: "Ensuring sub-second load speeds, ironclad uptime, and organic search dominance.",
    skills: [
      { name: "Core Web Vitals & Google Lighthouse 95+", level: 96 },
      { name: "Cloudflare CDN, DNS & Edge Caching", level: 91 },
      { name: "Technical SEO & Schema.org Rich Snippets", level: 93 },
      { name: "Git, GitHub CI/CD & Deployments", level: 88 },
      { name: "cPanel, VPS & Server Management", level: 85 },
      { name: "Speed Optimization (Asset Pipeline, WebP)", level: 98 },
    ],
  },
];

export const experience = [
  {
    id: "exp-1",
    role: "Senior WordPress & Web Developer",
    company: "HyperScale Digital Agency",
    period: "2023 - Present",
    location: "Remote",
    type: "Full-Time",
    description:
      "Lead developer for international client accounts. Architect bespoke WordPress themes, WooCommerce stores, and headless web apps. Mentored junior developers and instituted automated CI/CD deployment pipelines.",
    achievements: [
      "Engineered 18+ custom enterprise themes delivering 95+ average Google PageSpeed scores.",
      "Optimized database architectures resulting in a 45% reduction in server response times.",
      "Introduced ACF Block components that reduced content manager publishing time by 60%.",
    ],
    techStack: ["WordPress", "WooCommerce", "PHP 8.2", "React", "REST API", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "WordPress Developer & CMS Specialist",
    company: "Creative Orbit Studio",
    period: "2021 - 2023",
    location: "Hybrid",
    type: "Full-Time",
    description:
      "Developed high-impact marketing websites, custom WordPress plugins, and integrated third-party CRM APIs (HubSpot, Salesforce, ActiveCampaign).",
    achievements: [
      "Built 30+ client websites from Figma designs to pixel-perfect live WordPress setups.",
      "Created proprietary plugin for custom payment gateway integrations with automated reconciliations.",
      "Resolved critical security vulnerabilities and restored hacked sites with 100% data recovery.",
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "ACF Pro", "MySQL", "SCSS"],
  },
  {
    id: "exp-3",
    role: "Frontend & Web Developer",
    company: "Freelance / Self-Employed",
    period: "2019 - 2021",
    location: "Global",
    type: "Contract",
    description:
      "Partnered with startups, local businesses, and e-commerce brands worldwide to deliver custom websites, landing pages, and ongoing performance maintenance.",
    achievements: [
      "Maintained a 5.0-star rating across 40+ completed Upwork & direct client contracts.",
      "Boosted conversion rates by up to 50% through mobile responsiveness and UI improvements.",
    ],
    techStack: ["WordPress", "HTML5", "CSS3", "JavaScript", "Elementor Pro", "WooCommerce"],
  },
];

export const education = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science / Information Technology",
    institution: "State University of Technology",
    period: "2015 - 2019",
    details: "Focused on Software Architecture, Web Technologies, Database Systems, and Object-Oriented Programming.",
  },
  {
    id: "edu-2",
    degree: "Advanced WordPress Core & Full-Stack Web Certification",
    institution: "Meta / WPEngine Certified Developer",
    period: "2020",
    details: "Specialized training in modern PHP 8 standards, WordPress VIP performance guidelines, and React.",
  },
];

export const services = [
  {
    icon: "Layout",
    title: "Custom WordPress Theme Development",
    description:
      "Handcrafted, lightweight themes built from scratch to match your exact design specifications. No bloated builders, ultra-clean code, and unmatched performance.",
  },
  {
    icon: "ShoppingBag",
    title: "WooCommerce & E-Commerce Engineering",
    description:
      "Turn-key online store development with frictionless checkouts, custom payment gateways, subscription models, and inventory management.",
  },
  {
    icon: "Zap",
    title: "Speed & Core Web Vitals Optimization",
    description:
      "Radical speed acceleration for existing slow sites. We eliminate render-blocking resources, optimize databases, and achieve 90+ Lighthouse mobile scores.",
  },
  {
    icon: "Cpu",
    title: "Headless WordPress & Modern React Apps",
    description:
      "Next-generation decoupled web applications using WordPress as a seamless headless CMS paired with a blindingly fast React or Next.js frontend.",
  },
  {
    icon: "ShieldCheck",
    title: "Security Hardening & Maintenance",
    description:
      "Comprehensive malware protection, automated backups, version updates, staging environments, and 24/7 uptime monitoring to keep your site resilient.",
  },
  {
    icon: "Repeat",
    title: "Figma to WordPress Conversion",
    description:
      "Pixel-perfect translation of Figma, Adobe XD, or Sketch mockups into fully editable Gutenberg or ACF Pro modules with silky smooth responsive behavior.",
  },
];
