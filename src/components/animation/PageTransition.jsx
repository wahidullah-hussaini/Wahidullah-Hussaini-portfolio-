import { motion } from "motion/react";
import { pageVariants } from "../../lib/motion";

// Wrap a page in this and it fades/slides in when you arrive and
// fades out when you leave. AppRoutes uses it for every route.
export default function PageTransition({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}
