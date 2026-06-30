import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.css';

export default function Footer() {
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Logo size={28} />
            <p className="footer-tagline">
              Transforming Ideas Into Powerful Digital Solutions. We build hyper-resilient web apps, native mobile systems, and POS architectures.
            </p>
          </div>

          <div className="footer-links-col">
            <div className="footer-link-group">
              <span className="footer-group-title">Offerings</span>
              <ul className="footer-links-list">
                <li><a href="#services" onClick={(e) => handleScrollClick(e, '#services')}>Core Services</a></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <span className="footer-group-title">Company Info</span>
              <ul className="footer-links-list">
                <li><a href="#why-choose-us" onClick={(e) => handleScrollClick(e, '#why-choose-us')}>Why Us</a></li>
                <li><a href="#industries" onClick={(e) => handleScrollClick(e, '#industries')}>Industries Served</a></li>
                <li><a href="#contact" onClick={(e) => handleScrollClick(e, '#contact')}>Consultation</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} REBORNLUX. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Protocol</a>
            <a href="#terms">Service Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
