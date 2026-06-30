import React, { useState } from 'react';
import { FEATURED_CASES, ALL_PROJECTS } from '../../data/portfolio';
import { ArrowRight, RefreshCw, Zap } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const [featuredId, setFeaturedId] = useState('retail-pos');
  const [sliderVal, setSliderVal] = useState(50);
  const [activeFilter, setActiveFilter] = useState('all');

  const featured = FEATURED_CASES.find(c => c.id === featuredId);

  const handleSliderChange = (e) => {
    setSliderVal(Number(e.target.value));
  };

  const filteredProjects = ALL_PROJECTS.filter(p => 
    activeFilter === 'all' || p.type === activeFilter
  );

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <span className="badge">Featured Cases</span>
        <h2>Proven Performance Transformations</h2>
        <p className="subtitle">Witness how we dismantle bottlenecks and inject new life into sluggish codebases. Slide to see before vs. after metrics.</p>
      </div>

      {/* Featured Slider Showcase */}
      <div className="portfolio-tabs">
        {FEATURED_CASES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`portfolio-tab-btn ${featuredId === c.id ? 'active' : ''}`}
            onClick={() => {
              setFeaturedId(c.id);
              setSliderVal(50);
            }}
          >
            <span className="btn-tag">{c.tag}</span>
            <span className="btn-title">{c.title}</span>
          </button>
        ))}
      </div>

      <div className="portfolio-showcase-container glass-card" style={{ marginBottom: '60px' }}>
        {/* Left Side: Project details */}
        <div className="project-details">
          <span className="project-tag-pill" style={{ borderColor: featured.color, color: featured.color }}>
            {featured.tag}
          </span>
          <h3 className="project-title">{featured.title}</h3>
          <p className="project-desc">{featured.description}</p>
          
          <div className="project-benefits">
            {featured.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <Zap size={14} className="benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="portfolio-action-row">
            <a href="#contact" className="portfolio-cta-btn">
              <span>Request Case Study Analysis</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Before/After Metrics Slider */}
        <div className="project-comparison">
          <h4 className="comp-title">{featured.metricName}</h4>
          
          <div className="comparison-display-box">
            {/* Before Panel (Red tint) */}
            <div 
              className="comp-panel before-panel" 
              style={{ clipPath: `polygon(0 0, ${sliderVal}% 0, ${sliderVal}% 100%, 0 100%)` }}
            >
              <div className="panel-content">
                <span className="metric-badge before-badge">Legacy Code</span>
                <span className="metric-num before-num">{featured.beforeVal}</span>
                <p className="metric-details-desc">{featured.beforeDesc}</p>
              </div>
            </div>

            {/* After Panel (Cyan/Purple tint) */}
            <div 
              className="comp-panel after-panel" 
              style={{ clipPath: `polygon(${sliderVal}% 0, 100% 0, 100% 100%, ${sliderVal}% 100%)` }}
            >
              <div className="panel-content">
                <span className="metric-badge after-badge">REBORNLUX Optimizations</span>
                <span className="metric-num after-num">{featured.afterVal}</span>
                <p className="metric-details-desc">{featured.afterDesc}</p>
              </div>
            </div>

            {/* Slider bar overlay indicator */}
            <div className="slider-bar" style={{ left: `${sliderVal}%` }}>
              <div className="slider-handle">
                <RefreshCw size={14} className="handle-icon" />
              </div>
            </div>
          </div>

          {/* Actual HTML range input */}
          <div className="range-container">
            <span className="slider-label">Legacy</span>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderVal} 
              onChange={handleSliderChange}
              className="comparison-range-slider"
              aria-label="Before and After Slider"
            />
            <span className="slider-label">Rebornlux Optimized</span>
          </div>
          
          <p className="slider-instructions">Drag the slider left and right to compare legacy performance with REBORNLUX code.</p>
        </div>
      </div>

      {/* Grid of All 8 Projects */}
      <div className="section-header" style={{ marginBottom: '40px', marginTop: '80px' }}>
        <span className="badge">Project Catalog</span>
        <h2>Our Core Implementations</h2>
        <p className="subtitle" style={{ fontSize: '0.98rem' }}>Explore our completed software systems deployed globally.</p>
      </div>

      {/* Filter Tabs */}
      <div className="tech-filters glass-card" style={{ marginBottom: '30px' }}>
        <button
          type="button"
          className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeFilter === 'pos' ? 'active' : ''}`}
          onClick={() => setActiveFilter('pos')}
        >
          POS Systems
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeFilter === 'web' ? 'active' : ''}`}
          onClick={() => setActiveFilter('web')}
        >
          Web Apps
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveFilter('mobile')}
        >
          Mobile Apps
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeFilter === 'enterprise' ? 'active' : ''}`}
          onClick={() => setActiveFilter('enterprise')}
        >
          Enterprise
        </button>
      </div>

      <div className="tech-grid">
        {filteredProjects.map((p) => (
          <div key={p.name} className="tech-card glass-card">
            <div className="tech-card-header">
              <span className="tech-name">{p.name}</span>
              <span className="tech-badge-cat">{p.tag}</span>
            </div>
            <p className="tech-desc" style={{ minHeight: '60px' }}>{p.desc}</p>
            <div className="tech-badges">
              {p.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
