import React from 'react';
import { services } from '../portfolioData';
import { 
  Layout, 
  ShoppingBag, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Repeat, 
  ArrowRight 
} from 'lucide-react';
import './Services.css';

export default function Services() {
  const getServiceIcon = (icon) => {
    switch (icon) {
      case 'Layout': return <Layout size={24} />;
      case 'ShoppingBag': return <ShoppingBag size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Repeat': return <Repeat size={24} />;
      default: return <Zap size={24} />;
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot"></span>
            <span>What I Deliver</span>
          </div>
          <h2 className="section-title">
            Specialized <span className="gradient-text">Development Services</span>
          </h2>
          <p className="section-desc">
            End-to-end CMS architecture and web engineering designed to deliver bulletproof reliability, 
            rapid load times, and frictionless customer conversions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-card glass-panel">
              <div className="service-icon-box">
                {getServiceIcon(srv.icon)}
              </div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.description}</p>
              
              <a href="#contact" className="service-learn-more">
                <span>Inquire About Service</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
