import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPage } from "@/components/CityPage";
import { cities } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};

  if (city.slug === "elmhurst") {
    return buildMetadata({
      title: "Mobile Mechanic in Elmhurst, IL",
      description:
        "Mobile auto repair at your Elmhurst home or workplace. Call or text 630 Mobile Auto Repair to discuss diagnostics, brakes, batteries, starters, alternators, and more.",
      path: "/elmhurst",
    });
  }

  return buildMetadata({
    title: `Mobile Mechanic in ${city.name}, IL`,
    description: `Mobile auto repair at your ${city.name} home or workplace. Call or text 630 Mobile Auto Repair for diagnostics, brakes, batteries, starters, alternators, and more.`,
    path: `/${city.slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  return <CityPage city={city} />;
}
