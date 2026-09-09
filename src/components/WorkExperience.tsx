import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import "./WorkExperience.css";

const experienceEntries = [
  {
    role: "Fullstack Developer Intern",
    company: "Greenpeg Engineering",
    location: "Ikeja, Lagos (On-site)",
    period: "June 2026 – Present",
    description:
      "Independently built an IIoT dashboard that helped operators monitor plant performance and execute controls in one secure interface.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "WebSockets",
      "REST APIs",
    ],
    internshipType: "Internship",
  },
  {
    role: "Frontend Developer Intern",
    company: "HNG Internship",
    location: "Remote",
    period: "2025",
    description:
      "Collaborated with developers across different tech stacks in a remote/distributed team environment to build and ship real applications as part of a structured internship program.",
    stack: ["React", "JavaScript", "tailwind css", "Git"],
    internshipType: "Internship",
  },
];

export const WorkExperience: React.FC = () => {
  return (
    <section
      id="experience"
      className="section-spacer"
      aria-labelledby="experience-heading"
    >
      <div className="app-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="section-eyebrow">
            <span className="dot" />
            <span>Experience</span>
          </div>
          <h2 id="experience-heading" className="section-title">
            Work Experience
          </h2>
          <p className="section-description">
            Practical experience building modern fullstack web applications and
            real-world software products.
          </p>
        </motion.div>

        <div className="experience-grid">
          {experienceEntries.map((entry) => (
            <motion.div
              key={entry.company}
              className="experience-card card-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="experience-header">
                <div className="experience-role-group">
                  <div className="role-badge-row">
                    <span className="employment-tag">
                      {entry.internshipType}
                    </span>
                  </div>
                  <h3 className="experience-role">{entry.role}</h3>
                  <div className="experience-company-meta">
                    <span className="company-name">{entry.company}</span>
                    <span className="meta-sep">•</span>
                    <span className="company-location">
                      <MapPin size={13} className="meta-icon" />
                      {entry.location}
                    </span>
                  </div>
                </div>

                <div className="experience-date-pill">
                  <Calendar size={13} />
                  <span>{entry.period}</span>
                </div>
              </div>

              <p className="experience-project-description">
                {entry.description}
              </p>

              <div className="experience-tech-row">
                <span className="tech-row-label">Stack:</span>
                <div className="tech-tags-list">
                  {entry.stack.map((tech) => (
                    <span key={tech} className="tech-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
