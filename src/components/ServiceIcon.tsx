import type { ServiceIconName } from "@/data/business";

const paths: Record<ServiceIconName, React.ReactNode> = {
  brake: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="16" height="10" rx="1.2" />
      <path d="M19 11h2v4h-2" />
      <path d="M7 8V6M13 8V6" />
      <path d="M8 13h2M12 13h2" />
    </>
  ),
  alternator: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 9.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5-1.3 2-3 2.5-3 1-3 2.5 1.3 2.5 3 2.5 3-1 3-2.5" />
    </>
  ),
  starter: (
    <>
      <rect x="4" y="9" width="10" height="6" rx="1" />
      <path d="M14 11h3.5c1 0 1.5.6 1.5 1.5v0c0 .9-.5 1.5-1.5 1.5H14" />
      <path d="M7 9V7M10 9V7" />
    </>
  ),
  diagnostics: (
    <>
      <rect x="3.5" y="4" width="17" height="13" rx="1.5" />
      <path d="M7 9l2.5 2.5L12 8l2 3 2.5-3" />
      <path d="M9 20h6" />
    </>
  ),
  ignition: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8v4l2.5 1.5" />
      <path d="M12 3v2M12 19v2" />
    </>
  ),
  radiator: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="1" />
      <path d="M8 5v14M12 5v14M16 5v14" />
    </>
  ),
  suspension: (
    <>
      <path d="M7 21V9" />
      <path d="M17 21V9" />
      <path d="M5 9h4M15 9h4" />
      <path d="M7 9c0-3 2-5 5-5s5 2 5 5" />
    </>
  ),
};

export function ServiceIcon({ name, className = "" }: { name: ServiceIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
