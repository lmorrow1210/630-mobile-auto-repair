"use client";

import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/data/business";
import { trackEvent } from "@/lib/analytics";

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="border-t-2 border-(--color-ink)">
      {services.map((service, i) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          onClick={() => trackEvent("service_card_click", { service: service.slug })}
          className="group flex items-center gap-4 border-b-2 border-(--color-ink) bg-(--color-paper) px-1 py-4 transition-colors hover:bg-(--color-paper-alt) sm:gap-6 sm:px-2"
        >
          <span className="font-mono text-xs font-semibold text-(--color-ink-soft)">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="hidden shrink-0 text-(--color-accent) sm:inline-flex">
            <ServiceIcon name={service.icon} className="h-6 w-6" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-lg font-semibold tracking-tight text-(--color-ink)">
              {service.name}
            </span>
            <span className="block text-sm text-(--color-ink-soft) leading-snug">
              {service.shortDescription}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="shrink-0 text-xl text-(--color-ink-soft) transition-transform group-hover:translate-x-1 group-hover:text-(--color-accent)"
          >
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
