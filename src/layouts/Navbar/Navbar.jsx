import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.solutions'), href: '#solutions' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.industries'), href: '#industries' },
    { name: t('nav.ourPortfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="nav-brand" aria-label="Rebornlux Digital Home">
          <Logo size={48} theme="light" />
        </a>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Group: Language Switcher + Contact CTA */}
        <div className="nav-cta-desktop">
          <div className="lang-switcher-pill">
            <Globe size={14} className="lang-globe-icon" />
            <button 
              className={`lang-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`lang-option ${language === 'ar' ? 'active' : ''}`}
              onClick={() => setLanguage('ar')}
              aria-label="Switch to Arabic"
            >
              العربية
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="nav-btn-primary"
          >
            <span>{t('nav.getStarted')}</span>
          </a>
        </div>

        {/* Mobile Action Group */}
        <div className="nav-mobile-right">
          <div className="lang-switcher-pill mobile">
            <button 
              className={`lang-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`lang-option ${language === 'ar' ? 'active' : ''}`}
              onClick={() => setLanguage('ar')}
            >
              عربي
            </button>
          </div>
          
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <div className="nav-links-mobile">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="nav-link-mobile"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="nav-btn-primary-mobile"
          >
            <span>{t('nav.getStarted')}</span>
            <ArrowRight size={16} className="btn-arrow-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}
