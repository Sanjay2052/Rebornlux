import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Code2, Cloud, Terminal, Cpu } from 'lucide-react';
import './Solutions.css';

export default function Solutions() {
  const { t } = useLanguage();

  const solutionItems = [
    {
      title: t('solutions.webDev'),
      desc: t('solutions.webDevDesc'),
      icon: <Code2 className="sol-icon" />
    },
    {
      title: t('solutions.cloudModernization'),
      desc: t('solutions.cloudDesc'),
      icon: <Cloud className="sol-icon" />
    },
    {
      title: t('solutions.posArchitectures'),
      desc: t('solutions.posDesc'),
      icon: <Terminal className="sol-icon" />
    },
    {
      title: t('solutions.aiIntegration'),
      desc: t('solutions.aiDesc'),
      icon: <Cpu className="sol-icon" />
    }
  ];

  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <span className="solutions-badge">{t('solutions.badge')}</span>
          <h2 className="solutions-title">{t('solutions.title')}</h2>
          <p className="solutions-subtitle">{t('solutions.subtitle')}</p>
        </div>

        <div className="solutions-grid">
          {solutionItems.map((item, idx) => (
            <div key={idx} className="solution-card">
              <div className="sol-icon-box">{item.icon}</div>
              <h3 className="sol-card-title">{item.title}</h3>
              <p className="sol-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
