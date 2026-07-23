import { CallButton, SmsButton } from "@/components/CtaButtons";
import { business } from "@/data/business";

export function FinalCta() {
  return (
    <section className="bg-(--color-ink) text-(--color-paper)">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Tell Us What&rsquo;s Wrong With Your Vehicle
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-(--color-paper)/80 leading-relaxed">
          Call or text your vehicle details and we&rsquo;ll help determine whether the repair can be
          completed at your location.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <SmsButton
            label="Text Vehicle Details"
            tone="accent"
            placement="final_cta"
            event="final_cta_click"
            prefill={business.smsPrefillTemplate("")}
          />
          <CallButton
            label={`Call ${business.phoneDisplay}`}
            tone="ghost"
            placement="final_cta"
            event="final_cta_click"
          />
        </div>
      </div>
    </section>
  );
}
