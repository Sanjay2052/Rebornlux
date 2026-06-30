export const PROJECT_TYPES = [
  { id: 'saas', name: 'Premium SaaS App', basePrice: 15000, baseWeeks: 8, tech: ['React', 'NodeJS', 'PostgreSQL', 'Redis'] },
  { id: 'mobile', name: 'Mobile App (iOS/Android)', basePrice: 20000, baseWeeks: 10, tech: ['React Native', 'Firebase', 'GraphQL'] },
  { id: 'ai', name: 'AI & Data Integration', basePrice: 25000, baseWeeks: 12, tech: ['Python', 'TensorFlow', 'FastAPI', 'AWS SageMaker'] },
  { id: 'modernization', name: 'Legacy System Modernization', basePrice: 18000, baseWeeks: 9, tech: ['Docker', 'Kubernetes', 'Go', 'TypeScript'] },
  { id: 'enterprise', name: 'Enterprise Cloud System', basePrice: 30000, baseWeeks: 14, tech: ['AWS/Azure', 'Terraform', 'Java/Go', 'Postgres'] }
];

export const COMPLEXITY_LEVELS = [
  { level: 1, name: 'Standard (Clean & Functional)', multiplier: 1.0 },
  { level: 2, name: 'Advanced (Rich Animations & Interactive UI)', multiplier: 1.3 },
  { level: 3, name: 'Premium (Immersive, Tailored Aesthetics, Fully Custom)', multiplier: 1.6 }
];

export const FEATURE_OPTIONS = [
  { id: 'auth', name: 'Advanced Security & SSO', price: 2500, weeks: 1, desc: 'OAuth, MFA, Enterprise Single Sign-On' },
  { id: 'payment', name: 'Billing & Subscriptions', price: 3000, weeks: 1, desc: 'Stripe integration, invoices, multi-tier pricing' },
  { id: 'analytics', name: 'Real-time Analytics Dashboard', price: 4500, weeks: 2, desc: 'Interactive charts, custom filters, PDF exporting' },
  { id: 'ai_chat', name: 'AI Assistant & Automation', price: 7500, weeks: 3, desc: 'OpenAI LLM fine-tuning, natural language interactions' },
  { id: 'collaboration', name: 'Multi-user Collaboration', price: 4000, weeks: 2, desc: 'Real-time edits, websockets, document sharing' },
  { id: 'api', name: 'Third-party API Orchestration', price: 2000, weeks: 1, desc: 'CRM Sync (HubSpot, Salesforce), ERP hooks' }
];
