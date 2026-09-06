"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export type Blog = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogs: Blog[] = [
  {
    slug: "scalable-web-applications",
    category: "Web Development",
    date: "May 12, 2025",
    readTime: "5 min read",
    title: "10 Best Practices for Building Scalable Web Applications",
    excerpt:
      "A practical guide to creating a foundation that stays fast, reliable, and ready for what comes next.",
    image: "/images/blog-1.jpg",
    imageAlt: "Misty mountain lake at dusk",
    sections: [
      {
        heading: "Start with a clear boundary",
        paragraphs: [
          "Scalability is rarely solved by adding more servers at the end. It starts with knowing what each part of a product is responsible for, so a change in one area does not quietly create problems somewhere else.",
          "Keep domain logic separate from delivery details, define stable interfaces between services, and make the simplest useful architecture your first version. Clear boundaries give a growing team room to move.",
        ],
      },
      {
        heading: "Treat performance as a product feature",
        paragraphs: [
          "Fast experiences build trust. Measure the moments users actually feel: first contentful paint, route transitions, search responses, and the time it takes to complete a key action.",
          "Small decisions compound. Compress images, stream what can wait, cache stable data, and remove work from the critical path before reaching for complexity.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-business",
    category: "AI Automation",
    date: "May 5, 2025",
    readTime: "6 min read",
    title: "How AI Automation Can Transform Your Business",
    excerpt:
      "Find the repeatable work worth automating and turn more of your team's time toward meaningful progress.",
    image: "/images/blog-2.jpg",
    imageAlt: "Aurora over a mountain ridge",
    sections: [
      {
        heading: "Find the repeatable signal",
        paragraphs: [
          "The best automation opportunities are not always the biggest tasks. Look for work that repeats, follows a recognisable pattern, and consumes attention without requiring a uniquely human decision every time.",
          "Map the current workflow first. A short conversation with the people doing the work often reveals the handoffs, exceptions, and hidden rules that a diagram misses.",
        ],
      },
      {
        heading: "Keep people in the loop",
        paragraphs: [
          "Good AI automation gives people better context and more time; it does not make accountability disappear. Use confidence thresholds, review steps, and clear fallbacks for uncertain results.",
          "Start with one measurable workflow, learn from its edge cases, and expand only when the team can explain why the system is trustworthy.",
        ],
      },
    ],
  },
  {
    slug: "team-productivity-tools",
    category: "Productivity",
    date: "Apr 28, 2025",
    readTime: "4 min read",
    title: "Top Tools That Boost Team Productivity in 2025",
    excerpt:
      "A considered toolkit for clearer collaboration, calmer workflows, and better work across distributed teams.",
    image: "/images/blog-3.jpg",
    imageAlt: "Soft sunset above the clouds",
    sections: [
      {
        heading: "Tools should reduce cognitive load",
        paragraphs: [
          "A productivity stack is working when people spend less time asking where something lives, what happens next, or whether a task is still relevant. Every tool should make a decision easier to see.",
          "Choose a small number of connected tools with clear ownership. The goal is not more dashboards; it is fewer places to reconstruct the truth.",
        ],
      },
      {
        heading: "Make the system visible",
        paragraphs: [
          "Teams move faster when priorities, blockers, and decisions are easy to find. A weekly reset, a lightweight project board, and consistent naming can do more than another feature-heavy platform.",
          "Review the stack as a team every quarter. Keep what supports the way you work today and let go of what creates friction.",
        ],
      },
    ],
  },
  {
    slug: "digital-idea-to-product",
    category: "Digital Strategy",
    date: "Apr 18, 2025",
    readTime: "7 min read",
    title: "From Digital Idea to Product People Love",
    excerpt:
      "The small strategic decisions that help a promising idea become a useful, durable digital product.",
    image: "/images/proj-shop.jpg",
    imageAlt: "A modern online storefront interface",
    sections: [
      {
        heading: "Begin with the problem, not the feature",
        paragraphs: [
          "Strong products make a specific problem feel smaller. Before shaping a roadmap, get close to the people experiencing that problem and listen for what they already try to do.",
          "A focused first release is not a compromise. It is a way to learn quickly enough that the product can become more useful with every iteration.",
        ],
      },
      {
        heading: "Create a rhythm for learning",
        paragraphs: [
          "Set a regular cadence for shipping, observing, and deciding. The most valuable product teams make space for evidence alongside instinct.",
          "When a decision is reversible, make it quickly. Save the deeper debate for choices that shape the product's character or limit future options.",
        ],
      },
    ],
  },
  {
    slug: "effortless-mobile-experiences",
    category: "App Development",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    title: "Designing Mobile Experiences That Feel Effortless",
    excerpt:
      "Make every interaction feel intentional with a product experience built around real user needs.",
    image: "/images/proj-edu.jpg",
    imageAlt: "An education platform displayed on a laptop",
    sections: [
      {
        heading: "Design for the moment",
        paragraphs: [
          "Mobile products are used in motion, between other things, and often with limited attention. Put the primary action where the thumb and the user's intention already are.",
          "Remove decisions that do not help the user progress. Good mobile design feels calm because the interface has already done the work of prioritising.",
        ],
      },
      {
        heading: "Make feedback immediate",
        paragraphs: [
          "Every tap should have a legible response. Use states, motion, and plain language to reassure people that the product understood them and knows what to do next.",
          "Test with real devices and real conditions. A beautiful flow in a quiet office can feel very different on a bright street with one hand occupied.",
        ],
      },
    ],
  },
  {
    slug: "responsible-ai-workflows",
    category: "AI Automation",
    date: "Mar 26, 2025",
    readTime: "8 min read",
    title: "Building Responsible AI Into Everyday Workflows",
    excerpt:
      "Useful automation starts with trust, thoughtful guardrails, and a clear understanding of the work it supports.",
    image: "/images/svc-ai.jpg",
    imageAlt: "Abstract illustration representing AI automation",
    sections: [
      {
        heading: "Trust is part of the interface",
        paragraphs: [
          "People need to understand when AI is involved, what information it used, and how they can correct it. Transparency is not a legal afterthought; it is a product quality.",
          "Give users a clear way to inspect, edit, and undo. These controls turn an opaque output into a collaborative step in a familiar workflow.",
        ],
      },
      {
        heading: "Build guardrails before scale",
        paragraphs: [
          "Define what the system must never do, what requires review, and how failures are reported. A small set of explicit rules creates a more dependable foundation than vague confidence.",
          "Responsible automation is an ongoing practice. Monitor outcomes, invite feedback, and update the workflow as the people around it learn more.",
        ],
      },
    ],
  },
];

const categories = [
  "All",
  ...Array.from(new Set(blogs.map((blog) => blog.category))),
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  useEffect(() => {
    const cards = document.querySelectorAll(".blogs-grid .post");
    gsap.fromTo(
      cards,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.07,
        ease: "power3.out",
        overwrite: true,
      },
    );
  }, [activeCategory]);

  return (
    <section className="blogs-section">
      <div className="blogs-header">
        <span className="eyebrow blog-hero-el">
          <span className="dot"></span>Ideas in motion
        </span>
        <h1 className="blogs-title blog-hero-el">
          Perspectives for <span className="grad-text">building better.</span>
        </h1>
        <p className="blogs-subtitle blog-hero-el">
          Practical thinking on technology, product, and the little decisions
          that help ambitious teams move forward.
        </p>
      </div>

      <div className="wrap">
        <div className="blog-feature reveal">
          <div className="blog-feature-image">
            <img
              alt="A team collaborating around a digital product"
              height={768}
              src="/images/proj-fin.jpg"
              width={1024}
            />
          </div>
          <div className="blog-feature-copy">
            <span className="tag">Featured perspective</span>
            <h2>Technology should make the next step feel possible.</h2>
            <p>
              We share the patterns, lessons, and useful questions behind
              digital work that creates lasting momentum.
            </p>
            <div className="meta">
              <span>MCybernix Editorial</span>
              <span>8 min read</span>
            </div>
            <a
              className="circ"
              href="#articles"
              aria-label="Read featured article"
            >
              →
            </a>
          </div>
        </div>

        <div className="blog-toolbar reveal" id="articles">
          <div>
            <span className="eyebrow">
              <span className="dot"></span>Journal
            </span>
            <h2>
              Explore our latest <span className="grad-text">thinking.</span>
            </h2>
          </div>
          <div
            className="blog-filters"
            aria-label="Filter articles by category"
          >
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "active" : ""}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blogs-grid">
          {filteredBlogs.map((blog) => (
            <a
              className="post reveal"
              href={`/blog/${blog.slug}`}
              key={blog.title}
            >
              <div className="post-img">
                <span className="tag">{blog.category}</span>
                <img
                  alt={blog.imageAlt}
                  height={768}
                  loading="lazy"
                  src={blog.image}
                  width={1024}
                />
              </div>
              <div className="post-body">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <div className="meta">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
