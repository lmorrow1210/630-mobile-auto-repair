import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${business.name}.`,
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />
      <section className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="font-display text-4xl font-bold text-(--color-ink)">Privacy Policy</h1>
        <div className="mt-6 space-y-5 text-(--color-ink-soft) leading-relaxed">
          <p>
            {business.legalName} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates this website. This policy
            explains what information we collect through the site and how it&rsquo;s used.
          </p>

          <h2 className="pt-2 text-lg font-semibold text-(--color-ink)">Information We Collect</h2>
          <p>
            This site does not have a contact form — every &ldquo;Call&rdquo; or &ldquo;Text&rdquo;
            button simply opens your own device&rsquo;s phone or messaging app addressed to{" "}
            {business.phoneDisplay}. We don&rsquo;t collect, receive, or store anything you type on this
            website itself.
          </p>
          <p>
            If you call or text {business.phoneDisplay} directly, that phone number and any messages you
            send are handled through standard carrier phone/text service and are visible to us as the
            recipient, the same as any other call or text conversation.
          </p>

          <h2 className="pt-2 text-lg font-semibold text-(--color-ink)">How Information Is Used</h2>
          <p>
            Information you share by phone or text is used only to respond to your service request. We
            do not sell your information, and contacting us does not enroll you in marketing text
            messages.
          </p>

          <h2 className="pt-2 text-lg font-semibold text-(--color-ink)">Analytics</h2>
          <p>
            This site may record anonymous, aggregate interaction events (for example, which button was
            clicked and on which page) to understand how the site is used. These events do not include
            your name, phone number, or email.
          </p>

          <h2 className="pt-2 text-lg font-semibold text-(--color-ink)">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${business.email}`} className="text-(--color-accent) hover:underline">
              {business.email}
            </a>
            .
          </p>

          {/* TODO(verify): have this policy reviewed by counsel before launch; update this date whenever data handling changes. */}
          <p className="pt-4 text-sm text-(--color-ink-soft)/80">Last updated: July 22, 2026.</p>
        </div>
      </section>
    </>
  );
}
