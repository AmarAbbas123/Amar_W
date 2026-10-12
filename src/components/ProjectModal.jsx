import React, { useEffect } from 'react';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  CheckCircle, 
  Gauge, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content project-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with gradient & close button */}
        <div 
          className="modal-banner"
          style={{ background: project.imageGradient }}
        >
          <div className="modal-banner-overlay"></div>
          <button 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="modal-banner-content">
            <span className="modal-category-badge">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          
          {/* Metrics Row */}
          <div className="modal-metrics-strip">
            <div className="metric-box">
              <div className="metric-icon-wrap metric-cyan">
                <Gauge size={16} />
              </div>
              <div>
                <div className="metric-num">{project.metrics.speedScore}/100</div>
                <div className="metric-name">Lighthouse Speed</div>
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-icon-wrap metric-emerald">
                <TrendingUp size={16} />
              </div>
              <div>
                <div className="metric-num">{project.metrics.conversionBoost}</div>
                <div className="metric-name">Conversion Impact</div>
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-icon-wrap metric-violet">
                <Clock size={16} />
              </div>
              <div>
                <div className="metric-num">{project.metrics.pageLoad}</div>
                <div className="metric-name">Average Load Time</div>
              </div>
            </div>
          </div>

          {/* Deep Overview */}
          <div className="modal-section">
            <h4 className="modal-subtitle">Project Architecture & Solution</h4>
            <p className="modal-description">{project.description}</p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="modal-section">
            <h4 className="modal-subtitle">Key Features & Engineering Highlights</h4>
            <ul className="modal-highlights-list">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="highlight-item">
                  <CheckCircle size={16} className="highlight-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-subtitle">Technologies & Tools</h4>
            <div className="modal-tags-wrap">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="modal-footer-actions">
            <a 
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <span>Live Demonstration</span>
              <ExternalLink size={16} />
            </a>
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}
            <button 
              className="btn btn-secondary modal-cancel-btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
