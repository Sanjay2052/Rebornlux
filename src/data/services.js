import {
  Globe,
  Smartphone,
  Code2,
  ShoppingBag,
  Palette,
  Cpu,
  Cloud,
  Zap,
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
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    features: ['Cross-platform Apps', 'Native Performance', 'Offline Data Sync']
  },
  {
    id: 'customSoftware',
    titleKey: 'services.items.customSoftware.title',
    descKey: 'services.items.customSoftware.desc',
    icon: Code2,
    techStack: ['Python', 'Node.js', 'PostgreSQL', 'Java'],
    features: ['Enterprise Business Logic', 'Microservices', 'Custom Internal Tools']
  },
  {
    id: 'ecommerce',
    titleKey: 'services.items.ecommerce.title',
    descKey: 'services.items.ecommerce.desc',
    icon: ShoppingBag,
    techStack: ['Next.js', 'Node.js', 'Stripe', 'MongoDB'],
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
    techStack: ['GraphQL', 'RESTful', 'gRPC', 'Express.js'],
    features: ['High-throughput Gateways', 'Secure Auth (OAuth2/JWT)', 'Sub-50ms Response']
  },
  {
    id: 'cloud',
    titleKey: 'services.items.cloud.title',
    descKey: 'services.items.cloud.desc',
    icon: Cloud,
    techStack: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    features: ['Container Orchestration', 'Automated CI/CD', 'Auto-scaling Clusters']
  },
  {
    id: 'automation',
    titleKey: 'services.items.automation.title',
    descKey: 'services.items.automation.desc',
    icon: Zap,
    techStack: ['Python', 'Camunda', 'RPA', 'Zapier/n8n'],
    features: ['Workflow Automation', 'ETL Data Pipelines', 'Process Optimization']
  },
  {
    id: 'dedicated',
    titleKey: 'services.items.dedicated.title',
    descKey: 'services.items.dedicated.desc',
    icon: Users,
    techStack: ['Full-stack Developers', 'Mobile Leads', 'DevOps Engineers'],
    features: ['Agile Team Extension', 'Direct Communication', 'Dedicated Project Managers']
  },
  {
    id: 'maintenance',
    titleKey: 'services.items.maintenance.title',
    descKey: 'services.items.maintenance.desc',
    icon: Wrench,
    techStack: ['Prometheus', 'Grafana', 'Sentry', 'CloudWatch'],
    features: ['24/7 Server Monitoring', 'Security Hotfixes', 'Guaranteed Uptime SLA']
  }
];
