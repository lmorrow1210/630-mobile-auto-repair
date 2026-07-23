"use client";

import { business } from "@/data/business";
import { trackEvent, deviceCategory, type AnalyticsEvent } from "@/lib/analytics";
import { smsHrefForClient } from "@/lib/sms";

type ButtonTone = "accent" | "dark" | "outline" | "ghost";

const toneClasses: Record<ButtonTone, string> = {
  accent:
    "bg-(--color-accent) text-(--color-accent-contrast) hover:bg-(--color-accent-dark) border border-transparent",
  dark: "bg-(--color-ink) text-(--color-paper) hover:bg-(--color-charcoal-soft) border border-transparent",
  outline:
    "bg-transparent text-(--color-ink) border border-(--color-ink) hover:bg-(--color-ink) hover:text-(--color-paper)",
  ghost:
    "bg-transparent text-(--color-paper) border border-(--color-paper)/40 hover:bg-(--color-paper)/10",
};

type CallButtonProps = {
  label?: string;
  tone?: ButtonTone;
  placement: string;
  event?: AnalyticsEvent;
  className?: string;
};

export function CallButton({
  label,
  tone = "accent",
  placement,
  event = "hero_call_click",
  className = "",
}: CallButtonProps) {
  return (
    <a
      href={business.telHref}
      onClick={() => trackEvent(event, { placement, device: deviceCategory() })}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors ${toneClasses[tone]} ${className}`}
    >
      <PhoneIcon />
      {label ?? `Call ${business.phoneDisplay}`}
    </a>
  );
}

type SmsButtonProps = {
  label?: string;
  tone?: ButtonTone;
  placement: string;
  prefill?: string;
  event?: AnalyticsEvent;
  className?: string;
};

export function SmsButton({
  label = "Text Us for a Quote",
  tone = "dark",
  placement,
  prefill,
  event = "hero_sms_click",
  className = "",
}: SmsButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(event, { placement, device: deviceCategory() });
    // Resolve the platform-correct sms: href at click time.
    e.currentTarget.href = smsHrefForClient(business.phoneE164, prefill);
  };

  return (
    <a
      href={business.smsHref}
      onClick={handleClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors ${toneClasses[tone]} ${className}`}
    >
      <TextIcon />
      {label}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-4.4 3.3A.5.5 0 0 1 3.8 20V16H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}
