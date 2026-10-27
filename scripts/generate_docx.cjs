const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  ExternalHyperlink,
  AlignmentType,
  BorderStyle
} = require('docx');

function createHeading(text) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    border: {
      bottom: {
        color: "0F172A",
        space: 4,
        value: BorderStyle.SINGLE,
        size: 10,
      },
    },
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 24, // 12pt
        font: "Calibri",
        color: "0F172A",
      }),
    ],
  });
}

function createBullet(text, boldPrefix = "") {
  const children = [];
  if (boldPrefix) {
    children.push(
      new TextRun({
        text: boldPrefix + " ",
        bold: true,
        size: 20, // 10pt
        font: "Calibri",
        color: "0F172A",
      })
    );
  }
  children.push(
    new TextRun({
      text: text,
      size: 20,
      font: "Calibri",
      color: "334155",
    })
  );

  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 30, after: 30 },
    children: children,
  });
}

function createLink(text, url) {
  return new ExternalHyperlink({
    children: [
      new TextRun({
        text: text,
        style: "Hyperlink",
        color: "0284C7",
        underline: { type: "single", color: "0284C7" },
        size: 20,
        font: "Calibri",
      }),
    ],
    link: url,
  });
}

async function generate() {
  const doc = new Document({
    creator: "Amar Abbas",
    title: "Amar Abbas - Resume",
    description: "Software Engineer Resume",
    styles: {
      default: {
        document: {
          run: {
            font: "Calibri",
            color: "334155",
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              right: 720,
              bottom: 720,
              left: 720,
            },
          },
        },
        children: [
          // Name Header
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: "Amar Abbas",
                bold: true,
                size: 36, // 18pt
                font: "Calibri",
                color: "0F172A",
              }),
            ],
          }),

          // Title
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 0, after: 80 },
            children: [
              new TextRun({
                text: "Software Engineer",
                bold: true,
                size: 24, // 12pt
                font: "Calibri",
                color: "0F172A",
              }),
            ],
          }),

          // Contact Row
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 0, after: 160 },
            children: [
              new TextRun({ text: "Portfolio: ", bold: true, size: 20 }),
              createLink("amar-abbas.vercel.app", "https://amar-abbas.vercel.app/"),
              new TextRun({ text: " | ", size: 20 }),
              createLink("amarabbas1414@gmail.com", "mailto:amarabbas1414@gmail.com"),
              new TextRun({ text: " | +92 309 8915950 | ", size: 20 }),
              createLink("linkedin.com/in/amar-abbas", "https://www.linkedin.com/in/amar-abbas/"),
              new TextRun({ text: " | ", size: 20 }),
              createLink("github.com/AmarAbbas123", "https://github.com/AmarAbbas123"),
            ],
          }),

          // Professional Summary
          createHeading("Professional Summary"),
          new Paragraph({
            spacing: { before: 60, after: 120 },
            children: [
              new TextRun({
                text: "A passionate Software Engineer 🚀 having experience in building web applications with JavaScript / TypeScript / React.js / Laravel and some other modern libraries and frameworks. I also have hands-on experience with WordPress and Digital Marketing. Strong engineering professional with a Bachelor's degree focused in Computer Science from UET Peshawar. I love to solve problems and develop innovative solutions for those problems.",
                size: 20,
                font: "Calibri",
                color: "334155",
              }),
            ],
          }),

          // Technical Skills
          createHeading("Technical Skills"),
          createBullet(
            "PHP, Laravel 10 & 11, MVC, Eloquent ORM, MySQL query optimization, REST APIs, Laravel Sanctum, queues, Redis caching",
            "Back end:"
          ),
          createBullet(
            "Custom themes and plugins, WooCommerce, Elementor Pro, ACF Pro, Gutenberg blocks, WP REST API, security hardening, site migrations",
            "WordPress & E-commerce:"
          ),
          createBullet(
            "React.js (Hooks, SPA), JavaScript (ES6+), Tailwind CSS, Bootstrap 5, Alpine.js, HTML5, CSS3/SCSS, responsive and mobile-first design",
            "Front end:"
          ),
          createBullet(
            "Schema.org structured data, XML sitemaps, Rank Math, Yoast, Google Search Console, Core Web Vitals, LiteSpeed Cache, Cloudflare CDN",
            "Technical SEO & Speed:"
          ),
          createBullet(
            "Git, GitHub CI/CD, Vite, Composer, npm, cPanel",
            "Tools:"
          ),

          // Professional Experience
          createHeading("Professional Experience"),

          // Role 1
          new Paragraph({
            spacing: { before: 80, after: 30 },
            children: [
              new TextRun({ text: "Software Engineer (Part-Time) | JustMy.Health (Remote) | Oct 2025 – Present", bold: true, size: 21, color: "0F172A" }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: "Telehealth platform for online counselling, therapy, physiotherapy and practitioner booking.",
                italic: true,
                size: 19,
                color: "475569",
              }),
            ],
          }),
          createBullet("Built the Laravel booking engine that connects patients with counsellors, therapists and physiotherapists, covering onboarding, practitioner availability and appointment scheduling"),
          createBullet("Tuned MySQL queries and Eloquent relationships on booking-critical endpoints to keep response times under one second"),
          createBullet("Protected patient and practitioner portals with role-based access control, secure authentication and CSRF protection for sensitive health-related data"),
          createBullet("Delivered accessible, responsive interfaces with Tailwind CSS, Alpine.js and Blade, bundled with Vite"),
          createBullet("Laravel, MySQL, Tailwind CSS, Alpine.js, Blade, REST APIs, Vite", "Tech:"),

          // Role 2
          new Paragraph({
            spacing: { before: 120, after: 30 },
            children: [
              new TextRun({ text: "Software Engineer (Full-Time) | AliLogics | June 2023 – Sep 2025", bold: true, size: 21, color: "0F172A" }),
            ],
          }),
          createBullet("Developed and deployed 10+ custom WordPress websites across e-commerce, education, building products and hospitality, from design to launch and support"),
          createBullet("Built custom themes, plugins and ACF Pro content structures, and turned designs into responsive pages with Elementor Pro, HTML, CSS and JavaScript"),
          createBullet("Delivered WooCommerce features including a bookstore with course calendar and custom quote-request funnels"),
          createBullet("Reached 95+ PageSpeed scores and set up technical SEO (schema, sitemaps, Rank Math / Yoast) on every build"),
          createBullet("Handled site migrations, database management and security hardening"),
          createBullet("WordPress, PHP, WooCommerce, Elementor Pro, ACF Pro, JavaScript, MySQL", "Tech:"),

          // Role 3
          new Paragraph({
            spacing: { before: 120, after: 30 },
            children: [
              new TextRun({ text: "Junior Front-End Developer (Part-Time) | Secure Site Audit (Remote) | Aug 2024 – Jun 2025", bold: true, size: 21, color: "0F172A" }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: "Enterprise Laravel application for telecom tower auditing, inspection tracking and compliance reporting.",
                italic: true,
                size: 19,
                color: "475569",
              }),
            ],
          }),
          createBullet("Built auditor dashboards and client-facing views used to track telecom tower inspections and compliance reporting"),
          createBullet("Created inspection checklists and photo/file upload flows in JavaScript and Bootstrap 5, designed for field auditors working on site"),
          createBullet("Connected front-end views to Laravel REST controllers and validation rules"),
          createBullet("Made every screen work on mobile and tablet for live inspections"),
          createBullet("Laravel, JavaScript, Bootstrap 5, Blade, HTML5/CSS3, REST APIs", "Tech:"),

          // Selected Projects
          createHeading("Selected Projects"),
          createBullet("Laravel telehealth platform for online appointments, practitioner scheduling and secure patient portals", "JustMy.Health (justmy.health):"),
          createBullet("Laravel application for telecom tower inspections with automated compliance reports", "Secure Site Audit (securesiteaudit.com):"),
          createBullet("WooCommerce bookstore and course calendar for an education business", "Heather Harries Education (heatherharries.com):"),
          createBullet("Product catalog with Rank Math SEO and custom quote-request funnels", "Designer Metals (designermetals.com):"),
          createBullet("WordPress and Elementor Pro site for an enterprise AI company", "VisualSoft Inc. (visualsoft-inc.com):"),
          createBullet("German advisory site on Hello Elementor, tuned with LiteSpeed Cache", "Christian Behr Advisory (christianbehr.net):"),
          createBullet("Yoast-optimized marketing site for telecom audit services", "Telecom Site Audit (telecomsiteaudit.com):"),
          createBullet("Sun Guard Designs (sunguarddesigns.com.au), Camping Herzog (camping-herzog.de), Everon Solutions (everonsolutions.com.au)", "Also delivered:"),

          // Education
          createHeading("Education & Certifications"),
          new Paragraph({
            spacing: { before: 60, after: 30 },
            children: [
              new TextRun({
                text: "BS in Computer Science / Information Technology | University of Engineering and Technology (UET), Peshawar | 2018 – 2022",
                size: 20,
                color: "0F172A",
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 40, after: 60 },
            children: [
              new TextRun({
                text: "PHP with Laravel for Beginners | Udemy | 2024",
                size: 20,
                color: "0F172A",
              }),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outPath1 = path.join(__dirname, '..', 'Amar_Abbas_Resume.docx');
  const outPath2 = path.join(__dirname, '..', 'public', 'Amar_Abbas_Resume.docx');
  
  fs.writeFileSync(outPath1, buffer);
  fs.writeFileSync(outPath2, buffer);
  console.log('Resume docx generated successfully at:', outPath1, 'and', outPath2);
}

generate().catch(console.error);
