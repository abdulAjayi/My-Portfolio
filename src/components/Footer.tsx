import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const [lagosTime, setLagosTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatter for Africa/Lagos (WAT, UTC+1)
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setLagosTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="app-container footer-container">
        
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-brand-header">
              <span className="footer-brand-title">Abdussomad<span className="brand-dot">.</span></span>
            </div>
            <p className="footer-tagline">
              Fullstack developer building reliable, end-to-end web applications and modern digital products.
            </p>
          </div>

          <div className="footer-status-block">
            <div className="footer-status-item">
              <span className="footer-status-label">LOCATION & TIME</span>
              <span className="footer-status-val">
                Lagos, Nigeria (WAT) — {lagosTime || '10:00:00'}
              </span>
            </div>
            <div className="footer-status-item">
              <span className="footer-status-label">AVAILABILITY</span>
              <span className="footer-status-val">
                Open to fullstack developer roles & contracts
              </span>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <span className="footer-copy">
            © {new Date().getFullYear()} Abdussomad Tobi Ajayi. All rights reserved.
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-scroll-top"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
