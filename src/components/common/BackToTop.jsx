import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

// A small round button that appears after you scroll down a screen or so.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll); // clean up
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition duration-300 hover:border-accent hover:text-accent ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <LuArrowUp aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
