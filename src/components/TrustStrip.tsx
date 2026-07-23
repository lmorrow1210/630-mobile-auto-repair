import { business } from "@/data/business";

/**
 * Only verified trust signals render. Each item is conditional on its
 * underlying config value being non-null — no empty badges, ever.
 * Styled as a ticket line (mono labels, hard dividers) rather than
 * rounded-pill badges.
 */
export function TrustStrip() {
  const items: string[] = ["All makes and models", "Home & workplace service", business.hours.label];

  if (business.credentials.insured) items.push("Insured");
  if (business.credentials.licensed) items.push("Licensed");
  if (business.credentials.aseCertified) items.push("ASE certified");
  if (business.warranty) items.push(business.warranty);

  return (
    <div className="border-b-2 border-(--color-ink) bg-(--color-paper-alt)">
      <ul className="mx-auto flex max-w-6xl flex-wrap px-4 md:px-6">
        {items.map((item, i) => (
          <li
            key={item}
            className={`flex items-center gap-2 py-3 pr-6 font-mono text-xs font-semibold uppercase tracking-wide text-(--color-ink) ${
              i > 0 ? "border-l-2 border-(--color-line-dark)/30 pl-6" : ""
            }`}
          >
            <span className="text-(--color-accent)">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
