import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { CallButton, SmsButton } from "@/components/CtaButtons";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description: `Request a mobile auto repair quote from ${business.name}. Call, text, or send your vehicle details online.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/contact" }]} />
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h1 className="font-display text-4xl font-bold text-(--color-ink)">Request a Quote</h1>
            <p className="mt-4 max-w-md text-(--color-ink-soft) leading-relaxed">
              Reach out however&rsquo;s easiest. We&rsquo;ll review your vehicle details and respond by
              phone or text.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton placement="contact_page" />
              <SmsButton placement="contact_page" prefill={business.smsPrefillTemplate("")} />
            </div>
            <dl className="mt-10 space-y-3 text-sm text-(--color-ink-soft)">
              <div className="flex gap-2">
                <dt className="font-semibold text-(--color-ink)">Phone:</dt>
                <dd>
                  <a href={business.telHref} className="hover:text-(--color-accent)">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-(--color-ink)">Email:</dt>
                <dd>
                  <a href={`mailto:${business.email}`} className="hover:text-(--color-accent)">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-(--color-ink)">Hours:</dt>
                <dd>{business.hours.label}</dd>
              </div>
            </dl>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
