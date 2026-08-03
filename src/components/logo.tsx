import Link from "next/link";
import { assetPath } from "@/lib/site";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
};

export function Logo({ className = "", size = "header" }: LogoProps) {
  const logoClass = `logo logo--${size}${className ? ` ${className}` : ""}`;

  if (size === "footer") {
    return (
      <Link href="/" className={logoClass} aria-label="Chinel Prints Home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/logo.png")}
          alt="Chinel Prints"
          width={220}
          height={176}
          className="logo__image"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={logoClass} aria-label="Chinel Prints Home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath("/logo.png")}
        alt="Chinel Prints"
        width={160}
        height={48}
        className="logo__image logo__image--light"
        fetchPriority="high"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath("/logo.png")}
        alt="Chinel Prints"
        width={160}
        height={48}
        className="logo__image logo__image--dark"
        fetchPriority="high"
      />
    </Link>
  );
}