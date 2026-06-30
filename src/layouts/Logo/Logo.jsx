import React from 'react';

export default function Logo({ className = '', showText = true, size = 36 }) {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#7f00ff" />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7f00ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.2" />
          </linearGradient>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Glowing Hexagon */}
        <path
          d="M 50,5 L 89,27.5 L 89,72.5 L 50,95 L 11,72.5 L 11,27.5 Z"
          fill="none"
          stroke="url(#glowGrad)"
          strokeWidth="6"
          filter="url(#logoGlow)"
          opacity="0.7"
        />

        {/* Outer Hexagon Border */}
        <path
          d="M 50,8 L 86,29 L 86,71 L 50,92 L 14,71 L 14,29 Z"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="3"
        />

        {/* Geometric stylized R + L */}
        <path
          d="M 38,30 L 58,30 C 66,30 68,36 68,40 C 68,44 64,48 56,48 L 38,48 Z"
          fill="url(#logoGrad)"
        />
        <path
          d="M 38,30 L 46,30 L 46,70 L 66,70 L 66,76 L 38,76 Z"
          fill="url(#logoGrad)"
        />
        <path
          d="M 50,48 L 64,72 L 54,72 L 42,50 Z"
          fill="url(#logoGrad)"
        />

        {/* Center glowing core */}
        <circle cx="50" cy="50" r="3" fill="#ffffff" filter="url(#logoGlow)" />
      </svg>
      {showText && (
        <span
          className="logo-text"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: `${size * 0.65}px`,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          Reborn<span className="logo-accent">lux</span>
        </span>
      )}
    </div>
  );
}
