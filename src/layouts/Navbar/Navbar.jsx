import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#why-choose-us' },
    { name: 'Dedicated Developers', href: '#techstack' },
    { name: 'Careers', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="nav-brand">
          <Logo size={32} />
        </a>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="nav-cta-desktop">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="nav-btn-primary"
          >
            <span>CONTACT</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <div className="nav-links-mobile">
          {navLinks.map((link) => (
            <a
              key={link.name}
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
            <span>Get Free Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
