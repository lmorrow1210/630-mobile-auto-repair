import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SmsButton } from "@/components/CtaButtons";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Reach ${business.name} by phone or text for mobile auto repair at your home or workplace.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <section className="mx-auto max-w-2xl px-4 py-14 md:px-6 md:py-20">
        <h1 className="font-display text-4xl font-bold text-(--color-ink)">Call or Text Us</h1>
        <p className="mt-4 max-w-md text-(--color-ink-soft) leading-relaxed">
          No forms, no waiting rooms. Reach the shop directly and tell us what&rsquo;s going on with
          your vehicle.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallButton placement="contact_page" />
          <SmsButton placement="contact_page" prefill={business.smsPrefillTemplate("")} />
        </div>
        <dl className="mt-10 space-y-3 border-t-2 border-(--color-ink) pt-6 text-sm text-(--color-ink-soft)">
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
      </section>
    </>
  );
}
