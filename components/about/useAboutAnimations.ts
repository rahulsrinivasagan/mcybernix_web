"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function useAboutAnimations(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = containerRef.current;
    if (!root) return;

    // Accessibility check: respects prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // If reduced motion is requested, reveal all elements immediately
      const elementsToReveal = root.querySelectorAll(
        "[data-about-hero], [data-about-stat-card], [data-about-story], [data-about-val-card], [data-about-step], [data-about-why], [data-about-cta]"
      );
      elementsToReveal.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia("(max-width: 820px)").matches;

    /* ==========================================================
       Scoped GSAP Animations using gsap.context()
       ========================================================== */
    const ctx = gsap.context(() => {
      /* ---------- 1. HERO ENTRANCE (Triggers on load if at top, or when scrolled into view) ---------- */
      const heroContainer = root.querySelector('[data-about-hero="container"]');
      const heroLabel = root.querySelector('[data-about-hero="label"]');
      const heroLines = root.querySelectorAll('[data-about-hero="line"]');
      const heroParagraph = root.querySelector('[data-about-hero="paragraph"]');
      const heroCta = root.querySelector('[data-about-hero="cta"]');
      const heroImgWrap = root.querySelector('[data-about-hero="imgWrap"]');
      const heroImg = root.querySelector('[data-about-hero="img"]');

      if (heroContainer) {
        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroContainer,
            start: "top 85%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        // 1. Container subtly fades in
        heroTl.fromTo(
          heroContainer,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.85 }
        );

        // 2. "About Us" label moves upward & fades in
        if (heroLabel) {
          heroTl.fromTo(
            heroLabel,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.7 },
            "-=0.65"
          );
        }

        // 3. Heading reveals line-by-line (masked)
        if (heroLines.length > 0) {
          heroTl.fromTo(
            heroLines,
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out" },
            "-=0.55"
          );
        }

        // 4. Paragraph moves upward with slight delay
        if (heroParagraph) {
          heroTl.fromTo(
            heroParagraph,
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.75 },
            "-=0.55"
          );
        }

        // 5. CTA enters last
        if (heroCta) {
          heroTl.fromTo(
            heroCta,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.65 },
            "-=0.45"
          );
        }

        // 6 & 7. Hero image reveals with clip-path & subtle scale-down (1.06 -> 1.0)
        if (heroImgWrap && heroImg) {
          heroTl.fromTo(
            heroImgWrap,
            { clipPath: "inset(0% 100% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.15, ease: "power3.inOut" },
            "-=1.0"
          );
          heroTl.fromTo(
            heroImg,
            { scale: 1.06 },
            { scale: 1.0, duration: 1.4, ease: "power2.out" },
            "-=1.15"
          );
        }
      }

      /* ---------- 2. STATS SECTION (Triggers only when scrolled to) ---------- */
      const statsSection = root.querySelector('[data-about-section="stats"]');
      const stat1 = root.querySelector('[data-about-stat-card="1"]');
      const stat2 = root.querySelector('[data-about-stat-card="2"]');
      const stat3 = root.querySelector('[data-about-stat-card="3"]');
      const stat4 = root.querySelector('[data-about-stat-card="4"]');
      const statNums = root.querySelectorAll<HTMLElement>("[data-about-stat-num]");

      if (statsSection) {
        const statsTl = gsap.timeline({
          scrollTrigger: {
            trigger: statsSection,
            start: "top 70%",
            once: true,
          },
        });

        // Card 1: fade + upward movement
        if (stat1) {
          statsTl.fromTo(
            stat1,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
          );
        }

        // Card 2: slight scale + fade
        if (stat2) {
          statsTl.fromTo(
            stat2,
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.6"
          );
        }

        // Card 3: upward reveal
        if (stat3) {
          statsTl.fromTo(
            stat3,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6"
          );
        }

        // Card 4: subtle horizontal reveal
        if (stat4) {
          statsTl.fromTo(
            stat4,
            { opacity: 0, x: 26 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6"
          );
        }

        // Animated count-up effect
        statNums.forEach((el, i) => {
          const target = parseFloat(el.getAttribute("data-target") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          if (target > 0) {
            const counter = { val: 0 };
            el.textContent = `0${suffix}`;
            gsap.to(counter, {
              val: target,
              duration: 2.0,
              delay: 0.15 + i * 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: statsSection,
                start: "top 70%",
                once: true,
              },
              onUpdate: () => {
                el.textContent = `${Math.round(counter.val)}${suffix}`;
              },
            });
          }
        });
      }

      /* ---------- 3. OUR STORY SECTION (Split reveal: text vs image) ---------- */
      const storySection = root.querySelector('[data-about-section="story"]');
      const storyImgWrap = root.querySelector('[data-about-story="imgWrap"]');
      const storyImg = root.querySelector('[data-about-story="img"]');
      const storyItems = root.querySelectorAll('[data-about-story="item"]');

      if (storySection) {
        const storyTl = gsap.timeline({
          scrollTrigger: {
            trigger: storySection,
            start: "top 76%",
            once: true,
          },
        });

        // Image side: subtle scale + clip-path reveal
        if (storyImgWrap && storyImg) {
          storyTl.fromTo(
            storyImgWrap,
            { clipPath: "inset(10% 0% 10% 0%)", opacity: 0 },
            { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.1, ease: "power3.inOut" }
          );
          storyTl.fromTo(
            storyImg,
            { scale: 1.08 },
            { scale: 1.0, duration: 1.3, ease: "power2.out" },
            "-=1.1"
          );
        }

        // Text side: masked / staggered upward reveal
        if (storyItems.length > 0) {
          storyTl.fromTo(
            storyItems,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power3.out" },
            "-=0.9"
          );
        }
      }

      /* ---------- 4. VALUES SECTION (Individual staggered card styles) ---------- */
      const valuesSection = root.querySelector('[data-about-section="values"]');
      const valuesHead = root.querySelector('[data-about-values="head"]');
      const valCard1 = root.querySelector('[data-about-val-card="1"]');
      const valCard2 = root.querySelector('[data-about-val-card="2"]');
      const valCard3 = root.querySelector('[data-about-val-card="3"]');

      if (valuesSection) {
        const valuesTl = gsap.timeline({
          scrollTrigger: {
            trigger: valuesSection,
            start: "top 76%",
            once: true,
          },
        });

        if (valuesHead) {
          valuesTl.fromTo(
            valuesHead,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }
          );
        }

        // Card 1: y reveal
        if (valCard1) {
          valuesTl.fromTo(
            valCard1,
            { opacity: 0, y: 38 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.4"
          );
        }

        // Card 2: scale + fade
        if (valCard2) {
          valuesTl.fromTo(
            valCard2,
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.55"
          );
        }

        // Card 3: subtle x reveal
        if (valCard3) {
          valuesTl.fromTo(
            valCard3,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
            "-=0.55"
          );
        }
      }

      /* ---------- 5. PROCESS SECTION (Sequential storytelling) ---------- */
      const processSection = root.querySelector('[data-about-section="process"]');
      const processHead = root.querySelector('[data-about-process="head"]');
      const processSteps = [1, 2, 3, 4].map((n) => ({
        step: root.querySelector(`[data-about-step="${n}"]`),
        icon: root.querySelector(`[data-about-step-icon="${n}"]`),
        num: root.querySelector(`[data-about-step-num="${n}"]`),
        texts: root.querySelectorAll(`[data-about-step-text="${n}"]`),
      }));

      if (processSection) {
        const processTl = gsap.timeline({
          scrollTrigger: {
            trigger: processSection,
            start: "top 76%",
            once: true,
          },
        });

        if (processHead) {
          processTl.fromTo(
            processHead,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }
          );
        }

        // Step by step progression
        processSteps.forEach(({ step, icon, num, texts }, idx) => {
          if (!step) return;

          const stepTl = gsap.timeline();

          // Step container fade & icon entrance
          if (icon) {
            stepTl.fromTo(
              icon,
              { scale: 0.65, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }
            );
          }
          if (num) {
            stepTl.fromTo(
              num,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
              "-=0.4"
            );
          }
          if (texts.length > 0) {
            stepTl.fromTo(
              texts,
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
              "-=0.35"
            );
          }

          processTl.add(stepTl, idx === 0 ? "-=0.3" : "-=0.25");
        });
      }

      /* ---------- 6. WHY US SECTION (Differentiated entrance) ---------- */
      const whySection = root.querySelector('[data-about-section="why"]');
      const whyBox = root.querySelector('[data-about-why="box"]');
      const whyItems = root.querySelectorAll('[data-about-why="item"]');
      const whyCheckItems = root.querySelectorAll('[data-about-why="checkItem"]');
      const whyCheckIcons = root.querySelectorAll('[data-about-why="checkIcon"]');
      const whyImgWrap = root.querySelector('[data-about-why="imgWrap"]');
      const whyImg = root.querySelector('[data-about-why="img"]');

      if (whySection) {
        const whyTl = gsap.timeline({
          scrollTrigger: {
            trigger: whySection,
            start: "top 76%",
            once: true,
          },
        });

        // Box subtle background appearance
        if (whyBox) {
          whyTl.fromTo(
            whyBox,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
          );
        }

        // Title and copy reveal
        if (whyItems.length > 0) {
          whyTl.fromTo(
            whyItems,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power3.out" },
            "-=0.55"
          );
        }

        // Feature checklist items staggered in one-by-one
        if (whyCheckItems.length > 0) {
          whyTl.fromTo(
            whyCheckItems,
            { opacity: 0, x: -18 },
            { opacity: 1, x: 0, duration: 0.55, stagger: 0.09, ease: "power3.out" },
            "-=0.4"
          );
        }

        // Check icons subtle scale-in
        if (whyCheckIcons.length > 0) {
          whyTl.fromTo(
            whyCheckIcons,
            { scale: 0.4 },
            { scale: 1, duration: 0.5, stagger: 0.09, ease: "back.out(1.8)" },
            "-=0.55"
          );
        }

        // Image smooth reveal
        if (whyImgWrap && whyImg) {
          whyTl.fromTo(
            whyImgWrap,
            { opacity: 0, x: isMobile ? 0 : 25, y: isMobile ? 25 : 0 },
            { opacity: 1, x: 0, y: 0, duration: 0.9, ease: "power3.out" },
            "-=0.8"
          );
          whyTl.fromTo(
            whyImg,
            { scale: 1.05 },
            { scale: 1.0, duration: 1.2, ease: "power2.out" },
            "-=0.9"
          );
        }
      }

      /* ---------- 7. FINAL CTA SECTION (Conclusive finish) ---------- */
      const ctaSection = root.querySelector('[data-about-section="cta"]');
      const ctaTitle = root.querySelector('[data-about-cta="title"]');
      const ctaText = root.querySelector('[data-about-cta="text"]');
      const ctaBtn = root.querySelector('[data-about-cta="btn"]');

      if (ctaSection) {
        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSection,
            start: "top 80%",
            once: true,
          },
        });

        // 1. Container subtly scales 0.97 -> 1.0
        ctaTl.fromTo(
          ctaSection,
          { opacity: 0, scale: 0.97, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power3.out" }
        );

        // 2 & 3. Heading & text fade upward
        if (ctaTitle) {
          ctaTl.fromTo(
            ctaTitle,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
            "-=0.55"
          );
        }
        if (ctaText) {
          ctaTl.fromTo(
            ctaText,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.45"
          );
        }

        // 4. Button enters last
        if (ctaBtn) {
          ctaTl.fromTo(
            ctaBtn,
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" },
            "-=0.4"
          );
        }
      }
    }, root);

    // Refresh ScrollTrigger after DOM has fully rendered
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    /* ==========================================================
       Cleanup Function
       ========================================================== */
    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [containerRef]);
}
