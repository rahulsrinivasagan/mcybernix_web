"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  stat: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "nextmove",
    name: "Rohit Sharma",
    role: "Founder & CEO",
    company: "Nextmove",
    avatar: "R",
    quote:
      "MCybernix transformed our vision into an extraordinary digital experience. Their precision, speed, and design craftsmanship set a new benchmark for our industry.",
    stat: "3.2x User Growth",
  },
  {
    id: "pulseworks",
    name: "Ananya Verma",
    role: "Head of Operations",
    company: "PulseWorks",
    avatar: "A",
    quote:
      "Their AI automation eliminated hundreds of hours of manual overhead. Thoughtful engineering, lightning-fast execution, and seamless integration from day one.",
    stat: "85% Hours Saved",
  },
  {
    id: "codelab",
    name: "Daniel Cruz",
    role: "CEO & Founder",
    company: "Codelab",
    avatar: "D",
    quote:
      "Working with MCybernix felt like expanding our executive team. They shipped our mobile app ahead of deadline with unmatched visual elegance.",
    stat: "Shipped 2 Weeks Early",
  },
  {
    id: "visionary",
    name: "Elena Rostova",
    role: "VP Product",
    company: "Visionary",
    avatar: "E",
    quote:
      "The scalability and clean architecture they delivered allowed us to handle a 10x surge in user traffic without a single hiccup.",
    stat: "99.99% Uptime",
  },
];

// Snappy, reduced timer duration (3.5s) per client testimonial
const TIMER_DURATION = 3.5;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerBarRef = useRef<HTMLDivElement>(null);
  const timerTweenRef = useRef<gsap.core.Tween | null>(null);

  const current = testimonials[index];
  const words = current.quote.split(" ");

  // Trigger blurred word-by-word animation
  const runWordBlurAnimation = () => {
    if (!quoteRef.current) return;
    const wordElements = quoteRef.current.querySelectorAll(".tst-word");
    if (wordElements.length === 0) return;

    gsap.killTweensOf(wordElements);

    gsap.fromTo(
      wordElements,
      {
        opacity: 0,
        filter: "blur(14px)",
        y: 10,
        scale: 0.97,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        scale: 1,
        duration: 0.38,
        stagger: 0.024,
        ease: "power2.out",
      }
    );
  };

  // Start the decreasing progress line countdown (continuous, no pause on hover/click)
  const startCountdownTimer = () => {
    if (timerTweenRef.current) {
      timerTweenRef.current.kill();
    }
    if (!timerBarRef.current) return;

    // Reset progress bar to full width
    gsap.set(timerBarRef.current, { scaleX: 1, transformOrigin: "left center" });

    // Animate scaleX decreasing smoothly from 1 to 0
    timerTweenRef.current = gsap.to(timerBarRef.current, {
      scaleX: 0,
      duration: TIMER_DURATION,
      ease: "none",
      transformOrigin: "left center",
      onComplete: () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      },
    });
  };

  // ScrollTrigger: start as soon as user moves into the section
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        setIsActive(true);
      },
    });

    return () => {
      st.kill();
      if (timerTweenRef.current) timerTweenRef.current.kill();
    };
  }, []);

  // When active or index changes: play blur entry animation and countdown timer immediately
  useEffect(() => {
    if (!isActive) return;

    runWordBlurAnimation();
    startCountdownTimer();

    return () => {
      if (timerTweenRef.current) {
        timerTweenRef.current.kill();
      }
    };
  }, [index, isActive]);

  // Handle client selection: immediate switch, zero pause, immediate countdown restart
  const handleSelectClient = (i: number) => {
    if (i === index) return;
    setIndex(i);
  };

  return (
    <section className="sec tst-unique" id="testimonials" ref={containerRef}>
      <div className="wrap">
        <div className="tst-header">
          <div>
            <span className="eyebrow">
              <span className="dot"></span>Clients Love Us
            </span>
            <h2>
              What Our <span className="grad-text">Clients</span> Say About Us
            </h2>
          </div>

          <div className="tst-trust-pill">
            <span className="stars">★★★★★</span>
            <span>5.0 Verified Client Reviews</span>
          </div>
        </div>

        <div className="tst-canvas">
          <div className="tst-quote-box">
            <span className="tst-glyph">“</span>
            <p className="tst-quote" ref={quoteRef}>
              {words.map((word, i) => (
                <span
                  key={`${current.id}-${i}-${word}`}
                  className="tst-word"
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Decreasing progress line indicator */}
          <div className="tst-timer-track">
            <div className="tst-timer-line" ref={timerBarRef}></div>
          </div>

          <div className="tst-bottom-bar">
            <div className="tst-clients-selector">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  className={`tst-client-tab ${i === index ? "active" : ""}`}
                  type="button"
                  onClick={() => handleSelectClient(i)}
                  aria-label={`View testimonial by ${item.name}`}
                >
                  <span className="tst-tab-av">{item.avatar}</span>
                  <div className="tst-tab-text">
                    <strong>{item.name}</strong>
                    <span>{item.company}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="tst-verified-meta">
              <span className="badge">✓ Verified Project</span>
              <span><strong>{current.stat}</strong></span>
              <span>·</span>
              <span>{current.role}, {current.company}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
