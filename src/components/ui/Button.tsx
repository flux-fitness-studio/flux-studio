// The site's button. It's a link styled as a button, since every button so far
// goes somewhere (e.g. the Fitco schedule).
// primary = filled (main action), secondary = outlined.
// Usage: <Button href={BOOKING_URL}>Book a class</Button>

const variants = {
  primary:
    "bg-brand-black text-brand-white hover:bg-brand-white hover:text-brand-black",
  secondary:
    "bg-transparent text-current hover:bg-brand-black hover:text-brand-white",
};

type ButtonProps = {
  href: string;
  variant?: keyof typeof variants;
  children: React.ReactNode;
};

export function Button({ href, variant = "primary", children }: ButtonProps) {
  return (
    <a
      href={href}
      className={`${variants[variant]} inline-flex min-h-11 items-center justify-center border border-current px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors`}
    >
      {children}
    </a>
  );
}
