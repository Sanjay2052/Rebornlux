import React from 'react';
import './Stats.css';

export default function Stats() {
  const statsList = [
    {
      value: '3',
      label: 'Office Locations'
    },
    {
      value: '250',
      label: 'Mobile & Web Apps Completed'
    },
    {
      value: '50',
      label: 'Experienced Developers'
    },
    {
      value: '200',
      label: 'Happy Clients'
    }
  ];

  return (
    <section className="stats-section-wrapper">
      <div className="stats-container">
        {statsList.map((stat, index) => (
          <div key={index} className="stat-grid-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
