import React, { useEffect } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../layouts/Navbar/Navbar';
import Footer from '../layouts/Footer/Footer';
import Hero from '../widgets/Hero/Hero';
import Solutions from '../pages/Solutions/Solutions';
import Services from '../pages/Services/Services';
import Industries from '../pages/Industries/Industries';
import SupportedTech from '../widgets/SupportedTech/SupportedTech';
import SuccessStories from '../widgets/SuccessStories/SuccessStories';
import PowerUpCTA from '../widgets/PowerUpCTA/PowerUpCTA';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

export default function AppRoutes() {
  // Section load fade-in effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <Industries />
        <SupportedTech />
        <SuccessStories />
        <About />
        <PowerUpCTA />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
