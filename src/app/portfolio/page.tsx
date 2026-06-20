import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View Chinel Prints portfolio: interior frames, event branding, acrylic signage, office branding, wedding prints, and corporate printing projects in Lagos.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Chinel Prints Lagos",
    description:
      "Browse our printing and branding projects across Lagos and Nigeria.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Portfolio</span>
          </nav>
          <h1>Our Portfolio</h1>
          <p>
            Explore the quality printing and branding work we&apos;ve delivered
            for clients across Lagos and Nigeria.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="cta-banner">
            <h2>Want Results Like These?</h2>
            <p>
              Let&apos;s discuss your project. Get a free quote and see how we
              can bring your brand to life.
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