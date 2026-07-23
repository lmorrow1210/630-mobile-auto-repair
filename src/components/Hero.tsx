import { CallButton, SmsButton } from "@/components/CtaButtons";
import { HeroSky } from "@/components/HeroSky";
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
    <section className="relative overflow-hidden border-b-2 border-(--color-ink) text-(--color-paper)">
      <div className="absolute inset-0" role="img" aria-label="Open road under an evening sky">
        <HeroSky className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-(--color-charcoal)/90 via-(--color-charcoal)/35 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:px-6 md:py-28">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-(--color-accent)">
          Mobile Service · No Shop Visit Required
        </p>
        <h1 className="max-w-2xl font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
          {headline}
        </h1>
        <p className="max-w-lg text-lg leading-relaxed text-(--color-paper)/85">{subhead}</p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <SmsButton
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

        <p className="border-t-2 border-(--color-paper)/30 pt-3 text-sm font-medium text-(--color-paper)/75">
          {business.hours.label} • All makes and models
          {cityName ? ` • Serving ${cityName}` : ""}
        </p>
      </div>
    </section>
  );
}
