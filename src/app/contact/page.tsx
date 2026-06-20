import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/faq";
import { QuoteForm } from "@/components/quote-form";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Chinel Prints for printing and branding in Lagos. Request a quote via WhatsApp, phone, or our online form. Nationwide delivery across Nigeria.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Chinel Prints — Lagos Printing & Branding",
    description: "Get in touch for quotes, orders, and inquiries. We're here to help.",
    url: "/contact",
  },
};

const CONTACT_FAQ = [
  {
    question: "How long does production take?",
    answer:
      "Standard orders are completed within 24–48 hours. Large format prints and bulk orders may take 3–5 business days.",
  },
  {
    question: "Do you deliver outside Lagos?",
    answer:
      "Yes! We deliver nationwide across all 36 states in Nigeria via trusted courier partners.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, POS payments, and cash on pickup. A 50% deposit is required for large orders.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1>Contact Us</h1>
          <p>
            Have a project in mind? Reach out and we&apos;ll get back to you with
            a quote within hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-info-card">
              <h3 style={{ color: "var(--color-deep-blue)", marginBottom: "1.5rem" }}>
                Get in Touch
              </h3>
              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p>
                    <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phoneDisplay}</a>
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>{SITE_CONFIG.address}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-item__icon">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon – Sat: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <a
                href={getWhatsAppUrl()}
                className="btn btn--whatsapp"
                style={{ width: "100%" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="map-placeholder" style={{ marginTop: "1.5rem" }}>
              <span>Lagos, Nigeria — Map integration ready</span>
            </div>
          </div>

          <div>
            <h3 style={{ color: "var(--color-deep-blue)", marginBottom: "1.5rem" }}>
              Send Us a Message
            </h3>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <FAQ items={CONTACT_FAQ} />
        </div>
      </section>
    </main>
  );
}