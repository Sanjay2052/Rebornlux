import React, { useEffect } from 'react';
import Navbar from '../layouts/Navbar/Navbar';
import Footer from '../layouts/Footer/Footer';
import Hero from '../widgets/Hero/Hero';
import Services from '../pages/Services/Services';
import Stats from '../widgets/Stats/Stats';
import About from '../pages/About/About';
import TechStack from '../widgets/TechStack/TechStack';
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
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
