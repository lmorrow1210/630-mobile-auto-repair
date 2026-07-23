"use client";

import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/data/business";
import { trackEvent } from "@/lib/analytics";

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          onClick={() => trackEvent("service_card_click", { service: service.slug })}
          className="group flex flex-col rounded-lg border border-(--color-line) bg-white p-5 transition-colors hover:border-(--color-accent)"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-(--color-paper-alt) text-(--color-accent)">
            <ServiceIcon name={service.icon} />
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold text-(--color-ink)">
            {service.name}
          </h3>
          <p className="mt-1.5 text-sm text-(--color-ink-soft) leading-relaxed">
            {service.shortDescription}
          </p>
          <span className="mt-3 text-sm font-semibold text-(--color-accent) group-hover:underline">
            Learn more →
          </span>
        </Link>
      ))}
    </div>
  );
}
