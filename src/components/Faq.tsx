"use client";

import { useState } from "react";
import Script from "next/script";
import type { FaqItem } from "@/data/business";
import { faqSchema } from "@/lib/seo";

/**
 * Accessible accordion. Items with a null answer are skipped entirely —
 * we never render an invented answer just to fill the list. FAQ structured
 * data mirrors only the questions/answers actually rendered on the page.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  const answered = items.filter((item): item is FaqItem & { answer: string } => item.answer != null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(answered)) }}
      />
      <h2 className="font-display text-3xl font-bold text-(--color-ink)">Frequently Asked Questions</h2>
      <div className="mt-8 divide-y divide-(--color-line) border-y border-(--color-line)">
        {answered.map((item, i) => {
          const open = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <div key={item.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left font-semibold text-(--color-ink)"
                >
                  {item.question}
                  <ChevronIcon open={open} />
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="pb-4">
                <p className="text-(--color-ink-soft) leading-relaxed">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
