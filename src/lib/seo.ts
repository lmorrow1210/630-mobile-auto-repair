import type { Metadata } from "next";
import { business, siteUrl } from "@/data/business";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string; // e.g. "/elmhurst" or "/services/brake-repair"
  noIndex?: boolean;
};

export function buildMetadata({ title, description, path, noIndex }: BuildMetadataArgs): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** LocalBusiness / AutomotiveBusiness structured data using only verified config values. */
export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: business.name,
    legalName: business.legalName,
    telephone: business.phoneE164,
    email: business.email,
    url: siteUrl,
    areaServed: "DuPage County and Cook County, Illinois",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: business.hours.days,
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
  };

  // Only include a rating if a real, verified rating exists — never a fabricated default.
  if (business.review.rating != null && business.review.reviewCount != null) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.review.rating,
      reviewCount: business.review.reviewCount,
    };
  }

  return schema;
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
