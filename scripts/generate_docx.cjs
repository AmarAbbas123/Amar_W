const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  ExternalHyperlink,
  AlignmentType,
  BorderStyle
} = require('docx');

function createHeading(text) {
  return new Paragraph({
    spacing: { before: 240, after: 100 },
    border: {
      bottom: {
        color: "06B6D4",
        space: 4,
        value: BorderStyle.SINGLE,
        size: 12,
      },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
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
        color: "1E293B",
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
    spacing: { before: 40, after: 40 },
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
    description: "WordPress, Laravel & React Web Developer Resume",
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
              top: 720, // 0.5 in
              right: 720,
              bottom: 720,
              left: 720,
            },
          },
        },
        children: [
          // Name Header
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 60 },
            children: [
              new TextRun({
                text: "AMAR ABBAS",
                bold: true,
                size: 38, // 19pt
                font: "Calibri",
                color: "0F172A",
              }),
            ],
          }),

          // Title
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 120 },
            children: [
              new TextRun({
                text: "WordPress, Laravel & React Web Developer",
                bold: true,
                size: 24, // 12pt
                font: "Calibri",
                color: "0284C7",
              }),
            ],
          }),

          // Contact Row
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 200 },
            children: [
              new TextRun({ text: "Email: ", bold: true, size: 20 }),
              createLink("amarabbas1414@gmail.com", "mailto:amarabbas1414@gmail.com"),
              new TextRun({ text: "  |  Phone / WhatsApp: ", bold: true, size: 20 }),
              createLink("+92 3098915950", "https://wa.me/+923098915950"),
              new TextRun({ text: "  |  Location: ", bold: true, size: 20 }),
              new TextRun({ text: "Pakistan (Remote / Worldwide)", size: 20 }),
            ],
          }),

          // Links Row
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 220 },
            children: [
              new TextRun({ text: "LinkedIn: ", bold: true, size: 20 }),
              createLink("linkedin.com/in/amar-abbas", "https://www.linkedin.com/in/amar-abbas/"),
              new TextRun({ text: "  |  GitHub: ", bold: true, size: 20 }),
              createLink("github.com/AmarAbbas123", "https://github.com/AmarAbbas123"),
            ],
          }),

          // Professional Summary
          createHeading("Professional Summary"),
          new Paragraph({
            spacing: { before: 60, after: 120 },
            children: [
              new TextRun({
                text: "Results-driven Web Developer with 4+ years of hands-on experience architecting high-performance WordPress platforms, enterprise-grade Laravel web applications, and modern React frontends. Proven track record building secure telehealth booking portals, telecom site audit applications, and custom WooCommerce e-commerce platforms. Recognized for consistently achieving 95+ Google Lighthouse speed scores, robust technical & on-page SEO structures, and sub-second loading speeds.",
                size: 20,
                font: "Calibri",
                color: "334155",
              }),
            ],
          }),

          // Technical Skills
          createHeading("Technical Skills"),
          createBullet(
            "Custom Theme & Plugin Development, Elementor Pro, ACF Pro, WooCommerce, Gutenberg Blocks, WP REST API, Speed Optimization, Security Hardening.",
            "CMS & WordPress:"
          ),
          createBullet(
            "Laravel (10 & 11), MVC Architecture, Eloquent ORM, MySQL Query Optimization, RESTful APIs, Laravel Sanctum Authentication, Queues & Redis Caching.",
            "Backend & APIs:"
          ),
          createBullet(
            "React.js (Hooks, State Management, SPA), JavaScript (ES6+), Tailwind CSS, Bootstrap 5, Alpine.js, HTML5, CSS3 / SCSS, Responsive Web Design.",
            "Frontend Engineering:"
          ),
          createBullet(
            "Technical SEO, Schema.org Structured Data, Rank Math SEO, Yoast SEO, Core Web Vitals Optimization, LiteSpeed Cache, Cloudflare CDN.",
            "SEO & Performance:"
          ),
          createBullet(
            "Git, GitHub CI/CD, Vite, Composer, npm, cPanel, MySQL, REST API Integrations.",
            "DevOps & Tools:"
          ),

          // Work Experience
          createHeading("Professional Work Experience"),

          // Role 1
          new Paragraph({
            spacing: { before: 100, after: 40 },
            children: [
              new TextRun({ text: "Software Engineer (Part-Time)  |  ", bold: true, size: 22, color: "0F172A" }),
              new TextRun({ text: "JustMy.Health (Remote)", bold: true, size: 22, color: "0284C7" }),
              new TextRun({ text: "\tOct 2025 – Present", italic: true, size: 20, color: "64748B" }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 60 },
            children: [
              new TextRun({
                text: "Digital telehealth platform facilitating online counselling, therapy, physiotherapy, and practitioner consultation booking.",
                italic: true,
                size: 19,
                color: "475569",
              }),
            ],
          }),
          createBullet("Engineered robust backend modules in Laravel for patient onboarding, practitioner scheduling, and appointment booking workflows."),
          createBullet("Optimized MySQL database queries and Eloquent relationships to ensure sub-second response times across critical telehealth endpoints."),
          createBullet("Developed secure authentication mechanisms, CSRF protections, and role-based access control for patient and practitioner account portals."),
          createBullet("Built interactive, accessible frontend components utilizing Tailwind CSS, Alpine.js, and Laravel Blade templates."),
          createBullet("Laravel, MySQL, Tailwind CSS, Alpine.js, Laravel Blade, RESTful APIs, Vite.", "Key Technologies:"),

          // Role 2
          new Paragraph({
            spacing: { before: 160, after: 40 },
            children: [
              new TextRun({ text: "Junior Software Engineer (Full-Time)  |  ", bold: true, size: 22, color: "0F172A" }),
              new TextRun({ text: "AliLogics", bold: true, size: 22, color: "0284C7" }),
              new TextRun({ text: "\t2023 – Present", italic: true, size: 20, color: "64748B" }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 60 },
            children: [
              new TextRun({
                text: "Digital agency delivering bespoke WordPress, e-commerce, and technical search solutions.",
                italic: true,
                size: 19,
                color: "475569",
              }),
            ],
          }),
          createBullet("Built, customized, and deployed pixel-perfect, high-converting websites and landing pages using Elementor Pro and ACF Pro."),
          createBullet("Executed technical and on-page SEO best practices (Schema markup, XML sitemaps, meta optimization, and breadcrumb structures) across diverse client websites."),
          createBullet("Optimized website Core Web Vitals and page speed to consistently deliver 95+ PageSpeed scores and reduce bounce rates."),
          createBullet("Configured SEO plugins (Rank Math / Yoast SEO), Google Search Console properties, and structured data schemas."),
          createBullet("Assisted with website migrations, database management, and ongoing technical support."),
          createBullet("WordPress, Elementor Pro, Technical SEO, Schema Markup, Rank Math / Yoast, WooCommerce, ACF Pro, MySQL.", "Key Technologies:"),

          // Role 3
          new Paragraph({
            spacing: { before: 160, after: 40 },
            children: [
              new TextRun({ text: "Junior Front-End Developer (Part-Time)  |  ", bold: true, size: 22, color: "0F172A" }),
              new TextRun({ text: "Secure Site Audit (Remote)", bold: true, size: 22, color: "0284C7" }),
              new TextRun({ text: "\tAug 2024 – Jun 2025", italic: true, size: 20, color: "64748B" }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 60 },
            children: [
              new TextRun({
                text: "Enterprise Laravel web application (securesiteaudit.com) for telecom site and tower auditing, inspection tracking, and compliance reporting.",
                italic: true,
                size: 19,
                color: "475569",
              }),
            ],
          }),
          createBullet("Engineered responsive auditor dashboards and client-facing interfaces for the Secure Site Audit Laravel web application."),
          createBullet("Built interactive inspection data entry checklists and file/photo upload pipelines using JavaScript and Bootstrap 5."),
          createBullet("Integrated frontend views with backend Laravel RESTful controllers and validation rules."),
          createBullet("Ensured mobile and tablet responsiveness for on-site field auditors conducting live telecom inspections."),
          createBullet("Laravel, JavaScript, Bootstrap 5, Laravel Blade, HTML5/CSS3, REST APIs.", "Key Technologies:"),

          // Featured Projects
          createHeading("Featured Client Projects & Web Applications"),
          createBullet("Enterprise Laravel telecom site and tower auditing application with automated compliance reporting.", "Secure Site Audit (securesiteaudit.com):"),
          createBullet("Laravel telehealth platform facilitating online appointments, practitioner scheduling, and secure portals.", "JustMy.Health (justmy.health):"),
          createBullet("Public marketing platform showcasing telecom audit services with Yoast SEO optimization.", "Telecom Site Audit (telecomsiteaudit.com):"),
          createBullet("Enterprise AI & technology company website built with WordPress and Elementor Pro.", "VisualSoft Inc. (visualsoft-inc.com):"),
          createBullet("Commercial metal building products catalog with Rank Math SEO and custom quote request funnels.", "Designer Metals (designermetals.com):"),
          createBullet("Australian custom shading and blinds showcase portal with localized SEO.", "Sun Guard Design (sunguarddesigns.com.au):"),
          createBullet("German executive advisory platform engineered with Hello Elementor and LiteSpeed Cache tuning.", "Christian Behr Advisory (christianbehr.net):"),
          createBullet("German lakeside campsite and holiday apartment booking inquiry portal.", "Camping Herzog (camping-herzog.de):"),
          createBullet("Learning hub with WooCommerce bookstore and course calendar integration.", "Heather Harries Education (heatherharries.com):"),
          createBullet("Corporate sustainable enterprise platform for Australian commercial clients.", "Everon Solutions (everonsolutions.com.au):"),

          // Education
          createHeading("Education & Certifications"),
          new Paragraph({
            spacing: { before: 80, after: 40 },
            children: [
              new TextRun({
                text: "Bachelor of Science in Computer Science / Information Technology",
                bold: true,
                size: 21,
                color: "0F172A",
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 100 },
            children: [
              new TextRun({
                text: "University of Engineering and Technology (UET) Peshawar  |  2018 – 2022",
                size: 20,
                color: "475569",
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 40, after: 40 },
            children: [
              new TextRun({
                text: "PHP with Laravel for Beginners - Become a Master in Laravel",
                bold: true,
                size: 21,
                color: "0F172A",
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 120 },
            children: [
              new TextRun({
                text: "Udemy Professional Certification  |  2024",
                size: 20,
                color: "475569",
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
