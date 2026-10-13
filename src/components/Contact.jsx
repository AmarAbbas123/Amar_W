import React, { useState } from 'react';
import { personalInfo } from '../portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  MessageSquare,
  Clock
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Custom WordPress Theme',
    budget: '$3k - $5k',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Fire celebratory confetti burst!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981'],
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-desc">
            Have an upcoming WordPress project, need speed optimization, or want to engineer a bespoke headless React application? 
            Send over your project details or reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-panel glass-panel">
            <h3 className="contact-panel-title">Direct Inquiries</h3>
            <p className="contact-panel-desc">
              I am currently accepting new freelance contracts, agency partnerships, and consulting roles.
            </p>

            <div className="contact-channels">
              
              {/* Email Box with One-Click Copy */}
              <div className="channel-box">
                <div className="channel-icon">
                  <Mail size={18} />
                </div>
                <div className="channel-details">
                  <div className="channel-title">Email Address</div>
                  <div className="channel-value">{personalInfo.email}</div>
                </div>
                <button 
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone / WhatsApp Box */}
              {personalInfo.phone && (
                <div className="channel-box">
                  <div className="channel-icon">
                    <Phone size={18} />
                  </div>
                  <div className="channel-details">
                    <div className="channel-title">Phone / WhatsApp</div>
                    <div className="channel-value">{personalInfo.phone}</div>
                  </div>
                  {personalInfo.socials.whatsapp && (
                    <a 
                      href={personalInfo.socials.whatsapp} 
                      target="_blank" 
                      rel="noreferrer"
                      className="chat-btn"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare size={16} />
                    </a>
                  )}
                </div>
              )}

              {/* Location Box */}
              <div className="channel-box">
                <div className="channel-icon">
                  <MapPin size={18} />
                </div>
                <div className="channel-details">
                  <div className="channel-title">Location & Availability</div>
                  <div className="channel-value">{personalInfo.location}</div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="channel-box channel-highlight">
                <div className="channel-icon icon-cyan">
                  <Clock size={18} />
                </div>
                <div className="channel-details">
                  <div className="channel-title text-cyan">Typical Response Time</div>
                  <div className="channel-value">Within 12 - 24 hours</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Proposal / Inquiry Form */}
          <div className="contact-form-panel glass-panel">
            {formSubmitted ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <Sparkles size={32} />
                </div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>. I have received your project details regarding 
                  <strong> {formData.projectType}</strong> and will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'Custom WordPress Theme',
                      budget: '$3k - $5k',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form">
                <h3 className="form-heading">Project Inquiry Form</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Service / Project Type</label>
                    <select 
                      id="projectType" 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option>Custom WordPress Theme</option>
                      <option>WooCommerce Store / E-Commerce</option>
                      <option>Laravel REST API & Web App</option>
                      <option>Headless WordPress + React</option>
                      <option>Core Web Vitals & Speed Optimization</option>
                      <option>Custom Plugin Engineering</option>
                      <option>Figma to WordPress Conversion</option>
                      <option>Other / General Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget</label>
                    <select 
                      id="budget" 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Description & Requirements</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    placeholder="Tell me about your project goals, timeline, and current pain points..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <span>Send Project Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Copy notification toast */}
      {copied && (
        <div className="toast-notice">
          <Check size={18} className="text-emerald" />
          <span>Email copied to your clipboard!</span>
        </div>
      )}
    </section>
  );
}
