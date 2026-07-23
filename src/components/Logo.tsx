/**
 * Wordmark + arch/gear mark in the spirit of the existing 630 Mobile Auto Repair
 * logo (an arched gear over "630 MOBILE AUTO REPAIR"), redrawn simply for crisp
 * rendering at header size — not a copy of the original artwork.
 */
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const ink = variant === "dark" ? "var(--color-ink)" : "var(--color-paper)";
  const accent = "var(--color-accent)";

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M6 24a14 14 0 0 1 28 0"
          stroke={ink}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="24" r="4.5" fill={accent} />
        <path
          d="M4 28h4M32 28h4M9 17l3 2.5M31 17l-3 2.5M20 6v4"
          stroke={ink}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-none">
        <span
          className="block font-display font-bold text-[1.05rem] tracking-tight"
          style={{ color: ink }}
        >
          630 Mobile Auto
        </span>
        <span
          className="block text-[0.6rem] font-semibold tracking-[0.28em] uppercase"
          style={{ color: variant === "dark" ? "var(--color-ink-soft)" : "#cfcdc2" }}
        >
          Repair
        </span>
      </span>
    </span>
  );
}
