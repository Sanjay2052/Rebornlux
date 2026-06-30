import React from 'react';
import Hero from '../../widgets/Hero/Hero';
import PosShowcase from '../../widgets/PosShowcase/PosShowcase';
import TechStack from '../../widgets/TechStack/TechStack';
import Portfolio from '../../widgets/Portfolio/Portfolio';
import './Home.css';

export default function Home() {
  return (
    <>
      <Hero />
      <PosShowcase />
      <TechStack />
      <Portfolio />
    </>
  );
}
