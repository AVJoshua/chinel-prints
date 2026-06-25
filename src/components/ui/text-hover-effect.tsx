"use client";

import React, { useRef, useEffect, useState, useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const VIEWBOX = "0 0 480 110";
const FONT_SIZE = 36;
const STROKE_WIDTH = 1.2;
const TEXT_LENGTH = 440;
const DASH_LENGTH = 1200;

type TextHoverEffectProps = {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
};

function EffectText({
  children,
  className,
  style,
  stroke,
  mask,
  motionProps,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stroke?: string;
  mask?: string;
  motionProps?: React.ComponentProps<typeof motion.text>;
}) {
  const shared = {
    x: "50%",
    y: "50%",
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
    fontSize: FONT_SIZE,
    fontWeight: 700,
    fontFamily: "Helvetica, Arial, sans-serif",
    strokeWidth: STROKE_WIDTH,
    textLength: TEXT_LENGTH,
    lengthAdjust: "spacingAndGlyphs" as const,
    className: cn("fill-transparent uppercase", className),
    style,
    stroke,
    mask,
  };

  if (motionProps) {
    return (
      <motion.text {...shared} {...motionProps}>
        {children}
      </motion.text>
    );
  }

  return <text {...shared}>{children}</text>;
}

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: TextHoverEffectProps) => {
  const uid = useId().replace(/:/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const [mounted, setMounted] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
    const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
    setMaskPosition({
      cx: `${cxPercentage}%`,
      cy: `${cyPercentage}%`,
    });
  }, [cursor, mounted]);

  const gradientId = `textGradient-${uid}`;
  const maskGradientId = `revealMask-${uid}`;
  const maskId = `textMask-${uid}`;

  const renderText = (variant: "static" | "ghost" | "animated" | "gradient") => {
    if (variant === "static") {
      return <EffectText className="stroke-[#143db2]">{text}</EffectText>;
    }

    if (variant === "ghost") {
      return (
        <EffectText
          className="stroke-neutral-200 dark:stroke-neutral-800"
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </EffectText>
      );
    }

    if (variant === "animated") {
      return (
        <EffectText
          className="stroke-[#143db2] dark:stroke-[#143db299]"
          motionProps={{
            initial: { strokeDashoffset: DASH_LENGTH, strokeDasharray: DASH_LENGTH },
            animate: { strokeDashoffset: 0, strokeDasharray: DASH_LENGTH },
            transition: { duration: 4, ease: "easeInOut" },
          }}
        >
          {text}
        </EffectText>
      );
    }

    return (
      <EffectText stroke={`url(#${gradientId})`} mask={`url(#${maskId})`}>
        {text}
      </EffectText>
    );
  };

  const svgProps = {
    width: "100%" as const,
    height: "100%" as const,
    viewBox: VIEWBOX,
    preserveAspectRatio: "xMidYMid meet" as const,
    xmlns: "http://www.w3.org/2000/svg",
    className: cn("text-hover-effect select-none", className),
  };

  if (!mounted) {
    return (
      <svg {...svgProps} aria-hidden="true">
        {renderText("static")}
      </svg>
    );
  }

  return (
    <svg
      {...svgProps}
      ref={svgRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn(svgProps.className, "cursor-pointer")}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#143db2" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#80eeb4" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id={maskGradientId}
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${maskGradientId})`}
          />
        </mask>
      </defs>
      {renderText("ghost")}
      {renderText("animated")}
      {renderText("gradient")}
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #143db233 100%)",
      }}
    />
  );
};