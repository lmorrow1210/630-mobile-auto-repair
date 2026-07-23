import { CallButton, SmsButton } from "@/components/CtaButtons";
import { business } from "@/data/business";

/**
 * The primary conversion surface on service/city pages — no form, just the
 * two real ways to reach the shop, sized and placed the way a mobile visitor
 * mid-breakdown actually needs them.
 */
export function ContactBand() {
  return (
    <section className="border-y-2 border-(--color-ink) bg-(--color-charcoal) text-(--color-paper)">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-accent)">
            Talk to the shop directly
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            Describe the problem — we&rsquo;ll tell you what it takes.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row shrink-0">
          <SmsButton
            placement="contact_band"
            tone="accent"
            prefill={business.smsPrefillTemplate("")}
          />
          <CallButton placement="contact_band" tone="ghost" />
        </div>
      </div>
    </section>
  );
}
