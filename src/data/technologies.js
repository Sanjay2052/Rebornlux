import { Layout, Server, Database, Smartphone, Cloud, Cpu } from 'lucide-react';

export const CATEGORIES = [
  { id: 'all', name: 'All Stack', icon: Cpu },
  { id: 'frontend', name: 'Frontend', icon: Layout },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'database', name: 'Database', icon: Database },
  { id: 'mobile', name: 'Mobile', icon: Smartphone },
  { id: 'cloud', name: 'Cloud', icon: Cloud }
];

export const TECHNOLOGIES = [
  { name: 'React.js', category: 'frontend', rating: 98, desc: 'Responsive, component-driven user interfaces and SPAs.' },
  { name: 'Next.js', category: 'frontend', rating: 95, desc: 'Server-side rendering, routing, and high-performance SEO apps.' },
  { name: 'Angular', category: 'frontend', rating: 90, desc: 'Robust enterprise-level web platform architectures.' },

  { name: 'Node.js', category: 'backend', rating: 94, desc: 'Asynchronous event-driven backend systems.' },
  { name: 'Express.js', category: 'backend', rating: 92, desc: 'Minimalist, fast web framework for Node API builds.' },
  { name: 'Python', category: 'backend', rating: 95, desc: 'Data processing, scripting, and machine learning models.' },

  { name: 'MongoDB', category: 'database', rating: 91, desc: 'Flexible NoSQL document database for rapid scale.' },
  { name: 'PostgreSQL', category: 'database', rating: 96, desc: 'Powerful open source relational database system.' },
  { name: 'MySQL', category: 'database', rating: 93, desc: 'Proven relational SQL storage for transaction consistency.' },

  { name: 'Flutter', category: 'mobile', rating: 93, desc: 'Google-backed framework for native mobile compile builds.' },
  { name: 'React Native', category: 'mobile', rating: 95, desc: 'Cross-platform native iOS & Android applications.' },

  { name: 'AWS', category: 'cloud', rating: 95, desc: 'Robust, globally distributed secure computing environments.' },
  { name: 'Azure', category: 'cloud', rating: 91, desc: 'Microsoft enterprise cloud integrations.' },
  { name: 'Google Cloud', category: 'cloud', rating: 92, desc: 'Advanced analytics and hosting container structures.' }
];
