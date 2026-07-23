import Link from "next/link";
import { Logo } from "@/components/Logo";
import { business, services, cities, siteUrl } from "@/data/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-(--color-charcoal) text-(--color-paper) pb-24 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-(--color-paper)/70 leading-relaxed">
              {business.legalName}
            </p>
            <p className="mt-3 text-sm text-(--color-paper)/70">{business.hours.label}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-(--color-paper)/60">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={business.telHref} className="hover:text-(--color-accent)">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-(--color-accent)">
                  {business.email}
                </a>
              </li>
              <li className="pt-1 text-(--color-paper)/70">
                Serving Elmhurst &amp; the DuPage/Cook County suburbs
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-(--color-paper)/60">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-(--color-accent)">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-medium hover:text-(--color-accent)">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-(--color-paper)/60">
              Service Areas
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {cities.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-(--color-accent)">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-area" className="font-medium hover:text-(--color-accent)">
                  All areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t-2 border-(--color-line-dark) pt-6 text-xs text-(--color-paper)/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/reviews" className="hover:text-(--color-accent)">
              Reviews
            </Link>
            <Link href="/privacy-policy" className="hover:text-(--color-accent)">
              Privacy Policy
            </Link>
            <a href={siteUrl} className="hover:text-(--color-accent)">
              {siteUrl.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
