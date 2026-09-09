import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Briefcase,
  FolderGit2,
  Cpu,
  LayoutGrid,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import "./Navbar.css";

const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface NavItem {
  name: string;
  href: string;
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", id: "home", icon: Home },
  { name: "About", href: "/about", id: "about", icon: Mail },
  {
    name: "Experience",
    href: "/#experience",
    id: "experience",
    icon: Briefcase,
  },
  { name: "Projects", href: "/#projects", id: "projects", icon: FolderGit2 },
  {
    name: "Technologies",
    href: "/#technologies",
    id: "technologies",
    icon: Cpu,
  },
  { name: "Services", href: "/#services", id: "services", icon: LayoutGrid },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const isNavItemActive = (item: NavItem) => {
    const currentPath = location.pathname;
    const currentHash = location.hash.replace("#", "");

    if (item.id === "about") {
      return currentPath === "/about";
    }

    if (item.id === "home") {
      return currentPath === "/" && !currentHash;
    }

    return currentPath === "/" && currentHash === item.id;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close mobile sidebar if viewport expands beyond 950px desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 20);
    }
  }, [location.pathname, location.hash]);

  return (
    <header className={`navbar-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo — Far Left */}
        <Link
          to="/"
          className="navbar-brand"
          aria-label="Abdussomad Tobi Ajayi home"
        >
          <span className="brand-name">
            Abdussomad<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Right-Side Group: Nav Links + CTA Button */}
        <div className="navbar-right-group">
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-list">
              {NAV_ITEMS.map((item) => {
                const isActive = isNavItemActive(item);
                return (
                  <li key={item.id} className="nav-item">
                    <Link
                      to={item.href}
                      onClick={() => {
                        if (item.id === "home") {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className={`nav-link ${isActive ? "is-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action CTA Button */}
          <Link to="/contact" className="navbar-cta-btn">
            <span>Get in touch</span>
          </Link>

          {/* Mobile Hamburger Toggle (active <= 950px) */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Scrim Overlay (CodeKage reference layout) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="mobile-sidebar-portal">
            {/* Scrim Backdrop */}
            <motion.div
              className="mobile-sidebar-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Full-Height Slide-Over Panel (Right Anchored) */}
            <motion.aside
              className="mobile-sidebar-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              aria-label="Mobile Navigation"
            >
              <div className="mobile-sidebar-content">
                {/* Header: Logo / Name on left, Close (X) button on right */}
                <div className="mobile-sidebar-header">
                  <Link
                    to="/"
                    className="mobile-sidebar-brand"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="brand-name">
                      Abdussomad<span className="brand-dot">.</span>
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="mobile-sidebar-close"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Large, clearly separated row nav links */}
                <nav
                  className="mobile-sidebar-nav"
                  aria-label="Mobile Navigation Links"
                >
                  <ul className="mobile-sidebar-nav-list">
                    {NAV_ITEMS.map((item) => {
                      const isActive = isNavItemActive(item);
                      const Icon = item.icon;
                      return (
                        <li key={item.id} className="mobile-sidebar-nav-item">
                          <Link
                            to={item.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              if (item.id === "home") {
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }
                            }}
                            className={`mobile-sidebar-row ${isActive ? "is-active" : ""}`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span className="mobile-row-icon">
                              <Icon size={18} />
                            </span>
                            <span className="mobile-row-label">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Solid Filled CTA Button below links (White with black text) */}
                <Link
                  to="/contact"
                  className="mobile-sidebar-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={16} />
                </Link>

                {/* Contact & Social entries at bottom */}
                <div className="mobile-sidebar-footer">
                  <span className="mobile-connect-heading">CONNECT</span>
                  <div className="mobile-social-icons">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-icon-btn"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-icon-btn"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-icon-btn"
                      aria-label="Twitter / X"
                    >
                      <TwitterIcon size={18} />
                    </a>
                    <a
                      href="mailto:ajayiabdussomadtobi@gmail.com"
                      className="mobile-social-icon-btn"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
