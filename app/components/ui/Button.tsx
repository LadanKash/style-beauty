import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: "_blank";
  rel?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  disabled = false,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(230,164,180,0.35)]";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-[var(--surface)] text-[var(--text)] border border-[rgba(var(--border))] hover:bg-[rgba(230,164,180,0.08)]",

    accent:
      "bg-[rgb(var(--accent))] text-white hover:opacity-90 shadow-sm",

    ghost:
      "bg-transparent text-[var(--text)] border border-[rgba(var(--border))] hover:bg-[rgba(230,164,180,0.08)]",
  };

  const disabledClasses =
    "opacity-50 pointer-events-none";

  const classes = [
    base,
    sizes[size],
    variants[variant],
    disabled ? disabledClasses : "",
    className,
  ].join(" ");

  if (href && !disabled) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noreferrer"}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

