"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { initMcybernixAnimations } from "@/components/animations";

export default function HomePage() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const timer = window.setTimeout(() => {
      cleanup = initMcybernixAnimations();
    }, 50);

    return () => {
      window.clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
