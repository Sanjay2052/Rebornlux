import React from 'react';
import defaultLogoImg from '../../assets/logo.png';
import './Logo.css';

/**
 * Logo Component
 * 
 * Easy Logo Replacement Instructions:
 * 1. Place your new logo image (PNG, SVG, or JPG) in `src/assets/logo.png`
 *    OR pass a custom image source via the `src` prop: <Logo src="/my-new-logo.svg" />
 * 2. Props supported:
 *    - size (number | string): Height of the logo (default: 50)
 *    - maxWidth (number | string): Max width of the logo (default: 220)
 *    - theme ('light' | 'dark' | 'transparent'): Styling variation for light/dark backgrounds
 *    - src (string): Custom image URL or imported asset
 */
export default function Logo({ 
  src,
  className = '', 
  size = 85, 
  maxWidth = 280,
  theme = 'light',
  alt = 'REBORNLUX Logo' 
}) {
  const logoSrc = src || defaultLogoImg;

  return (
    <div className={`rebornlux-logo-wrapper theme-${theme} ${className}`}>
      <img
        src={logoSrc}
        alt={alt}
        className="rebornlux-logo-img"
        style={{ 
          height: typeof size === 'number' ? `${size}px` : size, 
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth 
        }}
      />
    </div>
  );
}
