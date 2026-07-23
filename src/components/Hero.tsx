import { CallButton, SmsButton } from "@/components/CtaButtons";
import { ServiceTag } from "@/components/ServiceTag";
import { business } from "@/data/business";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subhead: string;
  cityName?: string;
  smsPrefill?: string;
};

export function Hero({ headline, subhead, cityName, smsPrefill }: HeroProps) {
  return (
    <section className="border-b-2 border-(--color-ink) bg-(--color-paper)">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr] md:items-center md:px-6 md:py-20">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-(--color-accent)">
            Mobile Service · No Shop Visit Required
          </p>
          <h1 className="max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-(--color-ink) sm:text-5xl">
            {headline}
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-(--color-ink-soft)">{subhead}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <SmsButton
              tone="accent"
              placement="hero"
              event="hero_sms_click"
              prefill={smsPrefill ?? business.smsPrefillTemplate("")}
            />
            <CallButton
              label={`Call ${business.phoneDisplay}`}
              tone="outline"
              placement="hero"
              event="hero_call_click"
            />
          </div>

          <p className="border-t-2 border-(--color-ink) pt-3 text-sm font-medium text-(--color-ink-soft)">
            {business.hours.label} • All makes and models
            {cityName ? ` • Serving ${cityName}` : ""}
          </p>
        </div>

        <ServiceTag cityName={cityName} />
      </div>
    </section>
  );
}
