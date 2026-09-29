"use client";

import { useState, useEffect } from "react";

const serviceOptions = [
  "Web Development",
  "App Development",
  "AI Automation",
  "Other Service",
];
const budgetOptions = [
  "Under ₹5,000",
  "₹5,000 - ₹15,000",
  "₹15,000 - ₹50,000",
  "₹50,000+",
  "Not sure yet",
];
const timelineOptions = [
  "ASAP (within 2 weeks)",
  "1 month",
  "3 months",
  "6 months",
  "Flexible timeline",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  date: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  date: "",
  message: "",
};

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showSuccessModal) {
        setShowSuccessModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSuccessModal]);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setShowSuccessModal(true);
        setFormData(initialFormData);
        setStep(1);
      } else {
        setErrorMessage(
          data?.error || "Unable to send your message at this time. Please try again or reach out directly."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canContinue =
    step === 1
      ? Boolean(formData.name && formData.email && formData.phone)
      : step === 2
        ? Boolean(formData.service && formData.budget && formData.timeline)
        : Boolean(formData.message);

  return (
    <>
      <div className="contact-form-container multi-step-form">
        <div className="form-step-header">
          <div>
            <span className="form-eyebrow">Project enquiry</span>
            <h3>
              {step === 1
                ? "Tell us about you"
                : step === 2
                  ? "Project details"
                  : "Almost there"}
            </h3>
          </div>
          <span className="step-count">STEP {step} OF 3</span>
        </div>
        <p className="step-description">
          {step === 1
            ? "Share your contact details and our team will reach out."
            : step === 2
              ? "Help us understand what you are looking to build."
              : "Add any context that will help us prepare for the conversation."}
        </p>
        <div className="step-progress" aria-label={`Step ${step} of 3`}>
          {[1, 2, 3].map((item) => (
            <span key={item} className={item <= step ? "complete" : ""} />
          ))}
        </div>

        {errorMessage && (
          <div 
            style={{
              padding: "12px 18px",
              borderRadius: "12px",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#dc2626",
              fontSize: "13.5px",
              marginBottom: "18px",
              fontWeight: 500,
            }}
            role="alert"
          >
            ⚠️ {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          {step === 1 && (
            <div className="step-fields">
              <Field
                label="Name"
                id="name"
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(value) => updateField("name", value)}
                required
              />
              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(value) => updateField("email", value)}
                required
              />
              <Field
                label="Phone"
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(value) => updateField("phone", value)}
                required
                wide
              />
            </div>
          )}

          {step === 2 && (
            <div className="choice-fields">
              <ChoiceGroup
                label="Type of service"
                options={serviceOptions}
                value={formData.service}
                onChange={(value) => updateField("service", value)}
              />
              <ChoiceGroup
                label="Estimated budget"
                options={budgetOptions}
                value={formData.budget}
                onChange={(value) => updateField("budget", value)}
              />
              <ChoiceGroup
                label="Project timeline"
                options={timelineOptions}
                value={formData.timeline}
                onChange={(value) => updateField("timeline", value)}
                wide
              />
            </div>
          )}

          {step === 3 && (
            <div className="step-fields">
              <Field
                label="Project message"
                id="message"
                placeholder="Tell us a little about your project..."
                value={formData.message}
                onChange={(value) => updateField("message", value)}
                textarea
                required
                wide
              />
              <Field
                label="Preferred call date"
                id="date"
                type="date"
                value={formData.date}
                onChange={(value) => updateField("date", value)}
                wide
              />
            </div>
          )}

          <div className="form-navigation">
            {step > 1 ? (
              <button
                type="button"
                className="form-back"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            ) : (
              <span />
            )}
            {step < 3 ? (
              <button
                type="button"
                className="btn btn-primary form-next"
                onClick={() => setStep(step + 1)}
                disabled={!canContinue}
              >
                Next: {step === 1 ? "Project details" : "Additional info"}{" "}
                <span aria-hidden="true">→</span>
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary form-next"
                disabled={!canContinue || isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send enquiry"}{" "}
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Polished Success Modal */}
      {showSuccessModal && (
        <div 
          className="modal-backdrop" 
          onClick={() => setShowSuccessModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div 
            className="modal-card" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="modal-title" id="success-modal-title">
              Message Sent Successfully
            </h3>
            <p className="modal-desc">
              Thank you for reaching out. Your message has been received and our team will get back to you soon.
            </p>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowSuccessModal(false)}
              autoFocus
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  textarea = false,
  wide = false,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  textarea?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={`form-group ${wide ? "full-width" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={6}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
        />
      )}
    </div>
  );
}

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  wide = false,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  wide?: boolean;
}) {
  return (
    <fieldset className={`choice-group ${wide ? "choice-group-wide" : ""}`}>
      <legend>{label}</legend>
      <div className="choice-grid">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={`choice-button ${value === option ? "selected" : ""}`}
            onClick={() => onChange(option)}
            aria-pressed={value === option}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
