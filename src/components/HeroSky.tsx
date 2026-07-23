/**
 * Open road / open sky scene for the hero — brings back the mood of the
 * original site's photo (a road stretching to the horizon under open sky)
 * without using stock photography. Built as a layered gradient + line
 * illustration in the site's teal/copper palette rather than a literal
 * photo-realistic scene.
 */
export function HeroSky({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 675"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#092b2e" />
          <stop offset="55%" stopColor="#123c40" />
          <stop offset="82%" stopColor="#2c5a58" />
          <stop offset="100%" stopColor="#4a7a70" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="100%" r="75%">
          <stop offset="0%" stopColor="#c96f3b" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#c96f3b" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#c96f3b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3e5a5c" />
          <stop offset="100%" stopColor="#092b2e" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="1200" height="675" fill="url(#sky)" />
      {/* low sun / warm glow near the horizon */}
      <rect x="0" y="380" width="1200" height="295" fill="url(#glow)" />

      {/* soft cloud bands, echoing the original photo's moody sky */}
      <g opacity="0.18" fill="#eef1f1">
        <ellipse cx="220" cy="140" rx="220" ry="20" />
        <ellipse cx="640" cy="90" rx="300" ry="16" />
        <ellipse cx="980" cy="180" rx="180" ry="14" />
      </g>

      {/* distant horizon silhouette */}
      <path
        d="M0 470 L140 458 L300 468 L460 452 L640 464 L820 450 L1000 462 L1200 452 L1200 480 L0 480 Z"
        fill="#092b2e"
        opacity="0.55"
      />

      {/* road */}
      <path d="M470 675 L555 480 L645 480 L740 675 Z" fill="url(#road)" />
      {/* center dashes converging to the vanishing point */}
      <g stroke="#eef1f1" strokeWidth="6" opacity="0.55">
        <line x1="600" y1="675" x2="598" y2="560" />
        <line x1="597" y1="530" x2="596" y2="480" />
      </g>
      {/* road edge lines */}
      <path d="M470 675 L555 480" stroke="#c96f3b" strokeWidth="3" opacity="0.7" />
      <path d="M740 675 L645 480" stroke="#c96f3b" strokeWidth="3" opacity="0.7" />
    </svg>
  );
}
