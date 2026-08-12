import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TECH_CATEGORIES, TECHNOLOGIES } from '../../data/technologies';
import './SupportedTech.css';

export default function SupportedTech() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTechs = activeCategory === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((item) => item.category === activeCategory);

  return (
    <section id="techstack" className="supported-tech-section">
      <div className="supported-tech-container">
        <div className="supported-tech-header">
          <span className="supported-tech-badge">{t('techStack.badge')}</span>
          <h2 className="supported-tech-title">
            {t('techStack.title')}
          </h2>
          <p className="supported-tech-subtitle">
            {t('techStack.subtitle')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="tech-categories-tabs">
          {TECH_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`tech-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon size={16} />
                <span>{t(cat.nameKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Auto-scrolling Technology Carousel Marquee */}
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track">
            {filteredTechs.concat(filteredTechs).map((tech, index) => (
              <div key={index} className="tech-card-pill">
                <span className="tech-pill-name">{tech.name}</span>
                <span className="tech-pill-desc">{t(tech.descKey) || tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
