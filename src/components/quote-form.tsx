"use client";

import { useState } from "react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, boolean> = {};

    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    if (!name) newErrors.name = true;
    if (!phone) newErrors.phone = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = true;
    if (!service) newErrors.service = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    const whatsappText = [
      `*Quote Request — ${SITE_CONFIG.name}*`,
      "",
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Email:* ${email}`,
      `*Service:* ${service}`,
      `*Message:* ${message || "N/A"}`,
    ].join("\n");

    setTimeout(() => {
      window.open(getWhatsAppUrl(whatsappText), "_blank");
    }, 500);
  };

  if (submitted) {
    return (
      <div className="form-success quote-form form-success--visible">
        <div className="form-success__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Quote Request Sent!</h3>
        <p style={{ color: "var(--color-gray-600)", marginTop: "0.5rem" }}>
          We&apos;re opening WhatsApp so you can send any design files. Our team
          will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className={`form-group${errors.name ? " form-group--error" : ""}`}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            autoComplete="name"
          />
          <span className="form-error">Please enter your name</span>
        </div>
        <div className={`form-group${errors.phone ? " form-group--error" : ""}`}>
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+234 800 000 0000"
            autoComplete="tel"
          />
          <span className="form-error">Please enter your phone number</span>
        </div>
      </div>
      <div className={`form-group${errors.email ? " form-group--error" : ""}`}>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@email.com"
          autoComplete="email"
        />
        <span className="form-error">Please enter a valid email</span>
      </div>
      <div className={`form-group${errors.service ? " form-group--error" : ""}`}>
        <label htmlFor="service">Service *</label>
        <select id="service" name="service" required defaultValue="">
          <option value="">Select a service</option>
          {SITE_CONFIG.services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <span className="form-error">Please select a service</span>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project — quantity, size, deadline, etc."
        />
      </div>
      <div className="form-group">
        <label htmlFor="file">Upload Design (optional)</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*,.pdf,.ai,.psd,.eps"
        />
        <span
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-gray-400)",
            marginTop: "0.375rem",
            display: "block",
          }}
        >
          You can also send files via WhatsApp after submitting.
        </span>
      </div>
      <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>
        Submit Quote Request
      </button>
    </form>
  );
}