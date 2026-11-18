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
}

export function Button({ href, children }: ButtonProps) {
    return <Link href={href}>{children}</Link>;
}