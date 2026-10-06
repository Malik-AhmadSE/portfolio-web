import Link from "next/link";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "accent";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-200";

const variants: Record<NonNullable<MagneticButtonProps["variant"]>, string> = {
  solid: "bg-ink text-paper hover:bg-accent",
  accent: "bg-accent text-paper hover:bg-accent-deep",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
};

/**
 * Editorial-styled call-to-action link.
 * (Kept the component name so existing imports don't break.)
 */
export default function MagneticButton({
  href,
  children,
  variant = "solid",
  external,
  className = "",
}: MagneticButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
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
