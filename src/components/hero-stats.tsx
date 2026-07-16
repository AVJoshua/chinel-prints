"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 19, suffix: "+", label: "Print Services" },
  { value: 24, suffix: "hr", label: "Fast Turnaround" },
] as const;

function easeOutExpo(progress: number) {
  return progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
}

function AnimatedStat({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setCount(value);
      return;
    }

    const timeout = window.setTimeout(() => {
      const duration = 2000;
      const start = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.round(easeOutExpo(progress) * value));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, delay]);

  return (
    <div>
      <div className="hero__stat-value" aria-label={`${value}${suffix}`}>
        {count}
        {suffix}
      </div>
      <div className="hero__stat-label">{label}</div>
    </div>
  );
}

export function HeroStats() {
  return (
    <div className="hero__stats">
      {STATS.map((stat, index) => (
        <AnimatedStat
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          delay={index * 150}
        />
      ))}
    </div>
  );
}