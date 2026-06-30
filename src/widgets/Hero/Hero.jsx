import React from 'react';
import './Hero.css';

export default function Hero() {
  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
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
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* Left: Headline, Description and Call to Action */}
        <div className="hero-content">
          <h1 className="hero-title">
            Web and Mobile App Development Company in Alapuzha, Kerala, India
          </h1>
          <p className="hero-desc">
            Rebornlux designs and develops mobile and web apps keeping in mind both user convenience and business growth. We work with individuals and organizations to create products and market them to their target audience.
          </p>
          
          <div className="hero-actions">
            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, '#contact')}
              className="btn-hero-quote"
            >
              GET FREE QUOTE
            </a>
          </div>
        </div>

        {/* Right: Trust Badges Grid */}
        <div className="hero-badges-container">
          <div className="badges-grid">
            {/* Badge 1: Top App Developers */}
            <div className="badge-item orange">
              <span className="badge-top">TOP APP</span>
              <span className="badge-mid">DEVELOPMENT</span>
              <span className="badge-bot">COMPANY</span>
            </div>

            {/* Badge 2: Clutch */}
            <div className="badge-item clutch">
              <span className="clutch-title">Clutch</span>
              <span className="stars">★★★★★</span>
              <span className="badge-bot">TOP DEVELOPER</span>
            </div>

            {/* Badge 3: Top Mobile App Development Agencies */}
            <div className="badge-item red">
              <span className="badge-top">TOP MOBILE APP</span>
              <span className="badge-mid">DEVELOPMENT</span>
              <span className="badge-bot">AGENCY</span>
            </div>

            {/* Badge 4: Kerala Startup Mission */}
            <div className="badge-item ksum">
              <div className="ksum-logo">
                <span className="ksum-k">K</span>
                <span className="ksum-s">S</span>
                <span className="ksum-u">U</span>
                <span className="ksum-m">M</span>
              </div>
              <span className="badge-bot">KERALA STARTUP MISSION</span>
            </div>

            {/* Badge 5: Clutch Web Developers */}
            <div className="badge-item clutch-blue">
              <span className="clutch-title">Clutch</span>
              <span className="stars">★★★★★</span>
              <span className="badge-bot">WEB DEVELOPERS 2026</span>
            </div>

            {/* Badge 6: Sortlist */}
            <div className="badge-item sortlist">
              <span className="sortlist-title">sortlist</span>
              <span className="stars">★★★★★</span>
              <span className="badge-bot">VERIFIED PARTNER</span>
            </div>

            {/* Badge 7: Bark */}
            <div className="badge-item bark">
              <span className="bark-title">bark</span>
              <span className="badge-bot">EXCELLENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
