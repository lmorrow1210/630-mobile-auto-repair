"use client";

import { business } from "@/data/business";
import { trackEvent, deviceCategory } from "@/lib/analytics";

/**
 * Persistent bottom action bar, mobile only. Layout reserves space for this
 * (see `pb-24` on <main> and footer padding) so it never covers content.
 */
export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex md:hidden border-t border-(--color-line-dark) bg-(--color-ink) shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={business.telHref}
        onClick={() => trackEvent("sticky_call_click", { placement: "sticky_bar", device: deviceCategory() })}
        className="flex flex-1 min-h-14 items-center justify-center gap-2 border-r border-(--color-line-dark) text-(--color-paper) font-semibold text-base"
      >
        <PhoneIcon />
        Call
      </a>
      <a
        href={business.smsHref}
        onClick={() => trackEvent("sticky_sms_click", { placement: "sticky_bar", device: deviceCategory() })}
        className="flex flex-1 min-h-14 items-center justify-center gap-2 bg-(--color-accent) text-(--color-accent-contrast) font-semibold text-base"
      >
        <TextIcon />
        Text
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-4.4 3.3A.5.5 0 0 1 3.8 20V16H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}
