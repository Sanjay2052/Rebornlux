import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../context/LanguageContext';
import { SUCCESS_STORIES } from '../../data/successStories';
import { ExternalLink, CheckCircle2, X, ShoppingBag, Smartphone, Store, Flame, Sparkles } from 'lucide-react';
import './SuccessStories.css';

export default function SuccessStories() {
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

  return (
    <section id="success-stories" className="success-stories-section">
      <div className="success-stories-container">
        <div className="success-stories-header">
          <span className="success-stories-badge">{t('successStories.badge')}</span>
          <h2 className="success-stories-title">{t('successStories.title')}</h2>
          <p className="success-stories-subtitle">{t('successStories.subtitle')}</p>
        </div>

        {/* 4 Success Stories Grid */}
        <div className="stories-grid">
          {SUCCESS_STORIES.map((project) => {
            const ProjectIcon = getProjectIcon(project.id);
            const name = t(project.nameKey);
            const subtitle = t(project.subtitleKey);
            const desc = t(project.descKey);
            const badgeText = t(project.badgeKey) || project.badge;

            return (
              <div key={project.id} className="story-card">
                <div className="story-card-top">
                  <div className="story-badge-row">
                    <span className="story-category-tag">{badgeText}</span>
                    <ProjectIcon size={20} className="story-header-icon" />
                  </div>
                  
                  <h3 className="story-title">{name}</h3>
                  <span className="story-subtitle-text">{subtitle}</span>
                  <p className="story-desc">{desc}</p>
                </div>

                {/* Tech Stack Badges */}
                <div className="story-tech-row">
                  {project.tech.map((tItem, idx) => (
                    <span key={idx} className="story-tech-pill">{tItem}</span>
                  ))}
                </div>

                <div className="story-card-footer">
                  <button
                    className="story-view-btn"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <span>{t('successStories.viewProject')}</span>
                    <ExternalLink size={15} className="btn-arrow" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Project Modal using React Portal */}
      {activeModalProject && createPortal(
        <div className="story-modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="story-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="story-modal-close"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header-tag">
              <Sparkles size={16} />
              <span>{t(activeModalProject.badgeKey) || activeModalProject.badge} — CASE STUDY</span>
            </div>

            <h3 className="modal-project-title">{t(activeModalProject.nameKey)}</h3>
            <span className="modal-project-industry">{t(activeModalProject.subtitleKey)}</span>

            <p className="modal-project-desc">{t(activeModalProject.descKey)}</p>

            <div className="modal-results-section">
              <h4>{t('successStories.keyResults')}</h4>
              <div className="modal-panels-list">
                {(t(activeModalProject.panelsKey) || []).map((panel, i) => (
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
              <h4>{t('successStories.technologies')}</h4>
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
                {t('successStories.close')}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
