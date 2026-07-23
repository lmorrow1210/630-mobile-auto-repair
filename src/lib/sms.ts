/**
 * SMS deep-link helper.
 *
 * iOS and Android disagree on the separator for a prefilled body:
 *   iOS:     sms:+1XXXXXXXXXX&body=...
 *   Android: sms:+1XXXXXXXXXX?body=...
 * There's no server-side way to reliably detect the platform before the link
 * is rendered (and UA sniffing is unreliable/SSR-hostile), so we detect on
 * the client at click time and fall back to the iOS separator for the
 * (rare, JS-disabled) server-rendered href — the link still opens the
 * Messages app with the correct number either way, just without prefill text.
 */

export function buildSmsHref(phoneE164: string, body?: string): string {
  if (!body) return `sms:${phoneE164}`;
  // Default/SSR fallback uses iOS-style separator.
  return `sms:${phoneE164}&body=${encodeURIComponent(body)}`;
}

export function smsHrefForClient(phoneE164: string, body?: string): string {
  if (!body) return `sms:${phoneE164}`;
  if (typeof navigator === "undefined") return buildSmsHref(phoneE164, body);
  const isAndroid = /android/i.test(navigator.userAgent);
  const separator = isAndroid ? "?" : "&";
  return `sms:${phoneE164}${separator}body=${encodeURIComponent(body)}`;
}
