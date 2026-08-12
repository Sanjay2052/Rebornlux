import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Cpu, Layers, RefreshCw, Headphones } from 'lucide-react';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t('about.pillars.engineering'),
      desc: t('about.pillars.engineeringDesc'),
      icon: Cpu
    },
    {
      title: t('about.pillars.scalable'),
      desc: t('about.pillars.scalableDesc'),
      icon: Layers
    },
    {
      title: t('about.pillars.agile'),
      desc: t('about.pillars.agileDesc'),
      icon: RefreshCw
    },
    {
      title: t('about.pillars.support'),
      desc: t('about.pillars.supportDesc'),
      icon: Headphones
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-badge">{t('about.badge')}</span>
          <h2 className="about-title">{t('about.title')}</h2>
          <p className="about-subtitle">{t('about.subtitle')}</p>
        </div>

        {/* Narrative Split View */}
        <div className="about-narrative-grid">
          <div className="about-text-card">
            <h3>{t('about.narrativeTitle')}</h3>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>

          <div className="about-stats-card">
            <div className="stat-box">
              <span className="stat-number">+100</span>
              <span className="stat-label">{t('about.stats.deliveries')}</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">{t('about.stats.uptime')}</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">24/7</span>
              <span className="stat-label">{t('about.stats.monitoring')}</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  <Icon size={24} className="pillar-icon" />
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
