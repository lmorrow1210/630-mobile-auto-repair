"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { CallButton } from "@/components/CtaButtons";
import { business } from "@/data/business";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-area", label: "Service Area" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-(--color-ink) bg-(--color-charcoal-soft)">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo variant="light" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--color-paper)/80 hover:text-(--color-paper) transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-semibold text-(--color-paper) hover:text-(--color-accent) transition-colors"
          >
            Contact
          </Link>
          <CallButton placement="header" event="header_call_click" label={business.phoneDisplay} />
        </div>

        {/* Mobile: primary action is visible without opening the menu. */}
        <div className="flex items-center gap-2 lg:hidden">
          <CallButton
            placement="header_mobile"
            event="header_call_click"
            tone="accent"
            label="Call"
            className="px-4"
          />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border-2 border-(--color-paper)/50 text-(--color-paper)"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="lg:hidden border-t-2 border-(--color-ink) bg-(--color-charcoal-soft) px-4 py-4"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-12 py-3 text-base font-medium text-(--color-paper) border-b border-(--color-paper)/20"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block min-h-12 py-3 text-base font-semibold text-(--color-accent)"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
