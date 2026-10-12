import React from 'react';
import { personalInfo } from '../portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Zap, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Hero Text & CTAs */}
        <div className="hero-content">
          {/* Eyebrow badge */}
          <div className="section-tag hero-badge">
            <Sparkles size={14} />
            <span>{personalInfo.title}</span>
          </div>

          <h1 className="hero-title">
            Crafting <span className="gradient-text">High-Velocity</span> WordPress & Modern Web Apps.
          </h1>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn">
              <span>Start a Project</span>
            </a>
          </div>

          {/* Social Proof & Quick Links */}
          <div className="hero-social-strip">
            <span className="social-label">Connect:</span>
            <div className="social-icons">
              {personalInfo.socials.github && (
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-pill"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {personalInfo.socials.linkedin && (
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-pill"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.socials.whatsapp && (
                <a 
                  href={personalInfo.socials.whatsapp} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-pill social-pill-emerald"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code & Architecture Preview */}
        <div className="hero-visual">
          <div className="hero-card-glow"></div>
          <div className="hero-window glass-panel">
            
            {/* Window Header */}
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-tab">
                <Code2 size={13} className="tab-icon" />
                <span>WP_Headless_Engine.php</span>
              </div>
              <div className="window-badge">
                <Zap size={12} />
                <span>99/100 Core Web Vitals</span>
              </div>
            </div>

            {/* Window Body (Code & Visual Stats) */}
            <div className="window-body">
              <pre className="code-block">
                <code>
                  <span className="code-comment">// High-performance decoupled architecture</span>{'\n'}
                  <span className="code-keyword">class</span> <span className="code-class">ApexPerformanceEngine</span> {'{\n'}
                  {'  '}<span className="code-keyword">public function</span> <span className="code-func">initializeStack</span>(): <span className="code-type">void</span> {'{\n'}
                  {'    '}<span className="code-variable">$this</span>-&gt;<span className="code-func">enableRedisCaching</span>();{'\n'}
                  {'    '}<span className="code-variable">$this</span>-&gt;<span className="code-func">optimizeCoreWebVitals</span>();{'\n'}
                  {'    '}<span className="code-variable">$this</span>-&gt;<span className="code-func">bridgeGraphQLToReact</span>();{'\n'}
                  {'  }'}{'\n'}
                  {'}'}
                </code>
              </pre>

              {/* Live Metric Badges */}
              <div className="window-features">
                <div className="feature-pill">
                  <CheckCircle2 size={14} className="feature-check" />
                  <span>Zero Bloat Custom Themes</span>
                </div>
                <div className="feature-pill">
                  <CheckCircle2 size={14} className="feature-check" />
                  <span>Sub-Second TTFB Latency</span>
                </div>
                <div className="feature-pill">
                  <CheckCircle2 size={14} className="feature-check" />
                  <span>Custom ACF & Gutenberg Blocks</span>
                </div>
                <div className="feature-pill">
                  <CheckCircle2 size={14} className="feature-check" />
                  <span>WooCommerce API Integration</span>
                </div>
              </div>
            </div>

            {/* Floating Live Indicator Badge */}
            <div className="floating-badge-bottom">
              <div className="badge-glow-icon">
                <Cpu size={18} />
              </div>
              <div>
                <div className="badge-title">Enterprise Ready</div>
                <div className="badge-sub">WordPress + React + PHP 8.x</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Hero Stats Grid */}
      <div className="container hero-stats-container">
        <div className="stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-panel">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
