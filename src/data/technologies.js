import { Layout, Server, Database, Smartphone, Cloud, Layers, Cpu } from 'lucide-react';

export const TECH_CATEGORIES = [
  { id: 'all', nameKey: 'techStack.categories.all', icon: Cpu },
  { id: 'frontend', nameKey: 'techStack.categories.frontend', icon: Layout },
  { id: 'backend', nameKey: 'techStack.categories.backend', icon: Server },
  { id: 'mobile', nameKey: 'techStack.categories.mobile', icon: Smartphone },
  { id: 'database', nameKey: 'techStack.categories.database', icon: Database },
  { id: 'cloud', nameKey: 'techStack.categories.cloud', icon: Cloud },
  { id: 'enterprise', nameKey: 'techStack.categories.enterprise', icon: Layers }
];

export const TECHNOLOGIES = [
  // Frontend
  { name: 'React.js', category: 'frontend', descKey: 'techStack.items.reactDesc', desc: 'Component-based UI library for modern web applications.' },
  { name: 'Next.js', category: 'frontend', descKey: 'techStack.items.nextDesc', desc: 'React framework for full-stack web applications.' },
  { name: 'Vue.js', category: 'frontend', descKey: 'techStack.items.vueDesc', desc: 'Progressive JavaScript framework for fast UI development.' },
  { name: 'HTML5 / CSS3 / JavaScript', category: 'frontend', descKey: 'techStack.items.htmlDesc', desc: 'Core web standards for modern web experiences.' },
  { name: 'Tailwind CSS', category: 'frontend', descKey: 'techStack.items.tailwindDesc', desc: 'Utility-first CSS framework for responsive interfaces.' },
  { name: 'TypeScript', category: 'frontend', descKey: 'techStack.items.typescriptDesc', desc: 'Strongly typed programming language built on JavaScript.' },

  // Backend
  { name: 'Node.js', category: 'backend', descKey: 'techStack.items.nodeDesc', desc: 'Event-driven runtime for scalable backend applications.' },
  { name: 'Express.js', category: 'backend', descKey: 'techStack.items.expressDesc', desc: 'Lightweight and flexible Node.js web framework.' },
  { name: 'Python', category: 'backend', descKey: 'techStack.items.pythonDesc', desc: 'Versatile programming language for APIs, automation, AI, and data systems.' },
  { name: 'Django', category: 'backend', descKey: 'techStack.items.djangoDesc', desc: 'Secure and scalable Python web framework.' },
  { name: 'FastAPI', category: 'backend', descKey: 'techStack.items.fastapiDesc', desc: 'High-performance framework for modern API development.' },

  // Mobile
  { name: 'Flutter', category: 'mobile', descKey: 'techStack.items.flutterDesc', desc: 'Cross-platform UI toolkit for mobile, web, and desktop applications.' },

  // Database
  { name: 'PostgreSQL', category: 'database', descKey: 'techStack.items.postgresDesc', desc: 'Advanced open-source relational database.' },
  { name: 'MongoDB', category: 'database', descKey: 'techStack.items.mongoDesc', desc: 'Flexible and scalable NoSQL document database.' },
  { name: 'MySQL', category: 'database', descKey: 'techStack.items.mysqlDesc', desc: 'Reliable relational database for business applications.' },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', descKey: 'techStack.items.awsDesc', desc: 'Cloud infrastructure and scalable application deployment.' },
  { name: 'Docker', category: 'cloud', descKey: 'techStack.items.dockerDesc', desc: 'Containerization platform for consistent development and deployment.' },
  { name: 'Nginx', category: 'cloud', descKey: 'techStack.items.nginxDesc', desc: 'High-performance web server and reverse proxy.' },
  { name: 'Git / GitHub', category: 'cloud', descKey: 'techStack.items.gitDesc', desc: 'Version control and collaborative software development.' },

  // Business & Enterprise
  { name: 'REST APIs', category: 'enterprise', descKey: 'techStack.items.restApiDesc', desc: 'Scalable API architecture for application and system integration.' },
  { name: 'Microservices', category: 'enterprise', descKey: 'techStack.items.microservicesDesc', desc: 'Modular architecture for independently scalable services.' },
  { name: 'Payment Gateway Integration', category: 'enterprise', descKey: 'techStack.items.paymentDesc', desc: 'Secure integration of online payment solutions.' },
  { name: 'ERP / CRM Integration', category: 'enterprise', descKey: 'techStack.items.erpCrmDesc', desc: 'Connected enterprise business and customer-management systems.' }
];
