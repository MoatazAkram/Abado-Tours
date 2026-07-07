import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-nile-night hover:bg-gold-bright",
  secondary:
    "border border-papyrus text-papyrus hover:bg-papyrus hover:text-nile-night",
  ghost:
    "border border-nile-night/20 text-ink hover:border-gold hover:text-clay",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
