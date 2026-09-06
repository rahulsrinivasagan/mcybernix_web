"use client";

import { useEffect } from "react";
import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initMcybernixAnimations } from "@/components/animations";

export default function BlogPage() {
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
      <Blogs />
      <Footer />
    </main>
  );
}
