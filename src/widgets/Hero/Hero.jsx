import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Code2,
  Cpu,
  Cloud,
  Database,
  Layers,
  Smartphone,
  FileCode,
  Zap,
  Globe
} from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Interactive Particle Mesh Canvas with Light Theme Trajectory Response
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

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic particle nodes tailored for light theme
    const particleCount = 65;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        // Mouse interaction: soft push effect
        const distMouse = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
        if (distMouse < 120) {
          const angle = Math.atan2(p1.y - mouse.y, p1.x - mouse.x);
          const force = (120 - distMouse) / 120;
          p1.x += Math.cos(angle) * force * 1.5;
          p1.y += Math.sin(angle) * force * 1.5;

          // Connect to mouse with cyan-blue beam line
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 119, 182, ${0.45 * force})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 119, 182, ${p1.alpha})`;
        ctx.fill();

        // Connect node to nearby nodes
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 119, 182, ${0.25 * (1 - dist / 140)})`;
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
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
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

      {/* Decorative Light Theme Lighting Gradients */}
      <div className="hero-glow-orb hero-glow-1"></div>
      <div className="hero-glow-orb hero-glow-2"></div>

      <div className="hero-container">
        {/* Left Column: Headline & Messaging */}
        <div className="hero-content">
          <div className="hero-badges-wrapper">
            <div className="hero-badge">
              <Sparkles size={15} className="hero-badge-icon" />
              <span>{t('hero.badgeVerified')}</span>
            </div>

            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>{t('hero.liveBadge')}</span>
            </div>
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

          {/* Core Architecture Pillars */}
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

        {/* Right Column: Light Theme Quantum Holographic Matrix */}
        <div className="hero-visual-col">
          <div className="tech-3d-visual">
            <div className="glowing-core-glow"></div>

            {/* Quantum Core Emblem */}
            <div className="quantum-core">
              <div className="core-crystal">
                <Sparkles size={28} className="crystal-icon" />
              </div>
              <div className="laser-ring"></div>
            </div>

            {/* Multi-Axis Orbital Holographic Rings */}
            <div className="orbital-ring ring-1">
              <span className="orbit-node node-1"></span>
            </div>
            <div className="orbital-ring ring-2">
              <span className="orbit-node node-2"></span>
            </div>
            <div className="orbital-ring ring-3"></div>
            <div className="orbital-ring ring-4"></div>

            {/* Connecting Laser Beams Overlay SVG */}
            <svg className="tech-beam-svg" viewBox="0 0 440 440">
              <line x1="220" y1="220" x2="110" y2="55" className="laser-beam beam-python" />
              <line x1="220" y1="220" x2="70" y2="195" className="laser-beam beam-next" />
              <line x1="220" y1="220" x2="125" y2="345" className="laser-beam beam-cloud" />
              <line x1="220" y1="220" x2="220" y2="60" className="laser-beam beam-react" />
              <line x1="220" y1="220" x2="325" y2="127" className="laser-beam beam-node" />
              <line x1="220" y1="220" x2="330" y2="277" className="laser-beam beam-flutter" />
              <line x1="220" y1="220" x2="220" y2="380" className="laser-beam beam-mongo" />
            </svg>

            {/* Floating Light Theme Tech Stack Cards */}
            <div className="floating-tech-pill pill-python">
              <div className="pill-inner">
                <div className="pill-badge-icon icon-python"><FileCode size={15} /></div>
                <span>Python</span>
                <span className="pill-status-dot"></span>
              </div>
            </div>

            <div className="floating-tech-pill pill-next">
              <div className="pill-inner">
                <div className="pill-badge-icon icon-next"><Globe size={15} /></div>
                <span>Next.js</span>
                <span className="pill-status-dot"></span>
              </div>
            </div>

            <div className="floating-tech-pill pill-cloud">
              <div className="pill-inner">
                <div className="pill-badge-icon icon-cloud"><Cloud size={15} /></div>
                <span>AWS Cloud</span>
                <span className="pill-status-dot"></span>
              </div>
            </div>

            <div className="floating-tech-pill pill-react">
              <div className="pill-inner">
                <div className="pill-badge-icon icon-react"><Code2 size={15} /></div>
                <span>React</span>
                <span className="pill-status-dot"></span>
              </div>
            </div>

            <div className="floating-tech-pill pill-node">
              <div className="pill-inner">
                <div className="pill-badge-icon icon-node"><Layers size={15} /></div>
                <span>Node.js</span>
                <span className="pill-status-dot"></span>
              </div>
            </div>

            <div className="floating-tech-pill pill-flutter">
              <div className="pill-inner">
                <div className="pill-badge-icon icon-flutter"><Smartphone size={15} /></div>
                <span>Flutter</span>
                <span className="pill-status-dot"></span>
              </div>
            </div>

            <div className="floating-tech-pill pill-mongo">
              <div className="pill-inner">
                <div className="pill-badge-icon icon-mongo"><Database size={15} /></div>
                <span>MongoDB</span>
                <span className="pill-status-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <a href="#solutions" onClick={(e) => handleScrollClick(e, '#solutions')} aria-label="Scroll to explore">
          <span className="scroll-text">{t('hero.scrollIndicator')}</span>
          <ChevronDown size={20} className="bounce-arrow" />
        </a>
      </div>
    </section>
  );
}
