import { Layout, Server, Database, Smartphone, Cloud, Cpu, Layers } from 'lucide-react';

export const TECH_CATEGORIES = [
  { id: 'all', nameKey: 'techStack.categories.all', icon: Cpu },
  { id: 'frontend', nameKey: 'techStack.categories.frontend', icon: Layout },
  { id: 'backend', nameKey: 'techStack.categories.backend', icon: Server },
  { id: 'mobile', nameKey: 'techStack.categories.mobile', icon: Smartphone },
  { id: 'database', nameKey: 'techStack.categories.database', icon: Database },
  { id: 'cloud', nameKey: 'techStack.categories.cloud', icon: Cloud },
  { id: 'ai', nameKey: 'techStack.categories.ai', icon: Cpu },
  { id: 'enterprise', nameKey: 'techStack.categories.enterprise', icon: Layers }
];

export const TECHNOLOGIES = [
  // Frontend
  { name: 'React.js', category: 'frontend', descKey: 'techStack.items.reactDesc', desc: 'Component-based UI library for modern web apps.' },
  { name: 'Next.js', category: 'frontend', descKey: 'techStack.items.nextDesc', desc: 'The React framework for full-stack web applications.' },
  { name: 'Vue.js', category: 'frontend', descKey: 'techStack.items.vueDesc', desc: 'Progressive JavaScript framework for fast UI development.' },
  { name: 'HTML5 / CSS3 / JS', category: 'frontend', descKey: 'techStack.items.htmlDesc', desc: 'Core web standards, semantic structures, and modern CSS styling.' },
  { name: 'Tailwind CSS', category: 'frontend', descKey: 'techStack.items.tailwindDesc', desc: 'Utility-first CSS framework for rapid responsive layouts.' },
  { name: 'TypeScript', category: 'frontend', descKey: 'techStack.items.typescriptDesc', desc: 'Strongly typed programming language built on JavaScript.' },

  // Backend
  { name: 'Node.js', category: 'backend', descKey: 'techStack.items.nodeDesc', desc: 'Event-driven, non-blocking asynchronous backend runtime.' },
  { name: 'Express.js', category: 'backend', descKey: 'techStack.items.expressDesc', desc: 'Fast, unopinionated, minimalist web framework for Node.js.' },
  { name: 'Python', category: 'backend', descKey: 'techStack.items.pythonDesc', desc: 'Versatile programming language for AI, data pipelines & web APIs.' },
  { name: 'Django', category: 'backend', descKey: 'techStack.items.djangoDesc', desc: 'High-level Python web framework for secure, scalable backends.' },
  { name: 'FastAPI', category: 'backend', descKey: 'techStack.items.fastapiDesc', desc: 'Modern, high-performance web framework for building APIs.' },

  // Mobile
  { name: 'Flutter', category: 'mobile', descKey: 'techStack.items.flutterDesc', desc: 'Cross-platform UI toolkit for mobile, web & desktop apps.' },
  { name: 'React Native', category: 'mobile', descKey: 'techStack.items.reactNativeDesc', desc: 'Native mobile app development using React.' },
  { name: 'Swift (iOS)', category: 'mobile', descKey: 'techStack.items.swiftDesc', desc: 'Powerful programming language for iOS and macOS apps.' },
  { name: 'Kotlin (Android)', category: 'mobile', descKey: 'techStack.items.kotlinDesc', desc: 'Modern programming language for Android development.' },

  // Database
  { name: 'PostgreSQL', category: 'database', descKey: 'techStack.items.postgresDesc', desc: 'Advanced open-source relational database engine.' },
  { name: 'MongoDB', category: 'database', descKey: 'techStack.items.mongoDesc', desc: 'Scalable NoSQL document database for modern applications.' },
  { name: 'Redis', category: 'database', descKey: 'techStack.items.redisDesc', desc: 'In-memory data structure store used as database, cache & broker.' },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', descKey: 'techStack.items.awsDesc', desc: 'Comprehensive cloud computing platform & infrastructure.' },
  { name: 'Microsoft Azure', category: 'cloud', descKey: 'techStack.items.azureDesc', desc: 'Enterprise cloud platform for computing, analytics & networking.' },
  { name: 'Google Cloud', category: 'cloud', descKey: 'techStack.items.gcpDesc', desc: 'Google Cloud suite of cloud computing services.' },
  { name: 'Docker', category: 'cloud', descKey: 'techStack.items.dockerDesc', desc: 'OS-level virtualization platform for shipping software.' },
  { name: 'Kubernetes', category: 'cloud', descKey: 'techStack.items.k8sDesc', desc: 'Automated container deployment, scaling, and management.' },

  // AI / Automation
  { name: 'LangChain / LLM', category: 'ai', descKey: 'techStack.items.langchainDesc', desc: 'Framework for developing applications powered by language models.' },
  { name: 'Camunda Workflow', category: 'ai', descKey: 'techStack.items.camundaDesc', desc: 'Process orchestration and workflow automation engine.' },
  { name: 'PyTorch / TensorFlow', category: 'ai', descKey: 'techStack.items.pytorchDesc', desc: 'Open-source machine learning framework for deep learning.' },

  // Enterprise
  { name: 'SAP Integration', category: 'enterprise', descKey: 'techStack.items.sapDesc', desc: 'Enterprise resource planning and business software solutions.' },
  { name: 'Salesforce APIs', category: 'enterprise', descKey: 'techStack.items.salesforceDesc', desc: 'Customer relationship management and enterprise platform.' }
];
