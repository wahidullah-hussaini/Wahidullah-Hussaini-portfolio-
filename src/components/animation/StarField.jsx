// A quiet night sky behind the whole site: a faint blueprint grid, a warm glow
// rising from below, and small twinkling stars (dark theme only; the light
// theme hides them with --star-opacity in index.css).
//
// The stars are made ONCE when the file loads, with a "seeded" random number
// generator, so they are the same on every render. No animation library is
// used: the twinkle is plain CSS, which keeps it cheap on phones.

function seededRandom(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = seededRandom(1383);

const STARS = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  left: `${(random() * 100).toFixed(2)}%`,
  top: `${(random() * 70).toFixed(2)}%`, // upper 70% of the screen only
  size: random() > 0.85 ? 3 : 2,
  opacity: (0.25 + random() * 0.55).toFixed(2),
  delay: `${(random() * 5).toFixed(2)}s`,
  duration: `${(4 + random() * 4).toFixed(2)}s`,
}));

export default function StarField() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="blueprint-grid absolute inset-0" />
      <div className="sky-glow absolute inset-0" />
      <div className="absolute inset-0" style={{ opacity: "var(--star-opacity)" }}>
        {STARS.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              "--o": star.opacity,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
