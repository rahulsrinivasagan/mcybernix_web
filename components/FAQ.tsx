"use client";

import { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on the scope and complexity of the project. A custom web application or landing page typically takes 2–4 weeks, while complex mobile apps or custom AI workflow automations take 4–8 weeks. We provide a detailed project roadmap with clear milestones before starting.",
  },
  {
    id: 2,
    question: "What is AI Automation, and how can it benefit my business?",
    answer:
      "AI Automation uses modern AI tools, machine learning, and custom API integrations to automate repetitive, manual business processes. This helps your team reduce manual effort by up to 80%, cut operational costs, and accelerate workflows like customer support, data entry, and lead processing.",
  },
  {
    id: 3,
    question: "Can I update and edit my website on my own after launch?",
    answer:
      "Yes! We build with intuitive Content Management Systems (CMS) or user-friendly admin dashboards so you can easily update text, manage images, add blog posts, or publish new products without needing any coding knowledge.",
  },
  {
    id: 4,
    question: "Do you build mobile apps for both iOS and Android?",
    answer:
      "Absolutely. We specialize in cross-platform mobile app development (using modern frameworks like React Native or Flutter), allowing us to deliver high-performance, native-like iOS and Android apps simultaneously—saving you time and development budget.",
  },
  {
    id: 5,
    question: "What are the recurring costs after a project is completed?",
    answer:
      "Recurring costs generally include web hosting, domain registration, and third-party API usage (like OpenAI or database servers) if applicable. We offer flexible post-launch support and maintenance packages to handle security updates, backups, and feature enhancements.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const renderItem = (item: (typeof faqItems)[number]) => (
    <div
      key={item.id}
      className={`faq-item ${openId === item.id ? "open" : ""}`}
    >
      <button
        type="button"
        className="faq-question"
        onClick={() => toggleAccordion(item.id)}
        aria-expanded={openId === item.id}
      >
        <span>{item.question}</span>
        <span className="faq-icon">+</span>
      </button>
      {openId === item.id && (
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-grid">
      <div className="faq-column">{faqItems.slice(0, 3).map(renderItem)}</div>
      <div className="faq-column">{faqItems.slice(3).map(renderItem)}</div>
    </div>
  );
}
