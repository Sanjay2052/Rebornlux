import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { PROJECT_TYPES, COMPLEXITY_LEVELS, FEATURE_OPTIONS } from '../../data/estimator';
import './Estimator.css';

export default function Estimator() {
  const [selectedType, setSelectedType] = useState('saas');
  const [complexity, setComplexity] = useState(2); // default to Advanced
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'payment']);
  const [estimate, setEstimate] = useState({ priceRange: '', weeksRange: '', techStack: [] });

  const handleTypeSelect = (typeId) => {
    setSelectedType(typeId);
  };

  const handleFeatureToggle = (featureId) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
    } else {
      setSelectedFeatures([...selectedFeatures, featureId]);
    }
  };

  const handleComplexityChange = (level) => {
    setComplexity(level);
  };

  useEffect(() => {
    const project = PROJECT_TYPES.find(p => p.id === selectedType);
    const compMultiplier = COMPLEXITY_LEVELS.find(c => c.level === complexity).multiplier;
    
    let basePrice = project.basePrice;
    let baseWeeks = project.baseWeeks;
    let extraTech = [];

    selectedFeatures.forEach(featId => {
      const feat = FEATURE_OPTIONS.find(f => f.id === featId);
      if (feat) {
        basePrice += feat.price;
        baseWeeks += feat.weeks;
        if (featId === 'ai_chat') extraTech.push('LangChain', 'OpenAI');
        if (featId === 'collaboration') extraTech.push('WebSockets');
      }
    });

    const finalPrice = Math.round(basePrice * compMultiplier);
    const finalWeeks = Math.round(baseWeeks * (0.8 + compMultiplier * 0.2));

    // Calculate ranges for budget and timeline
    const minPrice = Math.floor(finalPrice * 0.9 / 1000) * 1000;
    const maxPrice = Math.ceil(finalPrice * 1.1 / 1000) * 1000;
    const minWeeks = Math.max(2, finalWeeks - 1);
    const maxWeeks = finalWeeks + 2;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });

    setEstimate({
      priceRange: `${formatter.format(minPrice)} - ${formatter.format(maxPrice)}`,
      weeksRange: `${minWeeks} - ${maxWeeks} weeks`,
      techStack: Array.from(new Set([...project.tech, ...extraTech]))
    });
  }, [selectedType, complexity, selectedFeatures]);

  const handleApplyEstimate = () => {
    const project = PROJECT_TYPES.find(p => p.id === selectedType);
    const comp = COMPLEXITY_LEVELS.find(c => c.level === complexity);
    const featuresList = selectedFeatures.map(f => FEATURE_OPTIONS.find(feat => feat.id === f).name);
    
    const eventData = {
      projectType: project.name,
      complexity: comp.name,
      features: featuresList,
      estimatedBudget: estimate.priceRange,
      estimatedTimeline: estimate.weeksRange
    };

    // Dispatch custom event to communicate with ContactForm
    const event = new CustomEvent('rebornlux_apply_estimate', { detail: eventData });
    window.dispatchEvent(event);

    // Scroll to contact form
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="estimator" className="estimator-section">
      <div className="section-header">
        <span className="badge">Project Configurator</span>
        <h2>Interactive Project Estimator</h2>
        <p className="subtitle">Customize your software specifications and instantly receive estimates on budgets, schedules, and engineering architectures.</p>
      </div>

      <div className="estimator-container">
        {/* Input Configuration Panel */}
        <div className="estimator-inputs glass-card">
          {/* Step 1: Project Type */}
          <div className="input-group">
            <h3 className="input-title">1. Select Project Archetype</h3>
            <div className="project-grid">
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  className={`project-type-card ${selectedType === type.id ? 'active' : ''}`}
                  onClick={() => handleTypeSelect(type.id)}
                >
                  <span className="project-name">{type.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: UI/UX Complexity */}
          <div className="input-group">
            <h3 className="input-title">2. UI/UX & Interaction Sophistication</h3>
            <div className="complexity-grid">
              {COMPLEXITY_LEVELS.map((comp) => (
                <button
                  key={comp.level}
                  type="button"
                  className={`complexity-card ${complexity === comp.level ? 'active' : ''}`}
                  onClick={() => handleComplexityChange(comp.level)}
                >
                  <span className="complexity-num">0{comp.level}</span>
                  <span className="complexity-name">{comp.name.split(' ')[0]}</span>
                  <span className="complexity-desc">{comp.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Features */}
          <div className="input-group">
            <h3 className="input-title">3. Advanced Logic & Integrations</h3>
            <div className="features-grid">
              {FEATURE_OPTIONS.map((feat) => (
                <div
                  key={feat.id}
                  className={`feature-card ${selectedFeatures.includes(feat.id) ? 'active' : ''}`}
                  onClick={() => handleFeatureToggle(feat.id)}
                >
                  <div className="feature-header">
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feat.id)}
                      onChange={() => {}} // toggled by parent div click
                    />
                    <span className="feature-name">{feat.name}</span>
                  </div>
                  <p className="feature-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Calculation Output Panel */}
        <div className="estimator-output glass-card">
          <div className="output-inner">
            <h3 className="output-title">REBORNLUX Analytical Assessment</h3>
            <div className="divider"></div>
            
            <div className="metric-box">
              <div className="metric-icon-wrapper cyan">
                <DollarSign size={24} />
              </div>
              <div className="metric-details">
                <span className="metric-label">Estimated Budget</span>
                <span className="metric-val">{estimate.priceRange}</span>
              </div>
            </div>

            <div className="metric-box">
              <div className="metric-icon-wrapper purple">
                <Clock size={24} />
              </div>
              <div className="metric-details">
                <span className="metric-label">Estimated Delivery Schedule</span>
                <span className="metric-val">{estimate.weeksRange}</span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="tech-recommendation">
              <h4 className="tech-rec-title">
                <Sparkles size={16} className="sparkle-icon" />
                Recommended Architecture Stack
              </h4>
              <div className="tech-badges">
                {estimate.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="divider"></div>

            <div className="guarantees">
              <div className="guarantee-item">
                <ShieldCheck size={16} className="g-icon" />
                <span>Fixed price & timeline guarantee.</span>
              </div>
              <div className="guarantee-item">
                <Layers size={16} className="g-icon" />
                <span>Zero legacy debt deployment.</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-estimate-submit"
              onClick={handleApplyEstimate}
            >
              <span>Build This Project</span>
              <Sparkles size={16} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
