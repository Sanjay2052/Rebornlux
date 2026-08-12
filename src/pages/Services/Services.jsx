import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SERVICES } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, X, Check } from 'lucide-react';
import './Services.css';

export default function Services() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  // Prevent background page scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    handleCloseModal();
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
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-badge">{t('services.badge')}</span>
          <h2 className="services-title">{t('services.heading')}</h2>
          <p className="services-subtitle">{t('services.paragraph')}</p>
        </div>

        {/* 10 Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-box">
                  <Icon size={26} className="service-icon" />
                </div>
                
                <h3 className="service-card-title">{t(service.titleKey)}</h3>
                <p className="service-card-desc">{t(service.descKey)}</p>

                <div className="service-tech-tags">
                  {service.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-tag-badge">{tech}</span>
                  ))}
                </div>

                <button
                  className="service-learn-btn"
                  onClick={() => handleOpenModal(service)}
                >
                  <span>{t('services.learnMore')}</span>
                  <ArrowRight size={14} className="btn-arrow" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal using React Portal to escape transformed section container */}
      {selectedService && createPortal(
        <div className="service-modal-overlay" onClick={handleCloseModal}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="modal-icon-box">
                {React.createElement(selectedService.icon, { size: 28, className: 'modal-icon' })}
              </div>
              <div>
                <h3 className="modal-title">{t(selectedService.titleKey)}</h3>
                <span className="modal-category">ENGINEERING SPECIFICATION</span>
              </div>
            </div>

            <p className="modal-desc">{t(selectedService.descKey)}</p>

            <div className="modal-section">
              <h4>Key Deliverables & Features</h4>
              <ul className="modal-features-list">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx}>
                    <Check size={16} className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4>Core Technology Stack</h4>
              <div className="modal-tech-pills">
                {selectedService.techStack.map((tech, idx) => (
                  <span key={idx} className="modal-tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a href="#contact" onClick={handleScrollToContact} className="modal-cta-btn">
                <span>Request Project Spec</span>
                <ArrowRight size={16} />
              </a>
              <button className="modal-cancel-btn" onClick={handleCloseModal}>
                {t('services.closeModal')}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
