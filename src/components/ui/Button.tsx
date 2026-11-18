// Button: every button on the site. It's a link styled as a button, since every
// button so far goes somewhere (e.g. the Fitco schedule).
// Two styles:
// - primary: filled (the main action)
// - secondary: outlined
// Tests to write first: Button.test.tsx

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full min-h-12 px-6 font-body font-bold text-[15px] uppercase tracking-button";

  const variantClasses =
    variant === "primary"
      ? "bg-brand-black text-brand-white"
      : "border-2 border-brand-black text-brand-black hover:bg-brand-sand";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
