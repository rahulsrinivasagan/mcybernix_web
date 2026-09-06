import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function initMcybernixAnimations() {
  if (typeof window === "undefined") return () => {};

  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.matchMedia("(max-width: 660px)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    const allReveals = document.querySelectorAll(
      ".reveal, .proj, .svc-card, .stat, .hero-el, .hero-avatar-el, .cta"
    );
    allReveals.forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
    });
    return () => {};
  }

  // Scoped GSAP context for clean lifecycle & teardown
  const ctx = gsap.context(() => {
    /* ==========================================================
       1. HERO SECTION (Above the fold - triggers on load or scroll)
       ========================================================== */
    const heroEl = document.querySelector(".hero");
    if (heroEl) {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroEl,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      const navShell = document.getElementById("navShell");
      if (navShell) {
        heroTl.fromTo(
          navShell,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        );
      }

      const arcs = document.querySelectorAll(".arc");
      if (arcs.length > 0) {
        heroTl.fromTo(
          arcs,
          { scale: 0.94, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power2.out" },
          "-=0.6"
        );
      }

      const avatars = document.querySelectorAll(".hero-avatar-el");
      if (avatars.length > 0) {
        heroTl.fromTo(
          avatars,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.85, stagger: 0.08, ease: "back.out(1.5)" },
          "-=0.7"
        );
      }

      const heroElements = document.querySelectorAll(".hero-el");
      if (heroElements.length > 0) {
        heroTl.fromTo(
          heroElements,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.08 },
          "-=0.6"
        );
      }

      // Parallax scrub on arcs when scrolling through hero
      if (arcs.length > 0 && !isMobile) {
        gsap.to(arcs, {
          yPercent: (i) => (i % 2 === 0 ? 12 : -12),
          ease: "none",
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }

    /* ==========================================================
       2. SERVICES / WHAT WE DO / ABOUT PREVIEW SECTION (#about)
       ========================================================== */
    const aboutSec = document.getElementById("about");
    if (aboutSec) {
      const wwdTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSec,
          start: "top 76%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Left column: Eyebrow, Heading, Rule, Lead, Benefits, CTA button
      const leftItems = aboutSec.querySelectorAll(
        ".wwd-left .eyebrow, .wwd-left h2, .wwd-left .rule, .wwd-left .lead, .wwd-left .benefit, .wwd-left .btn"
      );
      if (leftItems.length > 0) {
        wwdTl.fromTo(
          leftItems,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.09 }
        );
      }

      // Service cards staggered initial entrance
      const svc1 = document.getElementById("svc1");
      const svc2 = document.getElementById("svc2");
      const svc3 = document.getElementById("svc3");
      const cards = [svc1, svc2, svc3].filter(Boolean) as HTMLElement[];

      if (cards.length > 0) {
        wwdTl.fromTo(
          cards,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.14 },
          "-=0.55"
        );
      }

      // Desktop stacking cards scroll scrub
      cards.forEach((c, i) => {
        c.style.zIndex = (i + 1).toString();
      });

      if (!isMobile && cards.length === 3) {
        gsap.to(cards[0], {
          scale: 0.95,
          yPercent: -2,
          opacity: 0.75,
          ease: "power1.out",
          scrollTrigger: {
            trigger: cards[1],
            start: "top 250px",
            end: "top 126px",
            scrub: 0.5,
          },
        });

        gsap.to(cards[1], {
          scale: 0.95,
          yPercent: -2,
          opacity: 0.75,
          ease: "power1.out",
          scrollTrigger: {
            trigger: cards[2],
            start: "top 280px",
            end: "top 156px",
            scrub: 0.5,
          },
        });

        gsap.to(cards[0], {
          scale: 0.9,
          yPercent: -4,
          opacity: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: cards[2],
            start: "top 280px",
            end: "top 156px",
            scrub: 0.5,
          },
        });
      }
    }

    /* ==========================================================
       3. STATS SECTION (.stats)
       ========================================================== */
    const statsContainer = document.querySelector(".stats");
    if (statsContainer) {
      const statsTl = gsap.timeline({
        scrollTrigger: {
          trigger: statsContainer,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      statsTl.fromTo(
        statsContainer,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      const statItems = statsContainer.querySelectorAll(".stat");
      if (statItems.length > 0) {
        statsTl.fromTo(
          statItems,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          "-=0.5"
        );
      }
    }

    /* ==========================================================
       4. PROJECTS SECTION (#services)
       ========================================================== */
    const projSec = document.getElementById("services");
    if (projSec) {
      const projTl = gsap.timeline({
        scrollTrigger: {
          trigger: projSec,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      const headItems = projSec.querySelectorAll(
        ".head-row .eyebrow, .head-row h2, .head-row .btn"
      );
      if (headItems.length > 0) {
        projTl.fromTo(
          headItems,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.1 }
        );
      }

      const projCards = projSec.querySelectorAll(".proj");
      if (projCards.length > 0) {
        projTl.fromTo(
          projCards,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" },
          "-=0.4"
        );
      }

      const projDots = projSec.querySelector(".dots");
      if (projDots) {
        projTl.fromTo(
          projDots,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.3"
        );
      }
    }

    /* ==========================================================
       5. CTA SECTION (#contact)
       ========================================================== */
    const ctaSec = document.getElementById("contact");
    if (ctaSec) {
      const ctaCard = ctaSec.querySelector(".cta");
      if (ctaCard) {
        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSec,
            start: "top 80%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        ctaTl.fromTo(
          ctaCard,
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85 }
        );

        const ctaContent = ctaCard.querySelectorAll("h2, p, .btn");
        if (ctaContent.length > 0) {
          ctaTl.fromTo(
            ctaContent,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
            "-=0.5"
          );
        }
      }
    }
  });

  const refreshTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);

  return () => {
    clearTimeout(refreshTimer);
    ctx.revert();
  };
}
