"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import styles from "./InternStories.module.css";

const caveat = Caveat({ subsets: ["latin"], display: "swap" });

const internData = [
  {
    id: 1,
    tag: "\u003c/\u003e Web Development",
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

  const nextIntern = () => {
    setActiveIndex((prev) => (prev + 1) % internData.length);
  };

  const prevIntern = () => {
    setActiveIndex((prev) => (prev - 1 + internData.length) % internData.length);
  };

  const getCardStyle = (index: number) => {
    const relIndex = (index - activeIndex + internData.length) % internData.length;
    
    if (relIndex === 0) {
      return {
        transform: 'translateX(0px) translateY(0px) scale(1)',
        zIndex: 10,
        opacity: 1,
      };
    }
    if (relIndex === 1) {
      return {
        transform: 'translateX(240px) translateY(30px) scale(0.9)',
        zIndex: 9,
        opacity: 1,
      };
    }
    if (relIndex === 2) {
      return {
        transform: 'translateX(450px) translateY(60px) scale(0.8)',
        zIndex: 8,
        opacity: 0.9,
      };
    }
    if (relIndex === 3) {
      return {
        transform: 'translateX(630px) translateY(90px) scale(0.7)',
        zIndex: 7,
        opacity: 0.8,
      };
    }
    
    return {
      transform: 'translateX(800px) translateY(120px) scale(0.6)',
      zIndex: 6,
      opacity: 0,
    };
  };

  return (
    <div className={styles.wrapper}>
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

          <button className={styles.viewAllBtn}>
            <div className={styles.viewAllIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            View All Stories
          </button>
        </div>

        <div className={styles.sliderContainer}>
          <div className={`${styles.handwriting} ${styles.hwIdeas} ${caveat.className}`}>
            Ideas<br/>People<br/>Progress
          </div>

            <div className={styles.sliderTrack}>
              {internData.map((intern, index) => (
                <div key={intern.id} className={styles.card} style={getCardStyle(index)}>
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
                  
                  <div className={styles.quoteMark}>“</div>
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
                    <button className={styles.cardArrowBtn}>
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
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className={styles.navArrows}>
                <button className={styles.navBtn} onClick={prevIntern} aria-label="Previous slide">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button className={styles.navBtn} onClick={nextIntern} aria-label="Next slide">
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
