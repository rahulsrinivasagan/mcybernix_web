"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isBlog = pathname.startsWith("/blog");

  const isLightPage = isAbout || isContact || isBlog;

  return (
    <nav className={`nav ${isLightPage ? "nav-light" : ""}`}>
      <div className="wrap">
        <div className="nav-shell" id="navShell">
          <a className="brand" href={isHome ? "#home" : "/"}>
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
            <a className={isHome ? "active" : ""} href={isHome ? "#home" : "/"}>
              Home
            </a>
            <a className={isAbout ? "active" : ""} href="/about">
              About Us
            </a>
            <a href={isHome ? "#services" : "/#services"}>Services</a>
            <a className={isBlog ? "active" : ""} href="/blog">
              Blog
            </a>
            <a className={isContact ? "active" : ""} href="/contact">
              Contact
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              className="btn btn-primary"
              href={isHome ? "#contact" : "/contact"}
              style={{ padding: "11px 18px" }}
            >
              Let's Talk <span className="ic">→</span>
            </a>
            <button
              aria-controls="mobileMenu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
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
        <a href={isHome ? "#home" : "/"} onClick={closeMenu}>
          Home
        </a>
        <a href="/about" onClick={closeMenu}>
          About Us
        </a>
        <a href={isHome ? "#services" : "/#services"} onClick={closeMenu}>
          Services
        </a>
        <a href="/blog" onClick={closeMenu}>
          Blog
        </a>
        <a href="/contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}
