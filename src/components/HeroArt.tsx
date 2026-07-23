/**
 * Custom illustrated scene used in place of stock/placeholder photography.
 *
 * We don't have authentic photos of the actual van, mechanic, or customers,
 * and the truthfulness rules for this project prohibit implying a stock photo
 * is the real business. Rather than license a generic stock photo (which also
 * reads as a template), this is a bespoke line-illustration of a driveway
 * service call — car, open hood, toolbox — in the site's ink/accent palette.
 *
 * TODO(business): replace this component's usage in Hero.tsx with real
 * on-site photography once available (see README "Replacing photography").
 */
export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 600"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#26251d" />
          <stop offset="100%" stopColor="#14140f" />
        </linearGradient>
      </defs>
      <rect width="900" height="600" fill="url(#skyGrad)" />

      {/* driveway */}
      <path d="M0 470 L900 430 L900 600 L0 600 Z" fill="#201f18" />
      <path d="M0 470 L900 430" stroke="#3c3c33" strokeWidth="2" />

      {/* house edge, minimal */}
      <path d="M0 300 L220 300 L220 470 L0 500 Z" fill="#1c1c17" stroke="#33322a" strokeWidth="1.5" />
      <rect x="40" y="340" width="60" height="80" fill="#26251d" stroke="#3c3c33" />

      {/* car body */}
      <g>
        <path
          d="M470 430 C470 380 500 340 560 335 L640 330 C690 328 720 350 735 385 L760 430 Z"
          fill="none"
          stroke="#e7c9a9"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M735 385 C760 385 800 388 830 400 L840 430"
          fill="none"
          stroke="#e7c9a9"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M470 430 L840 430" stroke="#e7c9a9" strokeWidth="3" />
        <circle cx="520" cy="432" r="26" fill="#14140f" stroke="#e7c9a9" strokeWidth="3" />
        <circle cx="770" cy="432" r="26" fill="#14140f" stroke="#e7c9a9" strokeWidth="3" />
        {/* open hood */}
        <path d="M560 335 L520 300 L460 300 L470 400" fill="none" stroke="#c7551a" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
      </g>

      {/* figure crouched at engine bay */}
      <g stroke="#faf9f5" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M400 430 C400 405 412 388 430 383" />
        <circle cx="437" cy="368" r="10" fill="#faf9f5" stroke="none" />
        <path d="M430 383 L468 358" />
        <path d="M400 430 L392 460" />
        <path d="M420 400 L410 430" />
      </g>

      {/* toolbox */}
      <g>
        <rect x="330" y="450" width="54" height="32" rx="3" fill="#c7551a" />
        <path d="M340 450 V438 a12 12 0 0 1 24 0 V450" fill="none" stroke="#c7551a" strokeWidth="4" />
        <rect x="330" y="450" width="54" height="8" fill="#a8460f" />
      </g>

      {/* subtle road/perspective lines for depth */}
      <g stroke="#33322a" strokeWidth="2">
        <path d="M0 560 L900 540" />
        <path d="M0 590 L900 585" />
      </g>
    </svg>
  );
}
