import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutView from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About Us | Mcybernix Solutions",
  description:
    "Meet Mcybernix Solutions, a Chennai technology company building digital products, automation and software that help businesses grow.",
};

export default function AboutPage() {
  return (
    <>
      <header style={{ background: "#ffffff", paddingBottom: "16px" }}>
        <Navbar />
      </header>
      <main>
        <AboutView />
      </main>
      <Footer />
    </>
  );
}
