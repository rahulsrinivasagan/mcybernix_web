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

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    if (href === "/blog" && pathname === "/blog") return true;
    return false;
  };

  const isLightPage = pathname === "/contact" || pathname.startsWith("/blog");

  return (
    <nav className={`nav ${isLightPage ? "nav-light" : ""}`}>
      <div className="wrap">
        <div
          className={`nav-shell ${isLightPage ? "nav-shell-light" : ""}`}
          id="navShell"
        >
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

          <div className="nav-links">
            <a className={isActive("/") ? "active" : ""} href="/">
              Home
            </a>
            <a href="/#about">About Us</a>
            <a href="/#services">Services</a>
            <a className={isActive("/blog") ? "active" : ""} href="/blog">
              Blog
            </a>
            <a className={isActive("/contact") ? "active" : ""} href="/contact">
              Contact
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              className="btn btn-primary"
              href="/contact"
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

      <div
        className={`mobile-menu ${isOpen ? "open" : ""} ${isLightPage ? "mobile-menu-light" : ""}`}
        id="mobileMenu"
      >
        <a href="/" onClick={closeMenu}>
          Home
        </a>
        <a href="/#about" onClick={closeMenu}>
          About Us
        </a>
        <a href="/#services" onClick={closeMenu}>
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
