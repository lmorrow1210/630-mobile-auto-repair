"use client";

import Link from "next/link";
import { CallButton, SmsButton } from "@/components/CtaButtons";
import { business } from "@/data/business";
import { trackEvent } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="bg-(--color-ink) text-(--color-paper)">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Tell Us What&rsquo;s Wrong With Your Vehicle
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-(--color-paper)/80 leading-relaxed">
          Send your vehicle details by text or request a quote online. We&rsquo;ll help determine
          whether the repair can be completed at your Elmhurst location.
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
          <Link
            href="/contact"
            onClick={() => trackEvent("final_cta_click", { placement: "final_cta" })}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-(--color-paper)/40 px-6 py-3 text-base font-semibold hover:bg-(--color-paper)/10"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
