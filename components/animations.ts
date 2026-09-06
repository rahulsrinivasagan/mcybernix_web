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
      ".reveal, .proj, .svc-card, .stat, .hero-el, .hero-avatar-el, .cta, .post, .faq-item, .contact-hero-el, .article-hero-el"
    );
    allReveals.forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
    });
    return () => {};
  }

  // Scoped GSAP context for complete cleanup on route change
  const ctx = gsap.context(() => {
    /* ==========================================================
       1. HOME: HERO SECTION (Above the fold - triggers on load/scroll)
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
       2. HOME: SERVICES / WHAT WE DO SECTION (#about)
       ========================================================== */
    const aboutSec = document.getElementById("about");
    const stackOuter = document.getElementById("stackOuter");
    const svc1 = document.getElementById("svc1");
    const svc2 = document.getElementById("svc2");
    const svc3 = document.getElementById("svc3");
    const cards = [svc1, svc2, svc3].filter(Boolean) as HTMLElement[];

    if (aboutSec && cards.length === 3) {
      // 1. Initial entrance: Left elements and Card 1 enter concurrently (no delay!)
      const wwdEntrance = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSec,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      const leftItems = aboutSec.querySelectorAll(
        ".wwd-left .eyebrow, .wwd-left h2, .wwd-left .rule, .wwd-left .lead, .wwd-left .benefit, .wwd-left .btn"
      );
      if (leftItems.length > 0) {
        wwdEntrance.fromTo(
          leftItems,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.07 }
        );
      }

      // Card 1 enters immediately with the section title
      wwdEntrance.fromTo(
        svc1,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65 },
        "<0.05"
      );

      // 2. Responsive Card Slider
      const mm = gsap.matchMedia();

      // DESKTOP (> 1000px): Pinned Card Stacking Slider
      mm.add("(min-width: 1001px)", () => {
        if (stackOuter) {
          stackOuter.classList.add("is-desktop-slider");
        }

        // Set initial card states
        gsap.set(svc1, { zIndex: 1, scale: 1, y: 0, opacity: 1 });
        gsap.set(svc2, { zIndex: 2, scale: 1, yPercent: 105, opacity: 0 });
        gsap.set(svc3, { zIndex: 3, scale: 1, yPercent: 105, opacity: 0 });

        const stackTl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSec,
            start: "top 70px",
            end: "+=2200",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Phase 1 (0.0 to 0.4): Card 1 is active and readable
        // Phase 2 (0.4 to 1.1): Card 2 slides in smoothly over Card 1
        stackTl.to(
          svc2,
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.7,
          },
          0.4
        );
        stackTl.to(
          svc1,
          {
            scale: 0.94,
            y: -22,
            opacity: 0.65,
            ease: "power2.out",
            duration: 0.7,
          },
          0.4
        );

        // Phase 3 (1.1 to 1.7): Card 2 is SHOWCASED ALONE (reading window for Card 2)
        // Nothing moves during this window, ensuring Card 2 is fully appreciated!

        // Phase 4 (1.7 to 2.4): Card 3 slides in smoothly over Card 2
        stackTl.to(
          svc3,
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.7,
          },
          1.7
        );
        stackTl.to(
          svc2,
          {
            scale: 0.94,
            y: -22,
            opacity: 0.65,
            ease: "power2.out",
            duration: 0.7,
          },
          1.7
        );
        stackTl.to(
          svc1,
          {
            scale: 0.88,
            y: -44,
            opacity: 0.35,
            ease: "power2.out",
            duration: 0.7,
          },
          1.7
        );

        // Phase 5 (2.4 to 3.0): Card 3 is SHOWCASED ALONE (reading window for Card 3)
        // Card 3 is fully visible and stationary before the section unpins!

        return () => {
          if (stackOuter) {
            stackOuter.classList.remove("is-desktop-slider");
          }
          gsap.set(cards, { clearProps: "all" });
        };
      });

      // TABLET & MOBILE (<= 1000px): Natural vertical stack with individual reveals
      mm.add("(max-width: 1000px)", () => {
        if (stackOuter) {
          stackOuter.classList.remove("is-desktop-slider");
        }
        gsap.set(cards, { clearProps: "all" });

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
      });
    }

    /* ==========================================================
       3. HOME: STATS SECTION (.stats)
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
       4. HOME: PROJECTS SECTION (#services)
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
       5. HOME: CTA SECTION (#contact)
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

    /* ==========================================================
       6. CONTACT PAGE ANIMATIONS (.contact-section)
       ========================================================== */
    const contactSection = document.querySelector(".contact-section");
    if (contactSection) {
      // Header hero entrance
      const contactHeroEls = contactSection.querySelectorAll(".contact-hero-el");
      if (contactHeroEls.length > 0) {
        gsap.fromTo(
          contactHeroEls,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: "power3.out" }
        );
      }

      // Contact form & info entrance on scroll
      const contactMain = contactSection.querySelector(".contact-main");
      if (contactMain) {
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: contactMain,
            start: "top 80%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        const left = contactMain.querySelector(".contact-left");
        const right = contactMain.querySelector(".contact-right");

        if (left) {
          mainTl.fromTo(left, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 });
        }
        if (right) {
          mainTl.fromTo(right, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, "-=0.6");
        }
      }

      // FAQ section entrance on scroll
      const faqSec = contactSection.querySelector(".faq-section");
      if (faqSec) {
        const faqTl = gsap.timeline({
          scrollTrigger: {
            trigger: faqSec,
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        const faqHeader = faqSec.querySelector(".faq-header");
        const faqItems = faqSec.querySelectorAll(".faq-item");

        if (faqHeader) {
          faqTl.fromTo(faqHeader, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
        }
        if (faqItems.length > 0) {
          faqTl.fromTo(
            faqItems,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.09 },
            "-=0.45"
          );
        }
      }
    }

    /* ==========================================================
       7. BLOG PAGE ANIMATIONS (.blog-page)
       ========================================================== */
    const blogPage = document.querySelector(".blog-page");
    if (blogPage) {
      const blogHeroEls = blogPage.querySelectorAll(".blog-hero-el");
      if (blogHeroEls.length > 0) {
        gsap.fromTo(
          blogHeroEls,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: "power3.out" }
        );
      }

      const featured = blogPage.querySelector(".featured-blog");
      if (featured) {
        gsap.fromTo(
          featured,
          { y: 30, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featured,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      const toolbar = blogPage.querySelector(".blog-toolbar");
      if (toolbar) {
        gsap.fromTo(
          toolbar,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: toolbar,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      const blogCards = blogPage.querySelectorAll(".blogs-grid .post");
      if (blogCards.length > 0) {
        gsap.fromTo(
          blogCards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".blogs-grid",
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }

    /* ==========================================================
       8. BLOG ARTICLE PAGE ANIMATIONS (.article-page)
       ========================================================== */
    const articlePage = document.querySelector(".article-page");
    if (articlePage) {
      const articleHeroEls = articlePage.querySelectorAll(".article-hero-el");
      if (articleHeroEls.length > 0) {
        gsap.fromTo(
          articleHeroEls,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.08, ease: "power3.out" }
        );
      }

      const cover = articlePage.querySelector(".article-cover");
      if (cover) {
        gsap.fromTo(
          cover,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cover,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      const layout = articlePage.querySelector(".article-layout");
      if (layout) {
        gsap.fromTo(
          layout.children,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: layout,
              start: "top 80%",
              once: true,
            },
          }
        );
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
