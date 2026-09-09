import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import abdussomadImg from "../assets/abdussomad1.jpg";
import "./AboutPage.css";

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.section
      className="about-page section-spacer"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.58, ease: "easeOut" }}
    >
      <div className="app-container">
        <div className="about-page-grid">
          <div className="about-page-image-wrap border2">
            <div className="about-page-image-frame border">
              <img
                src={abdussomadImg}
                alt="Abdussomad Tobi Ajayi"
                className="about-page-image"
              />
              <span className="about-page-curve-shadow" aria-hidden="true" />
            </div>
          </div>

          <article className="about-page-content">
            <div className="section-eyebrow">
              <span className="dot" />
              <span>About</span>
            </div>

            <h1 className="about-page-title">
              Developer with a systems mindset.
            </h1>

            <p className="about-page-intro">
              I&apos;m Abdussomad Tobi Ajayi, a fullstack developer who enjoys
              turning complex ideas into clear, useful digital products. I care
              deeply about product thinking, strong engineering habits, and
              interfaces that feel precise and human.
            </p>

            <div className="about-page-role-card">
              <span className="about-page-role-label">Current Role</span>
              <span className="about-page-role-name">Fullstack Developer</span>
            </div>

            <div className="about-page-highlights">
              <div className="about-page-highlight">
                <Sparkles size={16} />
                <span>
                  I design and build complete web experiences from scratch.
                </span>
              </div>
              <div className="about-page-highlight">
                <MapPin size={16} />
                <span>Based in Lagos, Nigeria.</span>
              </div>
            </div>

            <p className="about-page-copy">
              My work blends frontend craft with backend discipline, from
              responsive layouts and accessible interactions to APIs, data
              flows, and production-ready delivery. I work closely with teams
              and founders to ship polished, reliable software.
            </p>

            <div className="about-page-cta-row">
              <Link className="btn-primary about-page-cta" to="/contact">
                <span>Let&apos;s build together</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </motion.section>
  );
};
