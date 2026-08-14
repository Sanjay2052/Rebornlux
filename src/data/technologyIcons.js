import React from 'react';

export const TECH_ICONS = {
  'React.js': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('ellipse', { cx: '12', cy: '12', rx: '9', ry: '3.5', stroke: '#61DAFB', strokeWidth: '1.5', transform: 'rotate(0 12 12)' }),
    React.createElement('ellipse', { cx: '12', cy: '12', rx: '9', ry: '3.5', stroke: '#61DAFB', strokeWidth: '1.5', transform: 'rotate(60 12 12)' }),
    React.createElement('ellipse', { cx: '12', cy: '12', rx: '9', ry: '3.5', stroke: '#61DAFB', strokeWidth: '1.5', transform: 'rotate(120 12 12)' }),
    React.createElement('circle', { cx: '12', cy: '12', r: '2', fill: '#61DAFB' })
  ),
  'Next.js': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('circle', { cx: '12', cy: '12', r: '10', fill: '#000000' }),
    React.createElement('path', { d: 'M7 16V8L16.5 16H17V8', stroke: '#FFFFFF', strokeWidth: '1.5', strokeLinecap: 'round' })
  ),
  'Vue.js': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M2 3H6L12 13L18 3H22L12 21L2 3Z', fill: '#41B883' }),
    React.createElement('path', { d: 'M6 3H10L12 6.5L14 3H18L12 13.5L6 3Z', fill: '#35495E' })
  ),
  'HTML5 / CSS3 / JavaScript': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M3 3L5 19L12 21L19 19L21 3H3Z', fill: '#E34F26' }),
    React.createElement('path', { d: 'M12 5V19.2L17.4 17.7L18.9 5H12Z', fill: '#EF652A' }),
    React.createElement('path', { d: 'M7.5 8H16.5L16.2 10.5H10.5L10.8 13H16L15.5 16.5L12 17.5L8.5 16.5L8.3 14H6.5L6.9 18.5L12 20L17.1 18.5L17.8 8H7.5Z', fill: '#FFFFFF' })
  ),
  'Tailwind CSS': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M12 6C9.333 6 7.667 7.333 7 10C8 8.667 9.333 8.333 11 9C11.953 9.381 12.634 10.073 13.384 10.834C14.607 12.076 16.01 13.5 20 13.5C22.667 13.5 24.333 12.167 25 9.5C24 10.833 22.667 11.167 21 10.5C20.047 10.119 19.366 9.427 18.616 8.666C17.393 7.424 15.99 6 12 6ZM7 13.5C4.333 13.5 2.667 14.833 2 17.5C3 16.167 4.333 15.833 6 16.5C6.953 16.881 7.634 17.573 8.384 18.334C9.607 19.576 11.01 21 15 21C17.667 21 19.333 19.667 20 17C19 18.333 17.667 18.667 16 18C15.047 17.619 14.366 16.927 13.616 16.166C12.393 14.924 10.99 13.5 7 13.5Z', fill: '#38BDF8' })
  ),
  'TypeScript': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('rect', { width: '24', height: '24', rx: '4', fill: '#3178C6' }),
    React.createElement('path', { d: 'M11.5 10.5H6.5V12.5H8.25V18.5H9.75V12.5H11.5V10.5Z', fill: '#FFFFFF' }),
    React.createElement('path', { d: 'M16.8 12.3C16 11.8 14.8 11.6 14 12.1C13.5 12.4 13.2 13 13.5 13.6C13.8 14.3 14.7 14.6 15.4 14.9C16.4 15.3 17.5 15.7 17.5 16.9C17.5 18 16.5 18.8 15.3 18.8C14.2 18.8 13.1 18.2 12.5 17.4L13.6 16.2C14 16.7 14.6 17.2 15.3 17.2C15.8 17.2 16.2 16.9 16.2 16.4C16.2 15.9 15.4 15.6 14.7 15.3C13.7 14.9 12.3 14.3 12.3 13C12.3 11.6 13.7 10.5 15.3 10.5C16.4 10.5 17.3 10.9 18 11.6L16.8 12.3Z', fill: '#FFFFFF' })
  ),
  'Node.js': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M12 2L2 7.5V16.5L12 22L22 16.5V7.5L12 2Z', fill: '#339933' }),
    React.createElement('circle', { cx: '12', cy: '12', r: '3', fill: '#FFFFFF' })
  ),
  'Express.js': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('circle', { cx: '12', cy: '12', r: '10', fill: '#18181B' }),
    React.createElement('text', { x: '5', y: '16', fontFamily: 'Inter, sans-serif', fontSize: '11', fontWeight: '800', fill: '#FFFFFF' }, 'ex')
  ),
  'Python': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M11.9 2C6.9 2 7.1 4.2 7.1 4.2V6.4H12.1V7.1H5.2C5.2 5.2 2 8.4 2 12.2C2 16 4.4 16.1 4.4 16.1H6.1V14.1C6.1 11.7 8.2 11.7 8.2 11.7H13.1C13.1 11.7 15.2 11.6 15.2 9.4V4.4C15.2 4.4 15.4 2 11.9 2Z', fill: '#3776AB' }),
    React.createElement('path', { d: 'M12.1 22C17.1 22 16.9 19.8 16.9 19.8V17.6H11.9V16.9H18.8C18.8 18.8 22 15.6 22 11.8C22 8 19.6 7.9 19.6 7.9H17.9V9.9C17.9 12.3 15.8 12.3 15.8 12.3H10.9C10.9 12.3 8.8 12.4 8.8 14.6V19.6C8.8 19.6 8.6 22 12.1 22Z', fill: '#FFD43B' })
  ),
  'Django': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('rect', { width: '24', height: '24', rx: '4', fill: '#092E20' }),
    React.createElement('text', { x: '5', y: '17', fontFamily: 'serif', fontSize: '15', fontWeight: '900', fill: '#44B78B' }, 'dj')
  ),
  'FastAPI': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('circle', { cx: '12', cy: '12', r: '10', fill: '#059669' }),
    React.createElement('path', { d: 'M13 3L5 14H12L11 21L19 10H12L13 3Z', fill: '#FFFFFF' })
  ),
  'Flutter': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M13.5 2L4 11.5L7.5 15L17 5.5L13.5 2Z', fill: '#47C5FB' }),
    React.createElement('path', { d: 'M12 13L8.5 16.5L12 20L15.5 16.5L12 13Z', fill: '#02569B' })
  ),
  'PostgreSQL': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('circle', { cx: '12', cy: '12', r: '10', fill: '#336791' }),
    React.createElement('circle', { cx: '12', cy: '12', r: '5', fill: '#FFFFFF', opacity: '0.4' })
  ),
  'MongoDB': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M12 2C12 2 6 7 6 13C6 17 8.5 20 12 22C15.5 20 18 17 18 13C18 7 12 2 12 2Z', fill: '#47A248' })
  ),
  'MySQL': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('rect', { width: '24', height: '24', rx: '4', fill: '#00758F' }),
    React.createElement('path', { d: 'M6 16C8 12 11 10 14 10C16 10 18 11.5 18 14', stroke: '#F29111', strokeWidth: '2', strokeLinecap: 'round', fill: 'none' })
  ),
  'AWS': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('rect', { width: '24', height: '24', rx: '4', fill: '#232F3E' }),
    React.createElement('path', { d: 'M5 16C8 18 16 18 19 15', stroke: '#FF9900', strokeWidth: '1.8', strokeLinecap: 'round', fill: 'none' })
  ),
  'Docker': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M2 13C2 17 5 20 11 20C17 20 21 16 22 13C22 13 20.5 12 18 13C17 12 15 12 14 13C12.5 11 9 11 8 13C6.5 12 4.5 12 3 13H2Z', fill: '#2496ED' })
  ),
  'Nginx': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('rect', { width: '24', height: '24', rx: '4', fill: '#009639' }),
    React.createElement('path', { d: 'M7 17V7L17 17V7', stroke: '#FFFFFF', strokeWidth: '2', strokeLinecap: 'round', fill: 'none' })
  ),
  'Git / GitHub': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('circle', { cx: '12', cy: '12', r: '10', fill: '#F05032' }),
    React.createElement('circle', { cx: '12', cy: '12', r: '4', fill: '#FFFFFF' })
  ),
  'REST APIs': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('circle', { cx: '12', cy: '12', r: '10', fill: '#0077B6' }),
    React.createElement('path', { d: 'M7 12H17M12 7V17', stroke: '#FFFFFF', strokeWidth: '2', strokeLinecap: 'round' })
  ),
  'Microservices': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('rect', { width: '24', height: '24', rx: '4', fill: '#03045E' }),
    React.createElement('rect', { x: '4', y: '4', width: '6', height: '6', rx: '2', fill: '#00D2FE' }),
    React.createElement('rect', { x: '14', y: '14', width: '6', height: '6', rx: '2', fill: '#38BDF8' })
  ),
  'Payment Gateway Integration': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('rect', { x: '2', y: '5', width: '20', height: '14', rx: '3', fill: '#16A34A' }),
    React.createElement('rect', { x: '2', y: '9', width: '20', height: '3', fill: '#14532D' })
  ),
  'ERP / CRM Integration': React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('circle', { cx: '12', cy: '12', r: '10', fill: '#7C3AED' }),
    React.createElement('path', { d: 'M12 6V18M6 12H18', stroke: '#FFFFFF', strokeWidth: '2', strokeLinecap: 'round' })
  )
};
