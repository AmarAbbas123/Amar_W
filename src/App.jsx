import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Dynamic Ambient Background Orbs */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
      </div>
      
      {/* Subtle Matrix / Grid Overlay */}
      <div className="bg-grid-overlay" aria-hidden="true"></div>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Services />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
