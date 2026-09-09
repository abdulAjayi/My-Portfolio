import React, { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, X } from "lucide-react";
import "./Contact.css";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const contactMethods = [
  {
    platform: "Email",
    value: "abdussomad8720@gmail.com",
    href: "mailto:abdussomad8720@gmail.com",
  },
  {
    platform: "Phone",
    value: "+234 915 150 7804",
    href: "tel:+2349151507804",
  },
  {
    platform: "LinkedIn",
    value: "linkedin.com/in/abdussomad-tobi-ajayi",
    href: "https://www.linkedin.com/in/abdussomad-ajayi-06a5ab299/",
  },
  {
    platform: "GitHub",
    value: "github.com/abdulAjayi",
    href: "https://github.com/abdulAjayi",
  },
  {
    platform: "X",
    value: "@techAddict_w",
    href: "https://x.com/techAddict_w",
  },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const showCard = (type: "success" | "error", message: string) => {
    setFeedback({ type, message });
    window.setTimeout(() => {
      setFeedback(null);
    }, 4000);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`http://${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Unable to send your message.");
      }

      showCard("success", payload.message || "Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      showCard(
        "error",
        error instanceof Error ? error.message : "Unable to send your message.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact-section section-spacer"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0)" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
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
            <span>Contact</span>
          </div>
          <h2 id="contact-heading" className="section-title">
            Contact
          </h2>
          <p className="section-description">
            Have a project in mind or want to talk shop? Reach out.
          </p>
        </motion.div>

        <div className="contact-grid">
          <div className="contact-methods-panel">
            <div className="contact-method-list">
              {contactMethods.map((method) => (
                <a
                  key={method.platform}
                  className="contact-method-row"
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className="contact-method-platform">
                    {method.platform}
                  </span>
                  <span className="contact-method-value">{method.value}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form-panel" onSubmit={handleSubmit}>
            <div className="contact-form-field">
              <label className="contact-label" htmlFor="name">
                Name
              </label>
              <input
                className="contact-input"
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                required
              />
            </div>

            <div className="contact-form-field">
              <label className="contact-label" htmlFor="email">
                Email
              </label>
              <input
                className="contact-input"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                required
              />
            </div>

            <div className="contact-form-field">
              <label className="contact-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="contact-textarea"
                id="message"
                name="message"
                rows={5}
                placeholder="Project details"
                value={formData.message}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
                required
              />
            </div>

            <button
              className="contact-submit"
              type="submit"
              disabled={isSubmitting}
            >
              <Send size={14} />
              <span>{isSubmitting ? "Sending..." : "Send message"}</span>
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {feedback && (
          <div className="contact-modal-cover" role="dialog" aria-modal="true">
            <motion.div
              className={`contact-confirm-card contact-confirm-card-${feedback.type}`}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
            >
              <span className="contact-confirm-icon">
                {feedback.type === "success" ? (
                  <CheckCircle2 size={30} />
                ) : (
                  <X size={30} />
                )}
              </span>
              <span className="contact-confirm-message">
                {feedback.message}
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
