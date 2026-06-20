import Link from "next/link";
import { assetPath } from "@/lib/site";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
};

export function Logo({ className = "", size = "header" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`logo logo--${size}${className ? ` ${className}` : ""}`}
      aria-label="Chinel Prints Home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath("/logo.jpeg")}
        alt="Chinel Prints"
        width={1080}
        height={867}
        className="logo__image"
        fetchPriority={size === "header" ? "high" : "auto"}
      />
    </Link>
  );
}