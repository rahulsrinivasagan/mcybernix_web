"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const footerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const footerEl = footerRef.current;
    if (!footerEl) return;

    // Play smooth staggered entry animation
    const playFooterEntry = () => {
      const items = footerEl.querySelectorAll(
        ".f-brand, .f-col, .news, .f-bot"
      );
      if (items.length === 0) return;

      gsap.killTweensOf(items);

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    };

    // ScrollTrigger: only triggers when user scrolls into the footer, not on top reload
    const st = ScrollTrigger.create({
      trigger: footerEl,
      start: "top 90%",
      once: true,
      onEnter: () => playFooterEntry(),
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="wrap">
        <div className="f-grid" ref={gridRef}>
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
              We help startups and businesses build, automate, and grow with
              smart digital solutions.
            </p>
            <div className="socials">
              <a aria-label="LinkedIn" href="/contact">
                in
              </a>
              <a aria-label="X" href="/contact">
                ✕
              </a>
              <a aria-label="GitHub" href="/contact">
                ◍
              </a>
              <a aria-label="Instagram" href="/contact">
                ◎
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

          <div className="f-col">
            <h5>Company</h5>
            <a href="/contact">Careers</a>
            <a href="/contact">Privacy Policy</a>
            <a href="/contact">Terms &amp; Conditions</a>
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
          <span>© 2026 Mcybernix Solutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
