import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import './ContactForm.css';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: 'web',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setErrorMsg('Please populate all mandatory fields (Name, Email, and Project Details).');
      return;
    }
    
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate server call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">{t('contact.badge')}</span>
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-grid-container">
          {/* Left Side: Contact details */}
          <div className="contact-info-panel">
            <h3>{t('contact.panelTitle')}</h3>
            <p className="panel-desc">{t('contact.panelDesc')}</p>
            
            <div className="contact-channels">
              <div className="channel-card">
                <div className="channel-icon cyan">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">{t('contact.emailLabel')}</span>
                  <a href="mailto:info@rebornlux.com" className="channel-link" dir="ltr">info@rebornlux.com</a>
                </div>
              </div>

              <div className="channel-card">
                <div className="channel-icon purple">
                  <MessageSquare size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">{t('contact.chatLabel')}</span>
                  <span className="channel-link" dir="ltr">t.me/rebornlux_ops</span>
                </div>
              </div>
            </div>

            <div className="testimonial-snippet">
              <p className="quote">{t('contact.testimonial.quote')}</p>
              <span className="author">{t('contact.testimonial.author')}</span>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-panel">
            {isSuccess ? (
              <div className="success-state">
                <CheckCircle size={64} className="success-icon" />
                <h3>{t('contact.successTitle')}</h3>
                <p>{t('contact.successDesc')}</p>
                
                <button 
                  type="button" 
                  className="btn-success-reset"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      serviceRequired: 'web',
                      details: ''
                    });
                  }}
                >
                  {t('contact.resetBtn')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-form">
                {errorMsg && <div className="error-alert-banner">{errorMsg}</div>}

                <div className="form-group">
                  <label htmlFor="contact-name">{t('contact.nameLabel')}</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    placeholder={t('contact.placeholders.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row-double">
                  <div className="form-group">
                    <label htmlFor="contact-email">{t('contact.emailInputLabel')}</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      name="email" 
                      placeholder={t('contact.placeholders.email')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">{t('contact.phoneLabel')}</label>
                    <input 
                      type="text" 
                      id="contact-phone" 
                      name="phone" 
                      placeholder={t('contact.placeholders.phone')}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-double">
                  <div className="form-group">
                    <label htmlFor="contact-company">{t('contact.companyLabel')}</label>
                    <input 
                      type="text" 
                      id="contact-company" 
                      name="company" 
                      placeholder={t('contact.placeholders.company')}
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-service-type">{t('contact.serviceLabel')}</label>
                    <select 
                      id="contact-service-type" 
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                    >
                      {SERVICES.map(opt => (
                        <option key={opt.id} value={opt.id}>{t(opt.titleKey)}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-details">{t('contact.detailsLabel')}</label>
                  <textarea 
                    id="contact-details" 
                    name="details" 
                    rows="4"
                    placeholder={t('contact.placeholders.details')}
                    value={formData.details}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn-form-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>{t('contact.submittingText')}</span>
                  ) : (
                    <>
                      <span>{t('contact.submitBtn')}</span>
                      <Send size={16} className="submit-icon" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
