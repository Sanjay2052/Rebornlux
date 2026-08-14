import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  Truck,
  Plane,
  Building2,
  Factory
} from 'lucide-react';
import './Industries.css';

export default function Industries() {
  const { t } = useLanguage();

  const industryList = [
    {
      id: 'ecommerce',
      key: 'industries.items.ecommerce',
      descKey: 'industries.descs.ecommerceDesc',
      icon: ShoppingBag
    },
    {
      id: 'healthcare',
      key: 'industries.items.healthcare',
      descKey: 'industries.descs.healthcareDesc',
      icon: HeartPulse
    },
    {
      id: 'education',
      key: 'industries.items.education',
      descKey: 'industries.descs.educationDesc',
      icon: GraduationCap
    },
    {
      id: 'finance',
      key: 'industries.items.finance',
      descKey: 'industries.descs.financeDesc',
      icon: Landmark
    },
    {
      id: 'logistics',
      key: 'industries.items.logistics',
      descKey: 'industries.descs.logisticsDesc',
      icon: Truck
    },
    {
      id: 'travel',
      key: 'industries.items.travel',
      descKey: 'industries.descs.travelDesc',
      icon: Plane
    },
    {
      id: 'realestate',
      key: 'industries.items.realestate',
      descKey: 'industries.descs.realestateDesc',
      icon: Building2
    },
    {
      id: 'manufacturing',
      key: 'industries.items.manufacturing',
      descKey: 'industries.descs.manufacturingDesc',
      icon: Factory
    }
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="industries-container">
        <div className="industries-header">
          <span className="industries-badge">{t('industries.badge')}</span>
          <h2 className="industries-title">{t('industries.title')}</h2>
          <p className="industries-subtitle">{t('industries.subtitle')}</p>
        </div>

        <div className="industries-grid">
          {industryList.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.id} className="industry-card">
                <div className="ind-icon-box">
                  <Icon size={24} className="ind-icon" />
                </div>
                <h3 className="ind-card-title">{t(ind.key)}</h3>
                <p className="ind-card-desc">{t(ind.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
