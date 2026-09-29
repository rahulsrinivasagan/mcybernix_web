"use client";

import { useState } from "react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <a className="brand" href="/">
              <span className="brand-mark">
                <img
                  alt="MCybernix Logo"
                  height={30}
                  src="/images/logo.png"
                  style={{ objectFit: "contain" }}
                  width={30}
                />
              </span>
              <span className="brand-txt">
                <strong>MCybernix</strong>
                <span>Solutions</span>
              </span>
            </a>
            <p>
              We build, automate, and scale digital products that help
              forward-thinking companies work smarter and grow faster.
            </p>
            <div className="socials">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/mcybernixsolutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                in
              </a>
              <a
                aria-label="Email Us"
                href="mailto:mcybernixsolutions@gmail.com"
                title="Email Us"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "mailto:mcybernixsolutions@gmail.com";
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ pointerEvents: "none", display: "block" }}
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="f-col">
            <h5>Quick Links</h5>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/#services">Services</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="f-col">
            <h5>Services</h5>
            <a href="/#services">Web Development</a>
            <a href="/#services">AI Automation</a>
            <a href="/#services">App Development</a>
          </div>

          <div className="news">
            <h5
              style={{
                fontSize: "12.5px",
                fontWeight: 800,
                marginBottom: "16px",
              }}
            >
              Newsletter
            </h5>
            <p>Stay updated with our latest insights and offers.</p>
            <form id="newsForm" onSubmit={handleSubscribe}>
              <input
                aria-label="Email address"
                placeholder="Enter your email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button aria-label="Subscribe" className="circ" type="submit">
                →
              </button>
            </form>
            <p
              id="newsMsg"
              style={{
                marginTop: "10px",
                color: "var(--blue)",
                display: subscribed ? "block" : "none",
              }}
            >
              Thanks — you're subscribed!
            </p>
          </div>
        </div>

        <div className="f-bot">
          <span>© 2026 MCybernix Solutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
