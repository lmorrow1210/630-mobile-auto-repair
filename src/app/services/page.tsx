import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceGrid } from "@/components/ServiceGrid";
import { FinalCta } from "@/components/FinalCta";
import { services } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Repair Services",
  description:
    "Brakes, batteries, alternators, starters, diagnostics, ignition, radiators, and shocks & struts — mobile auto repair at your home or workplace.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="font-display text-4xl font-bold text-(--color-ink)">Mobile Auto Repair Services</h1>
        <p className="mt-3 max-w-2xl text-(--color-ink-soft) leading-relaxed">
          We work on all makes and models at your home or workplace. Don&rsquo;t see your repair listed?
          Text us your vehicle year, make, model, and symptoms and we&rsquo;ll let you know if it&rsquo;s
          something we can handle on-site.
        </p>
        <div className="mt-8">
          <ServiceGrid services={services} />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
