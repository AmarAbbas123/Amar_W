# WordPress & Web Developer Portfolio (React + Vite)

A modern, high-performance developer portfolio built with **React**, **Vite**, and a **vanilla CSS design system** featuring sleek dark mode, glassmorphism, glowing micro-interactions, and responsive layouts.

---

## 🚀 Quick Start

The development server is already running:
- **Local URL**: [http://localhost:5174/](http://localhost:5174/)

### Scripts
```bash
# Start local development server
npm run dev

# Build production-ready bundle
npm run build

# Preview production build
npm run preview
```

---

## 🎨 How to Add Your Data

All your portfolio data is centralized in a single, well-documented configuration file:
👉 **[`src/portfolioData.js`](./src/portfolioData.js)**

### 1. Personal Information & Social Links
Open [`src/portfolioData.js`](./src/portfolioData.js) and edit `personalInfo`:
- `name`: Your full name
- `title`: Your profession/headline (e.g. *"WordPress / CMS Specialist & Web Developer"*)
- `bio`: Your personal intro summary
- `location`: Your work availability / location
- `email`, `phone`: Your contact information
- `resumeUrl`: Link to your downloadable resume PDF (you can place your PDF file into the `public/` folder, e.g. `public/resume.pdf` and link to `"/resume.pdf"`)
- `socials`: Your GitHub, LinkedIn, Twitter/X, and WhatsApp links
- `stats`: Key highlights (Years of experience, projects completed, etc.)

### 2. Projects & Case Studies
In `projects` array inside [`src/portfolioData.js`](./src/portfolioData.js):
- Add or edit projects with `title`, `category`, `tagline`, `description`, `tags`, `metrics`, `highlights`, `liveDemo`, and `github`.
- Each project card includes an interactive **Quick View** modal for deep architecture breakdowns.

### 3. Skills & Capabilities
In `skillCategories` inside [`src/portfolioData.js`](./src/portfolioData.js):
- Customize skill names and percentage scores across **WordPress & CMS**, **Frontend**, **Backend & APIs**, and **Performance/DevOps**.

### 4. Experience & Education Timeline
In `experience` and `education` inside [`src/portfolioData.js`](./src/portfolioData.js):
- Update your career history, milestones, company names, key achievements, and education degrees.

### 5. Services Offered
In `services` inside [`src/portfolioData.js`](./src/portfolioData.js):
- Highlight your client service offerings (e.g., *Custom Theme Dev*, *WooCommerce*, *Speed Optimization*, *Headless WP*).

---

## 🛠️ Architecture & Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS Design System with CSS Tokens & Glassmorphism (`src/index.css`)
- **Icons**: Lucide Icons + Custom SVG Brand Badges
- **Micro-Interactions**: Celebratory Confetti on contact inquiry (`canvas-confetti`), copy-to-clipboard toast notifications
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Fira Code*)
