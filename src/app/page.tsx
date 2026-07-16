import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/faq";
import { HeroIntro } from "@/components/hero-intro";
import { HeroStats } from "@/components/hero-stats";
import { QuoteForm } from "@/components/quote-form";
import { getWhatsAppUrl } from "@/lib/config";
import {
  SERVICES,
  SERVICE_BACKGROUNDS,
  WHY_CHOOSE_US,
  STEPS,
} from "@/lib/data";
import { FEATURE_ICONS, SERVICE_ICONS } from "@/lib/service-icons";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chinel Prints — Printing & Branding Company in Lagos, Nigeria",
  description:
    "Chinel Prints is a leading printing company in Lagos offering interior frames, acrylic signage, business branding, event printing, and custom printing across Nigeria.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Chinel Prints — Professional Printing & Branding in Lagos",
    description:
      "Premium printing and branding solutions in Lagos. Interior frames, signage, business cards, event branding & more.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div
          className="hero__bg"
          aria-hidden="true"
          style={{
            backgroundImage: `url("${encodeURI(assetPath("/images/chinel_prints_banne .jpg"))}")`,
          }}
        />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container hero__content">
          <HeroIntro />
          <div className="hero__actions">
            <a href="#quote" className="btn btn--primary">
              Request Quote
            </a>
            <a
              href={getWhatsAppUrl()}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          <HeroStats />
        </div>
      </section>

      {/* Core Services */}
      <section className="section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title" id="services-heading">
              Core Services
            </h2>
            <p className="section-desc">
              Comprehensive printing and branding solutions for businesses,
              events, and individuals across Lagos and Nigeria.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((service) => {
              const background = SERVICE_BACKGROUNDS[service];
              return (
                <div
                  key={service}
                  className={`service-card${background ? " service-card--bg" : ""}`}
                  style={
                    background
                      ? {
                          backgroundImage: `url("${encodeURI(assetPath(background))}")`,
                        }
                      : undefined
                  }
                >
                  <div className="service-card__icon">
                    {SERVICE_ICONS[service]}
                  </div>
                  <h3 className="service-card__title">{service}</h3>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-2">
            <Link href="/services" className="btn btn--outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--gray" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Why Chinel Prints</span>
            <h2 className="section-title" id="why-heading">
              Why Choose Us
            </h2>
            <p className="section-desc">
              We combine craftsmanship, speed, and affordability to deliver print
              products that exceed expectations.
            </p>
          </div>
          <div className="features-grid">
            {WHY_CHOOSE_US.map((feature, index) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-card__icon">{FEATURE_ICONS[index]}</div>
                <div>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__text">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section--dark" aria-labelledby="how-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title" id="how-heading">
              How It Works
            </h2>
            <p className="section-desc">
              Getting your prints done is easy. Four simple steps from idea to
              delivery.
            </p>
          </div>
          <div className="steps-grid">
            {STEPS.map((step, index) => (
              <div key={step.title} className="step-card">
                <div className="step-card__number">{index + 1}</div>
                <div>
                  <h3 className="step-card__title">{step.title}</h3>
                  <p className="step-card__text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request */}
      <section className="section" id="quote" aria-labelledby="quote-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Get Started</span>
            <h2 className="section-title" id="quote-heading">
              Request a Quote
            </h2>
            <p className="section-desc">
              Tell us about your project and we&apos;ll get back to you with a
              competitive quote within hours.
            </p>
          </div>
          <div className="quote-section">
            <div className="quote-info__card">
              <h3>Let&apos;s Bring Your Vision to Life</h3>
              <ul className="quote-info__list">
                <li className="quote-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free quote within 2 hours
                </li>
                <li className="quote-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  No obligation consultation
                </li>
                <li className="quote-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Design support available
                </li>
                <li className="quote-info__item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Bulk order discounts
                </li>
              </ul>
              <p style={{ opacity: 0.8, fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                Prefer to chat? Reach us instantly on WhatsApp for faster responses.
              </p>
              <a
                href={getWhatsAppUrl()}
                className="btn btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--gray" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title" id="faq-heading">
              Frequently Asked Questions
            </h2>
            <p className="section-desc">
              Quick answers to common questions about our printing services.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Print Something Amazing?</h2>
            <p>
              Join hundreds of satisfied clients across Lagos and Nigeria. Get your
              free quote today.
            </p>
            <div className="cta-banner__actions">
              <a href="#quote" className="btn btn--primary">
                Request Quote
              </a>
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