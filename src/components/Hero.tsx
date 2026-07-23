import { CallButton, SmsButton } from "@/components/CtaButtons";
import { HeroArt } from "@/components/HeroArt";
import { business } from "@/data/business";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subhead: string;
  cityName?: string;
  smsPrefill?: string;
};

export function Hero({ eyebrow, headline, subhead, cityName, smsPrefill }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-(--color-charcoal) text-(--color-paper)">
      <div className="absolute inset-0" role="img" aria-label="Illustration of a mobile mechanic servicing a car in a driveway">
        <HeroArt className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-(--color-charcoal) via-(--color-charcoal)/75 to-(--color-charcoal)/50" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 md:px-6 md:py-24">
        {eyebrow && (
          <span className="inline-flex w-fit items-center rounded-full border border-(--color-paper)/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-(--color-paper)/80">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          {headline}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-(--color-paper)/85">{subhead}</p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <SmsButton
            label="Text Us for a Quote"
            tone="accent"
            placement="hero"
            event="hero_sms_click"
            prefill={smsPrefill ?? business.smsPrefillTemplate("")}
          />
          <CallButton
            label={`Call ${business.phoneDisplay}`}
            tone="ghost"
            placement="hero"
            event="hero_call_click"
          />
        </div>

        <p className="text-sm font-medium text-(--color-paper)/70">
          {business.hours.label} • All makes and models
          {cityName ? ` • Serving ${cityName}` : ""}
        </p>
      </div>
    </section>
  );
}
