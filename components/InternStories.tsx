"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import styles from "./InternStories.module.css";

const caveat = Caveat({ subsets: ["latin"], display: "swap" });

const internData = [
  {
    id: 1,
    tag: "</> Web Development",
    tagColor: "web",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
    overlayText: "Learn\nCreate\nGrow",
    quote: "My internship at Mcybernix gave me real-world exposure. I worked on live projects, learned modern technologies, and gained the confidence to build independently.",
    author: {
      name: "Priya S.",
      role: "Frontend Development Intern",
      date: "( Jan 2025 - Apr 2025 )",
      avatar: "/images/avatars/avatar-1.jpg"
    }
  },
  {
    id: 2,
    tag: "✨ AI & Automation",
    tagColor: "ai",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=600&fit=crop",
    overlayText: "Curious\nAlways\nBuilding",
    quote: "\"I got to work on exciting automation projects and explored how AI can solve real business problems. The guidance from the team made the learning experience amazing.\"",
    author: {
      name: "Arjun K.",
      role: "AI/ML Intern",
      date: "( Feb 2025 - May 2025 )",
      avatar: "/images/avatars/avatar-2.jpg"
    }
  },
  {
    id: 3,
    tag: "🎨 UI/UX Design",
    tagColor: "design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
    overlayText: "Design\nFor\nImpact",
    quote: "\"This internship helped me turn my ideas into meaningful designs. I learned to think from a user's perspective and improved my creativity through real feedback.\"",
    author: {
      name: "Sneha R.",
      role: "UI/UX Design Intern",
      date: "( Jan 2025 - Apr 2025 )",
      avatar: "/images/avatars/avatar-3.jpg"
    }
  },
  {
    id: 4,
    tag: "📱 App Development",
    tagColor: "app",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=600&fit=crop",
    overlayText: "Build\nPlay\nRepeat",
    quote: "\"I loved building and testing features for a real mobile app. The supportive mentors and collaborative environment made the journey truly memorable.\"",
    author: {
      name: "Karthik M.",
      role: "App Development Intern",
      date: "( Mar 2025 - Jun 2025 )",
      avatar: "/images/avatars/avatar-4.jpg"
    }
  }
];

