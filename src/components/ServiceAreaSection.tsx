import Link from "next/link";
import { cities, type City } from "@/data/business";

export function ServiceAreaSection({ currentCity }: { currentCity?: City }) {
  const heading = currentCity
    ? `Mobile Auto Repair Throughout ${currentCity.name}`
    : "Where We Serve";

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="font-display text-3xl font-bold text-(--color-ink)">{heading}</h2>
      <p className="mt-3 max-w-2xl text-(--color-ink-soft) leading-relaxed">
        We provide mobile automotive service at suitable homes, workplaces, and parking locations
        throughout {currentCity ? currentCity.name : "Elmhurst"} and nearby communities in DuPage
        and Cook County.
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link
              href={`/${city.slug}`}
              className={`inline-flex min-h-11 items-center rounded-sm border-2 px-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                currentCity?.slug === city.slug
                  ? "border-(--color-accent) bg-(--color-accent) text-(--color-accent-contrast)"
                  : "border-(--color-ink) text-(--color-ink-soft) hover:bg-(--color-ink) hover:text-(--color-paper)"
              }`}
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
