// Three layers of mountain ridges, far to near. Each layer is a simple
// polygon: "M x y L x y ..." draws straight lines between points, and
// "Z" closes the shape. The colours come from the theme variables.

export default function MountainSilhouette({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        fill="var(--mtn-far)"
        d="M0 220 L120 160 L220 200 L360 110 L470 190 L600 130 L720 200 L860 90 L980 170 L1100 120 L1220 190 L1340 140 L1440 180 L1440 320 L0 320 Z"
      />
      <path
        fill="var(--mtn-mid)"
        d="M0 260 L90 210 L200 250 L330 180 L450 240 L580 190 L700 255 L820 200 L960 250 L1080 195 L1200 245 L1320 205 L1440 240 L1440 320 L0 320 Z"
      />
      <path
        fill="var(--mtn-near)"
        d="M0 300 L140 265 L260 290 L400 250 L540 290 L680 270 L820 295 L960 262 L1100 292 L1240 268 L1440 296 L1440 320 L0 320 Z"
      />
    </svg>
  );
}
