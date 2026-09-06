"use client";

import { useRef } from "react";
import styles from "./about.module.css";
import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValues";
import AboutProcess from "./AboutProcess";
import AboutWhyUs from "./AboutWhyUs";
import AboutCTA from "./AboutCTA";
import { useAboutAnimations } from "./useAboutAnimations";

export default function AboutView() {
  const containerRef = useRef<HTMLDivElement>(null);
  useAboutAnimations(containerRef);

  return (
    <div className={styles.aboutPage} ref={containerRef}>
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutValues />
      <AboutProcess />
      <AboutWhyUs />
      <AboutCTA />
    </div>
  );
}
