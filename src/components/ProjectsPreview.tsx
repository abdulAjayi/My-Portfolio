import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import iiotImg from "../assets/projects/iiot-dashboard.png";
import tasklyImg from "../assets/projects/taskly.png";
import chatImg from "../assets/projects/group-chat.png";
import "./ProjectsPreview.css";

interface ProjectPreviewItem {
  id: string;
  title: string;
  shortDesc: string;
  urlPill: string;
  liveUrl: string;
  tags: string[];
  image: string;
}

const PROJECTS_DATA: ProjectPreviewItem[] = [
  {
    id: "iiot-dashboard",
    title: "Industrial IoT Monitoring Dashboard",
    shortDesc:
      "A web-based dashboard enabling plant operators to inspect live equipment sensor readings and execute remote control routines with multi-step verification.",
    urlPill: "iot-dashboard-rouge-zeta.vercel.app",
    liveUrl: "https://iot-dashboard-rouge-zeta.vercel.app/well/well-3",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "Express"],
    image: iiotImg,
  },
  {
    id: "taskly",
    title: "Taskly — Fullstack Task Management App",
    shortDesc:
      "A task management experience for capturing work, marking tasks as complete, separating active from finished work, and filtering tasks through a focused product workflow.",
    urlPill: "taskly.vercel.app",
    liveUrl: "https://taskly-mpr2.vercel.app",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: tasklyImg,
  },
  {
    id: "group-chat",
    title: "Real-Time Group Chat Application",
    shortDesc:
      "A responsive real-time messaging application with multi-room channels, instant online presence indicators, typing status, and live location sharing.",
    urlPill: "chat-app-frontend-sigma-orcin.vercel.app",
    liveUrl: "https://chat-app-frontend-sigma-orcin.vercel.app",
    tags: ["React", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
    image: chatImg,
  },
];

export const ProjectsPreview: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="section-spacer"
      aria-labelledby="projects-heading"
    >
      <div className="app-container">
        {/* Section Header — Left-aligned, grounded */}
        <motion.div
          className="section-header projects-header-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div>
            <div className="section-eyebrow">
              <span className="dot" />
              <span>Projects</span>
            </div>
            <h2 id="projects-heading" className="section-title">
              Featured Projects
            </h2>
            <p className="section-description">
              A selection of web applications and engineering projects I've
              built end-to-end.
            </p>
          </div>

          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="text-link projects-explore-all"
          ></a>
        </motion.div>

        {/* Project Cards Grid — Sized consistently with Services section */}
        <div className="projects-grid">
          {PROJECTS_DATA.map((project, index) => {
            return (
              <motion.a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-container"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                aria-label={`Open ${project.title} live application in new tab`}
              >
                {/* Browser Frame */}
                <div className="browser-frame">
                  {/* Browser Top Chrome (Informational/Visual) */}
                  <div className="browser-chrome">
                    <div className="browser-dots" aria-hidden="true">
                      <span className="dot dot-close" />
                      <span className="dot dot-minimize" />
                      <span className="dot dot-expand" />
                    </div>
                    <div className="browser-address-bar">
                      <Lock size={10} className="address-lock" />
                      <span className="address-text">{project.urlPill}</span>
                    </div>
                    <div className="browser-mockup-badge">Preview</div>
                  </div>

                  {/* Browser Screen Image Area — Balanced ~45-50% height */}
                  <div className="browser-screen">
                    <div className="project-screenshot-container">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="project-screenshot-img"
                        loading="lazy"
                      />
                      <span
                        className="project-image-cover"
                        aria-hidden="true"
                      />
                      <span className="project-image-live-demo">Live Demo</span>
                      <span className="project-image-arrow" aria-hidden="true">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-short-desc">{project.shortDesc}</p>

                  <div className="project-tags-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
