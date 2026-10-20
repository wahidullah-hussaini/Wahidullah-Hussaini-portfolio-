// The heading style used at the top of every home-page section:
// a small mono label ("02 — Projects") above a large serif title.
// `id` lets the <section> point at this heading with aria-labelledby.
export default function SectionHeading({ id, number, label, title, children, className = "" }) {
  return (
    <div className={className}>
      <p className="eyebrow">
        {number} — {label}
      </p>
      <h2 id={id} className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 max-w-xl leading-relaxed text-muted">{children}</p>}
    </div>
  );
}
