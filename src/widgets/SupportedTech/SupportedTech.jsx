import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TECH_CATEGORIES, TECHNOLOGIES } from '../../data/technologies';
import { TECH_ICONS } from '../../data/technologyIcons';
import './SupportedTech.css';

export default function SupportedTech() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTechs = activeCategory === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((item) => item.category === activeCategory);

  const row1 = filteredTechs.filter((_, idx) => idx % 2 === 0);
  const row2 = filteredTechs.filter((_, idx) => idx % 2 !== 0);
  const finalRow2 = row2.length > 0 ? row2 : row1;

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

        {/* Dual-Row Auto-scrolling Technology Cards Marquee */}
        <div className="tech-marquee-wrapper">
          {/* Row 1 */}
          <div className="tech-marquee-track marquee-track-left">
            {row1.concat(row1).concat(row1).concat(row1).map((tech, index) => (
              <div key={`r1-${index}`} className="tech-card-pill">
                <div className="tech-pill-header">
                  <div className="tech-pill-logo">
                    {TECH_ICONS[tech.name]}
                  </div>
                  <span className="tech-pill-name">{tech.name}</span>
                </div>
                <span className="tech-pill-desc">{t(tech.descKey) || tech.desc}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="tech-marquee-track marquee-track-right">
            {finalRow2.concat(finalRow2).concat(finalRow2).concat(finalRow2).map((tech, index) => (
              <div key={`r2-${index}`} className="tech-card-pill">
                <div className="tech-pill-header">
                  <div className="tech-pill-logo">
                    {TECH_ICONS[tech.name]}
                  </div>
                  <span className="tech-pill-name">{tech.name}</span>
                </div>
                <span className="tech-pill-desc">{t(tech.descKey) || tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
