import { motion, useReducedMotion } from "motion/react";
import { isCurrentStrength } from "../../lib/skills";
import { techIcons } from "./techIcons";

/**
 * One skill: logo, name, the percentage as plain text, and a bar.
 * The bar fills once, when it scrolls into view.
 *
 * The meaning never depends on colour or animation alone:
 *  - the percentage is always readable text,
 *  - "Strength" / "Developing" is written out,
 *  - developing skills use a striped bar, strengths a solid one.
 */
export default function SkillBar({ id, label, level }) {
  const Icon = techIcons[id];
  const strong = isCurrentStrength(level);
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="flex items-center gap-2.5 text-sm font-medium">
          {Icon && <Icon aria-hidden="true" className="h-4 w-4 text-muted" />}
          {label}
        </p>
        <p className="flex items-baseline gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {strong ? "Strength" : "Developing"}
          </span>
          <span className="font-mono text-sm tabular-nums">{level}%</span>
        </p>
      </div>

      {/* The track is a fixed height, so filling the bar never moves the page */}
      <div aria-hidden="true" className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-line">
        <motion.div
          className={`h-full rounded-full ${strong ? "bar-strength" : "bar-developing"}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
