import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ChevronDown, Sparkles, Code2, Cpu, Cloud, Database, Layers, Smartphone } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const canvasRef = useRef(null);

  // Animated Technology Particle Mesh Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle nodes
    const particleCount = 50;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particle mesh connections
      for (let i = 0; i < particleCount; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 210, 254, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 119, 182, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 90;
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
      <canvas ref={canvasRef} className="hero-particle-canvas" />

      <div className="hero-container">
        {/* Left Column: Premium Text Messaging */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="hero-badge-icon" />
            <span>{t('hero.badgeVerified')}</span>
          </div>

          <h1 className="hero-title">
            {t('hero.titleMain')}<br />
            <span className="hero-gradient-text">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="hero-desc">
            {t('hero.subtitle')}
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, '#contact')}
              className="btn-hero-primary"
            >
              <span>{t('hero.primaryCta')}</span>
              <ArrowRight size={18} className="hero-btn-icon" />
            </a>

            <a
              href="#solutions"
              onClick={(e) => handleScrollClick(e, '#solutions')}
              className="btn-hero-secondary"
            >
              <span>{t('hero.secondaryCta')}</span>
            </a>
          </div>

          {/* Core Feature Highlights */}
          <div className="hero-pillars">
            <div className="pillar-item">
              <Code2 size={16} className="pillar-icon" />
              <span>{t('hero.pillars.engineering')}</span>
            </div>
            <div className="pillar-divider">•</div>
            <div className="pillar-item">
              <Cloud size={16} className="pillar-icon" />
              <span>{t('hero.pillars.cloud')}</span>
            </div>
            <div className="pillar-divider">•</div>
            <div className="pillar-item">
              <Cpu size={16} className="pillar-icon" />
              <span>{t('hero.pillars.ai')}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract 3D Digital / AI Technology Graphic with Floating Tech Labels */}
        <div className="hero-visual-col">
          <div className="tech-3d-visual">
            <div className="glowing-core"></div>
            <div className="orbital-ring ring-1"></div>
            <div className="orbital-ring ring-2"></div>
            <div className="orbital-ring ring-3"></div>

            {/* Small Floating Technology Labels */}
            <div className="floating-tech-pill pill-react">
              <Code2 size={14} />
              <span>React</span>
            </div>
            <div className="floating-tech-pill pill-node">
              <Layers size={14} />
              <span>Node.js</span>
            </div>
            <div className="floating-tech-pill pill-flutter">
              <Smartphone size={14} />
              <span>Flutter</span>
            </div>
            <div className="floating-tech-pill pill-mongo">
              <Database size={14} />
              <span>MongoDB</span>
            </div>
            <div className="floating-tech-pill pill-cloud">
              <Cloud size={14} />
              <span>Cloud</span>
            </div>
            <div className="floating-tech-pill pill-ai">
              <Cpu size={14} />
              <span>AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle "Scroll to explore ↓" indicator */}
      <div className="hero-scroll-indicator">
        <a href="#solutions" onClick={(e) => handleScrollClick(e, '#solutions')} aria-label="Scroll to explore">
          <span className="scroll-text">{t('hero.scrollIndicator')}</span>
          <ChevronDown size={20} className="bounce-arrow" />
        </a>
      </div>
    </section>
  );
}
