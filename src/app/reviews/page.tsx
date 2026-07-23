import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description: `See what customers are saying about ${business.name}, a mobile mechanic serving Elmhurst and the surrounding suburbs.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />
      <section className="mx-auto max-w-6xl px-4 pt-10 md:px-6 md:pt-14">
        <h1 className="font-display text-4xl font-bold text-(--color-ink)">Reviews</h1>
        <p className="mt-3 max-w-2xl text-(--color-ink-soft) leading-relaxed">
          Real feedback from customers we&rsquo;ve worked with.
        </p>
      </section>
      <Testimonials heading="Customer Reviews" />
      <FinalCta />
    </>
  );
}
