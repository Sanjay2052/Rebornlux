import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import './ContactForm.css';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwSryZx760ZSPGKakO_3ciovwR8-AvPBNc9fru2ToeyOApH9NhowNoU1PWt2FYfNAE8JA/exec';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  serviceRequired: 'web',
  details: ''
};


// ---- Fast, non-blocking submit (same approach as CompanyForm) ----
// The request is sent in the background with keepalive, so the UI never waits for Google.
// With 'no-cors' the browser cannot read the reply, but it DOES report network failures.
// If the request fails to send, the enquiry is kept in localStorage and retried automatically.
const PENDING_KEY = 'contactPendingEnquiries';

const postEnquiry = (payload) =>
  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // "simple" type: no preflight = faster
    body: JSON.stringify(payload),
  });

const readPending = () => {
  try {
    return JSON.parse(localStorage.getItem(PENDING_KEY) || '[]');
  } catch {
    return [];
  }
};

const writePending = (list) => {
  try {
    localStorage.setItem(PENDING_KEY, JSON.stringify(list));
  } catch {
    /* storage unavailable: nothing more we can do */
  }
};

const sendInBackground = (payload) => {
  postEnquiry(payload).catch(() => {
    writePending([...readPending(), payload]);
  });
};

const flushPending = async () => {
  const pending = readPending();
  if (!pending.length) return;
  const stillPending = [];
  for (const item of pending) {
    try {
      await postEnquiry(item);
    } catch {
      stillPending.push(item);
    }
  }
  writePending(stillPending);
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(INITIAL_FORM);

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Retry anything that failed to send earlier (e.g. user was offline)
  useEffect(() => {
    flushPending();
    window.addEventListener('online', flushPending);
    return () => window.removeEventListener('online', flushPending);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required: name, email, phone, service. Optional: company, project details
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.serviceRequired
    ) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setErrorMsg('');

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      serviceRequired: formData.serviceRequired,
      details: formData.details.trim(),
    };

    // Fire and forget: show success instantly, save in the background
    sendInBackground(payload);
    setIsSuccess(true);
    setFormData(INITIAL_FORM);
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
                    setFormData(INITIAL_FORM);
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
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder={t('contact.placeholders.phone')}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row-double">
                  <div className="form-group">
                    <label htmlFor="contact-company">{t('contact.companyLabel')}</label>
                    {/* Optional: no "required" */}
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
                      required
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
                  ></textarea>
                </div>

                <button type="submit" className="btn-form-submit">
                  <span>{t('contact.submitBtn')}</span>
                  <Send size={16} className="submit-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}