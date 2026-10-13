import React from 'react';
import { personalInfo } from '../portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { 
  ArrowUp, 
  Terminal, 
  MessageSquare 
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        
        {/* Top Tier */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="brand-icon-box">
                <Terminal size={18} />
              </div>
              <div>
                <span className="brand-name">{personalInfo.name}</span>
                <span className="brand-sub">WP • Laravel • React</span>
              </div>
            </div>
            <p className="footer-brand-tagline">
              Engineering lightning-fast WordPress architectures, robust Laravel APIs, and modern React web experiences.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-nav-list">
              <a href="#hero">Overview</a>
              <a href="#projects">Case Studies</a>
              <a href="#skills">Capabilities</a>
              <a href="#services">Services</a>
              <a href="#experience">Timeline</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-heading">Network</h4>
            <div className="footer-social-links">
              {personalInfo.socials.github && (
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="footer-social-btn" title="GitHub">
                  <GithubIcon size={18} />
                </a>
              )}
              {personalInfo.socials.linkedin && (
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="footer-social-btn" title="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
              )}
              {personalInfo.socials.twitter && (
                <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="footer-social-btn" title="Twitter">
                  <TwitterIcon size={18} />
                </a>
              )}
              {personalInfo.socials.whatsapp && (
                <a href={personalInfo.socials.whatsapp} target="_blank" rel="noreferrer" className="footer-social-btn" title="WhatsApp">
                  <MessageSquare size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Crafted with React, Vite & Vanilla CSS.
          </p>

          <button 
            className="back-to-top-btn"
            onClick={scrollToTop}
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
