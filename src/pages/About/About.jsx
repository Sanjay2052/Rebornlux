import React from 'react';
import { INDUSTRIES, WHY_CHOOSE_US } from '../../data/about';
import './About.css';

export default function About() {
  return (
    <>
      {/* --- Why Choose Us Section --- */}
      <section id="why-choose-us" className="why-section">
        <div className="section-header">
          <span className="badge">Our Standards</span>
          <h2>Why Choose Rebornlux</h2>
          <p className="subtitle">We combine experienced design practices with mathematical code logic to build safer, faster software.</p>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.name} className="why-card glass-card">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Industries Section --- */}
      <section id="industries" className="industries-section">
        <div className="section-header">
          <span className="badge">Market Reach</span>
          <h2>Industries We Serve</h2>
          <p className="subtitle">We deploy custom-tailored software systems that solve operational problems across multiple sectors.</p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.name} className="industry-card glass-card">
                <div className="industry-icon-box">
                  <Icon size={22} />
                </div>
                <h3>{ind.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
