"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const SUBTITLE =
  "From stunning interior frames to bold event branding, Chinel Prints delivers premium quality print products that make your business stand out across Nigeria.";

function TypewriterSubtitle({
  text,
  startDelay = 600,
  charDelay = 18,
}: {
  text: string;
  startDelay?: number;
  charDelay?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);

    let interval: number | undefined;

    const startTimeout = window.setTimeout(() => {
      let index = 0;

      interval = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          if (interval) window.clearInterval(interval);
          setDone(true);
        }
      }, charDelay);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimeout);
      if (interval) window.clearInterval(interval);
    };
  }, [text, startDelay, charDelay, reducedMotion]);

  return (
    <p className="hero__subtitle">
      {displayed}
      {!done && <span className="hero__subtitle-cursor" aria-hidden="true" />}
    </p>
  );
}

export function HeroIntro() {
  const reducedMotion = useReducedMotion();

  const swipeFromLeft = reducedMotion
    ? { opacity: 1, x: 0 }
    : { opacity: 0, x: -56 };

  const swipeTo = { opacity: 1, x: 0 };
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <motion.span
        className="hero__badge"
        initial={swipeFromLeft}
        animate={swipeTo}
        transition={{ duration: 0.7, ease }}
      >
        Lagos&apos;s Trusted Print Partner
      </motion.span>
      <motion.h1
        className="hero__title"
        initial={swipeFromLeft}
        animate={swipeTo}
        transition={{
          duration: 0.8,
          delay: reducedMotion ? 0 : 0.2,
          ease,
        }}
      >
        Professional Printing &amp; Branding Solutions in <span>Lagos</span>
      </motion.h1>
      <TypewriterSubtitle
        text={SUBTITLE}
        startDelay={reducedMotion ? 0 : 1300}
      />
    </>
  );
}