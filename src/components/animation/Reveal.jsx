import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";

/**
 * Wrap anything in <Reveal> and it fades in and slides up the first time
 * it scrolls into view. `delay` (in seconds) lets neighbours appear one
 * after another:  <Reveal delay={0.1}>  <Reveal delay={0.2}> ...
 * (Reduced-motion is handled once for the whole site in main.jsx.)
 */
export default function Reveal({ children, className = "", delay = 0 }) {
  const variants = {
    hidden: fadeUp.hidden,
    show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
