"use client";

import { useEffect } from "react";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initMcybernixAnimations } from "@/components/animations";

export default function ContactPage() {
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
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
