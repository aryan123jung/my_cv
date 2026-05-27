import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  download
}: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-white text-slate-950 shadow-glow hover:bg-cyan-100"
      : "border border-white/[0.15] bg-white/[0.07] text-white hover:border-cyan-300/50 hover:bg-white/[0.12]";

  return (
    <Link
      href={href}
      download={download}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 ${classes}`}
    >
      {children}
    </Link>
  );
}
