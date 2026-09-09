import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Layers } from 'lucide-react';
import './ServicesOffered.css';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'I build responsive, accessible, and fast web applications using React, TypeScript, and clean CSS, focusing on intuitive UX and cross-browser consistency.',
    icon: Monitor,
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description:
      'I build reliable RESTful APIs and real-time WebSocket services with Node.js and Express, implementing secure authentication, data validation, and clean endpoint architecture.',
    icon: Server,
  },
  {
    id: 'database',
    title: 'Database Design',
    description:
      'I design and maintain relational (PostgreSQL) and document (MongoDB) database schemas, structuring Prisma ORM models and migrations for data consistency.',
    icon: Database,
  },
  {
    id: 'saas',
    title: 'SaaS Development',
    description:
      'I develop complete web applications from initial concept to deployment, connecting intuitive frontends to secure backends with smooth user flows.',
    icon: Layers,
  },
];

export const ServicesOffered: React.FC = () => {
  return (
    <section id="services" className="section-spacer" aria-labelledby="services-heading">
      <div className="app-container">
        
        {/* Section Header — Left-aligned, grounded */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Services</span>
          </div>
          <h2 id="services-heading" className="section-title">
            What I Bring to the Table
          </h2>
          <p className="section-description">
            I specialize in building complete web products from frontend interfaces to backend services and databases.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="service-card card-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              >
                <div className="service-icon-wrap" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
