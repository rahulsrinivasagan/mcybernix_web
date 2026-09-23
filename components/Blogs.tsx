"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import InternStories from "./InternStories";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], display: "swap" });

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

const internStories = [
  {
    name: "Siddhesh Prakash",
    role: "Full Stack Intern",
    initials: "SP",
    highlight: "Built real client features",
    quote:
      "The team gave me ownership early on, and I got to ship features that actually mattered to our clients. It felt like a real product environment from day one.",
  },
  {
    name: "Krishna Deepthi",
    role: "Full Stack Intern",
    initials: "KD",
    highlight: "Learned product thinking",
    quote:
      "I learned how design decisions connect to business outcomes. Every review session helped sharpen my thinking and gave me confidence in my work.",
  },
  {
    name: "Gayathri Krishna",
    role: "Marketing Intern",
    initials: "GK",
    highlight: "Worked across brand and strategy",
    quote:
      "The culture here is collaborative and encouraging. I was trusted with meaningful work, and my ideas were listened to, tested, and improved with guidance.",
  },
  {
    name: "Rahul S",
    role: "Full Stack Intern",
    initials: "S",
    highlight: "Explored user-centered design",
    quote:
      "I was encouraged to solve real user problems, not just make things look good. The feedback loop here made me more thoughtful and confident in my design process.",
  },
  {
    name: "Shivani D",
    role: "App Development Intern",
    initials: "D",
    highlight: "Created campaigns that mattered",
    quote:
      "Working here taught me how creative ideas turn into measurable business impact. I got to contribute to actual campaigns and see the results come together.",
  }, {
    name: "Joseph Gabriel",
    role: "App Development Intern",
    initials: "JG",
    highlight: "Created campaigns that mattered",
    quote:
      "Working here taught me how creative ideas turn into measurable business impact. I got to contribute to actual campaigns and see the results come together.",
  },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [internIndex, setInternIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  useEffect(() => {
    const updateCardWidth = () => {
      if (!carouselRef.current) return;
      const firstCard = carouselRef.current.querySelector(
        ".intern-story-card",
      ) as HTMLElement | null;
      if (!firstCard) return;
      const gap = 22;
      setCardWidth(firstCard.getBoundingClientRect().width + gap);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const maxIndex = Math.max(0, internStories.length - 3);
  const nextIntern = () => {
    setInternIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevIntern = () => {
    setInternIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="blogs-section">
      <div className="wrap">
        <header className="blogs-header">
          <div className="blogs-hero-copy">
            <span className="eyebrow blog-hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              Blogs & Intern Reviews
            </span>

            <h1 className="blogs-title">
              Insights, Ideas & <br /><span className="grad-text">Real Experiences</span>
            </h1>

            <p className="blogs-subtitle">
              Explore our latest blogs on web development, app development,
              and AI automation. Get inspired by real intern stories, learn from
              their experiences, and stay updated with what's happening at our team.
            </p>

            <div className="blog-search" aria-label="Blog search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input
                type="text"
                placeholder="Search blogs, topics or intern reviews..."
                aria-label="Search blogs, topics or intern reviews"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="popular-topics">
              <div className="topic-chips">
                {categories.map((item) => (
                  <button
                    className={`topic-chip ${activeCategory === item ? 'active' : ''}`}
                    key={item}
                    onClick={() => setActiveCategory(item)}
                    style={{ cursor: "pointer", fontFamily: "inherit" }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="blogs-hero-visual" aria-hidden="true">
            {/* Soft blob background behind the main image */}
            <div style={{ position: 'absolute', inset: '-2%', background: 'linear-gradient(135deg, #e4e7ff, #f3f0ff)', borderRadius: '48px', transform: 'rotate(-3deg)', zIndex: -1 }}></div>

            <div className="visual-card large-visual">
              <img
                alt="Professional working on laptop"
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
              />
            </div>

            <div className="floating-note note-top">
              <div className="mini-thumb">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} 
                  alt="Building architecture" 
                />
              </div>
              <div className="note-copy">
                <span style={{ color: '#4d4bd2', fontWeight: 600, fontSize: '13px', marginBottom: '2px' }}>Latest Insights</span>
                <strong>The Future of<br/>Digital Innovation</strong>
                <small style={{ marginTop: '6px' }}>May 12, 2024 &nbsp;&bull;&nbsp; 5 min read</small>
              </div>
              <button aria-label="Read more" style={{ background: '#f0f4ff', color: '#3b6cf6', boxShadow: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>

            <div className="floating-note note-side">
              <div className="mini-icon" style={{ background: '#f3efff', color: '#7b5cf5', display: 'grid', placeItems: 'center' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M4 19h16v2H4zM6 16h2v-8H6zM11 16h2v-5h-2zM16 16h2V4h-2z"/></svg>
              </div>
              <div className="note-copy">
                <span>Knowledge<br/>Drives Growth</span>
              </div>
            </div>

            <div className="floating-note note-growth">
              <div className="mini-icon" style={{ background: '#dcfce7', color: '#16a34a', display: 'grid', placeItems: 'center' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </div>
              <div className="note-copy">
                <span>Real Insights<br/>for Real Progress</span>
              </div>
            </div>
            
            <div className={caveat.className} style={{ position: 'absolute', left: '-32%', top: '4%', fontSize: '30px', color: '#8b97b1', transform: 'rotate(-8deg)', lineHeight: 1.2, zIndex: 10 }}>
              Ideas<br/>Strategies<br/>Growth
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', bottom: '-20px', right: '-35px', transform: 'rotate(45deg)' }}>
                <path d="M5 12c3-1 8-1 12 0" />
                <path d="M12 7l5 5-5 5" />
              </svg>
            </div>
          </div>
        </header>

        <div className="blog-toolbar reveal" id="articles" style={{ justifyContent: "flex-start", marginBottom: "20px" }}>
          <div>
            <span className="eyebrow">
              <span className="dot"></span>Journal
            </span>
            <h2>
              Explore our latest <span className="grad-text">thinking.</span>
            </h2>
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
      <InternStories />
    </section>
  );
}
