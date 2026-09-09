import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import "./HomeContactSection.css";

export const HomeContactSection: React.FC = () => {
  return (
    <section
      className="home-contact-section section-spacer"
      aria-labelledby="home-contact-heading"
    >
      <div className="app-container">
        <motion.div
          className="home-contact-card"
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="home-contact-inner">
            <div className="home-contact-status">
              <span className="home-contact-status-dot" />
              <span>Available for new projects</span>
            </div>

            <h2 id="home-contact-heading" className="home-contact-title">
              Let&apos;s Work Together
            </h2>

            <p className="home-contact-copy">
              I&apos;m currently open to freelance contracts, full-time roles,
              and interesting collaborations. If you have a project in mind or
              just want to talk, I&apos;d love to hear from you.
            </p>

            <div className="home-contact-actions">
              <Link className="home-contact-primary" to="/contact">
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </Link>

              <a
                className="home-contact-secondary"
                href="https://wa.me/2349151507804"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="home-contact-phone">
              <span>
                Or call <a href="tel:+2349151507804">+234 915 150 7804</a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
