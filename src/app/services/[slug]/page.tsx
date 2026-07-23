import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CallButton, SmsButton } from "@/components/CtaButtons";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceGrid } from "@/components/ServiceGrid";
import { FinalCta } from "@/components/FinalCta";
import { business, services } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} | Mobile Service in Elmhurst & DuPage County`,
    description: `${service.longDescription} Call or text ${business.phoneDisplay} for a quote.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-(--color-paper-alt) text-(--color-accent)">
              <ServiceIcon name={service.icon} />
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-(--color-ink)">{service.name}</h1>
            <p className="mt-4 max-w-xl text-(--color-ink-soft) leading-relaxed">{service.longDescription}</p>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-(--color-ink-soft)">
              Common signs
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {service.commonSigns.map((sign) => (
                <li key={sign} className="flex items-start gap-2 text-(--color-ink)">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                  {sign}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SmsButton
                label={`Text About ${service.name}`}
                tone="accent"
                placement="service_detail"
                prefill={`Hi, I'm interested in ${service.name.toLowerCase()} for my [year/make/model]. `}
              />
              <CallButton placement="service_detail" tone="outline" />
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <h2 className="font-display text-2xl font-bold text-(--color-ink)">Other Services</h2>
        <div className="mt-6">
          <ServiceGrid services={related} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
