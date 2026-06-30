export const FEATURED_CASES = [
  {
    id: 'retail-pos',
    title: 'Enterprise Retail POS Overhaul',
    tag: 'POS Software',
    description: 'Reengineered a multi-store supermarket billing database, replacing local syncing delays with cloud-synchronized real-time transaction processing.',
    metricName: 'Checkout Transaction Latency',
    beforeVal: '5.2s',
    afterVal: '0.1s',
    beforeDesc: 'Heavy relational lock delays, barcode parsing bottlenecks.',
    afterDesc: 'Indexed memory tables, edge API gateways, optimized scanner buffering.',
    benefits: ['98% Latency Reduction', 'Zero Offline Data Leaks', 'Multi-Store Automatic Sync'],
    color: '#00f2fe'
  },
  {
    id: 'restaurant-pos',
    title: 'Cafe & Restaurant Ticket Routing',
    tag: 'POS Software',
    description: 'Built a web-based kitchen display systems directly integrated with tableside Android order terminals, resolving transaction losses.',
    metricName: 'Kitchen Order Triage Delay',
    beforeVal: '14 mins',
    afterVal: '45 secs',
    beforeDesc: 'Manual paper receipt hand-offs, missing modifiers, slow prints.',
    afterDesc: 'Instant WebSocket state broadsheets, automatic table bill mapping.',
    benefits: ['94% Triaging Acceleration', '80% Reduction in Order Mistakes'],
    color: '#a78bfa'
  }
];

export const ALL_PROJECTS = [
  { name: 'Retail POS System', tag: 'POS Software', tech: ['React.js', 'PostgreSQL', 'Node.js'], desc: 'Multi-branch point of sale system with barcode scanning, billing, and cloud synchronization.', type: 'pos' },
  { name: 'Restaurant POS System', tag: 'POS Software', tech: ['React.js', 'MySQL', 'Node.js'], desc: 'Tableside mobile ordering, kitchen display sync, and table reservation management.', type: 'pos' },
  { name: 'E-Commerce Platform', tag: 'Web App', tech: ['Next.js', 'MongoDB', 'Express.js'], desc: 'Complete online store with Stripe payment integrations, dynamic catalogs, and invoicing.', type: 'web' },
  { name: 'Food Delivery Application', tag: 'Mobile App', tech: ['React Native', 'Node.js', 'MongoDB'], desc: 'Cross-platform customer iOS/Android applications with real-time GPS tracking map hooks.', type: 'mobile' },
  { name: 'School Management System', tag: 'Enterprise', tech: ['Angular', 'PostgreSQL', 'Express.js'], desc: 'Central portal managing student registry, employee tracking, billing, and report cards.', type: 'enterprise' },
  { name: 'ERP Dashboard', tag: 'Enterprise', tech: ['React.js', 'MongoDB', 'Python'], desc: 'Corporate portal orchestrating margins tracker, HR operations, and inventory supply chains.', type: 'enterprise' },
  { name: 'Inventory Management System', tag: 'Enterprise', tech: ['Next.js', 'PostgreSQL', 'Node.js'], desc: 'Real-time stock ledger, automated warning signals, and barcode scanning logs.', type: 'enterprise' },
  { name: 'Healthcare Management System', tag: 'Enterprise', tech: ['Angular', 'MongoDB', 'Python'], desc: 'Secure HIPAA-compliant patient charting portal with digital appointment bookers.', type: 'enterprise' }
];
