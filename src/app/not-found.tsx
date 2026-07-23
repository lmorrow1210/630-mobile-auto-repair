import Link from "next/link";
import { CallButton, SmsButton } from "@/components/CtaButtons";
import { business } from "@/data/business";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center md:py-28">
      <p className="font-display text-6xl font-bold text-(--color-accent)">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-(--color-ink)">Page Not Found</h1>
      <p className="mt-3 text-(--color-ink-soft) leading-relaxed">
        The page you&rsquo;re looking for doesn&rsquo;t exist. If you need a mobile mechanic, we&rsquo;re
        a call or text away.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <SmsButton placement="404_page" prefill={business.smsPrefillTemplate("")} />
        <CallButton placement="404_page" tone="outline" />
      </div>
      <Link href="/" className="mt-6 text-sm font-semibold text-(--color-ink-soft) hover:text-(--color-accent)">
        ← Back to home
      </Link>
    </section>
  );
}
