"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-shell" id="navShell">
          <a className="brand" href="#home">
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

          <div className="nav-links">
            <a className="active" href="#home">
              Home
            </a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              className="btn btn-primary"
              href="#contact"
              style={{ padding: "11px 18px" }}
            >
              Let's Talk <span className="ic">→</span>
            </a>
            <button
              aria-label="Open menu"
              className="burger"
              id="burger"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobileMenu">
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About Us
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#blog" onClick={closeMenu}>
          Blog
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}
