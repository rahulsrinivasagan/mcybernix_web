import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutView from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About Us | MCybernix Solutions",
  description:
    "At MCybernix Solutions, we combine engineering excellence, AI intelligence, and human-centered design to help startups and enterprises scale, automate, and lead.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutView />
      <Footer />
    </main>
  );
}
