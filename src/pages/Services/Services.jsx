import React from 'react';
import { Smartphone, Cpu, Palette, Monitor } from 'lucide-react';
import './Services.css';

export default function Services() {
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

  const servicesList = [
    {
      id: 'flutter',
      title: 'Flutter App Development',
      desc: 'Build apps in Flutter for both Android and iOS.',
      icon: Smartphone,
      isHighlighted: false
    },
    {
      id: 'native',
      title: 'Native App Development',
      desc: 'Create efficient and powerful apps with high-value for users.',
      icon: Cpu,
      isHighlighted: true
    },
    {
      id: 'design',
      title: 'Design and User Experience',
      desc: 'Design clean and intuitive products according to the user\'s needs.',
      icon: Palette,
      isHighlighted: false
    },
    {
      id: 'maintenance',
      title: 'Maintenance and Monitoring',
      desc: 'Dynamic servers and 24 x 7 support ensures you never face a snag.',
      icon: Monitor,
      isHighlighted: false
    }
  ];

  return (
    <section id="services" className="services-section-wrapper">
      <div className="services-container">
        {/* Left: Section Header Text and Action Button */}
        <div className="services-left">
          <h2 className="services-heading">
            Website and Mobile App Development
          </h2>
          <p className="services-paragraph">
            Build the right brand with Rebornlux Technologies to deliver high-value products to users.
            With our experience marketing mass consumer products, we help you build your dream product
            at the lowest cost with the quickest market release.
          </p>
          <a
            href="#portfolio"
            onClick={(e) => handleScrollClick(e, '#portfolio')}
            className="btn-services-outline"
          >
            SERVICES
          </a>
        </div>

        {/* Right: Overlapping 2x2 Services Grid */}
        <div className="services-right">
          <div className="services-cards-grid">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`service-grid-card ${service.isHighlighted ? 'highlighted' : ''}`}
                >
                  <div className="service-card-icon-container">
                    <Icon size={26} className="service-card-icon" />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
