import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const savedLang = localStorage.getItem('rebornluxlang');
      return savedLang === 'ar' ? 'ar' : 'en';
    } catch (e) {
      return 'en';
    }
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const setLanguage = (lang) => {
    const validLang = lang === 'ar' ? 'ar' : 'en';
    setLanguageState(validLang);
    try {
      localStorage.setItem('rebornluxlang', validLang);
    } catch (e) {
      // Storage unavailable fallback
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
    try {
      localStorage.setItem('rebornluxlang', language);
    } catch (e) {
      // Ignore storage errors
    }
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  // Translation helper function t('nav.home')
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if translation key is missing
        let fallback = translations['en'];
        for (const k of keys) {
          if (fallback && fallback[k] !== undefined) {
            fallback = fallback[k];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
