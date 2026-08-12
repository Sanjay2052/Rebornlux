import {
  Globe,
  Smartphone,
  Code2,
  ShoppingBag,
  Palette,
  Cpu,
  Cloud,
  Users,
  Wrench
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'web',
    titleKey: 'services.items.web.title',
    descKey: 'services.items.web.desc',
    icon: Globe,
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    features: ['Single Page Applications', 'Server-side Rendering', 'Responsive Layouts']
  },
  {
    id: 'mobile',
    titleKey: 'services.items.mobile.title',
    descKey: 'services.items.mobile.desc',
    icon: Smartphone,
    techStack: ['Flutter', 'Dart'],
    features: ['Cross-platform Apps', 'Native Performance', 'Offline Data Sync']
  },
  {
    id: 'customSoftware',
    titleKey: 'services.items.customSoftware.title',
    descKey: 'services.items.customSoftware.desc',
    icon: Code2,
    techStack: ['Python', 'Node.js', 'PostgreSQL'],
    features: ['Enterprise Business Logic', 'Microservices', 'Custom Internal Tools']
  },
  {
    id: 'ecommerce',
    titleKey: 'services.items.ecommerce.title',
    descKey: 'services.items.ecommerce.desc',
    icon: ShoppingBag,
    techStack: ['Next.js', 'Node.js', 'MongoDB'],
    features: ['Multi-Vendor Storefronts', 'Payment Gateways', 'Inventory Ledgers']
  },
  {
    id: 'uiux',
    titleKey: 'services.items.uiux.title',
    descKey: 'services.items.uiux.desc',
    icon: Palette,
    techStack: ['Figma', 'Design Systems', 'Micro-animations', 'Prototyping'],
    features: ['User Journey Mapping', 'Design Systems', 'Interactive Prototypes']
  },
  {
    id: 'api',
    titleKey: 'services.items.api.title',
    descKey: 'services.items.api.desc',
    icon: Cpu,
    techStack: ['GraphQL', 'RESTful', 'Express.js'],
    features: ['High-throughput Gateways', 'Secure Auth (OAuth2/JWT)', 'Sub-50ms Response']
  },
  {
    id: 'cloud',
    titleKey: 'services.items.cloud.title',
    descKey: 'services.items.cloud.desc',
    icon: Cloud,
    techStack: ['AWS', 'Docker', 'Nginx'],
    features: ['Container Orchestration', 'Automated CI/CD', 'Auto-scaling Clusters']
  },
  {
    id: 'dedicated',
    titleKey: 'services.items.dedicated.title',
    descKey: 'services.items.dedicated.desc',
    icon: Users,
    techStack: ['Full-stack Developers', 'Mobile Leads'],
    features: ['Agile Team Extension', 'Direct Communication', 'Dedicated Project Managers']
  },
  {
    id: 'maintenance',
    titleKey: 'services.items.maintenance.title',
    descKey: 'services.items.maintenance.desc',
    icon: Wrench,
    techStack: ['24/7 Monitoring', 'Security Patches', 'SLA Support'],
    features: ['24/7 Server Monitoring', 'Security Hotfixes', 'Guaranteed Uptime SLA']
  }
];
