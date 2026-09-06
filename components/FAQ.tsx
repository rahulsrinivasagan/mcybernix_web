"use client";

import { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "Is mobile-friendly design important?",
    answer:
      "Yes, responsive design ensures your site automatically adjusts to fit mobile phones and tablets. This improves user experience and helps your search engine rankings.",
  },
  {
    id: 2,
    question: "Can I edit my website without coding knowledge?",
    answer:
      "Yes, if your site is built on a Content Management System like WordPress, you can easily change text, swap images, and add blog posts without knowing how to code.",
  },
  {
    id: 3,
    question: "What are the recurring costs?",
    answer:
      "You must pay yearly for your domain name and web hosting. Other ongoing costs can include SSL security certificates and premium plugin or theme licenses.",
  },
  {
    id: 4,
    question: "How long does it take to build a website?",
    answer:
      "A standard business site takes about two to eight weeks. Simple sites using a content management system (CMS) can launch in a few days, while complex web portals take a month or more.",
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
      <div className="faq-column">{faqItems.slice(0, 2).map(renderItem)}</div>
      <div className="faq-column">{faqItems.slice(2).map(renderItem)}</div>
    </div>
  );
}
