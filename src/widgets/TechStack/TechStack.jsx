import React, { useState } from 'react';
import { CATEGORIES, TECHNOLOGIES } from '../../data/technologies';
import './TechStack.css';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTech = TECHNOLOGIES.filter(tech => 
    activeCategory === 'all' || tech.category === activeCategory
  );

  return (
    <section id="techstack" className="techstack-section">
      <div className="section-header">
        <span className="badge">Engineering Stack</span>
        <h2>Modern Core Technologies</h2>
        <p className="subtitle">We deploy verified stacks that guarantee exceptional efficiency, zero security compromises, and endless scalability.</p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="tech-filters glass-card">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <Icon size={18} className="tab-icon" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Technologies */}
      <div className="tech-grid">
        {filteredTech.map((tech) => (
          <div key={tech.name} className="tech-card glass-card">
            <div className="tech-card-header">
              <span className="tech-name">{tech.name}</span>
              <span className="tech-badge-cat">{tech.category.toUpperCase()}</span>
            </div>
            
            <p className="tech-desc">{tech.desc}</p>
            
            {/* Efficiency Score Slider Indicator */}
            <div className="tech-score-wrapper">
              <div className="score-header">
                <span className="score-label">REBORNLUX Capability</span>
                <span className="score-val">{tech.rating}%</span>
              </div>
              <div className="score-track">
                <div className="score-bar" style={{ width: `${tech.rating}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