export default function InternStories() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Single source of truth next and prev handlers
  const nextIntern = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % internData.length);
  }, []);

  const prevIntern = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + internData.length) % internData.length);
  }, []);

  // Touch Swipe Gesture Handling (Mobile & Tablet)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const touchDeltaY = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchDeltaX.current = 0;
      touchDeltaY.current = 0;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null && touchStartY.current !== null && e.touches.length === 1) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
      touchDeltaY.current = e.touches[0].clientY - touchStartY.current;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const absX = Math.abs(touchDeltaX.current);
    const absY = Math.abs(touchDeltaY.current);
    const SWIPE_THRESHOLD = 40;

    // Trigger horizontal swipe if horizontal movement is dominant
    if (absX > SWIPE_THRESHOLD && absX > absY) {
      if (touchDeltaX.current < 0) {
        nextIntern(); // Swipe Left -> Next Story
      } else {
        prevIntern(); // Swipe Right -> Prev Story
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchDeltaX.current = 0;
    touchDeltaY.current = 0;
  };

  // Mouse Wheel / Trackpad Scroll Handling (Desktop)
  const lastWheelTime = useRef<number>(0);

  useEffect(() => {
    const sliderEl = sliderRef.current;
    if (!sliderEl) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      // Cooldown to prevent rapid multi-slide skip on one scroll flick
      if (now - lastWheelTime.current < 380) return;

      const deltaX = e.deltaX;
      const deltaY = e.deltaY;

      // Handle horizontal trackpad scroll or vertical mouse wheel scroll over the card track
      if (Math.abs(deltaX) > 25 && Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        lastWheelTime.current = now;
        if (deltaX > 0) {
          nextIntern();
        } else {
          prevIntern();
        }
      } else if (Math.abs(deltaY) > 35) {
        // Vertical wheel over slider advances card
        lastWheelTime.current = now;
        if (deltaY > 0) {
          nextIntern();
        } else {
          prevIntern();
        }
      }
    };

    sliderEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => sliderEl.removeEventListener("wheel", handleWheel);
  }, [nextIntern, prevIntern]);

  const getCardStyle = (index: number): React.CSSProperties => {
    const relIndex = (index - activeIndex + internData.length) % internData.length;

    if (relIndex === 0) {
      return {
        transform: "translateX(0px) translateY(0px) scale(1)",
        zIndex: 10,
        opacity: 1,
      };
    }
    if (relIndex === 1) {
      return {
        transform: "translateX(var(--base-offset)) translateY(var(--y-step)) scale(0.9)",
        zIndex: 9,
        opacity: 1,
      };
    }
    if (relIndex === 2) {
      return {
        transform: "translateX(calc(var(--base-offset) * 1.85)) translateY(calc(var(--y-step) * 2)) scale(0.8)",
        zIndex: 8,
        opacity: "var(--op-2, 0.9)" as unknown as number,
      };
    }
    if (relIndex === 3) {
      return {
        transform: "translateX(calc(var(--base-offset) * 2.6)) translateY(calc(var(--y-step) * 3)) scale(0.7)",
        zIndex: 7,
        opacity: "var(--op-3, 0.8)" as unknown as number,
      };
    }

    return {
      transform: "translateX(calc(var(--base-offset) * 3.3)) translateY(calc(var(--y-step) * 4)) scale(0.6)",
      zIndex: 6,
      opacity: 0,
    };
  };

  return (
    <div className={styles.wrapper} id="intern-stories">
      <div className={styles.headerContent}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            INTERN STORIES
          </div>
          
          <h2 className={styles.title}>
            Real People.<br />
            Real Experiences.<br />
            <span className={styles.titleHighlight}>Real Growth.</span>
          </h2>
          
          <p className={styles.description}>
            Hear from our interns about their journey, challenges, learnings, and how their time at Mcybernix Solutions is shaping their future.
          </p>

          <a href="/contact" className={styles.viewAllBtn} style={{ textDecoration: "none" }}>
            <div className={styles.viewAllIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            Join Our Team
          </a>
        </div>

        <div 
          className={styles.sliderContainer}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y" }}
          aria-roledescription="carousel"
          aria-label="Intern Stories Carousel"
        >
          <div className={`${styles.handwriting} ${styles.hwIdeas} ${caveat.className}`} aria-hidden="true">
            Ideas<br/>People<br/>Progress
          </div>

          <div className={styles.sliderTrack}>
            {internData.map((intern, index) => (
              <div 
                key={intern.id} 
                className={styles.card} 
                style={getCardStyle(index)}
                aria-hidden={index !== activeIndex}
              >
                <div className={styles.imageWrapper}>
                  <div className={`${styles.cardTag} ${styles[intern.tagColor]}`}>
                    {intern.tag}
                  </div>
                  <div className={`${styles.hwImageText} ${caveat.className}`}>
                    {intern.overlayText}
                  </div>
                  <Image
                    src={intern.image}
                    alt={`${intern.author.name} Intern Story`}
                    width={280}
                    height={240}
                    className={styles.cardImage}
                    unoptimized
                  />
                </div>
                
                <div className={styles.quoteMark} aria-hidden="true">“</div>
                <p className={styles.cardText}>{intern.quote}</p>
                
                <div className={styles.cardFooter}>
                  <Image 
                    src={intern.author.avatar} 
                    alt={intern.author.name} 
                    width={40} 
                    height={40} 
                    className={styles.authorImage} 
                  />
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{intern.author.name}</div>
                    <div className={styles.authorRole}>{intern.author.role}</div>
                    <div className={styles.authorDate}>{intern.author.date}</div>
                  </div>
                  <button 
                    className={styles.cardArrowBtn} 
                    onClick={nextIntern}
                    aria-label="View next intern story"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sliderControls}>
            <div className={styles.dots}>
              {internData.map((_, i) => (
                <button 
                  key={i} 
                  className={`${styles.dot} ${i === activeIndex ? styles.active : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to intern story ${i + 1}`}
                />
              ))}
            </div>
            <div className={styles.navArrows}>
              <button className={styles.navBtn} onClick={prevIntern} aria-label="Previous intern story">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button className={styles.navBtn} onClick={nextIntern} aria-label="Next intern story">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
