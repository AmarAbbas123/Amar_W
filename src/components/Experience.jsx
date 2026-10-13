import React, { useState } from 'react';
import { experience, education } from '../portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const [viewType, setViewType] = useState('experience');

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            <span>Career Path</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Background</span>
          </h2>
          <p className="section-desc">
            A track record of engineering leadership, scalable CMS implementations, 
            and continuous mastery in modern full-stack web engineering.
          </p>
        </div>

        {/* View Switcher Toggle */}
        <div className="experience-toggle-wrap">
          <button 
            className={`exp-toggle-btn ${viewType === 'experience' ? 'active' : ''}`}
            onClick={() => setViewType('experience')}
          >
            <Briefcase size={16} />
            <span>Work Experience</span>
          </button>
          <button 
            className={`exp-toggle-btn ${viewType === 'education' ? 'active' : ''}`}
            onClick={() => setViewType('education')}
          >
            <GraduationCap size={16} />
            <span>Education & Certifications</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          
          {viewType === 'experience' && (
            <div className="timeline-list">
              {experience.map((item, idx) => (
                <div key={item.id} className="timeline-card-wrapper">
                  
                  {/* Timeline Pin Node */}
                  <div className="timeline-pin">
                    <div className="pin-inner"></div>
                  </div>

                  {/* Timeline Card */}
                  <div className="timeline-card glass-panel">
                    <div className="timeline-card-header">
                      <div>
                        <h3 className="timeline-role">{item.role}</h3>
                        <div className="timeline-company">
                          {item.url ? (
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="timeline-company-link"
                            >
                              <span>{item.company}</span>
                              <ExternalLink size={13} />
                            </a>
                          ) : (
                            item.company
                          )}
                        </div>
                      </div>
                      
                      <div className="timeline-badges">
                        <span className="timeline-period-badge">
                          <Calendar size={13} />
                          <span>{item.period}</span>
                        </span>
                        <span className="timeline-meta-badge">
                          <MapPin size={13} />
                          <span>{item.location} • {item.type}</span>
                        </span>
                      </div>
                    </div>

                    <p className="timeline-description">{item.description}</p>

                    {/* Achievements */}
                    <div className="timeline-achievements">
                      <h4 className="achievements-title">Key Contributions & Impact:</h4>
                      <ul className="achievements-list">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="achievement-item">
                            <CheckCircle2 size={15} className="ach-check" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack tags */}
                    <div className="timeline-stack">
                      {item.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

          {viewType === 'education' && (
            <div className="timeline-list">
              {education.map((item, idx) => (
                <div key={item.id} className="timeline-card-wrapper">
                  
                  <div className="timeline-pin pin-education">
                    <div className="pin-inner"></div>
                  </div>

                  <div className="timeline-card glass-panel">
                    <div className="timeline-card-header">
                      <div>
                        <h3 className="timeline-role">{item.degree}</h3>
                        <div className="timeline-company">{item.institution}</div>
                      </div>
                      <span className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <p className="timeline-description">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
