import React from 'react';
import { motion } from 'framer-motion';
import './CoreTechnologies.css';

interface TechItem {
  name: string;
  category: string;
  brandColor: string;
  brandGlow: string;
  brandBg: string;
  svgPath: React.ReactNode;
}

const TECHNOLOGIES: TechItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    brandColor: '#61DAFB',
    brandGlow: 'rgba(97, 218, 251, 0.45)',
    brandBg: 'rgba(97, 218, 251, 0.08)',
    svgPath: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Language',
    brandColor: '#3178C6',
    brandGlow: 'rgba(49, 120, 198, 0.45)',
    brandBg: 'rgba(49, 120, 198, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm11.758 11.238h2.373v9.098c0 1.343.342 2.378 1.026 3.106.684.728 1.636 1.092 2.856 1.092 1.12 0 2.054-.34 2.802-1.02a4.417 4.417 0 0 0 1.12-2.905h-2.31c-.047.625-.224 1.078-.53 1.36-.307.28-.756.422-1.347.422-.64 0-1.11-.18-1.41-.54-.3-.36-.45-.914-.45-1.664v-8.949h2.373V9.176h-6.503v2.062zm-7.618 2.062h3.04v7.036H5.265v-7.036zm-1.03-3.124h5.102V8.114H4.235v2.062z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    brandColor: '#5FA04E',
    brandGlow: 'rgba(95, 160, 78, 0.45)',
    brandBg: 'rgba(95, 160, 78, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2zm7.6-4.5L12.8.2c-.5-.3-1.1-.3-1.6 0L4.4 4.1c-.5.3-.8.8-.8 1.4v7.8c0 .6.3 1.1.8 1.4l6.8 3.9c.5.3 1.1.3 1.6 0l6.8-3.9c.5-.3.8-.8.8-1.4V5.5c0-.6-.3-1.1-.8-1.4zM12 15.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3z" />
      </svg>
    ),
  },
  {
    name: 'Express',
    category: 'Backend API',
    brandColor: '#ffffff',
    brandGlow: 'rgba(255, 255, 255, 0.4)',
    brandBg: 'rgba(255, 255, 255, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.579l-4.148-7.142 3.864-6.65h-3.488l-2.404 4.542-2.457-4.542h-3.523l3.969 6.65-4.27 7.142h3.541l2.74-4.997 2.705 4.997H24zM6.924 16.586c-2.316 0-3.69-1.464-3.69-3.593 0-2.128 1.374-3.592 3.69-3.592 2.317 0 3.691 1.464 3.691 3.592 0 2.129-1.374 3.593-3.691 3.593zm0-8.995c-3.57 0-5.836 2.4-5.836 5.402 0 3.003 2.266 5.403 5.836 5.403 3.57 0 5.836-2.4 5.836-5.403 0-3.002-2.266-5.402-5.836-5.402z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    brandColor: '#4169E1',
    brandGlow: 'rgba(65, 105, 225, 0.45)',
    brandBg: 'rgba(65, 105, 225, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.97 0C5.358 0 0 5.358 0 11.97c0 5.29 3.435 9.778 8.203 11.365.6.11.82-.26.82-.578v-2.028c-3.337.725-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.776.42-1.305.763-1.605-2.664-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.814 1.102.814 2.222v3.293c0 .322.216.694.825.576C20.568 21.745 24 17.26 24 11.97 24 5.358 18.582 0 11.97 0z" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    category: 'NoSQL Database',
    brandColor: '#13AA52',
    brandGlow: 'rgba(19, 170, 82, 0.45)',
    brandBg: 'rgba(19, 170, 82, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.18-4.613-8.083-4.87-8.307a.64.64 0 0 0-.846 0c-.257.224-3.606 3.128-4.87 8.307-1.42 5.823.95 10.377 4.908 13.315.118.088.26.13.402.13s.284-.042.402-.13c3.958-2.938 6.328-7.492 4.908-13.315zM11.9 2.502c1.077 1.037 3.337 3.738 4.226 7.42-.518.25-1.408.57-2.614.57-1.612 0-2.887-.57-3.414-.84.81-3.65 1.7-6.02 1.802-7.15z" />
      </svg>
    ),
  },
  {
    name: 'Prisma',
    category: 'ORM',
    brandColor: '#2DD4BF',
    brandGlow: 'rgba(45, 212, 191, 0.45)',
    brandBg: 'rgba(45, 212, 191, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.062 18.067L13.565 1.402a1.696 1.696 0 0 0-2.998 0L.938 20.25a1.701 1.701 0 0 0 2.253 2.308l17.84-8.89a1.696 1.696 0 0 0 1.031-1.601zm-9.995-13.43L19.5 17.153l-6.85-3.407-.583-9.109z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    brandColor: '#38BDF8',
    brandGlow: 'rgba(56, 189, 248, 0.45)',
    brandBg: 'rgba(56, 189, 248, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    category: 'Cloud Services',
    brandColor: '#FFA611',
    brandGlow: 'rgba(255, 166, 17, 0.5)',
    brandBg: 'rgba(255, 166, 17, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.89 15.672L6.255.461a.542.542 0 0 1 .998-.184l3.435 6.452-6.798 8.943zm16.793 2.825l-2.022-12.44a.541.541 0 0 0-.916-.279L1.31 20.672l10.024 5.63a1.47 1.47 0 0 0 1.442 0l7.907-7.805zM12.77 8.012l-2.39-4.577a.542.542 0 0 0-.974.04L3.99 15.222l8.78-7.21z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    brandColor: '#ffffff',
    brandGlow: 'rgba(255, 255, 255, 0.45)',
    brandBg: 'rgba(255, 255, 255, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22v3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Postman',
    category: 'API Testing',
    brandColor: '#FF6C37',
    brandGlow: 'rgba(255, 108, 55, 0.5)',
    brandBg: 'rgba(255, 108, 55, 0.08)',
    svgPath: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.564.002a11.999 11.999 0 0 0-7.838 3.124l9.28 5.358a1.2 1.2 0 0 1 .596 1.038v3.666l2.94 1.698v-3.774a3.6 3.6 0 0 0-1.79-3.118L13.564.002zM4.17 4.54A11.968 11.968 0 0 0 .002 13.564l4.168-2.406V7.492c0-.52.278-.998.728-1.258L4.17 4.54zm15.66 5.896l-2.94-1.698v3.774a3.6 3.6 0 0 1-1.79 3.118L2.52 22.842a12.008 12.008 0 0 0 17.31-12.406zM5.37 12.964L1.2 15.372a11.985 11.985 0 0 0 3.6 4.458l.57-.33V12.964z" />
      </svg>
    ),
  },
];

export const CoreTechnologies: React.FC = () => {
  return (
    <section id="technologies" className="section-spacer" aria-labelledby="technologies-heading">
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
            <span>Technologies</span>
          </div>
          <h2 id="technologies-heading" className="section-title">
            Core Technologies
          </h2>
          <p className="section-description">
            The languages, frameworks, databases, and development tools I use to build complete web applications.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="tech-grid">
          {TECHNOLOGIES.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-card"
              style={
                {
                  '--brand-color': tech.brandColor,
                  '--brand-glow': tech.brandGlow,
                  '--brand-bg': tech.brandBg,
                } as React.CSSProperties
              }
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: index * 0.03, ease: 'easeOut' }}
            >
              <div className="tech-icon-wrapper" aria-hidden="true">
                {tech.svgPath}
              </div>
              <div className="tech-meta">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
