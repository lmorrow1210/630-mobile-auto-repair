import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { FinalCta } from "@/components/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Service Area | DuPage & Cook County",
  description:
    "630 Mobile Auto Repair serves Elmhurst and surrounding DuPage and Cook County suburbs, including Lombard, Addison, Wheaton, Glen Ellyn, Schaumburg, and more.",
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Area", path: "/service-area" }]} />
      <section className="mx-auto max-w-6xl px-4 pt-10 md:px-6 md:pt-14">
        <h1 className="font-display text-4xl font-bold text-(--color-ink)">Where We Serve</h1>
        <p className="mt-3 max-w-2xl text-(--color-ink-soft) leading-relaxed">
          Mobile auto repair at suitable homes, workplaces, and parking locations across DuPage and Cook
          County. Select your city below for local details.
        </p>
      </section>
      <ServiceAreaSection />
      <FinalCta />
    </>
  );
}
