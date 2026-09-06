"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogs } from "@/components/Blogs";
import { initMcybernixAnimations } from "@/components/animations";

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const blog = blogs.find((item) => item.slug === slug);

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

  if (!blog) {
    return (
      <main>
        <Navbar />
        <div className="article-missing">
          <h1>Article not found</h1>
          <a className="btn btn-primary" href="/blog">
            Back to journal
          </a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <article className="article-page">
        <header className="article-header">
          <div className="wrap article-header-inner">
            <span className="eyebrow article-hero-el">
              <span className="dot"></span>
              {blog.category}
            </span>
            <h1 className="article-title article-hero-el">{blog.title}</h1>
            <p className="article-excerpt article-hero-el">{blog.excerpt}</p>
            <div className="meta article-meta article-hero-el">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
              <span>MCybernix Editorial</span>
            </div>
          </div>
        </header>

        <div className="wrap">
          <div className="article-cover reveal">
            <img
              alt={blog.imageAlt}
              height={768}
              src={blog.image}
              width={1024}
            />
          </div>

          <div className="article-layout">
            <aside className="article-aside reveal">
              <span className="article-aside-label">In this article</span>
              {blog.sections.map((section) => (
                <span key={section.heading}>{section.heading}</span>
              ))}
            </aside>
            <div className="article-body reveal">
              <p className="article-opening">{blog.excerpt}</p>
              {blog.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
              <a className="btn btn-primary article-cta" href="/contact">
                Talk to our team <span className="ic">→</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
