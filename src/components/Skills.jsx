import React, { useState } from 'react';
import { skillCategories } from '../portfolioData';
import { 
  Layout, 
  Code, 
  Database, 
  Zap, 
  Terminal,
  CheckCheck, 
  Sparkles 
} from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={20} />;
      case 'Code': return <Code size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'Terminal': return <Terminal size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Technologies</span>
          </h2>
          <p className="section-desc">
            A comprehensive overview of my technical stack across full-lifecycle WordPress engineering, 
            modern JavaScript frameworks, and high-throughput server architecture.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="skills-tab-bar">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`skills-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <div className="tab-btn-icon">
                {getIcon(cat.icon)}
              </div>
              <span className="tab-btn-text">{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="skills-content-card glass-panel">
          <div className="skills-card-header">
            <div className="skills-category-badge">
              {getIcon(skillCategories[activeTab].icon)}
              <h3>{skillCategories[activeTab].category}</h3>
            </div>
            <p className="skills-category-description">
              {skillCategories[activeTab].description}
            </p>
          </div>

          <div className="skills-meters-grid">
            {skillCategories[activeTab].skills.map((skill, sIdx) => (
              <div key={sIdx} className="skill-meter-item">
                <div className="skill-meter-info">
                  <span className="skill-meter-name">
                    <CheckCheck size={14} className="skill-icon-tick" />
                    {skill.name}
                  </span>
                  <span className="skill-meter-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-track">
                  <div 
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="skill-bar-sheen"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
