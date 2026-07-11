import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chinel Prints, a trusted branding company in Lagos delivering premium interior frames, custom printing, and business branding across Nigeria.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Chinel Prints — Lagos Printing & Branding",
    description:
      "Discover the story behind Lagos's trusted printing and branding partner.",
    url: "/about",
  },
};

const VALUES = [
  {
    title: "Quality First",
    text: "Premium materials and meticulous finishing on every order, no matter the size.",
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Client Focused",
    text: "Your satisfaction is our priority. We listen, advise, and deliver exactly what you need.",
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Speed & Reliability",
    text: "Fast turnaround without sacrificing quality. Deadlines are promises we keep.",
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Fair Pricing",
    text: "Transparent, competitive rates. Great printing shouldn't break the bank.",
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
] as const;

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Projects Completed" },
  { value: "36", label: "States Delivered To" },
] as const;

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </nav>
          <h1>About Chinel Prints</h1>
          <p>
            Your trusted partner for premium printing and branding solutions in
            Lagos and across Nigeria.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-image">
            <Image
              src={assetPath("/images/about_us_pic.png")}
              alt="Chinel Prints team at work in Lagos"
              width={800}
              height={600}
            />
          </div>
          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2>Bringing Ideas to Life Through Print</h2>
            <p>
              Chinel Prints was founded with a simple mission: to provide Lagos
              businesses and individuals with world-class printing and branding
              services at prices that make sense. What started as a small framing
              studio has grown into one of Lagos&apos;s most trusted printing
              companies.
            </p>
            <p>
              Today, we serve clients across Nigeria — from startups needing
              their first business cards to established brands requiring
              large-scale event branding and office signage. Every project
              receives the same attention to detail and commitment to quality.
            </p>
            <p>
              As a leading branding company in Lagos, we understand that your
              print materials are often the first impression your customers have
              of your business. That&apos;s why we never cut corners.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-desc">
              The principles that guide every project we take on.
            </p>
          </div>
          <div className="values-grid">
            {VALUES.map((value) => (
              <div key={value.title} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">By the Numbers</span>
            <h2 className="section-title">Our Impact</h2>
          </div>
          <div className="hero__stats" style={{ border: "none", padding: 0 }}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Let&apos;s Work Together</h2>
            <p>
              Whether you need interior frames, event branding, or a full
              corporate identity — we&apos;re ready to help.
            </p>
            <div className="cta-banner__actions">
              <Link href="/#quote" className="btn btn--primary">
                Request Quote
              </Link>
              <a
                href={getWhatsAppUrl()}
                className="btn btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}