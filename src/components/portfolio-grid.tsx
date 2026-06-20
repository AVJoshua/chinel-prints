"use client";

import { useState } from "react";
import { PORTFOLIO_ITEMS } from "@/lib/data";

const filters = [
  { id: "all", label: "All" },
  { id: "frames", label: "Frames" },
  { id: "events", label: "Events" },
  { id: "signage", label: "Signage" },
  { id: "corporate", label: "Corporate" },
  { id: "weddings", label: "Weddings" },
] as const;

export function PortfolioGrid() {
  const [active, setActive] = useState("all");

  return (
    <>
      <div className="portfolio-filter" role="tablist" aria-label="Filter portfolio">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn${active === filter.id ? " filter-btn--active" : ""}`}
            data-filter={filter.id}
            role="tab"
            onClick={() => setActive(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="portfolio-page-grid">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={item.title}
            className={`portfolio-item${active !== "all" && item.category !== active ? " portfolio-item--hidden" : ""}`}
            data-category={item.category}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} width={500} height={375} loading="lazy" />
            <div className="portfolio-item__overlay">
              <span className="portfolio-item__title">{item.title}</span>
              <span className="portfolio-item__category">{item.filter}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}