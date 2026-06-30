import { Layout, Smartphone, Store, ShoppingBag, Users, Cpu, Wrench } from 'lucide-react';

export const SERVICES = [
  {
    id: 'web',
    title: 'Web Application Development',
    desc: 'Build scalable, secure, and high-performance web applications tailored to business needs.',
    icon: Layout
  },
  {
    id: 'mobile',
    title: 'Mobile Application Development',
    desc: 'Native and cross-platform Android & iOS applications with modern, fluid UI/UX design.',
    icon: Smartphone
  },
  {
    id: 'pos',
    title: 'POS Software Development',
    desc: 'Custom Point of Sale solutions for Retail, Supermarkets, Restaurants, Cafes, Pharmacies, Wholesale, and Multi-Branch Operations.',
    icon: Store,
    features: [
      'Billing & Barcode Scan',
      'Inventory & CRM Reports'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    desc: 'Online stores with secure payment gateway integration, invoicing, and real-time inventory management.',
    icon: ShoppingBag
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    desc: 'Creating modern, beautiful, and intuitive user experiences for web platforms and mobile apps.',
    icon: Users
  },
  {
    id: 'api',
    title: 'API Development & Integration',
    desc: 'Engineering custom APIs and integrating third-party systems seamlessly into your pipeline.',
    icon: Cpu
  },
  {
    id: 'maintenance',
    title: 'Software Maintenance & Support',
    desc: 'Continuous monitoring, hot reloading updates, performance audits, and active technical support.',
    icon: Wrench
  }
];
