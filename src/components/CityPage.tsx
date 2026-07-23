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
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactBand } from "@/components/ContactBand";
import { business, faqs, services, type City } from "@/data/business";

export function CityPage({ city }: { city: City }) {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: city.name, path: `/${city.slug}` }]} />

      <Hero
        headline={`Mobile Auto Repair at Your Home or Work in ${city.name}`}
        subhead="Skip the tow truck and waiting room. Get convenient, professional repairs and maintenance where your vehicle is parked."
        cityName={city.name}
        smsPrefill={business.smsPrefillTemplate("")}
      />

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-display text-3xl font-bold text-(--color-ink)">
          Popular Services in {city.name}
        </h2>
        <p className="mt-3 max-w-xl text-(--color-ink-soft) leading-relaxed">
          We work on all makes and models. Here&rsquo;s what we&rsquo;re asked about most.
        </p>
        <div className="mt-8">
          <ServiceGrid services={services} />
        </div>
        <p className="mt-6 text-(--color-ink-soft)">
          Don&rsquo;t see your repair? Text us your vehicle year, make, model, and symptoms.
        </p>
      </section>

      <ContactBand />

      <PricingReassurance />
      <HowItWorks />
      <WhyChoose />
      <Testimonials heading={`What ${city.name} Customers Are Saying`} />

      <ServiceAreaSection currentCity={city} />
      <Faq items={faqs} />
      <FinalCta />
    </>
  );
}
