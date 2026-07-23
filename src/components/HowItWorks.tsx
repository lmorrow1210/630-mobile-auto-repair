const STEPS = [
  { title: "Call or text us", detail: "Reach out however is easiest — a phone call or a text." },
  { title: "Tell us about your vehicle and the problem", detail: "Share the year, make, model, and what you're noticing." },
  { title: "Confirm the service, timing, and estimate", detail: "We'll go over the plan and estimate before anything starts." },
  { title: "We come to your location and complete the approved work", detail: "Suitable repairs are completed at your home or workplace." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="font-display text-3xl font-bold text-(--color-ink)">How It Works</h2>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative border-2 border-(--color-ink) bg-(--color-paper) p-5">
            <span className="font-display text-2xl font-bold text-(--color-accent)">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-semibold text-(--color-ink)">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-(--color-ink-soft)">{step.detail}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-2xl text-sm text-(--color-ink-soft)">
        Some repairs require a traditional shop, and access or weather conditions can occasionally affect
        on-site service — we&rsquo;ll let you know before any work begins if that&rsquo;s the case for your vehicle.
      </p>
    </section>
  );
}
