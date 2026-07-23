import { business, services } from "@/data/business";

export function PricingReassurance() {
  const hasPricing = business.pricing != null;

  return (
    <section className="bg-(--color-paper-alt) py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl font-bold text-(--color-ink)">What to Expect on Cost</h2>

        {hasPricing ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {business.pricing!.map((p) => {
              const service = services.find((s) => s.slug === p.serviceSlug);
              return (
                <div key={p.serviceSlug} className="rounded-lg border border-(--color-line) bg-white p-5">
                  <h3 className="font-semibold text-(--color-ink)">{service?.name ?? p.serviceSlug}</h3>
                  <p className="mt-1 font-display text-2xl font-bold text-(--color-accent)">
                    From ${p.startingAt}
                  </p>
                  <p className="mt-1 text-sm text-(--color-ink-soft)">{p.notes}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-6 max-w-2xl rounded-lg border border-(--color-line) bg-white p-6">
            <p className="text-(--color-ink) leading-relaxed">
              Get an estimate before work begins. Tell us about your vehicle and location so we can
              provide an accurate quote.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
