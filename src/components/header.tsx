"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/config";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`header${scrolled ? " header--scrolled" : ""}`}
        role="banner"
      >
        <div className="container header__inner">
          <Logo />

          <nav className="nav" aria-label="Main navigation">
            <ul className="nav__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav__link${isActive(link.href) ? " nav__link--active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <Link href="/#quote" className="btn btn--primary btn--sm header__cta">
              Request Quote
            </Link>
            <button
              className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul className="mobile-nav__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="mobile-nav__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__cta">
          <Link
            href="/#quote"
            className="btn btn--primary"
            onClick={() => setMenuOpen(false)}
          >
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
      </nav>
    </>
  );
}