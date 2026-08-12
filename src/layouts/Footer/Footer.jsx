import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <Logo size={85} theme="dark" />
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.companyCol')}</h4>
            <ul className="footer-links-list">
              <li><a href="#about" onClick={(e) => handleScrollClick(e, '#about')}>{t('nav.about')}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, '#services')}>{t('nav.services')}</a></li>
              <li><a href="#industries" onClick={(e) => handleScrollClick(e, '#industries')}>{t('nav.industries')}</a></li>
              <li><a href="#success-stories" onClick={(e) => handleScrollClick(e, '#success-stories')}>{t('nav.successStories')}</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, '#contact')}>{t('footer.links.careers')}</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, '#contact')}>{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.solutionsCol')}</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => handleScrollClick(e, '#services')}>{t('footer.links.webDev')}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, '#services')}>{t('footer.links.mobileDev')}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, '#services')}>{t('footer.links.customSoftware')}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, '#services')}>{t('footer.links.ecommerce')}</a></li>
              <li><a href="#services" onClick={(e) => handleScrollClick(e, '#services')}>{t('footer.links.dedicatedDevs')}</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('footer.resourcesCol')}</h4>
            <ul className="footer-links-list">
              <li><a href="#techstack" onClick={(e) => handleScrollClick(e, '#techstack')}>{t('footer.links.supportedTech')}</a></li>
              <li><a href="#success-stories" onClick={(e) => handleScrollClick(e, '#success-stories')}>{t('footer.links.caseStudies')}</a></li>
              <li><a href="#about" onClick={(e) => handleScrollClick(e, '#about')}>{t('footer.links.archSpecs')}</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, '#contact')}>{t('footer.links.faqs')}</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-col contact-newsletter-col">
            <h4 className="footer-col-title">{t('footer.contactCol')}</h4>
            
            <div className="footer-contact-info">
              <div className="footer-info-item">
                <Mail size={16} className="info-icon" />
                <a href="mailto:info@rebornlux.com" dir="ltr">info@rebornlux.com</a>
              </div>
              <div className="footer-info-item">
                <Phone size={16} className="info-icon" />
                <a href="tel:+17327435200" dir="ltr">+1 732-743-5200</a>
              </div>
              <div className="footer-info-item">
                <MapPin size={16} className="info-icon" />
                <span>{t('footer.location')}</span>
              </div>
            </div>

            <div className="footer-newsletter">
              <span className="newsletter-title">{t('footer.subscribe')}</span>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <Send size={14} />
                </button>
              </form>
              {subscribed && (
                <span className="subscribe-success">✓ Subscribed successfully!</span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © {new Date().getFullYear()} Rebornlux Digital. {t('footer.rights')}
          </span>
          <div className="footer-bottom-links">
            <a href="#privacy">{t('footer.privacy')}</a>
            <span className="bottom-link-divider">•</span>
            <a href="#terms">{t('footer.terms')}</a>
            <span className="bottom-link-divider">•</span>
            <a href="#cookies">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
