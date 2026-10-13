/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Edit this file to update your personal information, projects,
 * skills, experience, and contact details. Everything in the portfolio
 * automatically renders from this central data configuration.
 */

export const personalInfo = {
  name: "Amar Abbas",
  title: "WordPress, Laravel & React Web Developer",
  tagline: "Architecting high-performance WordPress sites, Laravel web applications, and dynamic React frontends.",
  bio: "I specialize in transforming complex business visions into ultra-fast, responsive, and secure digital experiences. With deep expertise in custom WordPress themes, robust Laravel backend architectures, and modern React frontend engineering, I bridge the gap between powerful CMS solutions and cutting-edge web performance.",
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
    id: "project-ssa",
    title: "Secure Site Audit Web Application",
    category: "Full-Stack Web",
    featured: true,
    tagline: "Enterprise app-based telecom site inspection, tower auditing & compliance solution built with Laravel.",
    description:
      "An enterprise Laravel web application designed for telecom site and tower auditing, inspection data entry, tracking, and automated compliance reporting. Features auditor dashboards, file/photo uploads, and secure authentication.",
    tags: ["Laravel", "JavaScript", "Bootstrap 5", "Laravel Blade", "REST APIs", "MySQL"],
    metrics: {
      speedScore: 98,
      conversionBoost: "+45%",
      pageLoad: "0.5s",
    },
    imageGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)",
    liveDemo: "https://www.securesiteaudit.com/",
    github: null,
    highlights: [
      "Responsive auditor dashboards and inspection tracking workflows",
      "Dynamic data entry checklists with file/photo upload pipelines",
      "Integrated Laravel RESTful backend controllers and input validation rules",
      "Optimized for real-time field audits on mobile and tablet devices",
    ],
  },
  {
    id: "project-tsa",
    title: "Telecom Site Audit Platform",
    category: "WordPress / WooCommerce",
    featured: true,
    tagline: "App-based telecom site audit solution showcase with Yoast SEO & responsive architecture.",
    description:
      "Public marketing and service showcase platform for Telecom Site Audit. Engineered with custom WordPress templates, high-performance responsive styling, Yoast SEO optimization, and streamlined contact/inquiry funnels.",
    tags: ["WordPress", "HTML5", "CSS3 / SCSS", "JavaScript", "Yoast SEO", "Responsive UI"],
    metrics: {
      speedScore: 97,
      conversionBoost: "+35%",
      pageLoad: "0.7s",
    },
    imageGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
    liveDemo: "https://telecomsiteaudit.com/",
    github: null,
    highlights: [
      "Custom WordPress layout showcasing app features and telecom audit services",
      "Technical on-page SEO integration with Yoast SEO for organic visibility",
      "Interactive consultation and audit quote inquiry forms",
      "Cross-browser and mobile-optimized responsive design",
    ],
  },
  {
    id: "project-visualsoft",
    title: "VisualSoft Global Technology",
    category: "WordPress / WooCommerce",
    featured: true,
    tagline: "Corporate AI & software solutions portal with custom Elementor layouts and optimized assets.",
    description:
      "Global corporate website for VisualSoft Inc., an AI and technology solutions company serving enterprise clients across the USA, UK, UAE, and Pakistan. Built with WordPress and Elementor Pro with custom responsive widgets.",
    tags: ["WordPress", "Elementor Pro", "Responsive UI", "Google Site Kit", "Performance"],
    metrics: {
      speedScore: 98,
      conversionBoost: "+40%",
      pageLoad: "0.6s",
    },
    imageGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
    liveDemo: "https://visualsoft-inc.com/",
    github: null,
    highlights: [
      "Enterprise AI & software service showcase with custom Elementor layouts",
      "Critical CSS and next-gen WebP asset delivery pipeline",
      "Multinational corporate presence with international inquiry funnels",
      "Mobile-first responsive architecture and high-performance loading",
    ],
  },
  {
    id: "project-designer-metals",
    title: "Designer Metals",
    category: "WordPress / WooCommerce",
    featured: true,
    tagline: "Metal building products, carport & garage solutions with Rank Math SEO architecture.",
    description:
      "A comprehensive commercial catalog website for Designer Metals specializing in metal building products, carports, garages, and barn structures. Features responsive product showcases, quote request funnels, and structured SEO markup.",
    tags: ["WordPress", "WooCommerce", "Rank Math SEO", "Product Catalog", "Responsive Design"],
    metrics: {
      speedScore: 97,
      conversionBoost: "+36%",
      pageLoad: "0.7s",
    },
    imageGradient: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)",
    liveDemo: "https://designermetals.com/",
    github: null,
    highlights: [
      "Custom product catalog for metal garages, carports, and backyard structures",
      "Technical on-page SEO integration with Rank Math and Schema.org rich snippets",
      "Interactive customer inquiry and custom building quote request forms",
      "High-resolution WebP image optimization for industrial product displays",
    ],
  },
  {
    id: "project-sunguard",
    title: "Sun Guard Design Australia",
    category: "WordPress / WooCommerce",
    featured: true,
    tagline: "Australian custom blinds, curtains, awnings & shutters showcase with Yoast SEO.",
    description:
      "A modern interior and exterior shading solutions portal for Sun Guard Design based in Australia. Built on WordPress with bespoke product presentations for blinds, curtains, awnings, and security shutters.",
    tags: ["WordPress", "Elementor", "Yoast SEO", "Product Showcase", "Mobile First"],
    metrics: {
      speedScore: 98,
      conversionBoost: "+44%",
      pageLoad: "0.6s",
    },
    imageGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    liveDemo: "https://sunguarddesigns.com.au/",
    github: null,
    highlights: [
      "Sleek product gallery showcasing custom blinds, curtains, and awnings",
      "Local Australian SEO optimization with Yoast and structured data",
      "Streamlined free quote consultation and booking request system",
      "Fluid responsive layout tested across all smartphone and tablet viewports",
    ],
  },
  {
    id: "project-christian-behr",
    title: "Christian Behr Strategy Advisory",
    category: "WordPress / WooCommerce",
    featured: true,
    tagline: "Executive strategic advisory platform for marketing, sales & AI with LiteSpeed caching.",
    description:
      "German executive consultancy and advisory hub for Christian Behr. Built with Hello Elementor, LiteSpeed Cache tuning, and Rank Math SEO to position high-impact strategic advisory programs for corporate decision-makers.",
    tags: ["WordPress", "Hello Elementor", "LiteSpeed Cache", "Rank Math SEO", "Consulting"],
    metrics: {
      speedScore: 99,
      conversionBoost: "+50%",
      pageLoad: "0.5s",
    },
    imageGradient: "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)",
    liveDemo: "https://christianbehr.net/",
    github: null,
    highlights: [
      "Clean, minimalist editorial design built on Hello Elementor and custom CSS",
      "LiteSpeed Cache server-level optimization delivering sub-second TTFB",
      "Strategic program presentation (IMPACT 90) with consultation call booking",
      "High-standard GDPR-compliant privacy and corporate schema architecture",
    ],
  },
  {
    id: "project-camping-herzog",
    title: "Altmühlsee Camping Herzog",
    category: "WordPress / WooCommerce",
    featured: false,
    tagline: "German lakeside camping & holiday apartments booking inquiry portal.",
    description:
      "Official website for Camping Herzog at Lake Altmühlsee in Franconia, Germany. Features detailed campground overviews, holiday apartment presentations, leisure guides, and online booking inquiry forms.",
    tags: ["WordPress", "Booking Inquiries", "Yoast SEO", "German / EU Privacy", "Responsive UI"],
    metrics: {
      speedScore: 96,
      conversionBoost: "+38%",
      pageLoad: "0.8s",
    },
    imageGradient: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
    liveDemo: "https://www.camping-herzog.de/",
    github: null,
    highlights: [
      "Interactive accommodation showcase for campsite pitches and holiday apartments",
      "Custom reservation and booking inquiry forms for European travelers",
      "Yoast SEO optimization for regional tourism and vacation keywords",
      "Responsive aerial photo galleries and facility map embeds",
    ],
  },
  {
    id: "project-heather-harries",
    title: "Heather Harries Education Hub",
    category: "WordPress / WooCommerce",
    featured: false,
    tagline: "Educational learning hub with event schedules, WooCommerce and community resources.",
    description:
      "A comprehensive learning and community platform for educator and author Heather Harries. Engineered with WordPress, Elementor, and WooCommerce product integration for educational programs and publications.",
    tags: ["WordPress", "Elementor", "WooCommerce", "Event Booking", "Responsive Layout"],
    metrics: {
      speedScore: 97,
      conversionBoost: "+32%",
      pageLoad: "0.7s",
    },
    imageGradient: "linear-gradient(135deg, #701a75 0%, #86198f 50%, #a21caf 100%)",
    liveDemo: "https://heatherharries.com/",
    github: null,
    highlights: [
      "Interactive educational resource library and course calendars",
      "WooCommerce integration for book purchases and learning materials",
      "Custom header and footer modules engineered with Elementor",
      "Engaging newsletter sign-up and event booking workflows",
    ],
  },
  {
    id: "project-everon",
    title: "Everon Solutions Australia",
    category: "WordPress / WooCommerce",
    featured: false,
    tagline: "Commercial enterprise & sustainable solutions platform in Australia.",
    description:
      "Corporate business platform for Everon Solutions Australia. Built with WordPress to deliver high-converting corporate service presentations, client trust proof, and streamlined commercial inquiries.",
    tags: ["WordPress", "Custom Theme", "Elementor", "Lead Generation", "SEO Optimization"],
    metrics: {
      speedScore: 96,
      conversionBoost: "+30%",
      pageLoad: "0.8s",
    },
    imageGradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)",
    liveDemo: "https://everonsolutions.com.au/",
    github: null,
    highlights: [
      "Modern corporate service layouts and client case study showcases",
      "Fast-loading responsive frontend optimized for Australian enterprise clients",
      "Integrated contact funnels and lead generation contact forms",
      "Search-engine-friendly site architecture with clean semantic markup",
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
    category: "Frontend Development (React & Modern UI)",
    icon: "Code",
    description: "Building responsive, dynamic, and accessible client-side interfaces and single-page applications with React.js.",
    skills: [
      { name: "React.js (Hooks, State & Props)", level: 93 },
      { name: "React Router & SPA Architecture", level: 90 },
      { name: "JavaScript (ES6+) & Modern Web APIs", level: 92 },
      { name: "Tailwind CSS & Modern Utility Frameworks", level: 94 },
      { name: "Bootstrap 5 & Alpine.js", level: 90 },
      { name: "HTML5, CSS3, Flexbox & Grid Animations", level: 96 },
      { name: "REST API Integration in React", level: 92 },
      { name: "Component-Driven UI Architecture", level: 91 },
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
    icon: "Cpu",
    title: "Laravel Web Application Engineering",
    description:
      "Developing robust, scalable web applications with Laravel. From custom telehealth consultation booking engines to secure enterprise audit portals with Eloquent ORM, authentication, and REST APIs.",
  },
  {
    icon: "Layout",
    title: "WordPress & Elementor Pro Web Design",
    description:
      "Crafting high-converting, responsive websites utilizing Elementor Pro and ACF Pro. Clean page architectures, tailored templates, and intuitive content management for clients.",
  },
  {
    icon: "Search",
    title: "Technical & On-Page SEO Optimization",
    description:
      "Maximizing organic search visibility with Schema markup, XML sitemaps, Rank Math / Yoast configurations, indexing enhancements, and Core Web Vitals optimization.",
  },
  {
    icon: "Code",
    title: "Frontend Engineering & React Applications",
    description:
      "Engineering fast, dynamic single-page applications and responsive client dashboards using React.js, Tailwind CSS, Alpine.js, and Bootstrap 5 integrated with backend REST APIs.",
  },
  {
    icon: "ShoppingBag",
    title: "WooCommerce & E-Commerce Engineering",
    description:
      "End-to-end online store setups with frictionless checkouts, payment gateway integrations, product catalog configurations, and conversion-focused architectures.",
  },
  {
    icon: "Zap",
    title: "Speed Optimization & Site Maintenance",
    description:
      "Speed acceleration for slow sites, database query optimization, resolving plugin conflicts, running routine backups, and securing 95+ PageSpeed scores.",
  },
];
