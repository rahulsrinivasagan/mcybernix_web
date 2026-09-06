import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function initMcybernixAnimations() {
  if (typeof window === "undefined") return () => {};

  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.matchMedia("(max-width: 660px)").matches;

  /* ---------- Lenis smooth scroll + GSAP ticker sync ---------- */
  let lenis: Lenis | null = null;
  const tickerCallback = (time: number) => {
    if (lenis) {
      lenis.raf(time * 1000);
    }
  };

  try {
    lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);
  } catch (err) {
    console.warn("Lenis init warning:", err);
  }

  /* ---------- anchor links ---------- */
  const anchorClickHandler = (e: Event) => {
    const a = e.currentTarget as HTMLAnchorElement;
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    try {
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const mobileMenu = document.getElementById("mobileMenu");
      if (mobileMenu) mobileMenu.classList.remove("open");

      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } catch {
      // Ignore invalid selectors
    }
  };

  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((a) => a.addEventListener("click", anchorClickHandler));

  /* ---------- hero entrance ---------- */
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  const navShell = document.getElementById("navShell");
  if (navShell) {
    heroTl.from(navShell, { y: -24, opacity: 0, duration: 0.9 });
  }
  const heroEls = document.querySelectorAll(".hero-el");
  if (heroEls.length > 0) {
    heroTl.from(
      heroEls,
      { y: 26, opacity: 0, duration: 0.9, stagger: 0.09 },
      "-=0.5",
    );
  }

  /* ---------- contact page entrance ---------- */
  const contactHeroEls = document.querySelectorAll(".contact-hero-el");
  if (contactHeroEls.length > 0) {
    gsap.fromTo(
      contactHeroEls,
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" },
    );
  }

  /* ---------- blog page entrance ---------- */
  const blogHeroEls = document.querySelectorAll(".blog-hero-el");
  if (blogHeroEls.length > 0) {
    gsap.fromTo(
      blogHeroEls,
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" },
    );
  }

  const articleHeroEls = document.querySelectorAll(".article-hero-el");
  if (articleHeroEls.length > 0) {
    gsap.fromTo(
      articleHeroEls,
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" },
    );
  }

  /* ---------- hero parallax ---------- */
  const heroBg = document.getElementById("heroBg");
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  /* ---------- generic reveals ---------- */
  const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
  reveals.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      },
    );
  });

  /* ---------- scroll-driven service card stacking ---------- */
  const svc1 = document.getElementById("svc1");
  const svc2 = document.getElementById("svc2");
  const svc3 = document.getElementById("svc3");
  const cards = [svc1, svc2, svc3].filter(Boolean) as HTMLElement[];

  cards.forEach((c, i) => {
    c.style.zIndex = (i + 1).toString();
  });

  if (!isMobile && cards.length === 3) {
    // As Card 2 scrolls up and overlaps Card 1:
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

    // As Card 3 scrolls up and overlaps Card 2:
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
  } else {
    /* mobile: natural vertical flow with staggered entrance */
    cards.forEach((c) => {
      gsap.fromTo(
        c,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: c, start: "top 92%", once: true },
        },
      );
    });
  }

  // Refresh ScrollTrigger once images/fonts finish settling
  const refreshTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);

  /* ---------- cleanup function ---------- */
  return () => {
    clearTimeout(refreshTimer);
    anchors.forEach((a) => a.removeEventListener("click", anchorClickHandler));
    gsap.ticker.remove(tickerCallback);
    if (lenis) {
      lenis.destroy();
    }
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}
