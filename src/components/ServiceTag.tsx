/**
 * A hang-tag graphic styled after a real mechanic's work order / repair tag —
 * used in place of stock photography or an illustrated "explainer" scene.
 * Deliberately references paper shop tickets, not car silhouettes or app
 * iconography.
 */
export function ServiceTag({ cityName }: { cityName?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px] rotate-2 select-none">
      <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-(--color-ink) bg-(--color-paper)" />
      <div className="relative border-2 border-dashed border-(--color-ink) bg-(--color-paper-alt) p-5 pt-8">
        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--color-ink-soft)">
          Mobile Service Tag
        </p>
        <p className="mt-3 font-display text-2xl font-bold leading-none text-(--color-ink)">
          630 MOBILE
          <br />
          AUTO REPAIR
        </p>

        <dl className="mt-4 space-y-1.5 border-t-2 border-(--color-ink) pt-3 font-mono text-xs text-(--color-ink)">
          <div className="flex justify-between gap-2">
            <dt className="text-(--color-ink-soft)">MAKE/MODEL</dt>
            <dd>ALL</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-(--color-ink-soft)">LOCATION</dt>
            <dd>{cityName ? cityName.toUpperCase() : "YOUR DRIVEWAY"}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-(--color-ink-soft)">HOURS</dt>
            <dd>7A–9P DAILY</dd>
          </div>
        </dl>

        <div className="mt-4 inline-block -rotate-3 border-2 border-(--color-accent) px-2 py-0.5 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-(--color-accent)">
          We come to you
        </div>
      </div>
    </div>
  );
}
