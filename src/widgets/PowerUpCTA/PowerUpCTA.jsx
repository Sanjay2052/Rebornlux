import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Zap, Mail } from 'lucide-react';
import './PowerUpCTA.css';

export default function PowerUpCTA() {
  const { t } = useLanguage();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="power-up-section">
      <div className="power-up-container">
        <div className="power-up-card">
          <div className="power-up-content">
            <div className="power-up-badge">
              <Zap size={14} />
              <span>{t('cta.badge')}</span>
            </div>

            <h2 className="power-up-title">{t('cta.title')}</h2>
            <p className="power-up-subtitle">{t('cta.subtitle')}</p>

            <div className="power-up-actions">
              <a 
                href="#contact" 
                onClick={handleScrollToContact} 
                className="power-up-btn-primary"
              >
                <span>{t('cta.primaryBtn')}</span>
                <ArrowRight size={18} className="cta-arrow-icon" />
              </a>

              <a 
                href="#contact" 
                onClick={handleScrollToContact} 
                className="power-up-btn-secondary"
              >
                <Mail size={16} />
                <span>{t('cta.secondaryBtn')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
