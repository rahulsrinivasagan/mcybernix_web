"use client";

import { useEffect, useRef, useState } from "react";
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
            <div className="visual-hero-bg">
              <img
                alt="Desk setup with laptop and notebook"
                src="/images/blog_hero_bg.jpg"
              />
              <div className="bg-gradient-overlay"></div>
            </div>

            <div className="floating-blog-card card-web-dev">
              <div className="fbc-img">
                <img src="/images/blog-1.jpg" alt="Web Development" />
              </div>
              <div className="fbc-content">
                <span className="fbc-tag tag-blue">Web Development</span>
                <h4>Building Scalable Web Apps with Next.js</h4>
                <p>Learn how we structure modern web applications for performance and scalability.</p>
                <div className="fbc-meta">
                  <div className="fbc-author">
                    <img src="/images/logo.png" alt="Team DevNest" />
                    <div>
                      <strong>Team DevNest</strong>
                      <span>Apr 12, 2025</span>
                    </div>
                  </div>
                  <button aria-label="Read more">→</button>
                </div>
              </div>
            </div>

            <div className="floating-blog-card card-ai">
              <div className="fbc-img">
                <img src="/images/blog-2.jpg" alt="AI & Automation" />
              </div>
              <div className="fbc-content">
                <span className="fbc-tag tag-purple">AI & Automation</span>
                <h4>How We Use AI to Build Smarter Solutions</h4>
                <p>From chatbots to workflow automation, explore how AI is shaping our products and processes.</p>
                <div className="fbc-meta">
                  <div className="fbc-author">
                    <img src="/images/logo.png" alt="Team DevNest" />
                    <div>
                      <strong>Team DevNest</strong>
                      <span>Apr 5, 2025</span>
                    </div>
                  </div>
                  <button aria-label="Read more">→</button>
                </div>
              </div>
            </div>

            <div className="floating-blog-card card-intern">
              <div className="fbc-content">
                <span className="fbc-tag tag-blue">Intern Reviews</span>
                <div className="intern-row">
                  <div className="intern-text">
                    <h4>My Internship Journey at DevNest</h4>
                    <p>"A supportive team, real projects, and a lot of learning!"</p>
                  </div>
                  <div className="intern-img">
                    <img src="/images/blog-3.jpg" alt="Intern Working" />
                  </div>
                </div>
                <div className="fbc-meta">
                  <div className="fbc-author">
                    <div className="intern-avatar-small">AS</div>
                    <div>
                      <strong>Ananya S</strong>
                      <span>Frontend Intern</span>
                    </div>
                  </div>
                  <button aria-label="Read more">→</button>
                </div>
              </div>
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

        <section
          className="intern-stories reveal"
          aria-labelledby="intern-stories-heading"
        >
          <div className="intern-stories-header">
            <span className="eyebrow intern-eyebrow">
              <span className="dot"></span>Intern stories
            </span>
            <h2 id="intern-stories-heading">
              What our interns say about{" "}
              <span className="grad-text">working here.</span>
            </h2>
            <p>
              Real feedback from the people learning, building, and growing with
              MCybernix every day.
            </p>
          </div>

          <div className="intern-carousel-shell">
            <button
              className="intern-carousel-btn intern-carousel-btn-left"
              onClick={prevIntern}
              type="button"
              aria-label="Previous intern stories"
            >
              ←
            </button>

            <div className="intern-carousel-viewport" ref={carouselRef}>
              <div
                className="intern-carousel-track"
                style={{
                  transform: `translateX(-${internIndex * cardWidth}px)`,
                }}
              >
                {internStories.map((story) => (
                  <article className="intern-story-card" key={story.name}>
                    <div className="intern-story-top">
                      <div className="intern-avatar" aria-hidden="true">
                        {story.initials}
                      </div>
                      <div className="intern-story-meta">
                        <h3>{story.name}</h3>
                        <p>{story.role}</p>
                      </div>
                    </div>

                    <p className="intern-quote">“{story.quote}”</p>
                    <span className="intern-badge">{story.highlight}</span>
                  </article>
                ))}
              </div>
            </div>

            <button
              className="intern-carousel-btn intern-carousel-btn-right"
              onClick={nextIntern}
              type="button"
              aria-label="Next intern stories"
            >
              →
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
