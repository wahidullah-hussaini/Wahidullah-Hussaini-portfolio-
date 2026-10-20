import { site } from "../../data/site";

// The "WH" logo mark: a thin square frame with a small amber star in the corner.
export default function Monogram({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-line font-mono text-xs font-medium tracking-wider text-fg ${className}`}
    >
      {site.initials}
      <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
  );
}
