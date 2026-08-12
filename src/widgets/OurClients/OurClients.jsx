import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, Building2, Users, ShieldCheck, Award } from 'lucide-react';
import './OurClients.css';

export default function OurClients() {
  const { t } = useLanguage();

  const clientsList = [
    {
      name: 'BC Pension',
      category: 'Public Sector & Pension Funds',
      metrics: '3M+ Members Managed',
      description: 'Modernized core pension processing logic into a high-availability cloud architecture with automated compliance auditing.'
    },
    {
      name: 'Royal Roads University',
      category: 'Higher Education & EdTech',
      metrics: '50K+ Active Students',
      description: 'Built unified student portal, LMS integrations, and scalable cloud infrastructure for hybrid learning.'
    },
    {
      name: 'ACT Financial',
      category: 'FinTech & Capital Markets',
      metrics: '$2B+ Daily Transaction Vol',
      description: 'Engineered high-frequency trading APIs, real-time analytics engines, and sub-millisecond data feeds.'
    },
    {
      name: '51umat Manpower Supply',
      category: 'Workforce & Enterprise POS',
      metrics: '150K+ Workforce Roster',
      description: 'Custom workforce allocation platform, biometric attendance POS, and cross-border payroll system.'
    }
  ];

  return (
    <section id="clients" className="our-clients-section">
      <div className="our-clients-container">
        <div className="our-clients-header">
          <span className="our-clients-badge">PROVEN TRACK RECORD</span>
          <h2 className="our-clients-title">{t('clients.title')}</h2>
          <p className="our-clients-subtitle">{t('clients.subtitle')}</p>
        </div>

        {/* Client Logos Bar */}
        <div className="client-logos-grid">
          {clientsList.map((client, idx) => (
            <div key={idx} className="client-logo-pill">
              <Building2 size={20} className="client-pill-icon" />
              <span className="client-pill-name">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Success Stories Case Cards */}
        <div className="case-studies-grid">
          {clientsList.map((client, index) => (
            <div key={index} className="case-study-card">
              <div className="case-header">
                <span className="case-tag">{client.category}</span>
                <span className="case-metrics">{client.metrics}</span>
              </div>
              <h3 className="case-title">{client.name}</h3>
              <p className="case-desc">{client.description}</p>
              <div className="case-footer">
                <span className="case-link">
                  <span>{t('clients.viewCaseStudy')}</span>
                  <ExternalLink size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
