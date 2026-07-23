const POINTS = [
  "No tow truck or waiting room for suitable repairs",
  "Service at your home or workplace",
  "All makes and models",
  "Direct communication with the person doing the work",
  "Local service in Elmhurst and nearby suburbs",
  "Convenient daily hours",
];

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="font-display text-3xl font-bold text-(--color-ink)">
        Why Choose 630 Mobile Auto Repair
      </h2>
      <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {POINTS.map((point) => (
          <li key={point} className="flex items-start gap-3 text-(--color-ink)">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center border-2 border-(--color-accent) text-(--color-accent)">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
