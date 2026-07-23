import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceGrid } from "@/components/ServiceGrid";
import { PricingReassurance } from "@/components/PricingReassurance";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { ContactBand } from "@/components/ContactBand";
import { business, faqs, services } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${business.name} | Mobile Mechanic in Elmhurst & DuPage County`,
  description:
    "Mobile auto repair at your home or workplace across Elmhurst and the surrounding DuPage and Cook County suburbs. Call or text for brakes, batteries, diagnostics, and more.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero
        headline="Mobile Auto Repair, Wherever Your Vehicle Is Parked"
        subhead="Skip the tow truck and waiting room. Get convenient, professional repairs and maintenance at your home or workplace across Elmhurst and the surrounding suburbs."
        smsPrefill={business.smsPrefillTemplate("")}
      />

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-display text-3xl font-bold text-(--color-ink)">Popular Services</h2>
        <p className="mt-3 max-w-xl text-(--color-ink-soft) leading-relaxed">
          We work on all makes and models. Here&rsquo;s what we&rsquo;re asked about most.
        </p>
        <div className="mt-8">
          <ServiceGrid services={services} />
        </div>
        <p className="mt-6 text-(--color-ink-soft)">
          Don&rsquo;t see your repair?{" "}
          <Link href="/services" className="font-semibold text-(--color-accent) hover:underline">
            See all services
          </Link>{" "}
          or text us your vehicle year, make, model, and symptoms.
        </p>
      </section>

      <ContactBand />

      <PricingReassurance />
      <HowItWorks />
      <WhyChoose />
      <Testimonials heading="What Customers Are Saying" />

      <section className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <div className="border-2 border-(--color-ink) bg-(--color-paper-alt) p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-(--color-ink)">
              Looking for Elmhurst service specifically?
            </h2>
            <p className="mt-1 text-sm text-(--color-ink-soft)">
              Visit our dedicated Elmhurst page for local details.
            </p>
          </div>
          <Link
            href="/elmhurst"
            className="mt-4 inline-flex min-h-11 items-center rounded-sm border-2 border-(--color-ink) px-5 text-sm font-semibold uppercase tracking-wide text-(--color-ink) hover:bg-(--color-ink) hover:text-(--color-paper) sm:mt-0"
          >
            View Elmhurst Page →
          </Link>
        </div>
      </section>

      <ServiceAreaSection />
      <Faq items={faqs} />
      <FinalCta />
    </>
  );
}
