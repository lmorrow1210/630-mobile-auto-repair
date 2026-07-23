"use client";

/**
 * Minimal analytics event hook.
 *
 * No analytics provider is wired up yet (none was found in the source project).
 * This pushes structured events to `window.dataLayer` (GTM/GA4 convention) when
 * present, and always logs to the console in development so events are visible
 * without any provider configured.
 *
 * NEVER pass personal information (name, phone, email, vehicle problem text)
 * as an event parameter — only placement/page/device/service context.
 */

export type AnalyticsEvent =
  | "hero_call_click"
  | "header_call_click"
  | "sticky_call_click"
  | "hero_sms_click"
  | "sticky_sms_click"
  | "footer_call_click"
  | "quote_form_start"
  | "quote_form_submit"
  | "quote_form_success"
  | "quote_form_error"
  | "service_card_click"
  | "review_link_click"
  | "final_cta_click";

export type AnalyticsContext = {
  page?: string;
  placement?: string;
  service?: string;
  city?: string;
  device?: "mobile" | "desktop";
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent, context: AnalyticsContext = {}) {
  if (typeof window === "undefined") return;

  const payload = { event, ...context };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", payload);
  }
}

export function deviceCategory(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  return window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";
}
