"use client";

import { business, testimonials } from "@/data/business";
import { trackEvent } from "@/lib/analytics";

export function Testimonials({ heading = "What Elmhurst Customers Are Saying" }: { heading?: string }) {
  const hasRating = business.review.rating != null && business.review.reviewCount != null;

  return (
    <section className="bg-(--color-paper-alt) py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-bold text-(--color-ink)">{heading}</h2>
          {hasRating && (
            <a
              href={business.review.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("review_link_click", { placement: "reviews_section" })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-ink-soft) hover:text-(--color-accent)"
            >
              <StarRow />
              {business.review.rating!.toFixed(1)} on Google ({business.review.reviewCount} reviews) →
            </a>
          )}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="border-2 border-(--color-ink) bg-(--color-paper) p-6"
            >
              <p className="text-(--color-ink) leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-(--color-ink-soft)">
                — {t.author}, {t.city}
                {t.sourceUrl && (
                  <>
                    {" "}
                    ·{" "}
                    <a href={t.sourceUrl} className="underline hover:text-(--color-accent)">
                      Source
                    </a>
                  </>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarRow() {
  return (
    <span className="inline-flex text-(--color-accent)" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6z" />
        </svg>
      ))}
    </span>
  );
}
