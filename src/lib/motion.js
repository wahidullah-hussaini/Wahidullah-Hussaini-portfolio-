// Shared animation settings, so every page moves in the same way.
// (Reduced-motion is handled once, in main.jsx, with <MotionConfig>.)

export const easeOut = [0.22, 1, 0.36, 1];

// A child that fades in while sliding up a little
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

// A parent that reveals its children one after another
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// Used by PageTransition when you move between routes
export const pageVariants = {
  initial: { opacity: 0, y: 14 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};
