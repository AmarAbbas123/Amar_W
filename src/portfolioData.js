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
    id: "project-jmh",
    title: "JustMy.Health Telehealth Platform",
    category: "Full-Stack Web",
    featured: true,
    tagline: "Online counselling, therapy & physiotherapy booking platform built with Laravel.",
    description:
      "A comprehensive digital health and telehealth platform connecting patients with certified counsellors, therapists, and physiotherapists. Engineered with a Laravel backend, MySQL, Tailwind CSS, Alpine.js, and automated appointment scheduling.",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js", "Laravel Blade", "Telehealth API"],
    metrics: {
      speedScore: 98,
      conversionBoost: "+42%",
      pageLoad: "0.6s",
    },
    imageGradient: "linear-gradient(135deg, #065f46 0%, #0d9488 50%, #06b6d4 100%)",
    liveDemo: "https://justmy.health/",
    github: null,
    highlights: [
      "Custom patient registration and practitioner onboarding modules",
      "Interactive consultation scheduling and automated session reminders",
      "Secure role-based account management for practitioners and patients",
      "Mobile-responsive health portal designed with Tailwind CSS & Alpine.js",
    ],
  },
  {
    id: "project-1",
    title: "Apex Luxe E-Commerce",
    category: "WordPress / WooCommerce",
    featured: true,
    tagline: "High-volume luxury fashion storefront with bespoke checkout and sub-second load times.",
    description:
      "A high-performing WooCommerce enterprise platform handling 15,000+ monthly orders. Built with customized cart & checkout flows, Redis object caching, Stripe & PayPal custom gateways, and real-time inventory synchronization.",
    tags: ["WooCommerce", "WordPress", "Laravel", "Tailwind CSS", "Redis Cache", "Stripe API"],
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
    tags: ["Custom Theme", "ACF Pro", "Gutenberg FSE", "Laravel", "SCSS", "SEO Optimization"],
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
    tags: ["Headless WordPress", "React.js", "WPGraphQL", "Laravel API", "Tailwind CSS", "Vercel"],
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
    tags: ["WordPress Plugin Dev", "Laravel", "MySQL", "Core Web Vitals", "Asset Pipeline"],
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
      "A modern full-stack web application powered by Laravel REST API backend with Sanctum authentication, MySQL, and a responsive React frontend with automated appointment scheduling.",
    tags: ["React", "Laravel 11", "MySQL", "Laravel Sanctum", "Inertia.js", "Stripe API"],
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
      { name: "Elementor Pro & Theme Builder", level: 96 },
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
    category: "Backend (Laravel), Databases & APIs",
    icon: "Database",
    description: "Robust Laravel backend architecture, Eloquent ORM, database optimizations, and RESTful APIs.",
    skills: [
      { name: "Laravel (10 & 11 Framework)", level: 96 },
      { name: "Laravel MVC & App Architecture", level: 94 },
      { name: "Laravel REST APIs & Sanctum Auth", level: 93 },
      { name: "Eloquent ORM & MySQL Query Tuning", level: 92 },
      { name: "Laravel Queues, Jobs & Redis Caching", level: 90 },
      { name: "API Integrations & Webhooks", level: 92 },
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
    role: "Software Engineer",
    company: "JustMy.Health",
    url: "https://justmy.health/",
    period: "Oct 2025 - Present",
    location: "Remote",
    type: "Part Time",
    description:
      "Software engineer contributing to JustMy.Health — a digital healthcare and telehealth web application facilitating online counselling, therapy, physiotherapy, and practitioner consultation booking built with Laravel.",
    achievements: [
      "Engineered backend modules in Laravel for patient registration, practitioner scheduling, and appointment booking flows.",
      "Optimized MySQL database queries and Eloquent relationships to reduce response latency on key health service endpoints.",
      "Developed secure authentication mechanisms, CSRF protections, and role-based access for patient and practitioner account portals.",
      "Collaborated on responsive UI components built with Tailwind CSS, Alpine.js, and Laravel Blade templates.",
    ],
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js", "Laravel Blade", "REST APIs", "Vite"],
  },
  {
    id: "exp-2",
    role: "Junior Software Engineer",
    company: "AliLogics",
    period: "2023 - Present",
    location: "On-site / Hybrid",
    type: "Full-Time",
    description:
      "Contributed as a Junior Software Engineer across diverse client web applications, specializing in WordPress website development, Elementor Pro visual engineering, technical & on-page SEO optimization, and responsive frontend implementations.",
    achievements: [
      "Built and customized pixel-perfect, high-converting websites and landing pages using Elementor Pro and ACF Pro.",
      "Developed and deployed multiple custom WordPress websites from Figma/client specifications to production.",
      "Implemented technical and on-page SEO best practices (schema markup, meta tags, XML sitemaps, and indexing optimizations) to improve client search visibility.",
      "Optimized site responsiveness, Core Web Vitals, and page speed to maximize organic search rankings and reduce bounce rates.",
      "Configured SEO plugins (Rank Math / Yoast SEO), Google Search Console properties, and structured breadcrumb architectures.",
      "Assisted senior engineers with website migrations, database management, and technical support.",
    ],
    techStack: ["WordPress", "Elementor Pro", "Technical SEO", "Schema Markup", "Rank Math / Yoast", "WooCommerce", "ACF Pro", "HTML5 / CSS3", "MySQL"],
  },
  {
    id: "exp-3",
    role: "Junior Front-End Developer",
    company: "Secure Site Audit",
    url: "https://www.securesiteaudit.com/",
    period: "Aug 2024 - Jun 2025",
    location: "Remote",
    type: "Part-time",
    description:
      "Contributed as a Junior Front-End Developer on Secure Site Audit (securesiteaudit.com) — an enterprise Laravel web application designed for telecom site and tower auditing, inspection tracking, and automated compliance reporting.",
    achievements: [
      "Engineered responsive auditor dashboards and client-facing interfaces for the Secure Site Audit Laravel application.",
      "Built interactive inspection data entry forms, file uploads, and tower checklist components using JavaScript and Bootstrap.",
      "Integrated frontend views and AJAX interactions with backend Laravel RESTful controllers and validation rules.",
      "Ensured mobile and tablet responsiveness for on-site field auditors conducting live telecom inspections.",
    ],
    techStack: ["Laravel", "JavaScript", "Bootstrap 5", "Laravel Blade", "HTML5 / CSS3", "REST APIs"],
  },
];

export const education = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science / Information Technology",
    institution: "University of Engineering and Technology Peshawar",
    period: "2018 - 2012",
    details: "Focused on Software Architecture, Web Technologies, Database Systems, and Object-Oriented Programming.",
  },
  {
    id: "edu-2",
    degree: "PHP with Laravel for beginners - Become a Master in Laravel",
    institution: "Udemy",
    period: "2026",
    details: "Learn to master Laravel to make advanced applications like the real CMS app",
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
    title: "Laravel Backend & Headless Web Apps",
    description:
      "Robust backend engineering using Laravel 11 for high-performance REST APIs paired with modern React frontends, as well as decoupled headless WordPress architectures.",
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
