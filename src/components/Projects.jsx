import React, { useState } from 'react';
import { projects, categories } from '../portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';
import { 
  ExternalLink, 
  Layers, 
  Eye, 
  Gauge, 
  Sparkles 
} from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Engineering Fast, Scalable <span className="gradient-text">Web Solutions</span>
          </h2>
          <p className="section-desc">
            Explore a curated selection of bespoke WordPress architectures, headless applications, 
            and high-converting e-commerce platforms engineered for speed and search visibility.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filter-wrap">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projects.length 
              : projects.filter((p) => p.category === cat).length;
            
            return (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-panel">
              
              {/* Card Visual Header */}
              <div 
                className="project-visual-header"
                style={{ background: project.imageGradient }}
              >
                <div className="project-visual-overlay"></div>
                
                {/* Speed Score Badge */}
                <div className="project-perf-badge">
                  <Gauge size={13} />
                  <span>{project.metrics.speedScore}/100</span>
                </div>

                {project.featured && (
                  <div className="project-featured-badge">
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </div>
                )}

                {/* Quick View Button */}
                <button 
                  className="quick-view-overlay-btn"
                  onClick={() => setActiveModalProject(project)}
                  title="View Deep Architecture"
                >
                  <Eye size={16} />
                  <span>Quick View</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-meta-row">
                  <span className="project-category-tag">{project.category}</span>
                  <span className="project-load-time">{project.metrics.pageLoad} load</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-tagline">{project.tagline}</p>

                {/* Tech Tags */}
                <div className="project-card-tags">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tech-tag tag-more">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Card Actions */}
                <div className="project-card-footer">
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <span>Details</span>
                  </button>

                  <div className="project-direct-links">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-icon-link"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    <a 
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon-link link-highlight"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal 
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
