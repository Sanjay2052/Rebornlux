import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../context/LanguageContext';
import { OUR_PORTFOLIO } from '../../data/ourPortfolio';
import { ExternalLink, CheckCircle2, X, ShoppingBag, Smartphone, Store, Flame, Sparkles } from 'lucide-react';
import './OurPortfolio.css';

export default function OurPortfolio() {
  const { t } = useLanguage();
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Prevent background page scrolling when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalProject]);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'sumatWeb': return ShoppingBag;
      case 'oilGas': return Flame;
      case 'sumatMobile': return Smartphone;
      case 'sumatPos': return Store;
      default: return ShoppingBag;
    }
  };

  const getTranslation = (key) => t(key);

  return (
    <section id="portfolio" className="our-portfolio-section">
      <div className="our-portfolio-container">
        <div className="our-portfolio-header">
          <span className="our-portfolio-badge">{getTranslation('ourPortfolio.badge')}</span>
          <h2 className="our-portfolio-title">{getTranslation('ourPortfolio.title')}</h2>
          <p className="our-portfolio-subtitle">{getTranslation('ourPortfolio.subtitle')}</p>
        </div>

        {/* 4 Projects Portfolio Grid */}
        <div className="portfolio-grid">
          {OUR_PORTFOLIO.map((project) => {
            const ProjectIcon = getProjectIcon(project.id);
            const name = getTranslation(project.nameKey);
            const subtitle = getTranslation(project.subtitleKey);
            const desc = getTranslation(project.descKey);
            const badgeText = getTranslation(project.badgeKey) || project.badge;

            return (
              <div key={project.id} className="portfolio-card">
                {project.image && (
                  <div className="portfolio-card-image-wrapper">
                    <img src={project.image} alt={name} className="portfolio-card-image" />
                    <div className="portfolio-card-image-overlay">
                      <span className="portfolio-category-tag">{badgeText}</span>
                      <ProjectIcon size={18} className="portfolio-header-icon" />
                    </div>
                  </div>
                )}
                
                <div className="portfolio-card-body">
                  <h3 className="portfolio-card-title">{name}</h3>
                  <span className="portfolio-subtitle-text">{subtitle}</span>
                  <p className="portfolio-desc">{desc}</p>

                  {/* Tech Stack Badges */}
                  <div className="portfolio-tech-row">
                    {project.tech.map((tItem, idx) => (
                      <span key={idx} className="portfolio-tech-pill">{tItem}</span>
                    ))}
                  </div>

                  <div className="portfolio-card-footer">
                    <button
                      className="portfolio-view-btn"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <span>{getTranslation('ourPortfolio.viewProject')}</span>
                      <ExternalLink size={15} className="btn-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Project Modal using React Portal */}
      {activeModalProject && createPortal(
        <div className="portfolio-modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="portfolio-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="portfolio-modal-close"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {activeModalProject.image && (
              <div className="modal-image-header">
                <img src={activeModalProject.image} alt={getTranslation(activeModalProject.nameKey)} className="modal-project-img" />
              </div>
            )}

            <div className="modal-scroll-body">
              <div className="modal-header-tag">
                <Sparkles size={16} />
                <span>{getTranslation(activeModalProject.badgeKey) || activeModalProject.badge} — CASE STUDY</span>
              </div>

              <h3 className="modal-project-title">{getTranslation(activeModalProject.nameKey)}</h3>
              <span className="modal-project-industry">{getTranslation(activeModalProject.subtitleKey)}</span>

              <p className="modal-project-desc">{getTranslation(activeModalProject.descKey)}</p>

              <div className="modal-results-section">
                <h4>{getTranslation('ourPortfolio.keyResults')}</h4>
                <div className="modal-panels-list">
                  {(getTranslation(activeModalProject.panelsKey) || []).map((panel, i) => (
                    <div key={i} className="modal-panel-card">
                      <div className="modal-panel-header">
                        <CheckCircle2 size={16} className="res-icon" />
                        <strong>{panel.label}</strong>
                      </div>
                      <p>{panel.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-tech-section">
                <h4>{getTranslation('ourPortfolio.technologies')}</h4>
                <div className="modal-tech-pills">
                  {activeModalProject.tech.map((tItem, idx) => (
                    <span key={idx} className="modal-tech-badge">{tItem}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions-row">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveModalProject(null);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="modal-cta-primary"
                >
                  <span>Build Similar Solution</span>
                </a>
                <button className="modal-btn-close" onClick={() => setActiveModalProject(null)}>
                  {getTranslation('ourPortfolio.close')}
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
