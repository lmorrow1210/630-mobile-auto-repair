import { business } from "@/data/business";

/**
 * Only verified trust signals render. Each item is conditional on its
 * underlying config value being non-null — no empty badges, ever.
 */
export function TrustStrip() {
  const items: string[] = ["All makes and models", "Home & workplace service", business.hours.label];

  if (business.credentials.insured) items.push("Insured");
  if (business.credentials.licensed) items.push("Licensed");
  if (business.credentials.aseCertified) items.push("ASE certified");
  if (business.warranty) items.push(business.warranty);

  return (
    <div className="border-y border-(--color-line) bg-(--color-paper-alt)">
      <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm font-medium text-(--color-ink-soft) md:justify-between md:px-6">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-(--color-accent)">
      <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
