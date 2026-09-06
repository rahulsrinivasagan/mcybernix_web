"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect prefers-reduced-motion: reduce
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Do not initialize Lenis; allow native browser scrolling
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.25,
      });
      lenisRef.current = lenis;

      const tickerCallback = (time: number) => {
        lenis?.raf(time * 1000);
      };

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      // Global smooth anchor navigation
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        const anchor = target?.closest("a") as HTMLAnchorElement | null;
        if (!anchor) return;

        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;

        // Check for in-page anchor (#something or /#something while on /)
        let targetId = "";
        if (href.startsWith("#")) {
          targetId = href;
        } else if (href.startsWith("/#") && window.location.pathname === "/") {
          targetId = href.replace("/", "");
        }

        if (targetId) {
          try {
            const el = document.querySelector(targetId);
            if (el) {
              e.preventDefault();
              // Close mobile menu if open
              const mobileMenu = document.getElementById("mobileMenu");
              if (mobileMenu) mobileMenu.classList.remove("open");

              lenis?.scrollTo(el as HTMLElement, { offset: -70 });
            }
          } catch {
            // Ignore invalid selector
          }
        }
      };

      document.addEventListener("click", handleAnchorClick, { passive: false });

      return () => {
        document.removeEventListener("click", handleAnchorClick);
        gsap.ticker.remove(tickerCallback);
        lenis?.destroy();
        lenisRef.current = null;
      };
    } catch (err) {
      console.warn("Smooth scroll initialization warning:", err);
    }
  }, []);

  // On route change, notify ScrollTrigger to refresh its coordinates once DOM updates
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Scroll to top on page change if not on an anchor
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true });
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
