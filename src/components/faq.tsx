"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does production take?",
    answer:
      "Standard orders are completed within 24–48 hours. Large format prints, custom frames, and bulk orders may take 3–5 business days. Rush services are available — contact us on WhatsApp for urgent requests.",
  },
  {
    question: "Do you deliver outside Lagos?",
    answer:
      "Yes! We deliver nationwide across all 36 states in Nigeria. Delivery fees vary by location and order size. Lagos deliveries are typically same-day or next-day. Interstate deliveries take 2–5 business days via trusted courier partners.",
  },
  {
    question: "Can I print in small quantities?",
    answer:
      "Absolutely. We accommodate orders of all sizes — from a single business card to thousands of flyers. There's no minimum order quantity for most services. Small quantity orders may have a slightly higher per-unit cost.",
  },
  {
    question: "Do you help with design?",
    answer:
      "Yes, our in-house design team offers logo design, layout design, and creative branding support. Whether you have a rough sketch or need a complete brand identity, we'll help bring your vision to life at affordable rates.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, POS payments, and cash on pickup. For large orders, a 50% deposit is required to begin production, with the balance due before delivery. Payment details are shared upon quote confirmation.",
  },
];

export function FAQ({ items = faqs }: { items?: typeof faqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((faq, index) => (
        <div
          key={faq.question}
          className={`faq-item${openIndex === index ? " faq-item--open" : ""}`}
        >
          <button
            className="faq-item__question"
            aria-expanded={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <span className="faq-item__icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          <div className="faq-item__answer">
            <div className="faq-item__answer-inner">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}