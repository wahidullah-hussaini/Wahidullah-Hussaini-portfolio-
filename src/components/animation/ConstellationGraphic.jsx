import { motion, useReducedMotion } from "motion/react";

// A small star map used in the mission section.
// Three named stars (Learn, Build, Contribute) are joined by an amber line:
// the journey this portfolio is about. The other stars are just sky.
// Coordinates are inside a 480 x 320 drawing; the SVG scales to its box.

const STARS = [
  [40, 60], [120, 30], [200, 90], [330, 40], [430, 110],
  [60, 190], [270, 250], [410, 250], [150, 140],
];

const FAINT_LINES = [
  [[40, 60], [120, 30]],
  [[120, 30], [200, 90]],
  [[200, 90], [150, 140]],
  [[330, 40], [430, 110]],
  [[270, 250], [410, 250]],
];

const NAMED = [
  { name: "Learn", x: 70, y: 262, anchor: "start", dx: 12 },
  { name: "Build", x: 230, y: 160, anchor: "middle", dx: 0 },
  { name: "Contribute", x: 400, y: 70, anchor: "end", dx: -12 },
];

export default function ConstellationGraphic({ className = "" }) {
  const reduceMotion = useReducedMotion();
  const draw = (delay) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: reduceMotion ? 0 : 1.2, delay: reduceMotion ? 0 : delay, ease: "easeInOut" },
  });

  return (
    <svg
      viewBox="0 0 480 320"
      role="img"
      aria-label="A star map joining three points: Learn, Build and Contribute"
      className={className}
    >
      {FAINT_LINES.map(([[x1, y1], [x2, y2]]) => (
        <line
          key={`${x1}-${y1}-${x2}-${y2}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="var(--muted)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}

      {/* The journey: Learn -> Build -> Contribute */}
      <motion.line x1="70" y1="262" x2="230" y2="160" stroke="var(--accent)" strokeWidth="1.5" {...draw(0.1)} />
      <motion.line x1="230" y1="160" x2="400" y2="70" stroke="var(--accent)" strokeWidth="1.5" {...draw(0.9)} />

      {STARS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="var(--muted)" />
      ))}

      {NAMED.map(({ name, x, y, anchor, dx }) => (
        <g key={name}>
          <circle cx={x} cy={y} r="9" fill="none" stroke="var(--accent)" strokeOpacity="0.4" />
          <circle cx={x} cy={y} r="4.5" fill="var(--accent)" />
          <text
            x={x + dx}
            y={y + (name === "Build" ? 28 : -16)}
            textAnchor={anchor}
            fill="var(--fg)"
            fontSize="13"
            letterSpacing="1.5"
            fontFamily="var(--font-mono)"
          >
            {name.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}
