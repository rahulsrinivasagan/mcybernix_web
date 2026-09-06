"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import FAQ from "./FAQ";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title contact-hero-el">
          We're Here To <span className="grad-text">Help!</span>
        </h1>
        <p className="contact-subtitle contact-hero-el">
          We want to hear from you. Let us know how we can help.
        </p>
      </div>

      <div className="wrap">
        <div className="contact-main">
          <div className="contact-left reveal">
            <ContactForm />
          </div>
          <div className="contact-right reveal">
            <ContactInfo />
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="wrap">
          <div className="faq-header reveal">
            <h2>Frequently Asked Questions</h2>
            <p>
              Everything you need to know before enrolling. Clear answers, no
              fluff.
            </p>
          </div>
          <div className="reveal">
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
}
