import React, { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profileImg from "../assets/abdussomad.png";
import "./Hero.css";

const FULL_GREETING = "Hi There, I'm Abdussomad Tobi Ajayi";
const FULL_HEADLINE = "Full Stack Developer";
const TYPING_SPEED = 50; // ms per char (natural 40-60ms)
const ERASING_SPEED = 35; // ms per char
const PAUSE_AT_END = 1800; // ms pause once fully typed (~1.5-2s)
const PAUSE_AT_START = 500; // ms pause before retyping

// One-time entrance animation only — begins shortly after load (400ms delay)
const headlineContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

export const Hero: React.FC = () => {
  // Continuous looping typewriter state for greeting
  const [typedText, setTypedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // One-shot typewriter state for hero headline
  const [typedHeadline, setTypedHeadline] = useState<string>("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (typedText.length < FULL_GREETING.length) {
        timer = setTimeout(() => {
          setTypedText(FULL_GREETING.slice(0, typedText.length + 1));
        }, TYPING_SPEED);
      } else {
        // Fully typed, pause 1.8s then start erasing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AT_END);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(FULL_GREETING.slice(0, typedText.length - 1));
        }, ERASING_SPEED);
      } else {
        // Fully erased, pause 500ms then retype
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, PAUSE_AT_START);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  useEffect(() => {
    if (typedHeadline.length >= FULL_HEADLINE.length) {
      return;
    }

    const timer = setTimeout(() => {
      setTypedHeadline(FULL_HEADLINE.slice(0, typedHeadline.length + 1));
    }, TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [typedHeadline]);

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPos = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="app-container hero-container">
        {/* Left Column: Asymmetric Left-Aligned Typography & CTAs */}
        <div className="hero-content-col">
          {/* 1. Continuous Looping Typewriter Effect */}
          <div className="hero-eyebrow-wrapper">
            <span className="hero-greeting" aria-label={FULL_GREETING}>
              <span>{typedText}</span>
              <span className="typewriter-cursor" aria-hidden="true">
                _
              </span>
            </span>
          </div>

          {/* 2. One-shot headline typewriter rendering */}
          <motion.h1
            className="hero-headline"
            variants={headlineContainerVariants}
            initial="hidden"
            animate="visible"
            aria-label={FULL_HEADLINE}
          >
            <span className="hero-headline-typewriter">{typedHeadline}</span>
          </motion.h1>

          {/* Grounded Fullstack Subtext */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68, ease: "easeOut" }}
          >
            I build reliable, end-to-end web applications and digital products.
            From responsive, tactile frontend interfaces to scalable backend
            APIs and database architectures, I handle projects with clean code
            and dependable software execution.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.82, ease: "easeOut" }}
          >
            <button
              type="button"
              className="btn-primary hero-btn-primary"
              onClick={() => handleScrollTo("projects")}
            >
              <span>View my work</span>
            </button>

            <button
              type="button"
              className="hero-secondary-link"
              onClick={() => handleScrollTo("contact")}
            >
              <span>Get in touch</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Portrait / Image Placeholder with Reference-Style Concentric Accents */}
        <motion.div
          className="hero-image-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          <div className="portrait-container">
            {/* Background Concentric Architectural Lines (inspired by Fofana reference) */}
            <svg
              className="portrait-bg-rings"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="250"
                cy="250"
                r="140"
                stroke="#262626"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx="250"
                cy="250"
                r="190"
                stroke="#1f1f1f"
                strokeWidth="1"
              />
              <circle
                cx="250"
                cy="250"
                r="240"
                stroke="#171717"
                strokeWidth="1"
              />
              <line
                x1="250"
                y1="0"
                x2="250"
                y2="500"
                stroke="#1a1a1a"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="250"
                x2="500"
                y2="250"
                stroke="#1a1a1a"
                strokeWidth="1"
              />
            </svg>

            {/* Portrait Card */}
            <div className="portrait-frame">
              <img
                src={profileImg}
                alt="Abdussomad Tobi Ajayi"
                className="portrait-img"
              />
              <div className="portrait-gradient-overlay" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
